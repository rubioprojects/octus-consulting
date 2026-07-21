# Executive Visual Polish — Brand Asset Decisions

**Date:** 2026-07-21  
**Mission:** `OCTUS_EXECUTIVE_VISUAL_POLISH_PR`

---

## CANVA_ASSET_ACCESS_REQUIRED

Canva was **not** available to this session. No Canva download/upload performed.

When access exists, retrieve only:

- Master SVG symbol  
- Wordmark lockups  
- Favicon source  
- Official colors  
- Patterns / textures  
- Icon assets / guidelines  

Do not redesign the brand from Canva — use as source of truth for exports.

---

## Decisions taken without Canva

| Asset | Decision | Rationale |
|-------|----------|-----------|
| Favicon source | `public/logo-symbol.png` | Best in-repo official symbol raster |
| Invented SVG geometry | **Rejected** | Would risk non-canonical silhouette |
| Tile background | `#0B1220` | Matches Octus authority navy; readable on light/dark chrome |
| Nav logo | `logo-nav.png` on light header | Correct contrast (was incorrectly using light variant) |
| Hero texture | CSS mesh + radial only | Transfer legacy atmosphere principle without Framer art lift |
| Seals / cert art | Untouched | Out of polish scope |
| People portraits | Untouched | PR #6 constraint |

---

## Export set shipped

| File | Size | Use |
|------|------|-----|
| `favicon-16.png` | 16 | Tab |
| `favicon-32.png` | 32 | Tab / shortcut |
| `favicon-48.png` | 48 | Legacy chrome |
| `favicon.ico` | multi PNG entries | Legacy browsers |
| `apple-touch-icon.png` | 180 | iOS |
| `icon-192.png` | 192 | PWA-ish |
| `icon-512.png` | 512 | High-res |

---

## Follow-up

Replace raster-derived favicons with Canva SVG exports when available; keep symbol-only policy.
