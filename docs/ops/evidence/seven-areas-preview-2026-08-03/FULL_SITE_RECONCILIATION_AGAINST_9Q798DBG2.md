# Full-site reconciliation against 9q798dbg2

**Status:** IN PROGRESS — page-family reconciliation for Sol independent audit  
**Visual baseline:** https://octus-consulting-9q798dbg2-axle1.vercel.app (`dpl_437tawkoMDv7sqxW6NzPzTegj1Lq`)  
**Factual/architecture SoT:** PR #17 branch  
**Starting HEAD:** `8a9622b7f0d5054b89c3551dc03ea1722089b3eb`  
**Terminal target:** `OCTUS_WEBSITE_PAGE_FAMILY_RECONCILIATION_READY_FOR_SOL_AUDIT`

## Evidence location (in this repository)

- Matrix: `docs/ops/evidence/seven-areas-preview-2026-08-03/FULL_SITE_RECONCILIATION_AGAINST_9Q798DBG2.md`
- Screenshots: `docs/ops/evidence/seven-areas-preview-2026-08-03/screenshots/full-site-9q798dbg2/{baseline,before,reconciled,shared,audit}/`
- Manifest: `docs/ops/evidence/seven-areas-preview-2026-08-03/screenshots/full-site-9q798dbg2/SCREENSHOT_MANIFEST.json`

## Capture standards

| Viewport | Size |
|---|---|
| Desktop | 1440 × 1000 |
| Mobile | 390 × 844 |

Full-page captures. Bounded Playwright timeouts. Aborted captures are not marked passed.

## Snapshot stages

| Stage | Commit / URL | Notes |
|---|---|---|
| baseline | live `9q798dbg2` / `dpl_437tawkoMDv7sqxW6NzPzTegj1Lq` | Visual SoT |
| before | `8a9622b` local static export | Asset recovery only; page families not reconciled |
| reconciled | post page-family commits | Filled in final validation commit |

## Classification rule

A page may only receive:

- `VISUALLY RECONCILED`
- `STRUCTURE RECONCILED / CURRENT DATA RETAINED`
- `INTENTIONAL CURRENT IMPROVEMENT`
- `NOT RECONCILED`

No blanket “STRUCTURE RECONCILED” without per-template source review + screenshot evidence.

## Page matrix (preliminary — before page-family code)

| Route / template | Status | Source inspected | Notes |
|---|---|---|---|
| `/` Home | NOT RECONCILED (as of 8a9622b) | `app/page.tsx`, `HomeLeadershipTrust`, hero CSS | Arc/mark vs baseline structure motif |
| `/team` | NOT RECONCILED (as of 8a9622b) | `app/team/page.tsx` | Hero typography/atmosphere |
| Header/Footer | PARTIAL (assets only) | `Nav.tsx`, `BrandLockup.tsx`, `layout.tsx` | Footer lockup sizing not baseline |
| Remaining templates | NOT RECONCILED (as of 8a9622b) | shared DarkHeroAtmosphere / PageHero | Await page-family commits |

## Frozen accepted recoveries from 8a9622b

Official SVG lockups, favicon suite, Rubio/Maria portraits, Rubio crop 50% 38%, Maria crop, brand tokens, seven-area IA, evidence-safe copy.

## Intentional current differences (global)

- Seven service areas + Banking cross-cut (vs baseline six-solution framing)
- Seven verified Team profiles (vs larger historical roster)
- Single primary commercial CTA in header (baseline also showed Email CTA)
- Evidence-safe wording retained over obsolete EXIN / “not a law firm” / peer-area framing

