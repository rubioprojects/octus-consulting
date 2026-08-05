import AreaHubPage from "../../../components/system/AreaHubPage";
import { getPublicAreaBySlug } from "../../../lib/publicAreas";
import { pageSocialMeta } from "../../../lib/pageMeta";

const area = getPublicAreaBySlug("remediation-readiness")!;

export const metadata = pageSocialMeta({
  title: area.name,
  description: area.oneSentence,
  path: area.href,
});

export default function Page() {
  return <AreaHubPage area={area} />;
}
