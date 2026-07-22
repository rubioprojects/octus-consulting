import Link from "next/link";
import { CTA_DISCUSS_LABEL, WHATSAPP_DISCUSS_URL } from "../../lib/cta";
import PageHero from "../../components/system/PageHero";
import BrandSectionMotif from "../../components/system/BrandSectionMotif";
import Reveal from "../../components/system/Reveal";

export const metadata = {
  title: "Markets — Regulated Sectors We Structure",
  description:
    "We structure operations in iGaming, fintech, crypto and high-risk digital sectors. Licensing, compliance and corporate architecture for regulated markets.",
};

const ACTIVE = [
  {
    title: "iGaming & Betting",
    signal: "Licensed operations under scrutiny",
    constraint: "Licence without bankable structure fails post-approval.",
    desc: "Licensing, compliance and banking coordinated for online gambling and sports betting — from Curaçao to Brazil, Malta to Isle of Man.",
    tags: ["Licensing", "Banking", "GLI", "Compliance"],
    href: "/markets/igaming",
  },
  {
    title: "Fintech & Payments",
    signal: "Authorisation meets infrastructure",
    constraint: "EMI / payments paths stall when banking readiness lags filings.",
    desc: "Regulatory structuring for payment institutions, EMIs and fintech operators — banking access, compliance frameworks and cross-border licensing.",
    tags: ["EMI", "Payments", "Banking", "Cross-border"],
    href: "/markets/fintech",
  },
] as const;

const ADDITIONAL = [
  {
    title: "Crypto & Digital Assets",
    signal: "Regime and custody gravity",
    constraint: "VASP / MiCA positioning without operable controls does not survive review.",
    desc: "VASP registration, regulatory positioning and compliance architecture for exchanges, custodians and token issuers.",
    tags: ["VASP", "MiCA", "AML", "Custody"],
    href: "/markets/crypto",
    pressure: false,
  },
  {
    title: "High-Risk Digital Businesses",
    signal: "Structural resilience under classification",
    constraint: "Banks and regulators classify risk — structure must absorb it.",
    desc: "Structural and compliance solutions for businesses classified as high-risk. We make the structure work — not the label go away.",
    tags: ["Banking", "Risk", "Structure", "Compliance"],
    href: "/markets/high-risk",
    pressure: true,
  },
] as const;

export default function MarketsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Markets"
        title="Different industries."
        titleSecondLine="Same structural problem."
        description={
          <>
            Market intelligence for operators under pressure — iGaming, fintech, digital assets and
            high-risk digital businesses. We don&apos;t specialize in industries as categories. We
            specialize in structures that hold under regulatory and banking scrutiny.
          </>
        }
      />

      <section className="octus-section-relative bg-background py-24 md:py-32">
        <BrandSectionMotif position="end" />
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mb-10 flex items-stretch gap-4">
              <div className="octus-story-rail w-0.5 shrink-0 self-stretch min-h-[3.5rem]" />
              <div>
                <p className="label">Market intelligence</p>
                <h2 className="heading-section">Strategic briefs, not category tiles.</h2>
              </div>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {ACTIVE.map((m, i) => (
              <Reveal key={m.title} delayMs={i * 80}>
                <Link href={m.href} className="market-intel-card market-story-card no-underline">
                  <p className="market-intel-card__signal relative z-10">{m.signal}</p>
                  <h3 className="relative z-10 mb-2 font-heading text-xl font-semibold text-foreground">
                    {m.title}
                  </h3>
                  <p className="market-intel-card__constraint relative z-10">{m.constraint}</p>
                  <p className="relative z-10 body-text mb-4 text-sm">{m.desc}</p>
                  <div className="relative z-10 chip-row mb-4">
                    {m.tags.map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="relative z-10 text-[13px] font-medium text-primary">
                    Open market brief →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="octus-section-relative surface-elevated py-24 md:py-32">
        <BrandSectionMotif position="start" />
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="label">Also active in</p>
            <h2 className="heading-section mb-8">Expanding coverage.</h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {ADDITIONAL.map((m, i) => (
              <Reveal key={m.title} delayMs={i * 80}>
                <Link
                  href={m.href}
                  className={`market-intel-card market-story-card no-underline ${
                    m.pressure ? "market-intel-card--pressure" : ""
                  }`}
                >
                  <p className="market-intel-card__signal relative z-10">{m.signal}</p>
                  <h3 className="relative z-10 mb-2 font-heading text-xl font-semibold text-foreground">
                    {m.title}
                  </h3>
                  <p className="market-intel-card__constraint relative z-10">{m.constraint}</p>
                  <p className="relative z-10 body-text mb-4 text-sm">{m.desc}</p>
                  <div className="relative z-10 chip-row mb-4">
                    {m.tags.map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="relative z-10 text-[13px] font-medium text-primary">
                    Open market brief →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <Reveal>
            <div className="mb-6 h-px w-20 accent-cream-bar" aria-hidden="true" />
            <h2 className="heading-section mb-6">Sector expertise is not optional.</h2>
            <p className="body-lg mb-5">
              A compliance framework built for fintech will fail under iGaming audit. A corporate
              structure designed for crypto won&apos;t satisfy a payment institution regulator.
              Every sector has specific regulatory expectations, banking requirements and
              compliance standards.
            </p>
            <p className="body-text">
              We don&apos;t adapt generic solutions. We build structures designed for the specific
              regulatory and banking environment your sector operates in.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="surface-elevated py-24 md:py-32">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="label">Go deeper</p>
          <div className="grid-3">
            {[
              { title: "Jurisdictions", desc: "Where we operate and how.", href: "/jurisdictions" },
              { title: "Solutions", desc: "Full service architecture.", href: "/solutions" },
              { title: "Start a Diagnostic", desc: "Identify what's broken.", href: "/contact" },
            ].map((r) => (
              <Link key={r.title} href={r.href} className="card-grid market-story-card block p-7">
                <h3 className="relative z-10 mb-2 font-sans text-lg font-semibold text-foreground">
                  {r.title}
                </h3>
                <p className="relative z-10 body-sm mb-3">{r.desc}</p>
                <span className="relative z-10 text-[13px] text-primary">Explore →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-block">
        <div className="cta-block__bg" />
        <div className="cta-block__inner">
          <p className="body-text mb-4" style={{ color: "var(--white-40)" }}>
            Operating in a regulated sector without the right structure
          </p>
          <h2 className="heading-lg cta-block__title">is not a risk. It&apos;s a countdown.</h2>
          <a
            href={WHATSAPP_DISCUSS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-10 text-base font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {CTA_DISCUSS_LABEL}
          </a>
          <p className="body-sm cta-block__note" style={{ color: "var(--white-25)" }}>
            We respond within 24 hours.
          </p>
        </div>
      </section>
    </main>
  );
}
