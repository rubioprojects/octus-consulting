# Phase 4 Services — Accessibility & Validator Final Remediation

**Terminal:** `OCTUS_SERVICES_A11Y_REMEDIATION_READY_FOR_SOL_AUDIT`  
**PR:** https://github.com/rubioprojects/octus-consulting/pull/17  
**Date:** 2026-08-04

## Gate status

| Gate | Result |
|---|---|
| PHASE4_HARD_GATE (Sol) | Ready for Sol audit — not claimed as accepted |
| Phase 5 | BLOCKED |
| Rubio rescreen | BLOCKED |
| Merge / production / rebase | NOT performed |

## Immutable preview (final)

| Field | Value |
|---|---|
| Preview | https://octus-consulting-beqxfdqrk-axle1.vercel.app |
| Deployment ID | `dpl_Fx8deWwccpuH6U3WhWzpUWr5g5kT` |
| Deployment Git SHA | `3345f8b91923a66c0eb671786c3296ed9e9fc89a` |
| Exact application-code SHA | `eac4e514ea751314774f3e69f71ebd52245d2534` |
| Prior closeout preview (superseded) | https://octus-consulting-eyjy9sxq7-axle1.vercel.app |

## Commits

| Role | SHA |
|---|---|
| Mission starting HEAD | `886553b5395acec7492c4096645f592b14b232e6` |
| Accessibility (initial serious fixes) | `d895dc94594ef3bb88def3d4c308451609df08e9` |
| Accessibility (footer + decorative numerals) | `20b3ae40f03ee9f3017c98e24ddbb227fdcfed0c` |
| Accessibility (homepage accordion restore) | `eac4e514ea751314774f3e69f71ebd52245d2534` |
| Catalogue shared-URL classification | `84094f0d148a6fb8115ec7df10f03ad5a7e76140` |
| Interaction + catalogue validator harden | `bcd116dfdb3ab760e38d8a250a1dfb5f0bd309bd` |
| Tab-order / interaction validator follow-ups | `3345f8b` → `8a241c8` |

## Application mutations (narrow)

1. `/solutions` — eyebrow labels `text-primary/80` → `text-primary` (contrast AA).
2. Homepage step numerals — decorative CSS `::before` + `aria-hidden` (not meaningful text).
3. Deep pages — UAE / Portugal / Anjouan inline links get persistent underline (link-in-text-block).
4. Global footer bar — raise meta/link contrast on `surface-dark` (full-document Axe serious; required for serious:0).
5. Homepage modules accordion — toggle collapse + `aria-controls` so Enter/Space/mouse restore works.

`HOME_PUNCTUATION_RESIDUAL_001` preserved exactly once (main em dash count = 1). No service copy rewrite. No seven-area redesign.

## Axe (@axe-core/playwright + axe-core 4.12.1)

- Include: complete document (nav + footer not excluded)
- Routes: 20 mandatory Phase 4 + Homepage
- Viewports: desktop 1440×1000, mobile 390×844

| Impact | Count |
|---|---|
| critical | 0 |
| serious | 0 |
| moderate | 42 (region / `.wa-float` landmarks) |
| minor | 0 |
| incomplete | 64 (recorded; not treated as serious/critical pass substitute) |

Affected nodes before → after (targeted defects):

| Surface | Before | After |
|---|---|---|
| `/solutions` eyebrows | color-contrast serious (text-primary/80) | cleared |
| `/` step numerals | color-contrast serious (text-primary/20) | decorative; not serious |
| deep jurisdiction links | link-in-text-block serious | cleared (underline) |
| footer bar meta/links | color-contrast serious (rgba 0.34) | cleared (rgba 0.72) |

## Interaction / tab order

- All visible disclosure triggers tested independently (mouse / Enter / Space): **0 failures**
- Totals across routes×viewports: triggers 229; mouse/enter/space pass 229 each; panel_pass 687; panel_fail 0
- Tab order: expected === reached; skipped 0; unexpected 0; every reached control had visible focus indicator

## Catalogue

- 39 services: raw=unique for publicAreas, catalog, register, architecture
- 34 families: raw=unique in architecture
- Deep routes (11) equal across architecture dedicatedRoutes, register, inventory, live preview, canonicals
- Orphans: 0
- Unclassified shared destinations: 0 (all shared URLs classified in PHASE4_PUBLIC_SERVICE_REGISTER.md)
- Source discrepancies: []

## Evidence

- Recaptured reconciled chapters for `/solutions`, fintech-licensing, holding-design, offshore-structuring (desktop+mobile)
- Homepage Phase 3 evidence updated for how-we-work + full (desktop/mobile); residual punctuation untouched
- Baseline/before preserved; screenshot count remains **272**; **34** reconciled hashes changed

## Regression (validator closeout)

build PASS · tsc PASS · route crawl 200 · aliases strict PASS · noindex PASS · home residual PASS · team PASS · institutional PASS · claims preserved · catalogue PASS · Axe PASS · interactions PASS
