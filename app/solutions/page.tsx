import Link from "next/link";
import { SOLUTION_HUBS } from "../../lib/commercial";
import { CTA_ASSESS_LABEL, CTA_DISCUSS_LABEL, WHATSAPP_ASSESS_URL, WHATSAPP_DISCUSS_URL } from "../../lib/cta";
import PageHero from "../../components/system/PageHero";
import { CtaLink } from "../../components/system/CtaButton";
import BrandSectionMotif from "../../components/system/BrandSectionMotif";
import Reveal from "../../components/system/Reveal";
import SolutionIdentityMark from "../../components/system/SolutionIdentityMark";
import OctusSymbolMarker from "../../components/system/OctusSymbolMarker";
import OctusEditorialDivider from "../../components/system/OctusEditorialDivider";

export const metadata = {
  title: "Solutions — Execution for Regulated Operations",
  description:
    "Six solutions for regulated operations: licensing, banking, compliance, corporate structure, legal architecture and operational remediation.",
};

const MOTIF_BY_SLUG: Record<string, string> = {
  "regulatory-strategy-licensing": "regulatory",
  "banking-payments-infrastructure": "banking",
  "compliance-risk-systems": "compliance",
  "corporate-cross-border": "corporate",
  "legal-contractual-architecture": "legal",
  "operational-remediation-readiness": "remediation",
};

export default function SolutionsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Solutions"
        title="You don't need a catalogue of services."
        titleSecondLine="You need accountable execution."
        description="Octus coordinates regulatory, banking, compliance, corporate and contractual layers as one structure — with a clear door when the operation is already failing."
        primaryCta={{ href: WHATSAPP_DISCUSS_URL, label: CTA_DISCUSS_LABEL, external: true }}
        secondaryCta={{ href: WHATSAPP_ASSESS_URL, label: CTA_ASSESS_LABEL, external: true }}
      />

      <section className="octus-section-relative bg-background py-20 md:py-28">
        <BrandSectionMotif />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <OctusSymbolMarker size={18} />
            <p className="section-label mb-4 block">Octus capabilities</p>
            <h2 className="heading-section heading-section--brand mb-4 max-w-2xl">
              Six capabilities. One accountable layer.
            </h2>
            <p className="body-large mb-8 max-w-2xl">
              Not a service catalogue — coordinated execution across regulatory, banking,
              compliance, corporate and contractual layers. Markets describe where we operate.
              Capabilities describe what we own.
            </p>
            <OctusEditorialDivider className="mb-12 ml-0 mr-auto" />
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {SOLUTION_HUBS.map((hub, i) => {
              const motif = MOTIF_BY_SLUG[hub.slug] ?? "regulatory";
              return (
                <Reveal key={hub.slug} delayMs={Math.min(i * 60, 240)}>
                  <article
                    className={`solution-card solution-card--motif-${motif} flex flex-col rounded-sm border p-6 md:p-8 ${
                      hub.crisis
                        ? "solution-card--crisis border-accent/35 bg-background"
                        : "border-border bg-background"
                    }`}
                  >
                    <div className="relative z-10 mb-5 flex items-center justify-between gap-3">
                      <SolutionIdentityMark num={hub.num} accent={Boolean(hub.crisis)} />
                      {hub.crisis && (
                        <span className="rounded-sm bg-accent/10 px-2 py-1 font-sans text-[11px] font-medium uppercase tracking-wide text-accent">
                          Crisis entry
                        </span>
                      )}
                    </div>
                    <h3 className="relative z-10 mb-3 font-heading text-xl font-semibold text-foreground md:text-2xl">
                      <Link href={hub.href} className="text-inherit no-underline hover:text-primary">
                        {hub.title}
                      </Link>
                    </h3>
                    <p className="relative z-10 mb-3 font-sans text-sm font-medium text-foreground">
                      {hub.problem}
                    </p>
                    <p className="relative z-10 mb-6 flex-1 font-sans text-sm leading-relaxed text-[hsl(220_14%_24%)]">
                      {hub.summary}
                    </p>
                    {hub.legalBoundary && (
                      <p className="relative z-10 mb-4 font-sans text-xs leading-relaxed body-secondary">
                        Not a law firm — legal structures for regulated operations.
                      </p>
                    )}
                    {hub.markets.length > 0 && (
                      <p className="relative z-10 mb-6 font-sans text-xs body-secondary">
                        Markets: {hub.markets.map((m) => m.label).join(" · ")}
                      </p>
                    )}
                    <Link
                      href={hub.href}
                      className="relative z-10 font-sans text-sm font-medium text-primary no-underline hover:text-primary/80"
                    >
                      Open capability →
                    </Link>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="surface-elevated py-16 md:py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <Reveal>
            <p className="section-label mb-2 block">How we engage</p>
            <p className="body-large max-w-xl">
              Lead Contractor Programme and engagement models built for accountability.
            </p>
          </Reveal>
          <CtaLink href="/how-we-engage" variant="primary">
            How we engage →
          </CtaLink>
        </div>
      </section>
    </main>
  );
}
