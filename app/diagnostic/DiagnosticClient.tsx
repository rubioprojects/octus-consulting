"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const inputStyle = {
  width: "100%",
  background: "#FFFFFF",
  border: "1px solid var(--border)",
  borderRadius: "10px",
  padding: "14px 16px",
  fontSize: "15px",
  color: "var(--text-primary)",
  outline: "none",
};

const sectors = [
  "iGaming & Betting",
  "Crypto & Digital Assets",
  "Fintech & Payments",
  "Other regulated / high-risk",
];

const stages = [
  "Idea / pre-incorporation",
  "Pre-launch (entity exists, no licence)",
  "Live (licensed, operating)",
  "Scaling (expanding markets or restructuring)",
];

const jurisdictionsList = [
  "Isle of Man",
  "Malta",
  "Curaçao",
  "Brazil",
  "EU (MiCA)",
  "UK",
  "UAE",
  "Other / not sure",
];

const issues = [
  "Licensing (new application or restructuring)",
  "Banking / payment access",
  "Compliance (AML, KYC, DPO, ongoing)",
  "Corporate structure / jurisdiction design",
  "Not sure — need assessment",
];

export default function DiagnosticClient() {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [form, setForm] = useState({
    sector: "",
    stage: "",
    jurisdictions: [] as string[],
    mainIssue: "",
    name: "",
    email: "",
    company: "",
    context: "",
    _honey: "",
  });

  const canContinue = useMemo(() => {
    if (step === 1) return !!form.sector;
    if (step === 2) return !!form.stage;
    if (step === 3) return form.jurisdictions.length > 0;
    if (step === 4) return !!form.mainIssue;
    if (step === 5) return !!form.name && !!form.email;
    return false;
  }, [form, step]);

  const hasValidEmail = useMemo(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()), [form.email]);

  const toggleJurisdiction = (value: string) => {
    setForm((current) => ({
      ...current,
      jurisdictions: current.jurisdictions.includes(value)
        ? current.jurisdictions.filter((item) => item !== value)
        : [...current.jurisdictions, value],
    }));
  };

  const submit = async () => {
    if (!form.name.trim() || !hasValidEmail) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/diagnostic", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          operation: form.sector,
          jurisdictions: form.jurisdictions.join(", "),
          stage: form.stage,
          situation: form.context,
          mainIssue: form.mainIssue,
          context: form.context,
          _honey: form._honey,
        }),
      });

      if (!res.ok) {
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <main>
        <section className="page-hero section-padded">
          <div className="container" style={{ maxWidth: "760px" }}>
            <span className="label">Diagnostic</span>
            <h1 className="heading-xl sp-headline">Diagnostic submitted.</h1>
            <p className="body-lg sp-sub" style={{ maxWidth: "580px" }}>
              We review every submission individually. Expect a response within 24 hours.
            </p>
            <Link href="/" className="btn-primary btn-primary-lg">
              Return to homepage →
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section className="page-hero section-padded">
        <div className="container" style={{ maxWidth: "820px" }}>
          <span className="label">Regulatory Diagnostic</span>
          <h1 className="heading-xl sp-headline">
            5 questions.
            <br />
            <span style={{ color: "var(--text-muted)" }}>Clear assessment.</span>
          </h1>
          <p className="body-lg sp-sub" style={{ maxWidth: "620px" }}>
            We evaluate your regulatory exposure, jurisdiction fit and structural readiness before recommending a path.
          </p>
        </div>
      </section>

      <section className="section-padded" style={{ paddingTop: "70px" }}>
        <div className="container" style={{ maxWidth: "820px" }}>
          <div style={{ marginBottom: "16px", display: "flex", justifyContent: "space-between", gap: "16px", flexWrap: "wrap" }}>
            <p className="body-sm" style={{ color: "var(--text-muted)" }}>
              Step {step} of 5
            </p>
            <p className="body-sm" style={{ color: "var(--text-muted)" }}>
              Designed to qualify structure, exposure and urgency.
            </p>
          </div>
          <div style={{ display: "flex", gap: "10px", marginBottom: "32px" }}>
            {[1, 2, 3, 4, 5].map((dot) => (
              <div
                key={dot}
                style={{
                  height: "6px",
                  flex: 1,
                  borderRadius: "999px",
                  background: dot <= step ? "var(--primary-blue)" : "rgba(26, 29, 33, 0.12)",
                }}
              />
            ))}
          </div>

          <div className="card-lg" style={{ padding: "32px" }}>
            {step === 1 && (
              <>
                <p className="label" style={{ marginBottom: "12px" }}>Step 1 of 5</p>
                <h2 className="heading-md" style={{ marginBottom: "28px" }}>
                  What sector does your operation belong to?
                </h2>
                <p className="body" style={{ marginBottom: "24px" }}>
                  We start with sector because regulation, banking appetite and compliance exposure shift materially from one market to another.
                </p>
                <div className="grid-2">
                  {sectors.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setForm({ ...form, sector: item })}
                      style={optionStyle(form.sector === item)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <p className="label" style={{ marginBottom: "12px" }}>Step 2 of 5</p>
                <h2 className="heading-md" style={{ marginBottom: "28px" }}>
                  What stage is your operation at?
                </h2>
                <p className="body" style={{ marginBottom: "24px" }}>
                  Stage determines urgency. The structural requirements for an idea, a live operation and a scaling business are not the same.
                </p>
                <div style={{ display: "grid", gap: "14px" }}>
                  {stages.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setForm({ ...form, stage: item })}
                      style={optionStyle(form.stage === item)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <p className="label" style={{ marginBottom: "12px" }}>Step 3 of 5</p>
                <h2 className="heading-md" style={{ marginBottom: "28px" }}>
                  Which jurisdictions are relevant to your operation?
                </h2>
                <p className="body" style={{ marginBottom: "24px" }}>
                  Jurisdiction fit affects licensing path, banking viability and supervisory burden. We need to understand where the structure has to hold.
                </p>
                <div className="grid-2">
                  {jurisdictionsList.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => toggleJurisdiction(item)}
                      style={optionStyle(form.jurisdictions.includes(item))}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </>
            )}

            {step === 4 && (
              <>
                <p className="label" style={{ marginBottom: "12px" }}>Step 4 of 5</p>
                <h2 className="heading-md" style={{ marginBottom: "28px" }}>
                  What is the primary challenge?
                </h2>
                <p className="body" style={{ marginBottom: "24px" }}>
                  This tells us where the structure is failing first: licensing, payments, compliance, corporate design or a broader coordination issue.
                </p>
                <div style={{ display: "grid", gap: "14px" }}>
                  {issues.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setForm({ ...form, mainIssue: item })}
                      style={optionStyle(form.mainIssue === item)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </>
            )}

            {step === 5 && (
              <>
                <p className="label" style={{ marginBottom: "12px" }}>Step 5 of 5</p>
                <h2 className="heading-md" style={{ marginBottom: "28px" }}>
                  How can we reach you?
                </h2>
                <p className="body" style={{ marginBottom: "24px" }}>
                  Final step. We use this to review the situation and decide whether there is a clear mandate path.
                </p>

                <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", opacity: 0, height: 0, overflow: "hidden" }}>
                  <input
                    type="text"
                    name="_honey"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form._honey}
                    onChange={(e) => setForm({ ...form, _honey: e.target.value })}
                  />
                </div>

                <div style={{ display: "grid", gap: "18px" }}>
                  <div>
                    <label className="label" style={{ display: "block", marginBottom: "8px" }}>Name *</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      style={inputStyle}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="label" style={{ display: "block", marginBottom: "8px" }}>Email *</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      style={inputStyle}
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label className="label" style={{ display: "block", marginBottom: "8px" }}>Company</label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      style={inputStyle}
                      placeholder="Company name"
                    />
                  </div>
                  <div>
                    <label className="label" style={{ display: "block", marginBottom: "8px" }}>Brief context</label>
                    <textarea
                      value={form.context}
                      onChange={(e) => setForm({ ...form, context: e.target.value.slice(0, 500) })}
                      rows={5}
                      style={{ ...inputStyle, resize: "vertical", fontFamily: "var(--font-inter), Inter, sans-serif" }}
                      placeholder="Brief context of the operation and what is blocked."
                    />
                    <p className="body-sm" style={{ color: "var(--white-25)", marginTop: "8px" }}>
                      {form.context.length}/500
                    </p>
                  </div>
                </div>
              </>
            )}

            <div style={{ display: "flex", justifyContent: "space-between", gap: "16px", marginTop: "32px", flexWrap: "wrap" }}>
              <button
                type="button"
                onClick={() => setStep((current) => Math.max(1, current - 1))}
                className="btn-ghost"
                style={{ visibility: step === 1 ? "hidden" : "visible" }}
              >
                Back
              </button>

              {step < 5 ? (
                canContinue ? (
                  <button
                    type="button"
                    onClick={() => setStep((current) => Math.min(5, current + 1))}
                    className="btn-primary"
                  >
                    Next →
                  </button>
                ) : (
                  <span />
                )
              ) : (
                <button
                  type="button"
                  onClick={submit}
                  className="btn-primary btn-primary-lg"
                  disabled={!form.name.trim() || !hasValidEmail || status === "sending"}
                  style={{ opacity: form.name.trim() && hasValidEmail && status !== "sending" ? 1 : 0.5 }}
                >
                      {status === "sending" ? "Sending..." : "Submit your diagnostic →"}
                </button>
              )}
            </div>

            {status === "error" && (
              <p className="body-sm" style={{ color: "#ef4444", marginTop: "18px" }}>
                Submission failed. Please try again.
              </p>
            )}

            {step === 5 && form.email && !hasValidEmail && (
              <p className="body-sm" style={{ color: "#ef4444", marginTop: "12px" }}>
                Please enter a valid email address.
              </p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

function optionStyle(selected: boolean) {
  return {
    width: "100%",
    textAlign: "left" as const,
    background: selected ? "rgba(22, 59, 104, 0.08)" : "#FFFFFF",
    border: `1px solid ${selected ? "var(--primary-blue)" : "var(--border)"}`,
    borderRadius: "12px",
    padding: "18px 20px",
    color: "var(--text-primary)",
    fontSize: "15px",
    cursor: "pointer",
    transition: "border-color 0.2s, background 0.2s",
  };
}
