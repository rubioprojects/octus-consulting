import { CTA_DISCUSS_LABEL, WHATSAPP_DISCUSS_URL } from "../../lib/cta";
import { INTELLIGENCE_PILLARS } from "../../lib/commercial";
import PageHero from "../../components/system/PageHero";
import { CtaLink } from "../../components/system/CtaButton";
import OctusIcon, { type OctusIconName } from "../../components/icons/OctusIcon";

export const metadata = {
  title: "Intelligence",
  description:
    "Public analysis covering regulatory developments, market signals, operational risk and executive decision-making in highly regulated markets.",
};

const PILLAR_ICONS: OctusIconName[] = [
  "regulatory",
  "markets",
  "compliance",
  "corporate",
];

export default function IntelligencePage() {
  return (
    <main>
      <PageHero
        eyebrow="Intelligence"
        title="Intelligence for regulated operations."
        titleSecondLine="Signals that inform execution."
        description="Public analysis covering regulatory developments, market signals, operational risk and executive decision-making in highly regulated markets."
        primaryCta={{ href: "/insights", label: "Explore Insights →" }}
        secondaryCta={{ href: WHATSAPP_DISCUSS_URL, label: CTA_DISCUSS_LABEL, external: true }}
      />

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4 block">Coverage</p>
          <h2 className="heading-section mb-12 max-w-2xl">What Intelligence covers</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {INTELLIGENCE_PILLARS.map((p, i) => (
              <article
                key={p.title}
                className="intelligence-pillar rounded-sm border border-border/80 bg-background p-6 md:p-8"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="intelligence-pillar__mark inline-flex h-9 w-9 items-center justify-center rounded-sm border border-border bg-muted/40 text-primary">
                    <OctusIcon name={PILLAR_ICONS[i] ?? "intelligence"} size={18} />
                  </span>
                  <h3 className="font-heading text-lg font-semibold text-foreground">{p.title}</h3>
                </div>
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
