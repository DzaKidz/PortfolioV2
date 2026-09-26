const fs = require("fs");

function show(file, lines) {
  const all = fs.readFileSync(file, "utf8").split(/\r?\n/);
  for (const n of lines) {
    const s = all[n - 1] || "";
    const codes = Array.from(s)
      .map((c) => c.codePointAt(0).toString(16).padStart(4, "0"))
      .join(" ");
    console.log(`${file}:${n} ${JSON.stringify(s)}`);
    console.log("   codes: " + codes);
  }
}

show("app/page.tsx", [38, 39, 40, 41, 42]);
show("app/globals.css", [2, 3, 4, 5]);

// scan: find all runs that look corrupted (start char code 0x80..0x2400 specials)
const CP = new Map([
  [0x20ac, 0x80],[0x201a,0x81],[0x0192,0x82],[0x201e,0x83],[0x2026,0x84],
  [0x2020,0x85],[0x2021,0x86],[0x02c6,0x87],[0x2030,0x88],[0x0160,0x89],
  [0x2039,0x8a],[0x0152,0x8b],[0x017d,0x8d],[0x2018,0x91],[0x2019,0x92],
  [0x201c,0x93],[0x201d,0x94],[0x2022,0x95],[0x2013,0x96],[0x2014,0x97],
  [0x02dc,0x98],[0x2122,0x99],[0x0161,0x9a],[0x203a,0x9b],[0x0153,0x9c],
  [0x017e,0x9e],[0x0178,0x9f],
]);

function toBytes(str) {
  const out = [];
  for (const ch of str) {
    const c = ch.codePointAt(0);
    if (c < 0x80) out.push(c);
    else if (CP.has(c)) out.push(CP.get(c));
    else if (c >= 0xa0 && c <= 0xff) out.push(c);
    else return null;
  }
  return Buffer.from(out);
}

for (const f of ["app/globals.css","app/page.tsx","app/about/page.tsx","app/contact/page.tsx","app/portfolio/page.tsx"]) {
  const s = fs.readFileSync(f, "utf8");
  const arr = Array.from(s);
  let issues = 0, fixedRuns = 0, badRuns = [];
  let i = 0;
  const out = [];
  while (i < arr.length) {
    const c = arr[i].codePointAt(0);
    if (c >= 0x80 && c <= 0xff) {
      // possible corrupted run start
      let j = i;
      const run = [];
      while (j < arr.length) {
        const cj = arr[j].codePointAt(0);
        const isHigh = (cj >= 0x80 && cj <= 0xff) || (cj >= 0x100 && cj <= 0x2400 && CP.has(cj));
        if (!isHigh) break;
        run.push(arr[j]);
        const b = toBytes(run.join(""));
        if (b) {
          const dec = b.toString("utf8");
          if (!dec.includes("\ufffd") && Buffer.from(dec, "utf8").equals(b)) {
            out.push(dec);
            fixedRuns++;
            j++;
            i = j;
            break;
          }
        }
        j++;
        if (run.length > 6) break;
      }
      if (i !== j) continue;
      badRuns.push(run.join(""));
      issues++;
      out.push(arr[i]);
      i++;
    } else {
      out.push(arr[i]);
      i++;
    }
  }
  console.log(`${f}: runs=${fixedRuns} unresolved=${badRuns.length} ${JSON.stringify(badRuns)}`);
}
