import Link from "next/link";
import HomeModulesAccordion from "../components/HomeModulesAccordion";
import HomeLeadershipTrust from "../components/system/HomeLeadershipTrust";
import CapabilityRail from "../components/system/CapabilityRail";
import OctusChapterTransition from "../components/system/OctusChapterTransition";
import OctusEditorialDivider from "../components/system/OctusEditorialDivider";
import OctusSymbolMarker from "../components/system/OctusSymbolMarker";
import { CtaLink } from "../components/system/CtaButton";
import Eyebrow from "../components/system/Eyebrow";
import OctusIcon, { type OctusIconName } from "../components/icons/OctusIcon";
import { ENGAGEMENT_MODELS } from "../lib/commercial";
import { PUBLIC_AREAS } from "../lib/publicAreas";
import { BRAND } from "../lib/brand";
import {
  CTA_DISCUSS_LABEL,
  WHATSAPP_DISCUSS_URL,
} from "../lib/cta";
import { pageSocialMeta } from "../lib/pageMeta";

const CAPABILITY_RAIL: { label: string; icon: OctusIconName }[] = [
  { label: "Regulatory Structuring", icon: "regulatory" },
  { label: "Compliance & Risk", icon: "compliance" },
  { label: "Legal & Structural Architecture", icon: "licensing" },
  { label: "Corporate Structuring", icon: "corporate" },
  { label: "Private Clients", icon: "contact" },
  { label: "Remediation & Readiness", icon: "remediation" },
  { label: "International Hub", icon: "jurisdictions" },
];

const areaRows = PUBLIC_AREAS.map((area) => ({
  num: area.num,
  title: area.name,
  href: area.href,
  featured: area.services.slice(0, 3).map((s) => ({ label: s.name, href: area.href })),
}));

export const metadata = pageSocialMeta({
  title: "Premium Execution for Regulated Operations",
  description:
    "Octus structures, coordinates and operates the work behind regulated businesses across licensing, compliance, corporate structure, remediation and specialist networks.",
  path: "/",
});

