# Octus — Content Decision Register

**Mission:** `OCTUS_WEBSITE_STRATEGIC_CONTENT_PRODUCTS_AND_SERVICES_REVIEW`  
**Baseline SHA:** `602ae189`  
**Branch:** `docs/strategic-content-review`

| Decision ID | Current state | Recommendation | Reason | Evidence | Risk | Human approval required | Implementation status |
|-------------|---------------|----------------|--------|----------|------|-------------------------|----------------------|
| D-001 | Design PR #2 not human-rescreened | Proceed audit without merging design PR | Dependency rule | Prior deployment-truth mission | Low | Recorded | **DONE** (`00_DEPENDENCY_AND_BASELINE.md`) |
| D-002 | 7 modules + 12 solutions + what-we-do | Adopt 6 Solutions primary taxonomy | Fragmentation | Inventory + taxonomy docs | Medium | **YES** | RECOMMENDED |
| D-003 | `/what-we-do` live | Merge/redirect into `/solutions` | Duplication | Page audit | Medium | **YES** | RECOMMENDED |
| D-004 | Footer lists pillar modules | Footer → Solutions + Markets + company | Wrong hierarchy | layout footer | Medium | **YES** | RECOMMENDED |
| D-005 | Dual CTA Discuss + Diagnostic | Keep Discuss primary; decide Diagnostic | Conversion clarity | cta.ts, personas | Medium | **YES** | RECOMMENDED |
| D-006 | Contact metadata outdated | Fix title/description | Consistency | `contact/layout.tsx` | Low | No | **IMPLEMENTED** |
| D-007 | Sitemap omits pillars | Add pillar + what-we-do URLs | SEO hygiene | sitemap.ts | Low | No | **IMPLEMENTED** |
| D-008 | Empty `app/api/diagnostic` | Remove stub directory if empty | Hygiene | app/api | Low | No | PENDING check |
| D-009 | Unused CertificationsBlock | Remove or wire deliberately | Dead code | components/ | Low | Prefer yes | RECOMMENDED |
| D-010 | Offshore Structuring page | Reposition away from tax-shop optics | Brand risk | solution page | High | **YES** | RECOMMENDED |
| D-011 | International Hub vague | Reframe as partner/coordination capability | Clarity | pillar page | Medium | **YES** | RECOMMENDED |
| D-012 | Jurisdiction pages | Add disclaimer + freshness programme | Legal risk | jurisdictions/* | High | **YES** | RECOMMENDED |
| D-013 | Brazil outside jurisdictions folder | Keep URL; cross-link; optional later move | SEO | `/brazil` | Medium | **YES** to move | RECOMMENDED |
| D-014 | Insights Brazil-heavy | Editorial rebalance; feature cornerstones | Multi-market claim | posts.ts | Medium | **YES** | RECOMMENDED |
| D-015 | Engagement models Project/Ongoing/Hour | Replace with Lead Contractor set | Commercial clarity | homepage | Medium | **YES** | RECOMMENDED |
| D-016 | Axle intelligence | Workflow doc only; no runtime; no product claims | Mandate | this pack | High if overclaimed | **YES** for public copy | **DONE** (workflow doc) |
| D-017 | Crypto market naming | Rename to Digital Assets in UI | Precision | markets/crypto | Low | **YES** | RECOMMENDED |
| D-018 | Team page flat list | Add leadership vs network clarity | Trust | team page | Low | Prefer yes | RECOMMENDED |
| D-019 | Mandates with numeric claims | Retain only with internal evidence file | Accuracy | homepage | High | **YES** | RECOMMENDED |
| D-020 | New content PR separate from design | Use `docs/strategic-content-review` | Governance | mandate | Low | No | **IN PROGRESS** |

## Implementation waves (recommended)

**Wave A — Hygiene (this PR if green):** sitemap, contact metadata, stub cleanup.  
**Wave B — IA (human approve):** taxonomy, footer, what-we-do merge.  
**Wave C — Offer refinement:** engagement models, remediation naming, offshore reposition.  
**Wave D — Insights editorial:** feature rails, updates, archives.  
**Wave E — Intelligence narrative:** public-safe Axle-supported content ops (no secrets).
EOF