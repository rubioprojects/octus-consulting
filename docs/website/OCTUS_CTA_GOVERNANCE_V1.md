# OCTUS CTA Governance V1

**Status:** EVIDENCE / DECISION — no CTA code changes in this pass  
**Date:** 2026-08-03  
**Default rule:** one primary action per page; maximum one secondary link; no redundant Contact beside “Discuss your operation”; no repeated full CTA block when the same action is already dominant.

## Page-family CTA policy

| Page family | Primary CTA | Max secondary | WhatsApp float | Final CTA block | Allowed extras |
|-------------|-------------|---------------|----------------|-----------------|----------------|
| Home | Discuss your operation | 1 (area or diagnostic if crisis) | Yes | Optional single close | No Careers in hero |
| Services overview | Discuss | 1 (How we engage) | Yes | Optional | No Contact duplicate |
| Seven area hubs | Discuss **or** Assess (crisis hubs) | 1 related path | Yes | One contextual final only | Owner module may soft-link Team |
| Deep-service | Discuss | 1 parent hub | Yes | One | No Careers |
| Cross-cutting banking | Discuss | 1 related compliance/reg | Yes | One | — |
| Industries / Jurisdictions | Discuss | 1 related area | Yes | Optional | — |
| Intelligence | Explore Insights | 1 Discuss | Yes | Optional light | — |
| Insights post | Discuss | 1 related service | Yes | Optional | — |
| About | Discuss | 1 Team | Yes | One | — |
| Team | Discuss | 1 Careers **or** Email (not both + Contact) | Yes | Single close — not 3 equal buttons | No Contact label duplicate |
| How we engage | Discuss | 1 Diagnostic | Yes | One | — |
| Contact | Discuss (WhatsApp) | 1 Email | Yes | Process list only — no second CTA slab | Diagnostic as path card, not third hero button |
| Diagnostic | Start diagnostic / WhatsApp assess | 1 Discuss | Yes | One | — |
| Partners | Discuss | 1 International Hub | Yes | Optional | No Team mix |
| Careers | Careers path | 1 Discuss | Yes | Optional | — |
| Legal / governance | Email / channel | 0–1 | Yes (sitewide) | No sales slab | — |

## Current duplication register (signals from built HTML)

Observed on key routes (counts include header/footer/float echo):

| Surface | Discuss occurrences | Mailto | WA refs | Final `cta-block` | Issue |
|---------|--------------------:|-------:|--------:|------------------:|-------|
| `/` | 9 | 4 | 15 | 0 | High Discuss echo via layout/nav/float |
| `/team` | 7 | 6 | 13 | 8 | Multi-action close (Discuss + Email + Careers) + float |
| `/contact` | 13 | 12 | 37 | 0 | Hero dual CTA + path cards + float + footer |
| `/about` | 9 | 6 | 15 | 10 | Final block + nav/float |
| `/intelligence` | 9 | 6 | 17 | 0 | Secondary Discuss competes with Insights |
| Area hub example | 9 | 4 | 15 | 0 | Related paths + float + header |
| `/diagnostic` | 7 | 6 | 15 | 0 | Assess language dense |

### Named duplication patterns (count = **11**)

1. Header Discuss CTA  
2. Hero primary Discuss  
3. Hero secondary Email/Contact  
4. Floating WhatsApp  
5. In-body Discuss repeats  
6. Final `cta-block` Discuss  
7. Footer Discuss / email  
8. Team close: Discuss + Email + Careers (three equals)  
9. Contact path cards repeating WhatsApp+Email after hero  
10. “Contact” label beside equivalent Discuss action  
11. Diagnostic / Assess competing with Discuss on non-crisis pages  

## Implementation intent (future pass)

- Keep sitewide float **or** reduce hero WA where float exists (decide one dominant WhatsApp).  
- Team close → Discuss primary + Careers text link only.  
- Contact hero → WhatsApp primary + Email secondary; path cards should not restate identical CTAs verbatim.  
- Area hubs → one contextual final CTA aligned to discuss vs assess.
