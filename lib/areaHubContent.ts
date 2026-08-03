/**
 * Enriched seven-area hub content — families from architecture JSON + editorial modules.
 */

import type { PublicArea } from "./publicAreas";
import { PUBLIC_AREAS } from "./publicAreas";
import {
  getArchitectureArea,
  getPlacedService,
  getServicesForFamily,
  type ServiceFamily,
} from "./serviceArchitecture";

export type AreaFamilyView = {
  id: string;
  name: string;
  description: string;
  services: { id: string; name: string; oneSentence: string; href: string | null }[];
  deepLinks: { label: string; href: string }[];
};

export type AreaConnection = {
  areaName: string;
  href: string;
  reason: string;
};

export type EnrichedPublicArea = PublicArea & {
  families: AreaFamilyView[];
  multiJurisdiction: { title: string; body: string };
  practiceLead: { name: string; title: string };
  leadership: { name: string; title: string }[];
  connections: AreaConnection[];
  jurisdictions: { label: string; href: string }[];
  industries: { label: string; href: string }[];
  deliveryModel: string;
  primaryCtaLabel: string;
};

const ONE_SENTENCE: Record<string, string> = Object.fromEntries(
  PUBLIC_AREAS.flatMap((a) => a.services.map((s) => [s.id, s.oneSentence]))
);

type AreaEnrichment = {
  multiJurisdiction: { title: string; body: string };
  practiceLead: { name: string; title: string };
  leadership: { name: string; title: string }[];
  connections: AreaConnection[];
  jurisdictions: { label: string; href: string }[];
  deliveryModel: string;
};

