import Link from "next/link";
import { CTA_DISCUSS_LABEL, WHATSAPP_DISCUSS_URL } from "../../lib/cta";
import PageHero from "../../components/system/PageHero";

export const metadata = {
  title: "Industries — High-Risk Regulated Sectors We Structure",
  description:
    "iGaming, fintech, crypto and other high-risk sectors fail for the same structural reason. Octus structures licensing, compliance and banking so the operation holds under scrutiny.",
};

const INDUSTRIES = [
  {
    title: "iGaming & Betting",
    desc: "Licensing, compliance and banking for online gambling and sports betting operators — from Curaçao to Brazil, Malta to Isle of Man.",
    tags: ["Licensing", "Banking", "GLI", "Compliance"],
    href: "/markets/igaming",
  },
  {
    title: "Fintech & Payments",
    desc: "Regulatory structuring for payment institutions, EMIs and fintech operators — banking access, payment infrastructure and cross-border compliance.",
    tags: ["EMI", "Payments", "Banking", "Cross-border"],
    href: "/markets/fintech",
  },
  {
    title: "Crypto & Digital Assets",
    desc: "VASP/CASP registration, MiCA positioning and compliance architecture for exchanges, custodians and token issuers.",
    tags: ["VASP", "MiCA", "AML", "Custody"],
    href: "/markets/crypto",
  },
  {
    title: "High-Risk Operations",
    desc: "Banking resilience and enhanced compliance for operations that banks and regulators classify as high-risk. We make the structure work — not the label go away.",
    tags: ["Banking", "Risk", "Structure", "Access"],
    href: "/markets/high-risk",
  },
];

export default function MarketsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Industries"
        title="High-risk sectors."
        titleSecondLine="One structural discipline."
        description={
          <>
            iGaming, fintech and crypto sit among the most heavily scrutinised sectors in the world.
            They don&apos;t fail because of regulation — they fail because the structure underneath
            doesn&apos;t hold. We specialise in fixing regulated operations, across every high-risk
            industry we work in.
          </>
        }
        primaryCta={{ href: WHATSAPP_DISCUSS_URL, label: CTA_DISCUSS_LABEL, external: true }}
      />

      {/* ─── INDUSTRIES GRID (home-consistent, with brand iconography) ─── */}
      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl md:mb-16">
            <p className="section-label mb-4 block">Where we operate</p>
            <h2 className="heading-section mb-6">The industries we structure.</h2>
            <p className="body-large text-muted-foreground">
              Deep expertise in a few high-risk sectors — not broad coverage of many. Each one
              carries its own regulatory expectations, banking requirements and compliance standards.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            {INDUSTRIES.map((m) => (
              <Link
                key={m.title}
                href={m.href}
                className="group relative block rounded-lg border border-transparent bg-background p-6 transition-all duration-300 hover:border-border md:p-8"
              >
                <svg
                  className="absolute right-6 top-6 h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  aria-hidden
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
                <h3 className="mb-3 pr-10 font-sans text-lg font-semibold text-primary transition-colors group-hover:text-primary/80">
                  {m.title}
                </h3>
                <p className="body-text mb-4">{m.desc}</p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {m.tags.map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>
                <span className="font-sans text-sm text-primary">Explore →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY SECTOR MATTERS ─── */}
      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <p className="section-label mb-4 block">Why the sector matters</p>
          <h2 className="heading-section" style={{ marginBottom: "24px" }}>
            Sector expertise is not optional.
          </h2>
          <p className="body-lg" style={{ marginBottom: "20px" }}>
            A compliance framework built for fintech will fail under iGaming audit. A corporate
            structure designed for crypto won&apos;t satisfy a payment institution regulator. Every
            sector has specific regulatory expectations, banking requirements and compliance
            standards.
          </p>
          <p className="body-text">
            We don&apos;t adapt generic solutions. We build structures designed for the specific
            regulatory and banking environment your sector operates in.
          </p>
        </div>
      </section>

      {/* ─── CROSS-LINKS ─── */}
      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4 block">Go deeper</p>
          <div className="grid gap-6 md:grid-cols-3 md:gap-8">
            {[
              { title: "Jurisdictions", desc: "Where we operate and how.", href: "/jurisdictions" },
              { title: "Solutions", desc: "Full execution architecture.", href: "/solutions" },
              { title: "How we engage", desc: "The way we take on a mandate.", href: "/how-we-engage" },
            ].map((r) => (
              <Link
                key={r.title}
                href={r.href}
                className="group block rounded-lg border border-border bg-background p-6 transition-colors hover:border-primary/50 md:p-8"
              >
                <h3 className="mb-2 font-sans text-lg font-semibold text-primary">{r.title}</h3>
                <p className="body-text mb-3">{r.desc}</p>
                <span className="font-sans text-sm text-primary">Explore →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL ─── */}
      <section className="cta-block">
        <div className="cta-block__bg" />
        <div className="cta-block__inner">
          <p className="body-text" style={{ color: "var(--white-40)", marginBottom: "16px" }}>
            Operating in a regulated sector without the right structure
          </p>
          <h2 className="heading-lg cta-block__title">
            is not a risk. It&apos;s a countdown.
          </h2>
          <a href={WHATSAPP_DISCUSS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-10 text-base font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90">{CTA_DISCUSS_LABEL}</a>
          <p className="body-sm cta-block__note" style={{ color: "var(--white-25)" }}>
            We respond within 24 hours.
          </p>
        </div>
      </section>
    </main>
  );
}
