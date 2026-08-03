import { BRAND } from "../lib/brand";

type Variant = "on-light" | "on-dark";
type Surface = "nav" | "footer";

/**
 * Official Octus lockup — approved SVG masters from the visual reference deployment.
 * Do not reconstruct the wordmark with HTML/CSS text.
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
  let src: string = BRAND.lockup.navOnLight;
  let width = 200;
  let height = 42;

  if (surface === "footer") {
    src = BRAND.lockup.horizontalPrimaryOnDark;
    width = 240;
    height = 63;
  } else if (variant === "on-dark") {
    src = BRAND.lockup.navOnDark;
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt="Octus Consulting"
      width={width}
      height={height}
      decoding="async"
      {...(priority ? { fetchPriority: "high" as const } : {})}
      className={className}
      style={{ imageRendering: "auto" }}
    />
  );
}
