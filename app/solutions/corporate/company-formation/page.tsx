import Link from "next/link";

export const metadata = {
  title: "Company Formation & Corporate Structuring | Octus",
  description:
    "Company incorporation, offshore structuring and corporate design for regulated operations. Entity setup that satisfies regulators, banks and payment processors.",
};

export default function SolutionsCompanyFormationPage() {
  return (
    <main>

      {/* ─── HERO ─── */}
      <section className="page-hero section-padded">
        <div className="container">
          <span className="label">Solutions · Corporate · Company Formation</span>
          <h1 className="heading-xl sp-headline">
            The entity is not administrative.
            <br />
            <span style={{ color: "var(--white-40)" }}>
              It&apos;s the foundation of the entire operation.
            </span>
          </h1>
          <p className="body-lg sp-sub" style={{ maxWidth: "640px" }}>
            Most operators incorporate first and regulate later. Then they
            discover the entity type is wrong, the jurisdiction doesn&apos;t
            support the license, and the bank won&apos;t onboard the structure.
            We design it right from the start.
          </p>
          <div style={{ marginTop: "32px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary btn-primary-lg">
              Fix your corporate structure →
            </Link>
            <Link href="/corporate" className="btn-ghost">
              Full corporate services →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── THE REAL PROBLEM ─── */}
      <section className="section-dark section-padded">
        <div className="container" style={{ maxWidth: "760px" }}>
          <h2 className="heading-md" style={{ marginBottom: "24px" }}>
            Why most corporate structures fail.
          </h2>
          <p className="body-lg" style={{ marginBottom: "20px" }}>
            An accountant sets up a company. A broker suggests a jurisdiction.
            A lawyer files the paperwork. Nobody asks whether the entity type,
            the ownership disclosure, the governance model and the banking
            requirements are aligned with each other, and with the regulatory
            environment the operation needs to function in.
          </p>
          <p className="body-lg" style={{ marginBottom: "20px" }}>
            Six months later, the bank rejects the structure. The regulator
            asks for a different entity type. The payment processor won&apos;t
            onboard because the UBO disclosure doesn&apos;t match.
          </p>
          <p
            className="heading-sm"
            style={{ color: "var(--white)", borderTop: "1px solid var(--border)", paddingTop: "24px", marginTop: "8px" }}
          >
            The company was formed.{" "}
            <span style={{ color: "var(--blue-light)" }}>The structure wasn&apos;t.</span>
          </p>
        </div>
      </section>

      {/* ─── WHAT WE DO ─── */}
      <section className="section-padded">
        <div className="container">
          <p className="label">What Octus delivers</p>
          <h2 className="heading-md" style={{ marginBottom: "40px" }}>
            Corporate design for regulated operations.
          </h2>
          <div className="grid-auto-lg">
            {[
              {
                title: "Entity selection & incorporation",
                desc: "The right entity type for the right jurisdiction. N.V., B.V., Ltd, LLC, selected for the regulatory and banking environment, not for convenience.",
              },
              {
                title: "Offshore & onshore structuring",
                desc: "Operating entities, holding companies, IP vehicles, designed as an integrated structure, not isolated legal shells.",
              },
              {
                title: "Holding & group architecture",
                desc: "Multi-entity structures with clear governance, defensible ownership chains and operational logic that regulators and banks understand.",
              },
              {
                title: "UBO & ownership disclosure",
                desc: "Ultimate beneficial ownership structured for transparency. PEP considerations, nominee arrangements and disclosure requirements aligned across jurisdictions.",
              },
              {
                title: "Banking-ready documentation",
                desc: "Corporate documents, governance resolutions, AML policies and commercial substance, prepared for banking onboarding from day one.",
              },
              {
                title: "Governance & operational setup",
                desc: "Board structures, signing authorities, operational procedures and internal controls that satisfy both regulators and banking partners.",
              },
            ].map((item) => (
              <div key={item.title} className="card" style={{ padding: "28px" }}>
                <h3 className="heading-card" style={{ marginBottom: "12px" }}>{item.title}</h3>
                <p className="body-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SELECTED MANDATES ─── */}
      <section className="section-dark section-padded">
        <div className="container" style={{ maxWidth: "760px" }}>
          <p className="label">Selected mandates</p>
          <h2 className="heading-md" style={{ marginBottom: "32px" }}>
            Real operations. Real outcomes.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {[
              {
                title: "iGaming group — multi-entity restructuring",
                body: "3 operating entities across Curaçao and Malta with holding in BVI. Restructured ownership chain, governance framework and banking documentation. All entities operational within 90 days.",
              },
              {
                title: "Fintech — Brazil + offshore dual structure",
                body: "Brazilian operational entity (LTDA) connected to offshore holding. Structured for BACEN requirements and international banking simultaneously.",
              },
              {
                title: "Crypto exchange — entity migration",
                body: "Migrated corporate structure from incompatible jurisdiction to one aligned with VASP registration requirements. Banking restored after restructuring.",
              },
            ].map((m, i) => (
              <div
                key={i}
                style={{
                  padding: "24px 0",
                  borderBottom: i < 2 ? "1px solid var(--border)" : "none",
                }}
              >
                <h3 className="heading-card" style={{ marginBottom: "8px", color: "var(--white)" }}>
                  {m.title}
                </h3>
                <p className="body" style={{ color: "var(--white-60)" }}>{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── JURISDICTIONS ─── */}
      <section className="section-padded">
        <div className="container" style={{ maxWidth: "760px" }}>
          <p className="label">Where we incorporate</p>
          <h2 className="heading-md" style={{ marginBottom: "24px" }}>
            Active corporate jurisdictions.
          </h2>
          <div className="chip-row" style={{ gap: "10px", flexWrap: "wrap" }}>
            {["Curaçao", "Malta", "BVI", "Cayman Islands", "UK", "Portugal", "Brazil", "UAE", "Cyprus", "Panama", "Isle of Man"].map((j) => (
              <span key={j} className="chip-juris">{j}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CROSS-LINKS ─── */}
      <section className="section-dark section-padded">
        <div className="container">
          <p className="label">Related</p>
          <div className="grid-3">
            {[
              { title: "Corporate Structuring", desc: "Full corporate services overview.", href: "/corporate" },
              { title: "Curaçao Licensing", desc: "Entity design for Curaçao operations.", href: "/jurisdictions/curacao" },
              { title: "Malta Licensing", desc: "Corporate substance for MGA requirements.", href: "/jurisdictions/malta" },
            ].map((r) => (
              <Link key={r.title} href={r.href} className="card-grid" style={{ padding: "28px" }}>
                <h3 className="heading-card" style={{ marginBottom: "8px" }}>{r.title}</h3>
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
          <p className="body" style={{ color: "var(--white-40)", marginBottom: "16px" }}>
            A company is easy to form. A structure is not.
          </p>
          <h2 className="heading-lg cta-block__title">
            Build the structure. Not just the entity.
          </h2>
          <Link href="/contact" className="btn-primary btn-primary-lg">
            Get a corporate diagnosis →
          </Link>
          <p className="body-sm cta-block__note" style={{ color: "var(--white-25)" }}>
            We respond within 24 hours.
          </p>
        </div>
      </section>

    </main>
  );
}
