import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kitchen Exhaust Cleaning Red Deer | NFPA 96 Hood Cleaning",
  description:
    "Professional kitchen exhaust cleaning in Red Deer. Restaurant hood cleaning, grease duct cleaning, exhaust fan cleaning and NFPA 96 compliant services.",
  keywords: [
    "Kitchen Exhaust Cleaning Red Deer",
    "Commercial Kitchen Exhaust Cleaning Red Deer",
    "Restaurant Hood Cleaning Red Deer",
    "Grease Duct Cleaning Red Deer",
    "NFPA 96 Hood Cleaning Red Deer",
  ],
  alternates: { canonical: "/services/kitchen-exhaust-cleaning" },
};

export default function KitchenExhaustCleaningPage() {
  return (
    <>
      {/* Service Header */}
      <section className="bg-dark text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/1.avif"
            alt="Kitchen exhaust hood cleaning service"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-dark/85"></div>
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="inline-flex items-center rounded bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
              NFPA 96 Standard
            </span>
            <span className="inline-flex items-center rounded bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
              Cleaned to Bare Metal
            </span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-white mb-4">
            Kitchen Exhaust Cleaning Red Deer
          </h1>
          <p className="font-sans text-base sm:text-lg text-gray-300 max-w-3xl leading-relaxed">
            Professional commercial exhaust system cleaning from the hood filters to the roof fan. Guaranteed compliance, maximum exhaust efficiency, and lower fire risks.
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
                NFPA 96 Compliant Exhaust System Cleaning
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Commercial kitchens operating in Red Deer, Calgary, and Edmonton produce heavy volumes of vaporized grease, smoke, and heat. The kitchen exhaust system extracts this hazardous mixture. Over time, grease accumulates along the interior of the ventilation canopy, horizontal ducts, vertical shafts, and the roof exhaust fan.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6 font-semibold">
                Under NFPA 96 (the national standard for ventilation control and fire protection of commercial cooking operations), this grease buildup must be professionally cleaned to bare metal by certified technicians.
              </p>

              <h3 className="font-heading text-2xl font-bold text-dark mt-8 mb-4">
                What Our Complete Exhaust Cleaning Process Includes:
              </h3>
              <ul className="list-disc pl-6 mb-8 space-y-3 text-gray-600">
                <li>
                  <strong className="text-dark">Exhaust Hood Canopy:</strong> Scraping, hot-water pressure washing, and chemical cleaning of the interior hood plenum and outer surfaces. We finish with a stainless steel polish to leave your hood looking like new.
                </li>
                <li>
                  <strong className="text-dark">Baffle Filters:</strong> Cleaning and degreasing of grease filters to ensure optimal airflow and draft capacity.
                </li>
                <li>
                  <strong className="text-dark">Horizontal &amp; Vertical Grease Ducts:</strong> We clean the entire duct run, scraping off grease deposits and steam-washing internal channels.
                </li>
                <li>
                  <strong className="text-dark">Exhaust Fan Housing &amp; Blades:</strong> Scraping fan blades and cleaning the roof-mounted exhaust housing, ensuring the motor operates smoothly and remains balanced.
                </li>
                <li>
                  <strong className="text-dark">Grease Containment:</strong> Inspecting and emptying the grease recovery system on the roof to prevent grease runoff from damaging your roofing membrane.
                </li>
                <li>
                  <strong className="text-dark">Compliance Tagging:</strong> Providing standard compliance decals showing the date of service, next inspection date, and technician details for the fire marshal.
                </li>
              </ul>

              <h3 className="font-heading text-2xl font-bold text-dark mt-8 mb-4">
                Duct Access Doors &amp; Hinge Kit Installations
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Often, grease ductwork changes direction or runs horizontally for long distances, making it impossible to clean without physical access. We install certified grease-tight access doors where necessary to ensure every inch of the system is cleaned. We also install heavy-duty roof fan hinge kits to protect the fan wiring and prevent physical damage during maintenance.
              </p>
            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-4 lg:sticky lg:top-24 bg-background rounded-2xl p-8 border border-gray-200">
              <h4 className="font-heading text-xl font-bold text-dark mb-4">
                Request an Exhaust Cleaning Quote
              </h4>
              <p className="font-sans text-sm text-gray-500 mb-6 leading-relaxed">
                Ensure your kitchen is safe and fully compliant. Contact Blast Off to schedule a certified cleaning.
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
              <hr className="my-6 border-gray-200" />
              <div className="font-sans text-xs text-gray-500 space-y-2">
                <p>&bull; Fully insured and bonded</p>
                <p>&bull; certified NFPA 96 technicians</p>
                <p>&bull; 24/7 night cleanings scheduled around restaurant hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
