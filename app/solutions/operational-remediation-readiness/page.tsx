import StaticRedirect from "../../../components/StaticRedirect";
import { pageSocialMeta } from "../../../lib/pageMeta";

export const metadata = pageSocialMeta({
  title: "Redirecting…",
  description:
    "This URL redirects to /solutions/remediation-readiness on the Octus Consulting production site.",
  path: "/solutions/remediation-readiness",
  robots: { index: false, follow: true },
});

export default function Page() {
  return <StaticRedirect to="/solutions/remediation-readiness" />;
}
