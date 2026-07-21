# Octus — Final Brand Application Review (Wave 2.1)

**Mission:** `OCTUS_WEBSITE_WAVE_2_1_FINAL_BRAND_POLISH`  
**Architecture baseline:** `602ae189`  
**Date:** 2026-07-21

## Canva assets reviewed

**Status:** `CANVA_ACCESS_UNAVAILABLE`

No Canva MCP / authenticated Canva session is available in this Cursor environment. Official brand masters were therefore **not** downloaded or re-exported in this pass.

### Assets requested but not accessible from Canva

- Logo masters (full lockups, clearspace)
- Symbol variations / construction geometry
- Official iconography pack
- Typography specimen / usage rules beyond site CSS
- Graphic patterns / presentation motifs
- Social crop templates

### Repo assets used (approved in-product)

| Asset | Path | Usage |
|-------|------|--------|
| Nav lockup (light) | `/public/logo-nav-light.png` | Header |
| Nav lockup (dark) | `/public/logo-nav.png` | Footer |
| Symbol | `/public/logo-symbol.png` | Available; strip uses vector mark |
| Vertical clean | `/public/logo-vertical-clean.png` | Available |
| Strip mark (SVG) | `components/OctusStripSeparatorIcon.tsx` | Authority strip separators (geometry matches Octus mark) |
| Stroke icons | `components/icons/OctusIcon.tsx` | Single-family interim set |

**Rule:** Do not invent new brand marks. Prefer Canva export when access is restored.

## Approved decisions (this wave)

| Topic | Decision |
|-------|----------|
| Secondary hero CTA | Replace “Request a diagnostic →” with **“Assess your situation →”** (WhatsApp prefill updated). Primary remains **Discuss your operation →**. |
| Footer IA | Remove “What we do”. Columns: Solutions (5 links) · Markets (4, Digital Assets label) · Company (5) · Legal. Routes retained; presentation only. |
| Button language | Prefer `rounded-sm`, tracking, institutional height — avoid SaaS `rounded-full` pills on CTAs. |
| Authority strip | Non-interactive practice-area rail; Octus mark separators; quieter type; not a second nav. |
| Trust | No testimonials, certificate walls, or client logos added. |
| Iconography | No new invented icon family; document Canva gap. |

## Remaining brand gaps

1. Import official Canva SVG symbol / icon pack when access available.  
2. Align `OctusIcon` paths to Canva geometry if masters differ.  
3. Optional proprietary diagrams (jurisdiction maps, structural lines) — only from approved assets.  
4. Presentation / social patterns still Canva-only.  
5. Human pass on cookie vs WhatsApp float spacing (prior Wave 2 note).

## Evidence (Wave 2.1)

Local static export screenshots:

- `docs/design/evidence/wave2-1/home-desktop.png`
- `docs/design/evidence/wave2-1/home-mobile.png`
- `docs/design/evidence/wave2-1/home-desktop-full.png`
- `docs/design/evidence/wave2-1/home-mobile-full.png`
- `docs/design/evidence/wave2-1/footer-desktop.png`
- `docs/design/evidence/wave2-1/header-desktop.png`
- `docs/design/evidence/wave2-1/authority-strip-desktop.png`
- `docs/design/evidence/wave2-1/cta-states-desktop.png`
- `docs/design/evidence/wave2-1/icon-usage-desktop.png`
- `docs/design/evidence/wave2-1/mobile-menu-wa-cookie.png`
- `docs/design/evidence/wave2-1/validation.json`

## Future improvements (not in this wave)

- Full button audit on every deep page for leftover pills  
- Footer link to `/solutions` index if desired  
- Diagnostic page title/copy soft-rename to “assessment” (content rewrite — deferred)
- Import Canva SVG symbol / icon pack when Canva access is restored
