"use client";

import Link from "next/link";
import { useState } from "react";

export type HomeModuleRow = {
  num: string;
  title: string;
  href: string;
  featured: Array<{ label: string; href: string }>;
};

export default function HomeModulesAccordion({ modules }: { modules: HomeModuleRow[] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="home-modules-accordion space-y-0">
      {modules.map((module, index) => {
        const open = index === openIndex;
        return (
          <div
            key={module.num}
            className={`home-modules-accordion__row border-t border-border last:border-b ${open ? "bg-secondary/20" : ""}`}
          >
            <button
              type="button"
              className="home-modules-accordion__trigger group flex w-full min-h-11 items-center gap-3 py-5 text-left transition-all duration-300 hover:pl-1 sm:gap-5 md:gap-8 md:py-7"
              onClick={() => setOpenIndex((current) => (current === index ? -1 : index))}
              aria-expanded={open}
              aria-controls={`home-module-panel-${module.num}`}
            >
              <span className="editorial-numeral editorial-numeral--sm w-8 shrink-0 text-accent sm:w-10">
                {module.num}
              </span>
              <span className="home-modules-accordion__title min-w-0 flex-1 font-heading text-lg font-semibold tracking-tight text-primary transition-colors group-hover:text-primary/85 sm:text-xl md:text-2xl">
                {module.title}
              </span>
              <svg
                className={`home-modules-accordion__chevron h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 ${open ? "rotate-90" : ""}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <div
              id={`home-module-panel-${module.num}`}
              hidden={!open}
              className={
                open
                  ? "home-modules-accordion__panel pb-6 pl-0 pr-2 sm:pb-8 sm:pl-11 md:pl-[4.5rem]"
                  : undefined
              }
            >
              {open && (
                <>
                  {module.featured.length > 0 && (
                    <div className="mb-5 flex flex-wrap gap-2">
                      {module.featured.map((f) => (
                        <Link
                          key={`${f.href}-${f.label}`}
                          href={f.href}
                          className="home-modules-accordion__tag inline-flex min-h-11 items-center rounded-sm border border-border bg-background px-3 py-2 font-sans text-xs text-muted-foreground no-underline transition-colors hover:border-primary hover:text-primary"
                        >
                          {f.label}
                        </Link>
                      ))}
                    </div>
                  )}
                  <Link
                    href={module.href}
                    className="inline-flex min-h-11 items-center font-sans text-sm font-medium text-primary no-underline hover:text-primary/80"
                  >
                    Open {module.title} →
                  </Link>
                </>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
