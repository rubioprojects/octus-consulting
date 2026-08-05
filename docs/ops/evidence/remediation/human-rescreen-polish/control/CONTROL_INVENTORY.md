# Human Rescreen Polish — Control Inventory

**Date:** 2026-08-04  
**Branch:** `feat/seven-areas-website-architecture`  
**Starting HEAD:** `ea97f1f0196dc6ad35302d88c4510aa5ae2eae42`  
**Accepted application SHA:** `84ecb6aff383060088a6185384ff5b9f5ba307e9`  
**Accepted preview:** https://octus-consulting-3lhtpxjer-axle1.vercel.app  
**PR:** https://github.com/rubioprojects/octus-consulting/pull/17  

## Source lock

- Official branch only: `feat/seven-areas-website-architecture`
- Prohibited source: `claude/octus-consulting-review-piusoe` (absent locally; do not merge/cherry-pick/copy)
- Seven-area taxonomy: frozen
- Team roster/titles: frozen (10 profiles, two bands)

## Workstreams

1. CTA reduction  
2. Navigation simplification  
3. Global numeral correction  
4. Industries redesign (+ technology, forex)  
5. Intelligence → Insights consolidation (308)  
6. About simplification  
7. Team portrait restoration (CSS system; no synthetic faces)  
8. Contact simplification  
9. Services overview polish  
10. Service-detail ownership + related nav  
11. Restrained confidentiality positioning  
12. Copy hygiene  

## Route inventory (pre-change)

| Route | Status |
|---|---|
| `/` | live |
| `/markets` | live (4 industry children) |
| `/markets/igaming` | live |
| `/markets/fintech` | live |
| `/markets/crypto` | live |
| `/markets/high-risk` | live |
| `/markets/technology` | **to create** |
| `/markets/forex` | **to create** |
| `/intelligence` | live → **308 to `/insights`** |
| `/insights` | live (33 articles) |
| `/about` | live |
| `/team` | live |
| `/contact` | live (remove from main nav) |
| `/solutions` | live |
| `/how-we-engage` | live |

## Nav (before)

Desktop: Services · Industries · How we engage · **Intelligence** · About · **Contact** · Discuss  
Mobile: Services block · Industries/Markets · How we engage · Intelligence · Insights · Team · Jurisdictions · Careers · Contact · Discuss  

## Nav (target)

Desktop/mobile primary: Services · Industries · How we engage · Insights · About · Discuss your operation  
Contact: footer + direct URL only  
Intelligence: removed from nav; redirect to Insights  

## Portrait provenance (pre)

| Asset | Dimensions | Bytes | Notes |
|---|---|---|---|
| bianca.jpg | 600×600 | 45206 | JPG only |
| caroline-giovanetti.jpg | 600×600 | 87124 | JPG only |
| claudia-nery.jpg | 600×600 | 34089 | **lowest file size / compression risk** |
| esther-vendrami.jpg | 600×600 | 50687 | JPG only |
| larissa-carvalho.jpg | 600×600 | 53037 | JPG only |
| luciana-santos-veloso.jpg | 1064×1600 | 639892 | highest res |
| maria-cristina.jpg | 600×600 | 50903 | JPG only |
| milla-ludovico.jpg | 600×600 | 52499 | JPG only |
| rodrigo-lopes.jpg | 600×600 | 39700 | JPG only |
| rubio-teixeira.jpg | 1200×1200 | 166318 | leadership |
| team-group.jpg | 1024×555 | 157397 | About group photo |

Git history for `public/team`: JPG only; no approved cutout/WebP/PNG with removed backgrounds found.  
**Decision:** CSS portrait system + branded backdrop; no AI faces; no automated background removal.  
**Low-quality candidate:** Claudia Nery → `PORTRAIT_SOURCE_REQUIRED` if no higher-quality real asset found.
