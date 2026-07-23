import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Discuss your regulated operation with Octus. WhatsApp for fast conversation, or email info@octusconsulting.com for institutional contact — no mass forms.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
