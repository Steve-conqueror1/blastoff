import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kitchen Exhaust Cleaning Red Deer | NFPA 96 Hood Cleaning",
  description:
    "Certified kitchen exhaust cleaning and commercial fire safety in Red Deer, Alberta. Ansul system testing, restaurant hood cleaning, and fire extinguisher tagging.",
  alternates: { canonical: "/service-areas/red-deer" },
  keywords: [
    "Kitchen Exhaust Cleaning Red Deer",
    "Commercial Kitchen Exhaust Cleaning Red Deer",
    "Restaurant Hood Cleaning Red Deer",
    "Grease Duct Cleaning Red Deer",
    "NFPA 96 Hood Cleaning Red Deer",
    "Ansul System Inspection Red Deer",
    "Fire Extinguisher Inspection Red Deer",
  ],
};

export default function RedDeerPage() {
  return (
    <>
      {/* Area Header */}
      <section className="bg-dark text-white py-16 sm:py-20 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-primary font-heading text-base font-bold uppercase tracking-wider">
            Our Main Hub
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-white mt-2 mb-4">
            Kitchen Exhaust Cleaning Red Deer
          </h1>
          <p className="font-sans text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Blast Off is Red Deer&apos;s premier certified commercial ventilation cleaning and fire protection contractor.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white font-sans text-sm sm:text-base">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-red max-w-none">
            <h2 className="font-heading text-3xl font-bold uppercase text-dark mb-6">
              Commercial Hood &amp; Fire Protection in Red Deer, AB
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              As our primary service hub, Red Deer is where **Blast Off Kitchen Exhaust Cleaning &amp; Fire Protection** houses its main equipment and service trucks. We provide restaurant owners, school cafeterias, hotels, and industrial sites with 24/7 access to certified commercial kitchen maintenance.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our technicians specialize in deep steam cleaning of grease-laden systems, duct scraping, and full safety checks of automated kitchen fire suppression setups. We ensure your business is fully compliant with municipal fire bylaws and NFPA 96 guidelines.
            </p>

            <h3 className="font-heading text-2xl font-bold text-dark mt-8 mb-4">
              Local Services We Provide in Red Deer:
            </h3>
            <ul className="list-disc pl-6 mb-8 space-y-3 text-gray-600">
              <li>
                <strong className="text-dark">Kitchen Exhaust Cleaning Red Deer:</strong> Complete degreasing of grease-laden ventilation systems from canopy hoods up through grease duct shafts to the roof exhaust fan.
              </li>
              <li>
                <strong className="text-dark">Restaurant Hood Cleaning Red Deer:</strong> Scrubbing baffle filters, polishing canopy hoods, and providing grease cup maintenance.
              </li>
              <li>
                <strong className="text-dark">Ansul System Inspection Red Deer:</strong> Semi-annual testing, fusible temperature links replacement, and system recharges for commercial kitchen fire suppression systems.
              </li>
              <li>
                <strong className="text-dark">Fire Extinguisher Service Red Deer:</strong> Annual certification tags, Class K kitchen extinguisher recharges, and hydrostatic pressure testing.
              </li>
            </ul>

            <h3 className="font-heading text-2xl font-bold text-dark mt-8 mb-4">
              Why Red Deer Restaurants Trust Blast Off:
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              We understand that closing your kitchen for maintenance during lunch or dinner hours is not an option. That&apos;s why we schedule our cleanings during your off-hours—primarily at night. We clean to bare metal, apply official fire decals, and provide full, printable compliance logs that satisfy fire marshals and insurance agencies.
            </p>

            <div className="bg-background rounded-2xl border border-gray-150 p-8 text-center mt-12">
              <h4 className="font-heading text-xl font-bold text-dark mb-3">
                Request a Free Quote in Red Deer
              </h4>
              <p className="text-sm text-gray-500 max-w-md mx-auto mb-6 leading-relaxed">
                Contact our local Red Deer team today to receive a custom price estimate or to schedule your next semi-annual inspection.
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
