"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { AreaFamilyView } from "../../lib/areaHubContent";

function usePreferCollapsedDefault() {
  const [collapsedDefault, setCollapsedDefault] = useState(true);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    const apply = () => setCollapsedDefault(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);
  return collapsedDefault;
}

/** Deduplicate deep links already represented as service hrefs. */
function uniqueDeepLinks(family: AreaFamilyView) {
  const serviceHrefs = new Set(
    family.services.map((s) => s.href).filter((h): h is string => Boolean(h))
  );
  const seen = new Set<string>();
  return family.deepLinks.filter((link) => {
    if (serviceHrefs.has(link.href)) return false;
    if (seen.has(link.href)) return false;
    seen.add(link.href);
    return true;
  });
}

/** Merge services that share one deep-service route into a single presentation row. */
function dedupeServicesByRoute(family: AreaFamilyView) {
  const byRoute = new Map<string, { names: string[]; oneSentence: string; href: string | null; id: string }>();
  const orphans: typeof family.services = [];

  for (const svc of family.services) {
    if (!svc.href) {
      orphans.push(svc);
      continue;
    }
    const existing = byRoute.get(svc.href);
    if (existing) {
      existing.names.push(svc.name);
    } else {
      byRoute.set(svc.href, {
        id: svc.id,
        names: [svc.name],
        oneSentence: svc.oneSentence,
        href: svc.href,
      });
    }
  }

  return [
    ...Array.from(byRoute.values()).map((row) => ({
      id: row.id,
      name: row.names.join(" · "),
      oneSentence:
        row.names.length > 1
          ? `${row.names.join(" and ")} on one dedicated page.`
          : row.oneSentence,
      href: row.href,
    })),
    ...orphans,
  ];
}

export default function ServiceFamilyAccordion({ families }: { families: AreaFamilyView[] }) {
  const mobileCollapsed = usePreferCollapsedDefault();
  const [openId, setOpenId] = useState<string | null>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
    setOpenId(mobileCollapsed ? null : families[0]?.id ?? null);
  }, [mobileCollapsed, families]);

  const activeOpen = hydrated ? openId : null;

  return (
    <div className="divide-y divide-border border-y border-border">
      {families.map((family, index) => {
        const open = activeOpen === family.id;
        const services = dedupeServicesByRoute(family);
        const deepLinks = uniqueDeepLinks(family);
        return (
          <div key={family.id} className={open ? "bg-secondary/15" : ""}>
            <button
              type="button"
              className="group flex min-h-11 w-full items-start gap-4 px-0 py-5 text-left md:gap-6 md:py-6"
              onClick={() => setOpenId(open ? null : family.id)}
              aria-expanded={open}
            >
              <span className="editorial-numeral editorial-numeral--sm w-8 shrink-0 pt-0.5 text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="flex-1">
                <span className="block font-heading text-lg font-semibold text-foreground md:text-xl">
                  {family.name}
                </span>
                <span className="mt-1 block font-sans text-sm text-muted-foreground line-clamp-2">
                  {family.description}
                </span>
              </span>
              <svg
                className={`mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {open && (
              <div className="pb-8 pl-12 pr-2 md:pl-14">
                {services.length > 0 && (
                  <ul className="mb-5 list-none space-y-4">
                    {services.map((svc) => (
                      <li key={svc.id} className="border-l-2 border-primary/25 pl-4">
                        {svc.href ? (
                          <Link
                            href={svc.href}
                            className="font-sans text-base font-medium text-primary no-underline hover:text-primary/80"
                          >
                            {svc.name} →
                          </Link>
                        ) : (
                          <p className="font-sans text-base font-medium text-foreground">{svc.name}</p>
                        )}
                        <p className="mt-1 font-sans text-sm text-muted-foreground">{svc.oneSentence}</p>
                      </li>
                    ))}
                  </ul>
                )}
                {deepLinks.length > 0 && (
                  <ul className="list-none space-y-2">
                    {deepLinks.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="font-sans text-sm text-primary no-underline hover:text-primary/80"
                        >
                          {link.label} →
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
