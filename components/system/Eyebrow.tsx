import type { ReactNode } from "react";

type Tone = "light" | "dark";

export default function Eyebrow({
  children,
  tone = "light",
  className = "",
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  const color =
    tone === "dark"
      ? "text-white/55"
      : "text-[hsl(var(--brand-red))]";
  return (
    <span
      className={`mb-4 inline-flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.2em] md:text-xs ${color} ${className}`}
    >
      <span
        className={`h-1.5 w-1.5 shrink-0 rounded-full ${tone === "dark" ? "bg-accent" : "bg-[hsl(var(--brand-red))]"}`}
        aria-hidden
      />
      {children}
    </span>
  );
}
