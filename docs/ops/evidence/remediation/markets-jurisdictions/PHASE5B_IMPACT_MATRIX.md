# Phase 5B — Impact Matrix

**Freeze rule:** Any required change to a frozen consumer of a shared component → stop BLOCKED or create a Phase 5B-only variant. Do not edit shared components in place during Phase 5B.

**Mutation class:** `PRODUCT_WEBSITE` · markets / jurisdictions / brazil pages only · no global CSS token edits to hide composition issues.

## Allowed application paths

| Path | Intent |
|---|---|
| `app/markets/**` | Markets overview + market deep pages |
| `app/jurisdictions/**` | Jurisdictions overview + jurisdiction deep pages |
| `app/brazil/**` | Brazil strategic-market page |
| Phase 5B-exclusive components (none planned at open) | Only if shared edit would be required |
| Phase 5B-specific data / metadata (page-local) | Inline claim remediation |
| CSS selectors explicitly scoped to Phase 5B | Only if required; prefer existing tokens |
| `docs/ops/evidence/remediation/markets-jurisdictions/**` | Gate artifacts |

## Frozen (do not modify)

| Freeze set | Paths / surfaces |
|---|---|
| Homepage | `app/page.tsx`, Homepage CSS, home-only components |
| Team | `app/team/**`, roster, titles, order, `public/team/**` |
| Services | `app/solutions/**`, registries, service-family architecture |
| Phase 5A | about, how-we-engage, contact, diagnostic, partners, careers |
| Careers | `app/careers/page.tsx` specifically locked |
| Global chrome | Nav, layout, footer, CookieBanner, floating WhatsApp |
| Brand assets | logo, favicon |
| Global design | typography, colors, containers, spacing tokens |
| Canonicals/redirects outside Phase 5B | vercel.json solutions redirects; sitemap entries outside 5B |
| Intelligence / Legal | intelligence, insights, article pages |
| Legal pages | privacy, terms, cookies, compliance-channel |

## Shared component blast radius

| Component | Phase 5B users | Outside Phase 5B? | Phase 5B decision |
|---|---|---|---|
| `PageHero` | `/markets`, `/jurisdictions` | Yes — about, how-we-engage, diagnostic, partners, solutions*, hubs, intelligence, insights | **Do not edit.** Page-level props/copy only. |
| `DarkHeroAtmosphere` | `/brazil` | Yes — contact, team, deep solutions, via PageHero | **Do not edit.** |
| `CtaLink` (`CtaButton`) | `/brazil` | Yes — home, how-we-engage, partners, solutions*, intelligence, insights, PageHero | **Do not edit.** Labels via existing CTA constants. |
| `lib/cta` | All 13 pages | Global | **Do not edit** constants unless Phase 5B-only need; prefer page-local labels |
| `lib/pageMeta` | All 13 | Global helper | Safe for path/title/description props only |
| Inline `surface-dark` heroes | market + jurisdiction deep pages | Pattern shared conceptually with other deep pages | Page-local markup only — no shared extract |

## Consumer documentation rule

Before modifying any shared component: list every consumer. If any consumer is outside Phase 5B → create a Phase 5B-specific variant **or** return BLOCKED.

**Opening decision:** No shared-component edits planned. All remediation is page-scoped copy, structure, metadata, and claim qualification.

## IA safeguards (impact)

| Risk | Mitigation |
|---|---|
| Eighth service pillar | Do not present Markets/Jurisdictions/Brazil as peer service areas |
| Banking as peer | Do not elevate Banking and Payments |
| Jurisdiction cards in service catalogue | Do not add jurisdiction cards into `app/solutions` |
| Internal family terminology | Keep public copy free of implementation-family labels |
| Markets as guaranteed entry | Qualify pathway language; no guaranteed market access |
| Brazil as claim wall | Keep strategic + pathway framing; verify SPA/MF content |

## CTA governance (binding)

| Rule | Application |
|---|---|
| WhatsApp = primary strategic intake | Prefer `WHATSAPP_DISCUSS_URL` + `CTA_DISCUSS_LABEL` |
| Contact = non-WhatsApp alternative | `/contact` where secondary needed |
| Diagnostic = structured assessment only | Use `/diagnostic` only when genuinely assessing |
| No duplicate commercial label in main content | Audit arrows / Discuss repeats |
| No adjacent indistinguishable CTAs | One primary per chapter |
| No dead/placeholder links | Validate all hrefs |
| No jurisdiction-specific promise in CTA text | No “get licensed in X” CTAs |

## Stop conditions (matrix)

Return BLOCKED if a frozen file must change, a mandatory route is omitted, unsupported regulatory/tax claims remain, proposed rules are stated as current law, regulator partnership is implied, market stats lack source+period, jurisdiction pages promise licensing/banking, or shared components require in-place edits with external consumers.
