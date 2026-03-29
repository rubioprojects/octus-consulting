import Link from "next/link";

export const metadata = {
  title: "Careers — Octus Consulting",
  description: "We don't hire for volume. We hire for complexity. Octus operates in regulated and high-risk environments.",
};

export default function CareersPage() {
  return (
    <main>

      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="page-hero section-padded">
        <div className="container">
          <span className="label">Careers</span>
          <h1 className="heading-xl sp-headline">
            We don&apos;t hire for volume.
            <br />
            <span style={{ color: "var(--white-40)" }}>We hire for complexity.</span>
          </h1>
          <p className="body-lg sp-sub" style={{ maxWidth: "580px" }}>
            Octus operates in regulated and high-risk environments.
            We look for people who can handle structure, ambiguity
            and responsibility.
          </p>
        </div>
      </section>

      {/* ─── TEAM PHOTO ────────────────────────────────────────────── */}
      <div className="careers-photo">
        <img src="/careers-team.webp" alt="Octus team" />
      </div>

      {/* ─── WHO FITS HERE ────────────────────────────────────────── */}
      <section className="section-dark section-padded" style={{ padding: "100px 40px" }}>
        <div className="container" style={{ maxWidth: "760px" }}>
          <span className="label">Who fits here</span>
          <h2 className="heading-md" style={{ marginBottom: "40px" }}>
            This is not a generic workplace.
          </h2>
          <ul className="check-list">
            <li>You are comfortable working across jurisdictions and regulatory environments</li>
            <li>You can operate with limited structure and high responsibility</li>
            <li>You are precise and structured, not just fast</li>
            <li>You understand regulated environments — or are willing to learn fast</li>
            <li>You work well remotely across multiple time zones and languages</li>
          </ul>
        </div>
      </section>

      {/* ─── WHAT WE DON'T DO ─────────────────────────────────────── */}
      <section className="section-padded" style={{ padding: "100px 40px" }}>
        <div className="container" style={{ maxWidth: "760px" }}>
          <span className="label" style={{ color: "var(--white-25)" }}>What we don&apos;t do</span>
          <h2 className="heading-md" style={{ marginBottom: "32px" }}>
            So you know what you&apos;re entering.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              "We don't run high-volume junior workflows",
              "We don't operate as a traditional law firm",
              "We don't separate thinking from execution",
              "We don't have layers between you and the work",
            ].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "12px", padding: "16px 0", borderBottom: "1px solid var(--border-light)" }}>
                <span style={{ color: "var(--white-25)", fontSize: "14px", flexShrink: 0 }}>—</span>
                <span className="body" style={{ color: "var(--white-60)" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── AREAS ─────────────────────────────────────────────────── */}
      <section className="section-dark section-padded" style={{ padding: "100px 40px" }}>
        <div className="container">
          <span className="label">Areas we hire for</span>
          <h2 className="heading-md" style={{ marginBottom: "48px" }}>
            Across four operational areas.
          </h2>
          <div className="grid-auto-lg">
            {[
              { area: "Regulatory & Licensing", desc: "Experience with regulated market entry, licensing processes and jurisdictional structuring." },
              { area: "Compliance & Risk", desc: "Operational compliance design, KYC/AML and data protection frameworks." },
              { area: "Legal & Corporate", desc: "Legal structure, corporate design and governance for international regulated operations." },
              { area: "Operations & Coordination", desc: "Client process management, internal coordination and operational support under pressure." },
            ].map((item) => (
              <div key={item.area} className="card">
                <h3 className="heading-card" style={{ marginBottom: "12px", color: "var(--blue-light)" }}>{item.area}</h3>
                <p className="body-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ──────────────────────────────────────────────── */}
      <section className="section-padded" style={{ padding: "100px 40px" }}>
        <div className="container" style={{ maxWidth: "760px" }}>
          <span className="label">Process</span>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {[
              { step: "01", title: "Initial interview", body: "First conversation to understand your background and how you work." },
              { step: "02", title: "Assignment", body: "A practical exercise relevant to the role. Not theoretical — an actual situation from our work." },
              { step: "03", title: "Second interview", body: "Deeper conversation about approach, judgment and complexity." },
              { step: "04", title: "Behavioural assessment", body: "Short structured assessment to understand how you operate under pressure." },
              { step: "05", title: "Offer", body: "Direct conversation about scope and what working together will look like." },
            ].map((s, i) => (
              <div key={s.step} style={{ display: "grid", gridTemplateColumns: "48px 1fr", gap: "24px", padding: "24px 0", borderBottom: i < 4 ? "1px solid var(--border)" : "none" }}>
                <span className="label" style={{ color: "var(--blue-light)", paddingTop: "3px", marginBottom: 0 }}>{s.step}</span>
                <div>
                  <h3 className="heading-card" style={{ marginBottom: "6px" }}>{s.title}</h3>
                  <p className="body-sm">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────── */}
      <section className="cta-block">
        <div className="cta-block__bg" />
        <div className="cta-block__inner">
          <p className="body" style={{ color: "var(--white-40)", marginBottom: "12px" }}>
            No open positions listed? Send your profile anyway.
          </p>
          <h2 className="heading-lg cta-block__title">
            If you are the right person, we will find the right role.
          </h2>
          <a href="mailto:talentos@octusconsulting.com?subject=Octus Careers" className="btn-primary btn-primary-lg">
            Send your profile →
          </a>
          <p className="body-sm cta-block__note" style={{ color: "var(--white-25)" }}>
            talentos@octusconsulting.com
          </p>
        </div>
      </section>

    </main>
  );
}
