/**
 * Insights publication governance , integrity repair (2026-08-04).
 * Binding rules:
 * - currentLawDependency && primarySources.length === 0 → HOLD_NOT_PUBLIC
 * - historical regulatory without exact primary sources → HOLD_NOT_PUBLIC
 * - generic landing pages are rejected as primary sources
 */
import type { Post } from "./posts";
import { posts } from "./posts";
import { normalizeEditorialTitle } from "./insightTitles";

export type PublicationStatus =
  | "PUBLISH_CURRENT"
  | "PUBLISH_HISTORICAL_WITH_UPDATE"
  | "EDITORIAL_COMMENTARY"
  | "HOLD_NOT_PUBLIC";

export type FactualCategory =
  | "current_law"
  | "historical_legislative"
  | "institutional_commentary"
  | "structural_operations"
  | "market_industry"
  | "editorial_commentary"
  | "high_risk_unresolved";

export interface PrimarySourceRef {
  label: string;
  href: string;
  date?: string;
  authority?: string;
  instrumentTitle?: string;
  instrumentNumber?: string;
  accessDate?: string;
  claimsSupported?: string;
}

export interface InsightsPublicationEntry {
  slug: string;
  publicationStatus: PublicationStatus;
  factualCategory: FactualCategory;
  currentLawDependency: boolean;
  primarySources: PrimarySourceRef[];
  lastReviewed: string;
  temporalStatus: string;
  requiredCorrection: string;
  finalDisposition: string;
  currentStatusNote?: string;
}

export const INSIGHTS_REVIEW_DATE = "2026-08-04";

/** Generic landing pages that must not satisfy the exact-source gate. */
export const GENERIC_SOURCE_URL_PATTERNS: RegExp[] = [
  /^https?:\/\/(www\.)?gov\.br\/fazenda\/pt-br\/composicao\/orgaos\/secretaria-de-premios-e-apostas\/?$/i,
  /^https?:\/\/(www\.)?gov\.br\/fazenda\/?$/i,
  /^https?:\/\/brasilparticipativo\.presidencia\.gov\.br\/?$/i,
  /^https?:\/\/(www\.)?gamingcontrolcuracao\.org\/?$/i,
  /^https?:\/\/portal\.gamingcontrolcuracao\.org\/?$/i,
  /^https?:\/\/(www\.)?cga\.cw\/?$/i,
  /^https?:\/\/portal\.cga\.cw\/?$/i,
  /^https?:\/\/(www\.)?gov\.br\/?$/i,
];

export function isGenericSourceUrl(href: string): boolean {
  const u = String(href || "").trim().replace(/\/+$/, "");
  return GENERIC_SOURCE_URL_PATTERNS.some((re) => re.test(u) || re.test(`${u}/`));
}

export function exactPrimarySources(sources: PrimarySourceRef[]): PrimarySourceRef[] {
  return (sources || []).filter((s) => s.href && !isGenericSourceUrl(s.href));
}

function src(
  partial: PrimarySourceRef
): PrimarySourceRef {
  return {
    accessDate: INSIGHTS_REVIEW_DATE,
    ...partial,
  };
}

/**
 * Manual publication decisions before gate enforcement.
 * HOLD rows and editorial rows are explicit; CURRENT/HISTORICAL must carry exact sources.
 */
