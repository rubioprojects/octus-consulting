import Link from "next/link";
import { pageSocialMeta } from "../lib/pageMeta";

export const metadata = pageSocialMeta({
  title: "Page not found",
  description: "The requested page could not be found on the Octus Consulting website.",
  path: "/404",
});

export default function NotFound() {
  return (
    <main>
      <section className="surface-dark relative flex min-h-[70vh] flex-col justify-center pt-24 pb-16 md:min-h-[80vh] md:pt-28 md:pb-24">
        <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
          <span className="mb-5 block text-xs font-medium uppercase tracking-[0.12em] text-white/65">Utility</span>
          <h1 className="font-heading text-[1.85rem] font-semibold leading-[1.18] tracking-[-0.005em] text-[color:var(--text-primary-on-dark)] sm:text-4xl md:text-5xl lg:text-[3.35rem] lg:leading-[1.12] sp-headline">
            Page not found.
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/60">
            The address you requested is not available. Continue from Insights, Intelligence
            or the homepage.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Link href="/" className="btn-primary">
              Home →
            </Link>
            <Link
              href="/insights"
              className="font-sans text-sm font-medium text-white no-underline hover:underline"
            >
              Open Insights →
            </Link>
            <Link
              href="/intelligence"
              className="font-sans text-sm font-medium text-white no-underline hover:underline"
            >
              Intelligence →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