const ENRICHMENT: Record<string, AreaEnrichment> = {
  "AREA-REG": {
    multiJurisdiction: {
      title: "Licensing pathways differ by venue — sequencing matters",
      body: "A Malta or Curaçao licence does not substitute for Brazil SPA/MF requirements. Octus maps venue fit, pathway timelines and cross-border dependencies before filings begin, so international authorisations and Brazil-facing workstreams stay coherent.",
    },
    practiceLead: { name: "Esther Vendrami", title: "International Regulatory & Compliance Lead" },
    leadership: [
      { name: "Rubio Teixeira", title: "Founder & CEO — strategic oversight" },
      { name: "Caroline Giovanetti", title: "Brazil Regulatory Lead" },
    ],
    connections: [
      { areaName: "Corporate Structuring", href: "/solutions/corporate-structuring", reason: "Entity design must match what regulators expect before approval." },
      { areaName: "Compliance & Risk", href: "/solutions/compliance-risk", reason: "AML and controls are evaluated alongside the licence application." },
      { areaName: "International Hub", href: "/international-hub", reason: "Market entry requires coordinated specialist and provider introductions." },
      { areaName: "Brazil", href: "/brazil", reason: "Brazil SPA/MF workstreams need dedicated national coordination." },
    ],
    jurisdictions: [
      { label: "Brazil", href: "/brazil" },
      { label: "Malta", href: "/jurisdictions/malta" },
      { label: "Curaçao", href: "/jurisdictions/curacao" },
      { label: "Isle of Man", href: "/jurisdictions/isle-of-man" },
      { label: "Portugal", href: "/jurisdictions/portugal" },
      { label: "All jurisdictions", href: "/jurisdictions" },
    ],
    deliveryModel: "Programme-led: pathway design first, then coordinated filings across corporate, compliance and banking readiness — not standalone licence shop work.",
  },
  "AREA-CMP": {
    multiJurisdiction: {
      title: "Supervision standards vary — controls must hold in each venue",
      body: "EU AML directives, Brazil COAF expectations and gaming-lab certification requirements impose different evidence thresholds. Octus builds controls that survive the strictest reviewer in the stack, whether that is a bank, a regulator or a certification body.",
    },
    practiceLead: { name: "Esther Vendrami", title: "International Regulatory & Compliance Lead" },
    leadership: [
      { name: "Rubio Teixeira", title: "Founder & CEO — strategic oversight" },
      { name: "Maria Cristina", title: "Operations Coordination" },
    ],
    connections: [
      { areaName: "Regulatory Structuring", href: "/solutions/regulatory-structuring", reason: "Compliance evidence is part of the licensing pathway." },
      { areaName: "Corporate Structuring", href: "/solutions/corporate-structuring", reason: "Internal controls tie to group governance and ownership." },
      { areaName: "Remediation & Readiness", href: "/solutions/remediation-readiness", reason: "When compliance gaps block banking or licensing." },
      { areaName: "International Hub", href: "/international-hub", reason: "Lab, certification and KYC specialist coordination." },
    ],
    jurisdictions: [
      { label: "Brazil", href: "/brazil" },
      { label: "Malta", href: "/jurisdictions/malta" },
      { label: "Portugal", href: "/jurisdictions/portugal" },
      { label: "All jurisdictions", href: "/jurisdictions" },
    ],
    deliveryModel: "Embedded compliance function or targeted framework builds — owned operations, not paper packs that fail under audit.",
  },
  "AREA-LEG": {
    multiJurisdiction: {
      title: "Legal coherence across borders requires counsel in each venue",
      body: "Contractual architecture must align with local licensing conditions, corporate law and banking expectations in every jurisdiction where the group operates. Octus coordinates frameworks and counsel sequencing; legal advice is delivered through qualified counsel in the relevant jurisdiction.",
    },
    practiceLead: { name: "Rodrigo Coelho Lopes", title: "Legal Architecture Lead" },
    leadership: [
      { name: "Rubio Teixeira", title: "Founder & CEO — strategic oversight" },
      { name: "Rodrigo Coelho Lopes", title: "Legal Architecture Lead" },
    ],
    connections: [
      { areaName: "Corporate Structuring", href: "/solutions/corporate-structuring", reason: "Holdings and governance must match contractual layers." },
      { areaName: "Regulatory Structuring", href: "/solutions/regulatory-structuring", reason: "Licence conditions shape contractual obligations." },
      { areaName: "Private Clients", href: "/private-clients", reason: "Personal and group legal layers intersect for UBOs and founders." },
      { areaName: "International Hub", href: "/international-hub", reason: "Local counsel identification and coordination." },
    ],
    jurisdictions: [
      { label: "Brazil", href: "/brazil" },
      { label: "UAE", href: "/jurisdictions/uae" },
      { label: "Portugal", href: "/jurisdictions/portugal" },
      { label: "All jurisdictions", href: "/jurisdictions" },
    ],
    deliveryModel: "Architecture-first legal coordination — frameworks, contracts and counsel sequenced with licensing and corporate programmes.",
  },
  "AREA-CORP": {
    multiJurisdiction: {
      title: "Group structure must survive scrutiny in every venue",
      body: "Offshore holdings, Brazil local entities and EU operating companies face different ownership disclosure, substance and banking standards. Octus designs structures that remain explainable to regulators and banks across the full group map.",
    },
    practiceLead: { name: "Claudia Nery", title: "Chief Financial Officer" },
    leadership: [
      { name: "Rubio Teixeira", title: "Founder & CEO — strategic oversight" },
      { name: "Claudia Nery", title: "Chief Financial Officer" },
    ],
    connections: [
      { areaName: "Regulatory Structuring", href: "/solutions/regulatory-structuring", reason: "Entity design gates licensing approval." },
      { areaName: "Banking & Payments", href: "/solutions/banking-payments-infrastructure", reason: "Banking readiness is a structural constraint." },
      { areaName: "Private Clients", href: "/private-clients", reason: "UBO and personal holdings align with group architecture." },
      { areaName: "International Hub", href: "/international-hub", reason: "Formation partners and CSP coordination." },
    ],
    jurisdictions: [
      { label: "Brazil", href: "/brazil" },
      { label: "Malta", href: "/jurisdictions/malta" },
      { label: "Anjouan", href: "/jurisdictions/anjouan" },
      { label: "All jurisdictions", href: "/jurisdictions" },
    ],
    deliveryModel: "Architecture-led formation and reorganisation — entities opened inside a designed programme, not as standalone incorporations.",
  },
  "AREA-PC": {
    multiJurisdiction: {
      title: "Personal structure follows the regulated operation across borders",
      body: "Founders and UBOs face personal banking, residency and tax questions that change with each jurisdiction where the group holds a licence. Octus coordinates personal holdings and individual readiness so personal layers do not block corporate licensing or banking.",
    },
    practiceLead: { name: "Rodrigo Coelho Lopes", title: "Legal Architecture Lead" },
    leadership: [
      { name: "Rubio Teixeira", title: "Founder & CEO — strategic oversight" },
      { name: "Claudia Nery", title: "Chief Financial Officer" },
    ],
    connections: [
      { areaName: "Corporate Structuring", href: "/solutions/corporate-structuring", reason: "Personal and group ownership must align." },
      { areaName: "Legal & Structural Architecture", href: "/solutions/legal-structural-architecture", reason: "Personal legal frameworks and counsel coordination." },
      { areaName: "International Hub", href: "/international-hub", reason: "Residency and personal international structuring support." },
    ],
    jurisdictions: [
      { label: "Brazil", href: "/brazil" },
      { label: "Portugal", href: "/jurisdictions/portugal" },
      { label: "UAE", href: "/jurisdictions/uae" },
    ],
    deliveryModel: "Discrete personal mandates coordinated with the regulated group — ownership, residency and personal banking readiness under one relationship.",
  },
  "AREA-REM": {
    multiJurisdiction: {
      title: "Blockages often span jurisdictions — diagnosis must map the full stack",
      body: "A banking rejection in one venue may trace to corporate structure in another, or to Brazil SPA conditions that were never sequenced with the international licence. Remediation starts with a structural assessment across all live jurisdictions before rebuilding.",
    },
    practiceLead: { name: "Maria Cristina", title: "Operations Coordination" },
    leadership: [
      { name: "Rubio Teixeira", title: "Founder & CEO — strategic oversight" },
      { name: "Maria Cristina", title: "Operations Coordination" },
    ],
    connections: [
      { areaName: "Regulatory Structuring", href: "/solutions/regulatory-structuring", reason: "Licensing delay remediation." },
      { areaName: "Compliance & Risk", href: "/solutions/compliance-risk", reason: "Compliance gap and audit readiness fixes." },
      { areaName: "Banking & Payments", href: "/solutions/banking-payments-infrastructure", reason: "Financial infrastructure recovery." },
      { areaName: "Corporate Structuring", href: "/solutions/corporate-structuring", reason: "Structural fixes when the group blocks progress." },
    ],
    jurisdictions: [
      { label: "Brazil", href: "/brazil" },
      { label: "High-risk operations", href: "/markets/high-risk" },
      { label: "All jurisdictions", href: "/jurisdictions" },
    ],
    deliveryModel: "Crisis entry and diagnostic assessment first, then sequenced repair across the workstreams that caused the blockage.",
  },
  "AREA-HUB": {
    multiJurisdiction: {
      title: "Specialist networks are jurisdiction-specific — introductions need structure first",
      body: "Banks, PSPs, CSPs, laboratories and local counsel evaluate the operation's structure before accepting an introduction. Octus coordinates provider identification and sequencing so counterparties see a programme, not a cold referral.",
    },
    practiceLead: { name: "Esther Vendrami", title: "International Regulatory & Compliance Lead" },
    leadership: [
      { name: "Rubio Teixeira", title: "Founder & CEO — strategic oversight" },
      { name: "Milla Ludovico", title: "Business Development Lead — commercial coordination" },
    ],
    connections: [
      { areaName: "Regulatory Structuring", href: "/solutions/regulatory-structuring", reason: "Market entry programmes require provider sequencing." },
      { areaName: "Corporate Structuring", href: "/solutions/corporate-structuring", reason: "Formation and banking readiness before introductions." },
      { areaName: "Compliance & Risk", href: "/solutions/compliance-risk", reason: "Lab and certification coordination." },
      { areaName: "Banking & Payments", href: "/solutions/banking-payments-infrastructure", reason: "Bank and PSP architecture." },
    ],
    jurisdictions: [
      { label: "Malta", href: "/jurisdictions/malta" },
      { label: "Curaçao", href: "/jurisdictions/curacao" },
      { label: "UAE", href: "/jurisdictions/uae" },
      { label: "Brazil", href: "/brazil" },
      { label: "All jurisdictions", href: "/jurisdictions" },
    ],
    deliveryModel: "Coordinator role — identify, introduce and sequence specialists; provider acceptance remains subject to each provider's criteria.",
  },
};

