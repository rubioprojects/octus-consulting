# OCTUS SEVEN AREAS WEBSITE INTEGRATION PLAN V1

| Field | Value |
|-------|-------|
| **Status** | `REQUIRES_RUBIO_REVIEW` |
| **Date** | 2026-08-02 |
| **Correction** | Neutral shell — **not** six-plus-one |
| **Principle** | `PRESERVE_THE_ASSET_REORGANIZE_THE_NAVIGATION` |
| **Taxonomy authority** | `docs/commercial/public-catalog/OCTUS_ORIGINAL_SEVEN_AREAS_RECONCILIATION_V1.md` |
| **Consume when** | `HUMAN_APPROVED` or `CONSUMABLE_BY_WEBSITE` only |
| **Terminal (after this correction)** | `OCTUS_WEBSITE_NEUTRAL_INTEGRATION_SHELL_READY` |

## Hard rule — no six-plus-one

This pack **must not** assume that the approved seven areas equal:

`current six Solutions + one extra area`.

`AREA-01`…`AREA-07` are **neutral slots**. None is pre-bound to Regulatory, Banking, Compliance, Corporate, Legal, or Remediation as its final identity.

Existing routes are documented only as **content clusters** that may later map into one or more approved areas — or into a non-area role — after catalog reconciliation.

## Global rules

- Do not invent AREA names.
- Do not implement routes/copy as final.
- Do not delete or redirect until approval.
- Do not consume PR #15’s six-area recommendation as final.
- Prefer reuse of existing assets after catalog mapping — not rebuild for its own sake.
- Industries (`/markets`), jurisdictions, team, and blog remain reusable site layers; their relationship to the seven areas is catalog-dependent.

---

## Neutral placeholder schema

Every `AREA-0N` uses only these fields:

| Field | Meaning |
|-------|---------|
| `placeholder_area_id` | Neutral slot id |
| `candidate_existing_assets` | Routes/components that *might* feed this slot after mapping — **not** its identity |
| `possible_service_relationships` | Open hypotheses only |
| `final_area_identity` | Always `PENDING_APPROVED_CATALOG` |
| `catalog_dependency` | Reconciliation artifact + consumable status |

Shared values for all seven slots until catalog approval:

| Field | Value |
|-------|-------|
| proposed_top_level_route | `PENDING_APPROVED_CATALOG` |
| related_blog | Assign after mapping from content clusters |
| related_industries | Assign after mapping |
| related_jurisdictions | Assign after mapping |
| cta_treatment | Assign after mapping |
| missing_page_requirements | Assign after mapping |
| human_approval_required | Yes |

---

## AREA-01

| Field | Content |
|-------|---------|
| placeholder_area_id | `AREA-01` |
| candidate_existing_assets | TBD after catalog mapping — may draw from any content cluster below |
| possible_service_relationships | Open; no pre-binding |
| final_area_identity | `PENDING_APPROVED_CATALOG` |
| catalog_dependency | `OCTUS_ORIGINAL_SEVEN_AREAS_RECONCILIATION_V1.md` → `HUMAN_APPROVED` or `CONSUMABLE_BY_WEBSITE` |

## AREA-02

| Field | Content |
|-------|---------|
| placeholder_area_id | `AREA-02` |
| candidate_existing_assets | TBD after catalog mapping — may draw from any content cluster below |
| possible_service_relationships | Open; no pre-binding |
| final_area_identity | `PENDING_APPROVED_CATALOG` |
| catalog_dependency | Same as AREA-01 |

## AREA-03

| Field | Content |
|-------|---------|
| placeholder_area_id | `AREA-03` |
| candidate_existing_assets | TBD after catalog mapping — may draw from any content cluster below |
| possible_service_relationships | Open; no pre-binding |
| final_area_identity | `PENDING_APPROVED_CATALOG` |
| catalog_dependency | Same as AREA-01 |

## AREA-04

| Field | Content |
|-------|---------|
| placeholder_area_id | `AREA-04` |
| candidate_existing_assets | TBD after catalog mapping — may draw from any content cluster below |
| possible_service_relationships | Open; no pre-binding |
| final_area_identity | `PENDING_APPROVED_CATALOG` |
| catalog_dependency | Same as AREA-01 |

## AREA-05

| Field | Content |
|-------|---------|
| placeholder_area_id | `AREA-05` |
| candidate_existing_assets | TBD after catalog mapping — may draw from any content cluster below |
| possible_service_relationships | Open; no pre-binding |
| final_area_identity | `PENDING_APPROVED_CATALOG` |
| catalog_dependency | Same as AREA-01 |

## AREA-06

