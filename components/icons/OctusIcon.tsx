import type { SVGProps } from "react";

export type OctusIconName =
  | "regulatory"
  | "licensing"
  | "compliance"
  | "banking"
  | "corporate"
  | "markets"
  | "jurisdictions"
  | "intelligence"
  | "contact"
  | "remediation"
  | "chevron"
  | "arrow";

const stroke = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.35,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Restrained geometric stroke family — Octus wayfinding, not stock Lucide aesthetics. */
export default function OctusIcon({
  name,
  size = 20,
  className = "",
  ...props
}: {
  name: OctusIconName;
  size?: number;
  className?: string;
} & SVGProps<SVGSVGElement>) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    className,
    "aria-hidden": true as const,
    ...props,
  };

  switch (name) {
    case "regulatory":
      return (
        <svg {...common}>
          <path {...stroke} d="M4.5 20V9.5L12 4l7.5 5.5V20" />
          <path {...stroke} d="M9.5 20v-5.5h5V20" />
        </svg>
      );
    case "licensing":
      return (
        <svg {...common}>
          <path {...stroke} d="M7.5 3.5h6.5L19 8.5v12H7.5z" />
          <path {...stroke} d="M14 3.5V8h4.5M9.5 12.5h5M9.5 16h3.5" />
        </svg>
      );
    case "compliance":
      return (
        <svg {...common}>
          <path {...stroke} d="M12 3.5l7.5 2.75v5.5c0 4.75-3.25 8-7.5 9.5-4.25-1.5-7.5-4.75-7.5-9.5v-5.5L12 3.5z" />
          <path {...stroke} d="M9.25 12.25l2 2 3.75-3.75" />
        </svg>
      );
    case "banking":
      return (
        <svg {...common}>
          <path {...stroke} d="M3.5 10h17M5.5 10v7.5M18.5 10v7.5M3.5 17.5h17M8.5 13.5h1.5M14 13.5h1.5M12 6.5l7.5 3.5H4.5L12 6.5z" />
        </svg>
      );
    case "corporate":
      return (
        <svg {...common}>
          <circle {...stroke} cx="12" cy="6.25" r="2.25" />
          <circle {...stroke} cx="6.25" cy="17" r="2.25" />
          <circle {...stroke} cx="17.75" cy="17" r="2.25" />
          <path {...stroke} d="M12 8.5v3.75M10.75 14.25L7.5 16M13.25 14.25l3.25 1.75" />
        </svg>
      );
    case "markets":
      return (
        <svg {...common}>
          <path {...stroke} d="M4.5 17.5V8.5M10 17.5V5.5M15.5 17.5v-6M21 17.5H3" />
        </svg>
      );
    case "jurisdictions":
      return (
        <svg {...common}>
          <path {...stroke} d="M12 20.5s6.5-5 6.5-10a6.5 6.5 0 10-13 0c0 5 6.5 10 6.5 10z" />
          <circle {...stroke} cx="12" cy="10.5" r="2.25" />
        </svg>
      );
    case "intelligence":
      return (
        <svg {...common}>
          <circle {...stroke} cx="11" cy="11" r="5.5" />
          <path {...stroke} d="M19.5 19.5l-3.25-3.25M11 8.25v5.5M8.25 11h5.5" />
        </svg>
      );
    case "contact":
      return (
        <svg {...common}>
          <path {...stroke} d="M4.5 6.5h15v11h-15z" />
          <path {...stroke} d="M4.5 7.5l7.5 5.5 7.5-5.5" />
        </svg>
      );
    case "remediation":
      return (
        <svg {...common}>
          <path {...stroke} d="M12 4.5v5.5l3.5 1.75" />
          <circle {...stroke} cx="12" cy="12" r="7.5" />
          <path {...stroke} d="M8.5 16h7" />
        </svg>
      );
    case "chevron":
      return (
        <svg {...common}>
          <path {...stroke} d="M6.5 9.5l5.5 5.5 5.5-5.5" />
        </svg>
      );
    case "arrow":
      return (
        <svg {...common}>
          <path {...stroke} d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      );
    default:
      return null;
  }
}
