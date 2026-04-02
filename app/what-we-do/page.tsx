import Link from "next/link";

export const metadata = {
  title: "What We Do — Octus Consulting",
  description: "Seven operational modules. One working structure. Regulatory structuring, compliance, legal architecture, corporate design, ownership, audit and international hub.",
};

const services = [
  { num: "01", title: "Regulatory Structuring", desc: "Jurisdiction selection, licensing strategy and regulatory pathway design for regulated operations.", href: "/regulatory" },
  { num: "02", title: "Compliance & Risk", desc: "Compliance framework design, operational rollout and ongoing compliance management.", href: "/compliance" },
  { num: "03", title: "Legal & Structural Architecture", desc: "Legal architecture coordinated across jurisdictions — ownership, governance and contractual frameworks.", href: "/legal-architecture" },
  { num: "04", title: "Corporate Structuring", desc: "Corporate architecture for regulated operations — onshore, offshore and cross-border.", href: "/corporate" },
  { num: "05", title: "Ownership & UBO", desc: "Ownership architecture and UBO structuring for individuals behind regulated operations.", href: "/private-clients" },
  { num: "06", title: "Audit & Readiness", desc: "Preparation for regulatory audit, certification and external review. Readiness before scrutiny starts.", href: "/audit" },
  { num: "07", title: "International Hub", desc: "Market entry coordination and cross-border expansion for regulated businesses.", href: "/international-hub" },
];

export default function WhatWeDoPage() {
  return (
    <main>
      <section className="surface-dark relative flex min-h-[70vh] flex-col justify-center pt-24 pb-16 md:min-h-[80vh] md:pt-28 md:pb-24">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <span className="label">What we do</span>
          <h1 className="font-heading text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[3.5rem] sp-headline">
            Seven operational modules.<br />
            <span style={{ color: "var(--white-40)" }}>One working structure.</span>
          </h1>
          <p className="text-lg leading-relaxed text-white/60 max-w-2xl" style={{ maxWidth: "560px" }}>
            Octus structures and coordinates regulated operations across seven
            interconnected layers — each one designed to hold under real
            regulatory and operational pressure.
          </p>
        </div>
      </section>
      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          {services.map((s, i) => (
            <Link key={s.href} href={s.href} style={{ textDecoration: "none", display: "block" }}>
              <div style={{ display: "grid", gridTemplateColumns: "48px 1fr 40px", gap: "32px", alignItems: "center", padding: "32px 0", borderBottom: "1px solid var(--border-solid)", cursor: "pointer" }}>
                <span style={{ fontFamily: "var(--font-unigeo), Unigeo64, sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", color: "var(--blue-light)" }}>{s.num}</span>
                <div>
                  <h2 className="heading-sm" style={{ marginBottom: "6px" }}>{s.title}</h2>
                  <p className="body-sm" style={{ color: "var(--white-40)" }}>{s.desc}</p>
                </div>
                <span style={{ color: "var(--white-25)", fontSize: "18px" }}>↗</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "640px" }}>
          <h2 className="heading-section" style={{ marginBottom: "20px" }}>Not sure where your operation fits?</h2>
          <p className="body-lg" style={{ marginBottom: "32px" }}>Start with a diagnostic. We map the structure before defining the scope.</p>
          <Link href="/diagnostic" className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-10 text-base font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90">Request a diagnostic →</Link>
        </div>
      </section>
    </main>
  );
}
