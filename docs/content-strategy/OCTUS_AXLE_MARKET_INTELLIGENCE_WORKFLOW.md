# Octus × Axle — Market Intelligence Workflow

**Mission constraint:** No runtime integration. No auto-publication. Hard separation of data classes.

## Purpose

Describe how a future **Axle Intelligence Layer** can support Octus website and marketing operations without exposing confidential architecture or shipping unverified drafts.

## Hard separation

| Class | Allowed in public site | Notes |
|-------|------------------------|-------|
| Public Octus content | Yes | Human-approved |
| Confidential client information | Never | |
| Tenant / platform data | Never on Octus site | |
| Internal Agent memory | Never public | |
| Unverified drafts | Staging only | Human gate |

## Workflow stages

```text
1. Source monitoring
2. Signal classification
3. Regulatory / market brief
4. Article or update draft
5. Human approval (legal/commercial)
6. Publication (CMS/git)
7. LinkedIn adaptation
8. Newsletter adaptation
9. Sales enablement one-pager
10. Feedback → prioritisation
```

### 1. Source monitoring
Track regulators, gazettes, enforcement, payment rails, and industry notices relevant to Octus markets. Prefer structured sources over social rumour.

### 2. Signal classification
Tag: jurisdiction · market · severity · novelty · actionability · expiry.  
Drop noise early.

### 3. Briefs
Produce internal regulatory/market briefs with citations. **Not** auto-posted.

### 4. Drafting
Draft Insights or page update suggestions from briefs. Label `UNVERIFIED_DRAFT`.

### 5. Human approval
Required for: legal conclusions, client-adjacent facts, numeric claims, partner mentions.

### 6. Publication
Only after approval. Prefer git-managed Insights (`lib/posts.ts` today) or future CMS with audit trail.

### 7–8. LinkedIn / newsletter
Derivative formats from approved canon — no new claims.

### 9. Sales enablement
One-pagers linked to Solutions pages; versioned.

### 10. Feedback
Sales and delivery mark which briefs converted; feed prioritisation (not training on client secrets).

## Website touchpoints (future, non-binding)

- Insights hub featured rail  
- Solution pages “related intelligence”  
- Homepage intelligence teaser (already present as teaser)

## Explicit non-goals for this mission

- No Axle deploy  
- No agent auto-publish to production  
- No tenant data on Octus domain  
- No describing experimental features as live products
EOF