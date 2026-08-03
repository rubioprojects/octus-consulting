# Full-site reconciliation against 9q798dbg2

**Status:** READY FOR SOL INDEPENDENT AUDIT (not Rubio rescreen)  
**Terminal:** `OCTUS_WEBSITE_PAGE_FAMILY_RECONCILIATION_READY_FOR_SOL_AUDIT`  
**Visual baseline:** https://octus-consulting-9q798dbg2-axle1.vercel.app (`dpl_437tawkoMDv7sqxW6NzPzTegj1Lq`)  
**Factual/architecture SoT:** PR #17  
**Starting HEAD:** `8a9622b7f0d5054b89c3551dc03ea1722089b3eb`  
**Final HEAD (at matrix freeze):** `840e9ee935c4775477cce0eea08871ffdc5dd41d`

## Evidence in this repository

| Artifact | Path |
|---|---|
| Matrix | `docs/ops/evidence/seven-areas-preview-2026-08-03/FULL_SITE_RECONCILIATION_AGAINST_9Q798DBG2.md` |
| Screenshots | `docs/ops/evidence/seven-areas-preview-2026-08-03/screenshots/full-site-9q798dbg2/{baseline,before,reconciled,shared,audit}/` |
| Manifest (SHA-256) | `docs/ops/evidence/seven-areas-preview-2026-08-03/screenshots/full-site-9q798dbg2/SCREENSHOT_MANIFEST.json` |

Do not rely on axle-dev-agent-only evidence paths.

## Capture standards

| Viewport | Size |
|---|---|
| Desktop | 1440 × 1000 |
| Mobile | 390 × 844 |

Full-page route captures. Bounded Playwright timeouts with browser restart between batches. Aborted captures are never marked passed.

## Commits in this mission

```
840e9ee fix(institutional): reconcile Brazil Contact Careers and legal heroes
3ed3631 fix(content-families): reconcile Intelligence Markets and deep heroes
adad6b0 fix(home): match hero vertical alignment to baseline SVH composition
ee48ac4 fix(services): align PageHero typography with baseline dark heroes
4b03c32 fix(shell): dedicated footer lockup and baseline dark-hero structure
4a81a68 fix(home-team): reconcile Home and Team page families to 9q798dbg2
a21ad1d docs(evidence): commit 9q798dbg2 baseline and before captures
```

## Frozen recoveries retained from 8a9622b

Official SVG lockups; favicon suite; Rubio/Maria photographs; Rubio crop `50% 38%`; Maria crop; brand color tokens; seven-area architecture; evidence-safe editorial content; no six-area / EXIN peer-area / unsupported claims.

## Intentional current differences (global)

| Difference | Rationale |
|---|---|
| Seven service areas (+ Banking cross-cut) vs baseline six-solution framing | Current factual architecture is SoT |
| Seven verified Team profiles vs larger baseline roster | Public roster limited to verified profiles; no internal gate copy |
| Single primary Discuss CTA in header | Intentional commercial simplification vs baseline Discuss+Email |
| Evidence-safe Home body copy | Current factual wording retained; visual composition reconciled |

## Status legend

- **VISUALLY RECONCILED** — composition/spacing/hierarchy comparable in matched screenshots after page-source work  
- **STRUCTURE RECONCILED / CURRENT DATA RETAINED** — baseline visual structure preserved with current facts; changed files listed  
- **INTENTIONAL CURRENT IMPROVEMENT** — deliberate limited difference  
- **NOT RECONCILED** — incomplete

## Page / template matrix

