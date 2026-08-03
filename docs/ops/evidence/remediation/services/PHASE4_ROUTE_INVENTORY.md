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
- [x] Per-route reconciled status (after evidence commits)

## Per-route reconciled status (closeout)

**Closeout validation overall:** PASS  
**Immutable closeout preview:** https://octus-consulting-eyjy9sxq7-axle1.vercel.app  
**Deployment:** `dpl_4mRS5vF2QSS34aJkip3Zn56cUUa5`  
**Closeout tip SHA (deploy):** `ee8f1d0f7d442482eee99cef927a3389892617b4`  
**Application closeout commit:** `e72d3902670de83573bc32674c3cd02e036b787e`  
**Implementation snapshot (Phase 4 before):** `8228e342cfc9d3830b4f4a414f2a93ae208e5be1`  
**Before preview:** https://octus-consulting-6dof5kn4k-axle1.vercel.app (`dpl_Ewm6SFyGB5wkkDefAAMnBs27bMfZ`)  
**Baseline:** https://octus-consulting-9q798dbg2-axle1.vercel.app (`dpl_437tawkoMDv7sqxW6NzPzTegj1Lq`)

Screenshot chapters per route (desktop + mobile): `full`, `hero`, `content`, `cta`.  
Paths under `docs/ops/evidence/remediation/services/{baseline,before,reconciled}/` using slug `__viewport__chapter.png`. Full manifest: `SCREENSHOT_MANIFEST.json`.

| Route | Template | Final status | Crawl | CTA | Punct | A11y | Reconciled desktop full path |
|---|---|---|---|---|---|---|---|
| `/solutions` | T1 | RECONCILED_PASS | 200 | PASS | PASS | PASS | `reconciled/solutions__desktop__full.png` |
| `/solutions/regulatory-structuring` | T2 | RECONCILED_PASS | 200 | PASS | PASS | PASS | `reconciled/solutions-regulatory-structuring__desktop__full.png` |
| `/solutions/compliance-risk` | T2 | RECONCILED_PASS | 200 | PASS | PASS | PASS | `reconciled/solutions-compliance-risk__desktop__full.png` |
| `/solutions/legal-structural-architecture` | T2 | RECONCILED_PASS | 200 | PASS | PASS | PASS | `reconciled/solutions-legal-structural-architecture__desktop__full.png` |
| `/solutions/corporate-structuring` | T2 | RECONCILED_PASS | 200 | PASS | PASS | PASS | `reconciled/solutions-corporate-structuring__desktop__full.png` |
| `/private-clients` | T3 | RECONCILED_PASS | 200 | PASS | PASS | PASS | `reconciled/private-clients__desktop__full.png` |
| `/solutions/remediation-readiness` | T5 | RECONCILED_PASS | 200 | PASS | PASS | PASS | `reconciled/solutions-remediation-readiness__desktop__full.png` |
| `/international-hub` | T4 | RECONCILED_PASS | 200 | PASS | PASS | PASS | `reconciled/international-hub__desktop__full.png` |
| `/solutions/banking-payments-infrastructure` | T6 | RECONCILED_PASS | 200 | PASS | PASS | PASS | `reconciled/solutions-banking-payments-infrastructure__desktop__full.png` |
| `/solutions/regulatory/igaming-licensing` | T7 | RECONCILED_PASS | 200 | PASS | PASS | PASS | `reconciled/solutions-regulatory-igaming-licensing__desktop__full.png` |
| `/solutions/regulatory/fintech-licensing` | T7 | RECONCILED_PASS | 200 | PASS | PASS | PASS | `reconciled/solutions-regulatory-fintech-licensing__desktop__full.png` |
| `/solutions/regulatory/market-entry` | T7 | RECONCILED_PASS | 200 | PASS | PASS | PASS | `reconciled/solutions-regulatory-market-entry__desktop__full.png` |
| `/solutions/compliance/aml-kyc` | T7 | RECONCILED_PASS | 200 | PASS | PASS | PASS | `reconciled/solutions-compliance-aml-kyc__desktop__full.png` |
| `/solutions/compliance/compliance-as-a-service` | T7 | RECONCILED_PASS | 200 | PASS | PASS | PASS | `reconciled/solutions-compliance-compliance-as-a-service__desktop__full.png` |
| `/solutions/compliance/dpo-as-a-service` | T7 | RECONCILED_PASS | 200 | PASS | PASS | PASS | `reconciled/solutions-compliance-dpo-as-a-service__desktop__full.png` |
| `/solutions/compliance/gli-readiness` | T7 | RECONCILED_PASS | 200 | PASS | PASS | PASS | `reconciled/solutions-compliance-gli-readiness__desktop__full.png` |
| `/solutions/compliance/internal-controls` | T7 | RECONCILED_PASS | 200 | PASS | PASS | PASS | `reconciled/solutions-compliance-internal-controls__desktop__full.png` |
| `/solutions/corporate/company-formation` | T7 | RECONCILED_PASS | 200 | PASS | PASS | PASS | `reconciled/solutions-corporate-company-formation__desktop__full.png` |
| `/solutions/corporate/holding-design` | T7 | RECONCILED_PASS | 200 | PASS | PASS | PASS | `reconciled/solutions-corporate-holding-design__desktop__full.png` |
| `/solutions/corporate/offshore-structuring` | T7 | RECONCILED_PASS | 200 | PASS | PASS | PASS | `reconciled/solutions-corporate-offshore-structuring__desktop__full.png` |

**T8:** Alias stubs only — not a distinct content template; covered by alias audit (`PHASE4_ALIAS_AUDIT.json`, 12 aliases).

**NO_DIRECT_BASELINE_ROUTE** for area hubs mapped to closest baseline template `/solutions` during matched capture where noted in the manifest `baseline_mapping` field.
