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

export type AreaAccountability = {
  name: string;
  title: string;
  scopeLabel?: string;
};

export type EnrichedPublicArea = PublicArea & {
  families: AreaFamilyView[];
  multiJurisdiction: { title: string; body: string };
  practiceLead: { name: string; title: string };
  leadership: AreaAccountability[];
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
  leadership: AreaAccountability[];
  connections: AreaConnection[];
  jurisdictions: { label: string; href: string }[];
  deliveryModel: string;
};

const ENRICHMENT: Record<string, AreaEnrichment> = {
  "AREA-REG": {
    multiJurisdiction: {
      title: "Licensing pathways differ by venue",
      body: "Venue fit, pathway timelines and filing dependencies change across Malta, Curaçao, Isle of Man and Brazil SPA/MF. Octus sequences international authorisations with Brazil-facing requirements so each licence can operate in its intended market.",
    },
    practiceLead: { name: "Esther Vendrami", title: "International Regulatory & Compliance Lead" },
    leadership: [
      { name: "Rubio Teixeira", title: "Founder & CEO", scopeLabel: "Executive and strategic oversight" },
      { name: "Esther Vendrami", title: "International Regulatory & Compliance Lead", scopeLabel: "International regulatory and licensing" },
      { name: "Caroline Giovanetti", title: "Brazil Regulatory Lead", scopeLabel: "Brazil regulatory" },
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
    ],
    deliveryModel: "Programme-led pathway design first, then coordinated filings across corporate, compliance and banking readiness.",
  },
  "AREA-CMP": {
    multiJurisdiction: {
      title: "Controls must hold for each supervisor in the stack",
      body: "Banks, regulators and certification bodies apply different evidence thresholds. Octus builds AML, privacy and governance frameworks that remain operable under the reviewers that matter for the licences and payment rails in scope.",
    },
    practiceLead: { name: "Esther Vendrami", title: "International Regulatory & Compliance Lead" },
    leadership: [
      { name: "Rubio Teixeira", title: "Founder & CEO", scopeLabel: "Executive and strategic oversight" },
      { name: "Esther Vendrami", title: "International Regulatory & Compliance Lead", scopeLabel: "International compliance operations" },
      { name: "Maria Cristina", title: "Operations Coordination", scopeLabel: "Client and delivery coordination" },
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
    ],
    deliveryModel: "Embedded compliance function or targeted framework builds that remain operable under audit.",
  },
  "AREA-LEG": {
    multiJurisdiction: {
      title: "Contracts and opinions must travel with the licences",
      body: "Contractual architecture, opinions and counsel sequencing need to align with licensing conditions, corporate law and banking expectations in each venue. Octus coordinates frameworks; advice in each jurisdiction is delivered through qualified local counsel.",
    },
    practiceLead: { name: "Rodrigo Coelho Lopes", title: "Legal Architecture Lead" },
    leadership: [
      { name: "Rubio Teixeira", title: "Founder & CEO", scopeLabel: "Executive and strategic oversight" },
      { name: "Rodrigo Coelho Lopes", title: "Legal Architecture Lead", scopeLabel: "Legal architecture coordination" },
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
    ],
    deliveryModel: "Architecture-first legal coordination of frameworks, contracts and counsel sequenced with licensing and corporate programmes.",
  },
  "AREA-CORP": {
    multiJurisdiction: {
      title: "Group structure must stay explainable in every venue",
      body: "Offshore holdings, Brazil local entities and European operating companies face different ownership disclosure, substance and banking standards. Octus designs structures that remain coherent across the full group map.",
    },
    practiceLead: { name: "Claudia Nery", title: "Chief Financial Officer" },
    leadership: [
      { name: "Rubio Teixeira", title: "Founder & CEO", scopeLabel: "Executive and strategic oversight" },
      { name: "Claudia Nery", title: "Chief Financial Officer", scopeLabel: "Corporate and financial architecture" },
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
    ],
    deliveryModel: "Architecture-led formation and reorganisation inside a designed programme.",
  },
  "AREA-PC": {
    multiJurisdiction: {
      title: "Personal structure travels with the regulated operation",
      body: "Founders and UBOs face banking, residency and tax questions that change with each jurisdiction where the group holds a licence. Octus coordinates personal holdings and individual readiness so personal layers support corporate licensing and banking.",
    },
    practiceLead: { name: "Rodrigo Coelho Lopes", title: "Legal Architecture Lead" },
    leadership: [
      { name: "Rubio Teixeira", title: "Founder & CEO", scopeLabel: "Executive and strategic oversight" },
      { name: "Rodrigo Coelho Lopes", title: "Legal Architecture Lead", scopeLabel: "Private-client legal coordination" },
      { name: "Claudia Nery", title: "Chief Financial Officer", scopeLabel: "Personal tax and finance coordination" },
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
    deliveryModel: "Discrete personal mandates coordinated with the regulated group under one relationship.",
  },
  "AREA-REM": {
    multiJurisdiction: {
      title: "Blockages often span countries",
      body: "A banking rejection in one venue may trace to corporate structure in another, or to Brazil SPA conditions that were never sequenced with an international licence. Remediation starts with a structural assessment across live jurisdictions before rebuilding.",
    },
    practiceLead: { name: "Maria Cristina", title: "Operations Coordination" },
    leadership: [
      { name: "Rubio Teixeira", title: "Founder & CEO", scopeLabel: "Executive and strategic oversight" },
      { name: "Maria Cristina", title: "Operations Coordination", scopeLabel: "Remediation delivery coordination" },
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
    ],
    deliveryModel: "Crisis entry and diagnostic assessment first, then sequenced repair across the workstreams that caused the blockage.",
  },
  "AREA-HUB": {
    multiJurisdiction: {
      title: "Providers evaluate structure before accepting an introduction",
      body: "Banks, PSPs, CSPs, laboratories and local counsel review how the operation is built. Octus coordinates provider identification and sequencing so counterparties see a coherent programme.",
    },
    practiceLead: { name: "Esther Vendrami", title: "International Regulatory & Compliance Lead" },
    leadership: [
      { name: "Rubio Teixeira", title: "Founder & CEO", scopeLabel: "Executive and strategic oversight" },
      { name: "Esther Vendrami", title: "International Regulatory & Compliance Lead", scopeLabel: "International network coordination" },
      { name: "Milla Ludovico", title: "Business Development Lead", scopeLabel: "Commercial coordination" },
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
    ],
    deliveryModel: "Coordinator role to identify, introduce and sequence specialists. Provider acceptance remains subject to each provider's criteria.",
  },
};

function buildFamilyView(family: ServiceFamily): AreaFamilyView {
  const placed = getServicesForFamily(family.id);
  const deepByHref = new Map<string, { label: string; href: string }>();

  for (const svc of placed) {
    if (svc.recommended_route && svc.display_depth === "deep-service page") {
      const existing = deepByHref.get(svc.recommended_route);
      if (existing) {
        if (!existing.label.includes(svc.exact_public_name)) {
          existing.label = `${existing.label} · ${svc.exact_public_name}`;
        }
      } else {
        deepByHref.set(svc.recommended_route, {
          label: svc.exact_public_name,
          href: svc.recommended_route,
        });
      }
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
    deepLinks: Array.from(deepByHref.values()),
  };
}

export function enrichPublicArea(area: PublicArea): EnrichedPublicArea {
  const arch = getArchitectureArea(area.id);
  const extra = ENRICHMENT[area.id];
  const families = (arch?.families ?? [])
    .filter((f) => (f.service_ids?.length ?? 0) > 0)
    .map(buildFamilyView);

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
