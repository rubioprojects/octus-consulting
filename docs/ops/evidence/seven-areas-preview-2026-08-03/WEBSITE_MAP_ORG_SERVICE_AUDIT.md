# WEBSITE MAP, ORGANISATIONAL MODEL AND SERVICE PLACEMENT AUDIT

**Terminal:** `OCTUS_WEBSITE_MAP_ORG_SERVICE_AUDIT_READY`  
**Date:** 2026-08-03  
**PR:** https://github.com/rubioprojects/octus-consulting/pull/17  
**starting_HEAD / evidence_only_HEAD base:** `f30f1c4b075e3f15d6e41a78f29b0d7c7b070621`  
**implementation_sha / evidence_generated_from_sha:** 
**validation_sha:**   
**Code mutation:** none (`app/`, `components/`, `lib/`, `public/` untouched)  
**Merge:** no · **Production deploy:** no  

## Authority

| Domain | Source |
|--------|--------|
| Visual composition | Closed deploy `https://octus-consulting-6dieznt51-axle1.vercel.app` · commit `8b12fcc` |
| Content / services / owners | Approved catalog + claim register + current human/ops evidence |
| Routes | Current sitemap (81) + live redirect stubs |

---

## 1. Canonical website map

Artifacts:

- `docs/website/OCTUS_WEBSITE_CANONICAL_MAP_V1.md`
- `docs/website/OCTUS_WEBSITE_CANONICAL_MAP_V1.json`

| Metric | Value |
|--------|------:|
| Routes mapped (sitemap) | **81** |
| Retain | 79 |
| Consolidate | 2 (`/brazil`, `/solutions/regulatory/banking-payments`) |
| Redirect (sitemap) | 0 |
| Legacy redirect stubs (extra) | 11 documented |
| Remove | 0 |

Families: Home; Services overview; Seven area hubs; Deep-service pages; Cross-cutting capabilities; Industries; Jurisdictions; Intelligence and Insights; Company; Engagement and conversion; Legal and governance (+ legacy redirects appendix).

---

## 2. Organisational model summary

Artifacts:

- `docs/website/OCTUS_PUBLIC_ORGANISATIONAL_MODEL_V1.md`
- `docs/website/OCTUS_PUBLIC_TEAM_DECISION_REGISTER.md`

| Class | Count |
|-------|------:|
| People reviewed | **15** |
| Leadership (public intent) | 2 |
| Area Owners / Practice Leads (excl. leadership overlap) | 5 |
| Client-facing specialists reviewed | 2 |
| Delivery/ops reviewed | 2 |
| Internal-only | 1 (Irati) |
| External partners named on Team | 0 |
| Former validated | 0 |
| Project-context unresolved | 3 |

### Unresolved roster decisions (minimal Rubio table)

See register D1–D6: Larissa, Daniel, Bianca, Luciana, Claudia label, Rubio portrait.

---

## 3. Team-page diagnosis (required direction)

Compared closed-model Team composition vs current PR Team.

| Requirement | Finding |
|-------------|---------|
| Old close facial framing superior | Confirmed (Rubio review + asset diff) |
| Current Rubio shows excess torso / weak face | Confirmed against current crop CSS + current asset |
| Accountability ≠ full payroll | Current 11-person Core+Leadership over-indexes payroll |
| Leadership differentiated | Present (bands) — keep |
| Area owners identifiable | Partially — owners mixed with ops/specialists |
| Specialists only if relevant | Larissa/Daniel lack commercial necessity proof |
| Partners ≠ employees | OK currently (no partner cards) — preserve |
| Internal ops not auto-public | Bianca/Luciana conflict this rule |
| Shorter role-specific bios | Integrity pass narrowed; still needs role-layer rewrite post-decisions |
| Reduce CTA density | Team close has 3 actions — violates CTA gov |

### Team recommendation (future implementation — not done now)

1. Leadership: Rubio + Maria Cristina.  
2. Area Owners band: Esther, Caroline, Rodrigo, Claudia, Milla (titles per register).  
3. Specialists: omit unless D1/D2 Keep.  
4. Ops: omit unless D3/D4 Keep.  
5. Irati: never public Team.  
6. Single primary CTA + one secondary on close.

