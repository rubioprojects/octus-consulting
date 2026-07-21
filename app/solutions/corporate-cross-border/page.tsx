import { SOLUTION_HUBS } from "../../../lib/commercial";
import SolutionHubPage from "../../../components/system/SolutionHubPage";

const hub = SOLUTION_HUBS.find((h) => h.slug === "corporate-cross-border")!;

export const metadata = {
  title: hub.title,
  description: hub.summary,
};

export default function Page() {
  return <SolutionHubPage hub={hub} />;
}
