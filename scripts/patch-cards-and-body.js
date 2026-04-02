/**
 * Strategic card default, heading-card → H3 utility, body → body-text, fix card-lg.
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..", "app");

const STRATEGIC =
  "bg-background rounded-lg p-6 md:p-8 border border-transparent transition-all duration-300 hover:border-border";

function walk(dir, out = []) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    if (fs.statSync(p).isDirectory()) walk(p, out);
    else if (name === "page.tsx" && !p.endsWith(`${path.sep}app${path.sep}page.tsx`)) out.push(p);
  }
  return out;
}

function patch(s) {
  let c = s;
  c = c.replace(/className="card-lg"/g, `className="${STRATEGIC}"`);
  c = c.replace(/className="heading-card"/g, 'className="text-lg font-semibold text-primary font-sans"');
  c = c.replace(/className="body"/g, 'className="body-text"');
  c = c.replace(/className="body-text cta-block__sub"/g, 'className="body cta-block__sub"');
  return c;
}

const files = walk(ROOT);
let n = 0;
for (const file of files) {
  const orig = fs.readFileSync(file, "utf8");
  let next = patch(orig);
  if (next !== orig) {
    fs.writeFileSync(file, next);
    n++;
    console.log(path.relative(path.join(__dirname, ".."), file));
  }
}
console.log("files:", n);
