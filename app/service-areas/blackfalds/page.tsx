import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kitchen Exhaust Cleaning Blackfalds | Commercial Hood Cleaning",
  description:
    "Certified commercial kitchen exhaust cleaning and hood cleaning services in Blackfalds, AB. Local, professional grease removal and fire safety tagging.",
  alternates: { canonical: "/service-areas/blackfalds" },
  keywords: [
    "Kitchen Exhaust Cleaning Blackfalds",
    "Commercial Hood Cleaning Blackfalds",
    "Restaurant Hood Cleaning Blackfalds",
    "Ansul System Inspection Blackfalds",
    "Fire Protection Services Blackfalds",
  ],
};

export default function BlackfaldsPage() {
  return (
    <>
      {/* Area Header */}
      <section className="bg-dark text-white py-16 sm:py-20 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-primary font-heading text-base font-bold uppercase tracking-wider">
            Central Service Zone
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-white mt-2 mb-4">
            Kitchen Exhaust Cleaning Blackfalds
          </h1>
          <p className="font-sans text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Blast Off provides Blackfalds commercial dining establishments with certified, professional exhaust cleaning and fire safety compliance.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white font-sans text-sm sm:text-base">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-red max-w-none">
            <h2 className="font-heading text-3xl font-bold uppercase text-dark mb-6">
              Commercial Vent Cleaning &amp; Fire Protection in Blackfalds, AB
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              A clean ventilation system is essential to prevent kitchen grease fires and ensure clean air for your staff and customers. In Blackfalds, **Blast Off Kitchen Exhaust Cleaning &amp; Fire Protection** provides rapid, certified servicing to commercial kitchen setups, including local diners, fast-food outlets, and school cafeterias.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our service crew is based out of nearby Red Deer, allowing us to offer prompt scheduling and fast response times for regular compliance maintenance and emergency recharges.
            </p>

            <h3 className="font-heading text-2xl font-bold text-dark mt-8 mb-4">
              Local Services We Provide in Blackfalds:
            </h3>
            <ul className="list-disc pl-6 mb-8 space-y-3 text-gray-600">
              <li>
                <strong className="text-dark">Kitchen Exhaust Cleaning Blackfalds:</strong> Thorough hot-water pressure wash and scrapings of hoods, interior grease ducts, and roof exhaust fans.
              </li>
              <li>
                <strong className="text-dark">Commercial Hood Cleaning:</strong> Degreasing baffle filters and polishing range canopy steel to restore surfaces to a clean shine.
              </li>
              <li>
                <strong className="text-dark">Ansul fire suppression inspection:</strong> Semi-annual testing, replacing fusible safety triggers, and certifying automatic gas shut-offs.
              </li>
              <li>
                <strong className="text-dark">Fire Extinguisher Services:</strong> Handheld extinguisher physical inspections, recharges, and annual certified compliance tags.
              </li>
            </ul>

            <h3 className="font-heading text-2xl font-bold text-dark mt-8 mb-4">
              Why Partner with Blast Off:
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our services are executed strictly in compliance with NFPA 96 standards. We schedule cleanings during your off-hours (mostly overnight) to prevent disruption to your restaurant. We are fully insured and bonded, providing complete peace of mind.
            </p>

            <div className="bg-background rounded-2xl border border-gray-150 p-8 text-center mt-12">
              <h4 className="font-heading text-xl font-bold text-dark mb-3">
                Request a Free Quote in Blackfalds
              </h4>
              <p className="text-sm text-gray-500 max-w-md mx-auto mb-6 leading-relaxed">
                Contact our local service desk today to receive a free, detailed quote or to schedule your next semi-annual inspection.
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
