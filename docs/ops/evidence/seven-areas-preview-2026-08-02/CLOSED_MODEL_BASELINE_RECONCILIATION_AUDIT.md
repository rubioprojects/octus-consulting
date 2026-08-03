# Closed-model baseline reconciliation audit

**Mission:** `OCTUS_WEBSITE_CLOSED_MODEL_RECONCILIATION_AUDIT`  
**Terminal:** `OCTUS_WEBSITE_CLOSED_MODEL_RECONCILIATION_AUDIT_READY`  
**Date:** 2026-08-02  
**Status:** Audit and implementation plan only — **no rendered website code changed in this pass**

## Baseline identities

| Item | Value |
|------|--------|
| Starting PR #17 HEAD | `aa836ce760123a3f203d60e05bb73156e5677a2e` |
| Evidence body HEAD | `ca1bdce9e93b3b226994f741af335269e54d078e` |
| Audit tip HEAD | `99cd1fc` *(full SHA at closeout)* |
| Implementation HEAD | `TBA_IMPLEMENTATION` *(filled at implementation closeout)* |
| Old closed-model commit | `8b12fcc88922e6ed07b98dd40da0a27bde71bbf9` |
| Old branch | `feat/authority-conversion-p0` |
| Old deployment | https://octus-consulting-6dieznt51-axle1.vercel.app |
| Current preview | https://octus-consulting-hrco5jiat-axle1.vercel.app |
| Current branch | `feat/seven-areas-website-architecture` |
| Merge | not performed |
| Production deploy | not performed |

## Provenance rule

| Layer | Authoritative source |
|-------|----------------------|
| Visual composition (what renders on screen) | **Approved deployment** — https://octus-consulting-6dieznt51-axle1.vercel.app |
| How visible components were implemented | **Old closed-model commit** — `8b12fcc` |
| Facts, IA, roster, routes, metadata, editorial truth | **Current PR #17** |

## Governance split (source of truth)

| Domain | Authoritative source |
|--------|----------------------|
| Design system, composition, hierarchy, rhythm, interactions, responsive patterns, Octus motifs/dividers/atmosphere | **Old closed model** (`8b12fcc` / approved deployment) |
| Seven areas, catalog, routes, redirects, metadata/SEO, approved roster/roles, factual accuracy, corrected English, unsupported-claim removal, Banking as supporting page, cookie/WhatsApp behaviour | **Current PR #17** |

This is **baseline reconciliation**, not rollback and not another homepage visual patch.

## Finding in one sentence

PR #17 correctly evolved **information architecture and editorial truth** for seven areas, but institutional page **composition and template families** largely diverged from the closed model — often by flattening hierarchy into generic grids — while the homepage received targeted visual rebases rather than a whole-product inheritance.

## 81-route classification

Source: current sitemap (81 URLs). Classification artifact:

`docs/ops/evidence/seven-areas-preview-2026-08-02/screenshots/closed-model-audit/route-classification.json`

| Family | Count | Notes |
|--------|------:|-------|
| core-home | 1 | `/` |
| core-services-index | 1 | `/solutions` |
| core-seven-area | 7 | Area hubs via `AreaHubPage` |
| core-banking-supporting | 1 | Banking supporting (not peer area) |
| core-service-detail | 12 | Deep service pages |
| markets-index | 1 | |
| markets-detail | 4 | |
| jurisdiction-detail | 7 | + company jurisdictions index in company count |
| company | 6 | about, team, careers, contact, partners, jurisdictions index |
| engagement-authority | 3 | how-we-engage, intelligence, diagnostic |
| insights | 34 | index + articles |
| legal | 4 | privacy, terms, cookies, compliance-channel |
| **Total classified** | **81** | every canonical URL assigned |

Legacy alias pages (`/regulatory`, `/compliance`, old six-area solution paths) are covered by redirects / static redirects and are not duplicate canonicals in the 81.

### Old-only pages without current canonical equivalent

| Old route / file | Status vs current | Recommended action | Human decision |
|------------------|-------------------|--------------------|----------------|
| `/what-octus-does` (`app/what-octus-does/page.tsx`) | Absent as canonical | **REMOVE** as public IA default; narrative absorbed into About / How we engage | NO |
| `/resources/igaming-operator-readiness` | Absent from current tree | **KEEP CURRENT** absent unless Insights editorial re-homes content | NO — decided: no standalone restore unless editorial ticket opens |
| Old six-area Solution hub routes (e.g. `regulatory-strategy-licensing`) | Redirect targets → seven-area canonicals | **ADAPT TO SEVEN AREAS** (redirects **KEEP CURRENT**) | NO |

