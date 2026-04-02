import Link from "next/link";

export const metadata = {
  title: "Solutions — Regulatory, Compliance & Structuring | Octus",
  description:
    "Full-spectrum regulatory, compliance and corporate structuring. Licensing, AML/KYC, corporate design, audit readiness and cross-border execution.",
};

export default function SolutionsPage() {
  return (
    <main>

      {/* ─── HERO ─── */}
      <section className="surface-dark relative flex min-h-[70vh] flex-col justify-center pt-24 pb-16 md:min-h-[80vh] md:pt-28 md:pb-24">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <span className="label">Solutions</span>
          <h1 className="font-heading text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[3.5rem] sp-headline">
            You don&apos;t need services.
            <br />
            <span style={{ color: "var(--white-40)" }}>
              You need a working structure.
            </span>
          </h1>
          <p className="text-lg leading-relaxed text-white/60 max-w-2xl" style={{ maxWidth: "620px" }}>
            Licensing, compliance, banking, corporate setup. Isolated, none
            of it works. We design and coordinate the entire structure from the
            start, with one point of contact.
          </p>
        </div>
      </section>

      {/* ─── 7 PILLARS ─── */}
      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <p className="label">Core modules</p>
          <h2 className="heading-section" style={{ marginBottom: "40px" }}>
            Seven operational modules. One working structure.
          </h2>
          <div className="tile-grid grid-auto modules-grid">
            {[
              {
                num: "01",
                title: "Regulatory Structuring",
                desc: "Jurisdiction selection, licensing strategy and full regulatory execution. From first filing to approved license.",
                tags: ["Licensing", "Market Entry", "Strategy"],
                href: "/regulatory",
                featured: [
                  { label: "iGaming Licensing", href: "/solutions/regulatory/igaming-licensing" },
                  { label: "Fintech Licensing", href: "/solutions/regulatory/fintech-licensing" },
                  { label: "Market Entry", href: "/solutions/regulatory/market-entry" },
                  { label: "Banking & Payments", href: "/solutions/regulatory/banking-payments" },
                ],
              },
              {
                num: "02",
                title: "Compliance & Risk",
                desc: "Compliance frameworks that survive real scrutiny. Not policies. Working systems.",
                tags: ["AML/KYC", "DPO", "Risk", "Audit"],
                href: "/compliance",
                featured: [
                  { label: "AML & KYC Framework", href: "/solutions/compliance/aml-kyc" },
                  { label: "Compliance-as-a-Service", href: "/solutions/compliance/compliance-as-a-service" },
                  { label: "DPO-as-a-Service", href: "/solutions/compliance/dpo-as-a-service" },
                  { label: "GLI & Certification Readiness", href: "/solutions/compliance/gli-readiness" },
                  { label: "Internal Controls & Governance", href: "/solutions/compliance/internal-controls" },
                ],
              },
              {
                num: "03",
                title: "Legal & Structural Architecture",
                desc: "The legal backbone behind complex operations. Contracts, multi-jurisdiction frameworks and structural design.",
                tags: ["Contracts", "Multi-jurisdiction"],
                href: "/legal-architecture",
                featured: [],
              },
              {
                num: "04",
                title: "Corporate Structuring",
                desc: "Scalable, defensible corporate structures. Onshore, offshore, holding, designed for the operation.",
                tags: ["Incorporation", "Offshore", "Governance"],
                href: "/corporate",
                featured: [
                  { label: "Company Formation", href: "/solutions/corporate/company-formation" },
                  { label: "Offshore Structuring", href: "/solutions/corporate/offshore-structuring" },
                  { label: "Holding Design", href: "/solutions/corporate/holding-design" },
                ],
              },
              {
                num: "05",
                title: "Private Clients & Ownership",
                desc: "Structuring for the individuals behind complex operations. Tax residency, wealth planning and UBO disclosure.",
                tags: ["UBO", "PEP", "Tax Residency"],
                href: "/private-clients",
                featured: [],
              },
              {
                num: "06",
                title: "Audit & Readiness",
                desc: "Prepared for scrutiny before scrutiny arrives. Gap analysis, evidence registers and audit coordination.",
                tags: ["Gap Analysis", "Pre-audit", "GLI"],
                href: "/audit",
                featured: [],
              },
              {
                num: "07",
                title: "International Hub",
                desc: "Execution across jurisdictions. Partner network, vendor coordination and cross-border project management.",
                tags: ["Market Entry", "Cross-border", "Partners"],
                href: "/international-hub",
                featured: [],
              },
            ].map((m) => (
              <div key={m.num} className="card-grid module-card" style={{ padding: "28px" }}>
                <Link href={m.href} style={{ color: "inherit", textDecoration: "none", display: "block" }}>
                  <p className="label module-num">{m.num}</p>
                  <h3 className="heading-card module-title" style={{ marginBottom: "8px" }}>
                    {m.title}
                  </h3>
                  <p className="body-sm module-desc" style={{ marginBottom: "12px" }}>{m.desc}</p>
                  <div className="chip-row module-chips" style={{ marginBottom: m.featured.length > 0 ? "16px" : "0" }}>
                    {m.tags.map((t) => (
                      <span key={t} className="chip">{t}</span>
                    ))}
                  </div>
                </Link>
                {m.featured.length > 0 && (
                  <div style={{ borderTop: "1px solid var(--border-solid)", paddingTop: "12px", marginTop: "4px", marginBottom: "40px", display: "flex", flexDirection: "column", gap: "8px" }}>
                    <p className="label mb-1 text-[9px] text-muted-foreground">Featured</p>
                    {m.featured.map((s) => (
                      <Link key={s.href} href={s.href} style={{ color: "var(--blue-light)", fontSize: "13px" }}>
                        {s.label} →
                      </Link>
                    ))}
                  </div>
                )}
                <Link href={m.href} className="module-arrow" aria-label={`${m.title} — overview`}>
                  →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <h2 className="heading-section" style={{ marginBottom: "24px" }}>
            One structure. One point of contact.
          </h2>
          <p className="body-lg" style={{ marginBottom: "20px" }}>
            Most operators manage 4–5 different advisors across regulatory,
            legal, compliance and corporate. Each works in isolation. None takes
            responsibility for the overall structure.
          </p>
          <p className="body-text">
            Octus acts as lead contractor. We coordinate everything: regulatory
            filing, compliance framework, corporate layer, banking access. As
            a single operation. You don&apos;t manage multiple providers. You
            fix the operation.
          </p>
        </div>
      </section>

      {/* ─── CROSS-LINKS ─── */}
      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <p className="label">Explore by angle</p>
          <div className="grid-3">
            {[
              { title: "By Market", desc: "iGaming, Fintech and more.", href: "/markets" },
              { title: "By Jurisdiction", desc: "Brazil, Curaçao, Malta and more.", href: "/jurisdictions" },
              { title: "Start a Diagnostic", desc: "Identify what's broken in your structure.", href: "/contact" },
            ].map((r) => (
              <Link key={r.title} href={r.href} className="card-grid" style={{ padding: "28px" }}>
                <h3 className="text-lg font-semibold text-primary font-sans" style={{ marginBottom: "8px" }}>{r.title}</h3>
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
          <p className="body-text" style={{ color: "var(--white-40)", marginBottom: "16px" }}>
            Your operation doesn&apos;t need more advisors.
          </p>
          <h2 className="heading-lg cta-block__title">
            Fix the structure before you scale.
          </h2>
          <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-10 text-base font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90">
            Get a structural diagnosis →
          </Link>
          <p className="body-sm cta-block__note" style={{ color: "var(--white-25)" }}>
            We respond within 24 hours.
          </p>
        </div>
      </section>

    </main>
  );
}
