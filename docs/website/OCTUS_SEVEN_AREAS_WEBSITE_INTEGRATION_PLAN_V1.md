# OCTUS SEVEN AREAS WEBSITE INTEGRATION PLAN V1

| Field | Value |
|-------|-------|
| **Status** | `REQUIRES_RUBIO_REVIEW` |
| **Date** | 2026-08-02 |
| **Principle** | `PRESERVE_THE_ASSET_REORGANIZE_THE_NAVIGATION` |
| **Taxonomy authority** | `docs/commercial/public-catalog/OCTUS_ORIGINAL_SEVEN_AREAS_RECONCILIATION_V1.md` |
| **Consume when** | `HUMAN_APPROVED` or `CONSUMABLE_BY_WEBSITE` only |
| **This doc does** | Integration shell with placeholders — **no final names** |

## Global rules

- Do not invent AREA names.
- Do not implement routes/copy as final.
- Do not delete or redirect until approval.
- Prefer remap of existing hubs/deeps over rebuild.
- Industries (`/markets`), jurisdictions, team, blog remain adjacent layers.

---

## AREA-01 — NAME_FROM_APPROVED_CATALOG

| Field | Content |
|-------|---------|
| proposed_top_level_route | `/services/<slug-from-catalog>` or remapped current regulatory hub path — **TBD after approval** |
| existing_routes_support | `/solutions/regulatory-strategy-licensing`; `/solutions/regulatory/igaming-licensing`; `/solutions/regulatory/fintech-licensing`; `/solutions/regulatory/market-entry`; `/brazil`; legacy `/regulatory` redirect |
| reusable_copy | Hub summary + licensing deep narratives; market-entry sequencing |
| missing_page_requirements | Official name/H1; possibly split if Market Entry is its own area |
| related_blog | Licensing fails post-approval; Brazil SPA/B2B cluster; Curaçao reform |
| related_industries | iGaming, Fintech, Digital Assets |
| related_jurisdictions | Malta, IoM, Curaçao, Anjouan, Portugal, UAE, Brazil |
| cta_treatment | Discuss / Contact; Diagnostic only if blocked path |
| implementation_dependency | Approved catalog name + slug |
| human_approval_required | Yes |

## AREA-02 — NAME_FROM_APPROVED_CATALOG

| Field | Content |
|-------|---------|
| proposed_top_level_route | Remap banking hub — TBD |
| existing_routes_support | `/solutions/banking-payments-infrastructure`; `/solutions/banking/banking-payments`; `/markets/high-risk` (partial) |
| reusable_copy | Bankability + PSP architecture; no account promises |
| missing_page_requirements | Hub vs deep consolidation decision |
| related_blog | Banking for high-risk operations; SPA banks/illegal operators |
| related_industries | Fintech, iGaming, High-Risk, Crypto |
| related_jurisdictions | Cross-cutting |
| cta_treatment | Discuss; Diagnostic if failed banking |
| implementation_dependency | Catalog + consolidation decision |
| human_approval_required | Yes |

## AREA-03 — NAME_FROM_APPROVED_CATALOG

| Field | Content |
|-------|---------|
| proposed_top_level_route | Remap compliance hub — TBD |
| existing_routes_support | Compliance hub + aml-kyc, CaaS, DPO, internal-controls, gli-readiness |
| reusable_copy | Operated compliance + frameworks |
| missing_page_requirements | None critical if deeps kept |
| related_blog | CaaS vs internal; COAF/AML; recertification |
| related_industries | All regulated markets |
| related_jurisdictions | BR LGPD + multi |
| cta_treatment | Discuss / Contact |
| implementation_dependency | Catalog name |
| human_approval_required | Yes |

## AREA-04 — NAME_FROM_APPROVED_CATALOG

| Field | Content |
|-------|---------|
| proposed_top_level_route | Remap corporate hub — TBD |
| existing_routes_support | Corporate hub; company-formation; holding-design; offshore-structuring; `/private-clients` |
| reusable_copy | Architecture-not-shop formation; holdings; UBO |
| missing_page_requirements | Offshore rename; Private Clients nav placement |
| related_blog | Customised studies Brazil expansion; IP/trademark |
| related_industries | All |
| related_jurisdictions | Multi + Brazil |
| cta_treatment | Discuss |
| implementation_dependency | Catalog + PC placement |
| human_approval_required | Yes |