const RAW_PUBLICATION: Record<string, InsightsPublicationEntry> = {
  "mica-what-operators-need-to-do": {
    slug: "mica-what-operators-need-to-do",
    publicationStatus: "PUBLISH_CURRENT",
    factualCategory: "current_law",
    currentLawDependency: true,
    primarySources: [
      src({
        label: "Regulation (EU) 2023/1114 (MiCA), EUR-Lex",
        href: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32023R1114",
        date: "2023-06-09",
        authority: "European Union",
        instrumentTitle: "Regulation (EU) 2023/1114 on markets in crypto-assets",
        instrumentNumber: "32023R1114",
        claimsSupported: "Art. 59 establishment; Art. 143 transitional; Annex IV own funds",
      }),
      src({
        label: "ESMA statement on the end of transitional periods under MiCA",
        href: "https://www.esma.europa.eu/sites/default/files/2026-04/ESMA75-113276571-1679_Statement_on_the_end_of_transitional_periods_under_MiCA.pdf",
        date: "2026-04-17",
        authority: "ESMA",
        instrumentTitle: "Statement on the end of transitional periods under MiCA",
        claimsSupported: "Post-transition CASP posture",
      }),
      src({
        label: "ESMA list of Member State grandfathering periods (Art. 143)",
        href: "https://www.esma.europa.eu/sites/default/files/2024-12/List_of_MiCA_grandfathering_periods_art._143_3.pdf",
        date: "2024-12",
        authority: "ESMA",
        instrumentTitle: "List of MiCA grandfathering periods Art. 143(3)",
        claimsSupported: "Member State optional transitional periods",
      }),
    ],
    lastReviewed: INSIGHTS_REVIEW_DATE,
    temporalStatus: "Post-1 July 2026 outer transitional limit; Art. 59 establishment restated",
    requiredCorrection: "Art. 59 precision; remove unsupported empirical claims",
    finalDisposition: "PUBLISH_CURRENT",
  },
  "senate-approves-plp-128-2025-tightens-fiscal-policy-bets-fintechs": {
    slug: "senate-approves-plp-128-2025-tightens-fiscal-policy-bets-fintechs",
    publicationStatus: "PUBLISH_CURRENT",
    factualCategory: "current_law",
    currentLawDependency: true,
    primarySources: [
      src({
        label: "Lei Complementar nº 224, de 26 de dezembro de 2025 (Planalto)",
        href: "https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp224.htm",
        date: "2025-12-26",
        authority: "Presidência da República / Planalto",
        instrumentTitle: "Lei Complementar nº 224/2025",
        instrumentNumber: "LC 224/2025",
        claimsSupported: "Enactment of PLP 128/2025; GGR schedule; joint liability framing",
      }),
    ],
    lastReviewed: INSIGHTS_REVIEW_DATE,
    temporalStatus: "Enacted LC 224/2025",
    requiredCorrection: "None material this pass",
    finalDisposition: "PUBLISH_CURRENT",
  },
  "betting-taxation-risks-senate-legal-certainty-regulated-market": {
    slug: "betting-taxation-risks-senate-legal-certainty-regulated-market",
    publicationStatus: "PUBLISH_HISTORICAL_WITH_UPDATE",
    factualCategory: "historical_legislative",
    currentLawDependency: true,
    primarySources: [
      src({
        label: "Lei Complementar nº 224/2025 (Planalto) , subsequent enactment",
        href: "https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp224.htm",
        date: "2025-12-26",
        authority: "Presidência da República / Planalto",
        instrumentTitle: "Lei Complementar nº 224/2025",
        instrumentNumber: "LC 224/2025",
        claimsSupported: "Current-law pointer for readers of pre-enactment commentary",
      }),
    ],
    lastReviewed: INSIGHTS_REVIEW_DATE,
    temporalStatus: "Pre-vote commentary dated 2025-12-17; law later enacted",
    currentStatusNote:
      "As of 2026-08-04, PLP 128/2025 was enacted as Lei Complementar nº 224/2025. Treat rate and liability detail against the statute text, not this pre-enactment commentary.",
    requiredCorrection: "Historical notice + LC 224 primary source",
    finalDisposition: "PUBLISH_HISTORICAL_WITH_UPDATE",
  },
  "coaf-crisis-aml-obligations-online-gaming-operators": {
    slug: "coaf-crisis-aml-obligations-online-gaming-operators",
    publicationStatus: "PUBLISH_CURRENT",
    factualCategory: "institutional_commentary",
    currentLawDependency: true,
    primarySources: [
      src({
        label: "Lei nº 9.613/1998 (Planalto)",
        href: "https://www.planalto.gov.br/ccivil_03/leis/l9613.htm",
        date: "1998-03-03",
        authority: "Presidência da República / Planalto",
        instrumentTitle: "Lei nº 9.613/1998 , lavagem de dinheiro",
        instrumentNumber: "Lei 9.613/1998",
        claimsSupported: "COAF statutory basis and AML reporting framework",
      }),
      src({
        label: "COAF institutional page (Ministry of Finance)",
        href: "https://www.gov.br/fazenda/pt-br/orgaos/coaf",
        date: "2026-08-04",
        authority: "Ministério da Fazenda / COAF",
        instrumentTitle: "Conselho de Controle de Atividades Financeiras , institutional page",
        claimsSupported: "Official institutional name and FIU role",
      }),
    ],
    lastReviewed: INSIGHTS_REVIEW_DATE,
    temporalStatus: "Institutional AML framing with Lei 9.613 primary source",
    requiredCorrection: "None material this pass",
    finalDisposition: "PUBLISH_CURRENT",
  },
  "brazil-b2b-registration-requirement-betting-igaming": {
    slug: "brazil-b2b-registration-requirement-betting-igaming",
    publicationStatus: "PUBLISH_CURRENT",
    factualCategory: "current_law",
    currentLawDependency: true,
    primarySources: [
      src({
        label: "Aviso de Consulta Pública SPA/MF nº 1/2026 (DOU)",
        href: "https://www.in.gov.br/web/dou/-/aviso-de-consulta-publica-spa/mf-n-1/2026-684331643",
        date: "2026-01-30",
        authority: "SPA/MF via Imprensa Nacional (DOU)",
        instrumentTitle: "Aviso de Consulta Pública SPA/MF nº 1/2026",
        instrumentNumber: "Aviso SPA/MF 1/2026",
        claimsSupported:
          "Official opening of B2B supplier-recognition public consultation; window 4 Feb to 23 Mar 2026",
      }),
    ],
    lastReviewed: INSIGHTS_REVIEW_DATE,
    temporalStatus: "Consultation completed; final ordinance not confirmed as of review",
    currentStatusNote:
      "Public consultation under Aviso SPA/MF nº 1/2026 ran 4 February to 23 March 2026 and is completed. A final binding SPA/MF ordinance recognising B2B suppliers is not confirmed as published as of 2026-08-04. January 2025 ICE Barcelona oral attribution and direct quotes are not retained; the 2026 DOU Aviso is not used as evidence for a 2025 event statement.",
    requiredCorrection: "Exact DOU Aviso only for consultation claims; no unsourced 2025 event quote",
    finalDisposition: "PUBLISH_CURRENT",
  },
  "curacao-reform-what-changes": {
    slug: "curacao-reform-what-changes",
    publicationStatus: "PUBLISH_CURRENT",
    factualCategory: "current_law",
    currentLawDependency: true,
    primarySources: [
      src({
        label: "CGA Announcement 25 September 2025 , End of Orange Digital Seal (15 Oct 2025)",
        href: "https://portal.gamingcontrolcuracao.org/uploads/publications/NOCNJ5XSLZW5KgABubppi8TCImmzPs7sARsLN6XT.pdf",
        date: "2025-09-25",
        authority: "Curaçao Gaming Authority (CGA)",
        instrumentTitle: "Announcement: End of Orange Digital Seal Usage , Effective October 15, 2025",
        claimsSupported: "Orange seal transition end date 15 October 2025",
      }),
      src({
        label: "CGA License Reclassification notice (15 October 2025 orange-seal expiry)",
        href: "https://portal.cga.cw/uploads/publications/DmerEy4feCKoFgByE6LRK60QbYfoRm4fFUJ1Vfsn.pdf",
        date: "2025-10-15",
        authority: "Curaçao Gaming Authority (CGA)",
        instrumentTitle: "License Reclassification 15th October 2025",
        claimsSupported: "Orange Seal / Certificate of Operations expiry framing under LOK",
      }),
    ],
    lastReviewed: INSIGHTS_REVIEW_DATE,
    temporalStatus: "Post-transition LOK/CGA; orange-seal end attributed to CGA notice",
    requiredCorrection: "Exact CGA PDFs for seal transition",
    finalDisposition: "PUBLISH_CURRENT",
  },
  "new-regulation-betting-online-game-systems-portaria-722-2024": {
    slug: "new-regulation-betting-online-game-systems-portaria-722-2024",
    publicationStatus: "PUBLISH_HISTORICAL_WITH_UPDATE",
    factualCategory: "historical_legislative",
    currentLawDependency: true,
    primarySources: [
      src({
        label: "Portaria SPA/MF nº 722, de 2 de maio de 2024 (DOU)",
        href: "https://www.in.gov.br/en/web/dou/-/portaria-spa/mf-n-722-de-2-de-maio-de-2024-557715851",
        date: "2024-05-03",
        authority: "SPA/MF via Imprensa Nacional (DOU)",
        instrumentTitle: "Portaria SPA/MF nº 722/2024 , requisitos técnicos e de segurança dos sistemas de apostas",
        instrumentNumber: "Portaria SPA/MF 722/2024",
        claimsSupported: "Technical and security requirements for betting systems and online platforms",
      }),
    ],
    lastReviewed: INSIGHTS_REVIEW_DATE,
    temporalStatus: "May 2024 Portaria 722 reporting",
    currentStatusNote:
      "This article records the Portaria SPA/MF nº 722/2024 position as published in May 2024. Later SPA/MF instruments may amend or supplement these requirements; verify the current DOU text before operational reliance.",
    requiredCorrection: "Exact DOU primary source",
    finalDisposition: "PUBLISH_HISTORICAL_WITH_UPDATE",
  },
  "games-not-classified-as-fixed-odds-betting-brazil": {
    slug: "games-not-classified-as-fixed-odds-betting-brazil",
    publicationStatus: "PUBLISH_HISTORICAL_WITH_UPDATE",
    factualCategory: "historical_legislative",
    currentLawDependency: true,
    primarySources: [
      src({
        label: "Portaria SPA/MF nº 1.207, de 29 de julho de 2024 (DOU)",
        href: "https://in.gov.br/en/web/dou/-/portaria-spa/mf-n-1.207-de-29-de-julho-de-2024-575312304",
        date: "2024-07-29",
        authority: "SPA/MF via Imprensa Nacional (DOU)",
        instrumentTitle: "Portaria SPA/MF nº 1.207/2024 , requisitos técnicos dos jogos on-line",
        instrumentNumber: "Portaria SPA/MF 1.207/2024",
        claimsSupported: "Online games / live studio technical requirements referenced in historical analysis",
      }),
    ],
    lastReviewed: INSIGHTS_REVIEW_DATE,
    temporalStatus: "Historical ordinance analysis; classification not a licensing safe harbour",
    currentStatusNote:
      "Product classification remains instrument-specific. This article is historical analysis of the ordinance posture then described and is not current licensing advice.",
    requiredCorrection: "Exact DOU source; absolute licence-exemption language previously removed",
    finalDisposition: "PUBLISH_HISTORICAL_WITH_UPDATE",
  },
  "stf-suspends-municipal-lottery-operations-nationwide": {
    slug: "stf-suspends-municipal-lottery-operations-nationwide",
    publicationStatus: "PUBLISH_HISTORICAL_WITH_UPDATE",
    factualCategory: "historical_legislative",
    currentLawDependency: true,
    primarySources: [
      src({
        label: "STF news: suspension of municipal lottery and sports-betting services (ADPF 1212)",
        href: "https://noticias.stf.jus.br/postsnoticias/stf-determina-suspensao-dos-servicos-de-loteria-e-apostas-esportivas-autorizados-por-leis-municipais/",
        date: "2025-12-03",
        authority: "Supremo Tribunal Federal",
        instrumentTitle: "ADPF 1212 , liminar (Min. Nunes Marques) suspending municipal lottery/betting acts",
        instrumentNumber: "ADPF 1212",
        claimsSupported: "Nationwide interim suspension of municipal lottery/betting authorisations as reported by STF",
      }),
    ],
    lastReviewed: INSIGHTS_REVIEW_DATE,
    temporalStatus: "Dec 2025 interim measure reporting",
    currentStatusNote:
      "This article records the December 2025 interim posture in ADPF 1212. Plenary referendo and later procedural developments must be verified on the STF docket before any current operational conclusion.",
    requiredCorrection: "Exact STF primary notice",
    finalDisposition: "PUBLISH_HISTORICAL_WITH_UPDATE",
  },
  "quinel-credentialed-certifying-entity-brazil-ministry-finance": {
    slug: "quinel-credentialed-certifying-entity-brazil-ministry-finance",
    publicationStatus: "PUBLISH_HISTORICAL_WITH_UPDATE",
    factualCategory: "market_industry",
    currentLawDependency: true,
    primarySources: [
      src({
        label: "Portaria MF-SPA/MF nº 300, de 23 de fevereiro de 2024 (DOU)",
        href: "https://www.in.gov.br/en/web/dou/-/portaria-mf-spa/mf-n-300-de-23-de-fevereiro-de-2024-544802087",
        date: "2024-02-26",
        authority: "SPA/MF via Imprensa Nacional (DOU)",
        instrumentTitle: "Portaria MF-SPA/MF nº 300/2024 , reconhecimento de entidades certificadoras",
        instrumentNumber: "Portaria MF-SPA/MF 300/2024",
        claimsSupported: "Legal framework for certifying-entity recognition underlying the historical Quinel milestone",
      }),
    ],
    lastReviewed: INSIGHTS_REVIEW_DATE,
    temporalStatus: "2024 credentialing milestone; verify current SPA/MF register",
    currentStatusNote:
      "This article records a 2024 credentialing milestone under the Portaria 300/2024 framework. Credential lists change; operators must verify the current SPA/MF recognised certifying entities rather than treat this article as a live roster.",
    requiredCorrection: "Exact Portaria 300 DOU; historical relationship framing retained",
    finalDisposition: "PUBLISH_HISTORICAL_WITH_UPDATE",
  },
  "regulatory-agenda-2025-2026-secretariat-prizes-betting": {
    slug: "regulatory-agenda-2025-2026-secretariat-prizes-betting",
    publicationStatus: "PUBLISH_HISTORICAL_WITH_UPDATE",
    factualCategory: "historical_legislative",
    currentLawDependency: true,
    primarySources: [
      src({
        label: "Portaria SPA/MF nº 817, de 15 de abril de 2025 , Agenda Regulatória 2025/2026 (DOU)",
        href: "https://www.in.gov.br/en/web/dou/-/portaria-spa/mf-n-817-de-15-de-abril-de-2025-624258870",
        date: "2025-04-15",
        authority: "SPA/MF via Imprensa Nacional (DOU)",
        instrumentTitle: "Portaria SPA/MF nº 817/2025 , Agenda Regulatória para o biênio 2025/2026",
        instrumentNumber: "Portaria SPA/MF 817/2025",
        claimsSupported: "SPA regulatory agenda items for 2025/2026 as published",
      }),
    ],
    lastReviewed: INSIGHTS_REVIEW_DATE,
    temporalStatus: "Historical agenda ordinance reporting",
    currentStatusNote:
      "Agenda items may have been completed, deferred or superseded. Verify later SPA/MF publications before treating any agenda item as current status.",
    requiredCorrection: "Exact DOU agenda ordinance",
    finalDisposition: "PUBLISH_HISTORICAL_WITH_UPDATE",
  },

  // Editorial commentary (public; no current-law dependency)
  "why-licensing-fails-post-approval": {
    slug: "why-licensing-fails-post-approval",
    publicationStatus: "EDITORIAL_COMMENTARY",
    factualCategory: "editorial_commentary",
    currentLawDependency: false,
    primarySources: [],
    lastReviewed: INSIGHTS_REVIEW_DATE,
    temporalStatus: "Structural operations commentary",
    requiredCorrection: "Editorial basis section",
    finalDisposition: "EDITORIAL_COMMENTARY",
  },
  "banking-for-high-risk-operations": {
    slug: "banking-for-high-risk-operations",
    publicationStatus: "EDITORIAL_COMMENTARY",
    factualCategory: "editorial_commentary",
    currentLawDependency: false,
    primarySources: [],
    lastReviewed: INSIGHTS_REVIEW_DATE,
    temporalStatus: "Structural banking commentary",
    requiredCorrection: "Editorial basis section",
    finalDisposition: "EDITORIAL_COMMENTARY",
  },
  "compliance-as-a-service-vs-internal-teams": {
    slug: "compliance-as-a-service-vs-internal-teams",
    publicationStatus: "EDITORIAL_COMMENTARY",
    factualCategory: "editorial_commentary",
    currentLawDependency: false,
    primarySources: [],
    lastReviewed: INSIGHTS_REVIEW_DATE,
    temporalStatus: "Operational model commentary",
    requiredCorrection: "Editorial basis section",
    finalDisposition: "EDITORIAL_COMMENTARY",
  },
  "regulation-and-technology-legal-follows-igaming-evolution": {
    slug: "regulation-and-technology-legal-follows-igaming-evolution",
    publicationStatus: "EDITORIAL_COMMENTARY",
    factualCategory: "editorial_commentary",
    currentLawDependency: false,
    primarySources: [],
    lastReviewed: INSIGHTS_REVIEW_DATE,
    temporalStatus: "Sector commentary",
    requiredCorrection: "Editorial basis section",
    finalDisposition: "EDITORIAL_COMMENTARY",
  },
  "trump-tax-reform-betting-operators-lessons-for-brazil": {
    slug: "trump-tax-reform-betting-operators-lessons-for-brazil",
    publicationStatus: "EDITORIAL_COMMENTARY",
    factualCategory: "editorial_commentary",
    currentLawDependency: false,
    primarySources: [],
    lastReviewed: INSIGHTS_REVIEW_DATE,
    temporalStatus: "Comparative commentary; not Brazilian primary law",
    requiredCorrection: "Editorial basis; no BR statute claims as current law",
    finalDisposition: "EDITORIAL_COMMENTARY",
  },

  // HOLD , prior unresolved + NONE_REGISTERED regulatory without exact primary source this pass
  "stf-suspends-blocking-of-bolsa-familia-bpc-betting-accounts": {
    slug: "stf-suspends-blocking-of-bolsa-familia-bpc-betting-accounts",
    publicationStatus: "HOLD_NOT_PUBLIC",
    factualCategory: "high_risk_unresolved",
    currentLawDependency: true,
    primarySources: [],
    lastReviewed: INSIGHTS_REVIEW_DATE,
    temporalStatus: "Hearing/outcome unverified",
    requiredCorrection: "Verify post-hearing STF outcome + exact decision URL",
    finalDisposition: "HOLD_NOT_PUBLIC",
  },
  "intellectual-property-igaming-trademark-registration-brazil": {
    slug: "intellectual-property-igaming-trademark-registration-brazil",
    publicationStatus: "HOLD_NOT_PUBLIC",
    factualCategory: "high_risk_unresolved",
    currentLawDependency: true,
    primarySources: [],
    lastReviewed: INSIGHTS_REVIEW_DATE,
    temporalStatus: "Absolute INPI language unresolved",
    requiredCorrection: "Source or remove absolute rejection claims",
    finalDisposition: "HOLD_NOT_PUBLIC",
  },
  "why-your-international-licence-may-not-protect-you-in-brazil": {
    slug: "why-your-international-licence-may-not-protect-you-in-brazil",
    publicationStatus: "HOLD_NOT_PUBLIC",
    factualCategory: "high_risk_unresolved",
    currentLawDependency: true,
    primarySources: [],
    lastReviewed: INSIGHTS_REVIEW_DATE,
    temporalStatus: "Absolute cross-border claims unresolved",
    requiredCorrection: "Jurisdiction-scoped primary sources",
    finalDisposition: "HOLD_NOT_PUBLIC",
  },
  "risk-management-software-igaming-regulatory-compliance": {
    slug: "risk-management-software-igaming-regulatory-compliance",
    publicationStatus: "HOLD_NOT_PUBLIC",
    factualCategory: "high_risk_unresolved",
    currentLawDependency: true,
    primarySources: [],
    lastReviewed: INSIGHTS_REVIEW_DATE,
    temporalStatus: "Absolute regulatory-requirement claims unresolved",
    requiredCorrection: "Map requirements to instruments",
    finalDisposition: "HOLD_NOT_PUBLIC",
  },
  "customised-studies-international-expansion-brazil": {
    slug: "customised-studies-international-expansion-brazil",
    publicationStatus: "HOLD_NOT_PUBLIC",
    factualCategory: "high_risk_unresolved",
    currentLawDependency: false,
    primarySources: [],
    lastReviewed: INSIGHTS_REVIEW_DATE,
    temporalStatus: "Commercial promotion without evidentiary boundary",
    requiredCorrection: "Rewrite or keep hold",
    finalDisposition: "HOLD_NOT_PUBLIC",
  },
  "senate-commission-approves-casino-bingo-gaming-bill-brazil": {
    slug: "senate-commission-approves-casino-bingo-gaming-bill-brazil",
    publicationStatus: "HOLD_NOT_PUBLIC",
    factualCategory: "high_risk_unresolved",
    currentLawDependency: true,
    primarySources: [],
    lastReviewed: INSIGHTS_REVIEW_DATE,
    temporalStatus: "Bill progress unverified",
    requiredCorrection: "Verify current legislative status with exact source",
    finalDisposition: "HOLD_NOT_PUBLIC",
  },
  "new-spa-mf-normative-instruction-fixed-odds-betting": {
    slug: "new-spa-mf-normative-instruction-fixed-odds-betting",
    publicationStatus: "HOLD_NOT_PUBLIC",
    factualCategory: "historical_legislative",
    currentLawDependency: true,
    primarySources: [],
    lastReviewed: INSIGHTS_REVIEW_DATE,
    temporalStatus: "Exact IN/Portaria number not bound to DOU URL this pass",
    requiredCorrection: "Add exact DOU instrument URL and re-verify claims",
    finalDisposition: "HOLD_NOT_PUBLIC , NONE_REGISTERED regulatory",
  },
  "centralised-self-exclusion-platform-key-changes-operators-bettors": {
    slug: "centralised-self-exclusion-platform-key-changes-operators-bettors",
    publicationStatus: "HOLD_NOT_PUBLIC",
    factualCategory: "historical_legislative",
    currentLawDependency: true,
    primarySources: [],
    lastReviewed: INSIGHTS_REVIEW_DATE,
    temporalStatus: "Exact ordinance/IN for self-exclusion not bound this pass",
    requiredCorrection: "Add exact DOU instrument URL",
    finalDisposition: "HOLD_NOT_PUBLIC , NONE_REGISTERED regulatory",
  },
  "annual-recertification-betting-platforms-spa-mf-new-guidelines": {
    slug: "annual-recertification-betting-platforms-spa-mf-new-guidelines",
    publicationStatus: "HOLD_NOT_PUBLIC",
    factualCategory: "historical_legislative",
    currentLawDependency: true,
    primarySources: [],
    lastReviewed: INSIGHTS_REVIEW_DATE,
    temporalStatus: "Exact guidance instrument not bound this pass",
    requiredCorrection: "Add exact DOU/SPA instrument URL",
    finalDisposition: "HOLD_NOT_PUBLIC , NONE_REGISTERED regulatory",
  },
  "rio-de-janeiro-regulates-vlts-lottery-equipment-decree": {
    slug: "rio-de-janeiro-regulates-vlts-lottery-equipment-decree",
    publicationStatus: "HOLD_NOT_PUBLIC",
    factualCategory: "historical_legislative",
    currentLawDependency: true,
    primarySources: [],
    lastReviewed: INSIGHTS_REVIEW_DATE,
    temporalStatus: "Exact state decree URL not bound this pass",
    requiredCorrection: "Add exact DOE/RJ decree URL",
    finalDisposition: "HOLD_NOT_PUBLIC , NONE_REGISTERED regulatory",
  },
  "bet-br-domain-extension-to-states-brazil": {
    slug: "bet-br-domain-extension-to-states-brazil",
    publicationStatus: "HOLD_NOT_PUBLIC",
    factualCategory: "historical_legislative",
    currentLawDependency: true,
    primarySources: [],
    lastReviewed: INSIGHTS_REVIEW_DATE,
    temporalStatus: "Proposal status without exact SPA instrument URL",
    requiredCorrection: "Add exact proposal/consultation/DOU source",
    finalDisposition: "HOLD_NOT_PUBLIC , NONE_REGISTERED regulatory",
  },
  "national-betting-system-sinapo-brazil": {
    slug: "national-betting-system-sinapo-brazil",
    publicationStatus: "HOLD_NOT_PUBLIC",
    factualCategory: "historical_legislative",
    currentLawDependency: true,
    primarySources: [],
    lastReviewed: INSIGHTS_REVIEW_DATE,
    temporalStatus: "Initiative reporting without exact primary instrument",
    requiredCorrection: "Add exact SPA/federal instrument URL",
    finalDisposition: "HOLD_NOT_PUBLIC , NONE_REGISTERED regulatory",
  },
  "iof-update-financial-market-brazil-2025": {
    slug: "iof-update-financial-market-brazil-2025",
    publicationStatus: "HOLD_NOT_PUBLIC",
    factualCategory: "historical_legislative",
    currentLawDependency: true,
    primarySources: [],
    lastReviewed: INSIGHTS_REVIEW_DATE,
    temporalStatus: "Exact Decreto/IN for IOF update not bound this pass",
    requiredCorrection: "Add exact Planalto/DOU instrument",
    finalDisposition: "HOLD_NOT_PUBLIC , NONE_REGISTERED regulatory",
  },
  "spa-ordinance-banks-refuse-illegal-betting-operators": {
    slug: "spa-ordinance-banks-refuse-illegal-betting-operators",
    publicationStatus: "HOLD_NOT_PUBLIC",
    factualCategory: "historical_legislative",
    currentLawDependency: true,
    primarySources: [],
    lastReviewed: INSIGHTS_REVIEW_DATE,
    temporalStatus: "Exact Portaria number/URL not bound this pass",
    requiredCorrection: "Add exact DOU Portaria URL",
    finalDisposition: "HOLD_NOT_PUBLIC , NONE_REGISTERED regulatory",
  },
  "youtube-tightens-rules-illegal-betting-sites-impact-influencers": {
    slug: "youtube-tightens-rules-illegal-betting-sites-impact-influencers",
    publicationStatus: "HOLD_NOT_PUBLIC",
    factualCategory: "market_industry",
    currentLawDependency: false,
    primarySources: [],
    lastReviewed: INSIGHTS_REVIEW_DATE,
    temporalStatus: "Platform policy without exact YouTube policy URL",
    requiredCorrection: "Add exact YouTube policy URL or keep hold",
    finalDisposition: "HOLD_NOT_PUBLIC , NONE_REGISTERED",
  },
  "spa-mf-position-brazilian-partner-20-percent-share-capital": {
    slug: "spa-mf-position-brazilian-partner-20-percent-share-capital",
    publicationStatus: "HOLD_NOT_PUBLIC",
    factualCategory: "historical_legislative",
    currentLawDependency: true,
    primarySources: [],
    lastReviewed: INSIGHTS_REVIEW_DATE,
    temporalStatus: "FAQ clarification without exact SPA FAQ URL this pass",
    requiredCorrection: "Add exact SPA FAQ/DOU source",
    finalDisposition: "HOLD_NOT_PUBLIC , NONE_REGISTERED regulatory",
  },
  "new-rules-sports-betting-online-games-brazil-portaria-827-2024": {
    slug: "new-rules-sports-betting-online-games-brazil-portaria-827-2024",
    publicationStatus: "HOLD_NOT_PUBLIC",
    factualCategory: "historical_legislative",
    currentLawDependency: true,
    primarySources: [],
    lastReviewed: INSIGHTS_REVIEW_DATE,
    temporalStatus: "Portaria 827/2024 exact DOU URL not confirmed this pass",
    requiredCorrection: "Bind exact DOU URL for Portaria SPA/MF 827/2024 and re-verify claims",
    finalDisposition: "HOLD_NOT_PUBLIC , NONE_REGISTERED regulatory",
  },
};

