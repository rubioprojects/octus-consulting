# Exact old brand component alignment

**Mission:** `OCTUS_WEBSITE_EXACT_OLD_BRAND_ALIGNMENT`  
**PR:** [#17](https://github.com/rubioprojects/octus-consulting/pull/17)  
**Terminal:** `OCTUS_WEBSITE_EXACT_OLD_BRAND_ALIGNMENT_READY`  
**Date:** 2026-08-02

## Baseline

| Item | Value |
|------|--------|
| Starting HEAD | `ece2c1c401498e930dcbf175f859b09d8e26a371` |
| Final HEAD | `573864b511adff474cd89aca63f0f180ebe41328` |
| Preview | `https://octus-consulting-j0pr9jgsz-axle1.vercel.app` |
| Visual reference | commit `8b12fcc` / https://octus-consulting-6dieznt51-axle1.vercel.app/ |
| Header lockup | `/brand/lockup/octus-lockup-nav-on-light.svg` (dark header: `/brand/lockup/octus-lockup-nav-on-dark.svg`) |
| Footer lockup | `/brand/lockup/octus-lockup-horizontal-primary-on-dark.svg` |
| Mobile rail | static two-column grid (`.capability-rail__static-grid`) |
| Desktop rail duration | `72s` linear infinite (`octus-capability-marquee`) |
| Leadership | exact circular crop + blue ring from `8b12fcc` CSS |
| Merge | not performed |
| Production deploy | not performed |

## Changes

1. **BrandLockup** uses official SVG masters only — no HTML/CSS `OCTUS` wordmark.
2. **Footer brand-close** uses one primary dark lockup; removed `OCTUS CONSULTING` duplicate text.
3. **Mobile footer** uses `<details>`/`<summary>` accordions for Services / Industries / Engage / Company / Legal; desktop keeps five columns (`md:grid` / `md:hidden` accordion stack).
4. **Capability rail:** mobile static 2-col grid; desktop marquee slowed to 72s; decorative track `aria-hidden`.
5. **Leadership** photo CSS restored to circular 148/168px with blue ring; titles remain Founder & CEO / Operations Coordination.

## Preserved

Hero, seven-area architecture, copy, SEO/routes/redirects, CTAs, cookie/WhatsApp behaviour, area dark heroes.

## Screenshots

`docs/ops/evidence/seven-areas-preview-2026-08-02/screenshots/brand-alignment/`

| Subject | Old | Updated |
|---------|-----|---------|
| Desktop header | `old/header-1440x1000.png` | `updated/header-1440x1000.png` |
| Mobile header | `old/header-390x844.png` | `updated/header-390x844.png` |
| Desktop rail | `old/rail-1440x1000.png` | `updated/rail-1440x1000.png` |
| Mobile rail | `old/rail-390x844.png` | `updated/rail-390x844.png` |
| Desktop leadership | `old/leadership-1440x1000.png` | `updated/leadership-1440x1000.png` |
| Mobile leadership | `old/leadership-390x844.png` | `updated/leadership-390x844.png` |
| Desktop footer | `old/footer-1440x1000.png` | `updated/footer-1440x1000.png` |
| Collapsed mobile footer | `old/footer-collapsed-390x844.png` | `updated/footer-collapsed-390x844.png` |
| Expanded mobile footer | (accordion expand) | `updated/footer-expanded-390x844.png` |

Also captured: `updated/header-1280x800.png`, `updated/header-375x812.png`.

## Validation

| Check | Result |
|-------|--------|
| Build / tsc | PASS |
| Viewports 1440 / 1280 / 390 / 375 | PASS |
| Official header SVG | PASS |
| Official footer SVG (single) | PASS |
| No HTML wordmark | PASS (`html_wordmark=0`) |
| No footer duplicate wordmark | PASS |
| Mobile footer accordions (5) | PASS |
| Desktop columns / accordion mutually exclusive | PASS |
| Mobile rail static | PASS |
| Desktop marquee 72s | PASS |
| Leadership circular + titles | PASS (`Managing Director=0`) |
| Cookie / WhatsApp overlap | none |
| Merge / production | none |

Functional JSON: `screenshots/brand-alignment/functional.json`
