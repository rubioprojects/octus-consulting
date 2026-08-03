import Link from "next/link";
import { CTA_DISCUSS_LABEL, WHATSAPP_DISCUSS_URL } from "../../lib/cta";
import { CtaLink } from "../../components/system/CtaButton";
import DarkHeroAtmosphere from "../../components/system/DarkHeroAtmosphere";
import { pageSocialMeta } from "../../lib/pageMeta";

export const metadata = pageSocialMeta({
  title: "Brazil",
  description:
    "Regulatory structuring, compliance and corporate architecture for regulated operations entering or operating in Brazil.",
  path: "/brazil",
});

const brazilInsights = [
  {
    title: "New SPA/MF Normative Instruction on Fixed-Odds Betting: Post-Licensing Obligations",
    date: "17 Dec 2025",
    href: "/insights/new-spa-mf-normative-instruction-fixed-odds-betting",
  },
  {
    title: "Senate Approves PLP 128/2025: Fiscal Tightening, Higher Taxation on Bets, Fintechs and JCP",
    date: "19 Dec 2025",
    href: "/insights/senate-approves-plp-128-2025-tightens-fiscal-policy-bets-fintechs",
  },
  {
    title: "Centralised Self-Exclusion Platform: Key Changes for Operators and Bettors",
    date: "15 Dec 2025",
    href: "/insights/centralised-self-exclusion-platform-key-changes-operators-bettors",
  },
  {
    title: "Annual Recertification of Betting Platforms: What Changes Under SPA/MF New Guidelines",
    date: "26 Sep 2025",
    href: "/insights/annual-recertification-betting-platforms-spa-mf-new-guidelines",
  },
  {
    title: "STF Suspends Compulsory Blocking of Bolsa Família and BPC Beneficiaries' Betting Accounts",
    date: "19 Dec 2025",
    href: "/insights/stf-suspends-blocking-of-bolsa-familia-bpc-betting-accounts",
  },
];

const pathwayCards = [
  {
    title: "Operator authorisation",
    body: "SPA/MF licensing and pathway design for operators entering Brazil under Laws 13,756/2018 and 14,790/2023 and related ordinances.",
  },
  {
    title: "B2B and supplier framework",
    body: "Platform providers, laboratories and B2B suppliers prepare for recognition and registration pathways under the evolving SPA/MF agenda, sequenced with operator programmes.",
  },
  {
    title: "Technical and certification dependencies",
    body: "Technical certification and laboratory readiness coordinated with licensing timelines and annual recertification obligations where they apply.",
  },
  {
    title: "Corporate and local presence",
    body: "CNPJ registration, local corporate structure and alignment with international group architecture designed for regulatory and banking scrutiny.",
  },
];

const operatingDeps = [
  {
    title: "Regulatory",
    body: "Pathway design, SPA/MF coordination and Brazil-facing filings.",
    href: "/solutions/regulatory-structuring",
  },
  {
    title: "Corporate",
    body: "Local entities, holdings and group coherence.",
    href: "/solutions/corporate-structuring",
  },
  {
    title: "Compliance and AML",
    body: "LGPD, AML/KYC and operable compliance controls.",
    href: "/solutions/compliance-risk",
  },
  {
    title: "Banking and Payments",
    body: "Payment infrastructure and institutional onboarding readiness.",
    href: "/solutions/banking-payments-infrastructure",
  },
  {
    title: "Tax and Finance",
    body: "Corporate tax and finance coordination integrated with structuring.",
    href: "/solutions/corporate-structuring",
  },
];