function enforcePublicationGate(
  entry: InsightsPublicationEntry
): InsightsPublicationEntry {
  const exact = exactPrimarySources(entry.primarySources);
  const next = { ...entry, primarySources: exact };

  if (next.publicationStatus === "EDITORIAL_COMMENTARY") {
    if (next.currentLawDependency) {
      return {
        ...next,
        publicationStatus: "HOLD_NOT_PUBLIC",
        finalDisposition: "HOLD_NOT_PUBLIC , editorial flagged with currentLawDependency",
        requiredCorrection: "Remove current-law dependency or add exact sources",
      };
    }
    return next;
  }

  if (next.publicationStatus === "HOLD_NOT_PUBLIC") return next;

  const needsExact =
    next.currentLawDependency ||
    next.publicationStatus === "PUBLISH_HISTORICAL_WITH_UPDATE" ||
    next.factualCategory === "historical_legislative" ||
    next.factualCategory === "current_law";

  if (needsExact && exact.length === 0) {
    return {
      ...next,
      publicationStatus: "HOLD_NOT_PUBLIC",
      primarySources: [],
      finalDisposition: "HOLD_NOT_PUBLIC , source gate (current-law/historical without exact primary sources)",
      requiredCorrection:
        next.requiredCorrection ||
        "Add exact primary sources or reclassify as EDITORIAL_COMMENTARY if non-legal",
    };
  }

  // Historical regulatory notice integrity: if historical and currentLaw, require currentStatusNote
  if (
    next.publicationStatus === "PUBLISH_HISTORICAL_WITH_UPDATE" &&
    next.currentLawDependency &&
    !next.currentStatusNote
  ) {
    next.currentStatusNote =
      "This article is historical analysis. Current requirements may have changed; consult the cited primary sources and obtain advice for the specific operation.";
  }

  return next;
}

