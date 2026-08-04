import Link from "next/link";
import { CTA_DISCUSS_LABEL, WHATSAPP_DISCUSS_URL } from "../../../lib/cta";
import PageHero from "../../../components/system/PageHero";
import OctusIcon, { type OctusIconName } from "../../../components/icons/OctusIcon";
import OctusSymbolMarker from "../../../components/system/OctusSymbolMarker";
import { pageSocialMeta } from "../../../lib/pageMeta";
import "../markets.css";

export const metadata = pageSocialMeta({
  title: "Technology & B2B Infrastructure",
  description:
    "Platforms, software suppliers and infrastructure providers serving regulated operators carry regulatory exposure through their clients. Octus structures ownership, contracting, compliance and cross-border operations.",
  path: "/markets/technology",
});

const PRESSURES: { title: string; body: string; icon: OctusIconName }[] = [
  {
    title: "Ownership and corporate design",
    icon: "corporate",
    body: "Clients, partners and institutions look at who owns the company, where it sits and how the group is organised. Ownership presentation that was never designed for scrutiny becomes a blocker during onboarding, diligence or expansion.",
  },
  {
    title: "Cross-border operations",
    icon: "jurisdictions",
    body: "Engineering in one country, contracting entity in another, clients in several more. Where the work is performed, where revenue is recognised and where obligations attach need to be coherent before a counterparty examines them.",
  },
  {
    title: "Contracting and supplier position",
    icon: "licensing",
    body: "Regulated clients push obligations down the supply chain: audit rights, data handling, continuity, records and change control. Contracts written for unregulated buyers rarely survive that review.",
  },
  {
    title: "Compliance exposure through clients",
    icon: "compliance",
    body: "A supplier can be unlicensed and still be assessed as part of a regulated operation. Suppliers to regulated operators are frequently asked for evidence of controls, and some frameworks bring specific supplier categories into scope directly.",
  },
];

const COORDINATION = [
  "Corporate and ownership structure designed for diligence by clients, banks and counterparties, not only for incorporation.",
  "Jurisdictional placement of contracting, operating and intellectual property layers, coordinated with local counsel where the matter is legal.",
  "Contract architecture for supply into regulated operations: obligations, records, continuity and change control.",
  "Compliance and control documentation a regulated client can accept as part of its own supervision file.",
  "Banking and payment readiness aligned with the corporate structure and the revenue model.",
  "Where a framework brings a supplier category into scope, the structural preparation that positioning requires.",
];

const APPLIES = [
  "A regulated client or prospect is asking for evidence of controls, ownership or continuity that the company cannot currently produce.",
  "The group grew across borders without a deliberate contracting and ownership design.",
  "Banking or payment onboarding is failing because the structure does not match the described business.",
  "An investor, acquirer or platform partner is running diligence and the corporate history is difficult to explain.",
  "The company is preparing to supply a regulated market for the first time and needs the structural position defined before commitments are made.",
];

export default function MarketsTechnologyPage() {
  return (
    <main>
      <PageHero
        eyebrow="Markets"
        title="You may not be the licensed party."
        titleSecondLine="You are still inside the regulated perimeter."
        description="Platforms, software suppliers and B2B infrastructure providers serving regulated operators inherit regulatory pressure through their clients. Ownership, contracting, compliance evidence and cross-border operations decide whether that position holds under examination."
        primaryCta={{
          href: WHATSAPP_DISCUSS_URL,
          label: CTA_DISCUSS_LABEL,
          external: true,
        }}
        secondaryCta={{ href: "/solutions", label: "Explore services", quiet: true }}
      />

      <section className="border-b border-border bg-secondary/40 py-10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="font-sans text-sm leading-relaxed text-muted-foreground">
            This page describes structural work, not legal advice. Regulatory classification of a
            supplier depends on the applicable framework and the facts of the operation. Legal
            matters are delivered or coordinated through qualified counsel in the relevant
            jurisdiction.
          </p>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
          <OctusSymbolMarker size={18} />
          <p className="section-label mb-4 block">The structural position</p>
          <h2 className="heading-section mb-6">
            Technology companies are assessed by the operations they serve.
          </h2>
          <p className="body-large mb-5">
            A platform, aggregator, data provider or managed service can sit outside the licensing
            regime and still be examined as part of a regulated operation. The questions arrive from
            the client, the client&apos;s auditor, the bank and sometimes the supervisor reviewing
            the client.
          </p>
          <p className="body-large mb-5">
            When they arrive, they are structural: who owns the entity, where the work is performed,
            what the contract commits to, what evidence exists and what happens if the service
            stops.
          </p>
          <p className="body-text">
            Product quality is not the constraint. The constraint is whether the company around the
            product can be examined without the commercial relationship stalling.
          </p>
        </div>
      </section>

      <section className="surface-elevated py-24 md:py-32">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl md:mb-12">
            <p className="section-label mb-4 block">Structural pressures</p>
            <h2 className="heading-section mb-6">Where the position is tested.</h2>
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
          <h2 className="heading-section mb-8">
            One structure across ownership, contracting and compliance.
          </h2>
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
          <h2 className="heading-section mb-8">Situations that bring companies here.</h2>
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
                title: "Corporate Structuring",
                desc: "Entity design, holding structure and ownership presentation.",
                href: "/solutions/corporate-structuring",
                icon: "corporate" as OctusIconName,
              },
              {
                title: "Legal & Structural Architecture",
                desc: "Contracting and structural work coordinated with qualified counsel.",
                href: "/solutions/legal-structural-architecture",
                icon: "licensing" as OctusIconName,
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
            Continue with the structural question.
          </h2>
          <p className="mb-8 font-sans text-sm leading-relaxed text-white/70">
            Describe where the diligence, contracting or ownership question is coming from and we
            will tell you how it is usually structured.
          </p>
          <p className="font-sans text-sm">
            <Link
              href="/solutions"
              className="text-white/75 underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              View all services
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
