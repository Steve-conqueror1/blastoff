import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Restaurant Hood Cleaning Lacombe | Exhaust Cleaning Services",
  description:
    "Certified kitchen exhaust cleaning and commercial hood cleaning in Lacombe and Lacombe County. Ansul fire suppression system inspections and fire extinguisher tags.",
  alternates: { canonical: "/service-areas/lacombe" },
  keywords: [
    "Restaurant Hood Cleaning Lacombe",
    "Kitchen Exhaust Cleaning Lacombe",
    "Commercial Hood Cleaning Lacombe",
    "Ansul System Inspection Lacombe",
    "Fire Protection Services Lacombe County",
  ],
};

export default function LacombePage() {
  return (
    <>
      {/* Area Header */}
      <section className="bg-dark text-white py-16 sm:py-20 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-primary font-heading text-base font-bold uppercase tracking-wider">
            Central Service Zone
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-white mt-2 mb-4">
            Restaurant Hood Cleaning Lacombe
          </h1>
          <p className="font-sans text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Blast Off provides commercial kitchens in Lacombe and Lacombe County with certified exhaust cleaning and fire protection services.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white font-sans text-sm sm:text-base">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-red max-w-none">
            <h2 className="font-heading text-3xl font-bold uppercase text-dark mb-6">
              Commercial Vent Cleaning &amp; Fire Protection in Lacombe County
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Commercial kitchens in Lacombe require regular, certified maintenance to prevent serious grease fire hazards and remain fully up to National Fire Code standards. At **Blast Off Kitchen Exhaust Cleaning &amp; Fire Protection**, we help local business owners stay compliant and protect their staff and properties.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our mobile service trucks are stationed in nearby Red Deer, allowing us to provide rapid, convenient service to commercial dining facilities, community halls, golf course kitchens, and institutional facilities in Lacombe and Lacombe County.
            </p>

            <h3 className="font-heading text-2xl font-bold text-dark mt-8 mb-4">
              Services We Provide in Lacombe &amp; Area:
            </h3>
            <ul className="list-disc pl-6 mb-8 space-y-3 text-gray-600">
              <li>
                <strong className="text-dark">Restaurant Hood Cleaning Lacombe:</strong> Deep scrubbing of stainless steel range hoods, grease cup detailing, and baffle filter degreasing.
              </li>
              <li>
                <strong className="text-dark">Kitchen Exhaust Cleaning Lacombe:</strong> Scraping grease-laden systems to bare metal, clearing horizontal and vertical exhaust ducts, and washing roof fans.
              </li>
              <li>
                <strong className="text-dark">Ansul System Inspection Lacombe:</strong> Certified semi-annual inspections, testing automatic gas shut-offs, and replacing fusible links.
              </li>
              <li>
                <strong className="text-dark">Fire Extinguisher Recharge &amp; Inspection:</strong> Providing certified annual tags, inspections, and recharges for commercial Class K and dry chemical cylinders.
              </li>
            </ul>

            <h3 className="font-heading text-2xl font-bold text-dark mt-8 mb-4">
              Local, Compliant, &amp; Insured:
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              All of our cleanings are executed by certified technicians who strictly follow NFPA 96 guidelines. We schedule cleanings around your off-hours (mostly overnight) to prevent disruption to your dining services. Once complete, we tag your system with compliance decals and provide a detailed service log. We are fully insured and bonded.
            </p>

            <div className="bg-background rounded-2xl border border-gray-150 p-8 text-center mt-12">
              <h4 className="font-heading text-xl font-bold text-dark mb-3">
                Request a Free Quote in Lacombe
              </h4>
              <p className="text-sm text-gray-500 max-w-md mx-auto mb-6 leading-relaxed">
                Contact our local office today to receive a detailed quote or to book a certified service session.
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
