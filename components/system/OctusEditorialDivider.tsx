import { BRAND } from "../../lib/brand";

/**
 * Editorial divider — symbol centered in a blue fade rule.
 * Use once between major chapter blocks (not between every paragraph).
 */
export default function OctusEditorialDivider({
  className = "",
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  const src = tone === "dark" ? BRAND.symbol.white : BRAND.symbol.blue;
  return (
    <div
      className={`octus-editorial-divider octus-editorial-divider--${tone} ${className}`}
      role="separator"
      aria-hidden="true"
    >
      <span className="octus-editorial-divider__line" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="octus-editorial-divider__mark"
        src={src}
        alt=""
        width={18}
        height={14}
      />
      <span className="octus-editorial-divider__line" />
    </div>
  );
}
