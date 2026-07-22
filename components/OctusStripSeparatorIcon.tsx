/**
 * Octus mark for inline separators (authority strip, etc.).
 * Geometry matches official three-circle mark (HUMAN_REVIEW_REQUIRED vs PNG master).
 * Uses currentColor — set text color from official tokens at call site.
 */
export default function OctusStripSeparatorIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width={16}
      height={12}
      viewBox="0 0 64 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <g fill="currentColor">
        <circle cx="22" cy="24" r="18" />
        <circle cx="46" cy="14.5" r="9.5" />
        <circle cx="46" cy="33.5" r="9.5" />
      </g>
    </svg>
  );
}
