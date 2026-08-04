/**
 * Insights publication governance (launch safety).
 * Review date baseline: 2026-08-04.
 */
import type { Post } from "./posts";
import { posts } from "./posts";

export type PublicationStatus =
  | "PUBLISH_CURRENT"
  | "PUBLISH_HISTORICAL_WITH_UPDATE"
  | "HOLD_NOT_PUBLIC";

export type FactualCategory =
  | "current_law"
  | "historical_legislative"
  | "institutional_commentary"
  | "structural_operations"
  | "market_industry"
  | "high_risk_unresolved";

export interface PrimarySourceRef {
  label: string;
  href: string;
  date?: string;
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
}

/** Shared review stamp for this launch-safety pass. */
export const INSIGHTS_REVIEW_DATE = "2026-08-04";

/**
 * Publication decisions for all 33 source articles.
 * HOLD_NOT_PUBLIC preserves source in `posts` but removes from public index/sitemap/static params.
 */
export const INSIGHTS_PUBLICATION: Record<string, InsightsPublicationEntry> = {
  "mica-what-operators-need-to-do": {
    slug: "mica-what-operators-need-to-do",
    publicationStatus: "PUBLISH_CURRENT",
    factualCategory: "current_law",
    currentLawDependency: true,
    primarySources: [
      {
        label: "Regulation (EU) 2023/1114 (MiCA), EUR-Lex",
        href: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32023R1114",
        date: "2023-06-09",
      },
      {
        label: "ESMA statement on the end of transitional periods under MiCA",
        href: "https://www.esma.europa.eu/sites/default/files/2026-04/ESMA75-113276571-1679_Statement_on_the_end_of_transitional_periods_under_MiCA.pdf",
        date: "2026-04-17",
      },
      {
        label: "ESMA list of Member State grandfathering periods (Art. 143)",
        href: "https://www.esma.europa.eu/sites/default/files/2024-12/List_of_MiCA_grandfathering_periods_art._143_3.pdf",
        date: "2024-12",
      },
    ],
    lastReviewed: INSIGHTS_REVIEW_DATE,
    temporalStatus: "Post-1 July 2026 outer transitional limit; Member State periods varied",
    requiredCorrection: "Past-tense transition; optional Art. 143; remove unsupported licence counts",
    finalDisposition: "PUBLISH_CURRENT after rewrite",
  },
  "senate-approves-plp-128-2025-tightens-fiscal-policy-bets-fintechs": {
    slug: "senate-approves-plp-128-2025-tightens-fiscal-policy-bets-fintechs",
    publicationStatus: "PUBLISH_CURRENT",
    factualCategory: "current_law",
    currentLawDependency: true,
    primarySources: [
      {
        label: "Lei Complementar nº 224/2025 (Planalto)",
        href: "https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp224.htm",
        date: "2025-12-26",
      },
    ],
    lastReviewed: INSIGHTS_REVIEW_DATE,
    temporalStatus: "PLP 128/2025 enacted as LC 224/2025; GGR schedule in force with anterioridade",
    requiredCorrection: "Update from awaiting sanction to LC 224; verify rates/effective dates",
    finalDisposition: "PUBLISH_CURRENT after rewrite",
  },
  "betting-taxation-risks-senate-legal-certainty-regulated-market": {
    slug: "betting-taxation-risks-senate-legal-certainty-regulated-market",
    publicationStatus: "PUBLISH_HISTORICAL_WITH_UPDATE",
    factualCategory: "historical_legislative",
    currentLawDependency: false,
    primarySources: [
      {
        label: "Lei Complementar nº 224/2025 (Planalto)",
        href: "https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp224.htm",
        date: "2025-12-26",
      },
    ],
    lastReviewed: INSIGHTS_REVIEW_DATE,
    temporalStatus: "Pre-vote commentary dated 2025-12-17; law later enacted",
    requiredCorrection: "Frame as historical commentary; point to LC 224 article",
    finalDisposition: "PUBLISH_HISTORICAL_WITH_UPDATE",
  },
  "coaf-crisis-aml-obligations-online-gaming-operators": {
    slug: "coaf-crisis-aml-obligations-online-gaming-operators",
    publicationStatus: "PUBLISH_CURRENT",
    factualCategory: "institutional_commentary",
    currentLawDependency: true,
    primarySources: [
      {
        label: "Lei nº 9.613/1998 (Planalto)",
        href: "https://www.planalto.gov.br/ccivil_03/leis/l9613.htm",
        date: "1998-03-03",
      },
      {
        label: "COAF institutional page (Ministry of Finance)",
        href: "https://www.gov.br/fazenda/pt-br/orgaos/coaf",
        date: "2026-08-04",
      },
    ],
    lastReviewed: INSIGHTS_REVIEW_DATE,
    temporalStatus: "Institutional AML framing; staffing claims removed or sourced",
    requiredCorrection: "Correct COAF name; fix ordinance citation; qualify sanctions",
    finalDisposition: "PUBLISH_CURRENT after rewrite",
  },
  "brazil-b2b-registration-requirement-betting-igaming": {
    slug: "brazil-b2b-registration-requirement-betting-igaming",
    publicationStatus: "PUBLISH_CURRENT",
    factualCategory: "current_law",
    currentLawDependency: true,
    primarySources: [
      {
        label: "SPA/MF, Secretaria de Prêmios e Apostas (gov.br)",
        href: "https://www.gov.br/fazenda/pt-br/composicao/orgaos/secretaria-de-premios-e-apostas",
        date: "2026-08-04",
      },
      {
        label: "Brasil Participativo, SPA public consultations",
        href: "https://brasilparticipativo.presidencia.gov.br/",
        date: "2026-03-23",
      },
    ],
    lastReviewed: INSIGHTS_REVIEW_DATE,
    temporalStatus: "Draft ordinance consultation closed Mar 2026; final rule not confirmed published as of review",
    requiredCorrection: "Distinguish announcement vs consultation vs rule in force",
    finalDisposition: "PUBLISH_CURRENT after rewrite",
  },
  "curacao-reform-what-changes": {
    slug: "curacao-reform-what-changes",
    publicationStatus: "PUBLISH_CURRENT",
    factualCategory: "current_law",
    currentLawDependency: true,
    primarySources: [
      {
        label: "Curaçao Gaming Authority / Gaming Control Board portal",
        href: "https://www.gamingcontrolcuracao.org/",
        date: "2026-08-04",
      },
    ],
    lastReviewed: INSIGHTS_REVIEW_DATE,
    temporalStatus: "Post-transition LOK/CGA direct licence regime; orange-seal transition ended 2025-10-15 per CGA communications reported in industry sources",
    requiredCorrection: "Past-tense reform; remove obsolete future transition language",
    finalDisposition: "PUBLISH_CURRENT after rewrite",
  },
  "why-licensing-fails-post-approval": {
    slug: "why-licensing-fails-post-approval",
    publicationStatus: "PUBLISH_CURRENT",
    factualCategory: "structural_operations",
    currentLawDependency: false,
    primarySources: [],
    lastReviewed: INSIGHTS_REVIEW_DATE,
    temporalStatus: "Structural operations commentary; not statute-dated",
    requiredCorrection: "Qualify absolute language; no hard legal deadlines",
    finalDisposition: "PUBLISH_CURRENT with soft qualifications",
  },
  "banking-for-high-risk-operations": {
    slug: "banking-for-high-risk-operations",
    publicationStatus: "PUBLISH_CURRENT",
    factualCategory: "structural_operations",
    currentLawDependency: false,
    primarySources: [],
    lastReviewed: INSIGHTS_REVIEW_DATE,
    temporalStatus: "Structural banking commentary",
    requiredCorrection: "Keep institutional; avoid bank-outcome guarantees",
    finalDisposition: "PUBLISH_CURRENT",
  },
  "compliance-as-a-service-vs-internal-teams": {
    slug: "compliance-as-a-service-vs-internal-teams",
    publicationStatus: "PUBLISH_CURRENT",
    factualCategory: "structural_operations",
    currentLawDependency: false,
    primarySources: [],
    lastReviewed: INSIGHTS_REVIEW_DATE,
    temporalStatus: "Operational model commentary",
    requiredCorrection: "None material",
    finalDisposition: "PUBLISH_CURRENT",
  },
  "quinel-credentialed-certifying-entity-brazil-ministry-finance": {
    slug: "quinel-credentialed-certifying-entity-brazil-ministry-finance",
    publicationStatus: "PUBLISH_HISTORICAL_WITH_UPDATE",
    factualCategory: "market_industry",
    currentLawDependency: false,
    primarySources: [],
    lastReviewed: INSIGHTS_REVIEW_DATE,
    temporalStatus: "2024 credentialing announcement; historical",
    requiredCorrection: "Historical label; relationship PUBLIC_CONFIRMED with caution",
    finalDisposition: "PUBLISH_HISTORICAL_WITH_UPDATE",
  },
  "new-spa-mf-normative-instruction-fixed-odds-betting": {
    slug: "new-spa-mf-normative-instruction-fixed-odds-betting",
    publicationStatus: "PUBLISH_HISTORICAL_WITH_UPDATE",
    factualCategory: "historical_legislative",
    currentLawDependency: true,
    primarySources: [],
    lastReviewed: INSIGHTS_REVIEW_DATE,
    temporalStatus: "Contemporaneous SPA/MF reporting Dec 2025",
    requiredCorrection: "Historical notice; verify ordinance numbers in body",
    finalDisposition: "PUBLISH_HISTORICAL_WITH_UPDATE",
  },
  "centralised-self-exclusion-platform-key-changes-operators-bettors": {
    slug: "centralised-self-exclusion-platform-key-changes-operators-bettors",
    publicationStatus: "PUBLISH_HISTORICAL_WITH_UPDATE",
    factualCategory: "historical_legislative",
    currentLawDependency: true,
    primarySources: [],
    lastReviewed: INSIGHTS_REVIEW_DATE,
    temporalStatus: "Dec 2025 operational start reporting",
    requiredCorrection: "Historical notice",
    finalDisposition: "PUBLISH_HISTORICAL_WITH_UPDATE",
  },
  "stf-suspends-municipal-lottery-operations-nationwide": {
    slug: "stf-suspends-municipal-lottery-operations-nationwide",
    publicationStatus: "PUBLISH_HISTORICAL_WITH_UPDATE",
    factualCategory: "historical_legislative",
    currentLawDependency: true,
    primarySources: [],
    lastReviewed: INSIGHTS_REVIEW_DATE,
    temporalStatus: "Dec 2025 STF interim measure reporting",
    requiredCorrection: "Historical notice; outcome may have evolved",
    finalDisposition: "PUBLISH_HISTORICAL_WITH_UPDATE",
  },
  "annual-recertification-betting-platforms-spa-mf-new-guidelines": {
    slug: "annual-recertification-betting-platforms-spa-mf-new-guidelines",
    publicationStatus: "PUBLISH_HISTORICAL_WITH_UPDATE",
    factualCategory: "historical_legislative",
    currentLawDependency: true,
    primarySources: [],
    lastReviewed: INSIGHTS_REVIEW_DATE,
    temporalStatus: "Sep 2025 SPA guidance reporting",
    requiredCorrection: "Historical notice",
    finalDisposition: "PUBLISH_HISTORICAL_WITH_UPDATE",
  },
  "rio-de-janeiro-regulates-vlts-lottery-equipment-decree": {
    slug: "rio-de-janeiro-regulates-vlts-lottery-equipment-decree",
    publicationStatus: "PUBLISH_HISTORICAL_WITH_UPDATE",
    factualCategory: "historical_legislative",
    currentLawDependency: true,
    primarySources: [],
    lastReviewed: INSIGHTS_REVIEW_DATE,
    temporalStatus: "Aug 2025 state decree reporting",
    requiredCorrection: "Historical notice",
    finalDisposition: "PUBLISH_HISTORICAL_WITH_UPDATE",
  },
  "games-not-classified-as-fixed-odds-betting-brazil": {
    slug: "games-not-classified-as-fixed-odds-betting-brazil",
    publicationStatus: "PUBLISH_HISTORICAL_WITH_UPDATE",
    factualCategory: "historical_legislative",
    currentLawDependency: true,
    primarySources: [
      {
        label: "SPA/MF, Secretaria de Prêmios e Apostas (gov.br)",
        href: "https://www.gov.br/fazenda/pt-br/composicao/orgaos/secretaria-de-premios-e-apostas",
        date: "2026-08-04",
      },
    ],
    lastReviewed: INSIGHTS_REVIEW_DATE,
    temporalStatus: "Ordinance SPA/MF 1.207/2024 analysis; absolute licence-exemption language removed",
    requiredCorrection: "Historical notice; qualify classification and remove tolerated-game safe-harbour implication",
    finalDisposition: "PUBLISH_HISTORICAL_WITH_UPDATE after absolute-claim soft fix",
  },
  "bet-br-domain-extension-to-states-brazil": {
    slug: "bet-br-domain-extension-to-states-brazil",
    publicationStatus: "PUBLISH_HISTORICAL_WITH_UPDATE",
    factualCategory: "historical_legislative",
    currentLawDependency: true,
    primarySources: [],
    lastReviewed: INSIGHTS_REVIEW_DATE,
    temporalStatus: "Aug 2025 proposed extension reporting",
    requiredCorrection: "Historical; proposed vs in-force unclear",
    finalDisposition: "PUBLISH_HISTORICAL_WITH_UPDATE",
  },
  "national-betting-system-sinapo-brazil": {
    slug: "national-betting-system-sinapo-brazil",
    publicationStatus: "PUBLISH_HISTORICAL_WITH_UPDATE",
    factualCategory: "historical_legislative",
    currentLawDependency: true,
    primarySources: [],
    lastReviewed: INSIGHTS_REVIEW_DATE,
    temporalStatus: "Aug 2025 SINAPO initiative reporting",
    requiredCorrection: "Historical; cooperative initiative status may have changed",
    finalDisposition: "PUBLISH_HISTORICAL_WITH_UPDATE",
  },
  "iof-update-financial-market-brazil-2025": {
    slug: "iof-update-financial-market-brazil-2025",
    publicationStatus: "PUBLISH_HISTORICAL_WITH_UPDATE",
    factualCategory: "historical_legislative",
    currentLawDependency: true,
    primarySources: [],
    lastReviewed: INSIGHTS_REVIEW_DATE,
    temporalStatus: "Jul 2025 IOF clarifications",
    requiredCorrection: "Historical notice",
    finalDisposition: "PUBLISH_HISTORICAL_WITH_UPDATE",
  },
  "trump-tax-reform-betting-operators-lessons-for-brazil": {
    slug: "trump-tax-reform-betting-operators-lessons-for-brazil",
    publicationStatus: "PUBLISH_HISTORICAL_WITH_UPDATE",
    factualCategory: "institutional_commentary",
    currentLawDependency: false,
    primarySources: [],
    lastReviewed: INSIGHTS_REVIEW_DATE,
    temporalStatus: "Jul 2025 US comparative commentary",
    requiredCorrection: "Historical comparative analysis",
    finalDisposition: "PUBLISH_HISTORICAL_WITH_UPDATE",
  },
  "regulatory-agenda-2025-2026-secretariat-prizes-betting": {
    slug: "regulatory-agenda-2025-2026-secretariat-prizes-betting",
    publicationStatus: "PUBLISH_HISTORICAL_WITH_UPDATE",
    factualCategory: "historical_legislative",
    currentLawDependency: true,
    primarySources: [],
    lastReviewed: INSIGHTS_REVIEW_DATE,
    temporalStatus: "Apr 2025 SPA agenda ordinance reporting",
    requiredCorrection: "Historical; agenda items may have completed or slipped",
    finalDisposition: "PUBLISH_HISTORICAL_WITH_UPDATE",
  },
  "spa-ordinance-banks-refuse-illegal-betting-operators": {
    slug: "spa-ordinance-banks-refuse-illegal-betting-operators",
    publicationStatus: "PUBLISH_HISTORICAL_WITH_UPDATE",
    factualCategory: "historical_legislative",
    currentLawDependency: true,
    primarySources: [],
    lastReviewed: INSIGHTS_REVIEW_DATE,
    temporalStatus: "Feb 2025 SPA ordinance reporting",
    requiredCorrection: "Historical notice",
    finalDisposition: "PUBLISH_HISTORICAL_WITH_UPDATE",
  },
  "youtube-tightens-rules-illegal-betting-sites-impact-influencers": {
    slug: "youtube-tightens-rules-illegal-betting-sites-impact-influencers",
    publicationStatus: "PUBLISH_HISTORICAL_WITH_UPDATE",
    factualCategory: "market_industry",
    currentLawDependency: false,
    primarySources: [],
    lastReviewed: INSIGHTS_REVIEW_DATE,
    temporalStatus: "Mar 2025 platform policy reporting",
    requiredCorrection: "Historical notice",
    finalDisposition: "PUBLISH_HISTORICAL_WITH_UPDATE",
  },
  "spa-mf-position-brazilian-partner-20-percent-share-capital": {
    slug: "spa-mf-position-brazilian-partner-20-percent-share-capital",
    publicationStatus: "PUBLISH_HISTORICAL_WITH_UPDATE",
    factualCategory: "historical_legislative",
    currentLawDependency: true,
    primarySources: [],
    lastReviewed: INSIGHTS_REVIEW_DATE,
    temporalStatus: "Jun 2024 SPA FAQ clarification",
    requiredCorrection: "Historical; confirm still reflected in current SPA materials",
    finalDisposition: "PUBLISH_HISTORICAL_WITH_UPDATE",
  },
  "new-rules-sports-betting-online-games-brazil-portaria-827-2024": {
    slug: "new-rules-sports-betting-online-games-brazil-portaria-827-2024",
    publicationStatus: "PUBLISH_HISTORICAL_WITH_UPDATE",
    factualCategory: "historical_legislative",
    currentLawDependency: true,
    primarySources: [],
    lastReviewed: INSIGHTS_REVIEW_DATE,
    temporalStatus: "May 2024 Portaria 827 reporting",
    requiredCorrection: "Historical notice",
    finalDisposition: "PUBLISH_HISTORICAL_WITH_UPDATE",
  },
  "new-regulation-betting-online-game-systems-portaria-722-2024": {
    slug: "new-regulation-betting-online-game-systems-portaria-722-2024",
    publicationStatus: "PUBLISH_HISTORICAL_WITH_UPDATE",
    factualCategory: "historical_legislative",
    currentLawDependency: true,
    primarySources: [],
    lastReviewed: INSIGHTS_REVIEW_DATE,
    temporalStatus: "May 2024 Portaria 722 reporting",
    requiredCorrection: "Historical notice",
    finalDisposition: "PUBLISH_HISTORICAL_WITH_UPDATE",
  },
  "regulation-and-technology-legal-follows-igaming-evolution": {
    slug: "regulation-and-technology-legal-follows-igaming-evolution",
    publicationStatus: "PUBLISH_HISTORICAL_WITH_UPDATE",
    factualCategory: "institutional_commentary",
    currentLawDependency: false,
    primarySources: [],
    lastReviewed: INSIGHTS_REVIEW_DATE,
    temporalStatus: "Jul 2025 commentary",
    requiredCorrection: "Historical commentary label",
    finalDisposition: "PUBLISH_HISTORICAL_WITH_UPDATE",
  },
  // HOLD: unresolved temporal or absolute legal risk without verified primary-source rewrite this pass
  "stf-suspends-blocking-of-bolsa-familia-bpc-betting-accounts": {
    slug: "stf-suspends-blocking-of-bolsa-familia-bpc-betting-accounts",
    publicationStatus: "HOLD_NOT_PUBLIC",
    factualCategory: "high_risk_unresolved",
    currentLawDependency: true,
    primarySources: [],
    lastReviewed: INSIGHTS_REVIEW_DATE,
    temporalStatus: "References Feb 2026 hearing as upcoming; post-hearing status unverified this pass",
    requiredCorrection: "Verify post-hearing STF outcome before republication",
    finalDisposition: "HOLD_NOT_PUBLIC",
  },
  "intellectual-property-igaming-trademark-registration-brazil": {
    slug: "intellectual-property-igaming-trademark-registration-brazil",
    publicationStatus: "HOLD_NOT_PUBLIC",
    factualCategory: "high_risk_unresolved",
    currentLawDependency: true,
    primarySources: [],
    lastReviewed: INSIGHTS_REVIEW_DATE,
    temporalStatus: "Contains absolute INPI rejection language",
    requiredCorrection: "Remove or source 'systematically rejects' and similar absolutes",
    finalDisposition: "HOLD_NOT_PUBLIC",
  },
  "why-your-international-licence-may-not-protect-you-in-brazil": {
    slug: "why-your-international-licence-may-not-protect-you-in-brazil",
    publicationStatus: "HOLD_NOT_PUBLIC",
    factualCategory: "high_risk_unresolved",
    currentLawDependency: true,
    primarySources: [],
    lastReviewed: INSIGHTS_REVIEW_DATE,
    temporalStatus: "Absolute cross-border licensing claims without scoped primary sources",
    requiredCorrection: "Scope jurisdiction-by-jurisdiction with primary sources",
    finalDisposition: "HOLD_NOT_PUBLIC",
  },
  "risk-management-software-igaming-regulatory-compliance": {
    slug: "risk-management-software-igaming-regulatory-compliance",
    publicationStatus: "HOLD_NOT_PUBLIC",
    factualCategory: "high_risk_unresolved",
    currentLawDependency: true,
    primarySources: [],
    lastReviewed: INSIGHTS_REVIEW_DATE,
    temporalStatus: "Absolute 'inescapable regulatory requirement' without statute map",
    requiredCorrection: "Map each requirement to instrument and jurisdiction",
    finalDisposition: "HOLD_NOT_PUBLIC",
  },
  "customised-studies-international-expansion-brazil": {
    slug: "customised-studies-international-expansion-brazil",
    publicationStatus: "HOLD_NOT_PUBLIC",
    factualCategory: "high_risk_unresolved",
    currentLawDependency: false,
    primarySources: [],
    lastReviewed: INSIGHTS_REVIEW_DATE,
    temporalStatus: "Commercial service promotion without evidentiary boundary",
    requiredCorrection: "Rewrite as institutional non-promotional analysis or keep hold",
    finalDisposition: "HOLD_NOT_PUBLIC",
  },
  "senate-commission-approves-casino-bingo-gaming-bill-brazil": {
    slug: "senate-commission-approves-casino-bingo-gaming-bill-brazil",
    publicationStatus: "HOLD_NOT_PUBLIC",
    factualCategory: "high_risk_unresolved",
    currentLawDependency: true,
    primarySources: [],
    lastReviewed: INSIGHTS_REVIEW_DATE,
    temporalStatus: "2024 bill progress; current legislative status unverified this pass",
    requiredCorrection: "Verify PL 2234/22 current status before republication",
    finalDisposition: "HOLD_NOT_PUBLIC",
  },
};

export function getPublicationEntry(slug: string): InsightsPublicationEntry | undefined {
  return INSIGHTS_PUBLICATION[slug];
}

export function isPublicInsight(slug: string): boolean {
  const e = INSIGHTS_PUBLICATION[slug];
  if (!e) return false;
  return e.publicationStatus !== "HOLD_NOT_PUBLIC";
}

export function enrichPostForPublic(post: Post): Post & {
  lastReviewed: string;
  publicationStatus: PublicationStatus;
  primarySources: PrimarySourceRef[];
} {
  const e = INSIGHTS_PUBLICATION[post.slug];
  return {
    ...post,
    lastReviewed: e?.lastReviewed || INSIGHTS_REVIEW_DATE,
    publicationStatus: e?.publicationStatus || "HOLD_NOT_PUBLIC",
    primarySources: e?.primarySources || [],
  };
}

export function getPublicPosts(): Post[] {
  return [...posts]
    .filter((p) => isPublicInsight(p.slug))
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
    HOLD_NOT_PUBLIC: by("HOLD_NOT_PUBLIC"),
    public: by("PUBLISH_CURRENT") + by("PUBLISH_HISTORICAL_WITH_UPDATE"),
  };
}
