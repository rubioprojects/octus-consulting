# OCTUS PUBLIC CLAIM AND EVIDENCE REGISTER

| Field | Value |
|-------|-------|
| **Status** | `REQUIRES_RUBIO_REVIEW` |
| **Date** | 2026-08-02 |
| **Owner** | Commercial / Services front |
| **Consumers** | Website, deck, playbooks, proposals, Milla scripts |

**Rule:** Every public claim needs a source path or an explicit human-approval flag. No invented cases, metrics, jurisdictions of “proven success”, or SLAs.

---

## 1. Claim rules (summary)

| Rule ID | Rule |
|---------|------|
| CR-01 | Prefer concrete verbs and named services over slogans. |
| CR-02 | No AI-sounding abstractions (“one accountable layer”, “structural pressure”, “assessment before catalogue”). |
| CR-03 | No em-dash stacking; keep sentences short. |
| CR-04 | No partner brand names (OC8, Antera, Rubio Adv.) on public face. |
| CR-05 | No prices, markups, margins, or preferential rates on site/deck. |
| CR-06 | No guaranteed licence, bank account, certification, or tax recovery outcomes. |
| CR-07 | No unverified timelines (“11 weeks”), “zero critical findings”, or unconditional “24h”. |
| CR-08 | Jurisdiction lists are capability maps, not promises of current open capacity. |
| CR-09 | Cases and logos only with written human approval + evidence path. |
| CR-10 | Website may consume only claims marked `HUMAN_APPROVED` or `CONSUMABLE_BY_WEBSITE`. |

Full operational rules: `docs/commercial/system/OCTUS_CLAIM_RULES_V1.md`.

---

## 2. Allowed institutional claims (draft)

| Claim ID | Claim text (EN) | Evidence / source | Status |
|----------|-----------------|-------------------|--------|
| CL-INST-01 | Octus helps regulated and high-scrutiny businesses design, license, bank, comply, structure and remediate operations across jurisdictions. | Catalog V1 §1; Issue #13 objective | `REQUIRES_RUBIO_REVIEW` |
| CL-INST-02 | Octus works through six public service areas: Regulatory; Banking & Payments; Compliance & Risk; Corporate & Cross-Border; Legal & Contractual; Remediation & Readiness. | Final Lock; `lib/commercial.ts`; Catalog V1 | `REQUIRES_RUBIO_REVIEW` |
| CL-INST-03 | Clients hold one commercial relationship with Octus; specialist delivery is coordinated by Octus. | Website engagement model; catalog delivery note | `REQUIRES_RUBIO_REVIEW` |
| CL-INST-04 | Octus serves operators in iGaming, fintech, digital assets and other high-scrutiny digital markets. | Markets routes; catalog industries | `REQUIRES_RUBIO_REVIEW` |
| CL-INST-05 | Company formation is offered inside a regulated architecture, not as a standalone formation shop. | SA-04-02; website company-formation boundary | `REQUIRES_RUBIO_REVIEW` |
| CL-INST-06 | Banking support means readiness and architecture; Octus does not promise that a bank will open an account. | SA-02-01; banking deep copy pattern | `REQUIRES_RUBIO_REVIEW` |
| CL-INST-07 | Legal Architecture is not a substitute for a local law-firm litigation practice. | SA-05 boundary; Final Lock L-04 | `REQUIRES_RUBIO_REVIEW` |

---

## 3. Allowed service claims (examples)

| Claim ID | Service | Allowed claim | Forbidden twist | Status |
|----------|---------|---------------|-----------------|--------|
| CL-SVC-REG-01 | SVC-REG-02 | Octus coordinates iGaming licensing programmes including corporate, compliance and banking dependencies. | “We get you licensed in X weeks.” | `REQUIRES_RUBIO_REVIEW` |
| CL-SVC-BNK-01 | SVC-BNK-01 | Octus prepares bankability documentation and optioning for high-scrutiny operations. | “We open accounts at Bank Y.” | `REQUIRES_RUBIO_REVIEW` |
| CL-SVC-CMP-01 | SVC-CMP-03 | Octus provides DPO-as-a-Service for LGPD/GDPR obligations. | Naming Antera; guaranteed regulator outcomes | `REQUIRES_RUBIO_REVIEW` |
| CL-SVC-CORP-01 | SVC-CORP-02 | Octus forms companies as part of a wider operating architecture. | “Cheapest Delaware company” shop tone | `REQUIRES_RUBIO_REVIEW` |
| CL-SVC-TAX-01 | SVC-TAX-* | Octus can arrange accounting, tax and audit programmes for Brazil-related needs. | Naming OC8; publishing OC8 rates; guaranteeing recovery % | `REQUIRES_RUBIO_REVIEW` |

---

## 4. Forbidden claims (active block list)

| Block ID | Claim pattern | Why |
|----------|---------------|-----|
| FB-01 | Any price or “from €X” on website/deck | D-PRICE-01; conflicts unresolved |
| FB-02 | “Approved by [regulator]” as Octus credential | Not evidenced |
| FB-03 | “Zero critical findings” / audit perfection | Legacy conflict C-CL-01 |
| FB-04 | Unconditional 24h SLA | Legacy conflict C-CL-02 |
| FB-05 | Fixed “11 weeks to licence” | Legacy conflict |
| FB-06 | ISO 37301/27001/27701 as Octus products | Evidence gate |
| FB-07 | Partner names OC8 / Antera / Rubio on public pages | D-PARTNER-01 |
| FB-08 | Invented client logos or case studies | Mandate |
| FB-09 | “OC8 accounting arm of Octus” | Obsolete public framing |
| FB-10 | AI / Axle platform jargon in client materials | Mandate language rules |

---

## 5. Evidence classes

| Class | Examples | Enough for public? |
|-------|----------|--------------------|
| A — Locked public face | `lib/commercial.ts`, Final Lock names | Yes for naming, after Rubio catalog approval |
| B — Catalog/playbook internal | Axle V2, playbooks | Mapping only; strip prices/partners |
| C — Website live copy | Solution hubs / deeps | Reference; sanitize tone |
| D — Human attestation | Rubio/Cris/Milla written OK | Required for cases, metrics, new pillars |
| E — Missing | SharePoint full extract, signed validation CSV | Do not invent; mark gap |

---

## 6. Gaps requiring human input before stronger claims

1. Signed `SERVICE_VALIDATION_MATRIX.csv` / `TEAM_VALIDATION_MATRIX.csv` (all `TO_CONFIRM`).
2. Approved representative situations / cases list (deck slide 11).
3. Price truth for retainers and SHIELD.
4. Confirmation of current open licensing venues for public “we work with” lists.
5. Whether AREA-TAX becomes a public pillar.

---

## 7. Change control

| Change | Required |
|--------|----------|
| New public claim | Add row + source or human flag |
| Website copy using claim | Claim status ≥ `HUMAN_APPROVED` or `CONSUMABLE_BY_WEBSITE` |
| Case study | Human approval + evidence path mandatory |
