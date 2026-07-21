# Octus — Current Offering Inventory

**Baseline SHA:** `602ae1891b4fda35a416ef92c118087c1a168a93`  
**Dependency:** `PREPARE_WITHOUT_MERGING_DESIGN_PR` (design rescreen not human-approved)  
**Source of truth:** rendered routes + `app/**`, `lib/cta.ts`, `lib/posts.ts`, `app/layout.tsx` footer

## Diagnosis (executive)

The site already positions Octus as an **execution layer / lead contractor** for regulated operations (hero + About). That is strategically correct.

The commercial surface is **over-fragmented**:

1. **Seven operational modules** (pillars: `/regulatory`, `/compliance`, `/legal-architecture`, `/corporate`, `/private-clients`, `/audit`, `/international-hub`)
2. **Twelve deep solution pages** under `/solutions/...`
3. **Four markets** + **seven jurisdiction-like pages** (`/brazil` outside the folder)
4. **Parallel hubs:** `/what-we-do`, `/solutions`, homepage accordion — same story three times
5. **Dual intake:** `/contact` and `/diagnostic` with overlapping WhatsApp CTAs

Individual pages are often strong. The **architecture of the offer** undersells coherence and risks looking like a licensing/offshore catalogue.

---

## Inventory table

| ID | Current name | Route | Target client | Problem solved | Deliverable (stated) | Commercial value | Overlap | Relevance | Evidence | Action |
|----|--------------|-------|---------------|----------------|----------------------|------------------|---------|-----------|----------|--------|
| O-01 | Discuss your operation | WhatsApp CTA sitewide | Operator / GC / CCO | Need senior conversation | Conversation | High | O-02 | Current | `lib/cta.ts` | KEEP |
| O-02 | Request a diagnostic | WA + `/diagnostic` | Urgent / blocked ops | Structured intake | Conversation | High | O-01 | Current | `lib/cta.ts`, `/diagnostic` | REFINE |
| O-03 | Regulatory Structuring (module) | `/regulatory` | Pre-license / stuck license | Wrong structure before filing | Strategy + coordination | High | O-10–O-13 | Current | pillar page | MERGE→Solutions |
| O-04 | Compliance & Risk (module) | `/compliance` | Operators under scrutiny | Paper compliance | Continuous ops | High | O-05–O-09 | Current | pillar | MERGE→Solutions |
| O-05 | AML & KYC | `/solutions/compliance/aml-kyc` | Operators / banks-facing | Audit/banking failure | Framework | High | O-04 | Current | solution page | KEEP |
| O-06 | Compliance-as-a-Service | `/solutions/compliance/compliance-as-a-service` | Lean compliance teams | Ops without owned team | Managed programme | High | O-04 | Current | solution | KEEP |
| O-07 | DPO-as-a-Service | `/solutions/compliance/dpo-as-a-service` | Controllers | DPO as contact only | Operated DPO | Medium-High | O-04 | Current | solution | KEEP |
| O-08 | GLI & Certification Readiness | `/solutions/compliance/gli-readiness` | iGaming tech/ops | Audit surprises | Readiness programme | Medium | O-15 | Current | solution | KEEP |
| O-09 | Internal Controls | `/solutions/compliance/internal-controls` | Maturing ops | Paper controls | Control design | Medium | O-04 | Current | solution | KEEP |
| O-10 | iGaming Licensing | `/solutions/regulatory/igaming-licensing` | iGaming founders/ops | License failure | Licensing path | High | O-03, markets | Current | solution | KEEP |
| O-11 | Fintech Licensing | `/solutions/regulatory/fintech-licensing` | Fintech founders | EMI/PI kill path | Licensing build | High | O-03 | Current | solution | KEEP |
| O-12 | Market Entry | `/solutions/regulatory/market-entry` | Cross-border expanders | Uncoordinated entry | Structural project | High | O-03, O-18 | Current | solution | KEEP |
| O-13 | Banking & Payments | `/solutions/regulatory/banking-payments` | High-risk / payments | Bank/PSP rejection | Structure for banking | High | O-03 | Current | solution | KEEP |
| O-14 | Company Formation | `/solutions/corporate/company-formation` | New entities | Entity as admin | Entity design | Medium | O-16, O-17 | Current | solution | REPOSITION |
| O-15 | Audit & Readiness (module) | `/audit` | Pre-scrutiny | Unprepared audits | Gap analysis | Medium | O-08 | Current | pillar | MERGE |
| O-16 | Offshore Structuring | `/solutions/corporate/offshore-structuring` | Cross-border groups | Tax-first mistakes | Architecture | Medium | O-14 | Sensitive | solution | REPOSITION |
| O-17 | Holding Design | `/solutions/corporate/holding-design` | Groups / investors | Org chart as structure | Risk architecture | Medium | O-14 | Current | solution | KEEP |
| O-18 | Legal Architecture (module) | `/legal-architecture` | Ops needing contracts backbone | Legal as paperwork | Legal ops layer | Medium | — | Current | pillar | REFINE |
| O-19 | Corporate Structuring (module) | `/corporate` | Same as O-14–17 | Entity layer | Coordination | Medium | O-14–17 | Current | pillar | MERGE |
| O-20 | Ownership & UBO | `/private-clients` | UBOs / principals | Individual outside structure | Ownership layer | Medium | — | Niche | pillar | REFINE |
| O-21 | International Hub (module) | `/international-hub` | Cross-border | Fragmented partners | Coordination network | Medium | O-12 | Vague | pillar | REPOSITION |
| O-22 | What we do | `/what-we-do` | All | Module map | Navigation | Low unique | O-03–21, `/solutions` | Redundant | page | MERGE |
| O-23 | Solutions index | `/solutions` | Buyers scanning offer | Need structure not services | Catalogue | High | O-22 | Current | index | KEEP |
| O-24 | Markets index | `/markets` | Industry buyers | Industry entry | Catalogue | High | — | Current | index | KEEP |
| O-25 | iGaming & Betting | `/markets/igaming` | iGaming | Structural failure | Market narrative | High | O-10 | Current | market | KEEP |
| O-26 | Fintech & Payments | `/markets/fintech` | Fintech | Regulation kills product | Market narrative | High | O-11 | Current | market | KEEP |
| O-27 | Crypto & Digital Assets | `/markets/crypto` | Crypto / CASP | Tech ≠ regulatory fit | Market narrative | High | MiCA insights | Current | market | KEEP |
| O-28 | High-Risk Operations | `/markets/high-risk` | Classified high-risk | Label without structure | Market narrative | Medium-High | O-13 | Current | market | KEEP |
| O-29 | Jurisdictions index | `/jurisdictions` | Jurisdiction shoppers | “Pick a license country” | Education | Medium | risk of broker frame | Current | index | REFINE |
| O-30–O-35 | Malta, IoM, Curaçao, Anjouan, Portugal, UAE | `/jurisdictions/*` | Operators choosing venue | Wrong venue | Jurisdiction briefing | Medium | broker risk | Mixed freshness | pages | HUMAN_CONFIRMATION_REQUIRED |
| O-36 | Brazil | `/brazil` | Brazil-bound operators | SPA/MF complexity | Brazil desk | High | O-29 | Current | page | KEEP |
| O-37 | About | `/about` | All | Who is Octus | Positioning | High | — | Strong | page | KEEP |
| O-38 | Team | `/team` | Trust buyers | Who executes | People | High | — | Current | page | REFINE |
| O-39 | Careers | `/careers` | Candidates | Hiring | Talent CTA | Low site | — | Current | page | KEEP |
| O-40 | Contact | `/contact` | All | Intake | WhatsApp + email | High | O-02 | Current | page | REFINE |
| O-41 | Insights | `/insights` + 33 posts | All | Authority / SEO | Articles | High | Brazil-heavy | Mixed | posts | REFINE |
| O-42 | Engagement models | Homepage | Buyers | How to buy | Project / Ongoing / Hour | Medium | incomplete vs lead contractor | Partial | homepage | CREATE taxonomy |
| O-43 | Intelligence teaser | Homepage → Insights | All | Thought leadership | Link | Medium | Axle not named | Placeholder | homepage | CREATE (careful) |
| O-44 | Certifications narrative | About / home claim | Trust | Proof | EXIN DPO etc. | Medium | unused CertificationsBlock | Current | About | REFINE |
| O-45 | Compliance Channel | `/compliance-channel` | Ethics | Speak-up | Channel | Required | — | Keep | legal | KEEP |

---

## Classification summary

| Action | Count (approx) | Examples |
|--------|----------------|----------|
| KEEP | Majority of deep solutions + markets + About | AML, licensing, banking, markets |
| REFINE | Diagnostic CTA, contact, team, jurisdictions framing, Insights categories | Dual intake |
| MERGE | Pillars ↔ solutions; `/what-we-do` ↔ `/solutions` | Module duplication |
| REPOSITION | Offshore, International Hub, company formation | Away from broker/offshore shop |
| REMOVE | Empty `app/api/diagnostic` stub; unused CertificationsBlock (code hygiene) | After confirm |
| CREATE | Clear engagement models; optional Banking as top-level Solution; Axle-facing intelligence narrative (non-product) | Decision register |
| HUMAN_CONFIRMATION_REQUIRED | Jurisdiction legal freshness; major taxonomy collapse; diagnostic CTA retention; Insights archive | — |

## Recommended immediate narrative rule

**Primary commercial objects (buyer-facing):** Solutions · Markets · Engagement models  
**Secondary (supporting):** Jurisdictions · Insights · About/Team  
**Internal/ops language (do not sell as equal products):** Seven modules — fold into Solutions IA
EOF