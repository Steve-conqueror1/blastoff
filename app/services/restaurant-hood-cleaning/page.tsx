import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Restaurant Hood Cleaning Red Deer | Kitchen Hood Cleaning Services",
  description:
    "Professional restaurant hood cleaning in Red Deer. Deep degreasing, filter cleaning, and stainless polishing. Compliance guaranteed for health and fire inspections.",
  keywords: [
    "Restaurant Hood Cleaning Red Deer",
    "Kitchen Hood Cleaning Services Red Deer",
    "Range Hood Cleaning Red Deer",
    "Exhaust Fan Cleaning Red Deer",
    "Commercial Kitchen Hood Cleaning Near Me",
  ],
  alternates: { canonical: "/services/restaurant-hood-cleaning" },
};

export default function RestaurantHoodCleaningPage() {
  return (
    <>
      {/* Service Header */}
      <section className="bg-dark text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/2.avif"
            alt="Restaurant kitchen hood canopy cleaning"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-dark/85"></div>
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="inline-flex items-center rounded bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
              Restaurant Specialty
            </span>
            <span className="inline-flex items-center rounded bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
              Shine Polished
            </span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-white mb-4">
            Restaurant Hood Cleaning Red Deer
          </h1>
          <p className="font-sans text-base sm:text-lg text-gray-300 max-w-3xl leading-relaxed">
            Detailed scrubbing, chemical degreasing, and polishing for commercial range hoods, baffles, and exhaust catchers. Keep your kitchen passing health codes.
          </p>
        </div>
      </section>

      {/* Detail Content */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Main Details */}
            <div className="lg:col-span-8 font-sans">
              <h2 className="font-heading text-3xl font-bold uppercase text-dark mb-6">
                Premium Kitchen Hood Detailing &amp; Degreasing
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                In any restaurant, the hood canopy is the focal point of the line. It accumulates a constant layer of grease, oils, soot, and carbon. If left unchecked, this residue becomes a serious fire hazard and creates breeding grounds for bacteria, odors, and insect pests. It also compromises kitchen ventilation, making work spaces hot and stuffy.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                At **Blast Off Kitchen Exhaust Cleaning &amp; Fire Protection**, we provide complete, deep-scrubbing hood cleaning services designed to meet the rigorous standards of health inspectors, fire marshals, and insurance adjusters.
              </p>

              <h3 className="font-heading text-2xl font-bold text-dark mt-8 mb-4">
                What We Do During A Hood Cleaning Session:
              </h3>
              <ul className="list-disc pl-6 mb-8 space-y-3 text-gray-600">
                <li>
                  <strong className="text-dark">Prep &amp; Covering:</strong> We cover all cooking equipment, prep tables, and flooring with thick plastic sheeting to shield them from spray and runoff.
                </li>
                <li>
                  <strong className="text-dark">Filter Cleaning:</strong> We remove the baffle filters and clean them using hot-water pressure washers and food-safe chemical degreasers.
                </li>
                <li>
                  <strong className="text-dark">Canopy Scraping:</strong> We manually scrape thick grease and baked-on carbon from the interior plenum, corners, and grease cups.
                </li>
                <li>
                  <strong className="text-dark">Steam &amp; Wash:</strong> We apply commercial-grade degreasers and rinse the canopy using high-temperature water, directing the waste into containment buckets.
                </li>
                <li>
                  <strong className="text-dark">Stainless Polish:</strong> We dry the entire interior and exterior of the hood canopy and apply a protective, non-greasy stainless steel polish.
                </li>
                <li>
                  <strong className="text-dark">Site Cleanup:</strong> We remove all plastic, detail the backsplash, mop the kitchen floors, and leave your workspace cleaner than we found it.
                </li>
              </ul>

              <h3 className="font-heading text-2xl font-bold text-dark mt-8 mb-4">
                Maintaining Health &amp; Fire Safety Compliance
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                A clean exhaust hood ensures proper airflow, keeping steam and smoke out of your line. Our service complies fully with NFPA 96 standards. When we finish, we place a certified service sticker on your hood, which fire inspectors check to confirm your kitchen is safe to operate.
              </p>
            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-4 lg:sticky lg:top-24 bg-background rounded-2xl p-8 border border-gray-200">
              <h4 className="font-heading text-xl font-bold text-dark mb-4">
                Request a Hood Cleaning Estimate
              </h4>
              <p className="font-sans text-sm text-gray-500 mb-6 leading-relaxed">
                Need a quick quote or want to schedule a night cleaning? Contact our Red Deer office today.
              </p>
              <div className="space-y-4 font-sans text-sm">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center rounded-lg bg-primary py-3.5 text-sm font-bold text-white shadow hover:bg-red-700 transition text-center"
                >
                  Request a Free Quote
                </Link>
                <a
                  href="tel:780-918-2076"
                  className="w-full inline-flex items-center justify-center rounded-lg border border-dark bg-white py-3.5 text-sm font-bold text-dark hover:bg-gray-50 transition text-center"
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
