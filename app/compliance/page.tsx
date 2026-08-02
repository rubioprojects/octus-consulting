import StaticRedirect from "../../components/StaticRedirect";

export const metadata = {
  title: "Redirecting…",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://octusconsulting.com/solutions/compliance-risk" },
};

export default function Page() {
  return <StaticRedirect to="/solutions/compliance-risk" />;
}
