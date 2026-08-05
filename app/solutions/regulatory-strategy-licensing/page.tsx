import StaticRedirect from "../../../components/StaticRedirect";
import { pageSocialMeta } from "../../../lib/pageMeta";

export const metadata = pageSocialMeta({
  title: "Redirecting…",
  description:
    "This URL redirects to /solutions/regulatory-structuring on the Octus Consulting production site.",
  path: "/solutions/regulatory-structuring",
  robots: { index: false, follow: true },
});

export default function Page() {
  return <StaticRedirect to="/solutions/regulatory-structuring" />;
}
