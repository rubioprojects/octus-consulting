import { BRAND } from "../../lib/brand";

/**
 * Chapter transition — restrained watermark + seam for major homepage beats.
 * Opacity capped; never tiled as texture.
 */
export default function OctusChapterTransition({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`octus-chapter-transition ${className}`} aria-hidden="true">
      <div
        className="octus-chapter-transition__mark"
        style={{ backgroundImage: `url('${BRAND.symbol.blue}')` }}
      />
      <div className="octus-chapter-transition__rule" />
    </div>
  );
}
