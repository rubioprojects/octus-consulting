import type { ReactNode } from "react";
import Eyebrow from "./Eyebrow";
import { CtaLink } from "./CtaButton";
import DarkHeroAtmosphere from "./DarkHeroAtmosphere";

type Cta = {
  href: string;
  label: string;
  external?: boolean;
  variant?: "on-dark" | "on-dark-secondary";
  /** Quiet text link instead of a second equal button. */
  quiet?: boolean;
};

export default function PageHero({
  eyebrow,
  title,
  titleSecondLine,
  description,
  primaryCta,
  secondaryCta,
  compact = false,
}: {
  eyebrow: string;
  title: ReactNode;
  titleSecondLine?: ReactNode;
  description?: ReactNode;
  primaryCta?: Cta;
  secondaryCta?: Cta;
  compact?: boolean;
}) {
  return (
    <section
      className={`octus-dark-hero surface-dark relative flex flex-col justify-center overflow-hidden pt-28 pb-16 ${
        compact ? "min-h-[52vh] md:min-h-[58vh]" : "min-h-[70vh] md:min-h-[80vh] md:pt-32 md:pb-24"
      }`}
    >
      <DarkHeroAtmosphere />
      <div className="octus-dark-hero__seam" aria-hidden="true" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Eyebrow tone="dark">{eyebrow}</Eyebrow>
        <h1 className="page-hero-title font-heading max-w-4xl text-[2.2rem] font-bold leading-[1.08] tracking-tight text-white text-balance sm:text-4xl md:text-5xl lg:text-[3.35rem]">
          {title}
          {titleSecondLine != null && (
            <>
              <br />
              <span className="text-white/80">{titleSecondLine}</span>
            </>
          )}
        </h1>
        {description != null && (
          <div className="mt-6 max-w-2xl text-pretty text-base leading-[1.7] text-white/72 sm:text-lg">
            {description}
          </div>
        )}
        {(primaryCta || secondaryCta) && (
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            {primaryCta && (
              <CtaLink
                href={primaryCta.href}
                variant={primaryCta.variant || "on-dark"}
                {...(primaryCta.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {primaryCta.label}
              </CtaLink>
            )}
            {secondaryCta &&
              (secondaryCta.quiet ? (
                <a
                  href={secondaryCta.href}
                  className="inline-flex min-h-11 items-center font-sans text-sm text-white/65 no-underline transition-colors hover:text-white"
                  {...(secondaryCta.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {secondaryCta.label} →
                </a>
              ) : (
                <CtaLink
                  href={secondaryCta.href}
                  variant={secondaryCta.variant || "on-dark-secondary"}
                  {...(secondaryCta.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {secondaryCta.label}
                </CtaLink>
              ))}
          </div>
        )}
      </div>
    </section>
  );
}
