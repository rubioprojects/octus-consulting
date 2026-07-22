import { CTA_DISCUSS_LABEL, CTA_EMAIL_LABEL, MAILTO_DISCUSS, WHATSAPP_DISCUSS_URL } from "../../lib/cta";
import PageHero from "../../components/system/PageHero";
import { CtaLink } from "../../components/system/CtaButton";
import OctusIcon, { type OctusIconName } from "../../components/icons/OctusIcon";
import BrandSectionMotif from "../../components/system/BrandSectionMotif";
import Reveal from "../../components/system/Reveal";
import OctusSymbolMarker from "../../components/system/OctusSymbolMarker";
import OctusEditorialDivider from "../../components/system/OctusEditorialDivider";
import Link from "next/link";
import { INTELLIGENCE_PILLARS } from "../../lib/commercial";

export const metadata = {
  title: "Intelligence",
  description:
    "Octus Intelligence: regulatory signals, guides and checklists, and insights for operators under regulatory and banking pressure — editorial authority, not a product surface.",
};

const PILLAR_ICONS: OctusIconName[] = [
  "regulatory",
  "markets",
  "compliance",
  "corporate",
];

/** Launch taxonomy — only types with live destinations (no empty shelves). */
const LAUNCH_TYPES = [
  {
    num: "01",
    title: "Regulatory Signals",
    body: "Short analysis of developments that change filings, banking pressure or operating posture.",
    href: "/insights",
    cta: "Browse Insights →",
  },
  {
    num: "02",
    title: "Guides and Checklists",
    body: "Practical assets to prepare internal discussion — starting with operator readiness for iGaming.",
    href: "/resources/igaming-operator-readiness",
    cta: "Open checklist →",
  },
  {
    num: "03",
    title: "Plain-language positioning",
    body: "A shareable explanation of what Octus does — for boards, partners and non-specialists.",
    href: "/what-octus-does",
    cta: "What Octus does →",
  },
  {
    num: "04",
    title: "Insights library",
    body: "Published analysis on regulatory developments, market infrastructure and operational risk.",
    href: "/insights",
    cta: "Explore Insights →",
  },
] as const;

export default function IntelligencePage() {
  return (
    <main>
      <PageHero
        eyebrow="Intelligence"
        title="Analysis that helps regulated operators decide."
        titleSecondLine="Not a product. Not a feed."
        description="Octus Intelligence is editorial material for founders, counsel and operators under regulatory and banking pressure — signals, guides and insights that connect knowledge to execution."
        primaryCta={{ href: "/insights", label: "Explore Insights →" }}
        secondaryCta={{ href: WHATSAPP_DISCUSS_URL, label: CTA_DISCUSS_LABEL, external: true }}
      />

      <section className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <OctusSymbolMarker size={18} />
            <p className="section-label mb-4 block">Who it is for</p>
            <h2 className="heading-section mb-4">Decisions under scrutiny</h2>
            <p className="body-large mb-4">
              Use this section when you need clarity on market entry, licensing posture, compliance
              pressure, banking friction or structural remediation — before or during an engagement
              with Octus.
            </p>
            <p className="body-text">
              It is not a chatbot, dashboard or content marketplace. It is a curated library and a
              small set of practical assets.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="intelligence-authority octus-section-relative py-24 md:py-32">
        <BrandSectionMotif tone="navy" position="end" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <OctusSymbolMarker tone="white" size={20} />
            <div className="mb-3 h-px w-16 accent-cream-bar opacity-80" aria-hidden="true" />
            <p className="section-label mb-4 block">Launch structure</p>
            <h2 className="heading-section mb-4 max-w-2xl">What you can use today</h2>
            <p className="body-large mb-8 max-w-2xl">
              Only categories with live content appear here. Future verticals (Tax, Compliance,
              Banking, Corporate, iGaming series) will be added when material exists — not as empty
              shelves.
            </p>
            <div className="intelligence-editorial-band mb-12">
              {LAUNCH_TYPES.map((t) => (
                <div key={t.num} className="intelligence-editorial-band__item">
                  <div className="editorial-numeral editorial-numeral--sm">{t.num}</div>
                  <p className="intelligence-editorial-band__label">{t.title}</p>
                  <p className="intelligence-editorial-band__hint">{t.body}</p>
                  <Link
                    href={t.href}
                    className="mt-3 inline-block font-sans text-xs font-medium text-white/80 no-underline hover:text-white"
                  >
                    {t.cta}
                  </Link>
                </div>
              ))}
            </div>
            <OctusEditorialDivider tone="dark" className="mb-12 ml-0 mr-auto" />
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
            <p className="section-label mb-4 block">From knowledge to execution</p>
            <p className="body-large mb-6">
              Read the material, prepare your internal questions, then talk to Octus — WhatsApp or
              email.
            </p>
            <div className="flex flex-wrap gap-4">
              <CtaLink href="/insights" variant="primary">
                Explore Insights →
              </CtaLink>
              <CtaLink href={WHATSAPP_DISCUSS_URL} variant="secondary" target="_blank" rel="noopener noreferrer">
                {CTA_DISCUSS_LABEL}
              </CtaLink>
              <CtaLink href={MAILTO_DISCUSS} variant="secondary">
                {CTA_EMAIL_LABEL}
              </CtaLink>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
