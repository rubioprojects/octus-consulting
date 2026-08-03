/** Centralized Octus brand asset paths (official intake masters). */
export const BRAND = {
  symbol: {
    blue: "/brand/symbol/octus-symbol-blue.svg",
    bluePng: "/brand/symbol/octus-symbol-blue.png",
    white: "/brand/symbol/octus-symbol-white.svg",
    dark: "/brand/symbol/octus-symbol-dark.svg",
  },
  lockup: {
    /** Official navigation lockup — light header surfaces */
    navOnLight: "/brand/lockup/octus-lockup-nav-on-light.svg",
    /** Official navigation lockup — dark / transparent header over hero */
    navOnDark: "/brand/lockup/octus-lockup-nav-on-dark.svg",
    /** Official horizontal primary lockup — dark footer / navy surfaces */
    horizontalPrimaryOnDark: "/brand/lockup/octus-lockup-horizontal-primary-on-dark.svg",
    /** Blue symbol + dark wordmark — light surfaces (PNG fallback) */
    horizontalOnLight: "/brand/lockup/octus-lockup-horizontal-blue-dark.png",
    /** Blue symbol + white wordmark — dark surfaces (PNG fallback) */
    horizontalOnDark: "/brand/lockup/octus-lockup-horizontal-blue-white.png",
    /** Full white lockup — alternate dark-surface option */
    horizontalWhite: "/brand/lockup/octus-lockup-horizontal-white.png",
    horizontalDark: "/brand/lockup/octus-lockup-horizontal-dark.png",
    horizontalBlueWhite: "/brand/lockup/octus-lockup-horizontal-blue-white.png",
    stacked: "/brand/lockup/octus-lockup-stacked-blue-dark.png",
  },
  motifs: {
    arcPrimary: "/brand/motifs/octus-arc-primary.svg",
    arcSecondary: "/brand/motifs/octus-arc-secondary.svg",
  },
  social: {
    og: "/brand/social/octus-og-default.png",
  },
} as const;
