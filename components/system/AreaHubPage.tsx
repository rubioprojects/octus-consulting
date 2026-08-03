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
import OctusEditorialDivider from "./OctusEditorialDivider";
import OctusSymbolMarker from "./OctusSymbolMarker";
import OctusChapterTransition from "./OctusChapterTransition";
import BrandSectionMotif from "./BrandSectionMotif";

/** Area-specific modules. Approved catalog language only; no invented cases/metrics. */
function AreaSpecificModule({ area }: { area: PublicArea }) {
  if (area.id === "AREA-REG") {
    return (
      <section className="surface-elevated py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-end gap-6">
            <span className="editorial-numeral" aria-hidden="true">
              {area.num}
            </span>
            <div>
              <p className="section-label mb-3 block">Operating model</p>
              <h2 className="heading-section max-w-2xl">Pathway first. Filings second.</h2>
            </div>
          </div>
          <p className="body-large mb-10 max-w-2xl text-pretty text-muted-foreground">
            Regulatory Structuring sequences jurisdiction fit, licensing pathway design and work
            with regulators, together with the corporate and compliance layers that decide whether
            a licence can actually operate.
          </p>
          <div className="grid gap-0 md:grid-cols-3 md:divide-x md:divide-border">
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
            ].map((item, i) => (
              <div key={item.title} className="border-t border-border px-0 py-6 md:border-t-0 md:px-8 md:first:pl-0 md:last:pr-0">
                <p className="mb-2 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-primary">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mb-2 font-sans text-base font-semibold text-foreground">{item.title}</h3>
                <p className="font-sans text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (area.id === "AREA-CMP") {
    return (
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <OctusEditorialDivider className="mb-12" />
          <p className="section-label mb-3 block">What becomes operational</p>
          <h2 className="heading-section mb-8 max-w-2xl">
            Controls that survive supervision, not just the application pack.
          </h2>
          <ul className="grid list-none gap-4 md:grid-cols-2">
            {[
              "AML / KYC / CDD frameworks built for live volume",
              "Compliance-as-a-Service as an owned function",
              "Internal controls with clear escalation paths",
              "Certification and lab readiness when the programme requires it",
            ].map((item) => (
              <li
                key={item}
                className="border-l-2 border-primary/40 bg-secondary/30 py-4 pl-5 pr-4 font-sans text-sm leading-relaxed text-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }

  if (area.id === "AREA-LEG") {
    return (
      <section className="surface-dark relative overflow-hidden py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 opacity-[0.07]" aria-hidden="true">
          {/* structural depth only */}
          <div className="absolute -right-16 top-0 h-72 w-72 rounded-full border border-white/40" />
          <div className="absolute -right-4 top-16 h-48 w-48 rounded-full border border-white/30" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-3 block text-white/55">Architecture under counsel</p>
          <h2 className="heading-section mb-6 max-w-2xl text-white">
            Frameworks, contracts and counsel sequenced to the operation.
          </h2>
          <p className="body-large max-w-2xl text-white/70">
            Legal &amp; Structural Architecture coordinates contractual design, multi-jurisdiction
            frameworks and qualified counsel. Legal work is delivered through counsel according to
            the jurisdiction and scope of the matter.
          </p>
        </div>
      </section>
    );
  }

  if (area.id === "AREA-CORP") {
    return (
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-center gap-4">
            <OctusSymbolMarker />
            <p className="section-label mb-0 block">Ownership that can be explained</p>
          </div>
          <h2 className="heading-section mb-8 max-w-2xl">
            Holdings, vehicles and governance that withstand scrutiny.
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Holding design",
                body: "Ownership layers designed for regulatory, banking and commercial review.",
              },
              {
                title: "Formation programmes",
                body: "Company formation sequenced with licensing and banking pathways.",
              },
              {
                title: "Cross-border structure",
                body: "Vehicles and governance that remain coherent across jurisdictions.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-sm border border-border bg-secondary/20 p-6">
                <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">{item.title}</h3>
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
                className="border-l-2 border-primary/35 bg-background px-4 py-3 font-sans text-sm text-foreground"
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
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end gap-5">
            <span className="editorial-numeral" aria-hidden="true">
              {area.num}
            </span>
            <div>
              <p className="section-label mb-3 block">When the operation is already blocked</p>
              <h2 className="heading-section max-w-2xl">Stabilise first. Rebuild the sequence.</h2>
            </div>
          </div>
          <p className="body-large mb-8 max-w-2xl text-muted-foreground">
            Remediation &amp; Readiness addresses licensing delays, banking or compliance gaps, audit
            readiness and financial-infrastructure failures that are already live. Then it sequences the
            structural fix across the required workstreams.
          </p>
          {area.intakeHref && (
            <div className="flex flex-col gap-4 border border-primary/30 bg-primary/[0.03] p-6 sm:flex-row sm:items-center sm:justify-between">
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
          <OctusEditorialDivider className="mb-12" />
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

function ProblemModule({ area }: { area: PublicArea }) {
  const reverse = area.id === "AREA-CMP" || area.id === "AREA-HUB";
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`grid gap-12 lg:grid-cols-2 lg:gap-16 ${
            reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
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
      </div>
    </section>
  );
}

export default function AreaHubPage({ area }: { area: PublicArea }) {
  const isRemediation = area.primaryCta === "assess";
  const primaryHref = isRemediation ? WHATSAPP_ASSESS_URL : WHATSAPP_DISCUSS_URL;
  const primaryLabel = isRemediation ? CTA_ASSESS_LABEL : CTA_DISCUSS_LABEL;
  const secondaryCta = isRemediation
    ? { href: WHATSAPP_DISCUSS_URL, label: CTA_DISCUSS_LABEL, external: true as const }
    : { href: "/contact", label: "Contact Octus →" };
  const eyebrow = area.crisis ? "Crisis entry" : `Services · ${area.num}`;
  const compactHero = area.id === "AREA-PC" || area.id === "AREA-HUB";
  const specificBeforeProblem = area.id === "AREA-REM" || area.id === "AREA-LEG";

  return (
    <main>
      <PageHero
        eyebrow={eyebrow}
        title={area.name}
        titleSecondLine={area.oneSentence}
        description={area.summary}
        primaryCta={{ href: primaryHref, label: primaryLabel, external: true }}
        secondaryCta={secondaryCta}
        compact={compactHero}
      />

      {area.legalBoundary && (
        <section className="border-b border-border bg-secondary/40 py-10">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <p className="font-sans text-sm leading-relaxed text-muted-foreground">
              Legal work is delivered or coordinated through qualified counsel according to the
              jurisdiction and scope of the matter. Octus coordinates legal and structural
              architecture for regulated operations, covering frameworks, contractual design and
              counsel coordination within that model.
            </p>
          </div>
        </section>
      )}

      <OctusChapterTransition />

      {specificBeforeProblem ? (
        <>
          <AreaSpecificModule area={area} />
          <OctusChapterTransition />
          <ProblemModule area={area} />
        </>
      ) : (
        <>
          <ProblemModule area={area} />
          <OctusChapterTransition />
          <AreaSpecificModule area={area} />
        </>
      )}

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

      <section className="area-closing-section relative border-t border-border bg-background overflow-hidden">
        <BrandSectionMotif
          tone="light"
          position={area.id === "AREA-PC" || area.id === "AREA-HUB" ? "start" : "end"}
        />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <OctusEditorialDivider className="mb-10" />
          <div className="mb-6 flex items-center gap-3">
            <OctusSymbolMarker size={18} />
            <p className="section-label mb-0 block">Area {area.num}</p>
          </div>
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
              <p className="section-label mb-4 block">Related paths</p>
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

      <section className="surface-dark py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="mb-8 font-heading text-2xl font-semibold text-white md:text-3xl">
            Next action
          </h2>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <CtaLink
              href={primaryHref}
              variant="on-dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              {primaryLabel}
            </CtaLink>
            <CtaLink href="/solutions" variant="on-dark-secondary">
              All services →
            </CtaLink>
          </div>
        </div>
      </section>
    </main>
  );
}
