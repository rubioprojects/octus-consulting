import { BRAND } from "../../lib/brand";

/** Shared navy atmosphere + mesh + official arc/symbol motifs for dark heroes. */
export default function DarkHeroAtmosphere() {
  return (
    <>
      <div className="octus-dark-hero__atmosphere" aria-hidden="true" />
      <div className="octus-dark-hero__mesh" aria-hidden="true" />
      <div
        className="octus-dark-hero__arcs"
        aria-hidden="true"
        style={{
          backgroundImage: `url('${BRAND.motifs.arcSecondary}')`,
        }}
      />
      <div
        className="octus-dark-hero__mark"
        aria-hidden="true"
        style={{
          backgroundImage: `url('${BRAND.symbol.blue}')`,
        }}
      />
    </>
  );
}
