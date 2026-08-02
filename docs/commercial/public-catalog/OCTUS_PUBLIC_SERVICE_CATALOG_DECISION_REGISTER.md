# OCTUS Public Service Catalog — Decision Register

| Field | Value |
|---|---|
| Pack | `OCTUS_PUBLIC_SERVICE_CATALOG_V1` |
| Date | 2026-08-02 |
| Status | `REQUIRES_RUBIO_REVIEW` |
| Issue | [rubioprojects/octus-consulting#13](https://github.com/rubioprojects/octus-consulting/issues/13) |
| Owner front | Commercial & services (public catalog) |

## How to read this register

- **DECIDED_FOR_DRAFT** = used to build V1 for Rubio review; not final human approval.
- **OPEN** = needs Rubio / Cris / Milla decision before `HUMAN_APPROVED`.
- **REJECTED_FOR_PUBLIC_V1** = inventoried and kept out of the public taxonomy.

---

## OUTCOME_DECOMPOSITION_TABLE (Phase 1)

| REQ | Outcome | mutation_class | max_tier |
|-----|---------|----------------|----------|
| R1 | Public catalog MD + JSON for Rubio review | docs_only | T1 |
| R2 | Decision register + claim/evidence register | docs_only | T1 |
| R3 | Issue #13 updated with Phase 1 status | docs_ops | T1 |
| R4 | Terminal `OCTUS_PUBLIC_SERVICE_CATALOG_READY_FOR_RUBIO_REVIEW` | governance | T1 |

Phases 2–4 (playbooks, commercial system pack, institutional deck PPTX/PDF) remain later.

---

## Sources inventoried

| ID | Source | Access | Role in V1 |
|----|--------|--------|------------|
| S-WEB | `octus-consulting/lib/commercial.ts` (29 service areas on current commercial branch; richer than `main` at pack date) | YES | Public names, one-liners, grouping |
| S-ARCH | `octus-consulting/docs/website/service-architecture/*` | YES | Master, mapping, gaps, conflicts |
| S-OFFER | `axle-dev-agent/docs/ops/evidence/OCTUS_COMMERCIAL/OPERATING_MODEL_2026-07-26/OFFER_ARCHITECTURE.md` | YES | 6 Solutions lock + layer rules |
| S-XWALK | `axle-dev-agent/.../OCTUS_SEVEN_AREAS_TO_SIX_SOLUTIONS_CROSSWALK_M0.md` | YES | Internal 7 Notion areas → 6 public |
| S-CAT | `axle-platform/docs/product/catalog/AXLE_SERVICE_CATALOG_V2_DRAFT_2026-05-30.md` | YES | Internal SKU universe (~118) |
| S-V3 | `axle-platform/docs/product/catalog/SERVICE_CATALOG_OPERATIONAL_MODEL_V3_2026-05-30.md` | YES | Visibility / internal-cost rules |
| S-PILOT | `axle-platform/docs/product/catalog/PILOT_SKU_ACTIVE_SET_2026-05-30.md` | YES | Runtime-active pilot subset |
| S-PB | `axle-platform/docs/product/playbooks/*` | YES | Playbook coverage gaps |
| S-SEED | `axle-platform/lib/services/catalog/tenantOperationalCatalogSeed*` | YES | `visible_to_client: false` for all rows |
| S-LOCK | `OCTUS_COMMERCIAL_FINAL_LOCK.md` (cited path) | MISSING locally | Cited by offer architecture; treated via secondary cites |
| S-NOTION | Notion Serviços OCTUS (53) | NO this session | Mapped via prior reconciliation packs only |
| S-SP | SharePoint SERVIÇOS OCTUS 2026 | NO / PARTIAL historically | Not used as SoT |
| S-ISSUE | GitHub Issue #13 | YES | Mandate + 16-field schema + 7-area candidate |

---

## Decisions

### D-TAX-01 — Number of public areas (6, not 7)

| | |
|---|---|
| Status | **DECIDED_FOR_DRAFT** · **OPEN for Rubio** |
| Decision | Recommend **six** public areas matching Final Lock / OFFER_ARCHITECTURE / live Solutions. |
| Not forced to seven | Count comes from inventory clarity, not prior discussion pressure. |
| Issue #13 candidate | Area “Tax, Accounting, Audit & Finance” **not adopted** as a public area in V1. |
| Evidence | Tax/accounting/BPO/perícia are OC8-origin, marked INTERNAL / DO_NOT_PUBLISH in architecture packs; catalog V2 exposes OC8 costs as internal-only; public Corporate hub already states tax/accounting retainers are not Solutions faces. |
| Alternative if Rubio overrides | Controlled specialist page or Industries/Markets appendix — still not automatic equal pillar. |

### D-TAX-02 — Private Clients treatment

| | |
|---|---|
| Status | **DECIDED_FOR_DRAFT** |
| Decision | Private Clients = **client segment + specialist page** (`/private-clients` → Ownership & UBO, SA-04-04), not a seventh service pillar. |
| Aligns with | Issue #13 guidance and Final Lock R-03. |

### D-TAX-03 — Public services vs internal SKUs

| | |
|---|---|
| Status | **DECIDED_FOR_DRAFT** |
| Decision | Public catalog lists **29 service areas** under 6 areas. Axle/Notion SKUs (~118 / 53) remain mapped underneath and are not website nav items. |
| Rule | Website sells themes and programmes; SKUs stay commercial/ops universe. |

### D-TAX-04 — OC8 / partner visibility

| | |
|---|---|
| Status | **DECIDED_FOR_DRAFT** |
| Decision | OC8, Antera, Rubio Adv., Irati = **delivery provenance only**. Never public brand on catalog, website or client materials. |
| Note on “obsolete OC8” | OC8 is **not obsolete** as delivery partner in Axle catalog. What is obsolete/forbidden is OC8 as a public Octus face or seventh vertical. |

### D-TAX-05 — Industries vs service areas

| | |
|---|---|
| Status | **DECIDED_FOR_DRAFT** |
| Decision | iGaming, Fintech, Digital Assets, High-Risk Operations are **industries** (WHERE), not service areas. |

### D-TAX-06 — Engagement models vs service areas

| | |
|---|---|
| Status | **DECIDED_FOR_DRAFT** |
| Decision | Lead Contractor, Managed Project, Strategic Mandate, Embedded Capability (and P6 retainers) are **how we engage**, not peer Solutions. |

### D-TAX-07 — Services without proven capacity

| | |
|---|---|
| Status | **DECIDED_FOR_DRAFT** |
| Decision | Keep in catalog with honesty notes; do not overclaim. |
| Examples | `OCTUS_REG_BR_SPA` (tbd); Anjouan/Curaçao pilot SKUs gated; EMI playbooks partial; high-risk banking playbook incomplete legal basis; ~100/118 SKUs without playbooks; ISO products DO_NOT_PUBLISH until evidence. |
| Public posture | Process and coordination claims only; no outcome guarantees. |

### D-TAX-08 — Duplicate / legacy names

| | |
|---|---|
| Status | **DECIDED_FOR_DRAFT** |
| Decision | Demote seven-module legacy (`/what-we-do` modules), “International Hub” as product, “Offshore Structuring” as hero label, “Audit & Readiness” as equal pillar. |
| Canonical | Six Solutions + 29 SA IDs from `commercial.ts` / architecture master. |

### D-TAX-09 — Language

| | |
|---|---|
| Status | **DECIDED_FOR_DRAFT** |
| Decision | Public service names and one-liners in **English** (site-aligned). Decision notes may be PT/EN. Website copy model remains WS2. |

### D-TAX-10 — Responsible person field

| | |
|---|---|
| Status | **OPEN** |
| Decision pending | Every service has `responsible_person_status = HUMAN_ASSIGNMENT_REQUIRED`. |
| Why open | No authoritative public person matrix signed in inventoried sources. |

### D-TAX-11 — Catalog lifecycle

| | |
|---|---|
| Status | **DECIDED_FOR_DRAFT** |
| Decision | V1 ships as `REQUIRES_RUBIO_REVIEW`. Not `HUMAN_APPROVED`. Not `CONSUMABLE_BY_WEBSITE`. |

---

## Duplicates removed / collapsed

| Historical / duplicate | Collapses into |
|---|---|
| Seven operational modules | Six public areas |
| Regulatory Structuring | SA-01-01 |
| International Hub as product | SA-01-04 Market entry (+ partners/engagement) |
| Banking under Regulatory deep path | Area 02 + `/solutions/banking/banking-payments` |
| Offshore Structuring (hero) | SA-04-03 Cross-border structuring |
| Audit & Readiness as pillar | SA-06-04 + GLI readiness; OC8 audit INTERNAL |
| Compliance & Risk (short legacy) | Area 03 full name |
| Corporate Structuring (short legacy) | Area 04 full name |

---

## OPEN decisions for Rubio / Milla / Cris

| ID | Question | Options | Blocks |
|----|----------|---------|--------|
| HD-01 | Confirm 6 public areas (reject Tax as 7th)? | A) Confirm 6 · B) Add Tax as public area · C) Tax specialist page only | Website IA (WS2) |
| HD-02 | Assign responsible person per public service | Name owners | Catalog field completeness; Milla routing |
| HD-03 | Which MEDIUM-confidence services stay public vs controlled-only? | Keep all 29 · demote list | Website depth / briefs |
| HD-04 | Brazil SPA public wording given SKU `tbd` | Controlled inquiry language vs dedicated page | SA-01-05 |
| HD-05 | Promote any OC8 tax capability to controlled commercial mention? | No · controlled appendix only · public area | D-TAX-01 |
| HD-06 | Approve catalog for `HUMAN_APPROVED` / `CONSUMABLE_BY_WEBSITE` | Yes / rework | Website content freeze lift |

---

## Dependencies

| Dependency | Owner | Notes |
|---|---|---|
| Website IA / copy / route map | Website front (WS2) | May start in parallel; definitive content only after catalog approval |
| Commercial playbooks (Phase 2) | This front | After area approval |
| Notion/SharePoint full extract | Ops / Rubio | Improves SKU/playbook mapping; not blocking draft V1 |
| Final Lock file restoration | Ops | Cited path missing locally; secondary cites used |

---

## Pendências (Phase 1 close)

1. Rubio review of taxonomy (especially HD-01 Tax).
2. Person ownership assignments (HD-02).
3. Website front must not create competing taxonomy.
4. Phases 2–4 not started in this terminal.

---

## Status for Issue #13

| Item | Value |
|---|---|
| Catalog status | `REQUIRES_RUBIO_REVIEW` |
| Public areas recommended | 6 |
| Public services | 29 |
| Terminal (Phase 1) | `OCTUS_PUBLIC_SERVICE_CATALOG_READY_FOR_RUBIO_REVIEW` |
| Next terminal (later) | `OCTUS_COMMERCIAL_SYSTEM_READY_FOR_RUBIO_AND_MILLA_REVIEW` |
