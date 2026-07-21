/**
 * Restrained Octus arc motif for light content sections.
 * Decorative only — does not change layout structure.
 */
export default function BrandSectionMotif({
  className = "",
  tone = "light",
  position = "end",
}: {
  className?: string;
  tone?: "light" | "navy";
  /** Arc placement within the section */
  position?: "end" | "start" | "center";
}) {
  return (
    <div
      className={`octus-section-motif octus-section-motif--${tone} octus-section-motif--${position} ${className}`}
      aria-hidden="true"
    >
      <div className="octus-section-motif__arcs" />
      <div className="octus-section-motif__mark" />
    </div>
  );
}
