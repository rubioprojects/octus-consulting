import Link from "next/link";
import { CTA_DISCUSS_LABEL, WHATSAPP_DISCUSS_URL } from "../../lib/cta";
import PageHero from "../../components/system/PageHero";
import OctusIcon, { type OctusIconName } from "../../components/icons/OctusIcon";
import OctusSymbolMarker from "../../components/system/OctusSymbolMarker";
import OctusEditorialDivider from "../../components/system/OctusEditorialDivider";
import { CtaLink } from "../../components/system/CtaButton";
import { pageSocialMeta } from "../../lib/pageMeta";
import "./markets.css";

export const metadata = pageSocialMeta({
  title: "Industries: regulated sectors we structure",
  description:
    "Six industries, one structural discipline: iGaming, fintech and payments, digital assets, technology and B2B infrastructure, forex and regulated financial services, and high-risk cross-border operations.",
  path: "/markets",
});

const INDUSTRIES: {
  title: string;
  href: string;
  icon: OctusIconName;
  desc: string;
  pressures: string[];
}[] = [
  {
    title: "iGaming & Betting",
    href: "/markets/igaming",
    icon: "licensing",
    desc: "Licensing pathways, compliance frameworks and banking readiness for online gambling and betting operations across selected jurisdictions.",
    pressures: ["Licensing", "Compliance", "Banking", "Payments"],
  },
  {
    title: "Fintech & Payments",
    href: "/markets/fintech",
    icon: "banking",
    desc: "Structural work for payment and e-money models: authorisation pathways, compliance architecture and readiness for institutional counterparts.",
    pressures: ["EMI/licensing pathways", "Payments", "Banking", "Cross-border"],
  },
  {
    title: "Digital Assets & Crypto",
    href: "/markets/crypto",
    icon: "compliance",
    desc: "Regulatory positioning, AML architecture and corporate design for exchanges, custodians, token models and digital payment rails.",
    pressures: ["CASP/VASP positioning", "AML", "Banking access", "Controls"],
  },
  {
    title: "Technology & B2B Infrastructure",
    href: "/markets/technology",
    icon: "corporate",
    desc: "Ownership, contracting and cross-border structure for platforms, software suppliers and infrastructure providers serving regulated operators.",
    pressures: ["Ownership", "Cross-border ops", "Contracting", "Compliance"],
  },
  {
    title: "Forex & Regulated Financial Services",
    href: "/markets/forex",
    icon: "regulatory",
    desc: "Licensing pathways, conduct frameworks and banking readiness for brokerage, dealing and investment service models under supervision.",
    pressures: ["Licensing", "Conduct", "Banking", "Cross-border"],
  },
  {
    title: "High-Risk & Cross-Border Operations",
    href: "/markets/high-risk",
    icon: "remediation",
    desc: "Banking resilience, enhanced compliance and structural separation for operations that institutions classify as high risk.",
    pressures: [
      "Banking resilience",
      "Enhanced compliance",
      "Structure",
      "Institutional access",
    ],
  },
];

const SHARED_LAYERS = [
  {
    name: "Licensing",
    body: "Authorisation pathways, filings and fit-and-proper preparation with local counsel where required.",
  },
  {
    name: "Compliance",
    body: "AML, KYC, monitoring, reporting and controls that must function, not only exist on paper.",
  },
  {
    name: "Banking & payments",
    body: "Documentation, structure and redundancy that institutional onboarding conversations depend on.",
  },
  {
    name: "Ownership & technology",
    body: "Corporate design, ownership presentation, contracting and cross-border operating reality.",
  },
];

