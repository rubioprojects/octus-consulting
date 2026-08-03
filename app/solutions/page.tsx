import Link from "next/link";
import { getAllEnrichedAreas } from "../../lib/areaHubContent";
import { CTA_DISCUSS_LABEL, WHATSAPP_DISCUSS_URL } from "../../lib/cta";
import PageHero from "../../components/system/PageHero";
import { pageSocialMeta } from "../../lib/pageMeta";

export const metadata = pageSocialMeta({
  title: "Services. Execution for regulated operations",
  description:
    "Seven coordinated service areas for regulated operations: Regulatory Structuring, Compliance & Risk, Legal & Structural Architecture, Corporate Structuring, Private Clients, Remediation & Readiness, and International Hub.",
  path: "/solutions",
});

const REPRESENTATIVE_THEMES: Record<string, string[]> = {
  "AREA-REG": [
    "Jurisdiction and pathway strategy",
    "iGaming licensing",
    "Fintech and payments authorisations",
    "Brazil SPA/MF",
  ],
  "AREA-CMP": [
    "AML, KYC and onboarding",
    "Compliance operations",
    "Privacy and DPO",
    "Certification readiness",
  ],
  "AREA-LEG": [
    "Contractual architecture",
    "Regulatory opinions",
    "Counsel coordination",
  ],
  "AREA-CORP": [
    "Holdings and ownership",
    "Entity formation",
    "Banking readiness",
    "Corporate tax planning",
  ],
  "AREA-PC": [
    "UBO and ownership",
    "Personal holdings",
    "Residence structuring",
    "Personal banking and tax",
  ],
  "AREA-REM": [
    "Structural diagnosis",
    "Licensing remediation",
    "Banking and compliance recovery",
    "Audit readiness",
  ],
  "AREA-HUB": [
    "Multi-country market entry",
    "Banks and PSPs",
    "CSP and formation partners",
    "Labs and specialist counsel",
  ],
};

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
        secondaryCta={{ href: "/how-we-engage", label: "How we engage", quiet: true }}
      />

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4 block">Seven areas</p>
          <h2 className="heading-section mb-12 max-w-2xl">What Octus coordinates.</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {areas.map((area) => {
              const themes = REPRESENTATIVE_THEMES[area.id] ?? area.families.slice(0, 4).map((f) => f.name);
              return (
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
                    {themes.slice(0, 4).map((theme) => (
                      <li key={theme} className="font-sans text-xs text-muted-foreground">
                        · {theme}
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
              );
            })}
          </div>
        </div>
      </section>

      <section className="surface-elevated py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-3 block">Connections</p>
          <h2 className="heading-section mb-6 max-w-2xl">How the areas connect.</h2>
          <p className="body-large mb-10 max-w-2xl text-muted-foreground">
            Licensing, corporate structure, compliance, legal architecture and banking readiness
            sequence together so each workstream supports the next.
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

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-3 block">Cross-cutting capabilities</p>
          <h2 className="heading-section mb-10 max-w-2xl">Capabilities that support the seven areas.</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-sm border border-border p-6 md:p-8">
              <h3 className="mb-3 font-heading text-xl font-semibold text-foreground">
                Banking and payments
              </h3>
              <p className="mb-5 font-sans text-sm leading-relaxed text-muted-foreground">
                Banking and payments support the regulatory, corporate and compliance structures that
                need them.
              </p>
              <Link
                href="/solutions/banking-payments-infrastructure"
                className="font-sans text-sm font-medium text-primary no-underline hover:text-primary/80"
              >
                Banking &amp; Payments →
              </Link>
            </div>
            <div className="rounded-sm border border-border p-6 md:p-8">
              <h3 className="mb-3 font-heading text-xl font-semibold text-foreground">
                Tax coordination
              </h3>
              <p className="font-sans text-sm leading-relaxed text-muted-foreground">
                Tax coordination is integrated where corporate, private-client and remediation
                structures require it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/20 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-3 block">Multi-jurisdiction</p>
          <h2 className="heading-section mb-4 max-w-xl">Execution across jurisdictions.</h2>
          <p className="body-large mb-6 max-w-2xl text-muted-foreground">
            Brazil SPA/MF, European licensing, offshore holdings and banking access require sequenced
            coordination tailored to each venue.
          </p>
          <div className="flex flex-wrap gap-2">
            <Link href="/brazil" className="inline-flex min-h-11 items-center rounded-sm border border-border px-3 py-2 font-sans text-sm no-underline hover:border-primary">
              Brazil
            </Link>
            <Link href="/jurisdictions" className="inline-flex min-h-11 items-center rounded-sm border border-border px-3 py-2 font-sans text-sm no-underline hover:border-primary">
              All jurisdictions
            </Link>
            <Link href="/international-hub" className="inline-flex min-h-11 items-center rounded-sm border border-border px-3 py-2 font-sans text-sm no-underline hover:border-primary">
              International Hub
            </Link>
          </div>
        </div>
      </section>

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
                  className="inline-flex min-h-11 items-center rounded-sm border border-border px-3 py-2 font-sans text-sm no-underline hover:border-primary"
                >
                  {m.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="surface-elevated py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-2 block">Engagement</p>
          <h2 className="heading-section mb-4 max-w-xl">How Octus engages.</h2>
          <p className="body-large mb-6 max-w-xl text-muted-foreground">
            Lead Contractor Programme and engagement models built for accountability.
          </p>
          <Link
            href="/how-we-engage"
            className="font-sans text-sm font-medium text-primary no-underline hover:text-primary/80"
          >
            How we engage →
          </Link>
        </div>
      </section>

      <section className="bg-background py-14 md:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="mb-3 font-heading text-xl font-semibold text-foreground md:text-2xl">
            Ready to discuss your operation?
          </h2>
          <Link
            href={WHATSAPP_DISCUSS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm font-medium text-primary no-underline hover:text-primary/80"
          >
            {CTA_DISCUSS_LABEL}
          </Link>
        </div>
      </section>
    </main>
  );
}
