import Link from "next/link";
import { CTA_DISCUSS_LABEL, WHATSAPP_DISCUSS_URL } from "../../lib/cta";
import { INTELLIGENCE_PILLARS } from "../../lib/commercial";
import PageHero from "../../components/system/PageHero";
import { CtaLink } from "../../components/system/CtaButton";

export const metadata = {
  title: "Intelligence",
  description:
    "Regulatory intelligence, market signals and operational insights for operators under pressure — via the Octus Insights hub.",
};

export default function IntelligencePage() {
  return (
    <main>
      <PageHero
        eyebrow="Intelligence"
        title="Authority for operators under pressure."
        titleSecondLine="Not a lifestyle blog."
        description="Public intelligence for regulated operations: regulatory shifts, market signals, operational failure modes and executive perspectives — published through Insights."
        primaryCta={{ href: "/insights", label: "Explore Insights →" }}
        secondaryCta={{ href: WHATSAPP_DISCUSS_URL, label: CTA_DISCUSS_LABEL, external: true }}
      />

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4 block">Public narrative</p>
          <h2 className="heading-section mb-12 max-w-2xl">What Intelligence covers</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {INTELLIGENCE_PILLARS.map((p) => (
              <article key={p.title} className="rounded-sm border border-border p-6 md:p-8">
                <h3 className="mb-3 font-heading text-lg font-semibold text-foreground">{p.title}</h3>
                <p className="body-text text-muted-foreground">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="surface-elevated py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4 block">Insights hub</p>
          <p className="body-large mb-6">
            Existing articles live at{" "}
            <Link href="/insights" className="text-primary underline-offset-4 hover:underline">
              /insights
            </Link>
            . This page is the commercial bridge — not a rewrite of the archive.
          </p>
          <CtaLink href="/insights" variant="primary">
            Open Insights →
          </CtaLink>
        </div>
      </section>
    </main>
  );
}
