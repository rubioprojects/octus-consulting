"use client";

import Link from "next/link";
import { useState } from "react";
import type { AreaFamilyView } from "../../lib/areaHubContent";

export default function ServiceFamilyAccordion({ families }: { families: AreaFamilyView[] }) {
  const [openId, setOpenId] = useState<string | null>(families[0]?.id ?? null);

  return (
    <div className="divide-y divide-border border-y border-border">
      {families.map((family, index) => {
        const open = openId === family.id;
        return (
          <div key={family.id} className={open ? "bg-secondary/15" : ""}>
            <button
              type="button"
              className="group flex w-full items-start gap-4 px-0 py-6 text-left md:gap-6"
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
                {!open && (
                  <span className="mt-1 block font-sans text-sm text-muted-foreground line-clamp-2">
                    {family.description}
                  </span>
                )}
              </span>
              <svg
                className={`mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`}
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
                <p className="mb-5 max-w-2xl font-sans text-sm leading-relaxed text-muted-foreground">
                  {family.description}
                </p>
                {family.services.length > 0 && (
                  <ul className="mb-5 list-none space-y-4">
                    {family.services.map((svc) => (
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
                {family.deepLinks.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {family.deepLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="rounded-sm border border-border bg-background px-3 py-1.5 font-sans text-xs text-muted-foreground no-underline hover:border-primary hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