| Field | Content |
|-------|---------|
| placeholder_area_id | `AREA-06` |
| candidate_existing_assets | TBD after catalog mapping — may draw from any content cluster below |
| possible_service_relationships | Open; no pre-binding |
| final_area_identity | `PENDING_APPROVED_CATALOG` |
| catalog_dependency | Same as AREA-01 |

## AREA-07

| Field | Content |
|-------|---------|
| placeholder_area_id | `AREA-07` |
| candidate_existing_assets | TBD after catalog mapping — may draw from any content cluster below |
| possible_service_relationships | Open; no pre-binding |
| final_area_identity | `PENDING_APPROVED_CATALOG` |
| catalog_dependency | Same as AREA-01 |

---

## Content clusters (reusable — not approved public areas)

These clusters document **existing website assets**. They are **not** the seven public areas and must not be copied 1:1 into `AREA-01`…`AREA-07`.

| Cluster id | Existing assets (examples) | Notes |
|------------|----------------------------|-------|
| `CLUSTER-REGULATORY` | `/solutions/regulatory-strategy-licensing`; igaming/fintech licensing deeps; `/brazil`; legacy `/regulatory` redirect | Reusable regulatory content |
| `CLUSTER-BANKING` | Banking hub + `/solutions/banking/banking-payments`; high-risk market overlaps | Reusable banking/payments content |
| `CLUSTER-COMPLIANCE` | Compliance hub; AML/KYC; CaaS; DPO; internal controls; GLI readiness | Reusable compliance content |
| `CLUSTER-CORPORATE` | Corporate hub; company-formation; holding-design; offshore-structuring | Reusable corporate/cross-border content |
| `CLUSTER-LEGAL` | Legal hub (+ thin deep set) | Reusable legal/contractual content |
| `CLUSTER-REMEDIATION` | Remediation hub; `/diagnostic`; `/audit` redirect; overlap with GLI readiness | Reusable crisis/remediation content — **preserve**; role TBD |
| `CLUSTER-HUB` | `/partners`; provider-coordination language in banking/PSP/GLI/Insights; legacy `/international-hub` redirect (not a Hub page) | Reusable coordination content — **no provider gallery** |
| `CLUSTER-PRIVATE-CLIENTS` | `/private-clients` (+ related corporate UBO language) | Reusable individuals/UBO content — **preserve URL** |
| `CLUSTER-TAX-FINANCE` | Weak/absent as dedicated public pages today; may need new or recovered pages | Do not invent pages before catalog |
| `CLUSTER-MARKET-ENTRY` | `/solutions/regulatory/market-entry`; parts of `/brazil` | Reusable entry sequencing content |

Mapping from clusters → approved `AREA-0N` (or to a non-area role) is **exclusively** a catalog decision.

---

## Role-pending themes (not pre-classified)

Do **not** pre-classify any of the following as area, segment, adjacent surface, or secondary layer until the approved catalog decides:

| Theme | Status | Website duty now |
|-------|--------|------------------|
| Private Clients | `ROLE_PENDING_ORIGINAL_SEVEN_AREAS_RECONCILIATION` | Preserve `/private-clients` and related content; prepare for any approved role |
| Hub / Networking | `ROLE_PENDING_ORIGINAL_SEVEN_AREAS_RECONCILIATION` | Preserve partners/coordination seeds; no gallery; no endorsement promises |
| Remediation | `ROLE_PENDING_ORIGINAL_SEVEN_AREAS_RECONCILIATION` | Preserve remediation + diagnostic content; do not demote or delete |
| Tax / Accounting / Audit | `ROLE_PENDING_ORIGINAL_SEVEN_AREAS_RECONCILIATION` | Do not invent public pages; note possible new/recovered pages later |
| Market Entry | `ROLE_PENDING_ORIGINAL_SEVEN_AREAS_RECONCILIATION` | Preserve market-entry deep; do not decide if standalone area |

---

## Hub content prep (cluster only)

| Field | Plan |
|-------|------|
| Goal when later authorized | Explain Octus’ ability to identify and coordinate providers |
| Forbidden | Provider gallery; endorsement; promised acceptance/availability |
| Existing seeds | `CLUSTER-HUB` assets above |
| Hierarchy | `ROLE_PENDING_ORIGINAL_SEVEN_AREAS_RECONCILIATION` |

## Implementation phases (post-approval only)

1. Read approved seven names/slugs from reconciliation artifact  
2. Map content clusters → areas **or** non-area roles per catalog  
3. Remap nav + footer without assuming six-plus-one  
4. Adjust homepage capability section to approved seven  
5. Batch-update Insights `related[]` only after mapping  
6. Add missing pages only where catalog requires  
7. Redirects only with explicit approval  

**Not authorized by this document.**

## Pause condition

Website front **pauses** after terminal `OCTUS_WEBSITE_NEUTRAL_INTEGRATION_SHELL_READY` until the reconciliation artifact is consumable.