function buildRegistry(): Record<string, InsightsPublicationEntry> {
  const out: Record<string, InsightsPublicationEntry> = {};
  for (const post of posts) {
    const raw =
      RAW_PUBLICATION[post.slug] ||
      ({
        slug: post.slug,
        publicationStatus: "HOLD_NOT_PUBLIC",
        factualCategory: "high_risk_unresolved",
        currentLawDependency: true,
        primarySources: [],
        lastReviewed: INSIGHTS_REVIEW_DATE,
        temporalStatus: "Unregistered slug , fail closed",
        requiredCorrection: "Register publication decision",
        finalDisposition: "HOLD_NOT_PUBLIC , unregistered",
      } as InsightsPublicationEntry);
    out[post.slug] = enforcePublicationGate(raw);
  }
  return out;
}

export const INSIGHTS_PUBLICATION: Record<string, InsightsPublicationEntry> =
  buildRegistry();

export function getPublicationEntry(slug: string): InsightsPublicationEntry | undefined {
  return INSIGHTS_PUBLICATION[slug];
}

export function isPublicInsight(slug: string): boolean {
  const e = INSIGHTS_PUBLICATION[slug];
  if (!e) return false;
  return e.publicationStatus !== "HOLD_NOT_PUBLIC";
}

export function isEditorialCommentary(slug: string): boolean {
  return INSIGHTS_PUBLICATION[slug]?.publicationStatus === "EDITORIAL_COMMENTARY";
}

