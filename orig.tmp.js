const fs = require("fs");
const files = ["app/page.tsx", "app/globals.css", "app/about/page.tsx", "app/contact/page.tsx", "app/portfolio/page.tsx"];
for (const f of files) {
  console.log("=== " + f);
  const lines = fs.readFileSync(f, "utf8").split(/\r?\n/);
  lines.forEach((l, i) => {
    const cps = Array.from(l).filter((c) => c.codePointAt(0) > 0x7f).map((c) => c.codePointAt(0));
    if (!cps.length) return;
    const allLatin = cps.every((c) => c >= 0xa0 && c <= 0xff || c > 0x2000);
    if (allLatin) return; // common punctuation/accents we expect
    console.log(`${i + 1}: ${JSON.stringify(l.trim().slice(0, 140))} :: ${cps.map((c) => c.toString(16)).join(",")}`);
  });
}
