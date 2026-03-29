import Link from "next/link";

export const metadata = {
  title: "Start a Diagnostic — Octus Consulting",
  description:
    "If your operation is not working, this is where we start. A structured diagnostic — not a sales call.",
};

export default function ContactPage() {
  return (
    <main>

      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="page-hero section-padded">
        <div className="container">
          <span className="label">Start a diagnostic</span>
          <h1 className="heading-xl sp-headline">
            If your operation is not working,
            <br />
            <span style={{ color: "var(--white-40)" }}>
              this is where we start.
            </span>
          </h1>
          <p className="body-lg sp-sub" style={{ maxWidth: "580px" }}>
            Not a sales call. A structured diagnostic — we identify where the
            structure is broken before deciding what needs to be fixed.
          </p>
        </div>
      </section>

      {/* ─── WHAT HAPPENS NEXT ────────────────────────────────────── */}
      <section className="section-dark section-padded">
        <div className="container" style={{ maxWidth: "760px" }}>
          <span className="label">What happens after you submit</span>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {[
              {
                step: "01",
                title: "We review your situation",
                body: "Within 24 hours, we review the information you submitted. If we can help, we confirm and schedule a diagnostic call.",
              },
              {
                step: "02",
                title: "Diagnostic call",
                body: "A structured call — not a pitch. We map the structural failure, the regulatory position and the scope of what needs to be done.",
              },
              {
                step: "03",
                title: "Scope and engagement",
                body: "If there is a clear path forward, we define the scope and the engagement model. No ambiguity on what will be done, by whom and on what timeline.",
              },
            ].map((s, i) => (
              <div
                key={s.step}
                style={{
                  display: "grid",
                  gridTemplateColumns: "48px 1fr",
                  gap: "24px",
                  padding: "32px 0",
                  borderBottom: i < 2 ? "1px solid var(--border)" : "none",
                  alignItems: "start",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-unigeo), Unigeo64, sans-serif",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    color: "var(--blue-light)",
                    paddingTop: "4px",
                  }}
                >
                  {s.step}
                </span>
                <div>
                  <h3
                    className="heading-card"
                    style={{ marginBottom: "8px" }}
                  >
                    {s.title}
                  </h3>
                  <p className="body">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ALTERNATIVE CONTACT ──────────────────────────────── */}
      <section className="section-padded" style={{ padding: "0 40px 0" }}>
        <div className="container">
          <div
            style={{
              display: "flex",
              gap: "16px",
              alignItems: "center",
              padding: "20px 24px",
              background: "var(--card-bg)",
              border: "1px solid var(--border)",
              borderRadius: "10px",
              marginBottom: "80px",
              maxWidth: "600px",
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" fill="#25D366"/>
            </svg>
            <div style={{ flexGrow: 1 }}>
              <p className="body-sm" style={{ color: "var(--white-40)", marginBottom: "2px" }}>Prefer a direct conversation?</p>
              <p className="body-sm" style={{ color: "var(--white)" }}>Message us on WhatsApp — we respond within the same business day.</p>
            </div>
            <a
              href="https://wa.me/5511974273000?text=Hello%2C%20I%27d%20like%20to%20start%20a%20diagnostic%20with%20Octus%20regarding%20a%20regulated%20operation."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-unigeo), Unigeo64, sans-serif",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--white)",
                textDecoration: "none",
                whiteSpace: "nowrap",
                padding: "8px 14px",
                border: "1px solid var(--border)",
                borderRadius: "6px",
              }}
            >
              WhatsApp →
            </a>
          </div>
        </div>
      </section>

      {/* ─── FORM ─────────────────────────────────────────────────── */}
      <section className="section-padded" style={{ padding: "130px 40px" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 420px",
              gap: "100px",
              alignItems: "start",
            }}
          >
            {/* Left — positioning */}
            <div>
              <span className="label">Who this is for</span>
              <h2
                className="heading-md"
                style={{ marginBottom: "32px" }}
              >
                Operators building serious businesses in regulated
                environments.
              </h2>
              <ul className="check-list" style={{ marginBottom: "40px" }}>
                {[
                  "Licensing process delayed, blocked or in the wrong jurisdiction",
                  "Banking or payment access not resolved after licensing",
                  "Compliance framework failing under regulatory or banking scrutiny",
                  "Corporate structure incompatible with regulatory requirements",
                  "Entering a new regulated market without a clear structural path",
                  "Operation that needs restructuring to scale or expand",
                ].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p
                className="body-sm"
                style={{
                  color: "var(--white-25)",
                  fontStyle: "italic",
                  paddingTop: "24px",
                  borderTop: "1px solid var(--border)",
                }}
              >
                This is a structured diagnostic for active operations, not a
                general inquiry.
              </p>
            </div>

            {/* Right — form */}
            <div
              className="card-lg"
              style={{ position: "sticky", top: "100px" }}
            >
              <h3
                className="heading-sm"
                style={{ marginBottom: "8px" }}
              >
                Start your diagnostic
              </h3>
              <p
                className="body-sm"
                style={{
                  color: "var(--white-40)",
                  marginBottom: "32px",
                }}
              >
                We respond within 24 hours.
              </p>

              <form
                name="diagnostic"
                method="POST"
                data-netlify="true"
                style={{ display: "flex", flexDirection: "column", gap: "20px" }}
              >
                <input type="hidden" name="form-name" value="diagnostic" />

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "11px",
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "var(--white-25)",
                      marginBottom: "8px",
                    }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    style={{
                      width: "100%",
                      background: "var(--black)",
                      border: "1px solid var(--border)",
                      borderRadius: "6px",
                      padding: "12px 16px",
                      fontSize: "14px",
                      color: "var(--white)",
                      outline: "none",
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "11px",
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "var(--white-25)",
                      marginBottom: "8px",
                    }}
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    required
                    placeholder="Company name"
                    style={{
                      width: "100%",
                      background: "var(--black)",
                      border: "1px solid var(--border)",
                      borderRadius: "6px",
                      padding: "12px 16px",
                      fontSize: "14px",
                      color: "var(--white)",
                      outline: "none",
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "11px",
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "var(--white-25)",
                      marginBottom: "8px",
                    }}
                  >
                    Type of operation
                  </label>
                  <select
                    name="operation_type"
                    required
                    style={{
                      width: "100%",
                      background: "var(--black)",
                      border: "1px solid var(--border)",
                      borderRadius: "6px",
                      padding: "12px 16px",
                      fontSize: "14px",
                      color: "var(--white)",
                      outline: "none",
                      appearance: "none",
                    }}
                  >
                    <option value="" disabled selected>Select sector</option>
                    <option value="igaming-betting">iGaming & Betting</option>
                    <option value="fintech-payments">Fintech & Payments</option>
                    <option value="crypto-vasp">Crypto / VASP</option>
                    <option value="forex">Forex</option>
                    <option value="corporate-holding">Corporate & Holding</option>
                    <option value="other-regulated">Other regulated sector</option>
                  </select>
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "11px",
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "var(--white-25)",
                      marginBottom: "8px",
                    }}
                  >
                    Jurisdictions involved
                  </label>
                  <input
                    type="text"
                    name="jurisdictions"
                    placeholder="e.g. Brazil, UK, Curaçao"
                    style={{
                      width: "100%",
                      background: "var(--black)",
                      border: "1px solid var(--border)",
                      borderRadius: "6px",
                      padding: "12px 16px",
                      fontSize: "14px",
                      color: "var(--white)",
                      outline: "none",
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "11px",
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "var(--white-25)",
                      marginBottom: "8px",
                    }}
                  >
                    Where is the operation blocked?
                  </label>
                  <select
                    name="stage"
                    required
                    style={{
                      width: "100%",
                      background: "var(--black)",
                      border: "1px solid var(--border)",
                      borderRadius: "6px",
                      padding: "12px 16px",
                      fontSize: "14px",
                      color: "var(--white)",
                      outline: "none",
                      appearance: "none",
                    }}
                  >
                    <option value="" disabled selected>Select situation</option>
                    <option value="licensing">Licensing — delayed, blocked or wrong jurisdiction</option>
                    <option value="banking">Banking — no account or account blocked</option>
                    <option value="compliance">Compliance — failing under scrutiny or audit</option>
                    <option value="structure">Corporate structure — needs rebuilding</option>
                    <option value="market-entry">Market entry — entering a new regulated market</option>
                    <option value="expansion">Expansion — scaling across jurisdictions</option>
                  </select>
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "11px",
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "var(--white-25)",
                      marginBottom: "8px",
                    }}
                  >
                    Describe the situation
                  </label>
                  <textarea
                    name="situation"
                    required
                    rows={4}
                    placeholder="Brief description of what is blocked and what you have tried."
                    style={{
                      width: "100%",
                      background: "var(--black)",
                      border: "1px solid var(--border)",
                      borderRadius: "6px",
                      padding: "12px 16px",
                      fontSize: "14px",
                      color: "var(--white)",
                      outline: "none",
                      resize: "vertical",
                      fontFamily: "var(--font-inter), 'Inter', sans-serif",
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary btn-primary-lg"
                  style={{ width: "100%", justifyContent: "center", marginTop: "8px" }}
                >
                  Start your diagnostic →
                </button>

                <p
                  className="body-sm"
                  style={{
                    color: "var(--white-25)",
                    textAlign: "center",
                    fontStyle: "italic",
                  }}
                >
                  We review every submission personally.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ─── REASSURANCE ──────────────────────────────────────────── */}
      <section className="section-dark section-padded">
        <div className="container">
          <div className="grid-3">
            {[
              {
                title: "Direct diagnostic, not generic advice",
                body: "The diagnostic is structured around your specific structural situation — not a template response or a pitch.",
              },
              {
                title: "Built for active operations, not general inquiries",
                body: "We work with businesses where the operation is real and the problem has regulatory or structural consequences.",
              },
              {
                title: "Direct access to decision-makers",
                body: "You communicate directly with the Octus team from the first conversation — no account managers, no onboarding process.",
              },
            ].map((item) => (
              <div key={item.title} className="card">
                <h3 className="heading-card" style={{ marginBottom: "12px" }}>
                  {item.title}
                </h3>
                <p className="body-sm">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
