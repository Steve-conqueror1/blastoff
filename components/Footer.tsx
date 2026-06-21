import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    {
      name: "Kitchen Exhaust Cleaning",
      href: "/services/kitchen-exhaust-cleaning",
    },
    {
      name: "Restaurant Hood Cleaning",
      href: "/services/restaurant-hood-cleaning",
    },
    {
      name: "Fire Suppression Systems",
      href: "/services/fire-suppression-systems",
    },
    {
      name: "Fire Extinguisher Inspection",
      href: "/services/fire-extinguisher-inspection",
    },
    {
      name: "Fire Protection Services",
      href: "/services/fire-protection-services",
    },
  ];

  const serviceAreas = [
    { name: "Red Deer & Area", href: "/service-areas/red-deer" },
    { name: "Calgary & Area", href: "/service-areas/calgary" },
    { name: "Edmonton & Area", href: "/service-areas/edmonton" },
    { name: "Lacombe County", href: "/service-areas/lacombe" },
    { name: "Blackfalds", href: "/service-areas/blackfalds" },
    { name: "Sylvan Lake", href: "/service-areas/sylvan-lake" },
  ];

  return (
    <footer className="bg-dark text-gray-400 font-sans border-t border-gray-800">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="Blast Off Logo"
                width={240}
                height={80}
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-sm leading-relaxed mt-2">
              Alberta&apos;s trusted professionals for certified kitchen exhaust
              hood cleaning, grease duct degreasing, Ansul systems maintenance,
              and fire extinguisher inspection. Fully insured and bonded.
            </p>
            <div className="flex flex-col gap-2 mt-2">
              <a
                href="tel:780-918-2076"
                className="text-sm font-bold text-white hover:text-primary transition-colors flex items-center gap-2"
              >
                Phone: 780-918-2076
              </a>
              <a
                href="mailto:rizza@blastoffsafety.com"
                className="text-sm text-gray-300 hover:text-primary transition-colors break-words"
              >
                Email: rizza@blastoffsafety.com
              </a>
              <span className="text-sm text-gray-300">
                Address: Unit #6, 4980 76 Street, Red Deer, AB T4P 2J8
              </span>
            </div>
          </div>

          {/* Quick Services Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-white tracking-wider uppercase mb-4">
              Our Services
            </h3>
            <ul className="space-y-2 text-sm">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="hover:text-primary transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-white tracking-wider uppercase mb-4">
              Service Areas
            </h3>
            <ul className="space-y-2 text-sm">
              {serviceAreas.map((area) => (
                <li key={area.name}>
                  <Link
                    href={area.href}
                    className="hover:text-primary transition-colors"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/service-areas"
                  className="text-accent hover:text-white transition-colors font-medium"
                >
                  View All Service Areas &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Business Hours & Trust Info */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-white tracking-wider uppercase mb-4">
              Trust & Compliance
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <span className="block font-bold text-white">
                  NFPA 96 Standards Compliant
                </span>
                Our cleanings meet or exceed all NFPA 96 ventilation and fire
                protection regulations.
              </li>
              <li>
                <span className="block font-bold text-white">
                  Fully Insured & Bonded
                </span>
                Completely covered for your peace of mind and protection.
              </li>
              <li>
                <span className="block font-bold text-white">
                  Emergency Services Available
                </span>
                Available round-the-clock for critical issues and safety
                inspections.
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; {currentYear} Blast Off Kitchen Exhaust Cleaning & Fire
            Protection. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 font-medium">
            Website by{" "}
            <a
              href="mailto:contact@opillis.ca"
              className="text-gray-400 hover:text-primary transition-colors underline"
            >
              PrairieWeb &mdash; contact@opillis.ca
            </a>
            . Need a website or web app? Get in touch.
          </p>
        </div>
      </div>
    </footer>
  );
}
