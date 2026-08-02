# OCTUS Public Service Catalog V1

| Field | Value |
|---|---|
| Schema | `OCTUS_PUBLIC_SERVICE_CATALOG_V1` |
| Status | **REQUIRES_RUBIO_REVIEW** |
| Owner | Octus commercial & services (Issue #13 WS1) |
| Created | 2026-08-02 |
| Last reviewed | 2026-08-02 |
| Consumable by website | **No** — requires `HUMAN_APPROVED` or `CONSUMABLE_BY_WEBSITE` |
| Related issue | [rubioprojects/octus-consulting#13](https://github.com/rubioprojects/octus-consulting/issues/13) |

> Working language for this pack: Portuguese notes in decision register; English public names and descriptions (aligned to the live site).

## Purpose

This is the governed public service catalog for Octus. It is the official source for:

1. which services Octus offers publicly;
2. how those services are grouped;
3. how each service is explained;
4. which deliverables may be presented;
5. which internal SKUs and playbooks map underneath.

No other front should create a competing public taxonomy.

## What Octus does (plain language)

Octus designs and coordinates regulatory, licensing, banking, compliance, corporate and legal structures for highly regulated operations — and remediates them when they fail.

Octus is not a law firm shopfront, not a bank, and not a certifying laboratory. Approvals and account openings remain with the relevant authority or institution.

## Taxonomy recommendation

**Recommended public areas: 6.**

Inventory of Final Lock / OFFER_ARCHITECTURE / live commercial.ts — not forced to seven areas.

Issue #13 seven-area candidate (including Tax): **NOT_ADOPTED_IN_V1_DRAFT — Tax/Accounting/Audit proposed as 7th area conflicts with evidence that those capabilities are predominantly OC8-internal.**

### Layer distinctions (do not collapse)

| Layer | Meaning |
|---|---|
| public_areas | Six Solutions — public grouping |
| public_services | Service areas under each Solution — sellable themes |
| industries | WHERE (iGaming, Fintech, Digital Assets, High-Risk) — not service areas |
| client_segments | e.g. Private Clients / beneficial owners — overlays, not equal pillars |
| engagement_models | HOW we engage — Lead Contractor, Managed Project, Strategic Mandate, Embedded Capability |
| internal_skus | Axle/Notion SKUs — mapped, not published as nav |
| delivery_partners | OC8 / Antera / counsel — internal provenance only; invisible in public brand |

### Public areas

| ID | Public area | Slug | Services | Status |
|---|---|---|---:|---|
| AREA-01 | Regulatory Strategy & Licensing | `regulatory-strategy-licensing` | 7 | REQUIRES_RUBIO_REVIEW |
| AREA-02 | Banking, Payments & Financial Infrastructure | `banking-payments-infrastructure` | 3 | REQUIRES_RUBIO_REVIEW |
| AREA-03 | Compliance & Risk Systems | `compliance-risk-systems` | 6 | REQUIRES_RUBIO_REVIEW |
| AREA-04 | Corporate & Cross-Border Structuring | `corporate-cross-border` | 6 | REQUIRES_RUBIO_REVIEW |
| AREA-05 | Legal & Contractual Architecture | `legal-contractual-architecture` | 3 | REQUIRES_RUBIO_REVIEW |
| AREA-06 | Operational Remediation & Readiness | `operational-remediation-readiness` | 4 | REQUIRES_RUBIO_REVIEW |

### Area one-liners

- **Regulatory Strategy & Licensing.** Licensing strategy, regulatory pathways, market entry sequencing and regulator-facing coordination for regulated operations.
- **Banking, Payments & Financial Infrastructure.** Banking readiness, payment architecture, PSP strategy and financial infrastructure designed to survive real onboarding scrutiny.
- **Compliance & Risk Systems.** Operational compliance frameworks, AML/KYC/CDD, DPO capability and risk systems designed to survive scrutiny.
- **Corporate & Cross-Border Structuring.** Corporate architecture, holding design, governance and cross-border organization aligned to license and banking reality.
- **Legal & Contractual Architecture.** Legal and contractual architecture for multi-jurisdiction regulated operations: coordination, frameworks and structural requirements.
- **Operational Remediation & Readiness.** Strategic crisis entry for licensing delays, banking failures, compliance gaps, audit readiness and operational instability.

## Industries (where — not service areas)

- iGaming
- Fintech
- Digital Assets
- High-Risk Operations

## Engagement models (how — not service areas)

| Model | Role |
|---|---|
| Lead Contractor Programme | One point of accountability across layers |
| Managed Project | Defined scope programme |
| Strategic Mandate | High-stakes path design before scale |
| Embedded Capability | Operated capability inside the business |

## Client segment overlay

- **Private Clients / beneficial owners** map to Ownership & UBO architecture under Corporate & Cross-Border. They are a client segment and specialist page (`/private-clients`), not a seventh public service pillar.

## Non-public classes (must not become Solutions)

| ID | Class | Public rule | Reason |
|---|---|---|---|
| INT-OC8-TAX-ACCT-AUDIT | Tax, accounting, BPO, perícia and related BR finance | INTERNAL_ONLY — not a public Solution area in V1 | Delivered via OC8 reseller model; prior packs DO_NOT_PUBLISH; Issue #13 candidate area deferred pending Rubio decision |
| INT-LEG-LITIGATION-BR | Brazil litigation catalogue (tributário contencioso, trabalhista, etc.) | INTERNAL_ONLY | Reserved practice / partner counsel path — not Octus Solutions face |
| INT-ISO-PRODUCTS | ISO certification products as catalogue SKUs | DO_NOT_PUBLISH until evidence gate | Readiness may be public; certification products need proof |
| INT-PARTNER-BRANDS | OC8, Antera, Rubio Adv., Irati as public brands | NEVER_PUBLIC_BRAND | Client pays Octus; partners are delivery provenance |
| INT-ENGAGEMENT-P6 | Parceria Contínua / hour packages as a 7th Solution | ENGAGEMENT_MODEL_NOT_SOLUTION | P6 and hour blocks are how we engage, not a peer service area |

## Public services

Total public service rows: **29** (HIGH confidence: 19; MEDIUM: 10).

Responsible person per service is intentionally blank until human assignment.

### AREA-01 — Regulatory Strategy & Licensing

#### SA-01-01 — Licensing strategy & pathway design

| Field | Value |
|---|---|
| One-sentence description | Pathway and sequencing design for the operation’s actual model — jurisdiction fit, ownership constraints and filing logic — before documentation is submitted. |
| Common client need | Entering a regulated market or changing venue |
| Client profile | Operators entering or changing a regulated venue who need a coherent licensing path before filing. |
| Relevant industries | iGaming; Fintech; Digital Assets |
| Relevant jurisdictions | multi-jurisdiction by fit |
| Responsible Octus capability | Regulatory Strategy & Licensing (Octus) |
| Responsible person | HUMAN_ASSIGNMENT_REQUIRED |
| Delivery model (hub narrative) | Typically a Managed Project or Lead Contractor programme when licensing sits inside a broader structural rebuild. |
| Delivery model classes | managed_project, lead_contractor, strategic_mandate |
| Public status | PUBLIC_CANDIDATE |
| Catalog lifecycle | REQUIRES_RUBIO_REVIEW |
| Confidence | HIGH |
| Website surface | hub_section |
| Website route | — |
| Last reviewed | 2026-08-02 |

**Scope included**
- Jurisdiction-fit pathway design
- Sequencing of filings vs operational readiness
- Coordination plan for advisors and authorities

**Scope excluded**
- Guaranteed licence approval
- Acting as licensed counsel where reserved
- Venue shopping without operational fit analysis

**Typical deliverables**
- Licensing pathway memo
- Filing sequence plan
- Dependency map across corporate, compliance and banking

**Mapped internal SKUs**
- `OCTUS_ADV_INTL_*`
- `OCTUS_REG_* (programme coordination)`
- `P3 Licença & Regulatório`

**Mapped playbooks / sources**
- Axle playbooks for OCTUS_REG_* (partial)
- Notion Regulatory hub

**Capacity / honesty note:** Core Octus capability with live hub coverage; jurisdiction-specific filings vary by venue.

**Evidence paths**
- `octus-consulting/lib/commercial.ts`
- `octus-consulting/docs/website/service-architecture/SERVICE_CANONICAL_MASTER.md`
- `octus-consulting/docs/website/service-architecture/CANONICAL_SERVICE_TAXONOMY.md`
- `axle-platform/docs/product/catalog/AXLE_SERVICE_CATALOG_V2_DRAFT_2026-05-30.md`
- `axle-dev-agent/docs/ops/evidence/OCTUS_COMMERCIAL/OPERATING_MODEL_2026-07-26/OFFER_ARCHITECTURE.md`
- `GitHub Issue rubioprojects/octus-consulting#13`

#### SA-01-02 — iGaming licensing programme

| Field | Value |
|---|---|
| One-sentence description | Venue licensing as a structural programme: dossier coordination, local requirements and alignment with corporate, compliance and banking layers. |
| Common client need | Entering a regulated market or changing venue |
| Client profile | iGaming operators seeking a regulated venue path without treating licensing as a broker product. |
| Relevant industries | iGaming; Fintech; Digital Assets |
| Relevant jurisdictions | Anjouan; Curaçao; Kahnawake; Malta; Isle of Man; other venues by fit |
| Responsible Octus capability | Regulatory Strategy & Licensing (Octus) |
| Responsible person | HUMAN_ASSIGNMENT_REQUIRED |
| Delivery model (hub narrative) | Typically a Managed Project or Lead Contractor programme when licensing sits inside a broader structural rebuild. |
| Delivery model classes | managed_project, lead_contractor, strategic_mandate |
| Public status | PUBLIC_CANDIDATE |
| Catalog lifecycle | REQUIRES_RUBIO_REVIEW |
| Confidence | HIGH |
| Website surface | dedicated_page |
| Website route | `/solutions/regulatory/igaming-licensing` |
| Last reviewed | 2026-08-02 |

**Scope included**
- Venue licensing programme coordination
- Alignment with corporate, compliance and banking layers
- Ongoing licence maintenance pathways when scoped

**Scope excluded**
- Guaranteed licence issuance
- Operating the gaming platform
- Promising specific venue timelines as contractual SLAs

**Typical deliverables**
- iGaming licensing workstream plan
- Dossier coordination pack
- Local/CSP requirement checklist

**Mapped internal SKUs**
- `OCTUS_REG_ANJOUAN_LIC`
- `OCTUS_REG_CURACAO_LIC`
- `OCTUS_REG_KAHNAWAKE_LIC`
- `OCTUS_REG_MALTA_LIC`
- `OCTUS_REG_IOM_LIC`
- `OCTUS_OPS_IGAMING_*`

**Mapped playbooks / sources**
- AXLE_SERVICE_PLAYBOOKS: OCTUS_REG_ANJOUAN_LIC
- OCTUS_REG_CURACAO_LIC
- OCTUS_REG_MALTA_LIC (partial)

**Capacity / honesty note:** Live deep page. Malta/complex EU venues marked partial in playbook coverage. Pilot SKUs for Anjouan/Curaçao gated (pricing/scope review).

**Evidence paths**
- `octus-consulting/lib/commercial.ts`
- `octus-consulting/docs/website/service-architecture/SERVICE_CANONICAL_MASTER.md`
- `octus-consulting/docs/website/service-architecture/CANONICAL_SERVICE_TAXONOMY.md`
- `axle-platform/docs/product/catalog/AXLE_SERVICE_CATALOG_V2_DRAFT_2026-05-30.md`
- `axle-dev-agent/docs/ops/evidence/OCTUS_COMMERCIAL/OPERATING_MODEL_2026-07-26/OFFER_ARCHITECTURE.md`
- `GitHub Issue rubioprojects/octus-consulting#13`

#### SA-01-03 — Fintech / EMI licensing

| Field | Value |
|---|---|
| One-sentence description | Fintech and payments authorisation treated as an operable stack — not a standalone filing — so post-approval operation is structurally possible. |
| Common client need | Entering a regulated market or changing venue |
| Client profile | Fintech and payments operators needing authorisation treated as an operable stack. |
| Relevant industries | iGaming; Fintech; Digital Assets |
| Relevant jurisdictions | multi-jurisdiction by fit |
| Responsible Octus capability | Regulatory Strategy & Licensing (Octus) |
| Responsible person | HUMAN_ASSIGNMENT_REQUIRED |
| Delivery model (hub narrative) | Typically a Managed Project or Lead Contractor programme when licensing sits inside a broader structural rebuild. |
| Delivery model classes | managed_project, lead_contractor, strategic_mandate |
| Public status | PUBLIC_CANDIDATE |
| Catalog lifecycle | REQUIRES_RUBIO_REVIEW |
| Confidence | HIGH |
| Website surface | dedicated_page |
| Website route | `/solutions/regulatory/fintech-licensing` |
| Last reviewed | 2026-08-02 |

**Scope included**
- EMI/PI-class and related fintech authorisation programme design
- Sequencing with corporate and compliance layers

**Scope excluded**
- Guaranteed authorisation
- Bank account opening guarantees
- Acting as the licensed e-money institution

**Typical deliverables**
- Fintech/EMI licensing pathway
- Operable-stack readiness map
- Workstream plan with banking and compliance deps

**Mapped internal SKUs**
- `OCTUS_REG_MNE_EMI`
- `OCTUS_REG_LVA_EMI`
- `OCTUS_REG_LTU_EMI`
- `OCTUS_REG_UK_EMI`
- `OCTUS_REG_CH_FINMA`
- `OCTUS_REG_BR_BACEN`
- `OCTUS_REG_OFFSHORE_CRYPTO`
- `OCTUS_REG_EU_MICA`

**Mapped playbooks / sources**
- AXLE: OCTUS_REG_MNE_EMI (partial — Rubio review noted)

**Capacity / honesty note:** Live deep page. Several EMI playbooks partial pending legal review.

**Evidence paths**
- `octus-consulting/lib/commercial.ts`
- `octus-consulting/docs/website/service-architecture/SERVICE_CANONICAL_MASTER.md`
- `octus-consulting/docs/website/service-architecture/CANONICAL_SERVICE_TAXONOMY.md`
- `axle-platform/docs/product/catalog/AXLE_SERVICE_CATALOG_V2_DRAFT_2026-05-30.md`
- `axle-dev-agent/docs/ops/evidence/OCTUS_COMMERCIAL/OPERATING_MODEL_2026-07-26/OFFER_ARCHITECTURE.md`
- `GitHub Issue rubioprojects/octus-consulting#13`

#### SA-01-04 — Market entry coordination

| Field | Value |
|---|---|
| One-sentence description | Entry into a new regulated market as a sequenced programme: regulatory, corporate, compliance and banking workstreams aligned before commercial commitments harden. |
| Common client need | Entering a regulated market or changing venue |
| Client profile | Groups expanding into a new regulated market who need structure before go-to-market. |
| Relevant industries | iGaming; Fintech; Digital Assets |
| Relevant jurisdictions | multi-jurisdiction by fit |
| Responsible Octus capability | Regulatory Strategy & Licensing (Octus) |
| Responsible person | HUMAN_ASSIGNMENT_REQUIRED |
| Delivery model (hub narrative) | Typically a Managed Project or Lead Contractor programme when licensing sits inside a broader structural rebuild. |
| Delivery model classes | managed_project, lead_contractor, strategic_mandate |
| Public status | PUBLIC_CANDIDATE |
| Catalog lifecycle | REQUIRES_RUBIO_REVIEW |
| Confidence | HIGH |
| Website surface | dedicated_page |
| Website route | `/solutions/regulatory/market-entry` |
| Last reviewed | 2026-08-02 |

**Scope included**
- Entry as sequenced programme across regulatory, corporate, compliance and banking
- Coordination of workstreams before commercial commitments harden

**Scope excluded**
- Guaranteed market access
- Local entity formation without architecture
- Treating International Hub as a standalone product

**Typical deliverables**
- Market entry programme plan
- Cross-workstream sequencing
- Jurisdiction fit summary

**Mapped internal SKUs**
- `P1 Setup Internacional`
- `OCTUS_CORP_*`
- `OCTUS_REG_*`

**Mapped playbooks / sources**
- Partial — market entry deep page + commercial OS P1

**Capacity / honesty note:** Live deep page. Legacy International Hub demoted to this programme lens.

**Evidence paths**
- `octus-consulting/lib/commercial.ts`
- `octus-consulting/docs/website/service-architecture/SERVICE_CANONICAL_MASTER.md`
- `octus-consulting/docs/website/service-architecture/CANONICAL_SERVICE_TAXONOMY.md`
- `axle-platform/docs/product/catalog/AXLE_SERVICE_CATALOG_V2_DRAFT_2026-05-30.md`
- `axle-dev-agent/docs/ops/evidence/OCTUS_COMMERCIAL/OPERATING_MODEL_2026-07-26/OFFER_ARCHITECTURE.md`
- `GitHub Issue rubioprojects/octus-consulting#13`

#### SA-01-JUR — Jurisdiction selection & risk mapping

| Field | Value |
|---|---|
| One-sentence description | Comparative fit analysis across candidate venues — timeline, structural requirements, banking access and operational risk — selected for the operation, not for convenience. |
| Common client need | Entering a regulated market or changing venue |
| Client profile | Operators choosing between candidate venues before committing to a filing path. |
| Relevant industries | iGaming; Fintech; Digital Assets |
| Relevant jurisdictions | multi-jurisdiction by fit |
| Responsible Octus capability | Regulatory Strategy & Licensing (Octus) |
| Responsible person | HUMAN_ASSIGNMENT_REQUIRED |
| Delivery model (hub narrative) | Typically a Managed Project or Lead Contractor programme when licensing sits inside a broader structural rebuild. |
| Delivery model classes | managed_project, lead_contractor, strategic_mandate |
| Public status | PUBLIC_CANDIDATE |
| Catalog lifecycle | REQUIRES_RUBIO_REVIEW |
| Confidence | MEDIUM |
| Website surface | education_routes |
| Website route | `/jurisdictions` |
| Last reviewed | 2026-08-02 |

**Scope included**
- Comparative venue fit analysis
- Timeline and structural requirement mapping
- Banking-access risk notes at strategy level

**Scope excluded**
- Selling jurisdictions as products
- Guaranteed banking or licence outcomes by venue

**Typical deliverables**
- Jurisdiction options memo
- Comparative fit and risk map

**Mapped internal SKUs**
- `OCTUS_CORP_INTL_STUDY`
- `advisory discovery / deep dive`

**Mapped playbooks / sources**
- Website /jurisdictions education; strategy playbooks partial

**Capacity / honesty note:** Education routes exist; not a dedicated Solutions deep page for every venue.

**Evidence paths**
- `octus-consulting/lib/commercial.ts`
- `octus-consulting/docs/website/service-architecture/SERVICE_CANONICAL_MASTER.md`
- `octus-consulting/docs/website/service-architecture/CANONICAL_SERVICE_TAXONOMY.md`
- `axle-platform/docs/product/catalog/AXLE_SERVICE_CATALOG_V2_DRAFT_2026-05-30.md`
- `axle-dev-agent/docs/ops/evidence/OCTUS_COMMERCIAL/OPERATING_MODEL_2026-07-26/OFFER_ARCHITECTURE.md`
- `GitHub Issue rubioprojects/octus-consulting#13`

#### SA-01-REG — Regulator interaction planning

| Field | Value |
|---|---|
| One-sentence description | Planning how the operation engages authorities and advisors — questions, clarifications and formal submissions — as a coordinated interface, without overclaiming representation. |
| Common client need | Entering a regulated market or changing venue |
| Client profile | Teams whose filings stall because authority engagement is uncoordinated. |
| Relevant industries | iGaming; Fintech; Digital Assets |
| Relevant jurisdictions | multi-jurisdiction by fit |
| Responsible Octus capability | Regulatory Strategy & Licensing (Octus) |
| Responsible person | HUMAN_ASSIGNMENT_REQUIRED |
| Delivery model (hub narrative) | Typically a Managed Project or Lead Contractor programme when licensing sits inside a broader structural rebuild. |
| Delivery model classes | managed_project, lead_contractor, strategic_mandate |
| Public status | PUBLIC_CANDIDATE |
| Catalog lifecycle | REQUIRES_RUBIO_REVIEW |
| Confidence | MEDIUM |
| Website surface | hub_section |
| Website route | — |
| Last reviewed | 2026-08-02 |

**Scope included**
- Planning how the operation engages authorities and advisors
- Coordination of clarifications and formal submissions

**Scope excluded**
- Overclaiming legal representation
- Guaranteeing authority responses or outcomes

**Typical deliverables**
- Authority engagement plan
- Question/clarification tracker
- Submission coordination checklist

**Mapped internal SKUs**
- `OCTUS_ADV_INTL_*`
- `licensing programme SKUs`

**Mapped playbooks / sources**
- Embedded in licensing playbooks

**Capacity / honesty note:** Hub section only; no dedicated public deep page.

**Evidence paths**
- `octus-consulting/lib/commercial.ts`
- `octus-consulting/docs/website/service-architecture/SERVICE_CANONICAL_MASTER.md`
- `octus-consulting/docs/website/service-architecture/CANONICAL_SERVICE_TAXONOMY.md`
- `axle-platform/docs/product/catalog/AXLE_SERVICE_CATALOG_V2_DRAFT_2026-05-30.md`
- `axle-dev-agent/docs/ops/evidence/OCTUS_COMMERCIAL/OPERATING_MODEL_2026-07-26/OFFER_ARCHITECTURE.md`
- `GitHub Issue rubioprojects/octus-consulting#13`

#### SA-01-05 — Brazil SPA/MF regulatory support

| Field | Value |
|---|---|
| One-sentence description | Brazil-facing regulatory coordination for operators entering or adapting to the national betting framework — corporate sequencing, dossier workstreams and authority interaction planning. |
| Common client need | Entering a regulated market or changing venue |
| Client profile | Operators entering or adapting to Brazil's national betting framework. |
| Relevant industries | iGaming; Fintech; Digital Assets |
| Relevant jurisdictions | Brazil |
| Responsible Octus capability | Regulatory Strategy & Licensing (Octus) |
| Responsible person | HUMAN_ASSIGNMENT_REQUIRED |
| Delivery model (hub narrative) | Typically a Managed Project or Lead Contractor programme when licensing sits inside a broader structural rebuild. |
| Delivery model classes | managed_project, lead_contractor, strategic_mandate |
| Public status | PUBLIC_CANDIDATE_CONTROLLED |
| Catalog lifecycle | REQUIRES_RUBIO_REVIEW |
| Confidence | MEDIUM |
| Website surface | specialist_page |
| Website route | `/brazil` |
| Last reviewed | 2026-08-02 |

**Scope included**
- Brazil-facing regulatory coordination for betting/operator framework entry or adaptation
- Dossier workstream coordination with counsel

**Scope excluded**
- Guaranteed SPA/MF authorisation
- Publishing OC8 or counsel brands as the Octus face

**Typical deliverables**
- Brazil regulatory workstream plan
- Corporate sequencing notes
- Authority interaction planning

**Mapped internal SKUs**
- `OCTUS_REG_BR_SPA (tbd)`
- `OCTUS_OPS_IGAMING_REPLEGAL`
- `Brazil education content`

**Mapped playbooks / sources**
- Catalog marks OCTUS_REG_BR_SPA as tbd / inquiry

**Capacity / honesty note:** Public education via /brazil. SPA SKU status tbd pending regulatory clarity — do not overclaim.

**Evidence paths**
- `octus-consulting/lib/commercial.ts`
- `octus-consulting/docs/website/service-architecture/SERVICE_CANONICAL_MASTER.md`
- `octus-consulting/docs/website/service-architecture/CANONICAL_SERVICE_TAXONOMY.md`
- `axle-platform/docs/product/catalog/AXLE_SERVICE_CATALOG_V2_DRAFT_2026-05-30.md`
- `axle-dev-agent/docs/ops/evidence/OCTUS_COMMERCIAL/OPERATING_MODEL_2026-07-26/OFFER_ARCHITECTURE.md`
- `GitHub Issue rubioprojects/octus-consulting#13`

### AREA-02 — Banking, Payments & Financial Infrastructure

#### SA-02-01 — Banking readiness / bankability

| Field | Value |
|---|---|
| One-sentence description | Structural readiness for banking conversations: documentation, ownership clarity and compliance posture aligned to how onboarding actually scrutinises high-risk operations. No promised accounts. |
| Common client need | Bank or PSP rejection loops |
| Client profile | Licensed or near-licensed operators stuck in bank or PSP rejection loops. |
| Relevant industries | High-Risk Operations; Fintech; iGaming |
| Relevant jurisdictions | multi-jurisdiction by fit |
| Responsible Octus capability | Banking, Payments & Financial Infrastructure (Octus) |
| Responsible person | HUMAN_ASSIGNMENT_REQUIRED |
| Delivery model (hub narrative) | Often paired with Remediation when banking has already failed, or with Lead Contractor when building the full stack. |
| Delivery model classes | managed_project, lead_contractor, strategic_mandate |
| Public status | PUBLIC_CANDIDATE |
| Catalog lifecycle | REQUIRES_RUBIO_REVIEW |
| Confidence | HIGH |
| Website surface | dedicated_page |
| Website route | `/solutions/banking/banking-payments` |
| Last reviewed | 2026-08-02 |

**Scope included**
- Structural readiness for banking conversations
- Alignment of ownership, compliance posture and documentation

**Scope excluded**
- Promised bank accounts
- Guaranteed onboarding outcomes
- Acting as the bank

**Typical deliverables**
- Bankability readiness pack
- Documentation and ownership clarity checklist
- Bank/PSP optioning notes (non-promise)

**Mapped internal SKUs**
- `OCTUS_BNK_INTL_HIGHRISK`
- `OCTUS_BNK_INTL_PSP`
- `octus-pilot-banking-support`
- `P4 Conta Bancária Operacional Internacional`

**Mapped playbooks / sources**
- Axle banking playbooks (partial — high-risk marked incomplete legal basis)

**Capacity / honesty note:** Live banking deep page. High-risk banking playbook flagged for legal review — claims must stay process-level.

**Evidence paths**
- `octus-consulting/lib/commercial.ts`
- `octus-consulting/docs/website/service-architecture/SERVICE_CANONICAL_MASTER.md`
- `octus-consulting/docs/website/service-architecture/CANONICAL_SERVICE_TAXONOMY.md`
- `axle-platform/docs/product/catalog/AXLE_SERVICE_CATALOG_V2_DRAFT_2026-05-30.md`
- `axle-dev-agent/docs/ops/evidence/OCTUS_COMMERCIAL/OPERATING_MODEL_2026-07-26/OFFER_ARCHITECTURE.md`
- `GitHub Issue rubioprojects/octus-consulting#13`

#### SA-02-02 — Payment & PSP architecture

| Field | Value |
|---|---|
| One-sentence description | Payment and PSP architecture options matched to the operation’s risk profile, markets and settlement needs — designed before provider conversations harden into dead ends. |
| Common client need | Bank or PSP rejection loops |
| Client profile | Operators whose payment stack is incompatible with their risk profile or settlement needs. |
| Relevant industries | High-Risk Operations; Fintech; iGaming |
| Relevant jurisdictions | multi-jurisdiction by fit |
| Responsible Octus capability | Banking, Payments & Financial Infrastructure (Octus) |
| Responsible person | HUMAN_ASSIGNMENT_REQUIRED |
| Delivery model (hub narrative) | Often paired with Remediation when banking has already failed, or with Lead Contractor when building the full stack. |
| Delivery model classes | managed_project, lead_contractor, strategic_mandate |
| Public status | PUBLIC_CANDIDATE |
| Catalog lifecycle | REQUIRES_RUBIO_REVIEW |
| Confidence | HIGH |
| Website surface | dedicated_page |
| Website route | `/solutions/banking/banking-payments` |
| Last reviewed | 2026-08-02 |

**Scope included**
- Payment and PSP architecture optioning
- Matching stack choices to markets and risk

**Scope excluded**
- Guaranteed PSP onboarding
- Operating payment rails
- Vendor margin disclosure

**Typical deliverables**
- Payment/PSP architecture options
- Provider map matched to risk profile
- Settlement and stack notes

**Mapped internal SKUs**
- `OCTUS_BNK_INTL_PSP`
- `OCTUS_OPS_IGAMING_PAY2`
- `OCTUS_OPS_IGAMING_PAYILIM`

**Mapped playbooks / sources**
- Notion Hub Métodos de Pagamento (referenced in prior packs)

**Capacity / honesty note:** Covered on banking deep page; not a separate SKU gallery.

**Evidence paths**
- `octus-consulting/lib/commercial.ts`
- `octus-consulting/docs/website/service-architecture/SERVICE_CANONICAL_MASTER.md`
- `octus-consulting/docs/website/service-architecture/CANONICAL_SERVICE_TAXONOMY.md`
- `axle-platform/docs/product/catalog/AXLE_SERVICE_CATALOG_V2_DRAFT_2026-05-30.md`
- `axle-dev-agent/docs/ops/evidence/OCTUS_COMMERCIAL/OPERATING_MODEL_2026-07-26/OFFER_ARCHITECTURE.md`
- `GitHub Issue rubioprojects/octus-consulting#13`

#### SA-02-03 — Financial infrastructure remediation

| Field | Value |
|---|---|
| One-sentence description | When banking or payment infrastructure has already failed, remediation is sequenced with compliance and corporate layers — often entering through the crisis door. |
| Common client need | Bank or PSP rejection loops |
| Client profile | Operators already rejected or cut off by banks/PSPs. |
| Relevant industries | High-Risk Operations; Fintech; iGaming |
| Relevant jurisdictions | multi-jurisdiction by fit |
| Responsible Octus capability | Banking + Operational Remediation (Octus) |
| Responsible person | HUMAN_ASSIGNMENT_REQUIRED |
| Delivery model (hub narrative) | Often paired with Remediation when banking has already failed, or with Lead Contractor when building the full stack. |
| Delivery model classes | managed_project, lead_contractor, strategic_mandate |
| Public status | PUBLIC_CANDIDATE |
| Catalog lifecycle | REQUIRES_RUBIO_REVIEW |
| Confidence | MEDIUM |
| Website surface | hub_section_crosslink |
| Website route | — |
| Last reviewed | 2026-08-02 |

**Scope included**
- Remediation when banking/payment infrastructure already failed
- Coordination with compliance and corporate layers

**Scope excluded**
- Guaranteed restoration of banking
- Crisis theatre without structural fixes

**Typical deliverables**
- Financial infrastructure remediation plan
- Sequenced recovery workstreams

**Mapped internal SKUs**
- `OCTUS_ADV_INTL_CRISIS`
- `banking SKUs under remediation programmes`

**Mapped playbooks / sources**
- Often routes via Solution 06 crisis entry

**Capacity / honesty note:** Cross-links to Remediation; capacity is programme-based, not a standalone product promise.

**Evidence paths**
- `octus-consulting/lib/commercial.ts`
- `octus-consulting/docs/website/service-architecture/SERVICE_CANONICAL_MASTER.md`
- `octus-consulting/docs/website/service-architecture/CANONICAL_SERVICE_TAXONOMY.md`
- `axle-platform/docs/product/catalog/AXLE_SERVICE_CATALOG_V2_DRAFT_2026-05-30.md`
- `axle-dev-agent/docs/ops/evidence/OCTUS_COMMERCIAL/OPERATING_MODEL_2026-07-26/OFFER_ARCHITECTURE.md`
- `GitHub Issue rubioprojects/octus-consulting#13`

### AREA-03 — Compliance & Risk Systems

#### SA-03-01 — AML / KYC / CDD frameworks

| Field | Value |
|---|---|
| One-sentence description | Operational frameworks for identification, monitoring and due diligence — designed to hold under regulator, bank and PSP scrutiny. |
| Common client need | Audit or banking questions the team cannot answer |
| Client profile | Regulated operators whose paper AML does not survive bank or regulator questions. |
| Relevant industries | iGaming; Fintech; Digital Assets; High-Risk Operations |
| Relevant jurisdictions | multi-jurisdiction by fit |
| Responsible Octus capability | Compliance & Risk Systems (Octus) |
| Responsible person | HUMAN_ASSIGNMENT_REQUIRED |
| Delivery model (hub narrative) | Managed Project for build-out; Embedded Capability for ongoing operated compliance. |
| Delivery model classes | managed_project, lead_contractor, strategic_mandate |
| Public status | PUBLIC_CANDIDATE |
| Catalog lifecycle | REQUIRES_RUBIO_REVIEW |
| Confidence | HIGH |
| Website surface | dedicated_page |
| Website route | `/solutions/compliance/aml-kyc` |
| Last reviewed | 2026-08-02 |

**Scope included**
- Operational frameworks for identification, monitoring and due diligence
- Design for regulator, bank and PSP scrutiny

**Scope excluded**
- Guaranteed audit pass
- Outsourcing client decision rights on risk acceptance

**Typical deliverables**
- AML/KYC/CDD framework pack
- Onboarding model
- Monitoring design notes

**Mapped internal SKUs**
- `OCTUS_COMP_INTL_DD`
- `OCTUS_COMP_INTL_POLICIES`
- `OCTUS_COMP_CRYPTO_AML`
- `ANTERA_SCAN/BUILD (delivery metadata internal)`

**Mapped playbooks / sources**
- Notion KYC + Axle compliance playbooks

**Capacity / honesty note:** Live deep page. Delivery partners may execute; public brand remains Octus.

**Evidence paths**
- `octus-consulting/lib/commercial.ts`
- `octus-consulting/docs/website/service-architecture/SERVICE_CANONICAL_MASTER.md`
- `octus-consulting/docs/website/service-architecture/CANONICAL_SERVICE_TAXONOMY.md`
- `axle-platform/docs/product/catalog/AXLE_SERVICE_CATALOG_V2_DRAFT_2026-05-30.md`
- `axle-dev-agent/docs/ops/evidence/OCTUS_COMMERCIAL/OPERATING_MODEL_2026-07-26/OFFER_ARCHITECTURE.md`
- `GitHub Issue rubioprojects/octus-consulting#13`

#### SA-03-02 — Compliance-as-a-Service

| Field | Value |
|---|---|
| One-sentence description | Operated compliance capability inside the business — accountable ownership of the compliance function without transferring decisions Octus does not control. |
| Common client need | Audit or banking questions the team cannot answer |
| Client profile | Operators needing embedded compliance capability rather than one-off policies. |
| Relevant industries | iGaming; Fintech; Digital Assets; High-Risk Operations |
| Relevant jurisdictions | multi-jurisdiction by fit |
| Responsible Octus capability | Compliance & Risk Systems (Octus) |
| Responsible person | HUMAN_ASSIGNMENT_REQUIRED |
| Delivery model (hub narrative) | Managed Project for build-out; Embedded Capability for ongoing operated compliance. |
| Delivery model classes | embedded_capability, retainer, managed_project |
| Public status | PUBLIC_CANDIDATE |
| Catalog lifecycle | REQUIRES_RUBIO_REVIEW |
| Confidence | HIGH |
| Website surface | dedicated_page |
| Website route | `/solutions/compliance/compliance-as-a-service` |
| Last reviewed | 2026-08-02 |

**Scope included**
- Operated compliance capability inside the business
- Ongoing ownership of the compliance function as scoped

**Scope excluded**
- Transferring decisions Octus does not control
- Naming delivery partners as public brands
- Guaranteed regulatory outcomes

**Typical deliverables**
- Operated compliance function model
- RACI for CO role
- Recurring reporting cadence (as scoped)

**Mapped internal SKUs**
- `OCTUS_COMP_INTL_CO`
- `ANTERA_SHIELD_* / ANTERA_AVUL_CO (internal delivery)`
- `P5 / P6 pathways`

**Mapped playbooks / sources**
- Notion CO + Antera delivery hubs (internal)

**Capacity / honesty note:** Live deep page. Recurring delivery depends on partner capacity; do not publish partner names.

**Evidence paths**
- `octus-consulting/lib/commercial.ts`
- `octus-consulting/docs/website/service-architecture/SERVICE_CANONICAL_MASTER.md`
- `octus-consulting/docs/website/service-architecture/CANONICAL_SERVICE_TAXONOMY.md`
- `axle-platform/docs/product/catalog/AXLE_SERVICE_CATALOG_V2_DRAFT_2026-05-30.md`
- `axle-dev-agent/docs/ops/evidence/OCTUS_COMMERCIAL/OPERATING_MODEL_2026-07-26/OFFER_ARCHITECTURE.md`
- `GitHub Issue rubioprojects/octus-consulting#13`

#### SA-03-03 — DPO-as-a-Service

| Field | Value |
|---|---|
| One-sentence description | Operated DPO capability for LGPD and GDPR contexts — privacy accountability as a working role, not a nominal appointment. |
| Common client need | Audit or banking questions the team cannot answer |
| Client profile | Operators needing a working privacy function, not a name on a form. |
| Relevant industries | iGaming; Fintech; Digital Assets; High-Risk Operations |
| Relevant jurisdictions | multi-jurisdiction by fit |
| Responsible Octus capability | Compliance & Risk Systems (Octus) |
| Responsible person | HUMAN_ASSIGNMENT_REQUIRED |
| Delivery model (hub narrative) | Managed Project for build-out; Embedded Capability for ongoing operated compliance. |
| Delivery model classes | embedded_capability, retainer, managed_project |
| Public status | PUBLIC_CANDIDATE |
| Catalog lifecycle | REQUIRES_RUBIO_REVIEW |
| Confidence | HIGH |
| Website surface | dedicated_page |
| Website route | `/solutions/compliance/dpo-as-a-service` |
| Last reviewed | 2026-08-02 |

**Scope included**
- Operated DPO capability for LGPD and GDPR contexts

**Scope excluded**
- Nominal DPO appointment without operation
- Guaranteed data-authority outcomes
- Publishing delivery-partner brands

**Typical deliverables**
- Operated DPO function model
- Privacy accountability cadence
- LGPD/GDPR working artefacts as scoped

**Mapped internal SKUs**
- `OCTUS_COMP_INTL_DPO`
- `OCTUS_COMP_BR_LGPD`
- `octus-pilot-dpo-support`
- `ANTERA_AVUL_DPO (internal)`

**Mapped playbooks / sources**
- Notion DPO hub

**Capacity / honesty note:** Live deep page. Pilot DPO support active in Axle seed (retainer-oriented).

**Evidence paths**
- `octus-consulting/lib/commercial.ts`
- `octus-consulting/docs/website/service-architecture/SERVICE_CANONICAL_MASTER.md`
- `octus-consulting/docs/website/service-architecture/CANONICAL_SERVICE_TAXONOMY.md`
- `axle-platform/docs/product/catalog/AXLE_SERVICE_CATALOG_V2_DRAFT_2026-05-30.md`
- `axle-dev-agent/docs/ops/evidence/OCTUS_COMMERCIAL/OPERATING_MODEL_2026-07-26/OFFER_ARCHITECTURE.md`
- `GitHub Issue rubioprojects/octus-consulting#13`

#### SA-03-04 — Internal controls & governance

| Field | Value |
|---|---|
| One-sentence description | Controls and governance design that run in operations — decision rights, evidence trails and process ownership that auditors and banks can actually test. |
| Common client need | Audit or banking questions the team cannot answer |
| Client profile | Operators whose banks or auditors cannot test how decisions and evidence actually work. |
| Relevant industries | iGaming; Fintech; Digital Assets; High-Risk Operations |
| Relevant jurisdictions | multi-jurisdiction by fit |
| Responsible Octus capability | Compliance & Risk Systems (Octus) |
| Responsible person | HUMAN_ASSIGNMENT_REQUIRED |
| Delivery model (hub narrative) | Managed Project for build-out; Embedded Capability for ongoing operated compliance. |
| Delivery model classes | managed_project, lead_contractor, strategic_mandate |
| Public status | PUBLIC_CANDIDATE |
| Catalog lifecycle | REQUIRES_RUBIO_REVIEW |
| Confidence | MEDIUM |
| Website surface | dedicated_page |
| Website route | `/solutions/compliance/internal-controls` |
| Last reviewed | 2026-08-02 |

**Scope included**
- Controls and governance design that run in operations

**Scope excluded**
- ISO certificates as Octus-issued products without evidence gate
- Guaranteed auditor findings

**Typical deliverables**
- Control framework design
- Evidence trail model
- Decision-rights map

**Mapped internal SKUs**
- `OCTUS_COMP_INTL_POLICIES`
- `ANTERA_BUILD_* (internal delivery metadata)`

**Mapped playbooks / sources**
- Notion Controles (partial depth on site)

**Capacity / honesty note:** Dedicated page exists but prior packs mark content as thin relative to other compliance pages.

**Evidence paths**
- `octus-consulting/lib/commercial.ts`
- `octus-consulting/docs/website/service-architecture/SERVICE_CANONICAL_MASTER.md`
- `octus-consulting/docs/website/service-architecture/CANONICAL_SERVICE_TAXONOMY.md`
- `axle-platform/docs/product/catalog/AXLE_SERVICE_CATALOG_V2_DRAFT_2026-05-30.md`
- `axle-dev-agent/docs/ops/evidence/OCTUS_COMMERCIAL/OPERATING_MODEL_2026-07-26/OFFER_ARCHITECTURE.md`
- `GitHub Issue rubioprojects/octus-consulting#13`

#### SA-03-05 — GLI & certification readiness

| Field | Value |
|---|---|
| One-sentence description | Evidence architecture and readiness coordination for laboratory and formal external review. Preparation and gap closure — not a promise of certification outcomes. |
| Common client need | Audit or banking questions the team cannot answer |
| Client profile | Operators facing GLI or similar external review who need readiness, not theatre. |
| Relevant industries | iGaming; Fintech; Digital Assets; High-Risk Operations |
| Relevant jurisdictions | multi-jurisdiction by fit |
| Responsible Octus capability | Compliance & Risk Systems (Octus) |
| Responsible person | HUMAN_ASSIGNMENT_REQUIRED |
| Delivery model (hub narrative) | Managed Project for build-out; Embedded Capability for ongoing operated compliance. |
| Delivery model classes | managed_project, lead_contractor, strategic_mandate |
| Public status | PUBLIC_CANDIDATE |
| Catalog lifecycle | REQUIRES_RUBIO_REVIEW |
| Confidence | HIGH |
| Website surface | dedicated_page |
| Website route | `/solutions/compliance/gli-readiness` |
| Last reviewed | 2026-08-02 |

**Scope included**
- Evidence architecture and readiness coordination for laboratory and formal external review

**Scope excluded**
- Promising certification outcomes
- Claiming Octus is the certifying laboratory
- Publishing ISO product pages without evidence gate

**Typical deliverables**
- Gap analysis
- Evidence register
- Readiness coordination plan

**Mapped internal SKUs**
- `ANTERA_CERTIFY_GLI`
- `ANTERA_CERTIFY_ISO* (INTERNAL until evidence)`
- `related readiness SKUs`

**Mapped playbooks / sources**
- Notion GLI + Hub Labs

**Capacity / honesty note:** Live deep page for readiness. ISO product pages remain DO_NOT_PUBLISH until evidence.

**Evidence paths**
- `octus-consulting/lib/commercial.ts`
- `octus-consulting/docs/website/service-architecture/SERVICE_CANONICAL_MASTER.md`
- `octus-consulting/docs/website/service-architecture/CANONICAL_SERVICE_TAXONOMY.md`
- `axle-platform/docs/product/catalog/AXLE_SERVICE_CATALOG_V2_DRAFT_2026-05-30.md`
- `axle-dev-agent/docs/ops/evidence/OCTUS_COMMERCIAL/OPERATING_MODEL_2026-07-26/OFFER_ARCHITECTURE.md`
- `GitHub Issue rubioprojects/octus-consulting#13`

#### SA-03-06 — Policies & due diligence

| Field | Value |
|---|---|
| One-sentence description | Corporate policy suites and due diligence packs aligned to how the operation actually runs — AML, conduct, data and counterparty review as operating artefacts. |
| Common client need | Audit or banking questions the team cannot answer |
| Client profile | Operators needing policies and DD artefacts that match real flows. |
| Relevant industries | iGaming; Fintech; Digital Assets; High-Risk Operations |
| Relevant jurisdictions | multi-jurisdiction by fit |
| Responsible Octus capability | Compliance & Risk Systems (Octus) |
| Responsible person | HUMAN_ASSIGNMENT_REQUIRED |
| Delivery model (hub narrative) | Managed Project for build-out; Embedded Capability for ongoing operated compliance. |
| Delivery model classes | managed_project, lead_contractor, strategic_mandate |
| Public status | PUBLIC_CANDIDATE |
| Catalog lifecycle | REQUIRES_RUBIO_REVIEW |
| Confidence | HIGH |
| Website surface | hub_section |
| Website route | — |
| Last reviewed | 2026-08-02 |

**Scope included**
- Corporate policy suites and due diligence packs aligned to how the operation runs

**Scope excluded**
- Shelf policies disconnected from operations
- Guaranteed third-party acceptance

**Typical deliverables**
- Policy suite
- Due diligence pack templates
- Operating-artefact alignment notes

**Mapped internal SKUs**
- `OCTUS_COMP_INTL_POLICIES`
- `OCTUS_COMP_INTL_DD`

**Mapped playbooks / sources**
- Notion Políticas + DD

**Capacity / honesty note:** Hub section; no dedicated deep page yet.

**Evidence paths**
- `octus-consulting/lib/commercial.ts`
- `octus-consulting/docs/website/service-architecture/SERVICE_CANONICAL_MASTER.md`
- `octus-consulting/docs/website/service-architecture/CANONICAL_SERVICE_TAXONOMY.md`
- `axle-platform/docs/product/catalog/AXLE_SERVICE_CATALOG_V2_DRAFT_2026-05-30.md`
- `axle-dev-agent/docs/ops/evidence/OCTUS_COMMERCIAL/OPERATING_MODEL_2026-07-26/OFFER_ARCHITECTURE.md`
- `GitHub Issue rubioprojects/octus-consulting#13`

### AREA-04 — Corporate & Cross-Border Structuring

#### SA-04-01 — Entity & holding architecture

| Field | Value |
|---|---|
| One-sentence description | Holdings and group design for regulated operations — so ownership, control and venue requirements remain coherent under scrutiny. |
| Common client need | Group structure blocks licensing or banking |
| Client profile | Groups whose ownership chart will not survive licence or bank scrutiny. |
| Relevant industries | iGaming; Fintech; High-Risk Operations |
| Relevant jurisdictions | multi-jurisdiction by fit |
| Responsible Octus capability | Corporate & Cross-Border Structuring (Octus) |
| Responsible person | HUMAN_ASSIGNMENT_REQUIRED |
| Delivery model (hub narrative) | Usually inside Lead Contractor or Managed Project with Regulatory and Banking hubs. |
| Delivery model classes | managed_project, lead_contractor, strategic_mandate |
| Public status | PUBLIC_CANDIDATE |
| Catalog lifecycle | REQUIRES_RUBIO_REVIEW |
| Confidence | HIGH |
| Website surface | dedicated_page |
| Website route | `/solutions/corporate/holding-design` |
| Last reviewed | 2026-08-02 |

**Scope included**
- Holdings and group design for regulated operations

**Scope excluded**
- Offshore-as-SKU shopping
- Tax/accounting retainer sold as this Solution face

**Typical deliverables**
- Holding/group design memo
- Ownership and control map
- Venue-coherence notes

**Mapped internal SKUs**
- `OCTUS_CORP_INTL_HOLDING (pricing_review)`
- `OCTUS_CORP_INTL_STUDY`
- `OCTUS_CORP_*`

**Mapped playbooks / sources**
- Notion + Catalog HOLDING

**Capacity / honesty note:** Live deep page. Holding SKU pricing_review — no public prices.

**Evidence paths**
- `octus-consulting/lib/commercial.ts`
- `octus-consulting/docs/website/service-architecture/SERVICE_CANONICAL_MASTER.md`
- `octus-consulting/docs/website/service-architecture/CANONICAL_SERVICE_TAXONOMY.md`
- `axle-platform/docs/product/catalog/AXLE_SERVICE_CATALOG_V2_DRAFT_2026-05-30.md`
- `axle-dev-agent/docs/ops/evidence/OCTUS_COMMERCIAL/OPERATING_MODEL_2026-07-26/OFFER_ARCHITECTURE.md`
- `GitHub Issue rubioprojects/octus-consulting#13`

#### SA-04-02 — Company formation (regulated ops)

| Field | Value |
|---|---|
| One-sentence description | Formation inside a designed architecture — entities opened for license and banking fit, not as a standalone incorporation shop. |
| Common client need | Group structure blocks licensing or banking |
| Client profile | Operators who need entities opened for licence and banking fit, not for brochure charts. |
| Relevant industries | iGaming; Fintech; High-Risk Operations |
| Relevant jurisdictions | multi-jurisdiction by fit |
| Responsible Octus capability | Corporate & Cross-Border Structuring (Octus) |
| Responsible person | HUMAN_ASSIGNMENT_REQUIRED |
| Delivery model (hub narrative) | Usually inside Lead Contractor or Managed Project with Regulatory and Banking hubs. |
| Delivery model classes | managed_project, lead_contractor, strategic_mandate |
| Public status | PUBLIC_CANDIDATE |
| Catalog lifecycle | REQUIRES_RUBIO_REVIEW |
| Confidence | HIGH |
| Website surface | dedicated_page |
| Website route | `/solutions/corporate/company-formation` |
| Last reviewed | 2026-08-02 |

**Scope included**
- Company formation as a step inside designed architecture

**Scope excluded**
- Standalone incorporation shop
- Guaranteed banking after formation

**Typical deliverables**
- Formation plan inside architecture
- Entity opening workstream
- Registered agent / CSP coordination path

**Mapped internal SKUs**
- `OCTUS_CORP_US_DELAWARE`
- `OCTUS_CORP_INTL_BVI`
- `OCTUS_CORP_UK_LTD`
- `OCTUS_CORP_BR_EMPRESA`

**Mapped playbooks / sources**
- Notion Abertura

**Capacity / honesty note:** Live deep page. Formation is public; OC8 BR corporate ops remain internal delivery for some BR paths.

**Evidence paths**
- `octus-consulting/lib/commercial.ts`
- `octus-consulting/docs/website/service-architecture/SERVICE_CANONICAL_MASTER.md`
- `octus-consulting/docs/website/service-architecture/CANONICAL_SERVICE_TAXONOMY.md`
- `axle-platform/docs/product/catalog/AXLE_SERVICE_CATALOG_V2_DRAFT_2026-05-30.md`
- `axle-dev-agent/docs/ops/evidence/OCTUS_COMMERCIAL/OPERATING_MODEL_2026-07-26/OFFER_ARCHITECTURE.md`
- `GitHub Issue rubioprojects/octus-consulting#13`

#### SA-04-03 — Cross-border structuring

| Field | Value |
|---|---|
| One-sentence description | Multi-venue organisation design for groups that must hold together across jurisdictions. Language emphasises cross-border architecture over venue shopping. |
| Common client need | Group structure blocks licensing or banking |
| Client profile | Groups that must hold together across jurisdictions under regulated pressure. |
| Relevant industries | iGaming; Fintech; High-Risk Operations |
| Relevant jurisdictions | multi-jurisdiction by fit |
| Responsible Octus capability | Corporate & Cross-Border Structuring (Octus) |
| Responsible person | HUMAN_ASSIGNMENT_REQUIRED |
| Delivery model (hub narrative) | Usually inside Lead Contractor or Managed Project with Regulatory and Banking hubs. |
| Delivery model classes | managed_project, lead_contractor, strategic_mandate |
| Public status | PUBLIC_CANDIDATE |
| Catalog lifecycle | REQUIRES_RUBIO_REVIEW |
| Confidence | HIGH |
| Website surface | dedicated_page |
| Website route | `/solutions/corporate/offshore-structuring` |
| Last reviewed | 2026-08-02 |

**Scope included**
- Multi-venue organisation design
- Cross-border language preferred over offshore marketing

**Scope excluded**
- Offshore formations as hero SKUs
- Secrecy/evasion framing

**Typical deliverables**
- Multi-venue organisation design
- Cross-border structure memo

**Mapped internal SKUs**
- `OCTUS_CORP_INTL_*`
- `P1/P2 packages`

**Mapped playbooks / sources**
- Notion Estrutura Offshore (rename language over time)

**Capacity / honesty note:** Live page still uses offshore slug historically; public language should say cross-border.

**Evidence paths**
- `octus-consulting/lib/commercial.ts`
- `octus-consulting/docs/website/service-architecture/SERVICE_CANONICAL_MASTER.md`
- `octus-consulting/docs/website/service-architecture/CANONICAL_SERVICE_TAXONOMY.md`
- `axle-platform/docs/product/catalog/AXLE_SERVICE_CATALOG_V2_DRAFT_2026-05-30.md`
- `axle-dev-agent/docs/ops/evidence/OCTUS_COMMERCIAL/OPERATING_MODEL_2026-07-26/OFFER_ARCHITECTURE.md`
- `GitHub Issue rubioprojects/octus-consulting#13`

#### SA-04-GOV — Governance architecture

| Field | Value |
|---|---|
| One-sentence description | Board, decision rights and group governance designed so regulated operations can answer ownership and control questions under pressure. |
| Common client need | Group structure blocks licensing or banking |
| Client profile | Groups that cannot answer ownership and control questions under pressure. |
| Relevant industries | iGaming; Fintech; High-Risk Operations |
| Relevant jurisdictions | multi-jurisdiction by fit |
| Responsible Octus capability | Corporate & Cross-Border Structuring (Octus) |
| Responsible person | HUMAN_ASSIGNMENT_REQUIRED |
| Delivery model (hub narrative) | Usually inside Lead Contractor or Managed Project with Regulatory and Banking hubs. |
| Delivery model classes | managed_project, lead_contractor, strategic_mandate |
| Public status | PUBLIC_CANDIDATE |
| Catalog lifecycle | REQUIRES_RUBIO_REVIEW |
| Confidence | MEDIUM |
| Website surface | hub_section |
| Website route | — |
| Last reviewed | 2026-08-02 |

**Scope included**
- Board, decision rights and group governance for regulated operations

**Scope excluded**
- Serving as client board without engagement model
- Litigation counsel catalogue

**Typical deliverables**
- Governance architecture memo
- Decision-rights map
- Board/control answer pack

**Mapped internal SKUs**
- `OCTUS_ADV_INTL_BOARD`
- `corporate governance-related SKUs`

**Mapped playbooks / sources**
- Partial — hub section

**Capacity / honesty note:** Hub section only in current public face.

**Evidence paths**
- `octus-consulting/lib/commercial.ts`
- `octus-consulting/docs/website/service-architecture/SERVICE_CANONICAL_MASTER.md`
- `octus-consulting/docs/website/service-architecture/CANONICAL_SERVICE_TAXONOMY.md`
- `axle-platform/docs/product/catalog/AXLE_SERVICE_CATALOG_V2_DRAFT_2026-05-30.md`
- `axle-dev-agent/docs/ops/evidence/OCTUS_COMMERCIAL/OPERATING_MODEL_2026-07-26/OFFER_ARCHITECTURE.md`
- `GitHub Issue rubioprojects/octus-consulting#13`

#### SA-04-04 — Ownership & UBO architecture

| Field | Value |
|---|---|
| One-sentence description | Ownership and UBO layer for the individuals behind regulated operations — disclosure readiness and structural clarity without treating private clients as a separate brand. |
| Common client need | Group structure blocks licensing or banking |
| Client profile | Beneficial owners and controllers of regulated operations who need structural clarity under scrutiny. |
| Client segment | Private clients / beneficial owners (segment overlay, not equal service pillar) |
| Relevant industries | iGaming; Fintech; High-Risk Operations |
| Relevant jurisdictions | multi-jurisdiction by fit |
| Responsible Octus capability | Corporate & Cross-Border Structuring (Octus) |
| Responsible person | HUMAN_ASSIGNMENT_REQUIRED |
| Delivery model (hub narrative) | Usually inside Lead Contractor or Managed Project with Regulatory and Banking hubs. |
| Delivery model classes | managed_project, lead_contractor, strategic_mandate |
| Public status | PUBLIC_CANDIDATE |
| Catalog lifecycle | REQUIRES_RUBIO_REVIEW |
| Confidence | HIGH |
| Website surface | specialist_page |
| Website route | `/private-clients` |
| Last reviewed | 2026-08-02 |

**Scope included**
- Ownership and UBO layer for individuals behind regulated operations
- Disclosure readiness

**Scope excluded**
- Private wealth brand positioning
- Standalone residency/citizenship shop
- PF tax retainers as public Solution

**Typical deliverables**
- UBO/disclosure readiness framework
- Personal vs operational asset separation notes
- Individual KYC readiness pack

**Mapped internal SKUs**
- `OCTUS_PF_* (controlled)`
- `UBO-related corporate work`

**Mapped playbooks / sources**
- Partial — /private-clients page is primary public surface

**Capacity / honesty note:** Specialist page /private-clients. Not a seventh Solution pillar. PF wealth/residency remain controlled/internal.

**Evidence paths**
- `octus-consulting/lib/commercial.ts`
- `octus-consulting/docs/website/service-architecture/SERVICE_CANONICAL_MASTER.md`
- `octus-consulting/docs/website/service-architecture/CANONICAL_SERVICE_TAXONOMY.md`
- `axle-platform/docs/product/catalog/AXLE_SERVICE_CATALOG_V2_DRAFT_2026-05-30.md`
- `axle-dev-agent/docs/ops/evidence/OCTUS_COMMERCIAL/OPERATING_MODEL_2026-07-26/OFFER_ARCHITECTURE.md`
- `GitHub Issue rubioprojects/octus-consulting#13`

#### SA-04-05 — Corporate reorganisation

| Field | Value |
|---|---|
| One-sentence description | Reorganisation when the existing structure blocks licensing, banking or expansion — sequenced with regulatory and compliance workstreams. |
| Common client need | Group structure blocks licensing or banking |
| Client profile | Groups whose current structure is the blocker. |
| Relevant industries | iGaming; Fintech; High-Risk Operations |
| Relevant jurisdictions | multi-jurisdiction by fit |
| Responsible Octus capability | Corporate & Cross-Border Structuring (Octus) |
| Responsible person | HUMAN_ASSIGNMENT_REQUIRED |
| Delivery model (hub narrative) | Usually inside Lead Contractor or Managed Project with Regulatory and Banking hubs. |
| Delivery model classes | managed_project, lead_contractor, strategic_mandate |
| Public status | PUBLIC_CANDIDATE |
| Catalog lifecycle | REQUIRES_RUBIO_REVIEW |
| Confidence | MEDIUM |
| Website surface | hub_section |
| Website route | — |
| Last reviewed | 2026-08-02 |

**Scope included**
- Reorganisation when existing structure blocks licensing, banking or expansion

**Scope excluded**
- Pure M&A advisory as public hero
- Tax optimisation as the public face

**Typical deliverables**
- Reorganisation plan
- Sequenced workstream with regulatory/compliance

**Mapped internal SKUs**
- `OCTUS_CORP_INTL_CLOSE`
- `corporate reorg programmes`

**Mapped playbooks / sources**
- Partial — legacy /corporate content

**Capacity / honesty note:** Hub section; depth often programme-based with Regulatory/Banking.

**Evidence paths**
- `octus-consulting/lib/commercial.ts`
- `octus-consulting/docs/website/service-architecture/SERVICE_CANONICAL_MASTER.md`
- `octus-consulting/docs/website/service-architecture/CANONICAL_SERVICE_TAXONOMY.md`
- `axle-platform/docs/product/catalog/AXLE_SERVICE_CATALOG_V2_DRAFT_2026-05-30.md`
- `axle-dev-agent/docs/ops/evidence/OCTUS_COMMERCIAL/OPERATING_MODEL_2026-07-26/OFFER_ARCHITECTURE.md`
- `GitHub Issue rubioprojects/octus-consulting#13`

### AREA-05 — Legal & Contractual Architecture

#### SA-05-01 — Contractual architecture

| Field | Value |
|---|---|
| One-sentence description | Contract frameworks across group, operator and commercial layers — aligned to real flows so paper and practice do not diverge under audit. |
| Common client need | Contracts and structures do not match the operating model |
| Client profile | Operators whose contracts do not match how the business actually runs. |
| Relevant industries | iGaming; Fintech; High-Risk Operations |
| Relevant jurisdictions | multi-jurisdiction by fit |
| Responsible Octus capability | Legal & Contractual Architecture (Octus) |
| Responsible person | HUMAN_ASSIGNMENT_REQUIRED |
| Delivery model (hub narrative) | Typically coordinated under Lead Contractor with counsel retained as independent advisors. |
| Delivery model classes | managed_project, lead_contractor, strategic_mandate |
| Public status | PUBLIC_CANDIDATE |
| Catalog lifecycle | REQUIRES_RUBIO_REVIEW |
| Confidence | HIGH |
| Website surface | hub_section |
| Website route | — |
| Last reviewed | 2026-08-02 |

**Scope included**
- Contract frameworks across group, operator and commercial layers

**Scope excluded**
- Law-firm litigation shopfront
- Reserved legal practice claims
- Publishing Rubio Adv. catalogue as Octus Solutions

**Typical deliverables**
- Contract framework map
- Layered contract architecture notes

**Mapped internal SKUs**
- `OCTUS_LEG_INTL_CONTRATO`
- `OCTUS_LEG_INTL_REVCONTRATO`
- `OCTUS_LEG_INTL_NDA`
- `octus-pilot-contract-review`

**Mapped playbooks / sources**
- Notion Contratos + Catalog LEG

**Capacity / honesty note:** Hub-led. Pilot contract review active in Axle seed.

**Evidence paths**
- `octus-consulting/lib/commercial.ts`
- `octus-consulting/docs/website/service-architecture/SERVICE_CANONICAL_MASTER.md`
- `octus-consulting/docs/website/service-architecture/CANONICAL_SERVICE_TAXONOMY.md`
- `axle-platform/docs/product/catalog/AXLE_SERVICE_CATALOG_V2_DRAFT_2026-05-30.md`
- `axle-dev-agent/docs/ops/evidence/OCTUS_COMMERCIAL/OPERATING_MODEL_2026-07-26/OFFER_ARCHITECTURE.md`
- `GitHub Issue rubioprojects/octus-consulting#13`

#### SA-05-02 — Structural legal frameworks

| Field | Value |
|---|---|
| One-sentence description | Multi-jurisdiction legal coherence for regulated operations — coordinating frameworks with independent counsel where the venue requires it. |
| Common client need | Contracts and structures do not match the operating model |
| Client profile | Multi-jurisdiction regulated groups needing legal coherence across venues. |
| Relevant industries | iGaming; Fintech; High-Risk Operations |
| Relevant jurisdictions | multi-jurisdiction by fit |
| Responsible Octus capability | Legal & Contractual Architecture (Octus) |
| Responsible person | HUMAN_ASSIGNMENT_REQUIRED |
| Delivery model (hub narrative) | Typically coordinated under Lead Contractor with counsel retained as independent advisors. |
| Delivery model classes | managed_project, lead_contractor, strategic_mandate |
| Public status | PUBLIC_CANDIDATE |
| Catalog lifecycle | REQUIRES_RUBIO_REVIEW |
| Confidence | MEDIUM |
| Website surface | hub_section |
| Website route | — |
| Last reviewed | 2026-08-02 |

**Scope included**
- Coordinating legal frameworks with independent counsel where venue requires it

**Scope excluded**
- Octus as the law firm of record
- BR litigation catalogue as public Solution

**Typical deliverables**
- Multi-jurisdiction framework map
- Counsel coordination plan

**Mapped internal SKUs**
- `OCTUS_LEG_INTL_OPINION`
- `OCTUS_LEG_INTL_HORA`

**Mapped playbooks / sources**
- Notion Legal hub (partial)

**Capacity / honesty note:** Boundary locked: architecture + coordination, not law firm.

**Evidence paths**
- `octus-consulting/lib/commercial.ts`
- `octus-consulting/docs/website/service-architecture/SERVICE_CANONICAL_MASTER.md`
- `octus-consulting/docs/website/service-architecture/CANONICAL_SERVICE_TAXONOMY.md`
- `axle-platform/docs/product/catalog/AXLE_SERVICE_CATALOG_V2_DRAFT_2026-05-30.md`
- `axle-dev-agent/docs/ops/evidence/OCTUS_COMMERCIAL/OPERATING_MODEL_2026-07-26/OFFER_ARCHITECTURE.md`
- `GitHub Issue rubioprojects/octus-consulting#13`

#### SA-05-03 — Counsel coordination layer

| Field | Value |
|---|---|
| One-sentence description | An execution counterpart for operators and counsel — sequencing structural legal work with licensing, corporate and compliance programmes. |
| Common client need | Contracts and structures do not match the operating model |
| Client profile | Operators and counsel who need a single execution counterpart across workstreams. |
| Relevant industries | iGaming; Fintech; High-Risk Operations |
| Relevant jurisdictions | multi-jurisdiction by fit |
| Responsible Octus capability | Legal & Contractual Architecture (Octus) |
| Responsible person | HUMAN_ASSIGNMENT_REQUIRED |
| Delivery model (hub narrative) | Typically coordinated under Lead Contractor with counsel retained as independent advisors. |
| Delivery model classes | lead_contractor, managed_project |
| Public status | PUBLIC_CANDIDATE |
| Catalog lifecycle | REQUIRES_RUBIO_REVIEW |
| Confidence | HIGH |
| Website surface | engagement_page |
| Website route | `/how-we-engage` |
| Last reviewed | 2026-08-02 |

**Scope included**
- Sequencing structural legal work with licensing, corporate and compliance programmes

**Scope excluded**
- Replacing independent counsel
- Publishing partner counsel brands as Octus

**Typical deliverables**
- Counsel coordination model
- Execution counterpart cadence

**Mapped internal SKUs**
- `Lead Contractor / engagement models`
- `OCTUS_LEG_*`

**Mapped playbooks / sources**
- Engagement model pages

**Capacity / honesty note:** Surfaced via /how-we-engage more than a service SKU page.

**Evidence paths**
- `octus-consulting/lib/commercial.ts`
- `octus-consulting/docs/website/service-architecture/SERVICE_CANONICAL_MASTER.md`
- `octus-consulting/docs/website/service-architecture/CANONICAL_SERVICE_TAXONOMY.md`
- `axle-platform/docs/product/catalog/AXLE_SERVICE_CATALOG_V2_DRAFT_2026-05-30.md`
- `axle-dev-agent/docs/ops/evidence/OCTUS_COMMERCIAL/OPERATING_MODEL_2026-07-26/OFFER_ARCHITECTURE.md`
- `GitHub Issue rubioprojects/octus-consulting#13`

### AREA-06 — Operational Remediation & Readiness

#### SA-06-01 — Crisis entry / structural assessment

| Field | Value |
|---|---|
| One-sentence description | A single intake for blocked or failing operations — fast structural assessment and a sequenced action path. |
| Common client need | Licensing delayed or failing |
| Client profile | Operators blocked, delayed, rejected or failing under regulatory pressure. |
| Relevant industries | High-Risk Operations; iGaming; Fintech |
| Relevant jurisdictions | multi-jurisdiction by fit |
| Responsible Octus capability | Operational Remediation & Readiness (Octus) |
| Responsible person | HUMAN_ASSIGNMENT_REQUIRED |
| Delivery model (hub narrative) | Starts with Assess your situation; often converts to Lead Contractor or Managed Project once the failure mode is clear. |
| Delivery model classes | crisis_assessment, managed_project, lead_contractor |
| Public status | PUBLIC_CANDIDATE |
| Catalog lifecycle | REQUIRES_RUBIO_REVIEW |
| Confidence | HIGH |
| Website surface | specialist_page |
| Website route | `/diagnostic` |
| Last reviewed | 2026-08-02 |

**Scope included**
- Single intake for blocked or failing operations
- Fast structural assessment

**Scope excluded**
- Guaranteed rescue outcomes
- Catalogue shopping during crisis

**Typical deliverables**
- Structural assessment
- Sequenced action path
- Failure-mode diagnosis

**Mapped internal SKUs**
- `OCTUS_ADV_INTL_CRISIS`
- `A2 Gestão de Crise Premium`
- `Discovery/Advisory funnel`

**Mapped playbooks / sources**
- Commercial crisis entry + /diagnostic

**Capacity / honesty note:** Primary crisis door. Live diagnostic surface.

**Evidence paths**
- `octus-consulting/lib/commercial.ts`
- `octus-consulting/docs/website/service-architecture/SERVICE_CANONICAL_MASTER.md`
- `octus-consulting/docs/website/service-architecture/CANONICAL_SERVICE_TAXONOMY.md`
- `axle-platform/docs/product/catalog/AXLE_SERVICE_CATALOG_V2_DRAFT_2026-05-30.md`
- `axle-dev-agent/docs/ops/evidence/OCTUS_COMMERCIAL/OPERATING_MODEL_2026-07-26/OFFER_ARCHITECTURE.md`
- `GitHub Issue rubioprojects/octus-consulting#13`

#### SA-06-02 — Licensing delay remediation

| Field | Value |
|---|---|
| One-sentence description | Unblocking stalled or conditioned licensing by fixing the structural causes — not by repeating the same filing with the same gaps. |
| Common client need | Licensing delayed or failing |
| Client profile | Operators with stalled or conditioned licences. |
| Relevant industries | High-Risk Operations; iGaming; Fintech |
| Relevant jurisdictions | multi-jurisdiction by fit |
| Responsible Octus capability | Operational Remediation + Regulatory (Octus) |
| Responsible person | HUMAN_ASSIGNMENT_REQUIRED |
| Delivery model (hub narrative) | Starts with Assess your situation; often converts to Lead Contractor or Managed Project once the failure mode is clear. |
| Delivery model classes | crisis_assessment, managed_project, lead_contractor |
| Public status | PUBLIC_CANDIDATE |
| Catalog lifecycle | REQUIRES_RUBIO_REVIEW |
| Confidence | MEDIUM |
| Website surface | hub_section |
| Website route | — |
| Last reviewed | 2026-08-02 |

**Scope included**
- Unblocking stalled or conditioned licensing by fixing structural causes

**Scope excluded**
- Repeating the same filing with the same gaps
- Guaranteed approval

**Typical deliverables**
- Licensing remediation workstream
- Root-cause structural fix plan

**Mapped internal SKUs**
- `OCTUS_REG_* remediation programmes`
- `OCTUS_ADV_INTL_CRISIS`

**Mapped playbooks / sources**
- Partial — hub whenNeeded + Regulatory cross-link

**Capacity / honesty note:** Programme-based; ownership shared with Solution 01.

**Evidence paths**
- `octus-consulting/lib/commercial.ts`
- `octus-consulting/docs/website/service-architecture/SERVICE_CANONICAL_MASTER.md`
- `octus-consulting/docs/website/service-architecture/CANONICAL_SERVICE_TAXONOMY.md`
- `axle-platform/docs/product/catalog/AXLE_SERVICE_CATALOG_V2_DRAFT_2026-05-30.md`
- `axle-dev-agent/docs/ops/evidence/OCTUS_COMMERCIAL/OPERATING_MODEL_2026-07-26/OFFER_ARCHITECTURE.md`
- `GitHub Issue rubioprojects/octus-consulting#13`

#### SA-06-03 — Banking & compliance gap remediation

| Field | Value |
|---|---|
| One-sentence description | Remediation when banking rejection or compliance gaps are the live constraint — coordinated with the owning Solutions. |
| Common client need | Licensing delayed or failing |
| Client profile | Operators in active banking rejection or compliance scrutiny. |
| Relevant industries | High-Risk Operations; iGaming; Fintech |
| Relevant jurisdictions | multi-jurisdiction by fit |
| Responsible Octus capability | Operational Remediation + Banking/Compliance (Octus) |
| Responsible person | HUMAN_ASSIGNMENT_REQUIRED |
| Delivery model (hub narrative) | Starts with Assess your situation; often converts to Lead Contractor or Managed Project once the failure mode is clear. |
| Delivery model classes | crisis_assessment, managed_project, lead_contractor |
| Public status | PUBLIC_CANDIDATE |
| Catalog lifecycle | REQUIRES_RUBIO_REVIEW |
| Confidence | MEDIUM |
| Website surface | hub_section |
| Website route | — |
| Last reviewed | 2026-08-02 |

**Scope included**
- Remediation when banking rejection or compliance gaps are the live constraint

**Scope excluded**
- Promised accounts or audit passes

**Typical deliverables**
- Banking/compliance gap remediation plan
- Coordinated recovery workstreams

**Mapped internal SKUs**
- `banking + compliance SKUs under crisis programmes`

**Mapped playbooks / sources**
- Partial — cross-hub

**Capacity / honesty note:** Coordinates with Solutions 02 and 03.

**Evidence paths**
- `octus-consulting/lib/commercial.ts`
- `octus-consulting/docs/website/service-architecture/SERVICE_CANONICAL_MASTER.md`
- `octus-consulting/docs/website/service-architecture/CANONICAL_SERVICE_TAXONOMY.md`
- `axle-platform/docs/product/catalog/AXLE_SERVICE_CATALOG_V2_DRAFT_2026-05-30.md`
- `axle-dev-agent/docs/ops/evidence/OCTUS_COMMERCIAL/OPERATING_MODEL_2026-07-26/OFFER_ARCHITECTURE.md`
- `GitHub Issue rubioprojects/octus-consulting#13`

#### SA-06-04 — Audit & readiness remediation

| Field | Value |
|---|---|
| One-sentence description | Evidence and readiness under pressure — gap closure and remediation sequencing when formal review is imminent or already failing. |
| Common client need | Licensing delayed or failing |
| Client profile | Operators facing imminent or failing formal review. |
| Relevant industries | High-Risk Operations; iGaming; Fintech |
| Relevant jurisdictions | multi-jurisdiction by fit |
| Responsible Octus capability | Operational Remediation + Compliance (Octus) |
| Responsible person | HUMAN_ASSIGNMENT_REQUIRED |
| Delivery model (hub narrative) | Starts with Assess your situation; often converts to Lead Contractor or Managed Project once the failure mode is clear. |
| Delivery model classes | crisis_assessment, managed_project, lead_contractor |
| Public status | PUBLIC_CANDIDATE |
| Catalog lifecycle | REQUIRES_RUBIO_REVIEW |
| Confidence | HIGH |
| Website surface | crosslink_dedicated |
| Website route | `/solutions/compliance/gli-readiness` |
| Last reviewed | 2026-08-02 |

**Scope included**
- Evidence and readiness under pressure for formal review

**Scope excluded**
- Guaranteed certification
- Octus as the laboratory

**Typical deliverables**
- Readiness gap closure plan
- Evidence remediation sequence

**Mapped internal SKUs**
- `ANTERA_CERTIFY_* readiness (internal)`
- `GLI readiness pathway`

**Mapped playbooks / sources**
- Notion Auditoria + GLI

**Capacity / honesty note:** Cross-links to GLI readiness page; accounting audit/perícia OC8 stays INTERNAL.

**Evidence paths**
- `octus-consulting/lib/commercial.ts`
- `octus-consulting/docs/website/service-architecture/SERVICE_CANONICAL_MASTER.md`
- `octus-consulting/docs/website/service-architecture/CANONICAL_SERVICE_TAXONOMY.md`
- `axle-platform/docs/product/catalog/AXLE_SERVICE_CATALOG_V2_DRAFT_2026-05-30.md`
- `axle-dev-agent/docs/ops/evidence/OCTUS_COMMERCIAL/OPERATING_MODEL_2026-07-26/OFFER_ARCHITECTURE.md`
- `GitHub Issue rubioprojects/octus-consulting#13`

## Issue #13 acceptance tests (catalog answers)

| # | Question | Catalog answer |
|---|---|---|
| 1 | What does Octus do? | Octus designs and coordinates regulatory, licensing, banking, compliance, corporate and legal structures for highly regulated operations — and remediates them when they fail. |
| 2 | Which area contains licensing? | Regulatory Strategy & Licensing |
| 3 | Which area contains company formation? | Corporate & Cross-Border Structuring |
| 4 | Which area contains banking and payments? | Banking, Payments & Financial Infrastructure |
| 5 | Which area contains tax/accounting? | NOT a public area in V1 draft — tax/accounting remain INTERNAL (OC8 delivery). Pending Rubio decision D-TAX-01. |
| 6 | Who delivers the work? | Octus owns the client relationship and coordinates delivery. Specialist partners may execute workstreams; partner brands are not public. Named person per service: HUMAN_ASSIGNMENT_REQUIRED. |
| 7 | How can I contact Octus? | Website Contact / discuss CTAs (website IA owned by WS2 — not mutated in this pack). |

## Status rules for website consumption

| Status | Meaning |
|---|---|
| `DRAFT` | Work in progress |
| `REQUIRES_RUBIO_REVIEW` | Current V1 status |
| `HUMAN_APPROVED` | Rubio (and designated reviewers) approved |
| `CONSUMABLE_BY_WEBSITE` | Approved for definitive website use |
| `SUPERSEDED` | Replaced by a later version |

## Explicit non-claims

- This catalog does not invent services, cases, metrics or jurisdictions.
- This catalog does not publish prices, markups, suppliers or margins.
- This catalog does not copy operational playbooks into client-facing text.
- This catalog does not declare the taxonomy HUMAN_APPROVED.
- OC8 references in internal SKU maps are delivery provenance, not public brand.

## Companion artifacts

- `OCTUS_PUBLIC_SERVICE_CATALOG_V1.json`
- `OCTUS_PUBLIC_SERVICE_CATALOG_DECISION_REGISTER.md`
- `OCTUS_PUBLIC_CLAIM_AND_EVIDENCE_REGISTER.md`

## Terminal

`OCTUS_PUBLIC_SERVICE_CATALOG_READY_FOR_RUBIO_REVIEW`
