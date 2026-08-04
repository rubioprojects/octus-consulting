import Link from "next/link";
import { SOLUTION_HUBS } from "../../lib/commercial";
import { CTA_ASSESS_LABEL, CTA_DISCUSS_LABEL, WHATSAPP_ASSESS_URL, WHATSAPP_DISCUSS_URL } from "../../lib/cta";
import PageHero from "../../components/system/PageHero";
import { CtaLink } from "../../components/system/CtaButton";

export const metadata = {
  title: "Solutions — Execution for Regulated Operations",
  description:
    "Six solutions for regulated operations: licensing, banking, compliance, corporate structure, legal architecture and operational remediation.",
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

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4 block">Commercial map</p>
          <h2 className="heading-section mb-4 max-w-2xl">Six solutions. One execution partner.</h2>
          <p className="body-large mb-12 max-w-2xl text-muted-foreground">
            Markets describe where we operate. Solutions describe what we coordinate. Jurisdictions
            remain education — not products.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {SOLUTION_HUBS.map((hub) => (
              <article
                key={hub.slug}
                className={`flex flex-col rounded-sm border p-6 md:p-8 ${
                  hub.crisis
                    ? "border-primary/40 bg-primary/[0.03]"
                    : "border-border bg-background"
                }`}
              >
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="font-sans text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
                    {hub.num}
                  </span>
                  {hub.crisis && (
                    <span className="rounded-sm bg-primary/10 px-2 py-1 font-sans text-[11px] font-medium uppercase tracking-wide text-primary">
                      Crisis entry
                    </span>
                  )}
                </div>
                <h3 className="mb-3 font-heading text-xl font-semibold text-foreground md:text-2xl">
                  <Link href={hub.href} className="text-inherit no-underline hover:text-primary">
                    {hub.title}
                  </Link>
                </h3>
                <p className="mb-3 font-sans text-sm font-medium text-foreground">{hub.problem}</p>
                <p className="mb-6 flex-1 font-sans text-sm leading-relaxed text-muted-foreground">
                  {hub.summary}
                </p>
                {hub.legalBoundary && (
                  <p className="mb-4 font-sans text-xs leading-relaxed text-muted-foreground">
                    Not a law firm — legal structures for regulated operations.
                  </p>
                )}
                {hub.markets.length > 0 && (
                  <p className="mb-6 font-sans text-xs text-muted-foreground">
                    Markets: {hub.markets.map((m) => m.label).join(" · ")}
                  </p>
                )}
                <Link
                  href={hub.href}
                  className="font-sans text-sm font-medium text-primary no-underline hover:text-primary/80"
                >
                  Open solution →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="surface-elevated py-16 md:py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <div>
            <p className="section-label mb-2 block">Next step</p>
            <p className="body-large max-w-xl">Ready to discuss your operation.</p>
          </div>
          <CtaLink href={WHATSAPP_DISCUSS_URL} variant="primary" target="_blank" rel="noopener noreferrer">
            {CTA_DISCUSS_LABEL}
          </CtaLink>
        </div>
      </section>
    </main>
  );
}
