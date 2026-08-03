import Link from "next/link";
import {
  ASSESS_PATH,
  CTA_ASSESS_LABEL,
  CTA_DISCUSS_LABEL,
  CTA_EMAIL_LABEL,
  CTA_WHATSAPP_ASSESS_LABEL,
  MAILTO_DISCUSS,
  OCTUS_EMAIL,
  WHATSAPP_ASSESS_URL,
  WHATSAPP_DISCUSS_URL,
} from "../../lib/cta";
import DarkHeroAtmosphere from "../../components/system/DarkHeroAtmosphere";
import { pageSocialMeta } from "../../lib/pageMeta";

export const metadata = pageSocialMeta({
  title: "Contact",
  description:
    "Start a conversation with Octus about licensing, compliance, banking, legal and corporate workstreams via WhatsApp or email.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main>
      <section className="octus-dark-hero surface-dark relative flex min-h-[70vh] flex-col justify-center overflow-hidden pt-28 pb-16 md:min-h-[80vh] md:pt-32 md:pb-24">
        <DarkHeroAtmosphere />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="label">Contact</span>
          <h1 className="font-heading text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[3.5rem]">
            Discuss your operation.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            Octus works with regulated businesses that need direct coordination across licensing,
            compliance, banking, legal and corporate workstreams. Start the conversation through
            WhatsApp or email.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href={WHATSAPP_DISCUSS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-sm bg-white px-10 text-base font-medium tracking-wide text-primary transition-colors hover:bg-white/90"
            >
              {CTA_DISCUSS_LABEL}
            </a>
            <a
              href={MAILTO_DISCUSS}
              className="inline-flex h-12 items-center justify-center rounded-sm border border-white/20 bg-transparent px-10 text-base font-medium text-white/80 transition-colors hover:border-white/40 hover:text-white"
            >
              {CTA_EMAIL_LABEL}
            </a>
          </div>
          <p className="mt-6 font-sans text-sm text-white/50">
            Professional email:{" "}
            <a
              href={MAILTO_DISCUSS}
              className="text-white/75 underline-offset-2 hover:underline"
            >
              {OCTUS_EMAIL}
            </a>
          </p>
        </div>
        <div className="octus-dark-hero__seam" aria-hidden="true" />
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4 block">How to reach us</p>
          <h2 className="heading-section mb-8">Clear paths. Same standard.</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <article className="rounded-sm border border-border p-6">
              <p className="section-label mb-2 block">Primary</p>
              <h3 className="mb-3 font-sans text-lg font-semibold text-primary">
                Discuss your operation
              </h3>
              <p className="body-text mb-4">
                For commercial conversations about market entry, licensing, banking, compliance or
                structure. WhatsApp is the primary path. Email remains available when that fits the
                conversation better.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href={WHATSAPP_DISCUSS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm font-medium text-primary no-underline hover:underline"
                >
                  {CTA_DISCUSS_LABEL}
                </a>
                <a
                  href={MAILTO_DISCUSS}
                  className="font-sans text-sm font-medium text-primary no-underline hover:underline"
                >
                  {CTA_EMAIL_LABEL}
                </a>
              </div>
            </article>
            <article className="rounded-sm border border-border p-6">
              <p className="section-label mb-2 block">Blocked operation</p>
              <h3 className="mb-3 font-sans text-lg font-semibold text-primary">
                Start a diagnostic
              </h3>
              <p className="body-text mb-4">
                When licensing, banking, compliance or operational blockage is already live, start
                with a diagnostic so the workstream can be scoped with clarity.
              </p>
              <div className="flex flex-col gap-3">
                <Link
                  href={ASSESS_PATH}
                  className="font-sans text-sm font-medium text-primary no-underline hover:underline"
                >
                  {CTA_ASSESS_LABEL}
                </Link>
                <a
                  href={WHATSAPP_ASSESS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm font-medium text-primary no-underline hover:underline"
                >
                  {CTA_WHATSAPP_ASSESS_LABEL}
                </a>
              </div>
            </article>
          </div>

          <article className="mt-8 rounded-sm border border-border p-6">
            <p className="section-label mb-2 block">Existing clients</p>
            <h3 className="mb-3 font-sans text-lg font-semibold text-primary">
              Continue an active mandate
            </h3>
            <p className="body-text mb-4">
              If you already work with Octus, use the same WhatsApp or email channels and identify
              your mandate so the right owners can respond.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-6">
              <a
                href={WHATSAPP_DISCUSS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm font-medium text-primary no-underline hover:underline"
              >
                WhatsApp →
              </a>
              <a
                href={MAILTO_DISCUSS}
                className="font-sans text-sm font-medium text-primary no-underline hover:underline"
              >
                {OCTUS_EMAIL}
              </a>
            </div>
          </article>

          <p className="section-label mt-16 mb-8 block">What happens next</p>
          <ol className="flex list-none flex-col gap-8">
            {[
              {
                n: "01",
                t: "You reach out",
                b: "WhatsApp or email: briefly describe the operation and where it is stuck.",
              },
              {
                n: "02",
                t: "We assess fit",
                b: "If we can help structurally, we schedule a diagnostic conversation.",
              },
              {
                n: "03",
                t: "Scope with clarity",
                b: "If there is a path forward, we define scope, model and timeline without ambiguity.",
              },
            ].map((s) => (
              <li
                key={s.n}
                className="grid grid-cols-[48px_1fr] gap-6 border-b border-border pb-8 last:border-0"
              >
                <span className="font-heading text-xs font-bold tracking-widest text-primary">
                  {s.n}
                </span>
                <div>
                  <h3 className="mb-2 font-sans text-lg font-semibold text-primary">{s.t}</h3>
                  <p className="body-text">{s.b}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-12 flex flex-wrap gap-4 border-t border-border pt-10">
            <Link
              href="/about"
              className="font-sans text-sm font-medium text-primary no-underline hover:underline"
            >
              About Octus →
            </Link>
            <Link
              href="/how-we-engage"
              className="font-sans text-sm font-medium text-primary no-underline hover:underline"
            >
              How we engage →
            </Link>
            <Link
              href="/diagnostic"
              className="font-sans text-sm font-medium text-primary no-underline hover:underline"
            >
              Diagnostic assessment →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
