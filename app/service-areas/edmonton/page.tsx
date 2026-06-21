import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kitchen Exhaust Cleaning Edmonton | Commercial Hood Cleaning",
  description:
    "Certified kitchen exhaust cleaning and commercial hood cleaning services in Edmonton, AB. Professional grease duct steam washing and Ansul system inspections.",
  alternates: { canonical: "/service-areas/edmonton" },
  keywords: [
    "Kitchen Exhaust Cleaning Edmonton",
    "Commercial Kitchen Exhaust Cleaning Edmonton",
    "Restaurant Hood Cleaning Edmonton",
    "Ansul System Inspection Edmonton",
    "Fire Protection Services Edmonton",
    "Commercial Hood Cleaning Alberta",
  ],
};

export default function EdmontonPage() {
  return (
    <>
      {/* Area Header */}
      <section className="bg-dark text-white py-16 sm:py-20 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-primary font-heading text-base font-bold uppercase tracking-wider">
            Northern Service Hub
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-white mt-2 mb-4">
            Kitchen Exhaust Cleaning Edmonton
          </h1>
          <p className="font-sans text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Blast Off provides Edmonton commercial kitchens with certified exhaust duct cleaning and complete fire protection systems maintenance.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white font-sans text-sm sm:text-base">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-red max-w-none">
            <h2 className="font-heading text-3xl font-bold uppercase text-dark mb-6">
              Certified Commercial Vent Cleaning &amp; Fire Protection in Edmonton
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              A clean commercial kitchen is essential for safety, staff efficiency, and compliance. In Edmonton, municipal fire departments enforce strict compliance with **NFPA 96** guidelines for grease extraction systems. At **Blast Off Kitchen Exhaust Cleaning &amp; Fire Protection**, we provide complete, professional cleaning and inspections to keep your kitchen running smoothly.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our experienced crews are fully trained and equipped with commercial steam-wash units to handle restaurants, hotels, schools, daycare centers, and institutional kitchens. We scrape and clean all components to bare metal, ensuring grease hazards are completely removed.
            </p>

            <h3 className="font-heading text-2xl font-bold text-dark mt-8 mb-4">
              Edmonton &amp; Capital Region Offerings:
            </h3>
            <ul className="list-disc pl-6 mb-8 space-y-3 text-gray-600">
              <li>
                <strong className="text-dark">Commercial Kitchen Exhaust Cleaning Edmonton:</strong> Complete removal of grease from hood canopies, horizontal and vertical duct systems, and roof exhaust fans.
              </li>
              <li>
                <strong className="text-dark">Restaurant Hood Cleaning:</strong> Scraping, chemical degreasing, and stainless steel polishing to ensure your line canopy passes all health inspections.
              </li>
              <li>
                <strong className="text-dark">Ansul Fire Suppression Inspections:</strong> Semi-annual testing, fusible temperature links replacement, and automatic gas valve shut-off certification.
              </li>
              <li>
                <strong className="text-dark">Fire Extinguisher Service:</strong> Portable extinguisher annual physical checks, recharge servicing, and Class K kitchen certifications.
              </li>
            </ul>

            <h3 className="font-heading text-2xl font-bold text-dark mt-8 mb-4">
              Why Edmonton Businesses Partner with Blast Off:
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              We are fully insured, bonded, and certified. We schedule cleanings around your hours of operations to ensure minimal disruption. When our technicians finish a cleaning, they place a certified inspection tag on the hood canopy and compile a detailed compliance report, providing you with documentation for local inspectors and insurance underwriters.
            </p>

            <div className="bg-background rounded-2xl border border-gray-150 p-8 text-center mt-12">
              <h4 className="font-heading text-xl font-bold text-dark mb-3">
                Request a Free Quote in Edmonton
              </h4>
              <p className="text-sm text-gray-500 max-w-md mx-auto mb-6 leading-relaxed">
                Contact our Edmonton service desk today to receive a free, detailed quote or to schedule your next semi-annual inspection.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-bold text-white shadow hover:bg-red-700 transition"
                >
                  Request a Free Quote
                </Link>
                <a
                  href="tel:780-918-2076"
                  className="inline-flex items-center justify-center rounded-lg border border-dark bg-white px-6 py-3 text-sm font-bold text-dark hover:bg-gray-50 transition"
                >
                  Call 780-918-2076
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
