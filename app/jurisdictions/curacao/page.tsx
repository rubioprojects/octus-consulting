import Link from "next/link";

export const metadata = {
  title: "Curaçao iGaming License — Structuring & Banking | Octus",
  description:
    "Full licensing, corporate structuring and banking coordination for iGaming and betting operators in Curaçao. From application to operational bank account.",
};

export default function JurisdictionsCuracaoPage() {
  return (
    <main>

      {/* ─── HERO ─── */}
      <section className="page-hero section-padded">
        <div className="container">
          <span className="label">Jurisdictions · Curaçao</span>
          <h1 className="heading-xl sp-headline">
            Curaçao is not a shortcut.
            <br />
            <span style={{ color: "var(--white-40)" }}>
              It&apos;s a structure problem.
            </span>
          </h1>
          <p className="body-lg sp-sub" style={{ maxWidth: "620px" }}>
            Most operators treat Curaçao as the easy option. They get a license
            — and then spend months trying to open a bank account, pass a
            compliance review, or survive the new regulatory framework. The
            license was never the hard part.
          </p>
          <div style={{ marginTop: "32px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary btn-primary-lg">
              Fix your Curaçao structure →
            </Link>
            <Link href="/markets/igaming" className="btn-ghost">
              iGaming operations →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── REALITY CHECK ─── */}
      <section className="section-dark section-padded">
        <div className="container" style={{ maxWidth: "760px" }}>
          <h2 className="heading-md" style={{ marginBottom: "24px" }}>
            What most operators get wrong
            <br />
            <span style={{ color: "var(--blue-light)" }}>about Curaçao.</span>
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {[
              {
                wrong: "\"Curaçao license is fast and easy.\"",
                reality: "The application may be faster than Malta or the UK. The banking, compliance and corporate structure behind it are not. Most delays happen after the license is granted — not before.",
              },
              {
                wrong: "\"Any corporate structure works.\"",
                reality: "Banks and payment processors reject structures that don\u2019t align with their risk models. The entity design, UBO disclosure and AML framework must be built for the banking layer — not just the regulator.",
              },
              {
                wrong: "\"Compliance can be added later.\"",
                reality: "Under the new Curaçao regulatory framework, compliance is not optional. Operators without a working KYC/AML structure, responsible gaming policies and a DPO face suspension or revocation.",
              },
            ].map((item, i) => (
              <div key={i} style={{ borderBottom: i < 2 ? "1px solid var(--border)" : "none", paddingBottom: i < 2 ? "24px" : "0" }}>
                <p className="heading-card" style={{ marginBottom: "8px", color: "var(--white)" }}>
                  {item.wrong}
                </p>
                <p className="body" style={{ color: "var(--white-60)" }}>
                  {item.reality}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHAT WE DO ─── */}
      <section className="section-padded">
        <div className="container">
          <p className="label">How Octus operates in Curaçao</p>
          <h2 className="heading-md" style={{ marginBottom: "12px" }}>
            From application to operational bank account.
          </h2>
          <p className="body-lg" style={{ marginBottom: "40px", maxWidth: "620px", color: "var(--white-60)" }}>
            We don&apos;t just file paperwork. We design the entire structure —
            entity, compliance, banking, regulatory — as a single coordinated
            operation.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {[
              {
                step: "01",
                title: "Regulatory diagnostic",
                body: "We assess the operation, the target markets and the regulatory requirements. If Curaçao isn\u2019t the right jurisdiction, we tell you before you waste six months.",
              },
              {
                step: "02",
                title: "Entity & corporate design",
                body: "We structure the Curaçao entity — ownership, UBO disclosure, governance — built for both the regulator and the banking layer.",
              },
              {
                step: "03",
                title: "Licensing dossier & submission",
                body: "Full application package — regulatory documentation, compliance framework, AML policies, technical requirements. We coordinate directly with the regulator.",
              },
              {
                step: "04",
                title: "Compliance structure",
                body: "KYC/AML framework, responsible gaming policies, DPO setup, internal controls. Built to survive audit — not just to exist on paper.",
              },
              {
                step: "05",
                title: "Banking & payment access",
                body: "We align the corporate and compliance structure with bank requirements and coordinate directly with banking partners and PSPs.",
              },
              {
                step: "06",
                title: "Post-license stabilization",
                body: "License granted is the beginning, not the end. We stabilize compliance cycles, banking relationships and regulatory reporting.",
              },
            ].map((s, i) => (
              <div
                key={s.step}
                style={{
                  display: "grid",
                  gridTemplateColumns: "48px 1fr",
                  gap: "24px",
                  padding: "32px 0",
                  borderBottom: i < 5 ? "1px solid var(--border)" : "none",
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
                  <h3 className="heading-card" style={{ marginBottom: "8px" }}>
                    {s.title}
                  </h3>
                  <p className="body">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── KEY FACTS ─── */}
      <section className="section-dark section-padded">
        <div className="container">
          <p className="label">Curaçao at a glance</p>
          <h2 className="heading-md" style={{ marginBottom: "32px" }}>
            Key regulatory facts.
          </h2>
          <div className="grid-auto-lg">
            {[
              { label: "Regulator", value: "Curaçao Gaming Control Board (GCB)" },
              { label: "License types", value: "iGaming, sports betting, lottery, games of chance" },
              { label: "Entity required", value: "Curaçao-registered N.V. or B.V." },
              { label: "Compliance", value: "Full AML/KYC, responsible gaming, DPO mandatory" },
              { label: "Banking", value: "Operational accounts available — requires aligned structure" },
              { label: "Timeline", value: "3–6 months (application to license, structure-dependent)" },
            ].map((item) => (
              <div key={item.label} className="card" style={{ padding: "24px" }}>
                <p className="label" style={{ marginBottom: "8px", fontSize: "10px" }}>{item.label}</p>
                <p className="body" style={{ color: "var(--white)" }}>{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SELECTED MANDATES ─── */}
      <section className="section-padded">
        <div className="container" style={{ maxWidth: "760px" }}>
          <p className="label">Selected mandates — Curaçao</p>
          <h2 className="heading-md" style={{ marginBottom: "32px" }}>
            Real operations. Real outcomes.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {[
              {
                title: "Licensed for 6 months. No bank account.",
                body: "Active Curaçao license, rejected by three banks. We restructured the corporate layer, rebuilt AML policies, aligned UBO disclosure and coordinated with three banks simultaneously. Operational account open in 11 weeks.",
              },
              {
                title: "New operator — full setup from zero",
                body: "Entity formation, licensing dossier, compliance framework and banking — delivered as a single coordinated project. License granted, bank account operational before launch.",
              },
              {
                title: "Compliance remediation under regulatory pressure",
                body: "Existing operator flagged by the regulator for compliance gaps. Full KYC/AML rebuild, responsible gaming framework and evidence register delivered in 6 weeks.",
              },
            ].map((m, i) => (
              <div
                key={i}
                style={{
                  padding: "24px 0",
                  borderBottom: i < 2 ? "1px solid var(--border)" : "none",
                }}
              >
                <h3 className="heading-card" style={{ marginBottom: "8px", color: "var(--white)" }}>
                  {m.title}
                </h3>
                <p className="body" style={{ color: "var(--white-60)" }}>{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CROSS-LINKS ─── */}
      <section className="section-dark section-padded">
        <div className="container">
          <p className="label">Related</p>
          <div className="grid-3">
            {[
              { title: "iGaming Operations", desc: "How we structure iGaming operators across markets.", href: "/markets/igaming" },
              { title: "Full Licensing Process", desc: "End-to-end licensing execution.", href: "/solutions/regulatory/igaming-licensing" },
              { title: "Corporate Structuring", desc: "Entity design for regulated operations.", href: "/corporate" },
            ].map((r) => (
              <Link key={r.title} href={r.href} className="card-grid" style={{ padding: "28px" }}>
                <h3 className="heading-card" style={{ marginBottom: "8px" }}>{r.title}</h3>
                <p className="body-sm" style={{ marginBottom: "12px" }}>{r.desc}</p>
                <span style={{ color: "var(--blue-light)", fontSize: "13px" }}>Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL ─── */}
      <section className="cta-block">
        <div className="cta-block__bg" />
        <div className="cta-block__inner">
          <p className="body" style={{ color: "var(--white-40)", marginBottom: "16px" }}>
            A Curaçao license without the right structure is a liability, not an asset.
          </p>
          <h2 className="heading-lg cta-block__title">
            Structure it right. Once.
          </h2>
          <Link href="/contact" className="btn-primary btn-primary-lg">
            Understand what&apos;s broken →
          </Link>
          <p className="body-sm cta-block__note" style={{ color: "var(--white-25)" }}>
            We respond within 24 hours.
          </p>
        </div>
      </section>

    </main>
  );
}
