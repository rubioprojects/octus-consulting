# OCTUS Public Claim and Evidence Register

| Field | Value |
|---|---|
| Pack | `OCTUS_PUBLIC_SERVICE_CATALOG_V1` |
| Date | 2026-08-02 |
| Status | `REQUIRES_RUBIO_REVIEW` |
| Companion | `OCTUS_PUBLIC_SERVICE_CATALOG_V1.md` / `.json` |
| Style baseline | `axle-dev-agent/.../OCTUS_PUBLIC_COPY_STYLE_AND_CLAIM_RULES_P2.md` |

## Purpose

Record which claims may appear in public catalog, website, decks and proposals — and which evidence supports them.  
No claim in this register is final until catalog lifecycle reaches `HUMAN_APPROVED` or `CONSUMABLE_BY_WEBSITE`.

## Claim statuses

| Status | Meaning |
|---|---|
| `ALLOWED_DRAFT` | May appear in draft materials pending Rubio review |
| `ALLOWED_IF_QUALIFIED` | Allowed only with the stated qualifier |
| `FORBIDDEN` | Must not appear in public materials |
| `HUMAN_REQUIRED` | Needs explicit Rubio/Milla approval before use |
| `EVIDENCE_GAP` | Attractive claim without sufficient proof — do not use |

---

## Global claim rules

