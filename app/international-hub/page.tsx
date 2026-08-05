import AreaHubPage from "../../components/system/AreaHubPage";
import { getPublicAreaBySlug } from "../../lib/publicAreas";
import { pageSocialMeta } from "../../lib/pageMeta";

const area = getPublicAreaBySlug("international-hub")!;

export const metadata = pageSocialMeta({
  title: "International Hub",
  description: area.oneSentence,
  path: "/international-hub",
});

export default function InternationalHubPage() {
  return <AreaHubPage area={area} />;
}
