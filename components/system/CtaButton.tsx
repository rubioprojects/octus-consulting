import type { ReactNode, AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "on-dark" | "on-dark-secondary";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:outline-primary",
  secondary:
    "border border-border bg-transparent text-foreground hover:border-primary/40 focus-visible:outline-primary",
  "on-dark":
    "bg-white text-primary hover:bg-white/90 focus-visible:outline-white",
  "on-dark-secondary":
    "border border-white/25 bg-transparent text-white/85 hover:border-white/45 hover:text-white focus-visible:outline-white",
};

/* Institutional: slight radius, not SaaS pills (avoid rounded-full). */
const base =
  "inline-flex h-11 items-center justify-center rounded-sm px-7 text-[13px] font-medium tracking-[0.04em] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:h-12 sm:px-9 sm:text-sm no-underline";

type Common = {
  variant?: Variant;
  className?: string;
  children: ReactNode;
};

export function CtaLink({
  variant = "primary",
  className = "",
  children,
  ...props
}: Common & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}

export function CtaButton({
  variant = "primary",
  className = "",
  children,
  ...props
}: Common & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type="button" className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
