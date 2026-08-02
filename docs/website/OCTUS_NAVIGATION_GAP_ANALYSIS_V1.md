# OCTUS NAVIGATION GAP ANALYSIS V1

| Field | Value |
|-------|-------|
| **Status** | `REQUIRES_RUBIO_REVIEW` |
| **Date** | 2026-08-02 |
| **Correction** | Neutral toward original seven — **not** six-plus-one |
| **Rule** | Do not finalize the new menu in this pack |
| **Sources** | `components/Nav.tsx`, `components/SiteFooter.tsx`, route inventory |

## 1. Current primary nav (useful)

| Item | href | Assessment |
|------|------|------------|
| Solutions | /solutions | Useful entry — **label/count must change** after seven-area approval; currently encodes six temporary Solutions |
| Markets | /markets | Keep — industries layer (not a service-area substitute) |
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
| Solutions vs What Octus does | Both explain capability; Solutions is temporary catalogue face | Keep both; do not treat “six Solutions” as final seven |
| About vs What Octus does | Overlapping positioning | Human clarify |
| Intelligence vs Insights | Intentional split — keep | Ensure nav labels stay distinct |
| “Solutions” word | May not match approved seven-area naming | Replace label only after catalog |
| Banking deep vs banking hub | Duplicate mental model inside current face | Consolidation after catalog mapping |
| Offshore Structuring | Unclear / sensitive label | Reposition after approval |
| Legacy “International Hub” URL | Redirected; name must not be confused with future Hub/Networking role | Do not revive as approved Hub |

## 3. Routes that should become secondary (interim observation)

| Route | Why secondary today |
|-------|---------------------|
| Most solution deeps | Depth pages — not top nav peers |
| Jurisdiction children | Under Jurisdictions |
| /brazil | Education satellite |
| /resources/* | Resource library |
| /diagnostic | Strong intake CTA from current footer — hierarchy TBD by catalog |
| Legal policies | Footer only |

Secondary ≠ demoted forever. Final hierarchy awaits reconciliation.

## 4. Neutral seven-area nav slots

Until `OCTUS_ORIGINAL_SEVEN_AREAS_RECONCILIATION_V1.md` is approved, nav must **not** ship final names and must **not** bind slots to the current six Solutions.

| placeholder_area_id | final_area_identity | Current nav/footer | Gap |
|---------------------|---------------------|--------------------|-----|
| AREA-01 | `PENDING_APPROVED_CATALOG` | No approved binding | Slot reserved only |
| AREA-02 | `PENDING_APPROVED_CATALOG` | No approved binding | Slot reserved only |
| AREA-03 | `PENDING_APPROVED_CATALOG` | No approved binding | Slot reserved only |
| AREA-04 | `PENDING_APPROVED_CATALOG` | No approved binding | Slot reserved only |
| AREA-05 | `PENDING_APPROVED_CATALOG` | No approved binding | Slot reserved only |
| AREA-06 | `PENDING_APPROVED_CATALOG` | No approved binding | Slot reserved only |
| AREA-07 | `PENDING_APPROVED_CATALOG` | No approved binding | Slot reserved only |

**Current footer “Solutions” list** (six temporary hubs) is a **content-cluster index**, not a preview of AREA-01…AREA-06. Do not treat footer order as the approved seven.

## 5. Role-pending themes in navigation

Do not pre-classify hierarchy. Status for each:

`ROLE_PENDING_ORIGINAL_SEVEN_AREAS_RECONCILIATION`

| Theme | Current treatment (fact) | Website duty |
|-------|--------------------------|--------------|
| Hub / Networking | `/partners` only; no dedicated Hub nav item | Preserve seeds; prepare for any approved role; no gallery |
| Private Clients | `/private-clients` live; **missing** from primary nav and footer | Preserve; remain findable; role TBD |
| Remediation | In temporary Solutions footer + diagnostic link | Preserve content; do not demote/delete; role TBD |
| Tax / Accounting / Audit | No dedicated public nav item | Do not invent nav item before catalog |
| Market Entry | Deep page under current regulatory path; not top-level | Preserve deep; role TBD |

## 6. Content clusters visible in today’s nav/footer

For mapping later — **not** approved areas:

- Regulatory cluster (footer hub + licensing deeps)
- Banking cluster (footer hub + banking deep)
- Compliance cluster (footer hub + compliance deeps)
- Corporate cluster (footer hub + corporate deeps)
- Legal cluster (footer hub)
- Remediation cluster (footer hub + diagnostic)
- Hub cluster (`/partners` and coordination language elsewhere)
- Private Clients cluster (`/private-clients`, currently under-linked)

## 7. Recommended interim stance (no implementation)

1. Leave production nav as-is until catalog consumable.
2. Block any PR that hard-codes “six Solutions” as the permanent IA or as six-plus-one.
3. Reserve seven neutral menu slots in planning only — labels from approved catalog only.
4. Preserve Private Clients, Hub seeds, Remediation, Market Entry, and tax-related future needs without deciding hierarchy.

## 8. Human decisions needed (after catalog)

| ID | Decision |
|----|----------|
| N-01 | Final top-nav label wording from approved catalog |
| N-02 | How each of AREA-01…AREA-07 appears in nav (order, label, depth) |
| N-03 | Nav treatment for each `ROLE_PENDING_*` theme once catalog assigns role |
| N-04 | About vs What Octus Does retention in primary vs More |
| N-05 | Exact seven names — catalog only |

## Pause

Nav work pauses at `OCTUS_WEBSITE_NEUTRAL_INTEGRATION_SHELL_READY` until the reconciliation artifact is consumable.
