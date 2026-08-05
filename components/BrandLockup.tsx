import { BRAND } from "../lib/brand";

type Variant = "on-light" | "on-dark";
type Surface = "nav" | "footer";

/**
 * Official Octus SVG lockup from definitive deployment 9q798dbg2 / dpl_437tawko…
 * Nav and footer use official SVG masters — not a reconstructed HTML wordmark.
 * Footer uses dedicated site-footer__lockup sizing (not header logo classes).
 */
export default function BrandLockup({
  variant = "on-light",
  surface = "nav",
  className,
  priority = false,
}: {
  variant?: Variant;
  surface?: Surface;
  className?: string;
  priority?: boolean;
}) {
  const src =
    surface === "footer"
      ? BRAND.lockup.horizontalPrimaryOnDark
      : variant === "on-dark"
        ? BRAND.lockup.navOnDark
        : BRAND.lockup.navOnLight;

  const dims =
    surface === "footer"
      ? { width: 240, height: 63 }
      : { width: 200, height: 42 };

  const resolvedClass =
    className ??
    (surface === "footer"
      ? "site-footer__lockup h-9 w-auto max-w-[min(100%,17rem)] object-contain object-left lg:h-12 lg:max-w-none"
      : "site-header__logo h-8 w-auto lg:h-9");

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt="Octus Consulting"
      width={dims.width}
      height={dims.height}
      decoding="async"
      {...(priority ? { fetchPriority: "high" as const } : {})}
      className={resolvedClass}
      style={{ imageRendering: "auto" }}
    />
  );
}