## Component inventory (shared system)

### Present in both (`8b12fcc` and PR #17)

`BrandLockup`, `CapabilityRail`, `DarkHeroAtmosphere`, `PageHero`, `HomeLeadershipTrust`, `HomeModulesAccordion`, `OctusChapterTransition`, `OctusEditorialDivider`, `OctusSymbolMarker`, `BrandSectionMotif`, `Nav`, `CookieBanner`, `SolutionHubPage`, `CtaButton`, `Eyebrow`, `Section`, `ContentCard`, Insights hub clients, `OctusIcon`.

### Only in old closed model

| Component | Provenance | Likely use |
|-----------|------------|------------|
| `components/system/Reveal.tsx` | `8b12fcc` | Motion / reveal affordances (visible on Intelligence in approved deploy) |
| `components/system/StoryRail.tsx` | `8b12fcc` | Institutional story rail — **source-only; not visibly required in approved deploy** |
| `components/system/SolutionIdentityMark.tsx` | `8b12fcc` | Solution-page identity mark — **source-only; not visibly required in approved deploy** |
| `components/system/DiagnosticAssessmentForm.tsx` | `8b12fcc` | Diagnostic intake form |

### Only in current PR

| Component | Role |
|-----------|------|
| `components/system/AreaHubPage.tsx` | Seven-area hub template (new) |
| `components/StaticRedirect.tsx` | Legacy route redirects |
| `lib/publicAreas.ts` | Seven-area catalog binding |

### CSS / shell drift

`app/globals.css` and `app/layout.tsx` are heavily revised between baselines (+/− thousands of lines). Homepage visual language was re-synced in later PRs, but **Team / Intelligence / Contact density** did not inherit the closed institutional templates.

---

## Team-specific verdict

**Recommended action:** `RESTORE STRUCTURE / UPDATE DATA`  
**Short label (mandate):** `RESTORE OLD COMPOSITION / ADAPT CURRENT DATA`  
**Human decision:** NO — Rubio resolved: restore closed composition; bind **current roster exactly**.

### Old Team strengths (`app/team/page.tsx` @ `8b12fcc`)

- Full branded `octus-dark-hero` + `DarkHeroAtmosphere` + seam.
- Explicit bands: Leadership → Leadership Support → Operational Leadership → Core Specialists → Operations.
- Differentiated card classes (`team-card--leadership`, `--leadership-support`, `--quiet`, etc.).
- Capability label above specialists (`team-capability`).
- Richer CTA: Discuss / Email / Careers.

### Current Team weaknesses (`app/team/page.tsx` @ PR #17)

- Plain `surface-dark` hero without atmosphere/mesh/seam.
- Single undifferentiated `team-grid` for all members.
- No band labels; no capability labels; weaker hierarchy.
- CTA reduced to Careers only.

### Team provenance (approved deploy vs source commit)

**Bands visibly rendered in approved deploy / approved composition** (restore these):

| Band / element | Evidence |
|----------------|----------|
| Branded dark hero (`octus-dark-hero` + atmosphere + seam) | Approved deploy Team hero |
| Leadership | Approved deploy leadership band |
| Core Specialists | Approved deploy specialists band |
| Capability labels (`team-capability`) | Approved deploy above specialists |
| Multi-action CTA (Discuss / Email / Careers) | Approved deploy footer CTA block |

**Source-only classes in `8b12fcc` NOT automatically restored** (not visibly rendered in approved deploy):

| Class / band | Source | Decision |
|--------------|--------|----------|
| `leadership-support` band | `8b12fcc` markup/CSS | Do not restore unless approved deploy shows it |
| `operational-leadership` band | `8b12fcc` markup/CSS | Do not restore unless approved deploy shows it |
| `operations` band | `8b12fcc` markup/CSS | Do not restore unless approved deploy shows it |

Implementation must port **visible** closed-model structure from the approved deployment, using `8b12fcc` as the implementation reference — not every source-only band present in the commit tree.

### Data that must NOT be restored from old

