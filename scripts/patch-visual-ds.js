/**
 * One-off visual DS patches: primary CTA + container wrapper.
 * Does not alter copy, hrefs, or section order.
 * Note: If re-running, exclude <div className="cta-block__inner"> — restore manually if needed.
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..", "app");

const PRIMARY_BTN =
  "inline-flex h-12 items-center justify-center rounded-full bg-primary px-10 text-base font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90";

const CONTAINER = "max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8";

function walk(dir, out = []) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    const st = fs.statSync(p);
    if (st.isDirectory()) walk(p, out);
    else if (name === "page.tsx" || name === "DiagnosticClient.tsx") out.push(p);
  }
  return out;
}

const files = walk(ROOT);
let total = 0;
for (const file of files) {
  let s = fs.readFileSync(file, "utf8");
  const orig = s;
  s = s.replace(/className="btn-primary btn-primary-lg"/g, `className="${PRIMARY_BTN}"`);
  s = s.replace(/className='btn-primary btn-primary-lg'/g, `className='${PRIMARY_BTN}'`);
  s = s.replace(/className="container"/g, `className="${CONTAINER}"`);
  if (s !== orig) {
    fs.writeFileSync(file, s);
    total++;
    console.log("patched:", path.relative(path.join(__dirname, ".."), file));
  }
}
console.log("files changed:", total);
