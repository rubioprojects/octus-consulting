# Sol audit closeout — validation register

Date: 2026-08-03T17:25:49.272Z
HEAD: `ffa5c8899b00278b952d329d9d6d129385dc2dc2`
Overall: **PASS** (18 PASS / 0 FAIL)

| Check | Status | Command |
|---|---|---|
| build | PASS | `npm run build` |
| typecheck | PASS | `npx tsc --noEmit` |
| route_crawl | PASS | `node scripts/sol-audit-closeout-validate.cjs (listHtml on out/)` |
| metadata | PASS | `grep meta/title in out/index.html` |
| canonical | PASS | `grep rel=canonical in out/index.html` |
| redirects | PASS | `inspect /Users/devrubio/Developer/Octus/octus-consulting/next.config.js + out routes` |
| internal_links | PASS | `parse page href=/ from out/index.html against out/*.html (exclude assets)` |
| prohibited_copy | PASS | `scan out/**/*.html for prohibited phrases + word-boundary EXIN` |
| favicon_assets | PASS | `fs.existsSync public favicon suite` |
| portrait_assets | PASS | `hash public/**/{rubio,maria}* images` |
| preview_noindex | PASS | `curl -sI https://octus-consulting-4lpoce2i8-axle1.vercel.app/ \| check x-robots-tag: noindex` |
| horizontal_overflow_desktop | PASS | `playwright measure documentElement.scrollWidth vs clientWidth @1440x1000 /` |
| accessibility_desktop | PASS | `playwright a11y basics (alt/lang/h1) @desktop` |
| whatsapp_overlap_desktop | PASS | `playwright elementFromPoint center of .wa-float @desktop` |
| horizontal_overflow_mobile | PASS | `playwright measure documentElement.scrollWidth vs clientWidth @390x844 /` |
| accessibility_mobile | PASS | `playwright a11y basics (alt/lang/h1) @mobile` |
| whatsapp_overlap_mobile | PASS | `playwright elementFromPoint center of .wa-float @mobile` |
| cookie_behavior | PASS | `playwright show banner → Continue → hidden + localStorage` |
