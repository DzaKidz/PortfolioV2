const fs = require("fs");

const CP = new Map([
  [0x20ac,0x80],[0x201a,0x81],[0x0192,0x82],[0x201e,0x83],[0x2026,0x84],
  [0x2020,0x85],[0x2021,0x86],[0x02c6,0x87],[0x2030,0x88],[0x0160,0x89],
  [0x2039,0x8a],[0x0152,0x8b],[0x017d,0x8d],[0x2018,0x91],[0x2019,0x92],
  [0x201c,0x93],[0x201d,0x94],[0x2022,0x95],[0x2013,0x96],[0x2014,0x97],
  [0x02dc,0x98],[0x2122,0x99],[0x0161,0x9a],[0x203a,0x9b],[0x0153,0x9c],
  [0x017e,0x9e],[0x0178,0x9f],
]);

function cpByte(c) {
  if (c < 0x80) return c;
  if (CP.has(c)) return CP.get(c);
  if (c >= 0xa0 && c <= 0xff) return c;
  return null;
}

function utf8ok(buf) {
  const s = buf.toString("utf8");
  if (s.includes("\ufffd")) return false;
  return Buffer.from(s, "utf8").equals(buf);
}

function repair(file) {
  const s = fs.readFileSync(file, "utf8");
  const arr = Array.from(s);
  const out = [];
  let i = 0;
  let fixed = 0;
  let unresolved = [];
  while (i < arr.length) {
    const c = arr[i].codePointAt(0);
    if (c >= 0x80 && c <= 0xff) {
      const bytes = [];
      const chars = [];
      let j = i;
      let done = false;
      while (j < arr.length && bytes.length <= 4) {
        const b = cpByte(arr[j].codePointAt(0));
        if (b === null) break;
        bytes.push(b);
        chars.push(arr[j]);
        const buf = Buffer.from(bytes);
        if (utf8ok(buf)) {
          out.push(buf.toString("utf8"));
          fixed++;
          i = j + 1;
          done = true;
          break;
        }
        j++;
      }
      if (done) continue;
      unresolved.push(chars.join("") || arr[i]);
      out.push(arr[i]);
      i++;
    } else {
      out.push(arr[i]);
      i++;
    }
  }
  const next = out.join("");
  if (fixed > 0) fs.writeFileSync(file, next, "utf8");
  console.log(`${file}: fixed=${fixed} unresolved=${unresolved.length} ${JSON.stringify(unresolved.slice(0, 5))}`);
}

const files = process.argv.slice(2);
for (const f of files) repair(f);