export default function BrazilPage() {
  return (
    <main>
      <section className="octus-dark-hero surface-dark relative flex min-h-[70vh] flex-col justify-center overflow-hidden pt-28 pb-16 md:min-h-[80vh] md:pt-32 md:pb-24">
        <DarkHeroAtmosphere />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="label">Brazil</span>
          <h1 className="font-heading text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[3.5rem] sp-headline">
            Brazil&apos;s regulated market
            <br />
            <span className="text-white/40">requires a different architecture.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
            For international operators, Brazil-facing suppliers and groups building local presence
            under SPA/MF. Octus coordinates regulatory, corporate, compliance and banking
            workstreams inside Brazilian processes since 2019.
          </p>
          <div className="mt-12">
            <CtaLink href={WHATSAPP_DISCUSS_URL} variant="on-dark" target="_blank" rel="noopener noreferrer">
              {CTA_DISCUSS_LABEL}
            </CtaLink>
          </div>
        </div>
        <div className="octus-dark-hero__seam" aria-hidden="true" />
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-3 block">Who this page is for</p>
          <h2 className="heading-section mb-4 max-w-2xl">International clients entering or operating in Brazil.</h2>
          <p className="body-large max-w-2xl text-muted-foreground">
            Operators, suppliers and groups that need Brazil regulatory entry sequenced with local
            corporate presence, compliance, banking readiness and tax/finance coordination.
          </p>
        </div>
      </section>

      <section className="surface-elevated py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-3 block">Regulatory pathways</p>
          <h2 className="heading-section mb-10 max-w-2xl">How Brazil-facing programmes are structured.</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {pathwayCards.map((card) => (
              <article key={card.title} className="rounded-lg border border-transparent bg-background p-6 transition-all hover:border-border md:p-7">
                <h3 className="mb-3 font-heading text-lg font-semibold text-foreground">{card.title}</h3>
                <p className="font-sans text-sm leading-relaxed text-muted-foreground">{card.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-3xl font-sans text-sm leading-relaxed text-muted-foreground">
            Where supplier recognition or registration frameworks remain under regulatory
            development, Octus prepares programmes against anticipated requirements and the ongoing
            SPA/MF agenda. Mandatory final registration language is used only where a currently
            effective norm supports it.
          </p>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-3 block">Operating dependencies</p>
          <h2 className="heading-section mb-4 max-w-2xl">An integrated Brazil operating system.</h2>
          <p className="body-large mb-10 max-w-2xl text-muted-foreground">
            Brazil workstreams connect Regulatory, Corporate, Compliance, Banking and Payments, and
            Tax and Finance so filings, entities and payment rails stay coherent.
          </p>
          <div className="grid gap-0 border border-border md:grid-cols-5 md:divide-x md:divide-border">
            {operatingDeps.map((dep) => (
              <Link
                key={dep.title}
                href={dep.href}
                className="border-b border-border p-5 no-underline last:border-b-0 hover:bg-secondary/20 md:border-b-0"
              >
                <h3 className="mb-2 font-sans text-sm font-semibold text-primary">{dep.title}</h3>
                <p className="font-sans text-xs leading-relaxed text-muted-foreground">{dep.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="surface-elevated py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-3 block">International and Brazilian structures</p>
          <h2 className="heading-section mb-4 max-w-2xl">
            How group architecture connects to Brazil.
          </h2>
          <p className="body-large max-w-2xl text-muted-foreground">
            An international licence does not substitute for SPA/MF requirements. Octus aligns
            overseas holdings, local Brazilian entities, compliance evidence and banking readiness
            so Brazil entry remains explainable to regulators and institutions.
          </p>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-3 block">Brazil Insights</p>
          <h2 className="heading-section mb-8 max-w-2xl">Selected analysis on Brazil regulation.</h2>
          <ul className="list-none divide-y divide-border border-y border-border">
            {brazilInsights.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex flex-col gap-1 py-5 no-underline transition-colors hover:text-primary md:flex-row md:items-baseline md:justify-between md:gap-8"
                >
                  <span className="font-sans text-base font-medium text-foreground">{item.title}</span>
                  <span className="shrink-0 font-sans text-xs uppercase tracking-wider text-muted-foreground">
                    {item.date}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-background py-14 md:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="mb-3 font-heading text-xl font-semibold text-foreground md:text-2xl">
            Discuss your Brazil operation.
          </h2>
          <Link
            href={WHATSAPP_DISCUSS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm font-medium text-primary no-underline hover:text-primary/80"
          >
            {CTA_DISCUSS_LABEL}
          </Link>
        </div>
      </section>
    </main>
  );
}
