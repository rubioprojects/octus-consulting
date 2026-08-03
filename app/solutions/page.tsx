import Link from "next/link";
import { getAllEnrichedAreas } from "../../lib/areaHubContent";
import { SERVICE_ARCHITECTURE, SERVICE_PLACEMENT } from "../../lib/serviceArchitecture";
import { CTA_DISCUSS_LABEL, WHATSAPP_DISCUSS_URL } from "../../lib/cta";
import PageHero from "../../components/system/PageHero";
import { CtaLink } from "../../components/system/CtaButton";
import OctusEditorialDivider from "../../components/system/OctusEditorialDivider";
import { pageSocialMeta } from "../../lib/pageMeta";

export const metadata = pageSocialMeta({
  title: "Services. Execution for regulated operations",
  description:
    "Seven coordinated service areas for regulated operations: Regulatory Structuring, Compliance & Risk, Legal & Structural Architecture, Corporate Structuring, Private Clients, Remediation & Readiness, and International Hub.",
  path: "/solutions",
});

export default function ServicesIndexPage() {
  const areas = getAllEnrichedAreas();

  return (
    <main>
      <PageHero
        eyebrow="Services"
        title="Services for regulated operations."
        titleSecondLine="Seven areas. One coordinated mandate."
        description="Octus coordinates regulatory, compliance, legal, corporate, private client, remediation and specialist network workstreams so the operation can hold under scrutiny."
        primaryCta={{ href: WHATSAPP_DISCUSS_URL, label: CTA_DISCUSS_LABEL, external: true }}
        secondaryCta={{ href: "/how-we-engage", label: "How we engage →" }}
      />

      {/* 1 · Seven-area overview */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4 block">Seven areas</p>
          <h2 className="heading-section mb-12 max-w-2xl">What Octus coordinates.</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {areas.map((area) => (
              <article
                key={area.id}
                className={`flex flex-col rounded-sm border p-6 md:p-8 ${
                  area.crisis
                    ? "border-primary/40 bg-primary/[0.03]"
                    : "border-border bg-background"
                }`}
              >
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="font-sans text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
                    {area.num}
                  </span>
                  {area.crisis && (
                    <span className="rounded-sm bg-primary/10 px-2 py-1 font-sans text-[11px] font-medium uppercase tracking-wide text-primary">
                      Crisis entry
                    </span>
                  )}
                </div>
                <h3 className="mb-3 font-heading text-xl font-semibold text-foreground md:text-2xl">
                  <Link href={area.href} className="text-inherit no-underline hover:text-primary">
                    {area.name}
                  </Link>
                </h3>
                <p className="mb-4 flex-1 font-sans text-sm leading-relaxed text-muted-foreground">
                  {area.oneSentence}
                </p>
                <ul className="mb-6 list-none space-y-1">
                  {area.families.slice(0, 5).map((f) => (
                    <li key={f.id} className="font-sans text-xs text-muted-foreground">
                      · {f.name}
                    </li>
                  ))}
                </ul>
                <Link
                  href={area.href}
                  className="font-sans text-sm font-medium text-primary no-underline hover:text-primary/80"
                >
                  Open area →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 2 · How areas connect */}
      <section className="surface-elevated py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-3 block">Connections</p>
          <h2 className="heading-section mb-6 max-w-2xl">How the areas connect.</h2>
          <p className="body-large mb-10 max-w-2xl text-muted-foreground">
            Licensing, corporate structure, compliance, legal architecture and banking readiness
            sequence together. No area operates in isolation.
          </p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              { from: "Regulatory Structuring", to: "Corporate Structuring", note: "Entity design gates licensing." },
              { from: "Compliance & Risk", to: "Regulatory Structuring", note: "Controls evaluated with the licence." },
              { from: "International Hub", to: "All areas", note: "Specialist network sequenced to programmes." },
              { from: "Remediation & Readiness", to: "Blocked operations", note: "Crisis entry when progress stops." },
              { from: "Private Clients", to: "Corporate Structuring", note: "Personal and group ownership aligned." },
              { from: "Legal & Structural Architecture", to: "Regulatory Structuring", note: "Contracts match licence conditions." },
            ].map((row) => (
              <div key={row.from + row.to} className="rounded-sm border border-border bg-background p-5">
                <p className="font-sans text-sm font-medium text-primary">
                  {row.from} → {row.to}
                </p>
                <p className="mt-1 font-sans text-sm text-muted-foreground">{row.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 · Service-family map */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-3 block">Family architecture</p>
          <h2 className="heading-section mb-4 max-w-2xl">
            {SERVICE_ARCHITECTURE.family_count} service families across seven areas.
          </h2>
          <p className="body-large mb-10 max-w-2xl text-muted-foreground">
            Families group {SERVICE_ARCHITECTURE.service_count} substantiated services for hub
            presentation — not peer areas.
          </p>
          {areas.map((area) => (
            <div key={area.id} className="mb-8 border-t border-border pt-6">
              <h3 className="mb-3 font-heading text-lg font-semibold">
                <Link href={area.href} className="text-foreground no-underline hover:text-primary">
                  {area.name}
                </Link>
                <span className="ml-2 font-sans text-sm font-normal text-muted-foreground">
                  ({area.families.length} families)
                </span>
              </h3>
              <p className="font-sans text-sm text-muted-foreground">
                {area.families.map((f) => f.name).join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4 · Cross-cut Banking & Payments */}
      <section className="surface-elevated py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-3 block">Cross-cutting</p>
          <h2 className="heading-section mb-4 max-w-xl">Banking &amp; Payments infrastructure.</h2>
          <p className="body-large mb-6 max-w-2xl text-muted-foreground">
            Not an eighth area — banking readiness routes through Corporate, International Hub and
            Remediation when infrastructure fails.
          </p>
          <Link
            href="/solutions/banking-payments-infrastructure"
            className="font-sans text-sm font-medium text-primary no-underline hover:text-primary/80"
          >
            Banking &amp; Payments →
          </Link>
        </div>
      </section>

      {/* 5 · Cross-cut Tax */}
      <section className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-3 block">Cross-cutting</p>
          <h2 className="heading-section mb-4 max-w-xl">Tax coordination.</h2>
          <p className="body-large mb-6 max-w-2xl text-muted-foreground">
            Corporate tax, personal tax, tax remediation and specialist coordination — mapped
            explicitly, never as a peer area.
          </p>
          <ul className="list-none space-y-2 font-sans text-sm text-muted-foreground">
            {SERVICE_PLACEMENT.tax_services.map((id) => {
              const svc = SERVICE_PLACEMENT.services.find((s) => s.id === id);
              return svc ? (
                <li key={id}>
                  · {svc.exact_public_name} — {svc.primary_area}
                </li>
              ) : null;
            })}
          </ul>
        </div>
      </section>

      {/* 6 · Multi-jurisdiction execution */}
      <section className="border-y border-border bg-secondary/20 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-3 block">Multi-jurisdiction</p>
          <h2 className="heading-section mb-4 max-w-xl">Execution across jurisdictions.</h2>
          <p className="body-large mb-6 max-w-2xl text-muted-foreground">
            Brazil SPA/MF, EU licensing, offshore holdings and banking access require sequenced
            coordination — not copy-paste from one venue to another.
          </p>
          <div className="flex flex-wrap gap-2">
            <Link href="/brazil" className="rounded-sm border border-border px-3 py-1.5 font-sans text-sm no-underline hover:border-primary">
              Brazil
            </Link>
            <Link href="/jurisdictions" className="rounded-sm border border-border px-3 py-1.5 font-sans text-sm no-underline hover:border-primary">
              All jurisdictions
            </Link>
            <Link href="/international-hub" className="rounded-sm border border-border px-3 py-1.5 font-sans text-sm no-underline hover:border-primary">
              International Hub
            </Link>
          </div>
        </div>
      </section>

      {/* 7 · Industries */}
      <section className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4 block">Industries</p>
          <ul className="flex list-none flex-wrap gap-2">
            {[
              { label: "iGaming", href: "/markets/igaming" },
              { label: "Fintech", href: "/markets/fintech" },
              { label: "Digital Assets", href: "/markets/crypto" },
              { label: "High-Risk Operations", href: "/markets/high-risk" },
            ].map((m) => (
              <li key={m.href}>
                <Link
                  href={m.href}
                  className="inline-flex rounded-sm border border-border px-3 py-1.5 font-sans text-sm no-underline hover:border-primary"
                >
                  {m.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 8 · How Octus engages */}
      <section className="surface-elevated py-16 md:py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <div>
            <p className="section-label mb-2 block">Engagement</p>
            <p className="body-large max-w-xl">
              Lead Contractor Programme and engagement models built for accountability.
            </p>
          </div>
          <CtaLink href="/how-we-engage" variant="primary">
            How we engage →
          </CtaLink>
        </div>
      </section>

      {/* 9 · Final CTA */}
      <section className="surface-dark py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <OctusEditorialDivider className="mb-10 opacity-30" />
          <h2 className="mb-8 font-heading text-2xl font-semibold text-white md:text-3xl">
            Discuss your operation.
          </h2>
          <CtaLink
            href={WHATSAPP_DISCUSS_URL}
            variant="on-dark"
            target="_blank"
            rel="noopener noreferrer"
          >
            {CTA_DISCUSS_LABEL}
          </CtaLink>
        </div>
      </section>
    </main>
  );
}