| Forbidden restore | Reason |
|-------------------|--------|
| Maria Cristina as `Managing Director` | Current approved title: Operations Coordination |
| Rubio as bare `Founder` only | Current approved: Founder & CEO |
| Old roster pairing / titles that conflict with current catalog | Current PR is roster SoT |
| Rhetorical em dashes / unsupported international claims | Editorial governance |

### Roster delta (implementation gate)

| Person | Old closed title | Current PR title | Pre-impl gate |
|--------|------------------|------------------|---------------|
| Rubio Teixeira | Founder | Founder & CEO | Use **current** |
| Maria Cristina | Managing Director | Operations Coordination | Use **current** |
| Remaining specialists | See old arrays | See current arrays | Use **current** — decided: no pre-impl human gate |

Evidence: `screenshots/closed-model-audit/{old,current}/team-full-desktop.png`, `team-full-mobile.png`, `team-leadership.png`, `team-specialists.png`.

---

## About-specific verdict

**Recommended action:** `RESTORE STRUCTURE / UPDATE DATA`  
**Short label (mandate):** `RESTORE OLD NARRATIVE ARCHITECTURE / RETAIN CURRENT EDITORIAL TRUTH`

### Architecture comparison

Both baselines share the same **section skeleton**:

1. PageHero  
2. What Octus actually is  
3. How we work  
4. When clients come to us  
5. Where we come from  
6. What we have done (+ juris strip)  
7. Who we work with  
8. How execution works  
9. Capability / certifications block  
10. Final CTA  

Current About is **closer to the closed model than Team** (line counts: old 322 / current 342). Drift is primarily **editorial truth and claim hygiene**, not wholesale template replacement.

### What to restore structurally

- Stronger final CTA set (old had Discuss + Email + “What Octus does”; current Discuss-primary only).
- Richer number/jurisdiction strip presentation where current demotion over-flattened visual rhythm (without restoring unevidenced jurisdiction counts).

### What to retain from current (do not restore old defects)

| Old defect | Do not restore |
|------------|----------------|
| Negative “not an advisory / law firm” framing | Keep positive current English |
| “We don't produce reports” | Keep beyond-written-advice framing if still required |
| “Selected certifications and recognitions” | Keep current “Relevant operating capabilities” |
| GLI-as-authority language | Keep laboratory / certification wording |
| Unsupported ESG / diversity recognition claims | Keep removed |
| Rhetorical em/en dashes | Keep cleaned English |
| Unevidenced certification wall | Keep demoted capability cards |

Evidence: `about-full-desktop.png`, `about-full-mobile.png` (old/current).

---

## Comparison matrix (pages & shared components)

**26 rows** — visible routes and shared components only. Each row has exactly **one** primary recommendation. Human decision column is YES/NO only; all Rubio resolutions applied (**NO**).

Columns follow the mandate. Visual winner OLD means closed-model composition wins as design SoT; data/editorial may still be CURRENT.

