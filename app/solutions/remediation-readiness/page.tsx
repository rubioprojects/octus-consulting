import AreaHubPage from "../../../components/system/AreaHubPage";
import { getPublicAreaBySlug } from "../../../lib/publicAreas";

const area = getPublicAreaBySlug("remediation-readiness")!;

export const metadata = {
  title: area.name,
  description: area.oneSentence,
  alternates: { canonical: `https://octusconsulting.com${area.href}` },
};

export default function Page() {
  return <AreaHubPage area={area} />;
}
