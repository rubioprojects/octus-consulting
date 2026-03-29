import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Octus Consulting",
  description: "Start a structured diagnostic for your regulated operation. We respond within 24 hours.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