## AREA-05 — NAME_FROM_APPROVED_CATALOG

| Field | Content |
|-------|---------|
| proposed_top_level_route | Remap legal hub — TBD |
| existing_routes_support | `/solutions/legal-contractual-architecture` (thin deep set) |
| reusable_copy | Contractual architecture; counsel coordination; law-firm boundary |
| missing_page_requirements | Optional deep pages later — not blockers |
| related_blog | Prediction markets; IP igaming |
| related_industries | All |
| related_jurisdictions | Multi |
| cta_treatment | Discuss |
| implementation_dependency | Catalog name |
| human_approval_required | Yes |

## AREA-06 — NAME_FROM_APPROVED_CATALOG

| Field | Content |
|-------|---------|
| proposed_top_level_route | Remap remediation hub — TBD; **must stay public** |
| existing_routes_support | Remediation hub; `/diagnostic`; gli-readiness (partial); `/audit` redirect |
| reusable_copy | Crisis entry; licensing/banking/compliance/audit remediation |
| missing_page_requirements | Clearer consolidation nav after approval |
| related_blog | Why licensing fails post-approval; banking high-risk |
| related_industries | All |
| related_jurisdictions | Multi |
| cta_treatment | **Diagnostic primary**; Contact secondary |
| implementation_dependency | Catalog name; do not demote |
| human_approval_required | Yes |

## AREA-07 — NAME_FROM_APPROVED_CATALOG

| Field | Content |
|-------|---------|
| proposed_top_level_route | **Unknown until reconciliation** — may be Tax/Finance, Hub, Market Entry, or other |
| existing_routes_support | **If Tax/Finance:** weak public pages today (mostly commercial-only). **If Hub:** `/partners` + banking/PSP/GLI coordination language. **If Market Entry:** market-entry deep + brazil |
| reusable_copy | Depends on approved identity |
| missing_page_requirements | Likely **new hub page** if Hub or Tax; do not invent until catalog |
| related_blog | Depends |
| related_industries | Depends |
| related_jurisdictions | Depends |
| cta_treatment | TBD |
| implementation_dependency | `OCTUS_ORIGINAL_SEVEN_AREAS_RECONCILIATION_V1.md` |
| human_approval_required | **Yes — blocker** |

---

## Adjacent surfaces (not service areas)

| Surface | Plan |
|---------|------|
| Hub (if not AREA-07) | Still prepare public Hub treatment — see §Hub below |
| Private Clients | Preserve `/private-clients`; nav elevation decision |
| Markets / Jurisdictions / Insights / Team | Keep |

## Hub treatment (mandatory prep)

| Field | Plan |
|-------|------|
| Goal | Explain Octus’ ability to identify and coordinate providers |
| Forbidden | Provider gallery; endorsement; promised acceptance/availability |
| Existing seeds | `/partners` classes; banking/PSP copy; GLI readiness; Insights signals |
| Audit classes covered | Banks, PSPs, platforms, laboratories, technology, KYC, CSPs, local specialists, international partners — **in narrative only** |
| Implementation | Only after catalog + Hub naming decision |

## Remediation treatment

Keep public. Consolidate diagnostic + hub + readiness deeps under approved AREA that owns remediation (placeholder AREA-06 above until catalog says otherwise).

## Private Clients treatment

Preserve URL and expand findability. Cover founders, UBOs, personal international structuring, holdings, succession, residency, personal banking, tax coordination — enrich after catalog without turning page into hidden filter only.

## Implementation phases (post-approval only)

1. Freeze approved names/slugs from catalog  
2. Remap nav + footer  
3. Remap hub titles/H1s  
4. Adjust homepage rail  
5. Batch-update Insights `related[]` hub hrefs  
6. Add missing AREA-07/Hub page if required  
7. Redirects only with explicit approval  

**Not authorized by this document.**
