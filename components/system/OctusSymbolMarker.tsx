import { BRAND } from "../../lib/brand";

type Tone = "blue" | "white" | "dark";

/**
 * Octus symbol as structural language — section marker, not decoration.
 * Cap: one marker per section header cluster.
 */
export default function OctusSymbolMarker({
  tone = "blue",
  size = 22,
  className = "",
}: {
  tone?: Tone;
  size?: number;
  className?: string;
}) {
  const src =
    tone === "white"
      ? BRAND.symbol.white
      : tone === "dark"
        ? BRAND.symbol.dark
        : BRAND.symbol.blue;

  return (
    <span className={`octus-symbol-marker ${className}`} aria-hidden="true">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="" width={size} height={Math.round(size * 0.75)} />
    </span>
  );
}