export default function MarketsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Markets"
        title="Six industries."
        titleSecondLine="One structural discipline."
        description={
          <>
            These sectors differ commercially, but they share structural pressure involving
            licensing, compliance, banking, payments, ownership, technology and cross-border
            operations. Octus works those layers as one programme rather than as separate
            projects.
          </>
        }
      />

      {/* Shared structural pressure: the thesis before the sector list */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl md:mb-12">
            <OctusSymbolMarker size={18} />
            <p className="section-label mb-4 block">The shared pressure</p>
            <h2 className="heading-section mb-6">
              The sector changes. The structural layers do not.
            </h2>
            <p className="body-large text-muted-foreground">
              A licence without banking is not an operation. Compliance that cannot be evidenced
              does not survive scrutiny. Ownership and technology decisions taken early decide what
              is possible later. Every industry below meets the same four layers in a different
              order.
            </p>
          </div>
          <ul className="markets-layers">
            {SHARED_LAYERS.map((layer) => (
              <li key={layer.name} className="markets-layer">
                <span className="markets-layer__name">{layer.name}</span>
                {layer.body}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Six industries as one architecture */}
      <section className="surface-elevated py-24 md:py-32">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl md:mb-12">
            <p className="section-label mb-4 block">Industries</p>
            <h2 className="heading-section mb-6">Where Octus operates.</h2>
            <p className="body-large text-muted-foreground">
              Each industry page describes the structural pressures of that sector and the work
              Octus coordinates inside it.
            </p>
          </div>
          <ul className="markets-grid">
            {INDUSTRIES.map((industry) => (
              <li key={industry.href}>
                <Link href={industry.href} className="markets-card">
                  <span className="markets-card__mark">
                    <OctusIcon name={industry.icon} size={18} />
                  </span>
                  <h3 className="mb-3 font-sans text-lg font-semibold text-primary">
                    {industry.title}
                  </h3>
                  <p className="body-text">{industry.desc}</p>
                  <ul className="markets-card__pressures">
                    {industry.pressures.map((pressure) => (
                      <li key={pressure} className="markets-card__pressure">
                        {pressure}
                      </li>
                    ))}
                  </ul>
                  <span className="markets-card__more">Explore {industry.title} →</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why sector-specific structure matters */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
          <OctusEditorialDivider className="mb-12 ml-0 mr-auto" />
          <p className="section-label mb-4 block">Why the sector matters</p>
          <h2 className="heading-section mb-6">One discipline, adapted to the sector.</h2>
          <p className="body-large mb-5">
            A compliance framework designed for a payment model will not answer the questions an
            iGaming supervisor asks. A corporate structure built for a technology supplier will not
            carry a regulated financial services application. The layers are shared. The evidence,
            sequencing and thresholds are not.
          </p>
          <p className="body-text">
            Octus does not adapt a generic template. We build the structure for the regulatory,
            banking and operating environment the business actually works in, and we keep the
            workstreams coordinated under one point of accountability.
          </p>
        </div>
      </section>

      {/* Quiet wayfinding */}
      <section className="surface-elevated py-20 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-6 block">Continue</p>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Solutions",
                desc: "Seven service areas that carry the work across every industry.",
                href: "/solutions",
                icon: "corporate" as OctusIconName,
              },
              {
                title: "Jurisdictions",
                desc: "Regulatory locations where Octus can take operational accountability.",
                href: "/jurisdictions",
                icon: "jurisdictions" as OctusIconName,
              },
              {
                title: "How we engage",
                desc: "Engagement models and where accountability sits inside a mandate.",
                href: "/how-we-engage",
                icon: "contact" as OctusIconName,
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

      {/* Final CTA: one primary, one quiet link */}
      <section className="surface-dark py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="mb-6 font-heading text-3xl font-semibold leading-[1.12] tracking-tight text-white md:text-4xl">
            The sector is the context. The structure is the work.
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/75">
            If licensing, compliance, banking or ownership is holding the operation back, describe
            the situation and we will tell you how it is usually structured.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <CtaLink
              href={WHATSAPP_DISCUSS_URL}
              variant="on-dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              {CTA_DISCUSS_LABEL}
            </CtaLink>
            <Link
              href="/solutions"
              className="inline-flex min-h-11 items-center font-sans text-sm text-white/65 no-underline transition-colors hover:text-white"
            >
              Explore services →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
