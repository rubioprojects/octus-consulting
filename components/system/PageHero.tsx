import type { ReactNode } from "react";
import Eyebrow from "./Eyebrow";
import { CtaLink } from "./CtaButton";

type Cta = {
  href: string;
  label: string;
  external?: boolean;
  variant?: "on-dark" | "on-dark-secondary";
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
      className={`surface-dark relative flex flex-col justify-center pt-24 pb-16 ${
        compact ? "min-h-[52vh] md:min-h-[58vh]" : "min-h-[70vh] md:min-h-[80vh] md:pt-28 md:pb-24"
      }`}
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Eyebrow tone="dark">{eyebrow}</Eyebrow>
        <h1 className="font-heading max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[3.5rem]">
          {title}
          {titleSecondLine != null && (
            <>
              <br />
              <span className="text-white/80">{titleSecondLine}</span>
            </>
          )}
        </h1>
        {description != null && (
          <div className="mt-6 max-w-2xl text-base leading-[1.7] text-white/75 sm:text-lg">
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
            {secondaryCta && (
              <CtaLink
                href={secondaryCta.href}
                variant={secondaryCta.variant || "on-dark-secondary"}
                {...(secondaryCta.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {secondaryCta.label}
              </CtaLink>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
