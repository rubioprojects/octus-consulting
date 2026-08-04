# Phase 6 — Final Regression Control Inventory

**Phase:** 6 Final Regression Hard Gate  
**Starting HEAD / accepted Phase 5C evidence HEAD:** `b617338510c030dccc6eac0f03d01e4042ca5532`  
**Accepted Phase 5C application SHA:** `c467ccf0bfa3a8a2df1ac7a58c7b29c8c169d62b`  
**Accepted Phase 5C immutable preview:** https://octus-consulting-84n1zaqys-axle1.vercel.app  
**Accepted Phase 5C deployment:** `dpl_8q5VbqyqV5vZxazerUKHco7VFCiW`  
**Baseline SoT (visual only):** https://octus-consulting-9q798dbg2-axle1.vercel.app (`dpl_437tawkoMDv7sqxW6NzPzTegj1Lq`)  
**Baseline Git SHA:** `8b12fcc88922e6ed07b98dd40da0a27bde71bbf9`  
**Inventory date:** 2026-08-04

## Objective

Prove approved phases coexist without regression. Close three bound residuals. Produce Sol-only final candidate terminal. **Not a redesign.**

## Bound residuals (must close or disposition)

| ID | Opening state | Required action |
|---|---|---|
| `HOME_PUNCTUATION_RESIDUAL_001` | Exactly one em dash in Homepage leadership copy | Replace per D-014 final text; full-site rendered em/en dash scan = 0 |
| `GLOBAL_A11Y_REGION_RESIDUAL_001` | `.wa-float` outside landmark | Add semantic landmark; preserve geometry/CTA |
| `AXE_INCOMPLETE_REVIEW_001` | Outstanding incomplete Axe results | Classify every incomplete in disposition register |

## Allowed mutations (residual closure only)

| Path | Why |
|---|---|
| `components/system/HomeLeadershipTrust.tsx` | Punctuation residual (D-014) |
| `app/layout.tsx` | WhatsApp landmark wrapper only |
| `app/globals.css` | Only if landmark host requires geometry-preserving CSS (minimal) |
| `docs/ops/evidence/remediation/final/**` | Evidence + validators + disposition |

## Freeze / stop conditions

If defect requires Team roster change, Services architecture change, Homepage redesign beyond punctuation, Markets/Jurisdictions/Brazil reopen, or Intelligence/Legal redesign → **BLOCKED**.

## Unique templates for final evidence

Homepage · Team · Services overview · seven hubs · Banking · deep service · About · How We Engage · Contact · Diagnostic · Partners · Careers · Markets · Jurisdictions · Brazil · Intelligence · Insights · article · Legal (privacy/terms/cookies) · Compliance Channel · 404

## Terminal

`OCTUS_FINAL_SITE_CANDIDATE_READY_FOR_SOL_AUDIT`  
Rubio rescreen: **BLOCKED until final Sol audit**  
No merge · no production · no rebase · do not claim `READY_FOR_RUBIO_RESCREEN`
