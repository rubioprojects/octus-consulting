# OCTUS BLOG PRESERVATION AND LINKING PLAN V1

| Field | Value |
|-------|-------|
| **Status** | `REQUIRES_RUBIO_REVIEW` |
| **Date** | 2026-08-02 |
| **Stance** | Blog / Insights is an approved valuable asset — preserve, do not broadly rewrite or restructure |
| **SoT** | `lib/posts.ts` (38 posts; no MDX/CMS) |
| **Routes** | `/insights`, `/insights/[slug]`, related `/intelligence` |

## 1. Preservation rules

1. Do not merge Intelligence and Insights.
2. Do not invent posts to “balance” markets.
3. Do not mass-rename category strings (SEO/history).
4. Prefer additive metadata and `related[]` links over body rewrites.
5. Surgical fact refresh only when a statement is obsolete (e.g. MiCA tense, closed hearings).

## 2. Inventory summary

| Metric | Value |
|--------|------:|
| Published posts | 38 |
| Missing `author` | 25 |
| Missing `date` | 0 |
| `last-reviewed` field | **Absent** from schema |
| Distinct category strings | ~17 (sprawl) |
| Posts with `related[]` | ~11 |
| Posts with `cta` | ~8 |
| Duplicate slugs | 0 |

Authors present when set: Larissa Carvalho, Caroline Giovanetti, Daniel Cruz Fonseca, Octus Consulting.

Corpus skew: heavy Brazil SPA/betting regulatory news; smaller evergreen international set (2026-03-31 cohort).

## 3. Metadata hygiene plan (no broad rewrite)

| Task | Action | Priority |
|------|--------|----------|
| Authors | Fill known authors from Pulse/traceability docs; default firm byline `Octus Consulting` where appropriate | P1 |
| lastReviewed | Optional schema field later; leave historical `date` as publish date | P2 |
| Categories | Keep strings; map via `lib/intelligence.ts` pillars only | P0 done pattern |
| Tags | Not required for preservation | Optional later |

## 4. Linking plan

### Allowed link targets (after taxonomy approval, update hrefs carefully)

- Approved service-area hubs (names TBD from catalog)
- Existing deeps that remain `KEEP_*`
- `/markets/*`, `/jurisdictions/*`, `/brazil`
- `/diagnostic`, `/contact` where conversion-appropriate
- Peer insights in same cluster

### Do now (prep only — docs recommendation)

| Cohort | Linking recommendation |
|--------|------------------------|
| Evergreen structural five | Already linked to hubs/deeps — **keep**; remap hub URLs only after approved taxonomy |
| Brazil news archive (27 without related) | Light additive related: `/brazil` and/or `/markets/igaming` + peer insight — avoid fake case CTAs |
| Banking / MiCA / Curaçao evergreen | Keep jurisdiction/market links; refresh MiCA language if grandfathering ended |

### Do not

- Point related links at retired pillar URLs without redirects
- Build a provider gallery from Insights
- Rewrite Pulse migrations wholesale

## 5. Obsolete / time-sensitive watchlist (fact check, not redesign)

| Theme | Why watch |
|-------|-----------|
| STF suspension / hearing language | Outcome may have moved |
| Senate “approves” bills | Legislative status changes |
| Regulatory Agenda 2025/2026 | Rolling |
| MiCA operator checklist | Post-grandfathering tense (Aug 2026+) |
| Casino/bingo bill 2024 | Status may be stale |

## 6. Broken links

Declared `related` / `cta` hrefs in inventory resolve to live routes or peer posts (with existing vercel redirects for legacy pillars). No mass link-fix rewrite required in this pack.

## 7. Categories and industry/jurisdiction relations

| Need | Plan |
|------|------|
| Service links | After seven-area approval, batch-update hub hrefs in `related[]` only |
| Industry links | Prefer `/markets/*` |
| Jurisdiction links | Prefer `/jurisdictions/*` + `/brazil` |
| Duplicate content | Near-duplicates are timeline pairs (keep both) |

## 8. Explicit non-actions

- No IA change to Insights hub filters beyond existing `?hub=`
- No replacement of blog platform
- No deletion of Brazil archive for “international balance”
