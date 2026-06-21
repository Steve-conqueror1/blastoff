import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fire Suppression Services Sylvan Lake | Kitchen Exhaust Cleaning",
  description:
    "Certified commercial fire suppression system inspections and kitchen exhaust hood cleaning services in Sylvan Lake, AB. NFPA compliant and insured.",
  alternates: { canonical: "/service-areas/sylvan-lake" },
  keywords: [
    "Fire Suppression Services Sylvan Lake",
    "Kitchen Exhaust Cleaning Sylvan Lake",
    "Commercial Hood Cleaning Sylvan Lake",
    "Ansul System Inspection Sylvan Lake",
    "Fire Protection Services Sylvan Lake",
  ],
};

export default function SylvanLakePage() {
  return (
    <>
      {/* Area Header */}
      <section className="bg-dark text-white py-16 sm:py-20 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-primary font-heading text-base font-bold uppercase tracking-wider">
            Central Service Zone
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-white mt-2 mb-4">
            Fire Suppression Services Sylvan Lake
          </h1>
          <p className="font-sans text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Blast Off provides Sylvan Lake businesses with professional kitchen exhaust cleaning and certified fire protection maintenance.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white font-sans text-sm sm:text-base">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-red max-w-none">
            <h2 className="font-heading text-3xl font-bold uppercase text-dark mb-6">
              Commercial Vent Cleaning &amp; Fire Protection in Sylvan Lake
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Sylvan Lake is a busy tourist hub, especially during the summer. Restaurants, bars, hotels, and concession setups deal with high-volume cooking demands that lead to rapid grease accumulation in ventilation systems. At **Blast Off Kitchen Exhaust Cleaning &amp; Fire Protection**, we provide complete, professional cleaning and inspections to keep your kitchen compliant and safe.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our mobile crews are based out of nearby Red Deer, allowing us to provide rapid scheduling and fast dispatch to Sylvan Lake for regular compliance inspections and emergency recharges.
            </p>

            <h3 className="font-heading text-2xl font-bold text-dark mt-8 mb-4">
              Our Services in Sylvan Lake:
            </h3>
            <ul className="list-disc pl-6 mb-8 space-y-3 text-gray-600">
              <li>
                <strong className="text-dark">Fire Suppression Services Sylvan Lake:</strong> Certified semi-annual Ansul inspections, testing automatic gas shut-off valves, and replacing fusible links.
              </li>
              <li>
                <strong className="text-dark">Kitchen Exhaust Cleaning Sylvan Lake:</strong> High-pressure steam washing and chemical degreasing of interior canopy walls, exhaust registers, and grease baffle filters.
              </li>
              <li>
                <strong className="text-dark">Grease Duct Scraping &amp; Steaming:</strong> Detailed scraping of horizontal and vertical grease ducts to prevent combustible residue buildup.
              </li>
              <li>
                <strong className="text-dark">Fire Extinguisher Service:</strong> Portable extinguisher annual physical checks, recharge servicing, and Class K kitchen certifications.
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
                Request a Free Quote in Sylvan Lake
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
