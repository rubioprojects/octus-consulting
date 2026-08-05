import StaticRedirect from "../../components/StaticRedirect";
import { pageSocialMeta } from "../../lib/pageMeta";

export const metadata = pageSocialMeta({
  title: "Redirecting…",
  description:
    "This URL redirects to /solutions/corporate-structuring on the Octus Consulting production site.",
  path: "/solutions/corporate-structuring",
  robots: { index: false, follow: true },
});

export default function Page() {
  return <StaticRedirect to="/solutions/corporate-structuring" />;
}
