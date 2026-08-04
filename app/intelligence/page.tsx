import { INTELLIGENCE_PILLARS } from "../../lib/commercial";
import PageHero from "../../components/system/PageHero";
import { CtaLink } from "../../components/system/CtaButton";

export const metadata = {
  title: "Intelligence",
  description:
    "Public analysis covering regulatory developments, market signals, operational risk and executive decision-making in highly regulated markets.",
};

export default function IntelligencePage() {
  return (
    <main>
      <PageHero
        eyebrow="Intelligence"
        title="Intelligence for regulated operations."
        titleSecondLine="Signals that inform execution."
        description="Regulatory developments, market signals and operational insight — published in our Insights library."
        primaryCta={{ href: "/insights", label: "Explore Insights →" }}
      />

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4 block">Coverage</p>
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
          <p className="section-label mb-4 block">Insights</p>
          <p className="body-large mb-6">
            Explore analysis on regulatory developments, market infrastructure, operational risk
            and cross-border execution.
          </p>
          <CtaLink href="/insights" variant="primary">
            Explore Insights →
          </CtaLink>
        </div>
      </section>
    </main>
  );
}
