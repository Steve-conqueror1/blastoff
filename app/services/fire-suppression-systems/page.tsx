import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fire Suppression System Services Red Deer | Ansul Inspection",
  description:
    "Commercial kitchen fire suppression system services in Red Deer. Semi-annual Ansul inspections, fusible link replacement, and system testing. NFPA 17A certified.",
  keywords: [
    "Fire Suppression System Services Red Deer",
    "Kitchen Fire Suppression Inspection Red Deer",
    "Fire Suppression System Maintenance Red Deer",
    "Restaurant Fire Suppression Services Red Deer",
    "Ansul System Inspection Red Deer",
  ],
  alternates: { canonical: "/services/fire-suppression-systems" },
};

export default function FireSuppressionSystemsPage() {
  return (
    <>
      {/* Service Header */}
      <section className="bg-dark text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/3.avif"
            alt="Commercial kitchen Ansul fire suppression system"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-dark/85"></div>
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="inline-flex items-center rounded bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
              Ansul Certified
            </span>
            <span className="inline-flex items-center rounded bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
              NFPA 17A Standards
            </span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-white mb-4">
            Fire Suppression System Services Red Deer
          </h1>
          <p className="font-sans text-base sm:text-lg text-gray-300 max-w-3xl leading-relaxed">
            Protect your staff and property with certified semi-annual inspections, testing, maintenance, and tagging for commercial kitchen fire suppression systems.
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
                Certified Ansul Fire Suppression Inspections &amp; Maintenance
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Commercial kitchens operate at extremely high temperatures and deal with large quantities of highly flammable grease. If a fire starts on a griddle or in a deep fryer, standard water sprinklers can spread the fire, leading to a catastrophic building loss.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                For this reason, commercial kitchens are legally required to have a dedicated **wet chemical fire suppression system** (often referred to as an **Ansul System**). Under National Fire Codes and **NFPA 17A**, these systems must be professionally inspected, tested, and certified **every 6 months (semi-annually)**.
              </p>

              <h3 className="font-heading text-2xl font-bold text-dark mt-8 mb-4">
                Our Semi-Annual Fire Suppression Inspection Checklist:
              </h3>
              <ul className="list-disc pl-6 mb-8 space-y-3 text-gray-600">
                <li>
                  <strong className="text-dark">Fusible Link Replacement:</strong> We replace all fusible temperature links in the hood canopy (a mandatory requirement every 6 months to prevent link fatigue or grease corrosion failures).
                </li>
                <li>
                  <strong className="text-dark">Nozzle Inspection:</strong> We verify all discharge nozzles are aimed correctly at appliances and clean or replace protective rubber blow-off caps.
                </li>
                <li>
                  <strong className="text-dark">Cylinder &amp; Cartridge Check:</strong> We inspect the pressure gauges and weigh the gas cartridges to ensure the propellant is fully charged.
                </li>
                <li>
                  <strong className="text-dark">Manual Pull Station:</strong> We test the mechanical pull trigger to ensure staff can activate the system instantly in an emergency.
                </li>
                <li>
                  <strong className="text-dark">Gas Shut-Off Valve Testing:</strong> We verify that the automatic mechanical or electrical gas shut-off valve trips immediately upon system activation, cutting fuel to all burners.
                </li>
                <li>
                  <strong className="text-dark">Compliance Tagging:</strong> We attach official fire protection inspection tags and provide a detailed inspection report for your records and the local fire marshal.
                </li>
              </ul>

              <h3 className="font-heading text-2xl font-bold text-dark mt-8 mb-4">
                Emergency System Repair and Recharges
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                In the event of a kitchen fire or accidental system discharge, your kitchen must stop operating immediately. We provide rapid emergency recharge services, refilling the chemical cylinders, replacing fusible links, resetting gas valves, and testing the system so you can safely reopen for business with minimum downtime.
              </p>
            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-4 lg:sticky lg:top-24 bg-background rounded-2xl p-8 border border-gray-200">
              <h4 className="font-heading text-xl font-bold text-dark mb-4">
                Schedule a 6-Month Inspection
              </h4>
              <p className="font-sans text-sm text-gray-500 mb-6 leading-relaxed">
                Is your Ansul system tag expired or expiring? Contact us to schedule a certified inspection in Red Deer.
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
