import type { ReactNode } from "react";

type Surface = "default" | "elevated" | "dark";

const surfaces: Record<Surface, string> = {
  default: "bg-background",
  elevated: "surface-elevated",
  dark: "surface-dark",
};

export default function Section({
  children,
  surface = "default",
  className = "",
  narrow = false,
  id,
}: {
  children: ReactNode;
  surface?: Surface;
  className?: string;
  narrow?: boolean;
  id?: string;
}) {
  return (
    <section id={id} className={`${surfaces[surface]} py-16 md:py-24 ${className}`}>
      <div
        className={`mx-auto w-full px-4 sm:px-6 lg:px-8 ${
          narrow ? "max-w-3xl" : "max-w-7xl"
        }`}
      >
        {children}
      </div>
    </section>
  );
}