export default function HomePage() {
  return (
    <main>
      {/* 1. Branded hero */}
      <section className="home-hero relative flex min-h-[88vh] items-center overflow-hidden pt-28 surface-dark px-4 sm:px-6 lg:px-8 md:pt-32">
        <div className="home-hero__atmosphere" aria-hidden="true" />
        <div className="home-hero__mesh" aria-hidden="true" />
        <div
          className="octus-dark-hero__arcs"
          aria-hidden="true"
          style={{ backgroundImage: `url('${BRAND.motifs.arcSecondary}')` }}
        />
        <div
          className="octus-dark-hero__mark"
          aria-hidden="true"
          style={{ backgroundImage: `url('${BRAND.symbol.blue}')` }}
        />
        <div className="octus-hero-copy relative z-10 mx-auto w-full max-w-3xl">
          <Eyebrow tone="dark" className="mb-8 md:mb-10">
            Octus Consulting
          </Eyebrow>
          <h1 className="font-heading text-[2.2rem] font-bold leading-[1.08] tracking-tight text-white text-balance sm:text-[2.75rem] md:text-[3.25rem] lg:text-[3.5rem]">
            Regulated operations don&apos;t fail randomly.
            <br />
            <span className="text-white/85">They fail structurally.</span>
          </h1>
          <p className="mt-7 mb-10 max-w-xl text-pretty text-base leading-[1.7] text-white/72 sm:text-lg md:mt-8 md:mb-12">
            When licensing, banking, compliance or corporate structure breaks under pressure, the
            cost is real. Octus diagnoses the failure and rebuilds the sequence that makes the
            operation workable again.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <CtaLink
              href={WHATSAPP_DISCUSS_URL}
              variant="on-dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              {CTA_DISCUSS_LABEL}
            </CtaLink>
            <CtaLink href="/solutions" variant="on-dark-secondary">
              Explore services
            </CtaLink>
          </div>
          <p className="mt-6">
            <Link
              href="/how-we-engage"
              className="font-sans text-sm text-white/55 no-underline underline-offset-4 transition-colors hover:text-white/85 hover:underline"
            >
              See how we work
            </Link>
          </p>
        </div>
        <div className="octus-dark-hero__seam" aria-hidden="true" />
      </section>

      {/* 2. Seven-area capability rail */}
      <CapabilityRail items={CAPABILITY_RAIL} ariaLabel="Seven service areas" />

      {/* 3. Compact authority signal */}
      <section className="border-b border-border bg-background py-10 md:py-12">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-8 px-4 sm:px-6 lg:px-8 md:gap-14">
          <OctusSymbolMarker size={20} />
          <div>
            <p className="editorial-numeral editorial-numeral--sm">2019</p>
            <p className="mt-1 font-sans text-sm text-muted-foreground">Operating since</p>
          </div>
          <div>
            <p className="editorial-numeral editorial-numeral--sm">07</p>
            <p className="mt-1 font-sans text-sm text-muted-foreground">Service areas</p>
          </div>
          <div className="max-w-sm">
            <p className="font-sans text-sm leading-relaxed text-muted-foreground">
              Coordinated work across regulatory, compliance, legal, corporate, private client,
              remediation and international programmes.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Leadership */}
      <HomeLeadershipTrust />

      <OctusChapterTransition />

      {/* 5. What we fix */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl md:mb-16">
            <OctusSymbolMarker className="mb-5" />
            <p className="section-label mb-4 block">What we fix</p>
            <h2 className="heading-section text-balance">
              Where regulated operations typically break
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 md:gap-6">
            {[
              {
                title: "Licensing approved, infrastructure blocked",
                body: "Authorisation exists, but banking, payments or operating rails still refuse to move.",
              },
              {
                title: "Compliance exists but is not operational",
                body: "Policies and folders are present. Day-to-day controls, evidence and ownership are not.",
              },
              {
                title: "Corporate or ownership structure cannot withstand scrutiny",
                body: "Entity design, governance or UBO clarity fails when regulators, banks or partners examine it.",
              },
              {
                title: "Expansion fails across jurisdictions",
                body: "Local workstreams move separately. Sequencing, accountability and local fit never converge.",
              },
            ].map((card) => (
              <article
                key={card.title}
                className="rounded-sm border border-border/70 bg-secondary/20 p-6 transition-colors duration-300 hover:border-border md:p-8"
              >
                <h3 className="mb-3 font-heading text-xl font-semibold leading-snug text-primary text-balance">
                  {card.title}
                </h3>
                <p className="body-text text-pretty text-muted-foreground">{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. What structure allows */}
      <section className="surface-elevated py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-start md:gap-16">
            <div>
              <p className="section-label mb-4 block">What structure allows</p>
              <h2 className="heading-section text-balance">
                Operational outcomes Octus designs for
              </h2>
            </div>
            <ul className="space-y-4">
              {[
                "Better sequencing across regulatory, compliance, banking and corporate workstreams",
                "Clearer positioning when interacting with authorities and institutional counterparts",
                "Improved readiness for institutional onboarding conversations",
                "Reduced dependency on a single provider or single point of failure",
                "Stronger evidence trails and accountability inside the mandate",
                "Structures designed to operate across jurisdictions, not only to launch once",
              ].map((item) => (
                <li
                  key={item}
                  className="flex gap-3 border-b border-border/50 pb-4 font-sans text-sm leading-relaxed text-muted-foreground text-pretty"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 7. Services architecture */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-2xl md:mb-10">
            <OctusSymbolMarker className="mb-5" />
            <p className="section-label mb-4 block">Services</p>
            <h2 className="heading-section mb-5 text-balance">
              Seven areas. One coordinated model.
            </h2>
            <p className="body-large text-pretty text-muted-foreground">
              Each area is a public entry into the same operating system: licensing, compliance,
              legal and corporate architecture, private client ownership issues, remediation and
              the specialist network those programmes need.
            </p>
          </div>
          <OctusEditorialDivider className="mb-10 md:mb-12" />
          <HomeModulesAccordion modules={areaRows} />
          <Link
            href="/solutions"
            className="mt-8 inline-flex items-center gap-2 font-sans text-sm font-medium text-primary no-underline hover:text-primary/80"
          >
            All services
            <OctusIcon name="arrow" size={16} />
          </Link>
        </div>
      </section>

      {/* 8. Industries */}
      <section className="surface-elevated py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl md:mb-14">
            <p className="section-label mb-4 block">Industries</p>
            <h2 className="heading-section text-balance">Where we operate</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 md:gap-6">
            {[
              [
                "iGaming & Betting",
                "Licensing, compliance, banking readiness and operations after licensing",
                "/markets/igaming",
              ],
              [
                "Fintech & Payments",
                "EMI pathways, payment infrastructure and compliance across borders",
                "/markets/fintech",
              ],
              [
                "Crypto & Digital Assets",
                "CASP/VASP pathways, MiCA readiness and banking access",
                "/markets/crypto",
              ],
              [
                "High-Risk Operations",
                "Banking resilience, enhanced compliance and institutional access",
                "/markets/high-risk",
              ],
            ].map(([title, desc, href]) => (
              <Link
                key={title}
                href={href}
                className="group relative block rounded-sm border border-border/80 bg-background p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-sm md:p-8"
              >
                <div className="mb-3 flex items-start justify-between gap-4">
                  <h3 className="font-heading text-xl font-semibold text-primary text-balance">
                    {title}
                  </h3>
                  <OctusIcon
                    name="arrow"
                    size={18}
                    className="mt-1 shrink-0 text-primary/50 transition-transform group-hover:translate-x-0.5 group-hover:text-primary"
                  />
                </div>
                <p className="body-text text-pretty text-muted-foreground">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Pressure patterns */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl md:mb-14">
            <p className="section-label mb-4 block">Pressure patterns</p>
            <h2 className="heading-section text-balance">
              Situations that usually require Octus
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                cat: "Licensing",
                title: "Application filed. No movement.",
                body: "Usually a structural gap in the dossier or entity setup rather than hostility from the authority.",
              },
              {
                cat: "Banking",
                title: "Licensed, but funds cannot move.",
                body: "Payment and banking rails reject a structure that looked coherent on paper.",
              },
              {
                cat: "Expansion",
                title: "New market, same weak design.",
                body: "Local counsel and providers work in parallel with no single accountable operating model.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="border-l-2 border-primary/70 bg-secondary/15 py-5 pl-5 pr-4"
              >
                <p className="mb-2 font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                  {item.cat}
                </p>
                <h3 className="mb-3 font-heading text-lg font-semibold leading-snug text-primary text-balance">
                  {item.title}
                </h3>
                <p className="body-text text-pretty text-sm text-muted-foreground">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 10. How Octus works */}
      <section className="surface-elevated py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4 md:mb-14">
            <div className="max-w-2xl">
              <p className="section-label mb-4 block">How Octus works</p>
              <h2 className="heading-section text-balance">
                Accountability scales with the mandate
              </h2>
            </div>
            <Link
              href="/how-we-engage"
              className="inline-flex items-center gap-2 font-sans text-sm font-medium text-primary no-underline hover:text-primary/80"
            >
              Full engagement models
              <OctusIcon name="arrow" size={16} />
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {ENGAGEMENT_MODELS.map((model) => (
              <div key={model.num} className="border-t border-border pt-6">
                <span className="editorial-numeral editorial-numeral--sm mb-3 block">
                  {model.num}
                </span>
                <h3 className="mb-3 font-sans text-base font-semibold text-primary text-balance">
                  {model.title}
                </h3>
                <p className="body-text text-pretty text-sm">{model.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Intelligence / Insights */}
      <section className="border-y border-border bg-background py-16 md:py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:px-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <p className="section-label mb-3 block">Intelligence</p>
            <h2 className="heading-section mb-3 text-balance">
              Insights for operators under pressure
            </h2>
            <p className="body-large text-pretty text-muted-foreground">
              Regulatory signals, market movement and operational notes written for people who have
              to act, not scroll.
            </p>
          </div>
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 font-sans text-sm font-medium text-primary no-underline hover:text-primary/80"
          >
            Read Insights
            <OctusIcon name="arrow" size={16} />
          </Link>
        </div>
      </section>

      <OctusChapterTransition />

      {/* 12. Final qualification and CTA */}
      <section className="surface-dark py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="mb-4 font-sans text-xs font-medium uppercase tracking-[0.15em] text-white/55">
            Qualification
          </p>
          <h2 className="mb-6 font-heading text-3xl font-semibold leading-[1.12] tracking-tight text-white text-balance md:text-4xl">
            Built for operators who need the structure to work.
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-pretty text-lg leading-relaxed text-white/72">
            If licensing, banking, compliance or ownership design is already under pressure, start
            with a direct conversation.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <CtaLink
              href={WHATSAPP_DISCUSS_URL}
              variant="on-dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              {CTA_DISCUSS_LABEL}
            </CtaLink>
            <CtaLink href="/contact" variant="on-dark-secondary">
              Contact Octus
            </CtaLink>
          </div>
        </div>
      </section>
    </main>
  );
}
