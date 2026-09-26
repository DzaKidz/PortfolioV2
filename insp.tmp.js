const fs = require("fs");
const files = process.argv.slice(2);
for (const f of files) {
  const s = fs.readFileSync(f, "utf8");
  const arr = s.split(/\r?\n/);
  let hits = 0;
  arr.forEach((line, idx) => {
    const codes = Array.from(line).map((c) => c.codePointAt(0)).filter((c) => c >= 0x80 && c <= 0xff);
    if (codes.length) {
      hits++;
      console.log(
        `${f}:${idx + 1} ${JSON.stringify(line.slice(0, 160))} :: ${codes.map((c) => c.toString(16)).join(",")}`
      );
    }
  });
  const em = (s.match(/\u2014/g) || []).length;
  const mid = (s.match(/\u00b7/g) || []).length;
  console.log(`  >> ${f}: linesWithLatin1=${hits} emdash=${em} middot=${mid}`);
}
