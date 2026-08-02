# OCTUS PUBLIC SERVICE CATALOG V1

| Field | Value |
|-------|-------|
| **Status** | `REQUIRES_RUBIO_REVIEW` |
| **Version** | V1 |
| **Date** | 2026-08-02 |
| **Owner** | Commercial / Services front (this pack) |
| **Consumers** | Website front (after `HUMAN_APPROVED` or `CONSUMABLE_BY_WEBSITE` only) |
| **Language** | Working PT notes; public names EN (website + deck default) |
| **Control issue** | [octus-consulting#13](https://github.com/rubioprojects/octus-consulting/issues/13) |
| **Machine index** | `OCTUS_PUBLIC_SERVICE_CATALOG_V1.json` |
| **Decisions** | `OCTUS_PUBLIC_SERVICE_CATALOG_DECISION_REGISTER.md` |
| **Claims** | `OCTUS_PUBLIC_CLAIM_AND_EVIDENCE_REGISTER.md` |

**Terminal for this pack (Phase 1):** `OCTUS_PUBLIC_SERVICE_CATALOG_READY_FOR_RUBIO_REVIEW`

This document is the **official public commercial catalog source**. No other front should invent a competing taxonomy. Website implementation must wait for human approval of taxonomy and copy.

---

## 1. What Octus does (one sentence)

Octus helps regulated and high-scrutiny businesses design, license, bank, comply, structure and remediate operations across jurisdictions — coordinating specialists under one commercial relationship.

---

## 2. How to read this catalog

| Layer | What it is | Public? |
|-------|------------|---------|
| **Public service area** | Grouping shown to clients (deck, site, proposals) | Yes, when status allows |
| **Public service** | Named offer under an area | Yes, when status allows |
| **Client segment** | Who buys (e.g. Private Clients) | Segment page / proposal filter — not a service area peer |
| **Industry / market** | iGaming, Fintech, Digital Assets, High-Risk | Markets layer — not service areas |
| **Delivery model** | Project, retainer, advisory, crisis entry | Engagement — not a service area |
| **Internal SKU** | Axle/Catalog V2 / Commercial OS code | Never published as nav or price sheet |

**Status values used in this pack**

| Status | Meaning |
|--------|---------|
| `DRAFT` | Written; not yet submitted for Rubio |
| `REQUIRES_RUBIO_REVIEW` | Ready for Rubio review (current default) |
| `HUMAN_APPROVED` | Rubio (and required reviewers) approved |
| `CONSUMABLE_BY_WEBSITE` | Approved for website consumption |
| `SUPERSEDED` | Replaced by a later version |
| `INTERNAL_ONLY` | Exists commercially; not for public catalog |
| `CAPACITY_UNCLEAR` | Mentioned in sources; proof of current capacity incomplete |

---

## 3. Recommended public taxonomy (not forced to seven)

### 3.1 Recommendation

**Six public service areas**, matching the website Final Lock and `lib/commercial.ts`, plus **one finance candidate** held for Rubio decision.

Rationale (inventory-based, not slogan-based):

1. Six areas already have confirmed public names, hubs and service-area inventory in `docs/website/service-architecture/`.
2. Forcing seven areas only because Issue #13 listed a candidate would create a second taxonomy without new capacity proof.
3. Tax / accounting / audit **is sold by Octus** in Catalog V2 (partner delivery). It must be **findable for Milla** and answerable for Issue #13 acceptance test #5 — but promoting it to a seventh public pillar needs Rubio choice (see Decision D-TAX-01).

### 3.2 Public service areas (recommended spine)

| # | Public area ID | Public name | One-sentence explanation | Website hub today | Catalog status |
|---|----------------|-------------|--------------------------|-------------------|----------------|
| 01 | `AREA-REG` | Regulatory Strategy & Licensing | Pathways and programmes to obtain and maintain regulated licences. | `/solutions/regulatory-strategy-licensing` | `REQUIRES_RUBIO_REVIEW` |
| 02 | `AREA-BNK` | Banking, Payments & Financial Infrastructure | Readiness and architecture so licensed operations can move money. | `/solutions/banking-payments-infrastructure` | `REQUIRES_RUBIO_REVIEW` |
| 03 | `AREA-CMP` | Compliance & Risk Systems | Operated compliance, AML/KYC, DPO and controls that hold under scrutiny. | `/solutions/compliance-risk-systems` | `REQUIRES_RUBIO_REVIEW` |
| 04 | `AREA-CORP` | Corporate & Cross-Border Structuring | Entities, holdings and ownership architecture for multi-jurisdiction ops. | `/solutions/corporate-cross-border` | `REQUIRES_RUBIO_REVIEW` |
| 05 | `AREA-LEG` | Legal & Contractual Architecture | Contract and legal frameworks for regulated operations (not a law-firm shopfront). | `/solutions/legal-contractual-architecture` | `REQUIRES_RUBIO_REVIEW` |
| 06 | `AREA-REM` | Operational Remediation & Readiness | Entry point when licensing, banking, compliance or audit readiness is blocked. | `/solutions/operational-remediation-readiness` | `REQUIRES_RUBIO_REVIEW` |

### 3.3 Finance candidate (not auto-promoted)

| # | Public area ID | Public name | Recommendation | Status |
|---|----------------|-------------|----------------|--------|
| 07* | `AREA-TAX` | Tax, Accounting, Audit & Finance | Keep as **controlled commercial offer** under Octus brand until Rubio decides pillar vs segment vs Corporate depth. Answer for AT#5: “Offered commercially; public pillar pending decision D-TAX-01.” | `REQUIRES_RUBIO_REVIEW` / not a website Solution today |

\* Not counted as approved seventh area.

### 3.4 Not service areas

| Concept | Treatment |
|---------|-----------|
| Private Clients / UBO individuals | **Client segment** → `/private-clients` and proposal filter |
| iGaming / Fintech / Digital Assets / High-Risk | **Industries / markets** |
| Parceria Contínua / Advisory / Board / Discovery | **Delivery models** (`/how-we-engage`) |
| P1–P6 Commercial OS packages | **Proposal modules**, mapped to areas — not extra pillars |
| OC8 / Antera / Rubio Adv. brands | **Internal delivery** — never public brand names |

---

## 4. Public services by area

Fields match Issue #13 WS1. Prices, markups, partner rates and capacity numbers are **excluded**.

### AREA-REG — Regulatory Strategy & Licensing

#### SVC-REG-01 — Licensing strategy & pathway design
| Field | Content |
|-------|---------|
| one_sentence | We design the licensing pathway and sequence before filings start. |
| common_client_need | Know which licence, where, in what order, and what blocks approval. |
| scope_included | Jurisdiction fit, pathway memo, dependency map (corporate / banking / compliance), filing plan coordination. |
| typical_deliverables | Pathway memo; filing plan; dependency map; risk register for the path. |
| client_profile | Operators entering a new regulated market; groups restructuring licence stack. |
| relevant_industries | iGaming; Fintech; Digital Assets; High-Risk |
| relevant_jurisdictions | Multi (case-by-case) |
| responsible_capability | Octus regulatory coordination |
| mapped_internal_skus | Commercial OS P3; Catalog licensing advisory lines |
| delivery_model | Project |
| public_status | `REQUIRES_RUBIO_REVIEW` |
| last_reviewed | 2026-08-02 |
| sources | `SERVICE_CANONICAL_MASTER.md` SA-01-01; `lib/commercial.ts` |

#### SVC-REG-02 — iGaming licensing programme
| Field | Content |
|-------|---------|
| one_sentence | We run iGaming licensing as a full programme, not a single filing. |
| common_client_need | Obtain or move a gaming licence with corporate, compliance and banking dependencies handled. |
| scope_included | Venue pathway; dossier coordination; CSP/local requirement planning; maintenance planning. |
| typical_deliverables | Programme plan; dossier checklist; status cadence; maintenance outline. |
| client_profile | iGaming operators and groups. |
| relevant_industries | iGaming |
| relevant_jurisdictions | Anjouan; Curaçao; Kahnawake; Malta; Isle of Man; Brazil (inquiry) — listed as capability map, not guaranteed availability |
| responsible_capability | Octus regulatory |
| mapped_internal_skus | `OCTUS_REG_ANJOUAN_LIC`; `OCTUS_REG_CURACAO_LIC`; `OCTUS_REG_KAHNAWAKE_LIC`; `OCTUS_REG_MALTA_LIC`; `OCTUS_REG_IOM_LIC`; `OCTUS_REG_BR_SPA` (TBD); ops maintenance SKUs |
| delivery_model | Project + optional retainer |
| public_status | `REQUIRES_RUBIO_REVIEW` |
| capacity_note | SPA Brazil marked TBD in Catalog V2; Malta/IoM playbooks partial — do not promise timelines. |
| last_reviewed | 2026-08-02 |
| sources | Catalog V2 §2C; Axle playbooks; website deep `/solutions/regulatory/igaming-licensing` |

#### SVC-REG-03 — Fintech, EMI and crypto licensing
| Field | Content |
|-------|---------|
| one_sentence | We structure fintech and crypto licences as an operable stack, not paperwork alone. |
| common_client_need | EMI/PI/crypto authorisation with banking and compliance ready. |
| scope_included | Licence programme design; corporate/compliance dependencies; regulator interaction planning. |
| typical_deliverables | Programme plan; requirement matrix; workstream map. |
| client_profile | EMI/PI applicants; crypto/exchange operators; Brazil Bacen IP paths. |
| relevant_industries | Fintech; Digital Assets |
| relevant_jurisdictions | Montenegro; Latvia; Lithuania; UK; Switzerland; EU MiCA; offshore crypto venues; Brazil — capability map |
| mapped_internal_skus | `OCTUS_REG_MNE_EMI`; `OCTUS_REG_LVA_EMI`; `OCTUS_REG_LTU_EMI`; `OCTUS_REG_UK_EMI`; `OCTUS_REG_CH_FINMA`; `OCTUS_REG_OFFSHORE_CRYPTO`; `OCTUS_REG_EU_MICA`; `OCTUS_REG_INTL_EXCHANGE`; `OCTUS_REG_INTL_WEB3`; `OCTUS_REG_BR_BACEN` |
| delivery_model | Project |
| public_status | `REQUIRES_RUBIO_REVIEW` |
| capacity_note | Long-cycle licences; gov fees and local directors always separate; no outcome guarantees. |
| sources | Catalog V2 §2D; website `/solutions/regulatory/fintech-licensing` |

#### SVC-REG-04 — Market entry coordination
| Field | Content |
|-------|---------|
| one_sentence | We treat market entry as a structural project across jurisdiction, corporate, licence and banking. |
| common_client_need | Expand into a market without improvising entity and licence order. |
| scope_included | Entry plan; jurisdiction fit; cross-area workstream coordination. |
| typical_deliverables | Entry plan; sequenced workstreams; RACI for client-side owners. |
| client_profile | Groups expanding internationally. |
| mapped_internal_skus | P1 Setup Internacional; P2 Estrutura Completa (partial) |
| delivery_model | Project / programme |
| public_status | `REQUIRES_RUBIO_REVIEW` |
| sources | SA-01-04; `/solutions/regulatory/market-entry` |

#### SVC-REG-05 — Brazil SPA / MF regulatory support
| Field | Content |
|-------|---------|
| one_sentence | We coordinate Brazil-facing authorisation workstreams with local counsel. |
| common_client_need | Navigate Brazilian regulatory complexity for gaming/fintech-related ops. |
| scope_included | Workstream coordination; requirement mapping; counsel interface. |
| typical_deliverables | Workstream plan; issue log; counsel brief pack. |
| public_status | `REQUIRES_RUBIO_REVIEW` |
| capacity_note | `OCTUS_REG_BR_SPA` status TBD in Catalog V2 — inquiry-led only. |
| mapped_internal_skus | `OCTUS_REG_BR_SPA` |
| sources | SA-01-05; Catalog V2 |

---

### AREA-BNK — Banking, Payments & Financial Infrastructure

#### SVC-BNK-01 — Banking readiness / bankability
| Field | Content |
|-------|---------|
| one_sentence | We prepare the structure and evidence banks expect — without promising account approval. |
| common_client_need | Licensed or launching but rejected or stalled by banks. |
| scope_included | Bankability structuring; documentation pack; bank optioning; risk narrative. |
| typical_deliverables | Readiness pack; bank option shortlist; gap list. |
| exclusions | No guaranteed account opening; no bank name as endorsement. |
| mapped_internal_skus | `OCTUS_BNK_INTL_HIGHRISK`; pilot banking-support |
| delivery_model | Project |
| public_status | `REQUIRES_RUBIO_REVIEW` |
| capacity_note | High-risk banking playbook flagged incomplete legal basis in Axle — claims must stay conservative. |
| sources | SA-02-01; Catalog V2 §2F |

#### SVC-BNK-02 — Payment and PSP architecture
| Field | Content |
|-------|---------|
| one_sentence | We design payment and PSP options that fit the risk and licence profile. |
| common_client_need | Cards, PIX, crypto or wire rails that match the operation. |
| scope_included | PSP optioning; architecture map; provider fit (no vendor gallery as product). |
| typical_deliverables | Architecture options memo; provider map; implementation sequence. |
| mapped_internal_skus | `OCTUS_BNK_INTL_PSP`; `OCTUS_OPS_IGAMING_PAY2`; `OCTUS_OPS_IGAMING_PAYILIM` |
| delivery_model | Project |
| public_status | `REQUIRES_RUBIO_REVIEW` |
| sources | SA-02-02; Catalog V2 |

#### SVC-BNK-03 — Financial infrastructure remediation
| Field | Content |
|-------|---------|
| one_sentence | We rebuild banking or payment infrastructure after failure or freeze. |
| common_client_need | Existing stack failed; operations blocked. |
| scope_included | Diagnosis; remediation plan; often joint with AREA-REM. |
| delivery_model | Project / crisis |
| public_status | `REQUIRES_RUBIO_REVIEW` |
| sources | SA-02-03 |

---

### AREA-CMP — Compliance & Risk Systems

#### SVC-CMP-01 — AML / KYC / CDD frameworks
| Field | Content |
|-------|---------|
| one_sentence | We build AML/KYC/CDD frameworks that can survive audit and banking questions. |
| scope_included | Policy design; onboarding model; CDD packs; monitoring model outline. |
| typical_deliverables | Policy suite; onboarding flow; CDD pack templates. |
| mapped_internal_skus | `OCTUS_COMP_INTL_POLICIES`; `OCTUS_COMP_CRYPTO_AML`; related Antera delivery (internal) |
| public_status | `REQUIRES_RUBIO_REVIEW` |
| sources | SA-03-01; website AML deep |

#### SVC-CMP-02 — Compliance-as-a-Service
| Field | Content |
|-------|---------|
| one_sentence | We operate an ongoing compliance function under the Octus commercial face. |
| scope_included | Ongoing CO coverage; monitoring cadence; escalation path. |
| delivery_model | Retainer / recurring |
| mapped_internal_skus | `OCTUS_COMP_INTL_CO`; Antera CO delivery (internal) |
| public_status | `REQUIRES_RUBIO_REVIEW` |
| note | Partner delivery may exist internally; public materials never name Antera. |
| sources | SA-03-02 |

#### SVC-CMP-03 — DPO-as-a-Service
| Field | Content |
|-------|---------|
| one_sentence | We provide an operated DPO function for LGPD/GDPR obligations. |
| scope_included | DPO role coverage; incident interface; regulator interaction support. |
| delivery_model | Retainer / recurring |
| mapped_internal_skus | `OCTUS_COMP_INTL_DPO`; Antera DPO (internal) |
| public_status | `REQUIRES_RUBIO_REVIEW` |
| sources | SA-03-03 |

#### SVC-CMP-04 — Internal controls and governance
| Field | Content |
|-------|---------|
| one_sentence | We design controls that run in day-to-day operations, not only on paper. |
| public_status | `REQUIRES_RUBIO_REVIEW` |
| sources | SA-03-04 |

#### SVC-CMP-05 — Certification and lab readiness (incl. GLI)
| Field | Content |
|-------|---------|
| one_sentence | We prepare evidence and readiness before external certification or lab review. |
| capacity_note | ISO product gallery remains evidence-gated — do not sell ISO certificates as Octus products without approval (see claim register). |
| mapped_internal_skus | Antera CERTIFY/GLI lines (internal mapping only) |
| public_status | `REQUIRES_RUBIO_REVIEW` |
| sources | SA-03-05 |

#### SVC-CMP-06 — Policies and due diligence packs
| Field | Content |
|-------|---------|
| one_sentence | We produce policy suites and due diligence packs for partners, vendors or UBOs. |
| mapped_internal_skus | `OCTUS_COMP_INTL_DD`; `OCTUS_COMP_INTL_POLICIES` |
| public_status | `REQUIRES_RUBIO_REVIEW` |
| sources | SA-03-06 |

---

### AREA-CORP — Corporate & Cross-Border Structuring

#### SVC-CORP-01 — Entity and holding architecture
| Field | Content |
|-------|---------|
| one_sentence | We design holdings that separate risk and support regulated operations. |
| mapped_internal_skus | `OCTUS_CORP_INTL_HOLDING` (pricing_review); `OCTUS_CORP_INTL_STUDY` |
| public_status | `REQUIRES_RUBIO_REVIEW` |
| sources | SA-04-01 |

#### SVC-CORP-02 — Company formation (inside architecture)
| Field | Content |
|-------|---------|
| one_sentence | We form companies as part of a regulated architecture — not as a formation shop. |
| mapped_internal_skus | `OCTUS_CORP_US_DELAWARE`; `OCTUS_CORP_INTL_BVI`; `OCTUS_CORP_UK_LTD`; `OCTUS_CORP_BR_EMPRESA` |
| public_status | `REQUIRES_RUBIO_REVIEW` |
| sources | SA-04-02; website company-formation |

#### SVC-CORP-03 — Cross-border structuring
| Field | Content |
|-------|---------|
| one_sentence | We design multi-jurisdiction organisation for regulatory and banking scrutiny. |
| note | Prefer “cross-border” over “offshore” in new materials (website R3 direction). |
| public_status | `REQUIRES_RUBIO_REVIEW` |
| sources | SA-04-03 |

#### SVC-CORP-04 — Ownership and UBO architecture
| Field | Content |
|-------|---------|
| one_sentence | We structure ownership and UBO disclosure for people behind regulated ops. |
| client_segment | Private Clients (segment, not a seventh area) |
| public_status | `REQUIRES_RUBIO_REVIEW` |
| sources | SA-04-04; `/private-clients` |

#### SVC-CORP-05 — Corporate reorganisation
| Field | Content |
|-------|---------|
| one_sentence | We reorganise groups when the current structure blocks licence, bank or compliance. |
| public_status | `REQUIRES_RUBIO_REVIEW` |
| sources | SA-04-05 |

---

### AREA-LEG — Legal & Contractual Architecture

#### SVC-LEG-01 — Contractual architecture
| Field | Content |
|-------|---------|
| one_sentence | We design the contract stack across operators, vendors, players and partners. |
| mapped_internal_skus | `OCTUS_LEG_INTL_CONTRATO`; `OCTUS_LEG_INTL_REVCONTRATO`; `OCTUS_LEG_INTL_NDA` |
| public_status | `REQUIRES_RUBIO_REVIEW` |
| sources | SA-05-01 |

#### SVC-LEG-02 — Multi-jurisdiction legal frameworks
| Field | Content |
|-------|---------|
| one_sentence | We map and coordinate legal frameworks across jurisdictions with counsel. |
| boundary | Octus is not presented as a substitute law firm for local litigation. |
| public_status | `REQUIRES_RUBIO_REVIEW` |
| sources | SA-05-02 |

#### SVC-LEG-03 — Counsel coordination
| Field | Content |
|-------|---------|
| one_sentence | We coordinate specialist counsel so legal work stays aligned with the operating plan. |
| public_status | `REQUIRES_RUBIO_REVIEW` |
| sources | SA-05-03 |

#### SVC-LEG-04 — Legal opinions and certifications support
| Field | Content |
|-------|---------|
| one_sentence | We coordinate legal opinions and formal certifications required by banks or regulators. |
| mapped_internal_skus | `OCTUS_LEG_INTL_OPINION`; `OCTUS_LEG_PT_CERTIF`; `OCTUS_LEG_BR_MARCA` |
| public_status | `REQUIRES_RUBIO_REVIEW` |
| sources | Catalog V2 §2H |

---

### AREA-REM — Operational Remediation & Readiness

#### SVC-REM-01 — Crisis entry / structural assessment
| Field | Content |
|-------|---------|
| one_sentence | Single door when something is blocked: we assess and set the next actions. |
| mapped_internal_skus | `OCTUS_ADV_INTL_CRISIS`; diagnostic engagement |
| public_status | `REQUIRES_RUBIO_REVIEW` |
| sources | SA-06-01; `/diagnostic` |

#### SVC-REM-02 — Licensing delay remediation
| Field | Content |
|-------|---------|
| one_sentence | We unblock stalled or conditioned licensing programmes. |
| public_status | `REQUIRES_RUBIO_REVIEW` |
| sources | SA-06-02 |

#### SVC-REM-03 — Banking or compliance gap remediation
| Field | Content |
|-------|---------|
| one_sentence | We close banking or compliance gaps that stop operations. |
| public_status | `REQUIRES_RUBIO_REVIEW` |
| sources | SA-06-03 |

#### SVC-REM-04 — Audit and readiness remediation
| Field | Content |
|-------|---------|
| one_sentence | We prepare the operation for audit or certification under time pressure. |
| public_status | `REQUIRES_RUBIO_REVIEW` |
| sources | SA-06-04 |

---

### AREA-TAX candidate — Tax, Accounting, Audit & Finance

Public listing **pending D-TAX-01**. For Milla: these are real Octus commercial offers via partner delivery; do not name OC8 externally; do not quote internal rate cards.

| Service ID | Public name (draft) | Mapped internal (examples) | public_status |
|------------|---------------------|----------------------------|---------------|
| SVC-TAX-01 | Brazil corporate accounting (via Octus) | `OC8_FIN_BR_CONT_*` cost layer; Octus resale | `REQUIRES_RUBIO_REVIEW` |
| SVC-TAX-02 | Corporate tax planning (Brazil / cross-border) | OC8 tax planning lines; PF plan SKUs | `REQUIRES_RUBIO_REVIEW` |
| SVC-TAX-03 | Audit and financial statement readiness | `OC8_AUD_BR_*` | `REQUIRES_RUBIO_REVIEW` |
| SVC-TAX-04 | Tax recovery / debt renegotiation programmes | `OC8_SF_*` (success-fee — careful claims) | `REQUIRES_RUBIO_REVIEW` |
| SVC-TAX-05 | Societária maintenance Brazil | `OCTUS_RET_BR_MANUTENCAO` | `REQUIRES_RUBIO_REVIEW` |

**Never public:** `OC8_OCTUS_PREFERENTIAL`, `OC8_SF_REFERRAL`, OC8 base price tables, markups.

---

## 5. Delivery models (engagement, not areas)

| Model ID | Name | Public treatment |
|----------|------|------------------|
| DM-DISC | Discovery | Free / qualification — Octus face |
| DM-ADV | Advisory session / deep dive / board | Engagement offers |
| DM-RET | Continuous partnership (START / GROWTH / PRO) | `/how-we-engage` — prices only in proposals |
| DM-PROJ | Managed project / programme | Default for most SVC-* |
| DM-CRISIS | Crisis / remediation entry | AREA-REM |

Internal retainer SKUs (`OCTUS_RET_*`, P6, A1) stay off the website nav.

---

## 6. Industries and segments

| Type | Values |
|------|--------|
| Industries | iGaming; Fintech; Digital Assets; High-Risk digital |
| Segments | B2B operators; groups; Private Clients (UBO/ownership) |
| Explicit non-pillar | Private Clients must not be listed as a seventh equal service pillar without Rubio decision |

---

## 7. Internal-only / do-not-publish classes

| Class | Rule |
|-------|------|
| OC8 brand, base costs, preferential rates | `INTERNAL_ONLY` |
| Antera brand and SHIELD price modifiers | `INTERNAL_ONLY` (capability may appear as Octus compliance) |
| Rubio Adv. litigation catalogue | `INTERNAL_ONLY` (not Legal Architecture pages) |
| Full Catalog V2 SKU dump / Notion 53 as nav | `INTERNAL_ONLY` |
| Unverified SLAs and outcome metrics | Forbidden until claim register + evidence |
| ISO certificates as Octus products | Evidence gate |
| Vendor galleries (PAM, odds, software SKUs) | Not public catalog |

---

## 8. Obsolete and conflict notes (summary)

| Topic | Finding |
|-------|---------|
| OC8 as public brand | Obsolete for public materials; delivery partner only |
| Seven legacy website modules (`/what-we-do`) | Superseded by six Solutions |
| Issue #13 seven-area candidate | Evaluated; not auto-adopted (D-TAX-01 / D-TAXONOMY-01) |
| Retainer PRO €15k vs €8–12k | Pricing conflict — never publish either until commercial truth |
| Three ID systems (V2 / pilot / P1–P6) | Mapped in Decision Register; public uses SVC-* IDs |

---

## 9. Counts (this V1)

| Metric | Count |
|--------|------:|
| Recommended public areas | 6 |
| Finance candidate areas | 1 |
| Public services listed (spine) | 26 |
| Tax candidate services | 5 |
| Delivery models documented | 5 |
| Industries | 4 |

---

## 10. Acceptance test answers (Issue #13)

| # | Question | Answer from this catalog |
|---|----------|--------------------------|
| 1 | What does Octus do? | §1 one-sentence |
| 2 | Where is licensing? | AREA-REG |
| 3 | Where is company formation? | AREA-CORP / SVC-CORP-02 |
| 4 | Where is banking and payments? | AREA-BNK |
| 5 | Where is tax/accounting? | Commercially AREA-TAX candidate; public pillar pending D-TAX-01; Milla may sell under Octus brand with INTERNAL delivery mapping |
| 6 | Who delivers the work? | Octus commercial relationship; specialists and partner delivery coordinated by Octus (partners unnamed publicly) |
| 7 | How to contact? | Website Contact / commercial intake (Milla) — out of catalog scope for code |

---

## 11. Next consumers

| Consumer | May use when |
|----------|--------------|
| Website front | Item status `HUMAN_APPROVED` or `CONSUMABLE_BY_WEBSITE` |
| Milla playbooks | After area playbooks in `docs/commercial/playbooks/` reviewed |
| Deck | After deck content approval (no PPTX until then) |

**Pointer for website pack:** This catalog supersedes inventing new Solution names. Existing six Solution names remain the recommended public spine unless Rubio changes D-TAXONOMY-01.
