/**
 * Octus mark for inline separators (authority strip, etc.).
 * Vector version avoids PNG black-matte boxes on dark blue backgrounds.
 */
export default function OctusStripSeparatorIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width={16}
      height={16}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle cx="13" cy="16" r="9.5" fill="currentColor" />
      <circle cx="25.5" cy="11" r="5" fill="currentColor" />
      <circle cx="25.5" cy="21" r="5" fill="currentColor" />
    </svg>
  );
}
