import Link from "next/link";
import {
  CTA_ASSESS_LABEL,
  CTA_DISCUSS_LABEL,
  MAILTO_INFO,
  WHATSAPP_ASSESS_URL,
  WHATSAPP_DISCUSS_URL,
} from "../../lib/cta";

export const metadata = {
  title: "Diagnostic assessment — Remediation & Readiness",
  description:
    "Start with a diagnostic assessment for licensing delays, banking rejection, compliance gaps, audit readiness and blocked market entry.",
};

const situations = [
  "Licensing delayed, deferred or stalling",
  "Banking rejection or payment instability",
  "Compliance gaps under audit or banking scrutiny",
  "Audit or certification readiness problems",
  "Blocked market entry",
  "Regulatory exposure the team cannot sequence alone",
];

export default function DiagnosticPage() {
  return (
    <main>
      <section className="surface-dark relative flex min-h-[70vh] flex-col justify-center pt-24 pb-16 md:min-h-[80vh] md:pt-28 md:pb-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="label">Diagnostic assessment</span>
          <h1 className="font-heading text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[3.5rem]">
            Assess the failure mode.
            <br />
            <span className="text-white/70">Then sequence remediation.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
            Already facing a licensing, banking, compliance or operational blockage? Start with a
            diagnostic assessment. We begin with a structured conversation about exposure and
            readiness — then sequence remediation through{" "}
            <Link href="/solutions/remediation-readiness" className="text-white underline underline-offset-4">
              Remediation &amp; Readiness
            </Link>
            .
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href={WHATSAPP_ASSESS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-sm bg-white px-10 text-base font-medium tracking-wide text-primary transition-colors hover:bg-white/90"
            >
              {CTA_ASSESS_LABEL}
            </a>
            <a
              href={WHATSAPP_DISCUSS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-sm border border-white/20 px-10 text-base font-medium text-white/80 transition-colors hover:border-white/40 hover:text-white"
            >
              {CTA_DISCUSS_LABEL}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4 block">When this path fits</p>
          <h2 className="heading-section mb-8">Situations we help operators recognize</h2>
          <ul className="mb-12 space-y-4">
            {situations.map((item) => (
              <li key={item} className="flex gap-3 border-b border-border pb-4 font-sans text-base text-foreground">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
          <p className="body-large mb-6">
            Prefer the full remediation hub?{" "}
            <Link
              href="/solutions/remediation-readiness"
              className="text-primary underline-offset-4 hover:underline"
            >
              Operational Remediation &amp; Readiness
            </Link>
            .
          </p>
          <p className="body-large mb-8">
            Prefer email? Write to{" "}
            <a href={MAILTO_INFO} className="text-primary underline-offset-4 hover:underline">
              info@octusconsulting.com
            </a>
            .
          </p>
          <p className="body-text text-muted-foreground">
            Octus engages through qualified conversations — not mass lead-capture forms.
          </p>
        </div>
      </section>
    </main>
  );
}
