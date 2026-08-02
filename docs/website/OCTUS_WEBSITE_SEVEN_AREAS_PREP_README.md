# Octus website — seven-area planning pack (implementation reference)

| Field | Value |
|-------|-------|
| **Planning status** | `HUMAN_APPROVED_FOR_IMPLEMENTATION_REFERENCE` |
| **Catalog on main** | `5857c0a7f5a758e44fe3e3c3df0d47ef87739e28` |
| **Catalog gates** | `HUMAN_APPROVED` · `CONSUMABLE_BY_WEBSITE` · `website_consumable: true` |
| **Scope** | 7 public areas · 39 public services |
| **PR** | [#16](https://github.com/rubioprojects/octus-consulting/pull/16) — **documentation only** |
| **Date** | 2026-08-02 |
| **Issue** | [#13](https://github.com/rubioprojects/octus-consulting/issues/13) |

## Approved public areas (binding)

| # | ID | Name | Canonical route (planned) | Preserve SEO from |
|---|----|------|---------------------------|-------------------|
| 1 | `AREA-REG` | Regulatory Structuring | `/solutions/regulatory-structuring` | `/solutions/regulatory-strategy-licensing` |
| 2 | `AREA-CMP` | Compliance & Risk | `/solutions/compliance-risk` | `/solutions/compliance-risk-systems` |
| 3 | `AREA-LEG` | Legal & Structural Architecture | `/solutions/legal-structural-architecture` | `/solutions/legal-contractual-architecture` |
| 4 | `AREA-CORP` | Corporate Structuring | `/solutions/corporate-structuring` | `/solutions/corporate-cross-border` |
| 5 | `AREA-PC` | Private Clients | `/private-clients` | `/private-clients` |
| 6 | `AREA-REM` | Remediation & Readiness | `/solutions/remediation-readiness` | `/solutions/operational-remediation-readiness` |
| 7 | `AREA-HUB` | International Hub | `/international-hub` | `/international-hub` |

**Do not** create an eighth Banking or Tax area. Banking readiness and corporate tax live under Corporate Structuring; Hub coordinates introductions; remediations live under Remediation & Readiness.

## Catalog dependency (satisfied)

| Item | Status |
|------|--------|
| `OCTUS_ORIGINAL_SEVEN_AREAS_RECONCILIATION_V1.md` | Delivered |
| Public catalog JSON/MD | `HUMAN_APPROVED` / consumable |
| Neutral placeholders | **Retired** — replaced by approved names above |

## Artifacts

| File | Role |
|------|------|
| `OCTUS_EXISTING_CONTENT_REUSE_MATRIX_V1.md` | Cluster → approved area mapping |
| `OCTUS_NAVIGATION_GAP_ANALYSIS_V1.md` | Target nav: Services / Industries / Insights / About / Contact |
| `OCTUS_SEVEN_AREAS_WEBSITE_INTEGRATION_PLAN_V1.md` | Area-by-area implementation plan |
| `OCTUS_HOMEPAGE_REUSE_MAP_V1.md` | Homepage section map |
| `OCTUS_BLOG_PRESERVATION_AND_LINKING_PLAN_V1.md` | Insights preservation (unchanged substance) |
| `OCTUS_OPEN_PR_RECONCILIATION_V1.md` | Open PR classes — controlled reference only |

## Implementation note

Implementation must proceed on a **new branch from main after this PR merges** — not on this docs branch, not by wholesale-merging PR #10/#11.
