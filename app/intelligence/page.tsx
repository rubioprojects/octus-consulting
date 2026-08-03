import Link from "next/link";
import { WHATSAPP_DISCUSS_URL } from "../../lib/cta";
import { INTELLIGENCE_PILLARS } from "../../lib/commercial";
import PageHero from "../../components/system/PageHero";
import OctusIcon, { type OctusIconName } from "../../components/icons/OctusIcon";
import BrandSectionMotif from "../../components/system/BrandSectionMotif";
import Reveal from "../../components/system/Reveal";
import OctusSymbolMarker from "../../components/system/OctusSymbolMarker";
import OctusEditorialDivider from "../../components/system/OctusEditorialDivider";
import { CtaLink } from "../../components/system/CtaButton";
import { pageSocialMeta } from "../../lib/pageMeta";

export const metadata = pageSocialMeta({
  title: "Intelligence",
  description:
    "Public analysis covering regulatory developments, market signals, operational risk and executive decision-making in highly regulated markets.",
  path: "/intelligence",
});

const PILLAR_ICONS: OctusIconName[] = [
  "regulatory",
  "markets",
  "compliance",
  "corporate",
];

/** Resource paths available on the current site. */
const LAUNCH_TYPES = [
  {
    num: "01",
    title: "Regulatory Signals",
    body: "Short analysis of developments that change filings, banking pressure or operating posture.",
    href: "/insights",
    cta: "Read published Insights →",
  },
  {
    num: "02",
    title: "How Octus engages",
    body: "Commercial models and operating posture for mandates that need structural accountability.",
    href: "/how-we-engage",
    cta: "How we engage →",
  },
  {
    num: "03",
    title: "About Octus",
    body: "Institutional context for boards, partners and operators evaluating a structured mandate.",
    href: "/about",
    cta: "Read About →",
  },
] as const;

export default function IntelligencePage() {
  return (
    <main>
      <PageHero
        eyebrow="Intelligence"
        title="Intelligence for regulated operations."
        titleSecondLine="Signals that inform execution."
        description="Octus Intelligence frames regulatory, tax, legal, compliance and operational signals so published Insights connect to decisions and structure that must hold under scrutiny."
        primaryCta={{ href: "/insights", label: "Explore Insights →" }}
        secondaryCta={{ href: WHATSAPP_DISCUSS_URL, label: "Discuss a specific issue", quiet: true, external: true }}
      />

      <section className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <OctusSymbolMarker size={18} />
            <p className="section-label mb-4 block">How this is organised</p>
            <h2 className="heading-section mb-4">Intelligence and Insights</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <article className="rounded-sm border border-border p-5">
                <h3 className="font-sans text-base font-semibold text-primary">Intelligence</h3>
                <p className="body-sm mt-2">
                  How Octus develops and applies regulatory, tax, legal, compliance and operational
                  intelligence when designing structures that must survive scrutiny.
                </p>
              </article>
              <article className="rounded-sm border border-border p-5">
                <h3 className="font-sans text-base font-semibold text-primary">Insights</h3>
                <p className="body-sm mt-2">
                  Published articles and analysis from the field. The reading library that supports
                  the Intelligence layer alongside mandate work.
                </p>
                <Link
                  href="/insights"
                  className="mt-3 inline-block font-sans text-sm font-medium text-primary no-underline hover:underline"
                >
                  Open Insights →
                </Link>
              </article>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="section-label mb-4 block">From signal to structure</p>
            <h2 className="heading-section mb-4">How intelligence becomes executable</h2>
            <ol className="flex list-none flex-col gap-6">
              {[
                {
                  n: "01",
                  t: "Frame the pressure",
                  b: "Identify which regulatory, banking, tax, legal or operational constraints actually govern the next decision.",
                },
                {
                  n: "02",
                  t: "Translate into architecture",
                  b: "Convert that pressure into jurisdiction fit, ownership, compliance and commercial sequencing the operation can hold.",
                },
                {
                  n: "03",
                  t: "Execute with accountability",
                  b: "Connect published analysis to a mandate with clear owners, paths and review points.",
                },
              ].map((s) => (
                <li key={s.n} className="grid grid-cols-[48px_1fr] gap-6 border-b border-border pb-6 last:border-0">
                  <span className="font-heading text-xs font-bold tracking-widest text-primary">{s.n}</span>
                  <div>
                    <h3 className="mb-2 font-sans text-lg font-semibold text-primary">{s.t}</h3>
                    <p className="body-text">{s.b}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <section className="intelligence-authority octus-section-relative py-24 md:py-32">
        <BrandSectionMotif tone="navy" position="end" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <OctusSymbolMarker tone="white" size={20} />
            <div className="mb-3 h-px w-16 accent-cream-bar opacity-80" aria-hidden="true" />
            <p className="section-label mb-4 block">Resources</p>
            <h2 className="heading-section mb-4 max-w-2xl">What you can use today</h2>
            <p className="body-large mb-8 max-w-2xl">
              Practical material for operators under scrutiny: published Insights, engagement
              guidance and institutional context for structured decisions.
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
              Read the material, prepare your questions, then continue with Octus when a live
              operational constraint needs structured attention.
            </p>
            <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4">
              <CtaLink href="/insights" variant="primary">
                Explore Insights →
              </CtaLink>
              <CtaLink
                href={WHATSAPP_DISCUSS_URL}
                variant="secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Discuss a specific issue →
              </CtaLink>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
