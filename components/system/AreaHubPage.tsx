import Link from "next/link";
import type { PublicArea } from "../../lib/publicAreas";
import {
  CTA_ASSESS_LABEL,
  CTA_DISCUSS_LABEL,
  WHATSAPP_ASSESS_URL,
  WHATSAPP_DISCUSS_URL,
} from "../../lib/cta";
import PageHero from "./PageHero";
import { CtaLink } from "./CtaButton";

/** Area-specific modules. approved catalog language only; no invented cases/metrics. */
function AreaSpecificModule({ area }: { area: PublicArea }) {
  if (area.id === "AREA-REG") {
    return (
      <section className="surface-elevated py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4 block">How licensing programmes are built</p>
          <h2 className="heading-section mb-4 max-w-2xl">
            Pathway first. Filings second.
          </h2>
          <p className="body-large mb-10 max-w-2xl text-pretty text-muted-foreground">
            Regulatory Structuring sequences jurisdiction fit, licensing pathway design and work
            with regulators, together with the corporate and compliance layers that decide whether
            a licence can actually operate.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Jurisdiction and pathway",
                body: "Selection and risk mapping before commercial commitments harden.",
              },
              {
                title: "Licensing programmes",
                body: "iGaming, fintech/EMI and Brazil SPA/MF work treated as coordinated programmes.",
              },
              {
                title: "Related services",
                body: "Licensing pathway design, market-entry programmes and banking readiness sequenced with the licence.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-sm border border-border bg-background p-6">
                <h3 className="mb-2 font-sans text-base font-semibold text-foreground">{item.title}</h3>
                <p className="font-sans text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (area.id === "AREA-PC") {
    return (
      <section className="surface-elevated py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4 block">Who this is for</p>
          <h2 className="heading-section mb-4 max-w-2xl">
            The individuals behind regulated operations.
          </h2>
          <p className="body-large mb-10 max-w-2xl text-muted-foreground">
            Private Clients supports founders, UBOs, executives and families whose personal holdings,
            residency, banking and tax position intersect with regulated operations.
          </p>
          <ul className="grid list-none gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Ownership and UBO architecture",
              "Personal holding organisation",
              "Residency and personal international structuring",
              "Personal banking and individual KYC readiness",
              "Personal tax coordination",
            ].map((item) => (
              <li
                key={item}
                className="rounded-sm border border-border bg-background px-4 py-3 font-sans text-sm text-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }

  if (area.id === "AREA-REM") {
    return (
      <section className="surface-elevated py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4 block">When the operation is already blocked</p>
          <h2 className="heading-section mb-4 max-w-2xl">
            Stabilise first. Rebuild the sequence.
          </h2>
          <p className="body-large mb-8 max-w-2xl text-muted-foreground">
            Remediation &amp; Readiness addresses licensing delays, banking or compliance gaps, audit
            readiness and financial-infrastructure failures that are already live. Then it sequences the
            structural fix across the required workstreams.
          </p>
          {area.intakeHref && (
            <div className="flex flex-col gap-4 rounded-sm border border-primary/30 bg-primary/[0.03] p-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="body-large max-w-xl">
                Already facing a licensing, banking, compliance or operational blockage? Start with a
                diagnostic assessment.
              </p>
              <CtaLink href={area.intakeHref} variant="primary">
                {area.intakeLabel || "Start diagnostic"} →
              </CtaLink>
            </div>
          )}
        </div>
      </section>
    );
  }

  if (area.id === "AREA-HUB") {
    return (
      <section className="surface-elevated py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4 block">Specialist network</p>
          <h2 className="heading-section mb-4 max-w-2xl">
            The right counterparties, in the right sequence.
          </h2>
          <p className="body-large mb-10 max-w-2xl text-muted-foreground">
            Octus identifies and coordinates relevant providers according to the client’s structure,
            jurisdiction and risk profile: banks and PSPs, payment providers, CSPs, local directors,
            laboratories, certification providers, KYC/AML specialists, technology platforms, local
            counsel, and tax and other specialists.
          </p>
          <ul className="grid list-none gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {(area.providerClasses || []).map((cls) => (
              <li
                key={cls}
                className="rounded-sm border border-border bg-background px-4 py-3 font-sans text-sm text-foreground"
              >
                {cls}
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-3xl font-sans text-sm leading-relaxed text-muted-foreground">
            Provider acceptance and availability remain subject to each provider’s own criteria.
          </p>
        </div>
      </section>
    );
  }

  return null;
}

export default function AreaHubPage({ area }: { area: PublicArea }) {
  const isRemediation = area.primaryCta === "assess";
  const primaryHref = isRemediation ? WHATSAPP_ASSESS_URL : WHATSAPP_DISCUSS_URL;
  const primaryLabel = isRemediation ? CTA_ASSESS_LABEL : CTA_DISCUSS_LABEL;
  const secondaryCta = isRemediation
    ? { href: WHATSAPP_DISCUSS_URL, label: CTA_DISCUSS_LABEL, external: true as const }
    : { href: "/contact", label: "Contact Octus →" };
  const eyebrow = area.crisis ? "Crisis entry" : "Services";

  return (
    <main>
      <PageHero
        eyebrow={eyebrow}
        title={area.name}
        titleSecondLine={area.oneSentence}
        description={area.summary}
        primaryCta={{ href: primaryHref, label: primaryLabel, external: true }}
        secondaryCta={secondaryCta}
      />

      {area.legalBoundary && (
        <section className="border-b border-border bg-secondary/40 py-10">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <p className="font-sans text-sm leading-relaxed text-muted-foreground">
              Legal work is delivered or coordinated through qualified counsel according to the
              jurisdiction and scope of the matter. Octus coordinates legal and structural
              architecture for regulated operations: frameworks, contractual design and counsel
              coordination within that model.
            </p>
          </div>
        </section>
      )}

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <p className="section-label mb-4 block">When clients need this</p>
            <ul className="flex list-none flex-col gap-3">
              {area.whenNeeded.map((item) => (
                <li
                  key={item}
                  className="border-l-2 border-primary/30 pl-4 font-sans text-base leading-relaxed text-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="section-label mb-4 block">Representative services</p>
            <ul className="flex list-none flex-col gap-4">
              {area.services.map((svc) => (
                <li key={svc.id} className="border-l-2 border-border pl-4">
                  <p className="font-sans text-base font-medium text-foreground">{svc.name}</p>
                  <p className="mt-1 font-sans text-sm leading-relaxed text-muted-foreground">
                    {svc.oneSentence}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <AreaSpecificModule area={area} />

      {/* Remediation CTA handled inside AREA-REM specific module; keep generic CTA only if intake exists and no specific module used it */}
      {area.intakeHref && area.id !== "AREA-REM" && (
        <section className="border-y border-border bg-primary/[0.03] py-14">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
            <p className="body-large max-w-xl">
              Already facing a licensing, banking, compliance or operational blockage? Start with a
              diagnostic assessment.
            </p>
            <CtaLink href={area.intakeHref} variant="primary">
              {area.intakeLabel || "Start diagnostic"} →
            </CtaLink>
          </div>
        </section>
      )}

      <section className="area-closing-section border-t border-border bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="area-closing-section__row">
            <div>
              <p className="section-label mb-4 block">Industries</p>
              <ul className="flex list-none flex-wrap gap-2">
                {area.markets.map((m) => (
                  <li key={m.href}>
                    <Link
                      href={m.href}
                      className="inline-flex rounded-sm border border-border px-3 py-1.5 font-sans text-sm text-foreground no-underline hover:border-primary hover:text-primary"
                    >
                      {m.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="section-label mb-4 block">Related services</p>
              <ul className="mb-4 flex list-none flex-col gap-2">
                {area.relatedDeep.map((r) => (
                  <li key={r.href}>
                    <Link
                      href={r.href}
                      className="font-sans text-sm font-medium text-primary no-underline hover:text-primary/80"
                    >
                      {r.label} →
                    </Link>
                  </li>
                ))}
                <li className="area-closing-section__all pt-1">
                  <Link
                    href="/solutions"
                    className="font-sans text-sm font-medium text-foreground no-underline hover:text-primary"
                  >
                    All services →
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