1. Prefer capability and process claims over outcome guarantees.
2. No client names, metrics, win rates or case studies unless separately approved.
3. No prices, markups, supplier names or margins in public materials.
4. No public use of OC8, Antera, Rubio Adv. or Irati as brands.
5. Octus is not a law firm, bank or certifying laboratory.
6. Licence, banking, EMI, PSP and certification decisions remain with third parties.
7. Do not copy operational playbook checklists into public copy.
8. Avoid AI-sounding slogans and overused abstractions (see Issue #13).

---

## Allowed draft claims (catalog-facing)

| claim_id | Claim (EN) | Allowed form | Evidence | Status |
|---|---|---|---|---|
| CLM-001 | Octus helps regulated operators with licensing pathways, banking readiness, compliance systems, corporate structure, contractual architecture and remediation when things fail. | Institutional one-liner | `commercial.ts` Solutions; OFFER_ARCHITECTURE; Issue #13 | `ALLOWED_DRAFT` |
| CLM-002 | Licensing work is designed as a pathway with corporate, compliance and banking dependencies — not as a standalone filing exercise. | Area 01 | SA-01-* bodies; Regulatory hub | `ALLOWED_DRAFT` |
| CLM-003 | Octus coordinates iGaming and fintech licensing programmes across venues selected for operational fit. | SA-01-02 / SA-01-03 | Live deep pages; Catalog V2 REG SKUs | `ALLOWED_IF_QUALIFIED` — no guaranteed approval; no fixed public timelines |
| CLM-004 | Market entry is treated as a sequenced programme across regulatory, corporate, compliance and banking workstreams. | SA-01-04 | Market entry deep page; P1 mapping | `ALLOWED_DRAFT` |
| CLM-005 | Octus prepares operations for banking and PSP scrutiny and designs payment architecture options. | Area 02 | Banking deep page; BNK SKUs | `ALLOWED_IF_QUALIFIED` — **never** “we open accounts” / promised onboarding |
| CLM-006 | Octus builds and can operate compliance frameworks including AML/KYC/CDD, compliance function support and DPO support. | Area 03 | Compliance deep pages; COMP / pilot DPO SKUs | `ALLOWED_IF_QUALIFIED` — do not transfer decisions Octus does not control |
| CLM-007 | Octus prepares evidence and readiness for laboratory or formal external review. | SA-03-05 / SA-06-04 | GLI readiness page | `ALLOWED_IF_QUALIFIED` — Octus is **not** the laboratory; no certification promise |
| CLM-008 | Octus designs entities, holdings, governance and cross-border organisation for regulated operations. | Area 04 | Corporate deep pages; CORP SKUs | `ALLOWED_DRAFT` |
| CLM-009 | Company formation is offered inside a designed architecture, not as a standalone incorporation shop. | SA-04-02 | Company formation page; architecture master | `ALLOWED_DRAFT` |
| CLM-010 | Ownership and UBO architecture supports the individuals behind regulated operations. | SA-04-04 | `/private-clients` | `ALLOWED_IF_QUALIFIED` — not private-wealth brand; not tax shop |
| CLM-011 | Octus coordinates contractual and structural legal frameworks with independent counsel where required. | Area 05 | Legal hub; LEG SKUs; legalBoundary flag | `ALLOWED_IF_QUALIFIED` — **not a law firm** |
| CLM-012 | When licensing, banking or compliance has already failed, Octus provides a single crisis assessment door and sequences remediation. | Area 06 | Remediation hub; `/diagnostic`; crisis advisory SKU | `ALLOWED_IF_QUALIFIED` — no rescue guarantees |
| CLM-013 | Octus works with operators in iGaming, fintech, digital assets and other high-risk regulated environments. | Industries | Markets pages; Final Lock markets | `ALLOWED_DRAFT` |
| CLM-014 | Engagement can be Lead Contractor, Managed Project, Strategic Mandate or Embedded Capability. | How we engage | `ENGAGEMENT_MODELS` in `commercial.ts` | `ALLOWED_DRAFT` |
| CLM-015 | Clients contract with Octus; specialist partners may execute workstreams behind the Octus relationship. | Delivery model | Reseller model in Catalog V2; partner visibility rules | `ALLOWED_IF_QUALIFIED` — partners unnamed in public |

---

## Forbidden claims

| claim_id | Forbidden claim | Why | Evidence |
|---|---|---|---|
| FORB-001 | “Octus guarantees your licence / bank account / EMI / certification.” | Outcome not controlled by Octus | Claim rules P2; banking “no promised accounts” |
| FORB-002 | Any public price, retainer band or markup figure | Pricing not authoritative; internal | Notion 0/53 prices; GAP-COM-003 |
| FORB-003 | Naming OC8 / Antera / Rubio Adv. / Irati in public catalog or site | Partner-invisible rule | SOURCE_CONFLICTS C-BR-01; OFFER_ARCHITECTURE aliases |
| FORB-004 | “Tax, accounting and audit” as a peer public Solution in V1 | Conflicts with inventory; OC8-internal | D-TAX-01; INT-OC8 rows |
| FORB-005 | “Octus is a law firm” or publishing BR litigation catalogue as Solutions | Boundary lock | Area 05 legalBoundary; INT-LEG-01 |
| FORB-006 | Fixed public SLA such as “possible solution within 48h” | Candidate commercial promise, not contractual | Crosswalk Hub note |
| FORB-007 | ISO certificates as Octus products without evidence gate | DO_NOT_PUBLISH | INT-ISO-01 |
| FORB-008 | Invented client cases, metrics or testimonials | Mandate forbid | Issue #13 governance |
| FORB-009 | Presenting hour packages as a seventh Solution | Engagement demotion | FINAL_LOCK / OFFER_ARCHITECTURE |
| FORB-010 | Venue shopping / “cheapest offshore licence” marketing | Conflicts with fit-first posture | Jurisdiction education rules |

---

## Evidence gaps (do not fill with invention)

| gap_id | Topic | Impact | Needed input |
|---|---|---|---|
| GAP-CLM-01 | Named responsible person per service | Catalog field incomplete; Milla routing weak | Rubio/team assignment |
| GAP-CLM-02 | Brazil SPA capacity claim | SA-01-05 must stay controlled | Regulatory clarity + SKU leave `tbd` |
| GAP-CLM-03 | High-risk banking legal basis | Keep process claims only | Legal review of banking playbook |
| GAP-CLM-04 | EMI playbook completeness | Qualify EU EMI claims | Rubio review of EMI playbooks |
| GAP-CLM-05 | Approved representative work / cases | Deck slide “selected situations” blocked | Human-approved anonymized evidence |
| GAP-CLM-06 | Notion commercial descriptions | SKU-to-public mapping thinner than ideal | Notion export or MCP |
| GAP-CLM-07 | Final Lock primary file missing locally | Relies on secondary cites | Restore `OCTUS_COMMERCIAL_FINAL_LOCK.md` |

---

## Claims by public area (quick index)

| Area | Primary allowed claim IDs | Hard fences |
|---|---|---|
| Regulatory Strategy & Licensing | CLM-002, CLM-003, CLM-004 | FORB-001, FORB-010 |
| Banking, Payments & Financial Infrastructure | CLM-005 | FORB-001 (accounts) |
| Compliance & Risk Systems | CLM-006, CLM-007 | FORB-007; not the lab |
| Corporate & Cross-Border Structuring | CLM-008, CLM-009, CLM-010 | FORB-004 tax pillar |
| Legal & Contractual Architecture | CLM-011 | FORB-005 |
| Operational Remediation & Readiness | CLM-012 | FORB-001 rescue guarantees |

---

## Website consumption rule

Website and deck fronts may draft against `ALLOWED_DRAFT` / `ALLOWED_IF_QUALIFIED` claims, but must label content as non-definitive until this register and the catalog reach `HUMAN_APPROVED` or `CONSUMABLE_BY_WEBSITE`.

---

## Revision

| Date | Change | By |
|---|---|---|
| 2026-08-02 | Initial register with Phase 1 catalog | Commercial catalog front |
