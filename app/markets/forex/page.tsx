import Link from "next/link";
import { CTA_DISCUSS_LABEL, WHATSAPP_DISCUSS_URL } from "../../../lib/cta";
import PageHero from "../../../components/system/PageHero";
import OctusIcon, { type OctusIconName } from "../../../components/icons/OctusIcon";
import OctusSymbolMarker from "../../../components/system/OctusSymbolMarker";
import { pageSocialMeta } from "../../../lib/pageMeta";
import "../markets.css";

export const metadata = pageSocialMeta({
  title: "Forex & Regulated Financial Services",
  description:
    "Brokerage and investment service models under supervisory pressure need structure that survives licensing and banking scrutiny.",
  path: "/markets/forex",
});

const PRESSURES: { title: string; body: string; icon: OctusIconName }[] = [
  {
    title: "Licensing pathway and positioning",
    icon: "licensing",
    body: "The authorisation a model needs depends on how the activity is characterised: dealing, brokerage, introduction, portfolio activity or a technology role. That characterisation drives the pathway, the evidence and the ongoing obligations. It is decided by the competent authority, not by the applicant.",
  },
  {
    title: "Conduct and client-facing obligations",
    icon: "compliance",
    body: "Supervised financial activity carries conduct expectations across disclosure, marketing, suitability, complaint handling and record keeping. Where the applicable framework requires client money handling arrangements, those arrangements shape the operating design.",
  },
  {
    title: "Banking and settlement access",
    icon: "banking",
    body: "Accounts, settlement flows and payment providers are assessed against the licence, the corporate structure and the compliance file. Access decisions remain with each institution and are never promised.",
  },
  {
    title: "Cross-border distribution",
    icon: "jurisdictions",
    body: "Clients, entities, staff and marketing rarely sit in one jurisdiction. Each additional market adds its own perimeter question, and the structure has to answer it before distribution scales.",
  },
];

const COORDINATION = [
  "Regulatory positioning: how the activity is characterised, which pathway follows from it and what the application file needs to demonstrate.",
  "Application preparation and governance documentation, coordinated with local counsel where the matter is legal.",
  "Fit-and-proper and governance preparation for directors, officers and controllers.",
  "Compliance architecture: AML and KYC, monitoring, conduct records, reporting and internal controls built to be evidenced.",
  "Corporate and ownership design aligned with the regulatory perimeter and with institutional expectations.",
  "Banking, settlement and payment readiness documentation for onboarding conversations.",
  "Cross-border sequencing when distribution extends into additional jurisdictions.",
];

const APPLIES = [
  "An authorisation pathway needs to be defined before capital and commercial commitments are made.",
  "An application has stalled and the file cannot answer the questions being asked.",
  "Banking or settlement access does not match the licence the operation already holds.",
  "Conduct, AML or record keeping obligations exist on paper but cannot be evidenced under review.",
  "Distribution is expanding into new jurisdictions and the perimeter question has not been answered.",
  "The operation is remediating after supervisory findings, a rejection or a loss of institutional access.",
];

export default function MarketsForexPage() {
  return (
    <main>
      <PageHero
        eyebrow="Markets"
        title="Supervised financial activity."
        titleSecondLine="Structure decides whether it can operate."
        description="Brokerage, dealing and investment service models are assessed on how the activity is characterised, how conduct obligations are evidenced and whether banking and settlement can be sustained. Octus structures that position and coordinates the workstreams behind it."
        primaryCta={{
          href: WHATSAPP_DISCUSS_URL,
          label: CTA_DISCUSS_LABEL,
          external: true,
        }}
        secondaryCta={{
          href: "/solutions/regulatory-structuring",
          label: "Regulatory Structuring",
          quiet: true,
        }}
      />

      <section className="border-b border-border bg-secondary/40 py-10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="font-sans text-sm leading-relaxed text-muted-foreground">
            This page describes structural work, not legal or investment advice. Licensing
            requirements, permitted activities and conduct obligations depend on the jurisdiction and
            the facts of the operation. Authorisation is decided by the competent authority. Legal
            matters are delivered or coordinated through qualified counsel in the relevant
            jurisdiction.
          </p>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
          <OctusSymbolMarker size={18} />
          <p className="section-label mb-4 block">The structural problem</p>
          <h2 className="heading-section mb-6">
            The model is rarely the problem. The characterisation is.
          </h2>
          <p className="body-large mb-5">
            Two operations that look identical in a pitch deck can sit in different regulatory
            positions. What matters is how the activity is characterised in each jurisdiction: who
            faces the client, who holds funds, who executes and who carries the risk.
          </p>
          <p className="body-large mb-5">
            That characterisation then propagates. It sets the authorisation pathway, the conduct
            obligations, the evidence the file has to carry and the way banks and payment providers
            read the business.
          </p>
          <p className="body-text">
            Operations under supervision do not usually fail at launch. They fail when a review, a
            filing or an onboarding request asks for evidence the structure was never built to
            produce.
          </p>
        </div>
      </section>

      <section className="surface-elevated py-24 md:py-32">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl md:mb-12">
            <p className="section-label mb-4 block">Structural pressures</p>
            <h2 className="heading-section mb-6">Four layers under constant review.</h2>
          </div>
          <ul className="markets-grid markets-grid--pair">
            {PRESSURES.map((item) => (
              <li key={item.title}>
                <article className="markets-card">
                  <span className="markets-card__mark">
                    <OctusIcon name={item.icon} size={18} />
                  </span>
                  <h3 className="mb-3 font-sans text-lg font-semibold text-primary">
                    {item.title}
                  </h3>
                  <p className="body-text">{item.body}</p>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4 block">What Octus coordinates</p>
          <h2 className="heading-section mb-8">Licensing, conduct and banking as one programme.</h2>
          <ul className="flex list-none flex-col gap-4">
            {COORDINATION.map((item) => (
              <li key={item} className="border-l-2 border-primary/30 py-1 pl-4">
                <p className="body-text">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="surface-elevated py-24 md:py-32">
        <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4 block">When this applies</p>
          <h2 className="heading-section mb-8">Situations that bring operators here.</h2>
          <ul className="flex list-none flex-col gap-3">
            {APPLIES.map((item) => (
              <li key={item} className="flex gap-3 border-b border-border/70 pb-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                <p className="body-text">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-background py-20 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-6 block">Related</p>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Fintech & Payments",
                desc: "Adjacent authorisation, payment and banking structure.",
                href: "/markets/fintech",
                icon: "banking" as OctusIconName,
              },
              {
                title: "Compliance & Risk",
                desc: "AML, conduct records and controls built to be evidenced.",
                href: "/solutions/compliance-risk",
                icon: "compliance" as OctusIconName,
              },
              {
                title: "All industries",
                desc: "Six sectors under one structural discipline.",
                href: "/markets",
                icon: "markets" as OctusIconName,
              },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="markets-card">
                <span className="markets-card__mark">
                  <OctusIcon name={item.icon} size={18} />
                </span>
                <h3 className="mb-2 font-sans text-base font-semibold text-primary">
                  {item.title}
                </h3>
                <p className="body-text">{item.desc}</p>
                <span className="markets-card__more">Open {item.title} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="surface-dark py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="mb-4 font-heading text-2xl font-semibold text-white md:text-3xl">
            Continue with the licensing and conduct question.
          </h2>
          <p className="mb-8 font-sans text-sm leading-relaxed text-white/70">
            Describe the model, the target markets and where the process is stuck. We will tell you
            how the structure is usually sequenced.
          </p>
          <p className="font-sans text-sm">
            <Link
              href="/markets"
              className="text-white/75 underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              View all industries
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
