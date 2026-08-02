# OCTUS PUBLIC SERVICE CATALOG — DECISION REGISTER

| Field | Value |
|-------|-------|
| **Status** | `REQUIRES_RUBIO_REVIEW` |
| **Date** | 2026-08-02 |
| **Catalog** | `OCTUS_PUBLIC_SERVICE_CATALOG_V1` |
| **Issue** | [octus-consulting#13](https://github.com/rubioprojects/octus-consulting/issues/13) |

Decisions below are **recommendations**. None are `HUMAN_APPROVED` until Rubio records approval.

---

## Open decisions (need Rubio)

### D-TAXONOMY-01 — Number and names of public areas

| | |
|--|--|
| **Question** | Adopt six Final Lock areas as the public commercial spine, or replace with Issue #13 seven-area candidate? |
| **Recommendation** | **Six areas** as spine (AREA-REG … AREA-REM). Do not force seven only because it was discussed. |
| **Evidence** | Website Final Lock CONFIRMED; `lib/commercial.ts`; `CANONICAL_SERVICE_TAXONOMY.md`. Issue #13 lists seven as *candidate subject to catalog evidence*. |
| **Impact if accepted** | Website IA and commercial catalog stay aligned. |
| **Impact if rejected for seven** | Website IA migration required; AREA-TAX becomes peer pillar. |
| **Status** | `REQUIRES_RUBIO_REVIEW` |

### D-TAX-01 — Tax / accounting / audit public treatment

| | |
|--|--|
| **Question** | Is Tax, Accounting, Audit & Finance a seventh public area, a Corporate depth, a Markets add-on, or controlled commercial-only (Milla + proposals)? |
| **Recommendation** | **Controlled commercial offer now**; optional seventh pillar only after Rubio confirms public capacity narrative without naming OC8. |
| **Evidence** | Catalog V2 sells accounting/tax/audit via Octus; website pack marks OC8 pages `DO_NOT_PUBLISH`; Issue #13 AT#5 requires findability. |
| **Allowed interim** | Milla may discuss Octus-branded finance offers; no OC8 name; no rate cards on site. |
| **Status** | `REQUIRES_RUBIO_REVIEW` |

### D-SEGMENT-PC-01 — Private Clients

| | |
|--|--|
| **Question** | Equal service pillar vs client segment? |
| **Recommendation** | **Client segment** (Issue #13 + Final Lock R-03). Keep `/private-clients`; map services under AREA-CORP (UBO) and selected PF finance under AREA-TAX candidate. |
| **Status** | `REQUIRES_RUBIO_REVIEW` |

### D-PARTNER-01 — Partner naming

| | |
|--|--|
| **Question** | May public materials name OC8, Antera or Rubio Adv.? |
| **Recommendation** | **No.** Octus commercial face only. Executors stay internal (existing Site Copy / master rule). |
| **Status** | `REQUIRES_RUBIO_REVIEW` (reaffirmation) |

### D-ID-01 — Public ID scheme

| | |
|--|--|
| **Question** | Which IDs are public SoT? |
| **Recommendation** | Public: `AREA-*` + `SVC-*`. Internal mapping only: Catalog V2 `OCTUS_*` / `OC8_*` / `ANTERA_*`, pilots `octus-pilot-*`, Commercial OS `octus-p*` / `octus-r*` / `octus-a*`. |
| **Status** | `REQUIRES_RUBIO_REVIEW` |

### D-PRICE-01 — Public pricing

| | |
|--|--|
| **Question** | Any prices on website or deck? |
| **Recommendation** | **No** until commercial price truth resolves PRO/START/SHIELD/manutenção conflicts. Prices only in controlled proposals. |
| **Status** | `REQUIRES_RUBIO_REVIEW` |

### D-CAPACITY-01 — Weak-capacity lines

| | |
|--|--|
| **Question** | Which services stay inquiry-only? |
| **Recommendation** | Keep inquiry-only / soft wording for: Brazil SPA (`OCTUS_REG_BR_SPA` TBD), Malta/IoM long-cycle licences (partial playbooks), high-risk banking (playbook legal-basis warning), ISO-as-product, success-fee recovery guarantees. |
| **Status** | `REQUIRES_RUBIO_REVIEW` |

### D-LANG-01 — Language of public artifacts

| | |
|--|--|
| **Question** | EN vs PT for catalog, deck, website? |
| **Recommendation** | Working notes may be PT; **final website + core deck EN** (Issue #13 governance), unless Rubio directs otherwise. Playbooks for Milla may be bilingual or PT-first. |
| **Status** | `REQUIRES_RUBIO_REVIEW` |

---

## Locked for this pack (agent-side, still human-reviewable)

| ID | Decision | Rationale |
|----|----------|-----------|
| L-01 | This folder (`docs/commercial/public-catalog/`) is the public catalog SoT | Mandate ownership; website consumes, does not invent |
| L-02 | No website code mutation in this mission | Mandate restriction |
| L-03 | No PPTX/PDF until content + storyboard approved | Mandate restriction |
| L-04 | Catalog status remains `REQUIRES_RUBIO_REVIEW` | No premature HUMAN_APPROVED |
| L-05 | Delivery models ≠ service areas | Retainers/advisory stay engagement layer |
| L-06 | Industries ≠ service areas | Markets layer preserved |

---

## Conflicts recorded (not resolved here)

| Conflict | Sources | Treatment |
|----------|---------|-----------|
| Retainer PRO €15k vs €8–12k | Catalog V2 vs Commercial OS static | D-PRICE-01 — do not publish |
| START €3k vs €2.5k | Same | D-PRICE-01 |
| V2 “118” vs seed 126 vs playbooks 93 | Axle catalog corpus | Counts are internal; public uses SVC list |
| Website 6 Solutions vs Issue candidate 7 | Issue #13 vs Final Lock | D-TAXONOMY-01 |
| OC8 visible in internal catalog vs invisible publicly | V2 vs website master | D-PARTNER-01 |

---

## Obsolete references flagged

| Reference | Action |
|-----------|--------|
| Public “OC8” as seller | Remove from all public drafts |
| Legacy seven modules `/what-we-do` | Already superseded; do not revive as catalog |
| “Assessment before catalogue” / “one accountable layer” slogans | Forbidden tone (Issue #13) |
| Shared/Cross-tenant “4 services” with no IDs | Ignore until enumerated |

---

## Approval log

| Date | Reviewer | Decision IDs | Result |
|------|----------|--------------|--------|
| _pending_ | Rubio | D-TAXONOMY-01 … D-LANG-01 | |
| _pending_ | Cris | commercial face | |
| _pending_ | Milla | playbook usability | |
