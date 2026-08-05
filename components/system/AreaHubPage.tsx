import Link from "next/link";
import type { PublicArea } from "../../lib/publicAreas";
import { enrichPublicArea } from "../../lib/areaHubContent";
import {
  WHATSAPP_ASSESS_URL,
  WHATSAPP_DISCUSS_URL,
} from "../../lib/cta";
import PageHero from "./PageHero";
import { CtaLink } from "./CtaButton";
import OctusEditorialDivider from "./OctusEditorialDivider";
import OctusSymbolMarker from "./OctusSymbolMarker";
import ServiceFamilyAccordion from "./ServiceFamilyAccordion";

/** Eight visible chapters covering the 12-module content checklist. */
export default function AreaHubPage({ area }: { area: PublicArea }) {
  const enriched = enrichPublicArea(area);
  const isRemediation = area.primaryCta === "assess";
  const primaryHref = isRemediation ? WHATSAPP_ASSESS_URL : WHATSAPP_DISCUSS_URL;
  const primaryLabel = enriched.primaryCtaLabel;
  const surfaceVariant = area.id === "AREA-LEG" || area.id === "AREA-REM" ? "dark-accent" : "default";
  // Full PageHero height for all hubs (baseline premium ~800px). Compact was
  // undersized vs Private Clients / International Hub baseline heroes.
  const triggerHeading =
    area.id === "AREA-REM"
      ? "When the operation is already under pressure."
      : area.id === "AREA-PC"
        ? "When personal ownership sits inside the regulated structure."
        : area.id === "AREA-HUB"
          ? "When the programme needs the specialist network."
          : "Situations that bring clients here.";
  // Related services are derived from the area's own connection and market data,
  // so each hub shows its own set rather than one generic block on every route.
  const relatedAreas = enriched.connections.slice(0, 3);
  const relatedIndustry = enriched.industries[0];
  const capabilitiesHeading =
    area.id === "AREA-REM"
      ? "How remediation is organised."
      : area.id === "AREA-HUB"
        ? "How the network is organised."
        : `How ${area.name} is organised.`;

  return (
    <main>
      {/* Chapter 1 · Hero */}
      <PageHero
        eyebrow={area.crisis ? "Crisis entry" : `Services · ${area.num}`}
        title={area.name}
        titleSecondLine={area.oneSentence}
        description={area.summary}
        primaryCta={{ href: primaryHref, label: primaryLabel, external: true }}
        secondaryCta={{ href: "/solutions", label: "All services", quiet: true }}
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

      {/* Chapter 2 · Client triggers */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end gap-6">
            <span className="editorial-numeral" aria-hidden="true">
              {area.num}
            </span>
            <div>
              <p className="section-label mb-3 block">When this workstream applies</p>
              <h2 className="heading-section max-w-2xl">{triggerHeading}</h2>
            </div>
          </div>
          <ul className="grid list-none gap-3 md:grid-cols-2 lg:max-w-4xl">
            {area.whenNeeded.map((item) => (
              <li
                key={item}
                className="border-l-2 border-primary/30 py-1 pl-4 font-sans text-base leading-relaxed text-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Chapter 3 · Capabilities and services (single family system) */}
      <section className="surface-elevated py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-3 block">Capabilities</p>
          <h2 className="heading-section mb-4 max-w-2xl">{capabilitiesHeading}</h2>
          <p className="body-large mb-10 max-w-2xl text-muted-foreground">
            Related services grouped by client purpose. Open a family for the detail that belongs
            there.
          </p>
          <ServiceFamilyAccordion families={enriched.families} />
        </div>
      </section>

      {/* Chapter 4 · Cross-border coordination */}
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
            Cross-border coordination
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

      {/* Chapter 5 · Markets */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-3">
            <OctusSymbolMarker />
            <p className="section-label mb-0 block">Markets</p>
          </div>
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="mb-4 font-heading text-lg font-semibold text-foreground">Industries</h3>
              <ul className="flex list-none flex-wrap gap-2">
                {enriched.industries.map((m) => (
                  <li key={m.href}>
                    <Link
                      href={m.href}
                      className="inline-flex min-h-11 items-center rounded-sm border border-border px-3 py-2 font-sans text-sm text-foreground no-underline hover:border-primary hover:text-primary"
                    >
                      {m.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-heading text-lg font-semibold text-foreground">
                Jurisdictions
              </h3>
              <ul className="flex list-none flex-wrap gap-2">
                {enriched.jurisdictions.map((j) => (
                  <li key={j.href}>
                    <Link
                      href={j.href}
                      className="inline-flex min-h-11 items-center rounded-sm border border-border bg-secondary/20 px-3 py-2 font-sans text-sm text-foreground no-underline hover:border-primary hover:text-primary"
                    >
                      {j.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 6 · People responsible for this area */}
      <section className="border-y border-border bg-primary/[0.03] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <OctusEditorialDivider className="mb-10" />
          <p className="section-label mb-3 block">People</p>
          <h2 className="heading-section mb-6 max-w-xl">People responsible for this area.</h2>
          <p className="body-large mb-10 max-w-2xl text-muted-foreground">{enriched.deliveryModel}</p>
          <div className="grid gap-6 md:grid-cols-2 lg:max-w-3xl">
            {enriched.leadership.map((leader) => (
              <div key={leader.name + leader.title} className="rounded-sm border border-border bg-background p-6">
                <p className="mb-1 font-sans text-xs font-medium uppercase tracking-wider text-primary">
                  {leader.scopeLabel || "Accountability"}
                </p>
                <p className="font-heading text-lg font-semibold text-foreground">{leader.name}</p>
                <p className="font-sans text-sm text-muted-foreground">{leader.title}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 font-sans text-sm">
            <Link href="/team" className="text-primary no-underline hover:text-primary/80">
              Meet the team responsible for this area →
            </Link>
          </p>
        </div>
      </section>

      {/* Chapter 7 · Related services (area-specific, derived from the area's own
          connections and markets so no two hubs show the same generic set) */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-3 block">Related services</p>
          <h2 className="heading-section mb-6 max-w-2xl">
            Where {area.name} usually connects.
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {relatedAreas.map((conn) => (
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
          <p className="mt-8 font-sans text-sm text-muted-foreground">
            {relatedIndustry && (
              <>
                <Link
                  href={relatedIndustry.href}
                  className="text-primary no-underline hover:text-primary/80"
                >
                  {relatedIndustry.label} →
                </Link>
                {" · "}
              </>
            )}
            <Link href="/solutions" className="text-primary no-underline hover:text-primary/80">
              All seven areas →
            </Link>
          </p>
        </div>
      </section>

      {/* Chapter 8 · Dark close: one primary conversion, no competing links */}
      <section className="surface-dark py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="mb-4 font-heading text-2xl font-semibold text-white md:text-3xl">
            {isRemediation ? "When progress has stopped." : `Continue with ${area.name}.`}
          </h2>
          <p className="mb-8 font-sans text-sm leading-relaxed text-white/70">
            {isRemediation
              ? "Start with a focused assessment of what is blocking the operation."
              : "Discuss how this workstream fits the rest of the mandate."}
          </p>
          <CtaLink
            href={primaryHref}
            variant="on-dark"
            target="_blank"
            rel="noopener noreferrer"
          >
            {primaryLabel}
          </CtaLink>
        </div>
      </section>
    </main>
  );
}
