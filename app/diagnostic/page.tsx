import Link from "next/link";
import {
  CTA_DISCUSS_LABEL,
  CTA_EMAIL_LABEL,
  MAILTO_ASSESS,
  WHATSAPP_DISCUSS_URL,
} from "../../lib/cta";
import DiagnosticAssessmentForm from "../../components/system/DiagnosticAssessmentForm";
import OctusSymbolMarker from "../../components/system/OctusSymbolMarker";

export const metadata = {
  title: "Assess your situation",
  description:
    "Tell Octus about your operation, challenge or market objective. Our team will assess the appropriate path forward — no guaranteed licensing or banking outcomes.",
  openGraph: {
    title: "Assess your situation | Octus Consulting",
    description:
      "Institutional assessment for regulated operations under pressure — licensing, banking, compliance or market entry.",
    url: "https://octusconsulting.com/diagnostic",
  },
  alternates: {
    canonical: "https://octusconsulting.com/diagnostic",
  },
};

const situations = [
  "Licensing delayed, deferred or stalling",
  "Banking rejection or payment instability",
  "Compliance gaps under audit or banking scrutiny",
  "Audit or certification readiness problems",
  "Blocked market entry",
  "Regulatory exposure the team cannot sequence alone",
];

const afterSteps = [
  {
    n: "01",
    t: "You describe the situation",
    b: "Use the assessment request below — or WhatsApp if you prefer a direct conversation.",
  },
  {
    n: "02",
    t: "We assess fit and urgency",
    b: "Octus reviews whether the problem is structural and whether we are the right accountable layer.",
  },
  {
    n: "03",
    t: "We propose a path",
    b: "If we proceed, we define scope, engagement model and next steps — without promising regulator or bank decisions.",
  },
];

export default function DiagnosticPage() {
  return (
    <main>
      <section className="surface-dark relative flex min-h-[70vh] flex-col justify-center pt-24 pb-16 md:min-h-[80vh] md:pt-28 md:pb-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="label">Assess your situation</span>
          <h1 className="font-heading text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[3.5rem]">
            Tell us about your operation,
            <br />
            <span className="text-white/70">challenge or market objective.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
            Our team will assess the appropriate path forward. This is a qualified conversation for
            operators under pressure — not a mass lead form, and not a promise of licensing, banking
            approval or regulatory resolution.
          </p>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto grid w-full max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-16 lg:px-8">
          <div>
            <OctusSymbolMarker size={18} />
            <p className="section-label mb-4 block">When this path fits</p>
            <h2 className="heading-section mb-8">Situations we help operators recognize</h2>
            <ul className="mb-10 space-y-4">
              {situations.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 border-b border-border pb-4 font-sans text-base text-foreground"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>

            <p className="section-label mb-4 block">What happens next</p>
            <ol className="flex list-none flex-col gap-6">
              {afterSteps.map((s) => (
                <li key={s.n} className="grid grid-cols-[48px_1fr] gap-4">
                  <span className="font-heading text-xs font-bold tracking-widest text-primary">
                    {s.n}
                  </span>
                  <div>
                    <h3 className="font-sans text-base font-semibold text-primary">{s.t}</h3>
                    <p className="body-sm mt-1">{s.b}</p>
                  </div>
                </li>
              ))}
            </ol>

            <p className="body-text mt-10 text-muted-foreground">
              Prefer the full remediation hub?{" "}
              <Link
                href="/solutions/operational-remediation-readiness"
                className="text-primary underline-offset-4 hover:underline"
              >
                Operational Remediation &amp; Readiness
              </Link>
              .
            </p>
            <p className="body-text mt-4">
              Prefer a commercial conversation first?{" "}
              <a
                href={WHATSAPP_DISCUSS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline-offset-4 hover:underline"
              >
                {CTA_DISCUSS_LABEL}
              </a>{" "}
              or{" "}
              <a href={MAILTO_ASSESS} className="text-primary underline-offset-4 hover:underline">
                {CTA_EMAIL_LABEL}
              </a>
              .
            </p>
          </div>

          <DiagnosticAssessmentForm />
        </div>
      </section>
    </main>
  );
}
