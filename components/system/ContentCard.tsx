import Link from "next/link";
import type { ReactNode } from "react";

export default function ContentCard({
  href,
  eyebrow,
  title,
  children,
  meta,
}: {
  href?: string;
  eyebrow?: ReactNode;
  title: ReactNode;
  children?: ReactNode;
  meta?: ReactNode;
}) {
  const inner = (
    <div className="flex h-full flex-col rounded-md border border-transparent bg-background p-6 transition-colors hover:border-border md:p-8">
      {(eyebrow || meta) && (
        <div className="mb-4 flex flex-wrap items-center gap-3">
          {eyebrow}
          {meta}
        </div>
      )}
      <h3 className="mb-3 font-sans text-lg font-semibold text-primary">{title}</h3>
      {children && <div className="body-text flex-1">{children}</div>}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full no-underline">
        {inner}
      </Link>
    );
  }
  return inner;
}
