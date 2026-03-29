import Link from "next/link";

export const metadata = {
  title: "Markets — Octus Consulting",
  description: "Markets where regulation, banking, licensing and structure directly affect viability. iGaming, Fintech, Crypto and cross-border operations.",
};

const markets = [
  {
    id: "igaming",
    name: "iGaming",
    tension: "One of the most structurally demanding regulated sectors globally. Licensing, certification, banking access, PSP structure and post-license governance all interact simultaneously.",
    risks: ["Licensing delays from structural gaps", "Banking rejection due to AML misalignment", "Certification failure from incomplete evidence", "Post-license operational collapse"],
    where: ["Licensing strategy and regulatory applications", "GLI and certification readiness", "PSP and banking structuring", "Post-license compliance and governance", "Cross-border operational coordination"],
  },
  {
    id: "fintech",
    name: "Fintech",
    tension: "Payment institutions, lending platforms and financial services operate under heavy regulatory oversight. Corporate design, licensing and compliance must be built together from the start.",
    risks: ["Regulatory rejection from poor corporate structure", "Payment rail failures from compliance gaps", "Bacen or central bank friction from documentation issues", "Scaling blocked by structural limitations"],
    where: ["Licensing strategy and regulatory dossier", "Payment and banking infrastructure", "Compliance framework design", "Corporate architecture for regulated financial services"],
  },
  {
    id: "crypto",
    name: "Crypto & VASP",
    tension: "Digital asset operations face evolving regulatory environments across jurisdictions. VASP registration, AML structuring and banking access require coordinated execution.",
    risks: ["VASP registration delays or rejections", "Banking access blocked for crypto operations", "AML framework gaps under regulatory review", "Cross-border compliance inconsistencies"],
    where: ["VASP registration and licensing", "AML and compliance structuring", "Corporate architecture for digital asset operations", "Banking and payment access coordination"],
  },
  {
    id: "crossborder",
    name: "Cross-border Structures",
    tension: "International operations spanning multiple jurisdictions require corporate, tax, compliance and operational layers to work together. Misalignment in any layer creates cascading failures.",
    risks: ["Corporate structure incompatible with regulatory requirements", "UBO and ownership issues under scrutiny", "Tax misalignment across jurisdictions", "Operational fragmentation across markets"],
    where: ["Multi-jurisdiction corporate design", "Ownership and UBO structuring", "Cross-border compliance coordination", "Market entry strategy and execution"],
  },
];

export default function MarketsPage() {
  return (
    <main>
      <section className="page-hero section-padded">
        <div className="container">
          <span className="label">Markets</span>
          <h1 className="heading-xl sp-headline">
            Markets with regulation
            <br />
            <span style={{ color: "var(--white-40)" }}>built into the business model.</span>
          </h1>
          <p className="body-lg sp-sub" style={{ maxWidth: "640px" }}>
            We operate where licensing, banking, compliance and corporate
            structure directly affect whether a business can function — not
            just how it looks on paper.
          </p>
        </div>
      </section>

      {markets.map((m, i) => (
        <section key={m.id} className={i % 2 === 0 ? "section-dark section-padded" : "section-padded"} style={{ padding: "100px 40px" }}>
          <div className="container">
            <div className="grid-2" style={{ gap: "60px" }}>
              <div>
                <span className="label">{m.name}</span>
                <p className="body-lg" style={{ marginBottom: "24px" }}>{m.tension}</p>
                <p className="label" style={{ color: "var(--white-25)", marginBottom: "16px", marginTop: "32px" }}>Where Octus enters</p>
                <ul className="check-list">
                  {m.where.map((w) => (
                    <li key={w}>{w}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="label" style={{ color: "var(--white-25)" }}>Typical operational risks</p>
                <ul className="check-list-out" style={{ marginTop: "0" }}>
                  {m.risks.map((r) => (
                    <li key={r} style={{ color: "var(--white-40)" }}>{r}</li>
                  ))}
                </ul>
                <div style={{ marginTop: "32px" }}>
                  <Link href="/contact" className="btn-primary">
                    Discuss your {m.name.toLowerCase()} operation →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="cta-block">
        <div className="cta-block__bg" />
        <div className="cta-block__inner">
          <h2 className="heading-lg cta-block__title">
            Your market has specific structural requirements.
          </h2>
          <Link href="/contact" className="btn-primary btn-primary-lg">
            Request a strategic assessment →
          </Link>
        </div>
      </section>
    </main>
  );
}
