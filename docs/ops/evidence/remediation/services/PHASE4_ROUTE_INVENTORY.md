# Phase 4 — Services route inventory

**PR:** https://github.com/rubioprojects/octus-consulting/pull/17  
**Starting / accepted Phase 3 HEAD:** `620b725d613fba4ff4a062477c1110e453a4eb63`  
**Accepted Homepage application commit:** `11c0f9da74408f270a22c23b5b2903ce45f5e33c`  
**Baseline:** https://octus-consulting-9q798dbg2-axle1.vercel.app (`dpl_437tawkoMDv7sqxW6NzPzTegj1Lq`)  
**Date:** 2026-08-03

## Catalogue integrity (control numbers — not for public advertising)

| Metric | Count | Source |
|---|---:|---|
| Public peer areas | 7 | `lib/publicAreas.ts` `PUBLIC_AREAS` |
| Approved public services | 39 | catalog + `PUBLIC_AREAS` services |
| Internal implementation families | 34 | `OCTUS_SERVICE_FAMILY_ARCHITECTURE_V1.json` |
| Live mandatory public surfaces | 20 | overview + 7 hubs + banking + 11 deep |
| Alias / redirect stubs in tree | 6 | legacy Wave-3 slugs |

## Template classification

| ID | Template | Routes | Shared component |
|---|---|---|---|
| T1 | Services overview | `/solutions` | Custom + `PageHero` |
| T2 | Standard area hub | Regulatory, Compliance, Legal, Corporate | `AreaHubPage` |
| T3 | Private Clients hub | `/private-clients` | `AreaHubPage` (compact) |
| T4 | International Hub | `/international-hub` | `AreaHubPage` (compact) |
| T5 | Remediation hub | `/solutions/remediation-readiness` | `AreaHubPage` (assess CTA) |
| T6 | Banking & Payments supporting | `/solutions/banking-payments-infrastructure` | Custom + `PageHero` |
| T7 | Standard deep-service | 11 deep URLs | Inline dark-hero pattern (not `PageHero`) |
| T8 | Legacy alias stub | 6 redirect pages | `StaticRedirect` / `redirect()` |

## Mandatory public surfaces

### Overview

| URL | Status | Source | Parent | Template | Baseline equivalent |
|---|---|---|---|---|---|
| `/solutions` | LIVE | `app/solutions/page.tsx` | — | T1 | `/solutions` (baseline Solutions) |

### Seven area hubs

| URL | Area | Source | Template | Baseline equivalent |
|---|---|---|---|---|
| `/solutions/regulatory-structuring` | Regulatory Structuring | `app/solutions/regulatory-structuring/page.tsx` | T2 | Closest: legacy regulatory hub / Solutions family |
| `/solutions/compliance-risk` | Compliance & Risk | `app/solutions/compliance-risk/page.tsx` | T2 | Closest: compliance hub |
| `/solutions/legal-structural-architecture` | Legal & Structural Architecture | `app/solutions/legal-structural-architecture/page.tsx` | T2 | Closest: legal hub |
| `/solutions/corporate-structuring` | Corporate Structuring | `app/solutions/corporate-structuring/page.tsx` | T2 | Closest: corporate hub |
| `/private-clients` | Private Clients | `app/private-clients/page.tsx` | T3 | Closest: Ownership & UBO / private |
| `/solutions/remediation-readiness` | Remediation & Readiness | `app/solutions/remediation-readiness/page.tsx` | T5 | Closest: Audit & Readiness |
| `/international-hub` | International Hub | `app/international-hub/page.tsx` | T4 | Closest: international / network |

### Supporting Banking surface

| URL | Status | Parent posture | Template | Peer-area prohibition |
|---|---|---|---|---|
| `/solutions/banking-payments-infrastructure` | LIVE | Cross-cutting supporting | T6 | Must NOT appear in seven-area grids |

### Deep services (every publicly reachable dedicated page)

