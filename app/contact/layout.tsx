import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Discuss your regulated operation with Octus. WhatsApp conversation or email — no website forms.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
