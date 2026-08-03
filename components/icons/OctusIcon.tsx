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
  | "chevron"
  | "arrow";

const stroke = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Single-family stroke icons. Repo logos used for marks; Canva brand kit not accessible in this session: do not invent new icon families. */
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
          <path {...stroke} d="M4 20V10l8-6 8 6v10" />
          <path {...stroke} d="M9 20v-6h6v6" />
        </svg>
      );
    case "licensing":
      return (
        <svg {...common}>
          <path {...stroke} d="M7 3h7l5 5v13H7z" />
          <path {...stroke} d="M14 3v5h5M9 13h6M9 17h4" />
        </svg>
      );
    case "compliance":
      return (
        <svg {...common}>
          <path {...stroke} d="M12 3l8 3v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z" />
          <path {...stroke} d="M9 12l2 2 4-4" />
        </svg>
      );
    case "banking":
      return (
        <svg {...common}>
          <path {...stroke} d="M3 10h18M5 10v8M19 10v8M3 18h18M8 14h2M14 14h2M12 6l8 4H4l8-4z" />
        </svg>
      );
    case "corporate":
      return (
        <svg {...common}>
          <circle {...stroke} cx="12" cy="6" r="2.5" />
          <circle {...stroke} cx="6" cy="17" r="2.5" />
          <circle {...stroke} cx="18" cy="17" r="2.5" />
          <path {...stroke} d="M12 8.5v4M10.5 14.5L7.5 16M13.5 14.5l3 1.5" />
        </svg>
      );
    case "markets":
      return (
        <svg {...common}>
          <path {...stroke} d="M4 18V8M10 18V5M16 18v-7M22 18H2" />
        </svg>
      );
    case "jurisdictions":
      return (
        <svg {...common}>
          <path {...stroke} d="M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z" />
          <circle {...stroke} cx="12" cy="10" r="2.5" />
        </svg>
      );
    case "intelligence":
      return (
        <svg {...common}>
          <circle {...stroke} cx="11" cy="11" r="6" />
          <path {...stroke} d="M20 20l-3.5-3.5M11 8v6M8 11h6" />
        </svg>
      );
    case "contact":
      return (
        <svg {...common}>
          <path {...stroke} d="M4 6h16v12H4z" />
          <path {...stroke} d="M4 7l8 6 8-6" />
        </svg>
      );
    case "chevron":
      return (
        <svg {...common}>
          <path {...stroke} d="M6 9l6 6 6-6" />
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
