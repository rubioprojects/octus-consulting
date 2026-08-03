import { BRAND } from "../lib/brand";

type Variant = "on-light" | "on-dark";
type Surface = "nav" | "footer";

/**
 * Official Octus SVG lockup from definitive deployment 9q798dbg2 / dpl_437tawko…
 * Nav and footer use official SVG masters — not a reconstructed HTML wordmark.
 */
export default function BrandLockup({
  variant = "on-light",
  surface = "nav",
  className = "h-8 w-auto md:h-9",
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
      ? { width: 220, height: 48 }
      : { width: 200, height: 42 };

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt="Octus Consulting"
      width={dims.width}
      height={dims.height}
      decoding="async"
      {...(priority ? { fetchPriority: "high" as const } : {})}
      className={`site-header__logo ${className}`}
      style={{ imageRendering: "auto" }}
    />
  );
}