| Route or component | Old implementation | Current implementation | Missing from current | Visual winner | Why | Old risks | Recommended action | Old source | Current source | Evidence | Human decision |
|--------------------|--------------------|------------------------|----------------------|---------------|-----|-----------|--------------------|------------|----------------|----------|----------------|
| Homepage shell | Atmospheric hero + chapter rhythm + rail + editorial sections (`app/page.tsx` ~588 lines) | Rebased hero/rail/chapters; shorter page (~414) | Some closed density / secondary CTA patterns | MIXED | Visual rebase restored brand language but page still not full closed inheritance | Defensive law-firm hero copy; six-area framing | **KEEP CURRENT** | `app/page.tsx` | `app/page.tsx` | `homepage-*` | NO — decided: approved copy/IA wins; residual closed modules deferred |
| Capability rail | Static mobile grid + desktop marquee | Restored in brand-alignment pass | — | CURRENT≈OLD | Already exact-aligned | Old six labels + Banking peer | **KEEP CURRENT** | `CapabilityRail.tsx` | `CapabilityRail.tsx` | `homepage-hero` / rail shots | NO |
| Header / lockup | Official SVG nav lockup | Official SVG nav lockup (aligned) | — | CURRENT≈OLD | Brand asset alignment done | Old Solutions IA | **KEEP CURRENT** | `BrandLockup.tsx`, `Nav.tsx` | same | `header-desktop`, `menu-mobile` | NO |
| Footer | Accordion mobile + branded lockup | Accordion mobile + branded lockup (aligned) | — | CURRENT≈OLD | Brand alignment done | Six-area links, Remediation assess | **KEEP CURRENT** | `app/layout.tsx` | `app/layout.tsx` | `footer-*` | NO |
| Home leadership | Circular cards | Circular cards + approved titles | — | CURRENT | Titles SoT is current | Managing Director | **KEEP CURRENT** | `HomeLeadershipTrust.tsx` | same | `homepage-leadership` | NO |
| Services accordion | Six-area identity | Seven-area accordion | Closed six labels | CURRENT | Catalog SoT; seven-area adaptation applied | Six-area | **KEEP CURRENT** | `HomeModulesAccordion.tsx` | same | `homepage-services` | NO — decided: seven-area data retained |
| `/solutions` index | Six-area Solution hub language | Seven-area index | Old solution titles | CURRENT | Correct IA | Six-area naming | **KEEP CURRENT** | `app/solutions/page.tsx` | same | `services-index` | NO |
| Seven area hubs | Per-route Solution hub pages + `SolutionHubPage` | Shared `AreaHubPage` | Per-area closed visual differentiation depth | MIXED | Correct data architecture; visual family still more uniform than closed hubs | Old routes/names | **ADAPT TO SEVEN AREAS** | old solution pages / `SolutionHubPage.tsx` | `AreaHubPage.tsx` + area route pages | `area-*` | NO — decided: adapt closed visual depth into seven-area template |
| Banking supporting | Peer “solution” framing in old IA | Supporting page retained | Peer status correctly removed | CURRENT | Taxonomy governance | Peer area status | **KEEP CURRENT** | banking page | `banking-payments-infrastructure` | `service-detail-banking` | NO |
| Service detail family | Individual atmospheric pages | Individual pages (many retained) | Uneven inheritance | MIXED | Case-by-case flattening vs closed depth | Old claims | **RESTORE STRUCTURE / UPDATE DATA** | under `app/solutions/**` | same | `service-detail-banking` | NO — decided: batch restore structure with current editorial |
| Markets index/detail | Strong industry cards | Largely retained | Some spacing/CTA variance | MIXED | Closer to closed than Team | Old copy | **KEEP CURRENT** | `app/markets/**` | same | `markets-index`, `market-igaming` | NO |
| `/about` | Rich narrative architecture | Same skeleton + editorial repair | Rich dual CTA; some strip density | MIXED | Architecture mostly preserved | Unsupported claims | **RESTORE STRUCTURE / UPDATE DATA** | `app/about/page.tsx` | same | `about-full-*` | NO — decided: restore CTA/rhythm; retain current editorial |
| `/team` | Hierarchical bands + dark hero atmosphere + capability labels | Flat grid + plain hero | Entire institutional hierarchy | OLD | Clearest composition regression | Managing Director; stale titles | **RESTORE STRUCTURE / UPDATE DATA** | `app/team/page.tsx` | same | `team-*` | NO — decided: restore composition; current roster exactly |
| `/careers` | Closed institutional page | Same file size (191/191) | Minor | CURRENT≈OLD | Low drift | — | **KEEP CURRENT** | `app/careers/page.tsx` | same | `careers` | NO |
| `/contact` | Multi-path Discuss/Email/Assess density (~170 lines) | Simplified conversation model (~95) | Assess path richness / two-path structure | OLD | Closed had clearer dual-path authority | Dash-heavy copy | **RESTORE STRUCTURE / UPDATE DATA** | `app/contact/page.tsx` | same | `contact` | NO |
| `/partners` | Institutional | Matched size | Low | CURRENT≈OLD | Low drift | — | **KEEP CURRENT** | `app/partners/page.tsx` | same | `partners` | NO |
| `/jurisdictions` | Dense juris system | Shortened (305→262) | Some depth / visual banding | MIXED | Retention with editorial cuts | Unevidenced claims | **RESTORE STRUCTURE / UPDATE DATA** | `app/jurisdictions/**` | same | `jurisdictions` | NO — decided: restore visual banding; current facts retained |
| `/how-we-engage` | Closed engagement | Slightly shorter | Minor | MIXED | Keep current ENGAGE models | Old wording | **KEEP CURRENT** | `app/how-we-engage/page.tsx` | same | `how-we-engage` | NO |
| `/intelligence` | Multi-section authority page (175) | Collapsed (53) | Large narrative/module loss | OLD | Major composition loss | Old claims | **RESTORE STRUCTURE / UPDATE DATA** | `app/intelligence/page.tsx` | same | `intelligence` | NO — decided: restore section architecture with current claims |
| `/insights` + articles | Hub + templates | Retained | Low | CURRENT | Catalog/editorial SoT | — | **KEEP CURRENT** | Insights components | same | `insights-index`, `insight-article` | NO |
| `/diagnostic` | Form-rich closed intake | Current diagnostic path | Closed form component absent from tree | MIXED | Functional SoT is current | Old assess copy | **KEEP CURRENT** | `DiagnosticAssessmentForm.tsx` + page | `app/diagnostic/page.tsx` | `diagnostic` | NO — decided: keep current path; atmosphere-only visual alignment if needed |
| `/what-octus-does` | Dedicated page | Gone | Page | — | Absorbed elsewhere | Duplicate messaging | **REMOVE** | `app/what-octus-does/page.tsx` | — | — | NO |
| `PageHero` | Dark atmosphere + seam | Atmosphere restored on many pages | Team still bypasses | MIXED | Shared component mostly OK; call-sites uneven | — | **RESTORE EXACTLY** | `PageHero.tsx`, `DarkHeroAtmosphere.tsx` | same | area/about heroes | NO |
| Reveal (visible motion on Intelligence) | `Reveal.tsx` used on Intelligence | Removed | Motion affordance on Intelligence | OLD | Visible in approved deploy on Intelligence | Decorative misuse risk | **RESTORE EXACTLY** | `components/system/Reveal.tsx` | absent | `intelligence` | NO — decided: restore Reveal only; StoryRail and SolutionIdentityMark remain source-only unused at `8b12fcc` (not visibly required; do not restore) |
| Cookie / WhatsApp | Present | Present; overlap fixes current | — | CURRENT | Functional SoT | — | **KEEP CURRENT** | CookieBanner / layout | same | footer/home shots | NO |
| CertificationsBlock | Closed seals UX | Demoted / capability treatment | Certificate-wall presentation | CURRENT | Claim SoT | Unsupported seals | **KEEP CURRENT** | `CertificationsBlock.tsx` | same | about shots | NO — decided: retain demoted capability treatment |

