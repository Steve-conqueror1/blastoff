import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Blast Off Kitchen Exhaust Cleaning & Fire Protection — certified commercial hood cleaning and fire protection serving Red Deer and Central Alberta.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return <div>About</div>;
}
