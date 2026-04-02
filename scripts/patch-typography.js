/**
 * Typography alignment: heading-md → heading-section, hero H1/P classes.
 * Skips homepage (app/page.tsx).
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..", "app");

const H1_HERO =
  "font-heading text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[3.5rem]";

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
  c = c.replace(/className="heading-md"/g, 'className="heading-section"');
  c = c.replace(/className="heading-xl sp-headline"/g, `className="${H1_HERO} sp-headline"`);
  c = c.replace(/className="body-lg sp-sub"/g, 'className="text-lg leading-relaxed text-white/60 max-w-2xl"');
  c = c.replace(
    /className="body sp-sub" style=\{\{ marginTop: "16px", color: "var\(--white-40\)" \}\}/g,
    'className="mt-4 max-w-2xl text-base leading-relaxed text-white/60"'
  );
  c = c.replace(
    /className="body-lg sp-sub" style=\{\{ maxWidth: "620px" \}\}/g,
    'className="max-w-xl text-lg leading-relaxed text-white/60"'
  );
  c = c.replace(
    /className="body-lg sp-sub" style=\{\{ maxWidth: "640px" \}\}/g,
    'className="max-w-xl text-lg leading-relaxed text-white/60"'
  );
  c = c.replace(
    /className="body-lg sp-sub" style=\{\{ maxWidth: "640px", marginTop: "16px" \}\}/g,
    'className="mt-4 max-w-xl text-lg leading-relaxed text-white/60"'
  );
  return c;
}

const files = walk(ROOT);
let n = 0;
for (const file of files) {
  const orig = fs.readFileSync(file, "utf8");
  const next = patch(orig);
  if (next !== orig) {
    fs.writeFileSync(file, next);
    n++;
    console.log(path.relative(path.join(__dirname, ".."), file));
  }
}
console.log("files:", n);
