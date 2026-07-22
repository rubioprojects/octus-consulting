import { CTA_DISCUSS_LABEL, WHATSAPP_DISCUSS_URL } from "../../lib/cta";
import { INTELLIGENCE_PILLARS } from "../../lib/commercial";
import PageHero from "../../components/system/PageHero";
import { CtaLink } from "../../components/system/CtaButton";
import OctusIcon, { type OctusIconName } from "../../components/icons/OctusIcon";
import BrandSectionMotif from "../../components/system/BrandSectionMotif";
import Reveal from "../../components/system/Reveal";

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
        title="Regulatory signals. Market intelligence."
        titleSecondLine="Operational insights."
        description="Public analysis for operators under regulatory and banking pressure — clarity for executive decisions, not a product surface."
        primaryCta={{ href: "/insights", label: "Explore Insights →" }}
        secondaryCta={{ href: WHATSAPP_DISCUSS_URL, label: CTA_DISCUSS_LABEL, external: true }}
      />

      <section className="intelligence-authority octus-section-relative py-24 md:py-32">
        <BrandSectionMotif tone="navy" position="end" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mb-3 h-px w-16 accent-cream-bar opacity-80" aria-hidden="true" />
            <p className="section-label mb-4 block">Authority platform</p>
            <h2 className="heading-section mb-4 max-w-2xl">Editorial signals that scale</h2>
            <p className="body-large mb-4 max-w-2xl">
              Regulatory signals. Market intelligence. Operational insights. Each pillar maps to
              decisions operators face under scrutiny — built to grow without becoming a chatbot
              or product UI.
            </p>
            <p className="mb-12 max-w-xl font-sans text-sm text-white/70">
              Editorial authority for regulated operations — not a product surface.
            </p>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {INTELLIGENCE_PILLARS.map((p, i) => (
              <Reveal key={p.title} delayMs={Math.min(i * 70, 210)}>
                <article className="intelligence-pillar rounded-sm border p-6 md:p-8">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="intelligence-pillar__mark inline-flex h-9 w-9 items-center justify-center rounded-sm border text-primary">
                      <OctusIcon name={PILLAR_ICONS[i] ?? "intelligence"} size={18} />
                    </span>
                    <h3 className="font-heading text-lg font-semibold">{p.title}</h3>
                  </div>
                  <p className="body-text">{p.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mb-6 h-px w-16 accent-cream-bar" aria-hidden="true" />
            <p className="section-label mb-4 block">Insights</p>
            <p className="body-large mb-6">
              Explore analysis on regulatory developments, market infrastructure, operational risk
              and cross-border execution.
            </p>
            <CtaLink href="/insights" variant="primary">
              Explore Insights →
            </CtaLink>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
