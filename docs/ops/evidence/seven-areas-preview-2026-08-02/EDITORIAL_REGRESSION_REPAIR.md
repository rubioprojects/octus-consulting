# Editorial regression repair — 2026-08-02

**PR:** https://github.com/rubioprojects/octus-consulting/pull/17  
**Branch:** `feat/seven-areas-website-architecture`  
**Baseline HEAD (pre-repair):** `783e4f51c2734140e72a0047e76a798194549f7e`  
**Final HEAD:** `f67b284d305a3d8f6d17004ab34d56c38e57e793`  
**Preview (deployment):** https://octus-consulting-cbogxxh7a-axle1.vercel.app  
**Preview (branch alias):** https://octus-consulting-git-feat-seven-areas-website-arch-0785d8-axle1.vercel.app  
**Terminal:** `OCTUS_WEBSITE_EDITORIAL_REGRESSION_CLEAN_READY`  
**Mergeable:** true / clean (no merge performed)  
**Merge:** not performed  
**Production deploy:** not performed  
**Method constraint:** no global punctuation regex; semantic sentence rewrites only

---

## 1. Malformed sentences repaired (confirmed + discovered)

### Homepage engagement models (`lib/commercial.ts`)

| Route | Before | After |
|-------|--------|-------|
| `/` | `Defined scope for licensing, market entry, remediation or structural rebuild: with clear workstreams and ownership.` | `A defined scope for licensing, market entry, remediation or structural rebuilding, supported by clear workstreams and ownership.` |
| `/` | `Operated capability inside the business: for example ongoing compliance or DPO: without transferring accountability for outcomes Octus does not control.` | `An ongoing capability embedded within the business, such as compliance or DPO support, while accountability remains aligned with the matters Octus can control.` |
| `/` | Strategic Mandate used `high-stakes` | Rewritten to `critical` |

### About (`app/about/page.tsx`)

| Before | After |
|--------|-------|
| `Octus does not sit as a traditional advisor... : entering the structure...` | `Octus acts as the central coordination and execution layer behind regulated businesses. We enter the structure, coordinate the required workstreams and remain accountable for the work within our mandate.` |
| `...require local : in legal systems...` | `...require local expertise in legal systems, banking environments, regulatory bodies and corporate frameworks.` |
| `...as part of one operational , with a single point...` | `...as part of one operating model, with a single point of responsibility throughout.` |
| `...regulatory , beyond documentation alone.` | `...regulatory alignment that extends beyond documentation.` |
| `We don't produce reports.` | `We go beyond written advice by structuring, coordinating and operating the work required across regulatory, compliance, banking and corporate layers.` |
| Negative CTA / “Not as one more provider” framing | Positive: “One accountable execution layer.” / “Build a structure that works under scrutiny.” |

### Other public prose (semantic rewrites)

| Route / source | Issue | Repair |
|----------------|-------|--------|
| `/solutions/compliance/compliance-as-a-service` | `operates :  not something` | Natural comma rewrite |
| `/solutions/regulatory/igaming-licensing` | `scale :` fragment | Rewritten across licensing/banking/compliance/scale |
| `/solutions/compliance/dpo-as-a-service` | `{" "}: name assigned` (space before colon) | `Nominal DPO.` sentence form |
| Multiple jurisdiction/solution pages | List bullet markers corrupted to `: ` | Restored to `•` markers (18 instances) |
| `lib/posts.ts` insight bodies | Colon-as-dash remnants (`: with`, `: not`, double appositives) | 24 semantic rewrites |
| Markets / contact / careers / brazil / partners / commercial hubs | Colon-as-dash and compound hyphens | Semantic rewrites; route slugs preserved |

---

## 2. Claim cards — Selected certifications and recognitions

**Section title change:** `Selected certifications and recognitions` → **`Relevant operating capabilities`**