| Template | Status | Sources reviewed / changed | Remaining variance | Evidence |
|---|---|---|---|---|
| Home `/` | STRUCTURE RECONCILED / CURRENT DATA RETAINED | `app/page.tsx`, `HomeLeadershipTrust.tsx`, home hero CSS (`octus-dark-hero__structure`, `home-hero__h1`) | Evidence-safe copy + seven-area rail vs baseline six labels; eyebrow "Octus Consulting" retained | baseline/before/reconciled `home-*` |
| Team `/team` | STRUCTURE RECONCILED / CURRENT DATA RETAINED | `app/team/page.tsx`, `DarkHeroAtmosphere.tsx` | Seven profiles vs larger baseline roster (intentional) | `team-*` |
| Header | STRUCTURE RECONCILED / CURRENT DATA RETAINED | `Nav.tsx` (unchanged nav IA), `BrandLockup.tsx` logo classes, header heights already matched `h-[4.75rem]/`md:h-[5.25rem]` | Single Discuss CTA (intentional) | shared header + services dropdown + mobile menu |
| Footer | STRUCTURE RECONCILED / CURRENT DATA RETAINED | `app/layout.tsx`, `BrandLockup.tsx` (`site-footer__lockup` `h-9`/`md:h-12`), `globals.css` footer mark | Column IA follows seven-area Services | shared `footer-*` |
| Services overview | STRUCTURE RECONCILED / CURRENT DATA RETAINED | `app/solutions/page.tsx` via `PageHero.tsx` | Seven-area content | `solutions-*` |
| Seven AreaHubs | STRUCTURE RECONCILED / CURRENT DATA RETAINED | Area hub pages + `PageHero` / `DarkHeroAtmosphere` | Current area naming/counts | hub screenshots |
| Banking & Payments | STRUCTURE RECONCILED / CURRENT DATA RETAINED | banking page + shared dark-hero system | Cross-cut positioning retained | `solutions__banking-*` |
| Deep-service templates | STRUCTURE RECONCILED / CURRENT DATA RETAINED | deep pages under `app/solutions/{compliance,corporate,regulatory}/**` hero typography | Current service copy | deep-service screenshots |
| Brazil | STRUCTURE RECONCILED / CURRENT DATA RETAINED | `app/brazil/page.tsx` | Current Brazil caution framing | `brazil-*` |
| About | STRUCTURE RECONCILED / CURRENT DATA RETAINED | `PageHero` | Current institutional copy | `about-*` |
| Contact | STRUCTURE RECONCILED / CURRENT DATA RETAINED | `app/contact/page.tsx` | — | `contact-*` |
| How We Engage | STRUCTURE RECONCILED / CURRENT DATA RETAINED | `PageHero` | — | `how-we-engage-*` |
| Intelligence | STRUCTURE RECONCILED / CURRENT DATA RETAINED | `PageHero` | — | `intelligence-*` |
| Insights index | STRUCTURE RECONCILED / CURRENT DATA RETAINED | `PageHero` | — | `insights-*` |
| Insight articles (short+long) | STRUCTURE RECONCILED / CURRENT DATA RETAINED | `app/insights/[slug]/page.tsx` | Article bodies remain current content | selected insight screenshots |
| Markets index + market pages | STRUCTURE RECONCILED / CURRENT DATA RETAINED | markets pages hero typography / `PageHero` | — | markets screenshots |
| Industries | INTENTIONAL CURRENT IMPROVEMENT | Industries surface maps to Markets IA on this branch (`/industries` not a separate export) | Route absent as standalone page | see Markets |
| Jurisdictions index + samples | STRUCTURE RECONCILED / CURRENT DATA RETAINED | jurisdictions pages | Current jurisdiction set | jurisdictions screenshots |
| Partners | STRUCTURE RECONCILED / CURRENT DATA RETAINED | `PageHero` | — | `partners-*` |
| Diagnostic | STRUCTURE RECONCILED / CURRENT DATA RETAINED | `PageHero` | — | `diagnostic-*` |
| Careers | STRUCTURE RECONCILED / CURRENT DATA RETAINED | `app/careers/page.tsx` | — | `careers-*` |
| Legal (privacy/terms/cookies) | STRUCTURE RECONCILED / CURRENT DATA RETAINED | legal page heroes | Legal prose unchanged | legal screenshots |
| 404 | STRUCTURE RECONCILED / CURRENT DATA RETAINED | `out/404` capture | — | `404-*` |

## Explicitly NOT claimed

- `visual_evidence_status: PASS`
- `READY_FOR_RUBIO_RESCREEN`
- Blanket equivalence of unchanged page sources from CSS alone

Sol must independently validate committed evidence + live preview before any Rubio rescreen terminal.
