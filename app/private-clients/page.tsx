import Link from "next/link";

export const metadata = {
  title: "Ownership & UBO Architecture — Octus Consulting",
  description:
    "Ownership architecture for individuals behind regulated operations. The individual is part of the regulated structure — not separate from it. Octus structures UBO frameworks, personal holding design and individual compliance exposure.",
  robots: { index: false, follow: false },
};

export default function PrivateClientsPage() {
  return (
    <main>

      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="page-hero section-padded">
        <div className="container">
          <span className="label">Ownership & UBO Architecture</span>
          <h1 className="heading-xl sp-headline">
            The individual behind the operation
            <br />
            <span style={{ color: "var(--white-40)" }}>
              is part of the regulated structure.
            </span>
          </h1>
          <p
            className="heading-sm"
            style={{
              color: "var(--blue-light)",
              marginBottom: "24px",
              fontSize: "16px",
              fontWeight: 500,
              letterSpacing: "-0.01em",
            }}
          >
            This is not private structuring in isolation. It is ownership
            architecture tied to regulated operations, licensing exposure and
            banking scrutiny.
          </p>
          <p className="body-lg sp-sub">
            Regulated operations are scrutinised at every layer — including the
            individuals who own, control and benefit from them. UBO disclosure,
            personal holding structures and individual compliance exposure are
            not afterthoughts. They are part of whether the operation holds.
          </p>
          <p className="body-lg sp-sub" style={{ marginTop: "16px" }}>
            Octus structures and coordinates ownership architecture and
            individual compliance frameworks — designed to satisfy regulatory
            and banking requirements while managing personal exposure.
          </p>
          <div style={{ marginTop: "48px" }}>
            <Link href="/contact" className="btn-primary btn-primary-lg">
              Structure your exposure →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WHERE IT FAILS ───────────────────────────────────────── */}
      <section className="section-dark section-padded">
        <div className="container" style={{ maxWidth: "760px" }}>
          <span className="label">Where individual structure fails</span>
          <h2 className="heading-md" style={{ marginBottom: "32px" }}>
            The operation was structured. The individual was not.
          </h2>
          <ul className="problem-list">
            {[
              "UBO disclosure does not match the actual ownership and control reality — creating regulatory exposure at licensing or audit",
              "Personal holding structure not aligned with the licensing jurisdiction's requirements for beneficial ownership presentation",
              "Individual compliance exposure (PEP status, adverse media, sanctions screening) not managed before it surfaces in a bank or regulatory review",
              "Private wealth and operating assets structurally mixed — creating liability and banking exposure that affects the operational entities",
              "KYC and due diligence requirements at the individual level not prepared — causing delays at account opening, licensing or investor onboarding",
              "Personal residency and tax structure not aligned with the international corporate architecture — inconsistency that surfaces under scrutiny",
            ].map((item) => (
              <li key={item}>
                <span className="problem-dot" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─── WHAT WE STRUCTURE ────────────────────────────────────── */}
      <section className="sp-what section-padded">
        <div className="container">
          <span className="label">What we structure</span>
          <h2 className="heading-lg sp-headline">
            Ownership architecture designed to hold.
          </h2>
          <p className="body-lg sp-what-body" style={{ marginBottom: "64px" }}>
            Ownership and personal exposure are part of the operational
            architecture — not external to it. From UBO frameworks to
            cross-border holding structures — coordinated to align with the
            regulatory and banking requirements of each jurisdiction, working
            alongside jurisdiction-specific legal and financial expertise where
            required.
          </p>
          <div className="grid-auto-lg">
            {[
              {
                title: "UBO Framework & Disclosure",
                body: "Ultimate beneficial ownership structures designed to satisfy regulatory disclosure obligations — across licensing, banking and corporate review — while reflecting the actual ownership and control reality.",
              },
              {
                title: "Personal Holding Structures",
                body: "Individual holding architectures for high-net-worth clients behind regulated operations — coordinated to manage personal asset exposure, regulatory visibility and banking access simultaneously.",
              },
              {
                title: "Individual KYC & Due Diligence Readiness",
                body: "Preparation of individual compliance profiles for banking, licensing and investor review — including PEP screening, adverse media management and documentation aligned with institutional due diligence standards.",
              },
              {
                title: "PEP & Sanctions Exposure Management",
                body: "Structured approach to politically exposed person status, sanctions screening and adverse media — ensuring the individual's compliance profile does not become a blocker at the operational level.",
              },
              {
                title: "Residency & International Structure Alignment",
                body: "Coordination of personal residency position, tax structure and international corporate architecture — ensuring consistency across jurisdictions and regulatory environments.",
              },
              {
                title: "Separation of Personal & Operational Assets",
                body: "Structural separation between private wealth and operating entities — designed to protect personal assets from operational risk while maintaining the corporate coherence required for regulatory and banking purposes.",
              },
            ].map((item) => (
              <div key={item.title} className="card-lg">
                <h3 className="heading-card" style={{ marginBottom: "12px" }}>
                  {item.title}
                </h3>
                <p className="body">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHO THIS IS FOR ──────────────────────────────────────── */}
      <section className="section-dark section-padded">
        <div className="container">
          <span className="label">Who this is for</span>
          <h2 className="heading-md" style={{ marginBottom: "48px" }}>
            Individuals whose personal structure affects
            their operation.
          </h2>
          <div className="grid-auto-lg">
            {[
              {
                name: "Founders and shareholders of regulated businesses",
                desc: "Individuals who own or control licensed entities — where UBO disclosure, personal compliance and ownership structure directly affect the regulatory and banking position of the operation.",
              },
              {
                name: "High-net-worth individuals in high-risk sectors",
                desc: "Clients with complex personal wealth and corporate structures across multiple jurisdictions — where personal and operational exposure needs to be separated and managed simultaneously.",
              },
              {
                name: "Individuals with PEP or adverse media exposure",
                desc: "Clients whose personal compliance profile creates risk at licensing, banking or investor level — requiring structured management before it surfaces as a blocker.",
              },
              {
                name: "International clients entering regulated markets",
                desc: "Individuals structuring entry into regulated markets — where personal holding structures, residency and UBO alignment need to be coordinated with the corporate and regulatory architecture.",
              },
            ].map((ind) => (
              <div key={ind.name} className="card">
                <h3 className="heading-card" style={{ marginBottom: "12px" }}>
                  {ind.name}
                </h3>
                <p className="body-sm">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ─── HOW THE PROCESS WORKS ────────────────────────────── */}
      <section className="section-dark section-padded">
        <div className="container" style={{ maxWidth: "760px" }}>
          <span className="label">How the process works</span>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {[
              { step: "01", title: "Exposure review", body: "We assess how the individual sits inside the regulated structure — ownership, disclosure, banking exposure and personal compliance risk." },
              { step: "02", title: "Ownership architecture", body: "We structure the ownership and UBO layer to satisfy banking, disclosure and licensing requirements while managing personal exposure." },
              { step: "03", title: "Alignment", body: "We coordinate the personal structure with the wider corporate and regulatory architecture — ensuring coherence across the full operational stack." },
            ].map((s, i) => (
              <div key={s.step} style={{ display: "grid", gridTemplateColumns: "48px 1fr", gap: "24px", padding: "28px 0", borderBottom: i < 2 ? "1px solid var(--border)" : "none" }}>
                <span style={{ fontFamily: "var(--font-unigeo), Unigeo64, sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", color: "var(--blue-light)", paddingTop: "4px" }}>{s.step}</span>
                <div>
                  <h3 className="heading-card" style={{ marginBottom: "8px" }}>{s.title}</h3>
                  <p className="body">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────────────── */}
      <section className="section-padded" style={{ padding: "130px 40px" }}>
        <div className="container" style={{ maxWidth: "760px" }}>
          <span className="label">Common questions</span>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {[
              { q: "Is this private wealth planning?", a: "No. This is ownership architecture tied to regulated operations, licensing exposure and banking scrutiny — not standalone private structuring." },
              { q: "Why does the individual structure matter for the operation?", a: "Because the individual behind the operation is part of the regulated structure, not separate from it. UBO disclosure, personal compliance and ownership presentation all affect operational outcomes." },
              { q: "Can personal exposure affect banking and licensing outcomes?", a: "Yes. Ownership transparency, source-of-funds questions and disclosure inconsistencies can all directly affect whether accounts are opened and licenses granted." },
              { q: "Is this only relevant for founders?", a: "No. It also matters for investors, controllers, silent partners and other individuals with real ownership or control exposure across the structure." },
            ].map((item, i) => (
              <div key={i} style={{ padding: "28px 0", borderBottom: "1px solid var(--border)" }}>
                <h3 className="heading-card" style={{ marginBottom: "12px", color: "var(--white)" }}>{item.q}</h3>
                <p className="body">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL ────────────────────────────────────────────── */}
      <section className="cta-block">
        <div className="cta-block__bg" />
        <div className="cta-block__inner">
          <p className="body" style={{ color: "var(--white-40)", marginBottom: "12px" }}>
            If your personal structure affects the regulatory or banking
            position of your operation —
          </p>
          <h2 className="heading-lg cta-block__title">
            Structure your exposure before it surfaces.
          </h2>
          <Link href="/contact" className="btn-primary btn-primary-lg">
            Structure your exposure →
          </Link>
          <p className="body-sm cta-block__note" style={{ color: "var(--white-25)" }}>
            Initial diagnostic call. We start by mapping where the individual
            structure creates operational risk.
          </p>
        </div>
      </section>

    </main>
  );
}
