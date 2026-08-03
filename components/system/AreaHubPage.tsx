import Link from "next/link";
import type { PublicArea } from "../../lib/publicAreas";
import { enrichPublicArea } from "../../lib/areaHubContent";
import { getDeepServicesForArea } from "../../lib/serviceArchitecture";
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
import ServiceFamilyAccordion from "./ServiceFamilyAccordion";

/** Twelve-module area hub standard — shared system, controlled variation per area. */
export default function AreaHubPage({ area }: { area: PublicArea }) {
  const enriched = enrichPublicArea(area);
  const isRemediation = area.primaryCta === "assess";
  const primaryHref = isRemediation ? WHATSAPP_ASSESS_URL : WHATSAPP_DISCUSS_URL;
  const primaryLabel = enriched.primaryCtaLabel;
  const deepServices = getDeepServicesForArea(area.id);
  const surfaceVariant = area.id === "AREA-LEG" || area.id === "AREA-REM" ? "dark-accent" : "default";
  const compactHero = area.id === "AREA-PC" || area.id === "AREA-HUB";

  return (
    <main>
      {/* 1 · Area thesis */}
      <PageHero
        eyebrow={area.crisis ? "Crisis entry" : `Services · ${area.num}`}
        title={area.name}
        titleSecondLine={area.oneSentence}
        description={area.summary}
        primaryCta={{ href: primaryHref, label: primaryLabel, external: true }}
        secondaryCta={{ href: "/solutions", label: "All services →" }}
        compact={compactHero}
      />

      {area.legalBoundary && (
        <section className="border-b border-border bg-secondary/40 py-10">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <p className="font-sans text-sm leading-relaxed text-muted-foreground">
              Legal work is delivered or coordinated through qualified counsel according to the
              jurisdiction and scope of the matter. Octus coordinates legal and structural
              architecture for regulated operations.
            </p>
          </div>
        </section>
      )}

      <OctusChapterTransition />

      {/* 2 · Problems / triggers */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-end gap-6">
            <span className="editorial-numeral" aria-hidden="true">
              {area.num}
            </span>
            <div>
              <p className="section-label mb-3 block">When clients need this</p>
              <h2 className="heading-section max-w-2xl">Problems and triggers.</h2>
            </div>
          </div>
          <ul className="grid list-none gap-3 md:grid-cols-2 lg:max-w-4xl">
            {area.whenNeeded.map((item) => (
              <li
                key={item}
                className="border-l-2 border-primary/35 bg-secondary/20 py-4 pl-5 pr-4 font-sans text-sm leading-relaxed text-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <OctusChapterTransition />

      {/* 3 · Service-family overview */}
      <section className="surface-elevated py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-3 block">Service families</p>
          <h2 className="heading-section mb-4 max-w-2xl">
            {enriched.families.length} families in {area.name}.
          </h2>
          <p className="body-large mb-10 max-w-2xl text-muted-foreground">
            Capabilities grouped for how Octus delivers — not a flat service list.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {enriched.families.map((family) => (
              <div
                key={family.id}
                className="rounded-sm border border-border bg-background p-5 md:p-6"
              >
                <h3 className="mb-2 font-sans text-base font-semibold text-foreground">
                  {family.name}
                </h3>
                <p className="font-sans text-sm leading-relaxed text-muted-foreground">
                  {family.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <OctusChapterTransition />

      {/* 4 · Subservices by family */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-3 block">By family</p>
          <h2 className="heading-section mb-10 max-w-2xl">Subservices grouped by family.</h2>
          <ServiceFamilyAccordion families={enriched.families} />
        </div>
      </section>

      <OctusChapterTransition />

      {/* 5 · Selected deep-service pages */}
      {(deepServices.length > 0 || area.relatedDeep.length > 0) && (
        <>
          <section className="surface-elevated py-20 md:py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <p className="section-label mb-3 block">Deep-service pages</p>
              <h2 className="heading-section mb-8 max-w-2xl">Selected paths with dedicated pages.</h2>
              <ul className="grid list-none gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {(deepServices.length > 0
                  ? deepServices.map((s) => ({
                      label: s.exact_public_name,
                      href: s.recommended_route!,
                    }))
                  : area.relatedDeep
                ).map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="flex h-full flex-col rounded-sm border border-border bg-background p-5 no-underline transition-colors hover:border-primary"
                    >
                      <span className="font-sans text-base font-medium text-primary">
                        {item.label} →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <OctusChapterTransition />
        </>
      )}

      {/* 6 · Multi-jurisdiction implications */}
      <section
        className={
          surfaceVariant === "dark-accent"
            ? "surface-dark relative overflow-hidden py-20 md:py-28"
            : "border-y border-border bg-secondary/25 py-20 md:py-28"
        }
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p
            className={`section-label mb-3 block ${surfaceVariant === "dark-accent" ? "text-white/55" : ""}`}
          >
            Multi-jurisdiction
          </p>
          <h2
            className={`heading-section mb-6 max-w-2xl ${surfaceVariant === "dark-accent" ? "text-white" : ""}`}
          >
            {enriched.multiJurisdiction.title}
          </h2>
          <p
            className={`body-large max-w-2xl ${surfaceVariant === "dark-accent" ? "text-white/70" : "text-muted-foreground"}`}
          >
            {enriched.multiJurisdiction.body}
          </p>
        </div>
      </section>

      <OctusChapterTransition />

      {/* 7 · Connections to other areas */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-3">
            <OctusSymbolMarker />
            <p className="section-label mb-0 block">Connected areas</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {enriched.connections.map((conn) => (
              <Link
                key={conn.href}
                href={conn.href}
                className="rounded-sm border border-border p-5 no-underline transition-colors hover:border-primary md:p-6"
              >
                <h3 className="mb-2 font-sans text-base font-semibold text-primary">
                  {conn.areaName} →
                </h3>
                <p className="font-sans text-sm text-muted-foreground">{conn.reason}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <OctusChapterTransition />

      {/* 8 · Industries */}
      <section className="surface-elevated py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4 block">Industries</p>
          <ul className="flex list-none flex-wrap gap-2">
            {enriched.industries.map((m) => (
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
      </section>

      {/* 9 · Jurisdictions */}
      <section className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4 block">Jurisdictions</p>
          <ul className="flex list-none flex-wrap gap-2">
            {enriched.jurisdictions.map((j) => (
              <li key={j.href}>
                <Link
                  href={j.href}
                  className="inline-flex rounded-sm border border-border bg-secondary/20 px-3 py-1.5 font-sans text-sm text-foreground no-underline hover:border-primary hover:text-primary"
                >
                  {j.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <OctusChapterTransition />

      {/* 10 · Delivery / engagement */}
      <section className="border-y border-border bg-primary/[0.03] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-3 block">How Octus engages</p>
          <p className="body-large mb-6 max-w-2xl">{enriched.deliveryModel}</p>
          <CtaLink href="/how-we-engage" variant="secondary">
            How we engage →
          </CtaLink>
        </div>
      </section>

      {/* 11 · Responsible leadership */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <OctusEditorialDivider className="mb-10" />
          <p className="section-label mb-3 block">Responsible leadership</p>
          <h2 className="heading-section mb-8 max-w-xl">Accountability for this workstream.</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:max-w-3xl">
            <div className="rounded-sm border border-primary/30 bg-secondary/20 p-6">
              <p className="mb-1 font-sans text-xs font-medium uppercase tracking-wider text-primary">
                Practice lead
              </p>
              <p className="font-heading text-lg font-semibold text-foreground">
                {enriched.practiceLead.name}
              </p>
              <p className="font-sans text-sm text-muted-foreground">{enriched.practiceLead.title}</p>
            </div>
            {enriched.leadership.map((leader) => (
              <div key={leader.name} className="rounded-sm border border-border p-6">
                <p className="font-heading text-base font-semibold text-foreground">{leader.name}</p>
                <p className="font-sans text-sm text-muted-foreground">{leader.title}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 font-sans text-sm text-muted-foreground">
            <Link href="/team" className="text-primary no-underline hover:text-primary/80">
              Meet the team →
            </Link>
          </p>
        </div>
      </section>

      {/* 12 · Contextual final CTA */}
      <section className="surface-dark py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="mb-4 font-heading text-2xl font-semibold text-white md:text-3xl">
            {isRemediation ? "Start with an assessment." : "Discuss this workstream."}
          </h2>
          <p className="body-large mb-8 text-white/65">
            {isRemediation
              ? "When licensing, banking or compliance is already blocked, a focused diagnostic comes first."
              : `Coordinate ${area.name.toLowerCase()} with the rest of your regulated operation.`}
          </p>
          <CtaLink
            href={primaryHref}
            variant="on-dark"
            target="_blank"
            rel="noopener noreferrer"
          >
            {primaryLabel}
          </CtaLink>
          {!isRemediation && area.intakeHref && (
            <p className="mt-6">
              <Link
                href={area.intakeHref}
                className="font-sans text-sm text-white/55 no-underline hover:text-white/80"
              >
                Or start a diagnostic assessment →
              </Link>
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
