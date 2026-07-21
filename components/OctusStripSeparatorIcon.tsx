/**
 * Octus mark for inline separators (authority strip, etc.).
 * Optical size tuned for dark navy strips — slightly tighter circles than logo-symbol.
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
      <circle cx="12.5" cy="16" r="9" fill="currentColor" />
      <circle cx="24.75" cy="11.25" r="4.5" fill="currentColor" />
      <circle cx="24.75" cy="20.75" r="4.5" fill="currentColor" />
    </svg>
  );
}
