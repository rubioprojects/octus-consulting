"use client";

import { useEffect } from "react";

/** Client redirect for static export hosts that do not apply vercel.json redirects. */
export default function StaticRedirect({ to }: { to: string }) {
  useEffect(() => {
    window.location.replace(to);
  }, [to]);

  return (
    <main className="mx-auto max-w-3xl px-4 py-32">
      <p className="font-sans text-sm text-muted-foreground">
        This page has moved.{" "}
        <a href={to} className="text-primary underline">
          Continue to {to}
        </a>
        .
      </p>
    </main>
  );
}
