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
    <div className="space-y-0">
      {modules.map((module, index) => {
        const open = index === openIndex;
        return (
          <div
            key={module.num}
            className={`border-t border-border last:border-b ${open ? "bg-secondary/20" : ""}`}
          >
            <button
              type="button"
              className="group flex w-full items-center gap-5 py-7 text-left transition-all duration-300 hover:pl-1 md:gap-8"
              onClick={() => setOpenIndex(index)}
              aria-expanded={open}
            >
              <span className="editorial-numeral editorial-numeral--sm w-10 shrink-0 text-accent">
                {module.num}
              </span>
              <span className="flex-1 font-heading text-xl font-semibold tracking-tight text-primary transition-colors group-hover:text-primary/85 md:text-2xl">
                {module.title}
              </span>
              <svg
                className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 ${open ? "rotate-90" : ""}`}
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
            {open && (
              <div className="pb-8 pl-[3.75rem] pr-2 md:pl-[4.5rem]">
                {module.featured.length > 0 && (
                  <div className="mb-5 flex flex-wrap gap-2">
                    {module.featured.map((f) => (
                      <Link
                        key={`${f.href}-${f.label}`}
                        href={f.href}
                        className="rounded-sm border border-border bg-background px-3 py-1.5 font-sans text-xs text-muted-foreground no-underline transition-colors hover:border-primary hover:text-primary"
                      >
                        {f.label}
                      </Link>
                    ))}
                  </div>
                )}
                <Link
                  href={module.href}
                  className="font-sans text-sm font-medium text-primary no-underline hover:text-primary/80"
                >
                  Open {module.title} →
                </Link>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
