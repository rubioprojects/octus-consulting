/**
 * Apply py-24 md:py-32 + alternating bg-background / surface-elevated to <section> blocks.
 * Hero: page-hero → surface-dark flex hero. Skips cta-block, home-hero.
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..", "app");

const HERO =
  "surface-dark relative flex min-h-[70vh] flex-col justify-center pt-24 pb-16 md:min-h-[80vh] md:pt-28 md:pb-24";

function walk(dir, out = []) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    const st = fs.statSync(p);
    if (st.isDirectory()) walk(p, out);
    else if (name === "page.tsx") {
      if (p.endsWith(`${path.sep}app${path.sep}page.tsx`)) continue; /* homepage hand-styled */
      out.push(p);
    }
  }
  return out;
}

function patchContent(s) {
  let c = s.replace(
    /<section className="page-hero section-padded">/g,
    `<section className="${HERO}">`
  );

  let idx = 0;
  c = c.replace(
    /<section\s+className="([^"]*)"(?:\s+style=\{\{[^}]*\}\})?\s*>/g,
    (full, cls) => {
      if (cls.includes("cta-block")) return full;
      if (cls.includes("home-hero")) return full;
      if (cls.includes("surface-dark relative flex min-h-[70vh]")) return full;
      /* Already migrated homepage / hand-tuned sections */
      if (cls.includes("py-24")) return full;
      if (cls.includes("py-16") && cls.includes("border-b")) return full;
      if (cls.includes("operate-section")) return full;
      const bg = idx % 2 === 0 ? "bg-background" : "surface-elevated";
      idx++;
      return `<section className="${bg} py-24 md:py-32">`;
    }
  );
  return c;
}

const files = walk(ROOT);
let n = 0;
for (const file of files) {
  const orig = fs.readFileSync(file, "utf8");
  const next = patchContent(orig);
  if (next !== orig) {
    fs.writeFileSync(file, next);
    n++;
    console.log("sections:", path.relative(path.join(__dirname, ".."), file));
  }
}
console.log("files updated:", n);