---

## 4. Rubio portrait diagnosis

| Item | Value |
|------|-------|
| Old approved asset | `8b12fcc:public/team/rubio-teixeira.jpg` · sha256 `b02c2d72…` · 600×600 |
| Current asset | `public/team/rubio-teixeira.jpg` · sha256 `7a6671aa…` · 600×600 |
| Files identical? | **No** |
| Current CSS focal | `.team-photo--rubio` → `object-position: 49% 18%` (homepage + Team) |
| Recommendation | **RESTORE OLD ASSET** |
| Alternative | RECROP CURRENT only if old asset unavailable in release pipeline |

### Crop requirements (when implementing later)

| Surface | Framing | Focal |
|---------|---------|-------|
| Homepage leadership circle | Tight head-and-shoulders; eyes near upper third | ~50% x / 12–18% y on restored asset |
| Team leadership card | Same asset; slightly more shoulder than homepage still face-dominant | Match homepage intent |
| Do not | Generate AI portrait; widen to torso-dominant; invent new photo |

### Evidence

`docs/ops/evidence/seven-areas-preview-2026-08-03/screenshots/portrait-compare/`

- `rubio-old-8b12fcc.jpg`
- `rubio-current-pr17.jpg`
- `rubio-old-vs-current-side-by-side.jpg`
- face-emphasis proxies

**No image files under `public/` modified.**

---

## 5. Seven-area service placement

Artifacts:

- `docs/website/OCTUS_SEVEN_AREAS_SERVICE_PLACEMENT_MATRIX_V2.md`
- `docs/website/OCTUS_SEVEN_AREAS_SERVICE_PLACEMENT_MATRIX_V2.json`

| Metric | Value |
|--------|------:|
| Services mapped | **39** |
| Service families (ID prefixes) | **7** |
| Single primary area enforced | Yes |
| Tax services explicit | 4 (`SVC-CORP-07`, `SVC-PC-05`, `SVC-REM-06`, `SVC-HUB-06`) |
| Banking as peer area | Forbidden — cross-cutting |

---

## 6. Required area-hub structure vs current

Required modules (mandate):

1. Area thesis  
2. Problems / triggers  
3. Service-family overview  
4. Subservices by family  
5. Selected deep-service links  
6. Multi-jurisdiction implications  
7. Connections to other areas  
8. Relevant industries  
9. Relevant jurisdictions  
10. Delivery / engagement model  
11. Responsible leadership / area owner  
12. One contextual final CTA  

### Gap matrix (shared `AreaHubPage` pattern)

| Module | Status across 7 hubs | Notes |
|--------|----------------------|-------|
| 1 Thesis | Present | Hero |
| 2 Problems/triggers | Incomplete | “When clients need this” partial |
| 3 Service-family overview | Incomplete / too generic | Representative services list ≠ families |
| 4 Subservices by family | Missing | Flat service chips |
| 5 Deep-service links | Partial | `relatedDeep` only |
| 6 Multi-jurisdiction | Missing / generic | No area-specific MJ module |
| 7 Cross-area connections | Partial | Related paths loose |
| 8 Industries | Present (light) | Market chips |
| 9 Jurisdictions | Missing / link-only | Brazil/etc not structured |
| 10 Delivery model | Incomplete | Operating model blurb ≠ engagement |
| 11 Area owner | Missing | No leadership module |
| 12 Single contextual CTA | Incomplete | Layout CTAs + float → density |

**Seven-area structural gap count:** **7 hubs × ~7 deficient modules ≈ 49 gap instances** (modules incomplete/missing/duplicated/link-only). Unique module types deficient: **9/12**.

Pages requiring structural implementation later: **7 hubs** + Services overview + Team + homepage leadership portrait + tax modules + MJ modules + CTA pass.

---

## 7. Multi-jurisdiction model (horizontal)

International Hub remains primary coordination. Each area gets a **distinct** evidence-safe module (not one shared paragraph):

