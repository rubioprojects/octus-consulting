import Link from "next/link";

export const metadata = {
  title: "Markets — Regulated Sectors We Structure | Octus",
  description:
    "We structure operations in iGaming, fintech, crypto and high-risk digital sectors. Licensing, compliance and corporate architecture for regulated markets.",
};

export default function MarketsPage() {
  return (
    <main>

      {/* ─── HERO ─── */}
      <section className="page-hero section-padded">
        <div className="container">
          <span className="label">Markets</span>
          <h1 className="heading-xl sp-headline">
            Different industries.{" "}
            <span style={{ color: "var(--white-40)" }}>
              Same structural problem.
            </span>
          </h1>
          <p className="body-lg sp-sub" style={{ maxWidth: "620px" }}>
            Whether it&apos;s iGaming, fintech or crypto, regulated operations
            fail for the same reason: the structure doesn&apos;t hold. We
            don&apos;t specialize in industries. We specialize in fixing
            regulated operations.
          </p>
        </div>
      </section>

      {/* ─── ACTIVE MARKETS (linkable) ─── */}
      <section className="section-padded">
        <div className="container">
          <p className="label">Active markets</p>
          <h2 className="heading-md" style={{ marginBottom: "40px" }}>
            Deep expertise, not broad coverage.
          </h2>
          <div className="grid-auto-lg">
            {[
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
            ].map((m) => (
              <Link key={m.title} href={m.href} className="card-grid" style={{ padding: "32px" }}>
                <h3 className="heading-card" style={{ marginBottom: "12px" }}>{m.title}</h3>
                <p className="body-sm" style={{ marginBottom: "16px" }}>{m.desc}</p>
                <div className="chip-row" style={{ marginBottom: "16px" }}>
                  {m.tags.map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>
                <span style={{ color: "var(--blue-light)", fontSize: "13px" }}>Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ADDITIONAL MARKETS ─── */}
      <section className="section-dark section-padded">
        <div className="container">
          <p className="label">Also active in</p>
          <h2 className="heading-md" style={{ marginBottom: "32px" }}>
            Expanding coverage.
          </h2>
          <div className="grid-auto-lg">
            {[
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
            ].map((m) => (
              <Link key={m.title} href={m.href} className="card-grid" style={{ padding: "32px" }}>
                <h3 className="heading-card" style={{ marginBottom: "12px" }}>{m.title}</h3>
                <p className="body-sm" style={{ marginBottom: "16px" }}>{m.desc}</p>
                <div className="chip-row" style={{ marginBottom: "16px" }}>
                  {m.tags.map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>
                <span style={{ color: "var(--blue-light)", fontSize: "13px" }}>Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY SECTOR MATTERS ─── */}
      <section className="section-padded">
        <div className="container" style={{ maxWidth: "760px" }}>
          <h2 className="heading-md" style={{ marginBottom: "24px" }}>
            Sector expertise is not optional.
          </h2>
          <p className="body-lg" style={{ marginBottom: "20px" }}>
            A compliance framework built for fintech will fail under iGaming
            audit. A corporate structure designed for crypto won&apos;t satisfy
            a payment institution regulator. Every sector has specific
            regulatory expectations, banking requirements and compliance
            standards.
          </p>
          <p className="body">
            We don&apos;t adapt generic solutions. We build structures designed
            for the specific regulatory and banking environment your sector
            operates in.
          </p>
        </div>
      </section>

      {/* ─── CROSS-LINKS ─── */}
      <section className="section-dark section-padded">
        <div className="container">
          <p className="label">Go deeper</p>
          <div className="grid-3">
            {[
              { title: "Jurisdictions", desc: "Where we operate and how.", href: "/jurisdictions" },
              { title: "Solutions", desc: "Full service architecture.", href: "/solutions" },
              { title: "Start a Diagnostic", desc: "Identify what's broken.", href: "/contact" },
            ].map((r) => (
              <Link key={r.title} href={r.href} className="card-grid" style={{ padding: "28px" }}>
                <h3 className="heading-card" style={{ marginBottom: "8px" }}>{r.title}</h3>
                <p className="body-sm" style={{ marginBottom: "12px" }}>{r.desc}</p>
                <span style={{ color: "var(--blue-light)", fontSize: "13px" }}>Explore →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL ─── */}
      <section className="cta-block">
        <div className="cta-block__bg" />
        <div className="cta-block__inner">
          <p className="body" style={{ color: "var(--white-40)", marginBottom: "16px" }}>
            Operating in a regulated sector without the right structure
          </p>
          <h2 className="heading-lg cta-block__title">
            is not a risk. It&apos;s a countdown.
          </h2>
          <Link href="/contact" className="btn-primary btn-primary-lg">
            Understand what&apos;s broken →
          </Link>
          <p className="body-sm cta-block__note" style={{ color: "var(--white-25)" }}>
            We respond within 24 hours.
          </p>
        </div>
      </section>

    </main>
  );
}
