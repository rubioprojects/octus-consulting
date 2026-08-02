# OCTUS Public Claim and Evidence Register

| Field | Value |
|---|---|
| Pack | `OCTUS_PUBLIC_SERVICE_CATALOG_V1` (V1.1-SEVEN-AREAS) |
| Date | 2026-08-02 |
| Status | `REQUIRES_RUBIO_REVIEW` |
| Control principle | `PRESERVE_RUBIO_ORIGINAL_SEVEN_AREAS` |

## Claim statuses

| Status | Meaning |
|---|---|
| `ALLOWED_DRAFT` | May appear in draft materials pending Rubio review |
| `ALLOWED_IF_QUALIFIED` | Allowed only with the stated qualifier |
| `FORBIDDEN` | Must not appear in public materials |
| `HUMAN_REQUIRED` | Needs explicit Rubio approval before use |
| `EVIDENCE_GAP` | Do not use |

## Global rules

1. Prefer process claims over outcome guarantees.
2. No client names, win rates or invented cases.
3. No prices, markups or supplier names in public materials.
4. No public use of OC8, Antera, Rubio Adv. or Irati as brands.
5. Octus is not a law firm, bank or certifying laboratory.
6. Licence, banking, EMI, PSP and certification decisions remain with third parties.
7. Keep language simple. Avoid consulting jargon.

## Allowed draft claims

| claim_id | Claim | Status |
|---|---|---|
| CLM-001 | Octus works across seven areas: regulatory structuring, compliance and risk, legal and structural architecture, corporate structuring, private clients, remediation and readiness, and the international hub. | `ALLOWED_DRAFT` |
| CLM-002 | Octus designs licensing pathways and regulatory programmes before filings start. | `ALLOWED_DRAFT` |
| CLM-003 | Octus builds and can operate compliance frameworks including AML/KYC and DPO support. | `ALLOWED_IF_QUALIFIED` |
| CLM-004 | Octus coordinates legal and contractual frameworks with independent counsel where required. | `ALLOWED_IF_QUALIFIED` — not a law firm |
| CLM-005 | Octus designs companies, holdings and cross-border structures for regulated operations. | `ALLOWED_DRAFT` |
| CLM-006 | Octus supports founders, UBOs and related individuals through Private Clients services. | `ALLOWED_DRAFT` |
| CLM-007 | When licensing, banking, compliance, corporate or finance problems are already live, Octus diagnoses and sequences remediation. | `ALLOWED_IF_QUALIFIED` — no rescue guarantees |
| CLM-008 | Through the International Hub, Octus identifies and coordinates banks, PSPs, CSPs, labs, counsel and other specialists the programme needs. | `ALLOWED_IF_QUALIFIED` — no promised introductions SLA; partners unnamed |
| CLM-009 | Octus sells and coordinates accounting, tax and finance programmes under the Octus relationship without naming delivery partners publicly. | `ALLOWED_IF_QUALIFIED` |
| CLM-010 | Banking readiness prepares the file for real bank conversations. Accounts are not promised. | `ALLOWED_IF_QUALIFIED` |
| CLM-011 | Clients contract with Octus. Specialists may execute workstreams behind that relationship. | `ALLOWED_IF_QUALIFIED` |

## Forbidden claims

| claim_id | Forbidden claim |
|---|---|
| FORB-001 | Guaranteed licence, bank account, EMI, PSP or certification outcomes |
| FORB-002 | Public prices, retainers or markups |
| FORB-003 | Naming OC8 / Antera / Rubio Adv. / Irati in public catalog or site |
| FORB-004 | Eighth public Tax pillar |
| FORB-005 | “Octus is a law firm” |
| FORB-006 | Fixed public SLA such as guaranteed 48-hour solutions |
| FORB-007 | Invented client cases or metrics |
| FORB-008 | Treating Remediation as only an engagement model |
| FORB-009 | Treating International Hub or Private Clients as non-public |

## Claims by area

| Area | Primary claim IDs |
|---|---|
| Regulatory Structuring | CLM-002 |
| Compliance & Risk | CLM-003 |
| Legal & Structural Architecture | CLM-004 |
| Corporate Structuring | CLM-005, CLM-009, CLM-010 |
| Private Clients | CLM-006, CLM-009 |
| Remediation & Readiness | CLM-007 |
| International Hub | CLM-008 |

## Evidence gaps

| gap_id | Topic | Needed |
|---|---|---|
| GAP-CLM-01 | Exact public label for Remediation vs Audit & Readiness | Rubio D-REM-NAME-01 |
| GAP-CLM-02 | Exact public label for Private Clients vs Ownership & UBO | Rubio D-PC-NAME-01 |
| GAP-CLM-03 | Approved representative situations for deck | Human-approved anonymized evidence |
| GAP-CLM-04 | Brazil SPA capacity wording | Leave inquiry-only until SKU leaves tbd |

## Website consumption

Draft against `ALLOWED_DRAFT` / `ALLOWED_IF_QUALIFIED` only. Definitive website use requires catalog `HUMAN_APPROVED` or `CONSUMABLE_BY_WEBSITE`.
