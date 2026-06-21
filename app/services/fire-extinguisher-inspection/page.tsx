import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fire Extinguisher Inspection Red Deer | Services & Recharge",
  description:
    "Certified fire extinguisher inspection, servicing, and recharge in Red Deer, Alberta. Class K, ABC dry chemical, carbon dioxide, and certification tags. NFPA 10 compliant.",
  keywords: [
    "Fire Extinguisher Inspection Red Deer",
    "Fire Extinguisher Service Red Deer",
    "Fire Extinguisher Recharge Red Deer",
    "Fire Extinguisher Maintenance Red Deer",
    "Commercial Fire Extinguisher Services Red Deer",
    "Fire Extinguisher Certification Red Deer",
  ],
  alternates: { canonical: "/services/fire-extinguisher-inspection" },
};

export default function FireExtinguisherInspectionPage() {
  return (
    <>
      {/* Service Header */}
      <section className="bg-dark text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/4.avif"
            alt="Handheld fire extinguisher testing"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-dark/85"></div>
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="inline-flex items-center rounded bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
              NFPA 10 Standard
            </span>
            <span className="inline-flex items-center rounded bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
              Certified Recharge Shop
            </span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-white mb-4">
            Fire Extinguisher Inspection Red Deer
          </h1>
          <p className="font-sans text-base sm:text-lg text-gray-300 max-w-3xl leading-relaxed">
            Ensure your business is fully protected and compliant. We provide complete annual physical testing, certifications, recharges, and hydrostatic inspections.
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
                Certified Commercial Fire Extinguisher Maintenance &amp; Certification
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Fire extinguishers are your first line of defense against grease flareups, electrical failures, and wastebasket fires. However, an unmaintained, depressurized, or expired extinguisher is a major liability. Under Canadian Fire Codes and **NFPA 10**, commercial properties must perform regular maintenance on all portable fire extinguishers.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                At **Blast Off Kitchen Exhaust Cleaning &amp; Fire Protection**, we are fully qualified to service and tag dry chemical (ABC), Carbon Dioxide (CO2), and wet chemical (Class K) fire extinguishers.
              </p>

              <h3 className="font-heading text-2xl font-bold text-dark mt-8 mb-4">
                What is Included in Our Annual Inspection:
              </h3>
              <ul className="list-disc pl-6 mb-8 space-y-3 text-gray-600">
                <li>
                  <strong className="text-dark">Physical Check:</strong> We inspect the cylinder for dents, cracks, rust, or leaks.
                </li>
                <li>
                  <strong className="text-dark">Pressure Gauge Analysis:</strong> We verify the pressure needle is in the green zone, indicating the charge is optimal.
                </li>
                <li>
                  <strong className="text-dark">Nozzle and Hose Examination:</strong> We check for dry rot, blockage, or cracks in the hose, horn, and nozzle assembly.
                </li>
                <li>
                  <strong className="text-dark">Weight and Volume Verification:</strong> We weigh the extinguisher to confirm the quantity of dry chemical or liquid agent inside.
                </li>
                <li>
                  <strong className="text-dark">Tamper Seal and Pin:</strong> We replace the plastic pull-tie safety seal and ensure the pull pin moves freely.
                </li>
                <li>
                  <strong className="text-dark">Official Certification Tag:</strong> We record the date of service, type of inspection, and technician credentials on the attached paper tag. This tag is valid for exactly one year.
                </li>
              </ul>

              <h3 className="font-heading text-2xl font-bold text-dark mt-8 mb-4">
                Six-Year Maintenance &amp; Hydrostatic Pressure Testing
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Apart from annual inspections, dry chemical fire extinguishers must undergo complete internal teardowns **every 6 years** to replace seals, dry powder, and components. Furthermore, **every 12 years**, the steel cylinders must undergo hydrostatic pressure testing under water to verify structural strength. We provide all of these advanced services at our Red Deer shop or on-site.
              </p>
            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-4 lg:sticky lg:top-24 bg-background rounded-2xl p-8 border border-gray-200">
              <h4 className="font-heading text-xl font-bold text-dark mb-4">
                Need Extinguisher Tags?
              </h4>
              <p className="font-sans text-sm text-gray-500 mb-6 leading-relaxed">
                Contact Blast Off to schedule annual certifications or to get expired extinguishers recharged.
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
