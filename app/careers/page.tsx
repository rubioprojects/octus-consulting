import Link from "next/link";

export const metadata = {
  title: "Careers — Octus Consulting",
  description:
    "Join Octus. We work at the intersection of regulatory structuring, compliance operations, legal architecture and corporate design. Built for people with operational depth.",
};

export default function CareersPage() {
  return (
    <main>

      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="page-hero section-padded">
        <div className="container">
          <span className="label">Careers</span>
          <h1 className="heading-xl sp-headline">
            Built for people who know
            <br />
            <span style={{ color: "var(--white-40)" }}>
              how regulated operations actually work.
            </span>
          </h1>
          <p className="body-lg sp-sub" style={{ maxWidth: "580px" }}>
            Octus operates at the intersection of regulatory structuring,
            compliance, legal architecture and corporate design. We look for
            people with operational depth — not just credentials.
          </p>
        </div>
      </section>

      {/* ─── HOW WE WORK ──────────────────────────────────────────── */}
      <section className="section-dark section-padded">
        <div className="container" style={{ maxWidth: "760px" }}>
          <span className="label">How we work</span>
          <h2 className="heading-md" style={{ marginBottom: "32px" }}>
            Serious operations require serious people.
          </h2>
          <p className="body-lg" style={{ marginBottom: "20px" }}>
            We are not a traditional advisory firm. We enter operations, design
            structures and coordinate execution across multiple regulatory and
            corporate layers simultaneously.
          </p>
          <p className="body" style={{ marginBottom: "20px" }}>
            The work is complex, international and requires people who
            understand the difference between what is written and what
            actually holds under real conditions.
          </p>
          <p className="body">
            We work remotely across multiple time zones, with clients across
            Europe, LATAM, Middle East and Asia.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginTop: "40px" }}>
            {[
              "Remote-first",
              "International scope",
              "Continuous development",
              "Industry events & conferences",
              "International work across multiple languages",
              "Collaborative and multidisciplinary team",
            ].map((item) => (
              <div
                key={item}
                style={{
                  padding: "16px 20px",
                  background: "var(--card-bg)",
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "var(--white-80)",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHO WE LOOK FOR ──────────────────────────────────────── */}
      <section className="section-padded" style={{ padding: "130px 40px" }}>
        <div className="container">
          <span className="label">Who we look for</span>
          <h2 className="heading-md" style={{ marginBottom: "48px" }}>
            Across four operational areas.
          </h2>
          <div className="grid-auto-lg">
            {[
              {
                area: "Regulatory & Licensing",
                desc: "Experience with regulated market entry, licensing processes and jurisdictional structuring. Ability to manage complex multi-jurisdiction regulatory processes end-to-end.",
              },
              {
                area: "Compliance & Risk",
                desc: "Operational compliance design and management. KYC/AML, data protection frameworks and ongoing compliance coordination for regulated businesses.",
              },
              {
                area: "Legal & Corporate Architecture",
                desc: "Legal structure, corporate design and governance for international regulated operations. Cross-border experience and understanding of how legal architecture affects operational outcomes.",
              },
              {
                area: "Operations & Coordination",
                desc: "Client process management, internal coordination and operational support across complex multi-layer engagements. Attention to detail and reliability under pressure.",
              },
            ].map((item) => (
              <div key={item.area} className="card">
                <h3 className="heading-card" style={{ marginBottom: "12px", color: "var(--blue-light)" }}>
                  {item.area}
                </h3>
                <p className="body-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ──────────────────────────────────────────────── */}
      <section className="section-dark section-padded">
        <div className="container" style={{ maxWidth: "760px" }}>
          <span className="label">Our recruitment process</span>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {[
              { step: "01", title: "Initial interview", body: "First conversation to understand your background, what you have built and how you work." },
              { step: "02", title: "Assignment", body: "A practical exercise relevant to the role. Not theoretical — an actual situation from our work." },
              { step: "03", title: "Second interview", body: "Deeper conversation about approach, judgment and how you handle complexity." },
              { step: "04", title: "Behavioural assessment", body: "Short structured assessment to understand how you operate in teams and under pressure." },
              { step: "05", title: "Offer", body: "Direct conversation about expectations, scope and what working together will look like." },
            ].map((s, i) => (
              <div
                key={s.step}
                style={{
                  display: "grid",
                  gridTemplateColumns: "48px 1fr",
                  gap: "24px",
                  padding: "24px 0",
                  borderBottom: i < 4 ? "1px solid var(--border)" : "none",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-unigeo), Unigeo64, sans-serif",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    color: "var(--blue-light)",
                    paddingTop: "3px",
                  }}
                >
                  {s.step}
                </span>
                <div>
                  <h3 className="heading-card" style={{ marginBottom: "6px" }}>{s.title}</h3>
                  <p className="body-sm">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── APPLY ────────────────────────────────────────────────── */}
      <section className="cta-block">
        <div className="cta-block__bg" />
        <div className="cta-block__inner">
          <p className="body" style={{ color: "var(--white-40)", marginBottom: "12px" }}>
            No open positions listed? Send your profile anyway.
          </p>
          <h2 className="heading-lg cta-block__title">
            If you are the right person, we will find the right role.
          </h2>
          <a
            href="mailto:talentos@octusconsulting.com?subject=Octus Careers"
            className="btn-primary btn-primary-lg"
          >
            Send your profile →
          </a>
          <p className="body-sm cta-block__note" style={{ color: "var(--white-25)" }}>
            talentos@octusconsulting.com · Subject: Octus Careers
          </p>
        </div>
      </section>

    </main>
  );
}
