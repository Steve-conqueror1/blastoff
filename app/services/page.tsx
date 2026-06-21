import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Commercial Kitchen Services & Fire Safety Solutions | Blast Off",
  description:
    "Explore our commercial kitchen services in Alberta. Certified hood cleaning, exhaust grease duct steaming, fire suppression testing, and extinguisher tag certifications.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  const serviceList = [
    {
      title: "Kitchen Exhaust Cleaning",
      desc: "Complete steam cleaning and scraping of exhaust vents, grease ducts, and roof fans to achieve full NFPA 96 compliance. We remove all grease down to bare steel.",
      href: "/services/kitchen-exhaust-cleaning",
      image: "/images/1.avif",
      badge: "Compliance Essential",
    },
    {
      title: "Restaurant Hood Cleaning",
      desc: "Deep scraping, washing, and detailing of range canopy interiors and grease baffle filters. We restore stainless steel surfaces to a mirror-like shine.",
      href: "/services/restaurant-hood-cleaning",
      image: "/images/2.avif",
      badge: "Top Requested",
    },
    {
      title: "Fire Suppression Systems",
      desc: "Certified semi-annual maintenance, inspections, fusible link replacement, and tagging for commercial kitchen Ansul safety systems.",
      href: "/services/fire-suppression-systems",
      image: "/images/3.avif",
      badge: "Safety Critical",
    },
    {
      title: "Fire Extinguisher Inspection & Recharge",
      desc: "Ensure your facility is protected. We provide annual physical certifications, dry chemical recharges, and hydrostatic pressure testing.",
      href: "/services/fire-extinguisher-inspection",
      image: "/images/4.avif",
      badge: "Mandatory tags",
    },
    {
      title: "Fire Protection Services",
      desc: "Comprehensive testing of automatic fuel shutoffs, electrical integrations, alarm links, and commercial exhaust safety protocols.",
      href: "/services/fire-protection-services",
      image: "/images/5.avif",
      badge: "Full Compliance",
    },
    {
      title: "Commercial Kitchen Cleaning",
      desc: "Scrubbing of deep fryers, stovetops, griddles, prep tables, tile floors, and ceilings. Keep your kitchen ready for health inspections.",
      href: "/contact",
      image: "/images/clean.jpg",
      badge: "Deep Clean",
    },
  ];

  return (
    <>
      {/* Page Header */}
      <section className="bg-dark text-white py-16 sm:py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services_hero.png"
            alt="Services overview"
            fill
            className="object-cover opacity-15"
            priority
          />
          <div className="absolute inset-0 bg-dark/80"></div>
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-white mb-4">
            Our Services
          </h1>
          <p className="font-sans text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Professional kitchen exhaust cleaning and comprehensive fire protection services that guarantee compliance and safety.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background animate-fade-in">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {serviceList.map((service) => (
              <div
                key={service.title}
                className="group bg-white rounded-2xl shadow-md border border-gray-150 overflow-hidden flex flex-col justify-between hover:shadow-xl hover:border-primary/20 transition duration-300"
              >
                <div>
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-dark/90 text-white font-sans font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded shadow">
                      {service.badge}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-bold text-dark group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="font-sans text-sm text-gray-600 mt-3 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0 mt-auto flex items-center justify-between border-t border-gray-50/50">
                  <Link
                    href={service.href}
                    className="inline-flex items-center font-sans text-sm font-bold text-primary hover:text-red-700 transition"
                  >
                    Details &amp; Compliance &rarr;
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded bg-gray-100 hover:bg-primary hover:text-white transition px-3.5 py-1.5 text-xs font-bold text-dark"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust factors callout */}
      <section className="bg-white py-16 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-dark text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold uppercase text-white mb-4">
                  Compliant Ventilation systems protect your staff &amp; bottom line
                </h3>
                <p className="font-sans text-sm text-gray-300 leading-relaxed max-w-3xl">
                  Did you know that health inspectors and fire marshals check your exhaust duct stickers? We provide fully tagged solutions that meet local fire codes and NFPA 96 benchmarks. Protect your restaurant and ensure insurance coverage is maintained.
                </p>
              </div>
              <div className="lg:col-span-4 lg:text-right">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3.5 text-base font-bold text-white shadow-lg hover:bg-red-700 transition"
                >
                  Request a Free Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