| Area | Distinct MJ module intent |
|------|---------------------------|
| Regulatory Structuring | Venue fit, sequencing, regulator expectations across candidate licences |
| Compliance & Risk | Controls/AML that survive multi-venue banking and regulator scrutiny |
| Legal & Structural Architecture | Cross-border contracts/counsel coordination without shopfront claims |
| Corporate Structuring | Entity/holding topology across venues; tax coordination handoff |
| Private Clients | UBO/ownership portability and personal structuring across venues |
| Remediation & Readiness | Unblock when multi-venue licensing/banking/compliance already failed |
| International Hub | Provider/network coordination (banks, PSPs, CSPs, labs, counsel) |

Banking & Payments infrastructure and Tax services attach as supporting capabilities inside the relevant modules (see placement matrix).

---

## 8. Content placement + CTA

Artifacts:

- `docs/website/OCTUS_PAGE_CONTENT_PLACEMENT_MATRIX_V1.md`
- `docs/website/OCTUS_CTA_GOVERNANCE_V1.md`

**CTA duplication patterns identified:** **11** (see governance register).

---

## 9. Visual strengths matrix (old render vs current)

| Subject | Classification | Note |
|---------|----------------|------|
| Homepage leadership | COMBINE | Keep current titles; restore old facial framing / asset |
| Team composition bands | KEEP CURRENT / DEPENDS ON ORGANOGRAM | Bands OK; membership depends on org decisions |
| Portrait framing | RESTORE OLD | Asset + crop |
| Section density | COMBINE | Old rhythm + current seven-area truth |
| White space | KEEP CURRENT where intentional; RESTORE OLD where sparse collapse | Page-specific |
| Service hierarchy | DEPENDS ON MAP | Implement after placement V2 |
| Area-page depth | DEPENDS ON MAP | 12-module hubs |
| CTA density | REMOVE / COMBINE | Apply CTA gov |
| Chapter transitions | KEEP CURRENT | Already restored |
| Related paths | COMBINE | Keep pattern; fix assignments via map |
| Footer entry | KEEP CURRENT | — |

---

## 10. Exact human decisions required

1. D1–D4 public Team membership (Larissa, Daniel, Bianca, Luciana).  
2. D5 Claudia public label.  
3. D6 Rubio portrait **RESTORE OLD ASSET** confirmation.  
4. Confirm consolidate plan for `/brazil` and banking-payments deep route.  
5. Approve 12-module hub standard before implementation.  
6. Approve CTA governance defaults (float vs hero WhatsApp).  

---

## 11. Implementation sequence (next passes — not this one)

1. Rubio decisions on roster + portrait.  
2. Restore Rubio old asset + crop tokens.  
3. Rebuild Team to Leadership + Area Owners (+ approved specialists only).  
4. Implement hub 12-module skeleton from placement matrix.  
5. Attach deep services + tax + MJ modules per area.  
6. CTA density pass sitewide.  
7. Consolidate `/brazil` + banking deep navigation per map.  
8. Visual rescreen against closed deploy.

---

## Artifact index

| Path |
|------|
| `docs/website/OCTUS_WEBSITE_CANONICAL_MAP_V1.md` |
| `docs/website/OCTUS_WEBSITE_CANONICAL_MAP_V1.json` |
| `docs/website/OCTUS_PUBLIC_ORGANISATIONAL_MODEL_V1.md` |
| `docs/website/OCTUS_PUBLIC_TEAM_DECISION_REGISTER.md` |
| `docs/website/OCTUS_SEVEN_AREAS_SERVICE_PLACEMENT_MATRIX_V2.md` |
| `docs/website/OCTUS_SEVEN_AREAS_SERVICE_PLACEMENT_MATRIX_V2.json` |
| `docs/website/OCTUS_PAGE_CONTENT_PLACEMENT_MATRIX_V1.md` |
| `docs/website/OCTUS_CTA_GOVERNANCE_V1.md` |
| `docs/ops/evidence/seven-areas-preview-2026-08-03/WEBSITE_MAP_ORG_SERVICE_AUDIT.md` |
| `docs/ops/evidence/seven-areas-preview-2026-08-03/screenshots/portrait-compare/*` |

## Confirmations

- No rendered website code changed.  
- No merge.  
- No production deployment.
