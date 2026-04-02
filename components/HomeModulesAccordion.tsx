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
          <div key={module.num} className="border-t border-border last:border-b">
            <button
              type="button"
              className="group flex w-full items-center gap-6 py-6 text-left transition-all duration-300 hover:pl-2"
              onClick={() => setOpenIndex(index)}
              aria-expanded={open}
            >
              <span className="font-sans text-sm font-medium text-accent">{module.num}</span>
              <span className="flex-1 font-sans text-lg font-semibold text-primary transition-colors group-hover:text-primary/80">
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
              <div className="pb-6 pl-12 md:pl-16">
                {module.featured.length > 0 && (
                  <div className="mb-4 flex flex-wrap gap-2">
                    {module.featured.map((f) => (
                      <Link
                        key={f.href}
                        href={f.href}
                        className="rounded-full border border-border px-3 py-1 font-sans text-xs text-muted-foreground no-underline transition-colors hover:border-primary hover:text-primary"
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
                  {module.title} →
                </Link>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
