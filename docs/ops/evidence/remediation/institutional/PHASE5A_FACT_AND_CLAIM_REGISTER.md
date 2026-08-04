# Phase 5A — Fact and Claim Register

**Status:** IN PROGRESS (updated at closeout)  
**Rule:** Unsupported claims → qualify or remove. Do not invent partnerships, vacancies, SLAs, offices, or guarantees.

## Bound residuals (carry-forward)

| Residual ID | Owner | Current status | Final-candidate blocking | Required closure evidence |
|---|---|---|---|---|
| `HOME_PUNCTUATION_RESIDUAL_001` | Phase 6 | OPEN · exactly one Homepage em dash | Yes | Homepage punctuation rewrite + Phase 6 validator |
| `GLOBAL_A11Y_REGION_RESIDUAL_001` | Phase 6 | OPEN · Axe moderate `region` on `.wa-float` (42 route/viewport hits at Phase 4) | Yes | Landmark/region disposition without silent PASS |
| `AXE_INCOMPLETE_REVIEW_001` | Phase 6 | OPEN · 64 incomplete Axe checks at Phase 4 | Yes | Manual disposition register |

## Contact identity (approved sources: `lib/cta.ts` + footer/legal)

| Claim | Value | Status |
|---|---|---|
| Brand | Octus Consulting | RETAINED |
| Legal entity | Octus Technology LLC | RETAINED (footer; not required on Contact body) |
| Email | info@octusconsulting.com | RETAINED · verified in `lib/cta.ts` |
| WhatsApp | +55 11 97427-3000 (`wa.me/5511974273000`) | RETAINED · verified in `lib/cta.ts` |
| Address | 900 Foulk Rd Suite 201, Wilmington, DE 19803 | RETAINED in footer only · not invented on Contact |
| Response SLA “within 24 hours” | was in `contact/layout.tsx` metadata | **REMOVED** (unverified) |
| Careers email | talentos@octusconsulting.com | RETAINED on Careers EOI only |

## About

| Claim | Disposition |
|---|---|
| Operating since 2019 | RETAINED · verified public operating year |
| Markets/jurisdiction chip list | QUALIFIED as experience markets (not exclusive office footprint) |
| SPA/MF, MGA, GLI naming | QUALIFIED · coordination / workstream language; not formal partnership or preferred-provider claim |
| Rubio / Maria titles | Not asserted on About body; Team lock remains SoT |
| Guaranteed licensing/banking outcomes | Absent · PASS |

## How We Engage

| Claim | Disposition |
|---|---|
| Four engagement models | RETAINED · evidence-safe operating models |
| Explicit non-guarantee of regulator/bank outcomes | RETAINED |
| Internal taxonomy marketed as product SKUs | Avoided |

## Diagnostic

| Claim | Disposition |
|---|---|
| Strategic conversation / WA assessment | RETAINED |
| Site HTML form with CRM/webhook | **None** — no live POST surface |
| Privacy / sensitive-info notice | ADDED page-level notice for conversation intake |
| Real lead submission in tests | **None** |

## Partners

| Claim | Disposition |
|---|---|
| Named partners / logos / exclusivity | Absent · PASS |
| Partner classes | RETAINED · generic categories · approval note retained |
| Formal partnership / preferred-provider / regulator relationship | Not claimed |

## Careers

| Claim | Disposition |
|---|---|
| Open vacancies | **None published** · EOI model retained |
| “Across four operational areas” | REWRITTEN · recruiting capability profiles (not seven/six-area IA collision) |
| Benefits chips (events, continuous development, etc.) | QUALIFIED / reduced to evidence-safe working posture |
| Headcount / invented locations / employment arrangements | Not published |

## CTA summary (mandatory routes)

Primary strategic intake = WhatsApp Discuss/Assess. Contact = non-WA alternative (mailto). Diagnostic Assess = genuine structured conversation start. No duplicate identical commercial labels inside the same main. Full matrix committed in closeout evidence JSON.
