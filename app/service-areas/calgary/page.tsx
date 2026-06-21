import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hood Cleaning Calgary | Commercial Kitchen Exhaust Cleaning",
  description:
    "Certified commercial kitchen exhaust cleaning and restaurant hood cleaning in Calgary and Area. Ansul fire protection and fire extinguisher tagging.",
  alternates: { canonical: "/service-areas/calgary" },
  keywords: [
    "Hood Cleaning Calgary",
    "Kitchen Exhaust Cleaning Calgary",
    "Commercial Kitchen Exhaust Cleaning Calgary",
    "Restaurant Hood Cleaning Calgary",
    "Ansul System Inspection Calgary",
    "Fire Protection Services Calgary",
  ],
};

export default function CalgaryPage() {
  return (
    <>
      {/* Area Header */}
      <section className="bg-dark text-white py-16 sm:py-20 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-primary font-heading text-base font-bold uppercase tracking-wider">
            Southern Service Hub
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-white mt-2 mb-4">
            Hood Cleaning Calgary
          </h1>
          <p className="font-sans text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Blast Off provides Calgary and the surrounding area with certified, professional exhaust hood and fire protection services.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white font-sans text-sm sm:text-base">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-red max-w-none">
            <h2 className="font-heading text-3xl font-bold uppercase text-dark mb-6">
              Commercial Ventilation Cleaning &amp; Fire Protection in Calgary
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Calgary&apos;s restaurant industry is vibrant and fast-paced. Operating a kitchen under constant high-volume demand leads to rapid grease accumulation in exhaust ventilation systems. At **Blast Off Kitchen Exhaust Cleaning &amp; Fire Protection**, we provide commercial facilities with professional, high-standard maintenance to protect against fire hazards.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our mobile crews serve the greater Calgary area, handling everything from independent diners to high-volume commercial food courts. We clean the entire exhaust system down to the bare steel, satisfying all requirements set by local fire codes and insurance providers.
            </p>

            <h3 className="font-heading text-2xl font-bold text-dark mt-8 mb-4">
              Calgary &amp; Area Service Specialties:
            </h3>
            <ul className="list-disc pl-6 mb-8 space-y-3 text-gray-600">
              <li>
                <strong className="text-dark">Commercial Hood Cleaning Calgary:</strong> High-pressure steam washing and chemical degreasing of interior canopy walls, exhaust registers, and grease baffle filters.
              </li>
              <li>
                <strong className="text-dark">Grease Duct Scraping &amp; Steaming:</strong> Detailed scraping of horizontal and vertical grease ducts to prevent combustible residue buildup.
              </li>
              <li>
                <strong className="text-dark">Ansul Fire Suppression System Services:</strong> Full semi-annual inspections, testing, fusible link replacements, and certifications for kitchen fire protection systems.
              </li>
              <li>
                <strong className="text-dark">Fire Extinguisher Maintenance:</strong> Annual physical inspections, certified compliance tags, and Class K recharges.
              </li>
            </ul>

            <h3 className="font-heading text-2xl font-bold text-dark mt-8 mb-4">
              Why Calgary Restaurant Operators Choose Us:
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              We understand that minimize downtime is essential to your bottom line. We work around your busy schedule to ensure the cleaning takes place at a time convenient for you—often during overnight off-hours. With certified technicians, environmentally friendly degreasers, and complete liability insurance, we provide safe, certified care.
            </p>

            <div className="bg-background rounded-2xl border border-gray-150 p-8 text-center mt-12">
              <h4 className="font-heading text-xl font-bold text-dark mb-3">
                Request a Free Quote in Calgary
              </h4>
              <p className="text-sm text-gray-500 max-w-md mx-auto mb-6 leading-relaxed">
                Contact our Calgary dispatch desk today to receive a free, detailed quote or to book a certified inspection.
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
