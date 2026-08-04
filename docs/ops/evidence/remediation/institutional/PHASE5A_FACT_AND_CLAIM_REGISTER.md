# Phase 5A — Fact and Claim Register

**Status:** CLOSED FOR SOL AUDIT (application tip bound at evidence stamp)  
**Rule:** Unsupported claims → qualify or remove. Do not invent partnerships, vacancies, SLAs, offices, or guarantees.

## Bound residuals (carry-forward — not resolved in Phase 5A)

| Residual ID | Owner | Current status | Final-candidate blocking | Required closure evidence |
|---|---|---|---|---|
| `HOME_PUNCTUATION_RESIDUAL_001` | Phase 6 | OPEN · exactly one Homepage em dash | Yes | Homepage punctuation rewrite + Phase 6 validator |
| `GLOBAL_A11Y_REGION_RESIDUAL_001` | Phase 6 | OPEN · Axe moderate `region` on `.wa-float` | Yes | Landmark/region disposition without silent PASS |
| `AXE_INCOMPLETE_REVIEW_001` | Phase 6 | OPEN · incomplete Axe checks require manual disposition | Yes | Manual disposition register |

## Contact identity (approved sources: `lib/cta.ts` + footer/legal)

| Claim | Value | Status |
|---|---|---|
| Brand | Octus Consulting | RETAINED |
| Legal entity | Octus Technology LLC | RETAINED (footer; not required on Contact body) |
| Email | info@octusconsulting.com | RETAINED · verified in `lib/cta.ts` |
| WhatsApp | +55 11 97427-3000 (`wa.me/5511974273000`) | RETAINED · verified in `lib/cta.ts` |
| Address | 900 Foulk Rd Suite 201, Wilmington, DE 19803 | RETAINED in footer only · not invented on Contact |
| Response SLA “within 24 hours” | was in `contact/layout.tsx` metadata | **REMOVED** (unverified) |
| Careers email | talentos@octusconsulting.com | RETAINED on Careers EOI only |

## Factual claims retained

- Operating since 2019 (About)
- Rubio Teixeira — Founder & CEO (Team SoT; not restated as Managing Director elsewhere)
- Maria Cristina — Operations Coordination (Team SoT)
- WhatsApp + mailto as Contact and Diagnostic intake (no HTML form POST)
- Generic Partner classes / network categories without named preferred providers
- Careers general expression of interest via `talentos@`

## Factual claims qualified

- About jurisdiction / market chips → experience markets, not exclusive office footprint
- SPA/MF, MGA, GLI naming → coordination / workstream language; not partnership or preferred-provider claim
- How We Engage models → operating modes, not guaranteed product outcomes
- Careers capability profiles → recruiting profiles, not seven/six-area IA framing
- Careers working posture language → evidence-safe; no invented benefit package

## Factual claims removed or rewritten

- Contact metadata response SLA (“within 24 hours”) — removed with `app/contact/layout.tsx`
- Careers “not a traditional advisory firm” framing — removed
- Careers “Across four operational areas” — rewritten to capability profiles
- Unverified benefit chips — reduced / removed
- About “+more” jurisdiction strip inflation — removed
- Duplicate commercial CTA labels on About final (Discuss→Continue on WhatsApp) and Contact existing-client email control

## Partners — claim and evidence status

| Claim class | Publication status | Evidence |
|---|---|---|
| Formal named partnerships | Not published | N/A |
| Preferred-provider / exclusivity | Not claimed | N/A |
| Regulator relationships as partnership | Not claimed | N/A |
| Generic partner categories | Retained | Evidence-safe generic classes + approval note on page |

## Careers vacancy status

**No open vacancies published.** EOI-only model (`mailto:talentos@octusconsulting.com`).

## Contact destination verification

| Destination | Value | Verified source |
|---|---|---|
| Primary WA | `https://wa.me/5511974273000?...` discuss text | `lib/cta.ts` `WHATSAPP_DISCUSS_URL` |
| Assess WA | assess prefill | `lib/cta.ts` `WHATSAPP_ASSESS_URL` |
| Email | `mailto:info@octusconsulting.com` | `lib/cta.ts` `MAILTO_DISCUSS` / `OCTUS_EMAIL` |
| Diagnostic path | `/diagnostic` | routed app page |
| Offices / phones beyond approved | None added | — |

## Diagnostic data-flow status

- **Surface:** conversation intake (WhatsApp Discuss/Assess + Contact mailto alternative)
- **HTML form POST / CRM / webhook:** none
- **Privacy / sensitive-information notice:** present on Diagnostic page
- **Automated tests:** non-destructive (no real lead submission)
- **Real submissions made during Phase 5A:** 0

## CTA matrix (mandatory routes)

| Route | Section | Label | Href type | Priority | Desktop / mobile |
|---|---|---|---|---|---|
| `/about` | Hero | Discuss your operation → | WhatsApp | Primary | Shared |
| `/about` | Final | Continue on WhatsApp → | WhatsApp | Primary close | Shared |
| `/about` | Final | Email Octus → | mailto | Alternate | Shared |
| `/about` | Final | How we engage → | internal | Secondary | Shared |
| `/how-we-engage` | Hero / body | Discuss / Assess / Partner with Octus | WA / WA / `/partners` | Distinct intents | Shared |
| `/contact` | Hero | Discuss your operation → | WhatsApp | Primary | Shared |
| `/contact` | Hero | Email Octus → | mailto | Alternate | Shared |
| `/contact` | How to reach | Continue on WhatsApp → / Write to email | WA / mailto | Supporting | Shared |
| `/contact` | Diagnostic card | Assess your situation → / WhatsApp assessment → | `/diagnostic` / WA | Diagnostic | Shared |
| `/diagnostic` | Hero / final | Assess / Discuss | WhatsApp | Primary / secondary | Shared |
| `/partners` | Hero | Discuss partnership → | WhatsApp | Primary | Shared |
| `/partners` | Final | Continue partnership discussion → | WhatsApp | Close (distinct label) | Shared |
| `/careers` | EOI | Send your profile → | mailto talentos@ | Primary | Shared |

Rules applied: WhatsApp primary strategic intake; Contact non-WA alternative; Diagnostic Assess = structured assessment path; no identical commercial label repeated in the same main; no dead or placeholder CTAs.

## Intake / form tests performed

| Test | Result |
|---|---|
| HTML form present on Contact | Absent |
| HTML form present on Diagnostic | Absent |
| Live CRM/webhook POST | Not applicable |
| Safe non-production success state | N/A (no form) — documented limitation |
| Keyboard focus on intake links | Exercised in Phase 5A a11y/interaction evidence |
| Real personal data transmitted | No |
