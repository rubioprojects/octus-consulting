/**
 * Legacy Wave 3 six-Solution hubs: retained for engagement models / partner classes /
 * intelligence pillars and any remaining deep-page references.
 * Public website IA is now `lib/publicAreas.ts` (approved seven areas).
 */

export type SolutionHub = {
  num: string;
  slug: string;
  href: string;
  title: string;
  shortTitle: string;
  problem: string;
  role: string;
  summary: string;
  whenNeeded: string[];
  coordinates: string[];
  engagement: string;
  markets: { label: string; href: string }[];
  relatedDeep: { label: string; href: string }[];
  crisis?: boolean;
  legalBoundary?: boolean;
  primaryCta: "discuss" | "assess";
};

export const SOLUTION_HUBS: SolutionHub[] = [
  {
    num: "01",
    slug: "regulatory-strategy-licensing",
    href: "/solutions/regulatory-strategy-licensing",
    title: "Regulatory Strategy & Licensing",
    shortTitle: "Regulatory Strategy & Licensing",
    problem:
      "Licensing paths fail when strategy, filings and operational readiness are treated as separate workstreams.",
    role: "Octus designs the licensing pathway and coordinates regulatory execution so structure and filings move together.",
    summary:
      "Licensing strategy, regulatory pathways, market entry sequencing and coordination involving regulators for regulated operations.",
    whenNeeded: [
      "Entering a regulated market or changing venue",
      "License stalled, deferred or conditioned",
      "Structure incompatible with what the authority expects",
    ],
    coordinates: [
      "Licensing strategy and pathway design",
      "Regulatory sequencing with corporate and banking layers",
      "Market entry coordination across workstreams",
      "Interaction planning with authorities and advisors",
    ],
    engagement:
      "Typically a Managed Project or Lead Contractor programme when licensing sits inside a broader structural rebuild.",
    markets: [
      { label: "iGaming", href: "/markets/igaming" },
      { label: "Fintech", href: "/markets/fintech" },
      { label: "Digital Assets", href: "/markets/crypto" },
    ],
    relatedDeep: [
      { label: "iGaming Licensing", href: "/solutions/regulatory/igaming-licensing" },
      { label: "Fintech Licensing", href: "/solutions/regulatory/fintech-licensing" },
      { label: "Market Entry", href: "/solutions/regulatory/market-entry" },
    ],
    primaryCta: "discuss",
  },
  {
    num: "02",
    slug: "banking-payments-infrastructure",
    href: "/solutions/banking-payments-infrastructure",
    title: "Banking, Payments & Financial Infrastructure",
    shortTitle: "Banking & Payments",
    problem:
      "Operations stall when banking and payments reject a structure that looked fine on paper.",
    role: "Octus structures for bankability and payment resilience, without promising account openings or outcomes outside Octus control.",
    summary:
      "Banking readiness, payment architecture, PSP strategy and financial infrastructure designed to survive real onboarding scrutiny.",
    whenNeeded: [
      "Bank or PSP rejection loops",
      "Licensed but unable to move funds",
      "Payment stack incompatible with risk profile",
    ],
    coordinates: [
      "Structural readiness for banking conversations",
      "Payment and PSP architecture options",
      "Alignment of corporate, compliance and banking layers",
      "Remediation when infrastructure has already failed",
    ],
    engagement:
      "Often paired with Remediation when banking has already failed, or with Lead Contractor when building the full stack.",
    markets: [
      { label: "High-Risk Operations", href: "/markets/high-risk" },
      { label: "Fintech", href: "/markets/fintech" },
      { label: "iGaming", href: "/markets/igaming" },
    ],
    relatedDeep: [
      { label: "Banking & Payments", href: "/solutions/regulatory/banking-payments" },
    ],
    primaryCta: "discuss",
  },
  {
    num: "03",
    slug: "compliance-risk-systems",
    href: "/solutions/compliance-risk-systems",
    title: "Compliance & Risk Systems",
    shortTitle: "Compliance & Risk",
    problem:
      "Paper compliance collapses under audit, banking and regulatory pressure.",
    role: "Octus builds and operates compliance as a working system. AML, KYC, CDD, DPO and ongoing controls.",
    summary:
      "Operational compliance frameworks, AML/KYC/CDD, DPO capability and risk systems designed to survive scrutiny.",
    whenNeeded: [
      "Audit or banking questions the team cannot answer",
      "Policies exist but operations do not",
      "Need for embedded compliance capability",
    ],
    coordinates: [
      "AML/KYC and CDD frameworks",
      "Compliance-as-a-Service and DPO capability",
      "Internal controls and governance design",
      "Readiness for external review",
    ],
    engagement:
      "Managed Project for build-out; Embedded Capability for ongoing operated compliance.",
    markets: [
      { label: "iGaming", href: "/markets/igaming" },
      { label: "Fintech", href: "/markets/fintech" },
      { label: "Digital Assets", href: "/markets/crypto" },
      { label: "High-Risk Operations", href: "/markets/high-risk" },
    ],
    relatedDeep: [
      { label: "AML & KYC", href: "/solutions/compliance/aml-kyc" },
      { label: "Compliance-as-a-Service", href: "/solutions/compliance/compliance-as-a-service" },
      { label: "DPO-as-a-Service", href: "/solutions/compliance/dpo-as-a-service" },
      { label: "Internal Controls", href: "/solutions/compliance/internal-controls" },
    ],
    primaryCta: "discuss",
  },
  {
    num: "04",
    slug: "corporate-cross-border",
    href: "/solutions/corporate-cross-border",
    title: "Corporate & Cross-Border Structuring",
    shortTitle: "Corporate & Cross-Border",
    problem:
      "Entity charts designed as administration fail when license, bank and expansion pressure arrive.",
    role: "Octus designs entities, governance and holdings for regulated operations across venues, not as a formation shop.",
    summary:
      "Corporate architecture, holding design, governance and cross-border organization aligned to license and banking reality.",
    whenNeeded: [
      "Group structure blocks licensing or banking",
      "Expansion requires coherent multi-venue organization",
      "Ownership and governance need structural clarity",
    ],
    coordinates: [
      "Entity and holding architecture",
      "Cross-border organization design",
      "Governance for regulated groups",
      "Ownership / UBO structural layer (see Private Clients)",
    ],
    engagement:
      "Usually inside Lead Contractor or Managed Project with Regulatory and Banking hubs.",
    markets: [
      { label: "iGaming", href: "/markets/igaming" },
      { label: "Fintech", href: "/markets/fintech" },
      { label: "High-Risk Operations", href: "/markets/high-risk" },
    ],
    relatedDeep: [
      { label: "Company Formation", href: "/solutions/corporate/company-formation" },
      { label: "Holding Design", href: "/solutions/corporate/holding-design" },
      { label: "Cross-border structuring", href: "/solutions/corporate/offshore-structuring" },
      { label: "Ownership & UBO", href: "/private-clients" },
    ],
    primaryCta: "discuss",
  },
  {
    num: "05",
    slug: "legal-contractual-architecture",
    href: "/solutions/legal-contractual-architecture",
    title: "Legal & Contractual Architecture",
    shortTitle: "Legal & Contractual Architecture",
    problem:
      "Regulated operations fail when contracts and legal frameworks are treated as paperwork after the fact.",
    role: "Octus coordinates the legal structures required for regulated operations: architecture and contracts, delivered or coordinated through qualified counsel.",
    summary:
      "Legal and contractual architecture for regulated operations across jurisdictions, covering coordination, frameworks and structural requirements.",
    whenNeeded: [
      "Contracts and structures do not match the operating model",
      "Multi-jurisdiction frameworks need a single coordinating layer",
      "Counsel and operators need an execution counterpart",
    ],
    coordinates: [
      "Contractual architecture across layers",
      "Structural legal frameworks for regulated ops",
      "Coordination with external counsel",
      "Alignment with licensing, corporate and compliance workstreams",
    ],
    engagement:
      "Typically coordinated under Lead Contractor with counsel retained as independent advisors.",
    markets: [
      { label: "iGaming", href: "/markets/igaming" },
      { label: "Fintech", href: "/markets/fintech" },
      { label: "High-Risk Operations", href: "/markets/high-risk" },
    ],
    relatedDeep: [{ label: "Legal & Structural Architecture", href: "/solutions/legal-structural-architecture" }],
    legalBoundary: true,
    primaryCta: "discuss",
  },
  {
    num: "06",
    slug: "operational-remediation-readiness",
    href: "/solutions/operational-remediation-readiness",
    title: "Operational Remediation & Readiness",
    shortTitle: "Remediation & Readiness",
    problem:
      "Operations that are blocked, exposed, delayed, rejected or failing under regulatory pressure need a single crisis door, not a catalogue.",
    role: "Octus enters live failures, assesses structural gaps and sequences remediation across regulatory, banking, compliance and corporate layers.",
    summary:
      "Strategic crisis entry for licensing delays, banking failures, compliance gaps, audit readiness and operational instability.",
    whenNeeded: [
      "Licensing delayed or failing",
      "Banking rejection or instability",
      "Compliance gaps under scrutiny",
      "Audit readiness problems",
      "Blocked market entry or regulatory exposure",
    ],
    coordinates: [
      "Structural assessment conversation",
      "Remediation sequencing across layers",
      "Audit and certification readiness coordination",
      "Stabilization path toward operable structure",
    ],
    engagement:
      "Starts with Assess your situation; often converts to Lead Contractor or Managed Project once the failure mode is clear.",
    markets: [
      { label: "High-Risk Operations", href: "/markets/high-risk" },
      { label: "iGaming", href: "/markets/igaming" },
      { label: "Fintech", href: "/markets/fintech" },
    ],
    relatedDeep: [
      { label: "GLI & Certification Readiness", href: "/solutions/compliance/gli-readiness" },
      { label: "Assess / diagnostic path", href: "/diagnostic" },
    ],
    crisis: true,
    primaryCta: "assess",
  },
];

