import StaticRedirect from "../../components/StaticRedirect";
import { pageSocialMeta } from "../../lib/pageMeta";

export const metadata = pageSocialMeta({
  title: "Redirecting…",
  description:
    "This URL redirects to /solutions/compliance-risk on the Octus Consulting production site.",
  path: "/solutions/compliance-risk",
  robots: { index: false, follow: true },
});

export default function Page() {
  return <StaticRedirect to="/solutions/compliance-risk" />;
}