function buildFamilyView(family: ServiceFamily): AreaFamilyView {
  const placed = getServicesForFamily(family.id);
  const deepLinks: { label: string; href: string }[] = [];

  for (const svc of placed) {
    if (svc.recommended_route && svc.display_depth === "deep-service page") {
      deepLinks.push({ label: svc.exact_public_name, href: svc.recommended_route });
    }
  }

  return {
    id: family.id,
    name: family.name,
    description: family.description,
    services: family.service_ids.map((id) => {
      const placedSvc = getPlacedService(id);
      const base = PUBLIC_AREAS.flatMap((a) => a.services).find((s) => s.id === id);
      return {
        id,
        name: placedSvc?.exact_public_name ?? base?.name ?? id,
        oneSentence: ONE_SENTENCE[id] ?? family.description,
        href: placedSvc?.recommended_route ?? null,
      };
    }),
    deepLinks,
  };
}

export function enrichPublicArea(area: PublicArea): EnrichedPublicArea {
  const arch = getArchitectureArea(area.id);
  const extra = ENRICHMENT[area.id];
  const families = (arch?.families ?? []).map(buildFamilyView);

  return {
    ...area,
    families,
    multiJurisdiction: extra.multiJurisdiction,
    practiceLead: extra.practiceLead,
    leadership: extra.leadership,
    connections: extra.connections,
    jurisdictions: extra.jurisdictions,
    industries: area.markets,
    deliveryModel: extra.deliveryModel,
    primaryCtaLabel: area.primaryCta === "assess" ? "Assess your situation →" : "Discuss this workstream →",
  };
}

export function getEnrichedAreaBySlug(slug: string): EnrichedPublicArea | undefined {
  const area = PUBLIC_AREAS.find((a) => a.slug === slug);
  return area ? enrichPublicArea(area) : undefined;
}

export function getAllEnrichedAreas(): EnrichedPublicArea[] {
  return PUBLIC_AREAS.map(enrichPublicArea);
}
