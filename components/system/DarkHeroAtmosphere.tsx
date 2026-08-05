import { BRAND } from "../../lib/brand";

/**
 * Shared navy atmosphere for dark heroes — definitive 9q798dbg2 treatment:
 * atmosphere + mesh + faint structural pattern. Arcs/large mark are suppressed.
 */
export default function DarkHeroAtmosphere() {
  return (
    <>
      <div className="octus-dark-hero__atmosphere" aria-hidden="true" />
      <div className="octus-dark-hero__mesh" aria-hidden="true" />
      <div
        className="octus-dark-hero__structure"
        aria-hidden="true"
        style={{
          backgroundImage: `url('${BRAND.patterns.structure}')`,
        }}
      />
    </>
  );
}
