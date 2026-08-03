import Link from "next/link";

export const metadata = {
  title: "Careers",
  description:
    "Join Octus. We work at the intersection of regulatory structuring, compliance operations, legal architecture and corporate design. Built for people with operational depth.",
};

export default function CareersPage() {
  return (
    <main>

      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="surface-dark relative flex min-h-[70vh] flex-col justify-center pt-24 pb-16 md:min-h-[80vh] md:pt-28 md:pb-24">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <span className="label">Careers</span>
          <h1 className="font-heading text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[3.5rem] sp-headline">
            Built for people who know how regulated operations actually work.
          </h1>
          <p className="text-lg leading-relaxed text-white/60 max-w-2xl" style={{ maxWidth: "580px" }}>
            Octus operates at the intersection of regulatory structuring,
            compliance, legal architecture and corporate design. We look for
            people with operational depth: not just credentials.
          </p>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "1000px" }}>
          <span className="label">Life at Octus</span>
          <div className="careers-culture-visual">
            <img src="/team-group.jpg" alt="Octus team culture" className="careers-culture-image" />
          </div>
        </div>
      </section>

      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <span className="label">How we work</span>
          <h2 className="heading-section" style={{ marginBottom: "32px" }}>
            Serious operations require serious people.
          </h2>
          <p className="body-lg" style={{ marginBottom: "20px" }}>
            We are not a traditional advisory firm. We enter operations, design
            structures and coordinate execution across multiple regulatory and
            corporate layers simultaneously.
          </p>
          <p className="body-text" style={{ marginBottom: "20px" }}>
            The work is complex, international and requires people who
            understand the difference between what is written and what
            actually holds under real conditions.
          </p>
          <p className="body-text">
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
                  border: "1px solid var(--border-solid)",
                  borderRadius: "12px",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "var(--text-primary)",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHO WE LOOK FOR ──────────────────────────────────────── */}
      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <span className="label">Who we look for</span>
          <h2 className="heading-section" style={{ marginBottom: "48px" }}>
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
                <h3 className="text-lg font-semibold text-primary font-sans" style={{ marginBottom: "12px", color: "var(--blue-light)" }}>
                  {item.area}
                </h3>
                <p className="body-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ──────────────────────────────────────────────── */}
      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <span className="label">Our recruitment process</span>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {[
              { step: "01", title: "Initial interview", body: "First conversation to understand your background, what you have built and how you work." },
              { step: "02", title: "Assignment", body: "A practical exercise relevant to the role. Not theoretical: an actual situation from our work." },
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
                  borderBottom: i < 4 ? "1px solid var(--border-solid)" : "none",
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
                  <h3 className="text-lg font-semibold text-primary font-sans" style={{ marginBottom: "6px" }}>{s.title}</h3>
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
          <p className="body-text" style={{ color: "var(--white-40)", marginBottom: "12px" }}>
            No open positions listed? Send your profile anyway.
          </p>
          <h2 className="heading-lg cta-block__title">
            If you are the right person, we will find the right role.
          </h2>
          <a
            href="mailto:talentos@octusconsulting.com?subject=Octus Careers"
            className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-10 text-base font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90"
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
