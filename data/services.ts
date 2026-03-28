export interface Service {
  num: string
  href: string
  title: string
  shortTitle: string
  forWhom: string[]
  when: string
  resolves: string
  industries: string[]
}

export const services: Service[] = [
  {
    num: '01',
    href: '/regulatory',
    title: 'Regulatory Structuring',
    shortTitle: 'Regulatory Structuring',
    forWhom: ['Operators entering new markets', 'Companies seeking licenses', 'Fintechs and crypto businesses'],
    when: 'Entering a regulated market, licensing process delayed, bank account blocked after approval.',
    resolves: 'Licensing, jurisdiction strategy, banking access, post-license structure.',
    industries: ['iGaming & Betting', 'Fintech', 'Crypto', 'Payments'],
  },
  {
    num: '02',
    href: '/compliance',
    title: 'Compliance & Risk',
    shortTitle: 'Compliance & Risk',
    forWhom: ['Regulated businesses in operation', 'Groups under regulatory scrutiny', 'Companies preparing for audit'],
    when: 'Compliance improvised, regulatory requirements growing, audit imminent, no policies in place.',
    resolves: 'KYC/AML, corporate policies, due diligence, DPO, ISO certifications, GLI readiness.',
    industries: ['iGaming & Betting', 'Fintech', 'Payments', 'Crypto', 'Any regulated sector'],
  },
  {
    num: '03',
    href: '/legal-architecture',
    title: 'Legal & Structural Architecture',
    shortTitle: 'Legal Architecture',
    forWhom: ['Cross-border operations', 'Complex groups', 'Businesses with multiple providers'],
    when: 'Weak contracts, inconsistent documentation, diffuse legal risk, poorly formalized structure.',
    resolves: 'Contract architecture, multi-jurisdiction legal backbone, international documentation.',
    industries: ['iGaming', 'Fintech', 'Payments', 'Cross-border operations'],
  },
  {
    num: '04',
    href: '/corporate',
    title: 'Corporate Structuring',
    shortTitle: 'Corporate Structuring',
    forWhom: ['International groups', 'Expanding operations', 'Founders building holding structures'],
    when: 'Poor corporate structure, governance risk, expansion without design, undefended operation.',
    resolves: 'Onshore/offshore structuring, governance models, holding design, reorganization.',
    industries: ['Any regulated sector', 'Multi-jurisdiction groups', 'Investment structures'],
  },
  {
    num: '05',
    href: '/private-clients',
    title: 'Private Clients & UBO',
    shortTitle: 'Private Clients & UBO',
    forWhom: ['Founders', 'UBOs behind complex operations', 'PEPs', 'Exposed individuals'],
    when: 'Personal exposure, weak asset structure, sensitive KYC/PEP/UBO situation.',
    resolves: 'International wealth structuring, personal holding, UBO compliance, residency.',
    industries: ['Any regulated sector', 'High-net-worth individuals', 'Investment groups'],
  },
  {
    num: '06',
    href: '/audit',
    title: 'Audit & Readiness',
    shortTitle: 'Audit & Readiness',
    forWhom: ['Companies facing imminent audit', 'Operations with documentary gaps', 'Businesses preparing for investment'],
    when: 'Audit scheduled, evidence disorganized, operational gap, weak readiness.',
    resolves: 'Compliance audits, gap analysis, evidence organization, pre-audit preparation.',
    industries: ['iGaming (GLI)', 'Fintech', 'Any regulated sector'],
  },
  {
    num: '07',
    href: '/international-hub',
    title: 'International Hub',
    shortTitle: 'International Hub',
    forWhom: ['Companies entering new countries', 'Multi-jurisdiction groups', 'Businesses needing execution support'],
    when: 'Poorly coordinated expansion, no reliable local partner, fragmented international operation.',
    resolves: 'Market entry strategy, jurisdiction mapping, cross-border coordination, execution.',
    industries: ['Any regulated sector', 'iGaming', 'Fintech', 'Payments'],
  },
]

export const jurisdictions = [
  'Curaçao (GCB)', 'Malta (MGA)', 'Isle of Man', 'Gibraltar',
  'Kahnawake', 'Anjouan', 'UK', 'Cyprus', 'BVI',
  'Brazil (SPA/MF)', 'Belize', 'Mexico', 'Panama', 'Portugal',
]

export const industries = [
  {
    name: 'iGaming & Betting',
    desc: 'Where Octus was built. Offshore licensing, Brazil SPA/MF, GLI certification, platform compliance, banking for operators.',
    modules: ['Regulatory Structuring', 'Compliance & Risk', 'Legal Architecture', 'Audit & Readiness'],
  },
  {
    name: 'Fintech & Payments',
    desc: 'EMI licensing, payment institution authorization, BACEN, LGPD/GDPR, AML/KYC for payment operations.',
    modules: ['Regulatory Structuring', 'Compliance & Risk', 'Corporate Structuring', 'Legal Architecture'],
  },
  {
    name: 'Crypto & Digital Assets',
    desc: 'Regulatory structuring for crypto operations, jurisdiction analysis, compliance alignment, corporate structure.',
    modules: ['Regulatory Structuring', 'Corporate Structuring', 'Compliance & Risk', 'Legal Architecture'],
  },
  {
    name: 'Other Regulated Sectors',
    desc: 'Any business operating under significant regulatory pressure — financial services, healthcare, energy, public sector.',
    modules: ['Compliance & Risk', 'Legal Architecture', 'Corporate Structuring', 'Audit & Readiness'],
  },
]