---

## Recommendation counts

Counted from the 26-row matrix above (one primary recommendation per row):

| Classification | Count |
|----------------|------:|
| RESTORE EXACTLY | 2 |
| RESTORE STRUCTURE / UPDATE DATA | 6 |
| ADAPT TO SEVEN AREAS | 1 |
| KEEP CURRENT | 16 |
| REMOVE | 1 |
| HUMAN DECISION (as primary) | 0 |
| **Total matrix rows** | **26** |

*(Implementation batches should expand area hubs and service-detail pages into per-route tickets under ADAPT / RESTORE STRUCTURE without changing this audit’s row count.)*

---

## MIXED_SYSTEM_RESIDUE_REGISTER

| # | Route | Old expected system | Current implementation | Recommended correction |
|---|-------|---------------------|------------------------|------------------------|
| 1 | `/` vs `/team` | Atmospheric branded heroes everywhere institutional | Home branded; Team plain dark slab | Restore Team dark-hero atmosphere from closed Team |
| 2 | Home leadership vs `/team` cards | Circular leadership language consistent | Home circular; Team generic rectangle grid | Port closed Team card class system with current data |
| 3 | Area hubs vs legacy service details | Differentiated Solution hubs with identity marks | Uniform `AreaHubPage` vs older detail pages | Align area hubs to closed SolutionHub visual depth; ADAPT labels |
| 4 | About vs Intelligence | Full narrative chapter stacks | About rich; Intelligence collapsed | Restore Intelligence section architecture with current claims |
| 5 | Contact vs Diagnostic | Multi-path intake density | Contact simplified; Diagnostic separate | Reconcile intake CTA density to closed model without restoring assess defects |
| 6 | Chapter marks / dividers | Present on homepage and many hubs | Sparse on Company pages | Restore selective `OctusEditorialDivider` / chapter marks on Company |
| 7 | Footer brand vs body generics | Closed editorial body + branded footer | Branded footer now; some bodies still generic grids | Fix body templates (Team/Intelligence) not footer |
| 8 | Heading/padding rhythm | Shared section scale (`py-24 md:py-32` + label) | Inconsistent on collapsed pages | Re-apply closed section scale from matching page family |
| 9 | Capability labels (Team) | Required institutional signal | Absent | Restore `team-capability` from closed CSS/markup |
| 10 | CTA blocks | Multi-action institutional | Single-button on Team | Restore multi-action `cta-block` pattern |
| 11 | Removed Reveal | Subtle motion on Intelligence | Gone | Restore `Reveal` on Intelligence; StoryRail/SolutionIdentityMark not required |
| 12 | Solutions IA language | “Solutions” in old UI | “Services” in current | KEEP CURRENT IA; never restore Solutions six-area nav |

