"use client";

import { Fragment } from "react";
import OctusIcon, { type OctusIconName } from "../icons/OctusIcon";
import OctusStripSeparatorIcon from "../OctusStripSeparatorIcon";

export type CapabilityItem = {
  label: string;
  icon: OctusIconName;
};

/**
 * Octus capability rail — signature brand element (not navigation).
 * Continuous institutional marquee; prefers-reduced-motion → static centered row.
 */
export default function CapabilityRail({
  items,
  ariaLabel = "Core capabilities",
}: {
  items: readonly CapabilityItem[];
  ariaLabel?: string;
}) {
  const loop = [...items, ...items];

  return (
    <section
      className="capability-rail authority-strip w-full border-b border-white/[0.06]"
      style={{ backgroundColor: "#0B1220" }}
      aria-label={ariaLabel}
    >
      <div className="capability-rail__fade capability-rail__fade--left" aria-hidden="true" />
      <div className="capability-rail__fade capability-rail__fade--right" aria-hidden="true" />
      <div className="capability-rail__viewport">
        <div className="capability-rail__track" role="presentation">
          {loop.map((item, i) => (
            <Fragment key={`${item.label}-${i}`}>
              {i > 0 && (
                <OctusStripSeparatorIcon className="h-2.5 w-2.5 shrink-0 text-white/22" />
              )}
              <span className="capability-rail__item">
                <OctusIcon name={item.icon} size={14} className="text-white/55 opacity-95" />
                {item.label}
              </span>
            </Fragment>
          ))}
        </div>
        {/* Static fallback row for reduced-motion (CSS hides track animation; this centers) */}
        <div className="capability-rail__static" aria-hidden="true">
          {items.map((item, i) => (
            <Fragment key={`static-${item.label}`}>
              {i > 0 && (
                <OctusStripSeparatorIcon className="h-2.5 w-2.5 shrink-0 text-white/22" />
              )}
              <span className="capability-rail__item">
                <OctusIcon name={item.icon} size={14} className="text-white/55 opacity-95" />
                {item.label}
              </span>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