export function isHistoricalInsight(slug: string): boolean {
  return INSIGHTS_PUBLICATION[slug]?.publicationStatus === "PUBLISH_HISTORICAL_WITH_UPDATE";
}

export function enrichPostForPublic(post: Post): Post & {
  lastReviewed: string;
  publicationStatus: PublicationStatus;
  primarySources: PrimarySourceRef[];
  currentStatusNote?: string;
  title: string;
} {
  const e = INSIGHTS_PUBLICATION[post.slug];
  return {
    ...post,
    title: normalizeEditorialTitle(post.title),
    lastReviewed: e?.lastReviewed || INSIGHTS_REVIEW_DATE,
    publicationStatus: e?.publicationStatus || "HOLD_NOT_PUBLIC",
    primarySources: e?.primarySources || [],
    currentStatusNote: e?.currentStatusNote,
  };
}

export function getPublicPosts(): Post[] {
  return [...posts]
    .filter((p) => isPublicInsight(p.slug))
    .map((p) => ({ ...p, title: normalizeEditorialTitle(p.title) }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function publicationCounts() {
  const values = Object.values(INSIGHTS_PUBLICATION);
  const by = (s: PublicationStatus) => values.filter((v) => v.publicationStatus === s).length;
  return {
    source: posts.length,
    registered: values.length,
    PUBLISH_CURRENT: by("PUBLISH_CURRENT"),
    PUBLISH_HISTORICAL_WITH_UPDATE: by("PUBLISH_HISTORICAL_WITH_UPDATE"),
    EDITORIAL_COMMENTARY: by("EDITORIAL_COMMENTARY"),
    HOLD_NOT_PUBLIC: by("HOLD_NOT_PUBLIC"),
    public:
      by("PUBLISH_CURRENT") +
      by("PUBLISH_HISTORICAL_WITH_UPDATE") +
      by("EDITORIAL_COMMENTARY"),
  };
}
