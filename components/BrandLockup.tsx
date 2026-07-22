import { BRAND } from "../lib/brand";

type Variant = "on-light" | "on-dark";

/**
 * Official Octus lockup — uses approved Brand Kit exports (PNG masters).
 * on-light: blue symbol + dark wordmark
 * on-dark: blue symbol + white wordmark (preferred on navy / charcoal)
 */
export default function BrandLockup({
  variant = "on-light",
  className = "h-8 w-auto md:h-9",
  priority = false,
}: {
  variant?: Variant;
  className?: string;
  priority?: boolean;
}) {
  const src =
    variant === "on-dark" ? BRAND.lockup.horizontalOnDark : BRAND.lockup.horizontalOnLight;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt="Octus Consulting"
      width={200}
      height={52}
      decoding="async"
      {...(priority ? { fetchPriority: "high" as const } : {})}
      className={className}
      style={{ imageRendering: "auto" }}
    />
  );
}