| URL | Parent area | Source | Template | Baseline / mapping |
|---|---|---|---|---|
| `/solutions/regulatory/igaming-licensing` | Regulatory | `app/solutions/regulatory/igaming-licensing/page.tsx` | T7 | Closest baseline deep / market licensing |
| `/solutions/regulatory/fintech-licensing` | Regulatory | `app/solutions/regulatory/fintech-licensing/page.tsx` | T7 | Closest baseline deep |
| `/solutions/regulatory/market-entry` | Regulatory | `app/solutions/regulatory/market-entry/page.tsx` | T7 | Closest baseline deep |
| `/solutions/compliance/aml-kyc` | Compliance | `app/solutions/compliance/aml-kyc/page.tsx` | T7 | Closest baseline deep |
| `/solutions/compliance/compliance-as-a-service` | Compliance | `app/solutions/compliance/compliance-as-a-service/page.tsx` | T7 | Closest baseline deep |
| `/solutions/compliance/dpo-as-a-service` | Compliance | `app/solutions/compliance/dpo-as-a-service/page.tsx` | T7 | Closest baseline deep |
| `/solutions/compliance/gli-readiness` | Compliance | `app/solutions/compliance/gli-readiness/page.tsx` | T7 | Closest baseline deep |
| `/solutions/compliance/internal-controls` | Compliance | `app/solutions/compliance/internal-controls/page.tsx` | T7 | Closest baseline deep |
| `/solutions/corporate/company-formation` | Corporate | `app/solutions/corporate/company-formation/page.tsx` | T7 | Closest baseline deep |
| `/solutions/corporate/holding-design` | Corporate | `app/solutions/corporate/holding-design/page.tsx` | T7 | Closest baseline deep |
| `/solutions/corporate/offshore-structuring` | Corporate | `app/solutions/corporate/offshore-structuring/page.tsx` | T7 | Closest baseline deep |

**Deep-service count:** 11 (all listed; none deferred to “representative only”).

## Alias / intentional redirects (not separate public offers)

| Alias URL | Canonical | Mechanism | Duplicate offer? |
|---|---|---|---|
| `/solutions/regulatory-strategy-licensing` | `/solutions/regulatory-structuring` | vercel 301 + StaticRedirect | intentional alias |
| `/solutions/compliance-risk-systems` | `/solutions/compliance-risk` | vercel 301 + StaticRedirect | intentional alias |
| `/solutions/legal-contractual-architecture` | `/solutions/legal-structural-architecture` | vercel 301 + StaticRedirect | intentional alias |
| `/solutions/corporate-cross-border` | `/solutions/corporate-structuring` | vercel 301 + StaticRedirect | intentional alias |
| `/solutions/operational-remediation-readiness` | `/solutions/remediation-readiness` | vercel 301 + StaticRedirect | intentional alias |
| `/solutions/regulatory/banking-payments` | `/solutions/banking-payments-infrastructure` | vercel 301 + redirect() | intentional alias |
| `/services` | `/solutions` | vercel 301 | intentional alias |
| `/regulatory` | `/solutions/regulatory-structuring` | vercel 301 | intentional alias |
| `/compliance` | `/solutions/compliance-risk` | vercel 301 | intentional alias |
| `/corporate` | `/solutions/corporate-structuring` | vercel 301 | intentional alias |
| `/audit` | `/solutions/remediation-readiness` | vercel 301 | intentional alias |
| `/legal-architecture` | `/solutions/legal-structural-architecture` | vercel 301 | intentional alias |

**Documented gap (not inventing redirects in Phase 4 unless proven defect):** canonical map mentions `/what-we-do` → `/solutions`; not in `vercel.json`. Phase 4 records; does not alter redirects unless crawl proves material defect.

## Hub family → deep route mapping (parent integrity)

Every deep route has a parent among the seven areas. Hub accordion families may link to hub-only services without dedicated deep pages (expected — 39 services > 11 deep routes).

## Orphan scan (control findings)

| Item | Classification |
|---|---|
| `components/system/SolutionHubPage.tsx` | Unused component — do not wire in Phase 4 |
| `lib/commercial.ts` `SOLUTION_HUBS` | Legacy six-hub data — must not be advertised |
| `/what-we-do` live page | Outside Phase 4 mutate set; institutional/content residual → Phase 5/6 |

## Orphan live deep routes

None among the 11 deep URLs — each has a parent area and registry placement.

## Duplicate public offers

None intended beyond documented aliases above. Banking supporting page is not a peer area duplicate of International Hub.

## CTA targets (mandatory surfaces — labels recorded per route during implementation)

Commercial hierarchy binding for Phase 4:

- WhatsApp Discuss for general strategic intake
- Assess / diagnostic for Remediation or blocked-operation entry
- Contact only where non-WhatsApp alternative needed
- No duplicate arrow labels
- No Banking as seventh/eighth peer CTA in seven-area grids

## Inventory completeness checklists

- [x] Overview
- [x] Seven hubs
- [x] Banking supporting
- [x] All 11 deep-service URLs listed individually
- [x] Aliases recorded
- [x] Template classes assigned
- [x] Baseline mapping or closest-template note
- [ ] Per-route reconciled status (after evidence commits)
