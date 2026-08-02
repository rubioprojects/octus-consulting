# OCTUS NAVIGATION GAP ANALYSIS V1

| Field | Value |
|-------|-------|
| **Status** | `REQUIRES_RUBIO_REVIEW` |
| **Date** | 2026-08-02 |
| **Rule** | Do not finalize the new menu in this pack |
| **Sources** | `components/Nav.tsx`, `components/SiteFooter.tsx`, route inventory |

## 1. Current primary nav (useful)

| Item | href | Assessment |
|------|------|------------|
| Solutions | /solutions | Useful entry — **label/count must change** after seven-area approval; currently encodes six |
| Markets | /markets | Keep — industries layer |
| How we engage | /how-we-engage | Keep — answers “how Octus works” |
| Intelligence | /intelligence | Keep — knowledge system |
| About | /about | Keep — overlaps What Octus Does (clarify later) |
| Contact | /contact | Keep |
| Discuss / Email CTAs | external / mailto | Keep conversion paths |

### Mobile “More”

| Item | Assessment |
|------|------------|
| Team | Keep |
| What Octus does | Keep — high clarity asset |
| Insights | Keep — blog entry |
| Jurisdictions | Keep |
| Careers | Keep |

## 2. Duplication / unclear terminology

| Issue | Detail | Gap action (later) |
|-------|--------|--------------------|
| Solutions vs What Octus does | Both explain capability; Solutions is catalogue, What Octus does is identity | Keep both; stop treating Solutions “six” as final |
| About vs What Octus does | Overlapping positioning | Human clarify |
| Intelligence vs Insights | Intentional split — keep | Ensure nav labels stay distinct |
| “Solutions” word | May not match approved seven-area naming | Replace label only after catalog |
| Banking deep under /solutions/banking vs hub | Duplicate mental model | Consolidation decision |
| Offshore Structuring | Unclear / sensitive label | Reposition after approval |
| International Hub (legacy) | Redirected; name confuses with future Hub area | Do not revive as Hub |

## 3. Routes that should become secondary

| Route | Why secondary |
|-------|---------------|
| Most solution deeps | Support area hubs; not top nav |
| Jurisdiction children | Under Jurisdictions |
| /brazil | Education satellite |
| /resources/* | Resource library |
| /diagnostic | Strong CTA from Remediation/footer — not top-nav peer to Markets |
| Legal policies | Footer only |

## 4. Support for original seven areas (placeholders)

Until `OCTUS_ORIGINAL_SEVEN_AREAS_RECONCILIATION_V1.md` is approved, nav must **not** ship final names.

| Placeholder | Existing nav/footer support today | Gap |
|-------------|-----------------------------------|-----|
| AREA-01 — NAME_FROM_APPROVED_CATALOG | Regulatory hub + licensing deeps in footer | Remap |
| AREA-02 — NAME_FROM_APPROVED_CATALOG | Banking hub in footer | Remap |
| AREA-03 — NAME_FROM_APPROVED_CATALOG | Compliance hub in footer | Remap |
| AREA-04 — NAME_FROM_APPROVED_CATALOG | Corporate hub in footer | Remap |
| AREA-05 — NAME_FROM_APPROVED_CATALOG | Legal hub in footer | Remap |
| AREA-06 — NAME_FROM_APPROVED_CATALOG | Remediation hub in footer + diagnostic | **Keep visible** |
| AREA-07 — NAME_FROM_APPROVED_CATALOG | Possibly Tax/Finance or Hub — **not clearly in primary nav** | **Major gap** |

> Note: Issue #13 historically listed a seven-area *candidate* including Tax and Market Entry/Remediation. Rubio’s “original seven” may differ (e.g. include Hub). Website must wait for reconciliation artifact — placeholders only.

## 5. Areas currently absent or weak in nav

| Theme | Current treatment | Gap |
|-------|-------------------|-----|
| **Hub** (provider coordination) | Only `/partners` (collaboration classes); no Hub area | Need top-level or Services child after approval; no gallery |
| **Private Clients** | Live `/private-clients` — **missing from primary nav and footer** | Elevate without making it a false 8th equal if catalog says segment — still must remain findable |
| **Remediation** | In footer Solutions list + diagnostic link | Keep; do not demote |
| **Tax / Accounting / Finance** | No dedicated public nav item | Depends on catalog AREA mapping |
| **Market Entry** | Deep under regulatory; not top-level | Depends on whether it is its own area |

## 6. Remediation treatment (nav)

- Footer: Remediation & Readiness hub — **keep**.
- Footer Engage: “Remediation assess” → `/diagnostic` — **keep**.
- Do not fold exclusively into Contact.

## 7. Recommended interim stance (no implementation)

1. Leave production nav as-is until catalog consumable.
2. Block any PR that hard-codes “six Solutions” as permanent IA.
3. Prepare menu slots for seven areas + Markets + Insights + Company cluster.
4. Plan Private Clients and Hub visibility explicitly in human review.

## 8. Human decisions needed

| ID | Decision |
|----|----------|
| N-01 | Final top-nav label: “Services” vs “Solutions” vs approved wording |
| N-02 | Whether Hub is a top-nav area or under Services |
| N-03 | Private Clients: top-nav, Services child, or Company |
| N-04 | About vs What Octus Does retention in primary vs More |
| N-05 | Exact seven names from approved catalog only |
