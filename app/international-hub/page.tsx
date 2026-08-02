import AreaHubPage from "../../components/system/AreaHubPage";
import { getPublicAreaBySlug } from "../../lib/publicAreas";

const area = getPublicAreaBySlug("international-hub")!;

export const metadata = {
  title: "International Hub",
  description: area.oneSentence,
  alternates: { canonical: "https://octusconsulting.com/international-hub" },
};

export default function InternationalHubPage() {
  return <AreaHubPage area={area} />;
}
