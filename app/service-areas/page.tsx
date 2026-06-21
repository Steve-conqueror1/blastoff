import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Areas | Central Alberta",
  description:
    "Blast Off provides kitchen exhaust cleaning and fire protection across Red Deer, Calgary, Edmonton, Lacombe, Blackfalds, Sylvan Lake and Central Alberta.",
  alternates: { canonical: "/service-areas" },
};

export default function ServiceAreasPage() {
  return <div>Service Areas</div>;
}
