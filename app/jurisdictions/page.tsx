import Link from "next/link";

export const metadata = {
  title: "Jurisdictions — Octus Consulting",
  description: "Jurisdictions shape operations. Licensing, banking access, ownership logic, compliance load and operational viability all start with jurisdiction design.",
};

const featured = [
  { name: "Curaçao", thesis: "Established gaming licensing jurisdiction undergoing regulatory reform. Post-licensing, supplier structures and banking remain structurally demanding.", caps: ["Gaming licensing", "Post-license operations", "Supplier structuring", "Banking access", "AML compliance"] },
  { name: "Malta (MGA)", thesis: "EU-regulated gaming authority with high compliance requirements. Corporate governance, ongoing reporting and operational compliance are continuous.", caps: ["MGA licensing", "Compliance operations", "Corporate governance", "EU regulatory alignment"] },
  { name: "UAE / Dubai", thesis: "Rapidly evolving regulatory environment for fintech, VASP and corporate structuring. Market entry requires precise alignment with local requirements.", caps: ["Corporate setup", "VASP registration", "Group structuring", "Regional market entry"] },
  { name: "Delaware / US", thesis: "Standard holding and corporate architecture jurisdiction. Governance, compliance and structural alignment with international operations.", caps: ["Holding structures", "Corporate architecture", "Governance", "Compliance coordination"] },
  { name: "Portugal", thesis: "EU market access, residency-linked structuring and corporate design for international groups entering European regulated markets.", caps: ["EU market access", "Corporate structuring", "Residency programs", "Licensing coordination"] },
  { name: "Cyprus", thesis: "EU-regulated environment for financial services and gaming. Corporate structuring and compliance for EU market access.", caps: ["Licensing", "Corporate setup", "EU compliance", "Banking access"] },
  { name: "Brazil", thesis: "Licensing under SPA/MF, regulatory transition, operational readiness for one of the most complex emerging regulated markets.", caps: ["SPA/MF licensing", "Post-license compliance", "Corporate setup", "Banking structuring", "Market entry"] },
  { name: "BVI", thesis: "International corporate and holding structures. Ownership design, governance and cross-border alignment.", caps: ["Corporate structuring", "Holding design", "Governance", "Cross-border alignment"] },
  { name: "Isle of Man", thesis: "Established gambling supervision jurisdiction with high regulatory standards and licensing requirements.", caps: ["Gaming licensing", "Compliance", "Corporate setup"] },
  { name: "Cayman Islands", thesis: "International financial structures, fund architecture and corporate design for regulated operations.", caps: ["Corporate structuring", "Fund architecture", "Governance"] },
];

const capabilityLayers = [
  "Licensing & regulatory applications",
  "Post-licensing operations",
  "Compliance structuring",
  "Corporate setup & governance",
  "Banking & payment access",
  "Market entry coordination",
];

export default function JurisdictionsPage() {
  return (
    <main>
      <section className="page-hero section-padded">
        <div className="container">
          <span className="label">Jurisdictions</span>
          <h1 className="heading-xl sp-headline">
            Jurisdictions shape operations.
            <br />
            <span style={{ color: "var(--white-40)" }}>Not just paperwork.</span>
          </h1>
          <p className="body-lg sp-sub" style={{ maxWidth: "680px" }}>
            Licensing pathways, banking access, compliance obligations, ownership
            logic and operational resilience — all start with jurisdiction design.
          </p>
        </div>
      </section>

      {/* ─── FRAMEWORK ──────────────────────────────────────────── */}
      <section className="section-dark section-padded" style={{ padding: "80px 40px" }}>
        <div className="container" style={{ maxWidth: "760px" }}>
          <p className="label" style={{ color: "var(--white-25)" }}>Capability layers per jurisdiction</p>
          <p className="body" style={{ marginBottom: "24px" }}>
            In each jurisdiction, Octus can structure and coordinate across
            these operational layers — depending on what the operation requires.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "var(--border)", borderRadius: "12px", overflow: "hidden" }}>
            {capabilityLayers.map((c) => (
              <div key={c} style={{ padding: "20px 24px", background: "var(--deep-blue)", fontSize: "14px", color: "var(--white-60)" }}>
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED JURISDICTIONS ─────────────────────────────── */}
      <section className="section-padded" style={{ padding: "100px 40px" }}>
        <div className="container">
          <p className="label">Featured jurisdictions</p>
          <h2 className="heading-md" style={{ marginBottom: "56px" }}>
            Where we structure, license and operate.
          </h2>
          <div className="grid-auto-lg" style={{ gap: "20px" }}>
            {featured.map((j) => (
              <div key={j.name} className="card-lg" style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ marginBottom: "12px" }}>
                  <h3 className="heading-card">{j.name}</h3>
                </div>
                <p className="body-sm" style={{ marginBottom: "16px", flexGrow: 1 }}>{j.thesis}</p>
                <div className="chip-row" style={{ flexWrap: "wrap" }}>
                  {j.caps.map((c) => (
                    <span key={c} className="chip" style={{ fontSize: "10px" }}>{c}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="text-faint" style={{ textAlign: "center", marginTop: "32px" }}>
            Additional jurisdictions available based on operation requirements.
          </p>
        </div>
      </section>

      <section className="cta-block">
        <div className="cta-block__bg" />
        <div className="cta-block__inner">
          <h2 className="heading-lg cta-block__title">
            The right jurisdiction is a strategic decision.
          </h2>
          <p className="body" style={{ color: "var(--white-40)", marginBottom: "24px" }}>
            Not just a legal formality.
          </p>
          <Link href="/contact" className="btn-primary btn-primary-lg">
            Request a jurisdiction assessment →
          </Link>
        </div>
      </section>
    </main>
  );
}
