import StaticRedirect from "../../components/StaticRedirect";

export const metadata = {
  title: "Redirecting…",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://octusconsulting.com/solutions/regulatory-structuring" },
};

export default function Page() {
  return <StaticRedirect to="/solutions/regulatory-structuring" />;
}
