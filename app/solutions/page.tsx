import Link from "next/link";

export const metadata = {
  title: "Solutions — Octus Consulting",
  description: "Execution capabilities across regulated operations. Regulatory & Licensing, Compliance & Risk, Corporate Structuring, Operational Implementation.",
};

const pillars = [
  {
    num: "01",
    title: "Regulatory & Licensing",
    desc: "We design and execute licensing strategies across jurisdictions — from initial application through post-license operations and ongoing regulatory coordination.",
    entries: ["Licensing strategy and pathway design", "Regulatory applications and dossier preparation", "Direct coordination with regulatory authorities", "Post-license structuring and compliance", "Stakeholder and authority engagement", "Regulatory transition management"],
    markets: ["iGaming", "Fintech", "Crypto", "Payments"],
  },
  {
    num: "02",
    title: "Compliance & Risk",
    desc: "We structure compliance frameworks that hold under real regulatory pressure, audit and operational scrutiny — not just documentation that exists on paper.",
    entries: ["KYC and AML framework design", "Data protection and DPO structuring", "Ongoing compliance operations (CO as a service)", "Audit readiness and gap analysis", "GLI and laboratory certification preparation", "Risk assessment and mitigation"],
    markets: ["KYC", "AML", "DPO", "GLI", "GDPR", "LGPD"],
  },
  {
    num: "03",
    title: "Corporate Structuring",
    desc: "We build scalable, defensible corporate structures — onshore, offshore and cross-border — designed for regulatory environments and operational complexity.",
    entries: ["Corporate architecture and entity design", "Holding and subsidiary structuring", "Ownership and UBO structuring", "Governance frameworks", "Group restructuring for compliance or scale", "Residency and domiciliation"],
    markets: ["Onshore", "Offshore", "Governance", "UBO", "Multi-jurisdiction"],
  },
  {
    num: "04",
    title: "Operational Implementation",
    desc: "We coordinate banking, payment infrastructure, market entry and the operational layers required for a regulated business to actually function.",
    entries: ["Banking and payment access coordination", "PSP and payment infrastructure structuring", "Market entry strategy and execution", "Cross-border operational coordination", "Supplier and vendor structuring", "Operational readiness assessment"],
    markets: ["Banking", "PSP", "Market entry", "Cross-border"],
  },
];

export default function SolutionsPage() {
  return (
    <main>
      <section className="page-hero section-padded">
        <div className="container">
          <span className="label">Solutions</span>
          <h1 className="heading-xl sp-headline">
            Execution capabilities
            <br />
            <span style={{ color: "var(--white-40)" }}>across regulated operations.</span>
          </h1>
          <p className="body-lg sp-sub" style={{ maxWidth: "640px" }}>
            Four consolidated capability pillars. Each one designed to work
            as part of a single coordinated structure — not as isolated services.
          </p>
        </div>
      </section>

      {pillars.map((p, i) => (
        <section key={p.num} className={i % 2 === 0 ? "section-dark section-padded" : "section-padded"} style={{ padding: "100px 40px" }}>
          <div className="container">
            <div className="grid-2" style={{ gap: "60px" }}>
              <div>
                <span className="label" style={{ color: "var(--blue-light)" }}>{p.num}</span>
                <h2 className="heading-md" style={{ marginBottom: "20px" }}>{p.title}</h2>
                <p className="body-lg" style={{ marginBottom: "24px" }}>{p.desc}</p>
                <div className="chip-row" style={{ flexWrap: "wrap" }}>
                  {p.markets.map((m) => (
                    <span key={m} className="chip-blue">{m}</span>
                  ))}
                </div>
              </div>
              <div>
                <ul className="check-list">
                  {p.entries.map((e) => (
                    <li key={e}>{e}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="cta-block">
        <div className="cta-block__bg" />
        <div className="cta-block__inner">
          <h2 className="heading-lg cta-block__title">
            Your operation needs structure, not more providers.
          </h2>
          <Link href="/contact" className="btn-primary btn-primary-lg">
            Request a strategic assessment →
          </Link>
        </div>
      </section>
    </main>
  );
}
