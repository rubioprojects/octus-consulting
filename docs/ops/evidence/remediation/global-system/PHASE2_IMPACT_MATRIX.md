# Phase 2 — Global visual system impact matrix

**Baseline:** https://octus-consulting-9q798dbg2-axle1.vercel.app (`dpl_437tawkoMDv7sqxW6NzPzTegj1Lq`)  
**Before (Phase 1 tip):** https://octus-consulting-2dz7kf23q-axle1.vercel.app (`0654dc1`)  
**Starting HEAD:** `0654dc1247967bcc36d760f47ae0654ff3814aa3`  
**Computed probe:** `audit/GLOBAL_COMPUTED_COMPARE.json`, `audit/GLOBAL_ROUTE_SHELL_PROBE.json`

Rollback for all rows: `git revert` Phase 2 implementation commit(s); restore `accepted_phase1_head`.

| Component / token | Baseline rendered | Current (before) | File(s) | Intended correction | Routes affected | Recapture routes | Intentional difference? |
|---|---|---|---|---|---|---|---|
| primary logo / header logo | SVG nav-on-dark/light; h≈36 / w≈171.4 | Match | `BrandLockup.tsx`, `lib/brand.ts`, `public/brand/lockup/*` | Preserve official SVG; keep h-8/md:h-9 | all | header light/dark | No |
| footer logo | horizontal-primary-on-dark; h≈48 / w≈182.6 | Match | `BrandLockup` surface=footer, `layout.tsx` | Preserve dedicated footer sizing | all | footer d/m | No |
| header height | 84px desktop | 84px desktop / 76px mobile | `Nav.tsx` | Preserve | all | header strips | No |
| header spacing | max-w-7xl + px-4/6/8 | Match | `Nav.tsx` | Preserve | all | header | No |
| desktop navigation | Solutions/Markets + Discuss + Email | Services/Industries + Discuss only | `Nav.tsx` | Preserve seven-area labels + single CTA | all | header, Services dropdown | **Yes — IA + CTA** |
| Services dropdown | N/A (Solutions IA) | Seven-area menu | `Nav.tsx`, `lib/publicAreas.ts` | Preserve seven-area dropdown | all | services-dropdown | **Yes — IA** |
| mobile navigation | baseline hamburger geometry | current panel | `Nav.tsx` | Keep working panel; no page content changes | all | mobile open/closed | No |
| typography families | Unigeo64 + Inter | Match | `layout.tsx`, `globals.css` | Preserve | all | home/team H1 samples | No |
| heading weights / scale | Unigeo 600 on home H1 ~53.6px | Match within page CSS | `globals.css` tokens | Preserve shared tokens; page hero composition later | many | / | No |
| body scale / line heights | Inter body | Match | `globals.css` | Preserve | all | /about | No |
| primary blue | `--primary` 215 100% 38% / #0052C4 | Match | `globals.css` | Preserve | all | buttons | No |
| navy | `--brand-navy` 220 48% 8% / #0B1220 | Match | `globals.css` | Preserve | all | header/footer | No |
| red | `--brand-red` 0 99% 37% | Match | `globals.css` | Preserve | labels | — | No |
| light / elevated surfaces | bg 50 10% 98%; elevated 220 28% 96% | Match | `globals.css` | Preserve | all | light header routes | No |
| border / text colors | `#0b1220` / `#3d4654` | Match | `globals.css` | Preserve | all | — | No |
| containers | max-w-7xl = 1280px; pad 32px | Match | Tailwind + Nav/layout | Preserve; avoid page-specific spacing hacks | all | — | No |
| gutters / section spacing | oct space scale | Match | `globals.css` | Preserve | all | — | No |
| buttons | primary #0052C4, rounded-sm | Match | `globals.css`, Nav CTA | Preserve | all | header CTA | No |
| cards | shared `.card` | Match | `globals.css` | Preserve shared only | many | — | No |
| dark hero atmosphere | shared component + CSS | Present | `DarkHeroAtmosphere.tsx`, `.octus-dark-hero*` | Preserve; do not edit `.home-hero*` page rules | dark pages | / /team /solutions | No |
| footer | padT 80px; lockup 48px | Match | `layout.tsx`, `.site-footer*` | Preserve shell | all | footer d/m | No |
| WhatsApp | bottom/right **24px**; no cookie-lift class | bottom **20px**; cookie-lift **92px** | `globals.css` `.wa-float` (!important block), `CookieBanner.tsx` | Align resting geometry to **24×24**; remove baseline-absent cookie lift | all | WA light/dark | No — **material fix** |
| cookies | essential Continue bar | Match behavior | `CookieBanner.tsx`, `.cookie-banner` | Preserve essential-only Continue | all | cookie initial/accepted | No |
| focus treatment | outline 2px offset | Present | Nav link/cta classes, WA focus-visible | Preserve / harden if regression | all | focus samples | No |
| favicon | `/brand/favicons/octus-favicon-blue.svg` + png suite | Present | `layout.tsx`, `public/**` | Preserve | all | favicon tab sim | No |

## Deferred (not Phase 2)

| Item | Why deferred |
|---|---|
| `/contact` and `/brazil` light vs dark header vs baseline | Driven by page hero markup (`PageHero` / dark heroes) — Phase 5 |
| Homepage hero composition | Phase 3 |
| Service family page layouts | Phase 4 |
| Team roster / portraits | Phase 1 locked |

## Representative recapture set (after implementation)

Routes: `/`, `/team`, `/solutions`, `/solutions/regulatory-structuring`, one deep service, `/brazil`, `/about`, `/contact`, `/how-we-engage`, `/intelligence`, `/insights`, one insight, `/markets`, one market, `/jurisdictions`, one jurisdiction, `/careers`, `/privacy`.

Shared: header light/dark, Services dropdown, mobile menu closed/open, logo d/m, footer d/m, favicon, WA light/dark, cookies initial/accepted, dark hero atmosphere.

Team regression: full / leadership / core / Rubio / Maria — desktop + mobile.
