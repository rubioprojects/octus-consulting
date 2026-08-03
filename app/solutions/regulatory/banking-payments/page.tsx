import { redirect } from "next/navigation";
import { pageSocialMeta } from "../../../../lib/pageMeta";

export const metadata = pageSocialMeta({
  title: "Banking & Payments",
  description:
    "Banks do not reject your business. They reject your structure. Octus coordinates banking strategy, compliance documentation and payment infrastructure for regulated operations.",
  path: "/solutions/banking-payments-infrastructure",
});

/** Legacy route: consolidated into cross-cutting Banking & Payments infrastructure. */
export default function BankingPaymentsLegacyRedirect() {
  redirect("/solutions/banking-payments-infrastructure");
}
