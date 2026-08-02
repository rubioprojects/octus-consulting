import AreaHubPage from "../../components/system/AreaHubPage";
import { getPublicAreaBySlug } from "../../lib/publicAreas";
import { pageSocialMeta } from "../../lib/pageMeta";

const area = getPublicAreaBySlug("private-clients")!;

export const metadata = {
  ...pageSocialMeta({
    title: "Private Clients",
    description: area.oneSentence,
    path: "/private-clients",
  }),
  other: {
    "octus:historical-alias": "Ownership & UBO",
  },
};

export default function PrivateClientsPage() {
  return <AreaHubPage area={area} />;
}
