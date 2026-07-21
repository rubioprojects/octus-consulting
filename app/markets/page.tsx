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
    desc: "Licensing, compliance and banking for online gambling and sports betting operators. From Curaçao to Brazil, Malta to Isle of Man.",
    tags: ["Licensing", "Banking", "GLI", "Compliance"],
    href: "/markets/igaming",
  },
  {
    title: "Fintech & Payments",
    desc: "Regulatory structuring for payment institutions, EMIs and fintech operators. Banking access, compliance frameworks and cross-border licensing.",
    tags: ["EMI", "Payments", "Banking", "Cross-border"],
    href: "/markets/fintech",
  },
] as const;

const ADDITIONAL = [
  {
    title: "Crypto & Digital Assets",
    desc: "VASP registration, regulatory positioning and compliance architecture for crypto exchanges, custodians and token issuers.",
    tags: ["VASP", "MiCA", "AML", "Custody"],
    href: "/markets/crypto",
  },
  {
    title: "High-Risk Digital Businesses",
    desc: "Structural and compliance solutions for businesses that banks and regulators classify as high-risk. We make the structure work — not the label go away.",
    tags: ["Banking", "Risk", "Structure", "Compliance"],
    href: "/markets/high-risk",
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
            Whether it&apos;s iGaming, fintech or crypto, regulated operations fail for the same
            reason: the structure doesn&apos;t hold. We don&apos;t specialize in industries. We
            specialize in fixing regulated operations.
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
                <p className="label">Active markets</p>
                <h2 className="heading-section">Deep expertise, not broad coverage.</h2>
              </div>
            </div>
          </Reveal>
          <div className="grid-auto-lg">
            {ACTIVE.map((m, i) => (
              <Reveal key={m.title} delayMs={i * 80}>
                <Link href={m.href} className="card-grid market-story-card block p-8">
                  <h3 className="relative z-10 mb-3 font-sans text-lg font-semibold text-primary">
                    {m.title}
                  </h3>
                  <p className="relative z-10 body-sm mb-4">{m.desc}</p>
                  <div className="relative z-10 chip-row mb-4">
                    {m.tags.map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="relative z-10 text-[13px] text-primary">Learn more →</span>
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
          <div className="grid-auto-lg">
            {ADDITIONAL.map((m, i) => (
              <Reveal key={m.title} delayMs={i * 80}>
                <Link href={m.href} className="card-grid market-story-card block p-8">
                  <h3 className="relative z-10 mb-3 font-sans text-lg font-semibold text-primary">
                    {m.title}
                  </h3>
                  <p className="relative z-10 body-sm mb-4">{m.desc}</p>
                  <div className="relative z-10 chip-row mb-4">
                    {m.tags.map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="relative z-10 text-[13px] text-primary">Learn more →</span>
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
                <h3 className="relative z-10 mb-2 font-sans text-lg font-semibold text-primary">
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
