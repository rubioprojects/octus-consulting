import Link from "next/link";
import type { PublicArea } from "../../lib/publicAreas";
import { enrichPublicArea } from "../../lib/areaHubContent";
import {
  WHATSAPP_ASSESS_URL,
  WHATSAPP_DISCUSS_URL,
} from "../../lib/cta";
import PageHero from "./PageHero";
import OctusEditorialDivider from "./OctusEditorialDivider";
import OctusSymbolMarker from "./OctusSymbolMarker";
import ServiceFamilyAccordion from "./ServiceFamilyAccordion";

/** Seven visible chapters covering the 12-module content checklist. */
export default function AreaHubPage({ area }: { area: PublicArea }) {
  const enriched = enrichPublicArea(area);
  const isRemediation = area.primaryCta === "assess";
  const primaryHref = isRemediation ? WHATSAPP_ASSESS_URL : WHATSAPP_DISCUSS_URL;
  const primaryLabel = enriched.primaryCtaLabel;
  const surfaceVariant = area.id === "AREA-LEG" || area.id === "AREA-REM" ? "dark-accent" : "default";
  const compactHero = area.id === "AREA-PC" || area.id === "AREA-HUB";

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

      {/* Chapter 2 · Client triggers */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end gap-6">
            <span className="editorial-numeral" aria-hidden="true">
              {area.num}
            </span>
            <div>
              <p className="section-label mb-3 block">When this workstream applies</p>
              <h2 className="heading-section max-w-2xl">Situations that bring clients here.</h2>
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
          <h2 className="heading-section mb-4 max-w-2xl">
            How {area.name} is organised.
          </h2>
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
            className={`body-large mb-10 max-w-2xl ${surfaceVariant === "dark-accent" ? "text-white/70" : "text-muted-foreground"}`}
          >
            {enriched.multiJurisdiction.body}
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {enriched.connections.map((conn) => (
              <Link
                key={conn.href}
                href={conn.href}
                className={`rounded-sm border p-5 no-underline transition-colors md:p-6 ${
                  surfaceVariant === "dark-accent"
                    ? "border-white/15 hover:border-white/40"
                    : "border-border hover:border-primary"
                }`}
              >
                <h3
                  className={`mb-2 font-sans text-base font-semibold ${
                    surfaceVariant === "dark-accent" ? "text-white" : "text-primary"
                  }`}
                >
                  {conn.areaName} →
                </h3>
                <p
                  className={`font-sans text-sm ${
                    surfaceVariant === "dark-accent" ? "text-white/65" : "text-muted-foreground"
                  }`}
                >
                  {conn.reason}
                </p>
              </Link>
            ))}
          </div>
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

      {/* Chapter 6 · Delivery and accountability */}
      <section className="border-y border-border bg-primary/[0.03] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <OctusEditorialDivider className="mb-10" />
          <p className="section-label mb-3 block">Delivery and accountability</p>
          <h2 className="heading-section mb-6 max-w-xl">How this workstream is owned.</h2>
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
          <p className="mt-8 font-sans text-sm text-muted-foreground">
            <Link href="/team" className="text-primary no-underline hover:text-primary/80">
              Meet the team →
            </Link>
            {" · "}
            <Link href="/how-we-engage" className="text-primary no-underline hover:text-primary/80">
              How we engage →
            </Link>
          </p>
        </div>
      </section>

      {/* Chapter 7 · Dark close (closed-model rhythm; one compact contextual link only) */}
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
          <p className="font-sans text-sm">
            <Link
              href="/solutions"
              className="text-white/75 underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              View all services
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