export const ENGAGEMENT_MODELS = [
  {
    num: "01",
    title: "Lead Contractor Programme",
    body: "One point of accountability. Octus coordinates regulatory, compliance, banking and corporate layers as a single execution programme.",
  },
  {
    num: "02",
    title: "Managed Project",
    body: "A defined scope for licensing, market entry, remediation or structural rebuilding, supported by clear workstreams and ownership.",
  },
  {
    num: "03",
    title: "Strategic Mandate",
    body: "Senior structural mandate when the decision is critical and the path must be designed before execution scales.",
  },
  {
    num: "04",
    title: "Embedded Capability",
    body: "An ongoing capability embedded within the business, such as compliance or DPO support, while accountability remains aligned with the matters Octus can control.",
  },
];

export const PARTNER_CLASSES = [
  "Regulated-market advisors",
  "Law firms and counsel",
  "Corporate service providers (CSPs)",
  "Compliance specialists",
  "Financial infrastructure providers",
  "Technical specialists",
];

export const INTELLIGENCE_PILLARS = [
  {
    title: "Regulatory Intelligence",
    body: "How rules, authorities and structural requirements shift, framed for operators who must act, not scroll.",
  },
  {
    title: "Market Signals",
    body: "Sector dynamics across iGaming, fintech, digital assets and other highly regulated environments.",
  },
  {
    title: "Operational Insights",
    body: "Failure modes including banking rejection, compliance collapse, licensing stuck mid-path and structures that do not hold.",
  },
  {
    title: "Founder & Executive Perspectives",
    body: "Ownership, governance and expansion decisions under regulatory and operational constraint.",
  },
];
