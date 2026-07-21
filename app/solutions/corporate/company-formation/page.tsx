import Link from "next/link";
import { CTA_DISCUSS_LABEL, WHATSAPP_DISCUSS_URL } from "../../../../lib/cta";

export const metadata = {
  title: "Company Formation & Corporate Structuring | Octus",
  description:
    "Company incorporation, offshore structuring and corporate design for regulated operations. Entity setup that satisfies regulators, banks and payment processors.",
};

export default function SolutionsCompanyFormationPage() {
  return (
    <main>

      {/* ─── HERO ─── */}
      <section className="surface-dark relative flex min-h-[70vh] flex-col justify-center pt-24 pb-16 md:min-h-[80vh] md:pt-28 md:pb-24">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <span className="label">Solutions · Corporate · Company Formation</span>
          <h1 className="font-heading text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[3.5rem] sp-headline">
            The entity is not administrative.
            <br />
            <span style={{ color: "var(--white-40)" }}>
              It&apos;s the foundation of the entire operation.
            </span>
          </h1>
          <p className="text-lg leading-relaxed text-white/60 max-w-2xl" style={{ maxWidth: "640px" }}>
            Most operators incorporate first and regulate later. Then they
            discover the entity type is wrong, the jurisdiction doesn&apos;t
            support the license, and the bank won&apos;t onboard the structure.
            We design it right from the start.
          </p>
          <div style={{ marginTop: "32px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a href={WHATSAPP_DISCUSS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-10 text-base font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90">{CTA_DISCUSS_LABEL}</a>
            <Link
              href="/corporate"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 bg-transparent px-10 text-base font-medium text-white/80 transition-colors hover:border-white/40 hover:text-white"
            >
              Full corporate services →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── THE REAL PROBLEM ─── */}
      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <h2 className="heading-section" style={{ marginBottom: "24px" }}>
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
            className="heading-sm text-foreground"
            style={{ borderTop: "1px solid var(--border-solid)", paddingTop: "24px", marginTop: "8px" }}
          >
            The company was formed.{" "}
            <span className="text-primary">The structure wasn&apos;t.</span>
          </p>
        </div>
      </section>

      {/* ─── WHAT WE DO ─── */}
      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <p className="label">What Octus delivers</p>
          <h2 className="heading-section" style={{ marginBottom: "40px" }}>
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
          <p className="label">Where we incorporate</p>
          <h2 className="heading-section" style={{ marginBottom: "24px" }}>
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
      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <p className="label">Related</p>
          <div className="grid-3">
            {[
              { title: "Corporate Structuring", desc: "Full corporate services overview.", href: "/corporate" },
              { title: "Curaçao Licensing", desc: "Entity design for Curaçao operations.", href: "/jurisdictions/curacao" },
              { title: "Malta Licensing", desc: "Corporate substance for MGA requirements.", href: "/jurisdictions/malta" },
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
            A company is easy to form. A structure is not.
          </p>
          <h2 className="heading-lg cta-block__title">
            Build the structure. Not just the entity.
          </h2>
          <a href={WHATSAPP_DISCUSS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-10 text-base font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90">{CTA_DISCUSS_LABEL}</a>
          <p className="body-sm cta-block__note" style={{ color: "var(--white-25)" }}>
            We respond within 24 hours.
          </p>
        </div>
      </section>

    </main>
  );
}
