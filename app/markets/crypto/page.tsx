import Link from "next/link";

export const metadata = {
  title: "Crypto & Digital Assets — Octus Consulting",
  description:
    "Crypto operators build technology. Regulators see financial institutions. Octus structures the corporate, compliance and licensing architecture that bridges that gap.",
};

export default function MarketsCryptoPage() {
  return (
    <main>

      <section className="surface-dark relative flex min-h-[70vh] flex-col justify-center pt-24 pb-16 md:min-h-[80vh] md:pt-28 md:pb-24">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <span className="label">Markets · Crypto & Digital Assets</span>
          <h1 className="font-heading text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[3.5rem] sp-headline">
            You built a technology company.
            <br />
            <span style={{ color: "var(--white-40)" }}>
              Regulators see a financial institution.
            </span>
          </h1>
          <p className="text-lg leading-relaxed text-white/60 max-w-2xl" style={{ maxWidth: "620px" }}>
            Exchanges, custodians, token issuers and payment rails are now treated
            as financial institutions. The problem is not your product. It is how
            your operation is classified.
          </p>
          <div style={{ marginTop: "32px" }}>
            <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-10 text-base font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90">
              Discuss your regulatory structure →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <p className="label">The structural gap</p>
          <h2 className="heading-section" style={{ marginBottom: "24px" }}>
            Crypto regulation is not coming. It arrived.
          </h2>
          <p className="body-lg" style={{ marginBottom: "20px" }}>
            There is no global crypto framework. Every jurisdiction creates a
            different failure point.
          </p>
          <p className="body-lg" style={{ marginBottom: "20px" }}>
            Regulation does not block you at entry. It breaks you when you try to
            operate. Accounts get closed. PSPs step back. Transactions get flagged.
            Growth stalls.
          </p>
          <p className="body-lg" style={{ marginBottom: "8px" }}>
            Most failures are triggered by loss of banking or payment continuity.
          </p>
          <p className="body-text">
            Most crypto companies do not fail at product. They fail at structure
            and banking continuity.
          </p>
        </div>
      </section>

      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <p className="label">Where crypto operations fail structurally</p>
          <h2 className="heading-section" style={{ marginBottom: "32px" }}>
            The technology works. The structure does not.
          </h2>
          <div className="grid-auto-lg">
            {[
              {
                title: "Entity design does not match regulatory classification",
                body: "The corporate structure was built for speed, not for how regulators classify the activity. CASP authorisation, VASP registration or financial services licensing each require specific entity design, governance and substance.",
              },
              {
                title: "Compliance is retrofitted",
                body: "AML/KYC, transaction monitoring and travel rule implementation were added after launch, not designed into the operation. Regulators and banking partners reject this.",
              },
              {
                title: "Banking is blocked",
                body: "Crypto operations without clear regulatory status, compliant AML programmes and proper corporate structure cannot access banking. Payment processors apply the same logic.",
              },
              {
                title: "Multi-jurisdiction exposure is uncoordinated",
                body: "The operation serves users across jurisdictions but has no structured approach to where it is regulated, where it needs licensing and where it has exposure.",
              },
            ].map((c) => (
              <div key={c.title} className="card" style={{ padding: "28px" }}>
                <h3 className="text-lg font-semibold text-primary font-sans" style={{ marginBottom: "12px" }}>{c.title}</h3>
                <p className="body-sm text-muted-foreground">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <p className="label">Execution</p>
          <h2 className="heading-section" style={{ marginBottom: "24px" }}>
            We define how your operation is seen by regulators, banks and counterparties.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              "Corporate and operational architecture aligned with regulatory exposure across jurisdictions.",
              "Regulatory positioning — what requires licensing, what requires registration, what requires neither. Per jurisdiction.",
              "Banking and payment continuity — not just onboarding, but resilience. Multiple rails, multiple institutions, structured redundancy.",
              "Compliance systems adapted to transaction-heavy, cross-border environments.",
              "Separation between revenue, custody and risk exposure — the structural logic that banks and regulators evaluate.",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ color: "var(--blue-light)", marginTop: "2px", flexShrink: 0 }}>→</span>
                <p className="body-text">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <p className="label">Current landscape</p>
          <h2 className="heading-section" style={{ marginBottom: "24px" }}>
            Fragmented regulation. Structural consequences.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {[
              "EU (MiCA) — CASP authorisation mandatory. Grandfathering ends July 2026. Passporting across 27 member states. Capital requirements €50k–€150k.",
              "UK — FCA crypto framework in development. New rules expected 2026.",
              "UAE — VASP registration required. Evolving corporate structuring requirements.",
              "Brazil — BACEN oversight. Integration with broader fintech regulation.",
              "Offshore — Accessible but under increasing AML scrutiny. Not sustainable as sole regulatory base.",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ color: "var(--blue-light)", marginTop: "2px", flexShrink: 0 }}>→</span>
                <p className="body-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <p className="label">Fit</p>
          <h2 className="heading-section" style={{ marginBottom: "24px" }}>
            This is for operators building real businesses.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "28px" }}>
            {[
              "Exchanges and trading platforms requiring CASP or equivalent licensing.",
              "Custodians and wallet providers under regulatory pressure.",
              "Token issuers navigating white paper requirements and issuer obligations.",
              "Payment infrastructure companies bridging crypto and fiat.",
              "Crypto-native businesses entering regulated markets for the first time.",
              "Established operators restructuring for MiCA compliance or multi-jurisdiction alignment.",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ color: "var(--blue-light)", marginTop: "2px", flexShrink: 0 }}>→</span>
                <p className="body-sm">{item}</p>
              </div>
            ))}
          </div>
          <p className="body-sm italic text-muted-foreground">
            <strong className="text-primary">Negative qualification:</strong>
            {" "}This is not for early-stage experiments or token launches without operational depth. If you do not need banking stability, regulatory clarity or multi-jurisdiction structure, you do not need this.
          </p>
        </div>
      </section>

      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <p className="label">Related</p>
          <div className="grid-auto-lg">
            {[
              { title: "Compliance-as-a-Service", desc: "Continuous compliance for regulated operations", href: "/solutions/compliance/compliance-as-a-service" },
              { title: "AML/KYC", desc: "Compliance architecture for licensing and banking access", href: "/solutions/compliance/aml-kyc" },
              { title: "Licensing Strategy", desc: "The same structural logic, proven in regulated sectors", href: "/solutions/regulatory/igaming-licensing" },
              { title: "Company Formation", desc: "Corporate structuring across jurisdictions", href: "/solutions/corporate/company-formation" },
              { title: "High-Risk Operations", desc: "When the classification creates structural consequences", href: "/markets/high-risk" },
              { title: "Fintech & Payments", desc: "Adjacent regulatory landscape", href: "/markets/fintech" },
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

      <section className="cta-block">
        <div className="cta-block__bg" />
        <div className="cta-block__inner">
          <p className="body-sm" style={{ color: "var(--white-40)", marginBottom: "16px" }}>
            Structure is the entry point. Without continuous operation, it breaks.
          </p>
          <h2 className="heading-lg cta-block__title">
            Build the structure regulators expect.{" "}
            <span style={{ color: "var(--blue-light)" }}>Not the one you started with.</span>
          </h2>
          <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-10 text-base font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90">
            Discuss your regulatory structure →
          </Link>
          <p className="body-sm cta-block__note" style={{ color: "var(--white-25)" }}>
            We respond within 24 hours.
          </p>
        </div>
      </section>

    </main>
  );
}
