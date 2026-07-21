import Link from "next/link";
import { CTA_DISCUSS_LABEL, WHATSAPP_DISCUSS_URL } from "../../../lib/cta";

export const metadata = {
  title: "Fintech & Payments — Regulatory Structuring | Octus",
  description:
    "Licensing, compliance and banking coordination for fintech operators, payment institutions and EMIs across jurisdictions.",
};

export default function MarketsFintechPage() {
  return (
    <main>

      {/* ─── HERO ─── */}
      <section className="surface-dark relative flex min-h-[70vh] flex-col justify-center pt-24 pb-16 md:min-h-[80vh] md:pt-28 md:pb-24">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <span className="label">Markets · Fintech & Payments</span>
          <h1 className="font-heading text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[3.5rem] sp-headline">
            Building a fintech is hard.
            <br />
            <span style={{ color: "var(--white-40)" }}>
              Getting it regulated shouldn&apos;t be the part that kills it.
            </span>
          </h1>
          <p className="text-lg leading-relaxed text-white/60 max-w-2xl" style={{ maxWidth: "620px" }}>
            Payment institutions, EMIs, remittance platforms, all need
            regulatory approval, banking access and compliance frameworks
            that actually work. Most fintech founders discover this too late.
          </p>
          <div style={{ marginTop: "32px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a href={WHATSAPP_DISCUSS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-10 text-base font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90">{CTA_DISCUSS_LABEL}</a>
            <Link
              href="/solutions"
              className="inline-flex h-12 items-center justify-center rounded-sm border border-white/20 bg-transparent px-10 text-base font-medium text-white/80 transition-colors hover:border-white/40 hover:text-white"
            >
              See our solutions →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── PROBLEM ─── */}
      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <h2 className="heading-section" style={{ marginBottom: "24px" }}>
            The fintech regulatory trap.
          </h2>
          <p className="body-lg" style={{ marginBottom: "20px" }}>
            You build the product. You raise capital. You find users. Then you
            discover you need a license you don&apos;t have, a compliance
            framework you never built, and a banking partner that won&apos;t
            onboard you because your corporate structure doesn&apos;t match
            their risk appetite.
          </p>
          <p className="body-lg" style={{ marginBottom: "20px" }}>
            The product worked. The structure around it didn&apos;t.
          </p>
          <p
            className="heading-sm text-foreground"
            style={{ borderTop: "1px solid var(--border-solid)", paddingTop: "24px", marginTop: "8px" }}
          >
            Regulation is not the blocker.{" "}
            <span className="text-primary">Bad structure is.</span>
          </p>
        </div>
      </section>

      {/* ─── WHAT WE DO ─── */}
      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <p className="label">What Octus does for fintech operators</p>
          <h2 className="heading-section" style={{ marginBottom: "40px" }}>
            Structure that survives regulators and banks.
          </h2>
          <div className="grid-auto-lg">
            {[
              {
                title: "EMI & payment institution licensing",
                desc: "We design the regulatory strategy, prepare the full dossier and coordinate with the regulator, onshore and offshore.",
              },
              {
                title: "Banking & PSP access",
                desc: "We align corporate structure, compliance documentation and AML framework with banking requirements. Licensed and bankable.",
              },
              {
                title: "Compliance architecture",
                desc: "KYC/AML, transaction monitoring, DPO, regulatory reporting, built as a working system, not a document set.",
              },
              {
                title: "Corporate & entity design",
                desc: "Holding structures, operational entities, cross-border setups, designed for both the regulator and the banking layer.",
              },
              {
                title: "Cross-border structuring",
                desc: "Multi-jurisdiction operations need unified compliance and coordinated corporate structure. We build that.",
              },
              {
                title: "BACEN & Brazilian market entry",
                desc: "Payment institutions, SCDs, SCFIs: regulatory structuring for the Brazilian financial market with local coordination.",
              },
            ].map((item) => (
              <div key={item.title} className="card" style={{ padding: "28px" }}>
                <h3 className="text-lg font-semibold text-primary font-sans" style={{ marginBottom: "12px" }}>{item.title}</h3>
                <p className="body-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SELECTED MANDATES ─── */}
      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <p className="label">Selected mandates</p>
          <h2 className="heading-section" style={{ marginBottom: "32px" }}>
            Real operations. Real outcomes.
          </h2>
          <div className="grid gap-6 md:grid-cols-1">
            {[
              {
                title: "Remittance platform — multi-jurisdiction",
                body: "Regulatory structuring across 3 jurisdictions. EMI licensing, compliance framework and banking coordination delivered as a single project.",
              },
              {
                title: "Payment institution — Brazil (BACEN)",
                body: "Full regulatory dossier and corporate structuring for BACEN authorization. Direct coordination with local legal partners.",
              },
              {
                title: "Crypto-to-fiat bridge — banking recovery",
                body: "Operator rejected by 4 banks. We restructured AML framework, realigned corporate layer and coordinated banking onboarding. Operational accounts restored.",
              },
            ].map((m, i) => (
              <div
                key={i}
                className="flex flex-col rounded-lg border border-y border-r border-border/50 border-l-[3px] border-l-primary bg-background p-6 md:p-8"
              >
                <h3 className="mb-4 font-sans text-lg font-semibold text-primary">{m.title}</h3>
                <p className="body-text">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── JURISDICTIONS ─── */}
      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <p className="label">Where we operate</p>
          <h2 className="heading-section" style={{ marginBottom: "24px" }}>
            Active fintech jurisdictions.
          </h2>
          <div className="chip-row" style={{ gap: "10px", flexWrap: "wrap" }}>
            {["Brazil (BACEN)", "UK (FCA)", "Malta (MFSA)", "Portugal", "Curaçao", "Cyprus", "BVI", "Cayman Islands", "UAE"].map((j) => (
              <span key={j} className="chip-juris">{j}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CROSS-LINKS ─── */}
      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <p className="label">Go deeper</p>
          <div className="grid-3">
            {[
              { title: "iGaming Operations", desc: "Our largest sector by volume.", href: "/markets/igaming" },
              { title: "AML & KYC Framework", desc: "Compliance that holds under scrutiny.", href: "/solutions/compliance/aml-kyc" },
              { title: "Corporate Structuring", desc: "Entity design for regulated operations.", href: "/corporate" },
            ].map((r) => (
              <Link key={r.title} href={r.href} className="card-grid" style={{ padding: "28px" }}>
                <h3 className="text-lg font-semibold text-primary font-sans" style={{ marginBottom: "8px" }}>{r.title}</h3>
                <p className="body-sm" style={{ marginBottom: "12px" }}>{r.desc}</p>
                <span style={{ color: "var(--blue-light)", fontSize: "13px" }}>Learn more →</span>
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
            Your fintech is only as strong as its regulatory foundation.
          </p>
          <h2 className="heading-lg cta-block__title">
            Build the structure right. Then move fast.
          </h2>
          <Link href="/diagnostic" className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-10 text-base font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90">
            Start your fintech diagnostic →
          </Link>
          <p className="body-sm cta-block__note" style={{ color: "var(--white-25)" }}>
            We respond within 24 hours.
          </p>
        </div>
      </section>

    </main>
  );
}
