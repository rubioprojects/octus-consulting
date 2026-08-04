import Link from "next/link";
import { CTA_DISCUSS_LABEL, WHATSAPP_DISCUSS_URL } from "../../../lib/cta";
import { pageSocialMeta } from "../../../lib/pageMeta";

export const metadata = pageSocialMeta({
  title: "iGaming Licensing & Regulatory Structuring | Octus",
  description:
    "End-to-end regulatory structuring, licensing execution and banking coordination for iGaming and betting operators across jurisdictions.",
  path: "/markets/igaming",
});

export default function MarketsIGamingPage() {
  return (
    <main>

      {/* ─── HERO ─── */}
      <section className="surface-dark relative flex min-h-[70vh] flex-col justify-center pt-24 pb-16 md:min-h-[80vh] md:pt-28 md:pb-24">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <span className="label">Markets · iGaming & Betting</span>
          <h1 className="font-heading text-[1.85rem] font-semibold leading-[1.18] tracking-[-0.005em] text-[color:var(--text-primary-on-dark)] sm:text-4xl md:text-5xl lg:text-[3.35rem] lg:leading-[1.12] sp-headline">
            Most iGaming operations don&apos;t fail
            <br />
            <span style={{ color: "var(--white-40)" }}>
              because of regulation.
            </span>
          </h1>
          <p className="text-lg leading-relaxed text-white/60 max-w-2xl" style={{ maxWidth: "620px" }}>
            They fail because the structure behind the operation was wrong from
            day one. Wrong jurisdiction. Wrong entity. Wrong compliance layer.
            By the time the regulator asks questions, the damage is already done.
          </p>
          <div style={{ marginTop: "32px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a href={WHATSAPP_DISCUSS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-10 text-base font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90">{CTA_DISCUSS_LABEL}</a>
            <Link
              href="/solutions/regulatory/igaming-licensing"
              className="inline-flex h-12 items-center justify-center rounded-sm border border-white/20 bg-transparent px-10 text-base font-medium text-white/80 transition-colors hover:border-white/40 hover:text-white"
            >
              See full licensing process →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── PROBLEM ─── */}
      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <h2 className="heading-section" style={{ marginBottom: "24px" }}>
            The iGaming industry has a structural problem
            <br />
            <span style={{ color: "var(--blue-light)" }}>disguised as a regulatory one.</span>
          </h2>
          <p className="body-lg" style={{ marginBottom: "20px" }}>
            Operators spend months chasing licenses in the wrong jurisdiction.
            They get licensed: then can&apos;t open a bank account. They build
            compliance frameworks that collapse under the first real audit.
          </p>
          <p className="body-lg" style={{ marginBottom: "20px" }}>
            The problem is never the regulation itself. It&apos;s the gap between
            what the operator built and what the regulator, the bank, and the
            payment processor actually require.
          </p>
          <p
            className="heading-sm text-foreground"
            style={{ borderTop: "1px solid var(--border-solid)", paddingTop: "24px", marginTop: "8px" }}
          >
            That gap is structural.{" "}
            <span className="text-primary">We close it.</span>
          </p>
        </div>
      </section>

      {/* ─── WHAT WE DO ─── */}
      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <p className="label">What Octus does for iGaming operators</p>
          <h2 className="heading-section" style={{ marginBottom: "40px" }}>
            End-to-end structuring.{" "}
            <span style={{ color: "var(--blue-light)" }}>Not advisory.</span>
          </h2>
          <div className="grid-auto-lg">
            {[
              {
                title: "Licensing strategy & execution",
                desc: "We help select the jurisdiction, design the structure and prepare the dossier so the operator can pursue authorisation with local counsel where required. From first filing readiness to post-submission support.",
              },
              {
                title: "Banking & payment readiness",
                desc: "Licensed but no bank account? We restructure AML documentation, align the corporate layer and prepare materials for banks and PSPs. Banking access is never guaranteed.",
              },
              {
                title: "Compliance that holds",
                desc: "KYC, AML, responsible gaming, DPO: built to survive real scrutiny. Not a policies folder. A working compliance structure.",
              },
              {
                title: "Corporate & entity design",
                desc: "Onshore, offshore, holding structures: designed for the operation, not for the accountant. Defensible under regulatory and banking review.",
              },
              {
                title: "Lab certification readiness",
                desc: "We prepare operations for technical certification programmes commonly required by regulators (for example independent laboratory testing). Gap analysis, evidence register and audit coordination — Octus is not affiliated with any laboratory.",
              },
              {
                title: "Stabilization after licensing",
                desc: "Authorisation is not the end. We help stabilize the operation across compliance cycles, banking maintenance and regulatory reporting.",
              },
            ].map((item) => (
              <div key={item.title} className="card" style={{ padding: "28px" }}>
                <h3 className="text-lg font-semibold text-primary font-sans" style={{ marginBottom: "12px" }}>{item.title}</h3>
                <p className="body-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SELECTED MANDATES ─── */}
      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <p className="label">Selected mandates</p>
          <h2 className="heading-section" style={{ marginBottom: "32px" }}>
            Real operations. Real outcomes.
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "iGaming operator · Curaçao pathway",
                body: "Licensing preparation, corporate structuring and banking readiness after prior advisory work left the operation without a workable banking path. Illustrative mandate pattern — outcomes and timelines vary.",
              },
              {
                title: "Multi-brand sportsbook · multi-jurisdiction",
                body: "Cross-border restructuring across Brazil, Curaçao and Malta. Entity realignment, compliance harmonisation and coordinated banking strategy.",
              },
              {
                title: "Affiliate-led betting operation",
                body: "Compliance remediation after regulatory inquiry. AML framework rebuild, evidence register reconstruction and payment-processor recovery support.",
              },
              {
                title: "Sports betting operator · Brazil (SPA/MF)",
                body: "Regulatory dossier preparation and corporate structuring to support the Brazilian fixed-odds authorisation pathway under Laws 13,756/2018 and 14,790/2023 and SPA/MF ordinances. Octus is not affiliated with SPA/MF.",
              },
            ].map((m, i) => (
              <div
                key={i}
                className="flex flex-col rounded-lg border border-y border-r border-border/50 border-l-[3px] border-l-primary bg-background p-6 md:p-8"
              >
                <h3 className="mb-4 font-sans text-lg font-semibold text-primary">{m.title}</h3>
                <p className="body-text">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── JURISDICTIONS ─── */}
      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <p className="label">Where we operate</p>
          <h2 className="heading-section" style={{ marginBottom: "24px" }}>
            Active across the jurisdictions that matter.
          </h2>
          <p className="body-lg" style={{ marginBottom: "32px" }}>
            We don&apos;t list jurisdictions to impress. We work in the markets
            where iGaming operators actually build and scale.
          </p>
          <p className="body-sm" style={{ marginBottom: "16px" }}>
            Dedicated jurisdiction pages cover our primary landings. Additional markets may appear as advisory references without a dedicated public page.
          </p>
          <div className="chip-row" style={{ gap: "10px", flexWrap: "wrap" }}>
            {["Brazil (SPA/MF)", "Curaçao", "Malta (MGA)", "Anjouan", "Isle of Man", "Portugal"].map((j) => (
              <span key={j} className="chip-juris">{j}</span>
            ))}
          </div>
          <div style={{ marginTop: "32px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link
              href="/jurisdictions/curacao"
              className="inline-flex h-12 items-center justify-center rounded-sm border border-border bg-transparent px-10 text-base font-medium text-primary transition-colors hover:bg-secondary"
            >
              Curaçao jurisdiction →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── SITUATIONS ─── */}
      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <p className="label">Situations we resolve</p>
          <h2 className="heading-section" style={{ marginBottom: "32px" }}>
            If this sounds familiar, we can help.
          </h2>
          <div className="grid-3">
            {[
              {
                tag: "Licensing",
                title: "License stuck for months",
                body: "Application filed, no movement. Usually a structural gap in the dossier or entity setup, rather than regulatory hostility.",
              },
              {
                tag: "Banking",
                title: "Licensed but no bank account",
                body: "Active license, zero operational accounts. The bank\u2019s risk model doesn\u2019t match your corporate and compliance structure.",
              },
              {
                tag: "Expansion",
                title: "Entering a new market blind",
                body: "Expanding to Brazil, Malta or another jurisdiction without a clear structural path. Wrong entity, wrong compliance, wrong timeline.",
              },
            ].map((c) => (
              <div
                key={c.tag}
                className="flex flex-col rounded-lg border border-y border-r border-border/50 border-l-[3px] border-l-primary bg-background p-6 md:p-8"
              >
                <span className="mb-4 font-sans text-xs font-medium uppercase tracking-wider text-accent">{c.tag}</span>
                <h3 className="mb-4 font-sans text-lg font-semibold text-primary">{c.title}</h3>
                <p className="body-text">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CROSS-LINKS ─── */}
      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <p className="label">Go deeper</p>
          <div className="grid-3">
            {[
              { title: "Curaçao Licensing", desc: "How we structure iGaming operations in Curaçao.", href: "/jurisdictions/curacao" },
              { title: "Full Licensing Process", desc: "End-to-end licensing execution across jurisdictions.", href: "/solutions/regulatory/igaming-licensing" },
              { title: "Compliance & Risk", desc: "The compliance framework that supports your license.", href: "/solutions/compliance-risk" },
            ].map((r) => (
              <Link key={r.title} href={r.href} className="card-grid" style={{ padding: "28px" }}>
                <h3 className="text-lg font-semibold text-primary font-sans" style={{ marginBottom: "8px" }}>{r.title}</h3>
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
          <p className="body-text" style={{ color: "var(--white-40)", marginBottom: "16px" }}>
            Your iGaming operation is only as strong as the structure behind it.
          </p>
          <h2 className="heading-lg cta-block__title">
            Fix the structure before you scale.
          </h2>
          <a href={WHATSAPP_DISCUSS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-10 text-base font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90">{CTA_DISCUSS_LABEL}</a>
          <p className="body-sm cta-block__note" style={{ color: "var(--white-25)" }}>
            Diagnostic call, not a sales pitch. We start by identifying where your structure breaks.
          </p>
        </div>
      </section>

    </main>
  );
}
