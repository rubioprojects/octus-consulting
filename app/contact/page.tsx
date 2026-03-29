"use client";

import Link from "next/link";
import { useState } from "react";

const inputStyle = {
  width: "100%",
  background: "var(--black)",
  border: "1px solid var(--border)",
  borderRadius: "6px",
  padding: "12px 16px",
  fontSize: "14px",
  color: "var(--white)",
  outline: "none",
};

const labelStyle = {
  display: "block" as const,
  fontSize: "11px",
  fontWeight: 600,
  letterSpacing: "0.08em",
  textTransform: "uppercase" as const,
  color: "var(--white-25)",
  marginBottom: "8px",
};

const selectStyle = { ...inputStyle, appearance: "none" as const };

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "", email: "", company: "", operation: "", jurisdictions: "", stage: "", situation: "", _honey: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.company || !form.situation) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/diagnostic", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", company: "", operation: "", jurisdictions: "", stage: "", situation: "", _honey: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <main>

      {/* ─── HERO ─── */}
      <section className="page-hero section-padded">
        <div className="container">
          <span className="label">Contact</span>
          <h1 className="heading-xl sp-headline">
            Discuss your operation.
            <br />
            <span style={{ color: "var(--white-40)" }}>Before the structure becomes the problem.</span>
          </h1>
          <p className="body-lg sp-sub" style={{ maxWidth: "560px" }}>
            We start every engagement with a structured diagnostic — identifying
            where the operation is blocked and what needs to change.
          </p>
        </div>
      </section>

      {/* ─── WHATSAPP ─── */}
      <section style={{ padding: "0 40px 60px" }}>
        <div className="container">
          <div className="card-lg" style={{ display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" fill="#25D366"/>
            </svg>
            <div style={{ flexGrow: 1 }}>
              <p className="label" style={{ marginBottom: "8px", fontSize: "10px" }}>Direct intake</p>
              <p className="heading-card" style={{ marginBottom: "8px" }}>Prefer direct contact?</p>
              <p className="body-sm" style={{ color: "var(--white-60)" }}>Talk to Octus on WhatsApp for an initial strategic intake. We usually respond within the same business day.</p>
            </div>
            <a
              href="https://wa.me/5511974273000?text=Hello%2C%20I%27d%20like%20an%20initial%20strategic%20assessment%20regarding%20a%20regulated%20or%20cross-border%20operation."
              target="_blank" rel="noopener noreferrer"
              className="btn-primary" style={{ whiteSpace: "nowrap" }}
            >
              Start on WhatsApp →
            </a>
          </div>
        </div>
      </section>

      {/* ─── FORM ─── */}
      <section className="section-padded" style={{ padding: "80px 40px 130px" }}>
        <div className="container">
          <div className="contact-grid">
            <div>
              <span className="label">Who this is for</span>
              <h2 className="heading-md" style={{ marginBottom: "32px" }}>
                Operators building serious businesses in regulated environments.
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
              <p className="body-sm" style={{ color: "var(--white-25)", fontStyle: "italic", paddingTop: "24px", borderTop: "1px solid var(--border)" }}>
                This is a structured diagnostic for active operations, not a general inquiry.
              </p>
            </div>

            <div className="card-lg contact-form-card">
              {status === "success" ? (
                <div style={{ textAlign: "center", padding: "40px 0" }}>
                  <p className="heading-sm" style={{ marginBottom: "16px", color: "var(--blue-light)" }}>Request received.</p>
                  <p className="body" style={{ marginBottom: "24px" }}>We will review your situation and respond within 24 hours.</p>
                  <button onClick={() => setStatus("idle")} className="btn-ghost">Submit another request →</button>
                </div>
              ) : (
                <>
                  <h3 className="heading-sm" style={{ marginBottom: "8px" }}>Start your diagnostic</h3>
                  <p className="body-sm" style={{ color: "var(--white-40)", marginBottom: "32px" }}>We respond within 24 hours.</p>

                  <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    {/* Honeypot — hidden from humans, visible to bots */}
                    <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", opacity: 0, height: 0, overflow: "hidden" }}>
                      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" value={form._honey} onChange={(e) => setForm({ ...form, _honey: e.target.value })} />
                    </div>
                    <div>
                      <label style={labelStyle}>Name *</label>
                      <input type="text" placeholder="Your name" style={inputStyle} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                    </div>
                    <div>
                      <label style={labelStyle}>Email *</label>
                      <input type="email" placeholder="you@company.com" style={inputStyle} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                    </div>
                    <div>
                      <label style={labelStyle}>Company *</label>
                      <input type="text" placeholder="Company name" style={inputStyle} value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
                    </div>
                    <div>
                      <label style={labelStyle}>Type of operation</label>
                      <select style={selectStyle} value={form.operation} onChange={(e) => setForm({ ...form, operation: e.target.value })}>
                        <option value="">Select sector</option>
                        <option value="iGaming & Betting">iGaming & Betting</option>
                        <option value="Fintech & Payments">Fintech & Payments</option>
                        <option value="Crypto / VASP">Crypto / VASP</option>
                        <option value="Forex">Forex</option>
                        <option value="Corporate & Holding">Corporate & Holding</option>
                        <option value="Other regulated sector">Other regulated sector</option>
                      </select>
                    </div>
                    <div>
                      <label style={labelStyle}>Jurisdictions involved</label>
                      <input type="text" placeholder="e.g. Brazil, UK, Curaçao" style={inputStyle} value={form.jurisdictions} onChange={(e) => setForm({ ...form, jurisdictions: e.target.value })} />
                    </div>
                    <div>
                      <label style={labelStyle}>Where is the operation blocked?</label>
                      <select style={selectStyle} value={form.stage} onChange={(e) => setForm({ ...form, stage: e.target.value })}>
                        <option value="">Select situation</option>
                        <option value="Licensing">Licensing — delayed, blocked or wrong jurisdiction</option>
                        <option value="Banking">Banking — no account or account blocked</option>
                        <option value="Compliance">Compliance — failing under scrutiny or audit</option>
                        <option value="Corporate structure">Corporate structure — needs rebuilding</option>
                        <option value="Market entry">Market entry — entering a new regulated market</option>
                        <option value="Expansion">Expansion — scaling across jurisdictions</option>
                      </select>
                    </div>
                    <div>
                      <label style={labelStyle}>Describe the situation *</label>
                      <textarea rows={4} placeholder="Brief description of what is blocked and what you have tried." style={{ ...inputStyle, resize: "vertical", fontFamily: "var(--font-inter), 'Inter', sans-serif" }} value={form.situation} onChange={(e) => setForm({ ...form, situation: e.target.value })} />
                    </div>

                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={status === "sending" || !form.name || !form.email || !form.company || !form.situation}
                      className="btn-primary btn-primary-lg"
                      style={{ width: "100%", justifyContent: "center", marginTop: "8px", opacity: status === "sending" ? 0.6 : 1 }}
                    >
                      {status === "sending" ? "Sending..." : "Send diagnostic request →"}
                    </button>

                    {status === "error" && (
                      <p className="body-sm" style={{ color: "#ef4444", textAlign: "center" }}>
                        Submission failed. Please try again or contact us directly on WhatsApp.
                      </p>
                    )}

                    <p className="body-sm" style={{ color: "var(--white-25)", textAlign: "center", fontStyle: "italic" }}>
                      We review every submission personally.
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── REASSURANCE ─── */}
      <section className="section-dark section-padded">
        <div className="container">
          <div className="grid-3">
            {[
              { title: "Direct diagnostic, not generic advice", body: "The diagnostic is structured around your specific structural situation — not a template response or a pitch." },
              { title: "Built for active operations", body: "We work with businesses where the operation is real and the problem has regulatory or structural consequences." },
              { title: "Direct access to decision-makers", body: "You communicate directly with the Octus team from the first conversation — no account managers, no onboarding process." },
            ].map((item) => (
              <div key={item.title} className="card">
                <h3 className="heading-card" style={{ marginBottom: "12px" }}>{item.title}</h3>
                <p className="body-sm">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
