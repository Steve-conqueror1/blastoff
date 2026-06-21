import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fire Protection Services Red Deer | Commercial Fire Protection",
  description:
    "Comprehensive fire protection services in Red Deer and Central Alberta. Inspections, code compliance audits, gas shut-off testing, and safety consulting.",
  keywords: [
    "Fire Protection Services Red Deer",
    "Fire Protection Companies Red Deer",
    "Fire Safety Services Red Deer",
    "Fire Protection Services Alberta",
  ],
  alternates: { canonical: "/services/fire-protection-services" },
};

export default function FireProtectionServicesPage() {
  return (
    <>
      {/* Service Header */}
      <section className="bg-dark text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/5.avif"
            alt="Commercial building fire safety testing"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-dark/85"></div>
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="inline-flex items-center rounded bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
              Full Protection
            </span>
            <span className="inline-flex items-center rounded bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
              Compliance Audits
            </span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-white mb-4">
            Fire Protection Services Red Deer
          </h1>
          <p className="font-sans text-base sm:text-lg text-gray-300 max-w-3xl leading-relaxed">
            Ensure your business meets municipal fire bylaws and National Fire Codes. Complete inspections, consulting, and system certifications.
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
                All-In-One Commercial Fire Protection &amp; Compliance Solutions
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Every business owner in Alberta has a legal obligation to provide a safe working environment and maintain fire safety systems in accordance with local and provincial regulations. Code violations can result in significant fines, business shutdowns, or the denial of insurance coverage in the event of a fire.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                At **Blast Off Kitchen Exhaust Cleaning &amp; Fire Protection**, we work directly with restaurant owners, property management companies, schools, and health facilities to ensure their physical spaces are compliant and secure. We evaluate fire hazards and verify that active protection components operate correctly.
              </p>

              <h3 className="font-heading text-2xl font-bold text-dark mt-8 mb-4">
                What Our Comprehensive Fire Protection Services Cover:
              </h3>
              <ul className="list-disc pl-6 mb-8 space-y-3 text-gray-600">
                <li>
                  <strong className="text-dark">Kitchen Fire Audits:</strong> Complete physical reviews of range hoods, fire suppression cylinders, exhaust fans, and cooking appliances to ensure full compliance with NFPA 96 and local municipal bylaws.
                </li>
                <li>
                  <strong className="text-dark">Emergency Shut-Off System Testing:</strong> Testing mechanical gas valves and electrical power trips to guarantee all fuel and electricity sources are automatically cut off the moment a fire suppression system triggers.
                </li>
                <li>
                  <strong className="text-dark">Fusible Link Inspections:</strong> Regularly evaluating and replacing safety thermal triggers in hoods and fire doors to ensure correct deployment temperatures.
                </li>
                <li>
                  <strong className="text-dark">Safety Training:</strong> Educating your kitchen staff on how to use Class K wet chemical extinguishers, pull emergency manual release triggers, and react to commercial kitchen fires.
                </li>
                <li>
                  <strong className="text-dark">Certified compliance reports:</strong> Drafting standard certification logs, testing sheets, and compliance decals for local fire marshals and insurance underwriters.
                </li>
              </ul>

              <h3 className="font-heading text-2xl font-bold text-dark mt-8 mb-4">
                Why Work with Blast Off?
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Rather than coordinating with separate kitchen cleaning companies and fire safety inspectors, Blast Off provides an integrated solution. We handle your grease duct steam wash, certified Ansul tests, and fire extinguisher tagging in one seamless visit, saving you money and minimizing downtime.
              </p>
            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-4 lg:sticky lg:top-24 bg-background rounded-2xl p-8 border border-gray-200">
              <h4 className="font-heading text-xl font-bold text-dark mb-4">
                Schedule a Compliance Audit
              </h4>
              <p className="font-sans text-sm text-gray-500 mb-6 leading-relaxed">
                Ensure your commercial property is safe. Contact Blast Off to schedule fire protection services in Alberta.
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
