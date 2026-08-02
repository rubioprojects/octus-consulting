/** Website-facing public areas — consumed from approved catalog. Do not edit catalog files here. */

export type PublicServiceRef = {
  id: string;
  name: string;
  oneSentence: string;
};

export type PublicArea = {
  id: string;
  num: string;
  slug: string;
  href: string;
  name: string;
  oneSentence: string;
  summary: string;
  whenNeeded: string[];
  services: PublicServiceRef[];
  relatedDeep: { label: string; href: string }[];
  markets: { label: string; href: string }[];
  legacySlugs: string[];
  legacyRoutes: string[];
  preserveFrom: string;
  primaryCta: "discuss" | "assess";
  crisis?: boolean;
  legalBoundary?: boolean;
  historicalAlias?: string;
  intakeHref?: string;
  intakeLabel?: string;
  providerClasses?: string[];
};

export const OCTUS_WHAT_WE_DO = "Octus helps regulated businesses with licensing, compliance, legal and corporate structure, private-client ownership issues, remediation when things are blocked, and the specialist network those programmes need.";

export const PUBLIC_AREAS: PublicArea[] = [
  {
    id: "AREA-REG",
    num: "01",
    slug: "regulatory-structuring",
    href: "/solutions/regulatory-structuring",
    name: "Regulatory Structuring",
    oneSentence: "Jurisdiction fit, licensing pathways and regulatory programmes for regulated operations.",
    summary: "Licensing pathways, jurisdiction fit and regulator-facing programmes for regulated operations \u2014 sequenced with corporate, compliance and banking readiness.",
    whenNeeded: [
      "Entering a regulated market or changing venue",
      "License stalled, deferred or conditioned",
      "Structure incompatible with what the authority expects",
      "Brazil SPA / MF or multi-jurisdiction regulatory pressure",
    ],
    services: [
      {
        id: "SVC-REG-01",
        name: "Licensing strategy and pathway design",
        oneSentence: "We design the licensing pathway and sequence before filings start.",
      },
      {
        id: "SVC-REG-02",
        name: "iGaming licensing programme",
        oneSentence: "We run iGaming licensing as a full programme, not a standalone filing.",
      },
      {
        id: "SVC-REG-03",
        name: "Fintech, EMI and crypto licensing",
        oneSentence: "We treat fintech and payments authorisation as an operable stack, not a paper exercise.",
      },
      {
        id: "SVC-REG-04",
        name: "Brazil SPA / MF regulatory support",
        oneSentence: "We coordinate Brazil-facing regulatory workstreams for betting and related frameworks.",
      },
      {
        id: "SVC-REG-05",
        name: "Jurisdiction selection and risk mapping",
        oneSentence: "We compare venue options for fit, timeline, banking access and operational risk.",
      },
    ],
    relatedDeep: [
      {
        label: "iGaming Licensing",
        href: "/solutions/regulatory/igaming-licensing",
      },
      {
        label: "Fintech Licensing",
        href: "/solutions/regulatory/fintech-licensing",
      },
      {
        label: "Market Entry",
        href: "/solutions/regulatory/market-entry",
      },
      {
        label: "Brazil",
        href: "/brazil",
      },
    ],
    markets: [
      {
        label: "iGaming",
        href: "/markets/igaming",
      },
      {
        label: "Fintech",
        href: "/markets/fintech",
      },
      {
        label: "Digital Assets",
        href: "/markets/crypto",
      },
    ],
    legacySlugs: [
      "regulatory-strategy-licensing",
    ],
    legacyRoutes: [
      "/regulatory",
    ],
    preserveFrom: "/solutions/regulatory-strategy-licensing",
    primaryCta: "discuss",
  },
  {
    id: "AREA-CMP",
    num: "02",
    slug: "compliance-risk",
    href: "/solutions/compliance-risk",
    name: "Compliance & Risk",
    oneSentence: "Compliance frameworks, AML/KYC, DPO and controls that can run under real scrutiny.",
    summary: "AML/KYC/CDD, DPO capability, Compliance-as-a-Service, policies and certification readiness designed to survive banking and regulatory scrutiny.",
    whenNeeded: [
      "Audit or banking questions the team cannot answer",
      "Policies exist but operations do not",
      "Need for embedded compliance or DPO capability",
      "Certification or lab readiness under pressure",
    ],
    services: [
      {
        id: "SVC-CMP-01",
        name: "AML / KYC / CDD frameworks",
        oneSentence: "We build identification, monitoring and due diligence frameworks that banks and regulators can test.",
      },
      {
        id: "SVC-CMP-02",
        name: "Compliance-as-a-Service",
        oneSentence: "We operate the compliance function inside the business as an ongoing service.",
      },
      {
        id: "SVC-CMP-03",
        name: "DPO-as-a-Service",
        oneSentence: "We operate the DPO role for LGPD and GDPR contexts as a working function.",
      },
      {
        id: "SVC-CMP-04",
        name: "Internal controls and governance",
        oneSentence: "We design controls and decision rights that run in day-to-day operations.",
      },
      {
        id: "SVC-CMP-05",
        name: "Certification and lab readiness",
        oneSentence: "We prepare evidence and readiness for laboratory and formal external review.",
      },
      {
        id: "SVC-CMP-06",
        name: "Policies and due diligence packs",
        oneSentence: "We produce policy suites and due diligence packs aligned to how the operation actually runs.",
      },
    ],
    relatedDeep: [
      {
        label: "AML & KYC",
        href: "/solutions/compliance/aml-kyc",
      },
      {
        label: "Compliance-as-a-Service",
        href: "/solutions/compliance/compliance-as-a-service",
      },
      {
        label: "DPO-as-a-Service",
        href: "/solutions/compliance/dpo-as-a-service",
      },
      {
        label: "Internal Controls",
        href: "/solutions/compliance/internal-controls",
      },
      {
        label: "GLI & Certification Readiness",
        href: "/solutions/compliance/gli-readiness",
      },
    ],
    markets: [
      {
        label: "iGaming",
        href: "/markets/igaming",
      },
      {
        label: "Fintech",
        href: "/markets/fintech",
      },
      {
        label: "Digital Assets",
        href: "/markets/crypto",
      },
    ],
    legacySlugs: [
      "compliance-risk-systems",
    ],
    legacyRoutes: [
      "/compliance",
    ],
    preserveFrom: "/solutions/compliance-risk-systems",
    primaryCta: "discuss",
  },
  {
    id: "AREA-LEG",
    num: "03",
    slug: "legal-structural-architecture",
    href: "/solutions/legal-structural-architecture",
    name: "Legal & Structural Architecture",
    oneSentence: "Legal and contractual frameworks for regulated operations, coordinated with counsel where needed.",
    summary: "Contractual architecture, multi-jurisdiction legal frameworks, opinions support and counsel coordination for regulated operations \u2014 not a law-firm shopfront.",
    whenNeeded: [
      "Contracts and structures do not match the operating model",
      "Multi-jurisdiction frameworks need a coordinating layer",
      "Counsel and operators need an execution counterpart",
    ],
    services: [
      {
        id: "SVC-LEG-01",
        name: "Contractual architecture",
        oneSentence: "We design contract frameworks across group, operator and commercial layers.",
      },
      {
        id: "SVC-LEG-02",
        name: "Multi-jurisdiction legal frameworks",
        oneSentence: "We coordinate legal coherence across jurisdictions with independent counsel where required.",
      },
      {
        id: "SVC-LEG-03",
        name: "Counsel coordination",
        oneSentence: "We act as the execution counterpart that sequences legal work with licensing, corporate and compliance programmes.",
      },
      {
        id: "SVC-LEG-04",
        name: "Legal opinions and certifications support",
        oneSentence: "We support legal opinions and related certification paperwork as part of a regulated programme.",
      },
    ],
    relatedDeep: [
      {
        label: "Legacy Legal Architecture",
        href: "/legal-architecture",
      },
    ],
    markets: [
      {
        label: "iGaming",
        href: "/markets/igaming",
      },
      {
        label: "Fintech",
        href: "/markets/fintech",
      },
      {
        label: "High-Risk Operations",
        href: "/markets/high-risk",
      },
    ],
    legacySlugs: [
      "legal-contractual-architecture",
    ],
    legacyRoutes: [
      "/legal-architecture",
    ],
    preserveFrom: "/solutions/legal-contractual-architecture",
    primaryCta: "discuss",
    legalBoundary: true,
  },
  {
    id: "AREA-CORP",
    num: "04",
    slug: "corporate-structuring",
    href: "/solutions/corporate-structuring",
    name: "Corporate Structuring",
    oneSentence: "Companies, holdings and group design for onshore, offshore and cross-border regulated operations.",
    summary: "Companies, holdings, cross-border organisation, reorganisations, banking readiness and corporate tax/accounting coordination for regulated groups.",
    whenNeeded: [
      "Group structure blocks licensing or banking",
      "Expansion requires coherent multi-venue organisation",
      "Banking readiness or corporate tax coordination is part of the structure problem",
    ],
    services: [
      {
        id: "SVC-CORP-01",
        name: "Entity and holding architecture",
        oneSentence: "We design holdings and group structures that stay coherent under licence and bank scrutiny.",
      },
      {
        id: "SVC-CORP-02",
        name: "Company formation",
        oneSentence: "We open entities inside a designed architecture \u2014 not as a standalone incorporation shop.",
      },
      {
        id: "SVC-CORP-03",
        name: "Cross-border structuring",
        oneSentence: "We design multi-venue organisation so the group holds together across jurisdictions.",
      },
      {
        id: "SVC-CORP-04",
        name: "Corporate reorganisation",
        oneSentence: "We reorganise when the current structure blocks licensing, banking or expansion.",
      },
      {
        id: "SVC-CORP-05",
        name: "Banking readiness",
        oneSentence: "We prepare ownership, documentation and compliance posture for real banking conversations. No promised accounts.",
      },
      {
        id: "SVC-CORP-06",
        name: "Accounting and finance coordination",
        oneSentence: "We sell and coordinate accounting and finance programmes under the Octus relationship.",
      },
      {
        id: "SVC-CORP-07",
        name: "Corporate tax planning",
        oneSentence: "We coordinate corporate tax planning for regulated groups under the Octus relationship.",
      },
    ],
    relatedDeep: [
      {
        label: "Company Formation",
        href: "/solutions/corporate/company-formation",
      },
      {
        label: "Holding Design",
        href: "/solutions/corporate/holding-design",
      },
      {
        label: "Cross-border structuring",
        href: "/solutions/corporate/offshore-structuring",
      },
      {
        label: "Private Clients",
        href: "/private-clients",
      },
      {
        label: "Banking & Payments depth",
        href: "/solutions/regulatory/banking-payments",
      },
    ],
    markets: [
      {
        label: "iGaming",
        href: "/markets/igaming",
      },
      {
        label: "Fintech",
        href: "/markets/fintech",
      },
      {
        label: "High-Risk Operations",
        href: "/markets/high-risk",
      },
    ],
    legacySlugs: [
      "corporate-cross-border",
    ],
    legacyRoutes: [
      "/corporate",
    ],
    preserveFrom: "/solutions/corporate-cross-border",
    primaryCta: "discuss",
  },
  {
    id: "AREA-PC",
    num: "05",
    slug: "private-clients",
    href: "/private-clients",
    name: "Private Clients",
    oneSentence: "Personal and ownership structuring for founders, UBOs, executives and families tied to regulated operations.",
    summary: "Personal and ownership structuring for founders, UBOs, executives and families tied to regulated operations \u2014 including residency, personal holdings and personal banking readiness.",
    whenNeeded: [
      "Ownership and UBO layers block licensing or banking",
      "Personal holdings need alignment with the operating group",
      "Residency or personal international structuring is part of the regulated stack",
    ],
    services: [
      {
        id: "SVC-PC-01",
        name: "Ownership and UBO architecture",
        oneSentence: "We structure ownership and UBO layers for the individuals behind regulated operations.",
      },
      {
        id: "SVC-PC-02",
        name: "Personal holding and asset organisation",
        oneSentence: "We organise personal holdings and separate personal assets from operational assets where needed.",
      },
      {
        id: "SVC-PC-03",
        name: "Residency and personal international structuring",
        oneSentence: "We coordinate residency and personal international structuring tied to regulated operations.",
      },
      {
        id: "SVC-PC-04",
        name: "Personal banking and individual KYC readiness",
        oneSentence: "We prepare individuals for personal banking and KYC scrutiny linked to regulated operations.",
      },
      {
        id: "SVC-PC-05",
        name: "Personal tax coordination",
        oneSentence: "We coordinate personal tax work for founders and UBOs under the Octus relationship.",
      },
    ],
    relatedDeep: [
      {
        label: "Corporate Structuring",
        href: "/solutions/corporate-structuring",
      },
    ],
    markets: [
      {
        label: "High-Risk Operations",
        href: "/markets/high-risk",
      },
      {
        label: "iGaming",
        href: "/markets/igaming",
      },
    ],
    legacySlugs: [],
    legacyRoutes: [],
    preserveFrom: "/private-clients",
    primaryCta: "discuss",
    historicalAlias: "Ownership & UBO",
  },
  {
    id: "AREA-REM",
    num: "06",
    slug: "remediation-readiness",
    href: "/solutions/remediation-readiness",
    name: "Remediation & Readiness",
    oneSentence: "Diagnosis and fix when licensing, banking, compliance, corporate, finance or operations are already blocked or failing.",
    summary: "Diagnosis and remediation when licensing, banking, compliance, corporate, finance or operations are already blocked or failing.",
    whenNeeded: [
      "Licensing delayed or failing",
      "Banking rejection or instability",
      "Compliance gaps under scrutiny",
      "Audit readiness problems",
      "Tax or finance problems blocking the operation",
    ],
    services: [
      {
        id: "SVC-REM-01",
        name: "Crisis entry and structural assessment",
        oneSentence: "A focused assessment when the operation is blocked, delayed, rejected or failing.",
      },
      {
        id: "SVC-REM-02",
        name: "Licensing delay remediation",
        oneSentence: "We unblock stalled or conditioned licensing by fixing the structural causes.",
      },
      {
        id: "SVC-REM-03",
        name: "Banking or compliance gap remediation",
        oneSentence: "We remediate when banking rejection or compliance gaps are the live constraint.",
      },
      {
        id: "SVC-REM-04",
        name: "Audit and readiness remediation",
        oneSentence: "We close evidence and readiness gaps when formal review is imminent or already failing.",
      },
      {
        id: "SVC-REM-05",
        name: "Financial infrastructure remediation",
        oneSentence: "When banking or payment infrastructure has already failed, we sequence recovery with the right layers.",
      },
      {
        id: "SVC-REM-06",
        name: "Tax and finance problem remediation",
        oneSentence: "We coordinate tax recovery and finance problem programmes when the live issue is already a blockage.",
      },
    ],
    relatedDeep: [
      {
        label: "Diagnostic assessment",
        href: "/diagnostic",
      },
      {
        label: "GLI & Certification Readiness",
        href: "/solutions/compliance/gli-readiness",
      },
      {
        label: "Audit (legacy alias)",
        href: "/audit",
      },
    ],
    markets: [
      {
        label: "High-Risk Operations",
        href: "/markets/high-risk",
      },
      {
        label: "iGaming",
        href: "/markets/igaming",
      },
      {
        label: "Fintech",
        href: "/markets/fintech",
      },
    ],
    legacySlugs: [
      "operational-remediation-readiness",
    ],
    legacyRoutes: [
      "/audit",
    ],
    preserveFrom: "/solutions/operational-remediation-readiness",
    primaryCta: "assess",
    crisis: true,
    historicalAlias: "Audit & Readiness",
    intakeHref: "/diagnostic",
    intakeLabel: "Start diagnostic assessment",
  },
  {
    id: "AREA-HUB",
    num: "07",
    slug: "international-hub",
    href: "/international-hub",
    name: "International Hub",
    oneSentence: "Finding, connecting and coordinating the banks, PSPs, CSPs, labs, counsel and other specialists a regulated operation needs.",
    summary: "Finding, connecting and coordinating banks, PSPs, CSPs, labs, counsel and other specialists a regulated operation needs \u2014 without implying endorsement or guaranteed onboarding.",
    whenNeeded: [
      "Market entry requires coordinated specialist introductions",
      "Banking or PSP conversations need structural readiness first",
      "Local directors, CSPs, labs or counsel must be sequenced with the operating model",
    ],
    services: [
      {
        id: "SVC-HUB-01",
        name: "Market entry coordination",
        oneSentence: "We coordinate entry into a new regulated market as one sequenced programme.",
      },
      {
        id: "SVC-HUB-02",
        name: "Bank and PSP introductions",
        oneSentence: "We identify and coordinate relevant banks and PSPs for the operation\u2019s risk profile.",
      },
      {
        id: "SVC-HUB-03",
        name: "Payment and PSP architecture",
        oneSentence: "We design payment and PSP options matched to markets, settlement needs and risk.",
      },
      {
        id: "SVC-HUB-04",
        name: "CSP, local director and formation partners",
        oneSentence: "We connect and coordinate CSPs, local directors and formation partners required by the venue.",
      },
      {
        id: "SVC-HUB-05",
        name: "Lab, certification and specialist network coordination",
        oneSentence: "We identify and coordinate laboratories, certification providers and other specialists the programme needs.",
      },
      {
        id: "SVC-HUB-06",
        name: "Counsel and tax specialist coordination",
        oneSentence: "We identify and coordinate legal counsel and tax specialists required for the matter.",
      },
    ],
    relatedDeep: [
      {
        label: "Partners",
        href: "/partners",
      },
      {
        label: "Market Entry depth",
        href: "/solutions/regulatory/market-entry",
      },
      {
        label: "Regulatory Structuring",
        href: "/solutions/regulatory-structuring",
      },
    ],
    markets: [
      {
        label: "iGaming",
        href: "/markets/igaming",
      },
      {
        label: "Fintech",
        href: "/markets/fintech",
      },
      {
        label: "Digital Assets",
        href: "/markets/crypto",
      },
      {
        label: "High-Risk Operations",
        href: "/markets/high-risk",
      },
    ],
    legacySlugs: [],
    legacyRoutes: [],
    preserveFrom: "/international-hub",
    primaryCta: "discuss",
    providerClasses: [
      "Banks and PSPs",
      "Payment providers",
      "Corporate service providers (CSPs)",
      "Local directors",
      "Laboratories",
      "Certification providers",
      "KYC / AML providers",
      "Technology platforms",
      "Local counsel",
      "Tax and other specialists",
    ],
  },
];

export function getPublicAreaBySlug(slug: string): PublicArea | undefined {
  return PUBLIC_AREAS.find((a) => a.slug === slug);
}

export function getPublicAreaByHref(href: string): PublicArea | undefined {
  return PUBLIC_AREAS.find((a) => a.href === href);
}

/**
 * Former six-Solution banking hub — supporting routing page only (not a public area).
 * Route retained for SEO; content routes visitors to Corp / Hub / Remediation.
 */
export const BANKING_SUPPORTING_ROUTE = {
  href: "/solutions/banking-payments-infrastructure",
  canonical: "/solutions/banking-payments-infrastructure",
  routesThrough: [
    { label: "Corporate Structuring (banking readiness)", href: "/solutions/corporate-structuring" },
    { label: "International Hub (introductions / payment architecture)", href: "/international-hub" },
    { label: "Remediation & Readiness", href: "/solutions/remediation-readiness" },
    { label: "Banking & Payments depth", href: "/solutions/regulatory/banking-payments" },
  ],
};
