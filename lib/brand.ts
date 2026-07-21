/** Centralized Octus brand asset paths (official intake masters). */
export const BRAND = {
  symbol: {
    blue: "/brand/symbol/octus-symbol-blue.svg",
    bluePng: "/brand/symbol/octus-symbol-blue.png",
    white: "/brand/symbol/octus-symbol-white.svg",
    dark: "/brand/symbol/octus-symbol-dark.svg",
  },
  lockup: {
    /** Blue symbol + dark wordmark — light surfaces (header) */
    horizontalOnLight: "/brand/lockup/octus-lockup-horizontal-blue-dark.png",
    /** White lockup — dark surfaces (footer) */
    horizontalOnDark: "/brand/lockup/octus-lockup-horizontal-white.png",
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
