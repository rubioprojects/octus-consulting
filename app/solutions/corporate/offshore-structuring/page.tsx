import Link from "next/link";

export const metadata = {
  title: "Offshore Structuring — Octus Consulting",
  description:
    "Offshore structuring for regulated operations is not about tax. It is about corporate architecture that passes regulatory, banking and institutional scrutiny.",
};

export default function OffshoreStructuringPage() {
  return (
    <main>
      <section className="page-hero section-padded">
        <div className="container">
          <span className="label">Solutions · Corporate · Offshore Structuring</span>
          <h1 className="heading-xl sp-headline">
            Offshore is not a destination.
            <br />
            <span style={{ color: "var(--white-40)" }}>It is an architectural decision.</span>
          </h1>
          <p className="body-lg sp-sub" style={{ maxWidth: "660px" }}>
            A structure built for one purpose — tax, speed, privacy — fails when
            tested by regulators, banks and institutional counterparties.
            Offshore structuring for regulated operations requires design that
            satisfies all three simultaneously.
          </p>
          <div style={{ marginTop: "32px" }}>
            <Link href="/contact" className="btn-primary btn-primary-lg">
              Request a structural assessment →
            </Link>
          </div>
        </div>
      </section>

      <section className="section-dark section-padded">
        <div className="container" style={{ maxWidth: "760px" }}>
          <p className="label">Problem</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              "The entity exists on paper but has no operational substance. Regulators reject this.",
              "The offshore jurisdiction triggers enhanced due diligence at every banking touchpoint.",
              "What works for one entity breaks when the operation expands across jurisdictions.",
              "Nominee directors, virtual offices and mailbox registrations create flags that compound.",
            ].map((item) => (
              <div key={item} className="card" style={{ padding: "20px 24px" }}>
                <p className="body">{item}</p>
              </div>
            ))}
          </div>
          <p className="body" style={{ marginTop: "24px" }}>
            Structures built for incorporation fail under scrutiny. The structure
            that was supposed to enable the operation becomes the reason it stalls.
          </p>
        </div>
      </section>

      <section className="section-padded">
        <div className="container" style={{ maxWidth: "760px" }}>
          <p className="label">What we actually build</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {[
              ["Jurisdiction selection", "Offshore, onshore and hybrid structures assessed against regulatory requirements, banking access and institutional acceptance."],
              ["Entity design", "Holding, operating and special purpose entities structured for the operation's actual needs. Not shelf companies."],
              ["Governance and substance", "Director appointments, management structure, operational presence designed to satisfy regulatory and banking scrutiny."],
              ["UBO and ownership", "Beneficial ownership alignment across entities and jurisdictions. Transparent, defensible, audit-ready."],
              ["Cross-border coordination", "Inter-company agreements, transfer pricing, flow of funds designed for compliance across jurisdictions."],
            ].map(([title, body]) => (
              <div key={title}>
                <h3 className="heading-card" style={{ marginBottom: "8px" }}>{title}</h3>
                <p className="body">{body}</p>
              </div>
            ))}
          </div>
          <p className="body" style={{ marginTop: "24px", color: "var(--white)" }}>
            Offshore structuring is not about where you incorporate. It is about whether the structure holds when institutions test it.
          </p>
        </div>
      </section>

      <section className="section-dark section-padded">
        <div className="container" style={{ maxWidth: "760px" }}>
          <p className="label">Consequence</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              "Banking refused because the jurisdiction or structure creates unacceptable risk.",
              "Licensing delayed or rejected due to insufficient substance.",
              "Regulatory action when supervisors question who controls the operation.",
              "Forced restructuring under pressure — always more expensive than doing it right.",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ color: "var(--blue-light)", marginTop: "2px", flexShrink: 0 }}>→</span>
                <p className="body">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padded">
        <div className="container" style={{ maxWidth: "760px" }}>
          <p className="label">Qualification</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "28px" }}>
            {[
              "Operating across multiple jurisdictions with regulatory exposure.",
              "Current structure creating problems at banking, licensing or due diligence.",
              "Restructuring from a formation-of-convenience to a defensible design.",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ color: "var(--blue-light)", marginTop: "2px", flexShrink: 0 }}>→</span>
                <p className="body">{item}</p>
              </div>
            ))}
          </div>
          <h3 className="heading-card" style={{ marginBottom: "12px" }}>Not for you if</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              "Purpose is tax avoidance without operational substance.",
              "Looking for the cheapest jurisdiction with no scrutiny requirements.",
              "No intention to satisfy regulatory or banking standards.",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ color: "var(--white-40)", marginTop: "2px", flexShrink: 0 }}>—</span>
                <p className="body" style={{ color: "var(--white-40)" }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark section-padded">
        <div className="container">
          <p className="label">Related</p>
          <p className="body-sm" style={{ marginBottom: "20px", color: "var(--white-40)" }}>
            Where offshore structures are anchored:{" "}
            <Link href="/jurisdictions/anjouan" style={{ color: "var(--blue-light)" }}>Anjouan</Link>
            {" · "}
            <Link href="/jurisdictions/uae" style={{ color: "var(--blue-light)" }}>UAE</Link>
          </p>
          <div className="grid-auto-lg">
            {[
              { title: "Company Formation", desc: "Company Formation", href: "/solutions/corporate/company-formation" },
              { title: "Holding Design", desc: "Holding Design", href: "/solutions/corporate/holding-design" },
              { title: "Banking & Payments", desc: "Banking & Payments", href: "/solutions/regulatory/banking-payments" },
              { title: "Market Entry", desc: "Market Entry", href: "/solutions/regulatory/market-entry" },
              { title: "High-Risk Operations", desc: "High-Risk Operations", href: "/markets/high-risk" },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="card-grid" style={{ padding: "28px" }}>
                <h3 className="heading-card" style={{ marginBottom: "8px" }}>{item.title}</h3>
                <p className="body-sm" style={{ marginBottom: "12px" }}>{item.desc}</p>
                <span style={{ color: "var(--blue-light)", fontSize: "13px" }}>Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-block">
        <div className="cta-block__bg" />
        <div className="cta-block__inner">
          <p className="body" style={{ color: "var(--white-40)", marginBottom: "16px" }}>
            If your structure was built for incorporation, it will fail under regulation.
          </p>
          <h2 className="heading-lg cta-block__title">
            Build it for scrutiny. Not for convenience.
          </h2>
          <Link href="/contact" className="btn-primary btn-primary-lg">
            Request a structural assessment →
          </Link>
        </div>
      </section>
    </main>
  );
}