**Mixed-system residue count: 12** — implementation pass will resolve these under the primary recommendations above.

---

## Provenance registry (restore candidates)

| Target | Original file(s) | CSS selectors / assets | Direct restore? | Replaces |
|--------|------------------|------------------------|-----------------|----------|
| Team dark hero | `app/team/page.tsx` (hero section) | `.octus-dark-hero`, `DarkHeroAtmosphere`, `.octus-dark-hero__seam` | Yes — structure | Current plain `surface-dark` hero |
| Team bands + cards | `app/team/page.tsx` | `.team-band-label`, `.team-grid--*`, `.team-card--*`, `.team-capability`, `.team-photo--*` in `globals.css` | Yes — visible bands only; **swap data arrays** for current roster | Flat `.team-grid` |
| Team CTA | `app/team/page.tsx` CTA section | `.cta-block`, `.cta-block__*` | Yes — keep current labels/routes | Careers-only CTA |
| Intelligence modules | `app/intelligence/page.tsx` @ `8b12fcc` | section labels, grids, chapter marks, `Reveal` | Adapt copy | Current short page |
| Contact dual paths | `app/contact/page.tsx` @ `8b12fcc` | path cards, CTA row | Adapt English | Simplified contact |
| Reveal | `components/system/Reveal.tsx` | associated CSS in `globals.css` @ `8b12fcc` | Yes — Intelligence call-site | Absent motion |
| StoryRail / SolutionIdentityMark | same paths under `components/system/` | associated CSS @ `8b12fcc` | **No** — source-only; not visibly required | N/A |
| Area hub visual depth | `SolutionHubPage.tsx` patterns + old solution pages | identity rails, atmosphere | Adapt into `AreaHubPage.tsx` | Uniform area template |

**Do not “recreate from screenshots” when files exist at `8b12fcc`. Approved deployment wins for what was visibly rendered.**

---

## Screenshot comparison index

Base: `docs/ops/evidence/seven-areas-preview-2026-08-02/screenshots/closed-model-audit/`

Paired folders: `old/` (closed deployment) and `current/` (PR #17 preview).

Includes mandated pairs: homepage full desktop/mobile, hero, leadership, services, services index, banking service detail, all seven areas, markets index + igaming, About full desktop/mobile, Team full desktop/mobile + leadership + specialists, How we engage, Intelligence, Insights index + article, Careers, Contact, Partners, Jurisdictions, Diagnostic, header desktop, mobile menu, footer desktop/mobile, final home CTA.

Capture log: `capture-log.json`.

---

## Proposed implementation order (for Rubio approval — not executed)

1. Team composition restore + current roster/role binding (visible bands only).  
2. Intelligence narrative architecture restore + Reveal + update data.  
3. Contact dual-path density restore / update data.  
4. AreaHubPage visual depth from SolutionHub closed patterns (**ADAPT TO SEVEN AREAS**).  
5. Service detail family structure sweep (**RESTORE STRUCTURE / UPDATE DATA**).  
6. Mixed-residue sweep (dividers, CTAs, hero call-sites, jurisdictions banding).

## Validation (this pass)

| Check | Result |
|-------|--------|
| Old deployment accessible | YES (HTTP 200) |
| Old commit inspectable | YES (`8b12fcc`) |
| Starting PR #17 HEAD | `aa836ce…` |
| Evidence body HEAD | `ca1bdce…` |
| Audit tip HEAD | `99cd1fc` |
| Implementation HEAD | `TBA_IMPLEMENTATION` |
| Rendered website code changed | **NO** (evidence only) |
| Routes classified | **81 / 81** |
| Comparison matrix rows | **26** (one primary recommendation each) |
| Merge | NO |
| Production deploy | NO |

## Rubio decision gate

Rubio resolutions applied in this revision — all matrix Human decision cells **NO**. Implementation may proceed per the primary recommendation column; `Implementation HEAD` will be recorded at closeout.
