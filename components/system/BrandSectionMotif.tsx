/**
 * Restrained Octus arc motif for light content sections.
 * Decorative only — does not change layout structure.
 */
export default function BrandSectionMotif({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`octus-section-motif ${className}`} aria-hidden="true">
      <div className="octus-section-motif__arcs" />
    </div>
  );
}
