import AreaHubPage from "../../components/system/AreaHubPage";
import { getPublicAreaBySlug } from "../../lib/publicAreas";

const area = getPublicAreaBySlug("private-clients")!;

export const metadata = {
  title: "Private Clients",
  description: area.oneSentence,
  alternates: { canonical: "https://octusconsulting.com/private-clients" },
  other: {
    "octus:historical-alias": "Ownership & UBO",
  },
};

export default function PrivateClientsPage() {
  return <AreaHubPage area={area} />;
}