| Former card | Decision | Evidence path |
|-------------|----------|---------------|
| Diversity & Institutional Recognition | **Removed** | No approved certificate/award evidence in repo catalog or mandate |
| ESG & Governance Standards | **Removed** | No approved certificate/award evidence |
| LGPD Readiness | **Retained as capability** (renamed: Data protection coordination (LGPD contexts)) | Capability language only; not presented as certification |
| GDPR & Data Protection | **Retained as capability** (renamed: Data protection coordination (GDPR contexts)) | Capability language only |
| Certification-ready Environments | **Retained as capability** (renamed: Certification and laboratory readiness) | Describes preparation posture, not a held certificate |

No logos, badges or new metrics introduced.

---

## 3. Leadership titles

| Person | Public title | Source |
|--------|--------------|--------|
| Rubio Teixeira | **Founder & CEO** | Mandate §6 (required wording) |
| Maria Cristina | **Operations Coordination** | `docs/commercial/public-catalog/OCTUS_PUBLIC_SERVICE_CATALOG_V1.md` — “Maria Cristina (operational coordination where applicable)” |

`Managing Director` removed from homepage leadership and `/team`. Homepage paragraph still refers to her naturally as **Cris**.

---

## 4. Regulator / laboratory terminology

| Before | After | Route |
|--------|-------|-------|
| Direct interaction with regulatory authorities including SPA/MF, MGA, GLI… | `Coordination with regulatory authorities such as SPA/MF and MGA, together with laboratories and certification providers such as GLI` | `/about` |
| GLI listed alongside regulators in coordination bullets | Split: laboratories/certification providers such as GLI, sequenced with authorities | `/solutions/compliance/gli-readiness` |

Sitemap scan for lumped phrase `including SPA/MF, MGA, GLI`: **0 hits**.

---

## 5. Rendered-copy QA (all sitemap URLs)

**Surface:** static export `out/` after `npm run build`  
**URLs:** **81 / 81** present  
**Method:** tag-aware text extraction (tags removed without inserting spaces); patterns searched on rendered text

| Pattern | Count across 81 URLs |
|---------|----------------------|
| ` :` | 0 |
| ` ,` | 0 |
| ` ;` | 0 |
| `: with` | 0 |
| `: without` | 0 |
| `: not` | 0 |
| `: for example` | 0 |
| `:\s*:` | 0 |
| em dash `—` | 0 |
| `We don't produce reports` | 0 |
| `Managing Director` | 0 |
| `Selected certifications and recognitions` | 0 |
| `including SPA/MF, MGA, GLI` | 0 |

**Note:** Timeline ranges such as `6–12 months` (en dash in numeric ranges) may remain where grammatical; rhetorical em/en dashes in prose were removed earlier. Zero em-dash count alone was **not** treated as acceptance — natural English + zero malformed patterns above is the gate.

Corrupted colon list-bullets (`<span>…>: </span>`) repaired; post-fix count **0**.

---

## 6. Functional revalidation (Playwright against local `out/` serve)

| Check | Result |
|-------|--------|
| Homepage Rubio portrait | PASS (`/team/rubio-teixeira.jpg`) |
| Homepage Cris portrait | PASS (`/team/maria-cristina.jpg`) |
| Leadership section retained | PASS |
| About team image | PASS (`team-group.jpg`) |
| Cookie Continue → `localStorage octus-cookies-accepted=true` | PASS |
| Banner absent after reload | PASS |
| WhatsApp float vs cookie bar overlap (desktop, banner visible) | PASS (no overlap; WA above cookie) |
| Desktop Discuss CTA visible | PASS |
| Mobile Discuss CTA visible | PASS |
| Mobile WA float visible | PASS |

---

## 7. Hyphenated language (visible prose)

Rewrites applied where natural (non-exhaustive): `private-client` → private client; `client-facing` → client language; `high-stakes` → critical; `multi-jurisdiction` → across jurisdictions; `post-license` → after licensing; `regulator-facing` → coordination involving regulators. **Route slugs** such as `/private-clients` unchanged.

---

## 8. Governance

- No merge
- No production deploy
- Architecture / seven areas / portraits / visual system unchanged in structure
- Preview and final HEAD updated on PR #17 after this commit
