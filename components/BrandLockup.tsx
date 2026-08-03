import { BRAND } from "../lib/brand";

type Variant = "on-light" | "on-dark";
type Surface = "nav" | "footer";

/**
 * Official Octus lockup — closed-model symbol + Unigeo wordmark shell.
 * Full PNG lockups remain available as brand assets; nav/footer use this shell.
 */
export default function BrandLockup({
  variant = "on-light",
  surface = "nav",
  className = "h-10 w-auto md:h-11",
  priority = false,
}: {
  variant?: Variant;
  surface?: Surface;
  className?: string;
  priority?: boolean;
}) {
  const symbolSrc = BRAND.symbol.blue;
  const wordTone =
    variant === "on-dark" || surface === "footer"
      ? "brand-lockup__wordmark--on-dark"
      : "brand-lockup__wordmark--on-light";

  return (
    <span className={`brand-lockup ${className}`} role="img" aria-label="Octus Consulting">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={symbolSrc}
        alt=""
        width={36}
        height={36}
        decoding="async"
        aria-hidden="true"
        {...(priority ? { fetchPriority: "high" as const } : {})}
        className="brand-lockup__symbol"
      />
      <span className={`brand-lockup__wordmark ${wordTone}`} aria-hidden="true">
        OCTUS
      </span>
    </span>
  );
}
