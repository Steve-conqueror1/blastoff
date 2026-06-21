import Link from "next/link";
import Image from "next/image";
import MapWrapper from "@/components/MapWrapper";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Blast Off Kitchen Exhaust Cleaning & Fire Protection",
    url: "https://blastoffkitchenandfireservices.com",
    telephone: "780-918-2076",
    email: "rizza@blastoffsafety.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Unit #6, 4980 76 Street",
      addressLocality: "Red Deer",
      addressRegion: "AB",
      postalCode: "T4P 2J8",
      addressCountry: "CA",
    },
    areaServed: [
      "Red Deer",
      "Calgary",
      "Edmonton",
      "Lacombe County",
      "Camrose County",
      "Wetaskiwin County",
      "Rocky Mountain House",
      "Blackfalds",
      "Sylvan Lake",
    ],
    priceRange: "$$",
    image: "https://blastoffkitchenandfireservices.com/logo.png",
  };

  const coreServices = [
    {
      title: "Kitchen Exhaust Cleaning",
      desc: "Complete, deep degreasing of hood systems, horizontal & vertical grease ducts, and roof exhaust fans following NFPA 96 standards.",
      link: "/services/kitchen-exhaust-cleaning",
      image: "/images/1.avif",
    },
    {
      title: "Restaurant Hood Cleaning",
      desc: "Commercial hood baffle filter cleaning, interior hood washing, and shine polishing to guarantee a grease-free, passing grade.",
      link: "/services/restaurant-hood-cleaning",
      image: "/images/2.avif",
    },
    {
      title: "Fire Suppression Systems",
      desc: "Semi-annual inspections, testing, fusible link replacements, and certification for Ansul systems to protect lives and properties.",
      link: "/services/fire-suppression-systems",
      image: "/images/3.avif",
    },
    {
      title: "Fire Extinguishers",
      desc: "Annual inspections, testing, certifications, recharges, and hydrotesting for Class K and standard commercial extinguishers.",
      link: "/services/fire-extinguisher-inspection",
      image: "/images/4.avif",
    },
    {
      title: "Fire Protection Services",
      desc: "Comprehensive fire protection consulting, emergency shutoff testing, and preventative fire risk assessments.",
      link: "/services/fire-protection-services",
      image: "/images/5.avif",
    },
    {
      title: "Commercial Kitchen Cleaning",
      desc: "Hardcore deep scrubbing of kitchen equipment, floors, ceilings, and surfaces to maintain sanitization compliance.",
      link: "/services",
      image: "/images/clean.jpg",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-dark text-white min-h-[600px] flex items-center overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero1.jpg"
            alt="Commercial kitchen cleanup background"
            fill
            className="object-cover opacity-25"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/90 to-transparent"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-3xl">
            {/* Certifications Badges */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-6">
              <span className="inline-flex items-center rounded bg-primary/95 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                NFPA 96 Compliant
              </span>
              <span className="inline-flex items-center rounded bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wider text-dark">
                Fully Insured & Bonded
              </span>
              <span className="inline-flex items-center rounded bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                Certified Technicians
              </span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight leading-none mb-6">
              Certified Kitchen Exhaust <br />
              <span className="text-primary">&amp; Fire Protection Services</span>
            </h1>

            <p className="font-sans text-base sm:text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl">
              Blast Off provides premium, commercial-grade kitchen hood cleaning, grease duct exhaust washing, Ansul fire suppression system inspections, and fire extinguisher certifications in Red Deer, Calgary, Edmonton, and across Central Alberta.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-4 text-base font-bold text-white shadow-lg hover:bg-red-700 transition duration-200"
              >
                Request a Free Quote
              </Link>
              <a
                href="tel:780-918-2076"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white bg-white/10 px-6 py-4 text-base font-bold text-white hover:bg-white/25 transition duration-200"
              >
                Call 780-918-2076
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Bar */}
      <section className="bg-primary py-6 text-white text-center font-heading text-lg font-bold tracking-wider uppercase">
        <div className="mx-auto max-w-7xl px-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex items-center justify-center gap-2">
            <span>&bull;</span> Cleaned to Bare Metal
          </div>
          <div className="flex items-center justify-center gap-2">
            <span>&bull;</span> 100% Satisfaction Guaranteed
          </div>
          <div className="flex items-center justify-center gap-2">
            <span>&bull;</span> Local & Certified Crew
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-dark">
              Our Professional Services
            </h2>
            <p className="font-sans text-gray-600 mt-4 leading-relaxed">
              We offer comprehensive exhaust hood cleaning and fire safety compliance options to keep your commercial kitchen running safely, efficiently, and fully up to fire code.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service) => (
              <div
                key={service.title}
                className="group bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden flex flex-col justify-between hover:shadow-xl transition duration-300"
              >
                <div>
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-500"
                    />
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
                <div className="p-6 pt-0 mt-auto">
                  <Link
                    href={service.link}
                    className="inline-flex items-center font-sans text-sm font-bold text-primary hover:text-red-700 transition"
                  >
                    Learn More &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side text */}
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-dark mb-6">
                Why Choose Blast Off?
              </h2>
              <p className="font-sans text-gray-600 leading-relaxed mb-8">
                As commercial kitchen ventilation and fire safety specialists in Central Alberta, we understand that restaurant owners cannot afford shutdowns or compliance issues. We guarantee quality care and complete peace of mind.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* 1 */}
                <div>
                  <h4 className="font-heading text-lg font-bold text-dark flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
                    Latest Tech &amp; Tools
                  </h4>
                  <p className="font-sans text-xs text-gray-600 mt-2 leading-relaxed">
                    We use premium hot-water pressure washers, dynamic degreasers, and diagnostic tools to clean systems efficiently with minimum downtime.
                  </p>
                </div>
                {/* 2 */}
                <div>
                  <h4 className="font-heading text-lg font-bold text-dark flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
                    Friendly Staff
                  </h4>
                  <p className="font-sans text-xs text-gray-600 mt-2 leading-relaxed">
                    Our crew members are accommodating, highly reliable, and go the extra mile to ensure your site is completely clean, neat, and polished.
                  </p>
                </div>
                {/* 3 */}
                <div>
                  <h4 className="font-heading text-lg font-bold text-dark flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
                    Knowledgeable Crew
                  </h4>
                  <p className="font-sans text-xs text-gray-600 mt-2 leading-relaxed">
                    Our technicians are certified specialists fully trained in NFPA 96 standards, local health safety codes, and Ansul fire suppression mechanics.
                  </p>
                </div>
                {/* 4 */}
                <div>
                  <h4 className="font-heading text-lg font-bold text-dark flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
                    Tailored Customer Care
                  </h4>
                  <p className="font-sans text-xs text-gray-600 mt-2 leading-relaxed">
                    Every commercial kitchen setup is unique. We schedule cleanings around your off-hours to avoid disrupting your daily business.
                  </p>
                </div>
              </div>
            </div>

            {/* Right side image */}
            <div className="relative h-[450px] w-full rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/branded-vans.png"
                alt="Blast Off fleet and equipment in Alberta"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 bg-background border-t border-b border-gray-200/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-dark">
              Our 4-Step Process
            </h2>
            <p className="font-sans text-gray-600 mt-4 leading-relaxed">
              We make compliance and kitchen cleanliness as simple and hassle-free as possible for your operations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Step 1 */}
            <div className="bg-white rounded-xl p-6 border border-gray-150 shadow-sm relative group hover:border-primary transition duration-300">
              <div className="font-heading text-3xl font-black text-primary/25 mb-4 group-hover:text-primary/70 transition">
                01
              </div>
              <h4 className="font-heading text-lg font-bold text-dark mb-2">Get a Quote</h4>
              <p className="font-sans text-sm text-gray-600 leading-relaxed">
                Contact our office by phone or submit the online contact form to receive a detailed, transparent price estimate.
              </p>
            </div>
            {/* Step 2 */}
            <div className="bg-white rounded-xl p-6 border border-gray-150 shadow-sm relative group hover:border-primary transition duration-300">
              <div className="font-heading text-3xl font-black text-primary/25 mb-4 group-hover:text-primary/70 transition">
                02
              </div>
              <h4 className="font-heading text-lg font-bold text-dark mb-2">Schedule Appointment</h4>
              <p className="font-sans text-sm text-gray-600 leading-relaxed">
                We work around your restaurant hours. We&apos;ll book a night or early morning session to avoid interrupting operations.
              </p>
            </div>
            {/* Step 3 */}
            <div className="bg-white rounded-xl p-6 border border-gray-150 shadow-sm relative group hover:border-primary transition duration-300">
              <div className="font-heading text-3xl font-black text-primary/25 mb-4 group-hover:text-primary/70 transition">
                03
              </div>
              <h4 className="font-heading text-lg font-bold text-dark mb-2">On-Site Evaluation</h4>
              <p className="font-sans text-sm text-gray-600 leading-relaxed">
                Before commencing cleaning, our technicians inspect the site, evaluate grease levels, and map out ductwork access points.
              </p>
            </div>
            {/* Step 4 */}
            <div className="bg-white rounded-xl p-6 border border-gray-150 shadow-sm relative group hover:border-primary transition duration-300">
              <div className="font-heading text-3xl font-black text-primary/25 mb-4 group-hover:text-primary/70 transition">
                04
              </div>
              <h4 className="font-heading text-lg font-bold text-dark mb-2">Clean &amp; Enjoy Result</h4>
              <p className="font-sans text-sm text-gray-600 leading-relaxed">
                We deep clean all exhaust chambers, tag the system with certified decals, and leave your kitchen floor spotless.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Info */}
            <div className="lg:col-span-1">
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-dark mb-6">
                Areas We Serve
              </h2>
              <p className="font-sans text-gray-600 leading-relaxed mb-6">
                Based in Red Deer, we dispatch teams daily across Central Alberta to handle marketing-leading restaurant kitchens, healthcare facilities, schools, and industrial food setups.
              </p>
              <h4 className="font-heading text-lg font-bold text-dark mb-3">Service Coverage Includes:</h4>
              <ul className="grid grid-cols-2 gap-2 text-sm text-gray-700 font-sans font-medium">
                <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span>Red Deer</li>
                <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span>Calgary</li>
                <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span>Edmonton</li>
                <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span>Lacombe</li>
                <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span>Blackfalds</li>
                <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span>Sylvan Lake</li>
                <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span>Rocky Mtn House</li>
                <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span>Camrose</li>
              </ul>
              <div className="mt-8">
                <Link
                  href="/service-areas"
                  className="inline-flex items-center font-sans text-sm font-bold text-primary hover:text-red-700 underline"
                >
                  Learn more about service areas &rarr;
                </Link>
              </div>
            </div>

            {/* Leaflet Map */}
            <div className="lg:col-span-2">
              <MapWrapper />
            </div>
          </div>
        </div>
      </section>

      {/* Quote Request Form Section */}
      <section className="py-20 bg-background border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Info columns */}
            <div className="lg:col-span-5">
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-dark mb-6">
                Protect Your Kitchen &amp; Business Today
              </h2>
              <p className="font-sans text-gray-600 leading-relaxed mb-8 text-base">
                Ready to set up your regular semi-annual exhaust cleaning, test an Ansul fire suppression system, or get fire extinguisher tags certified? Send us a quick inquiry and receive a custom estimate.
              </p>

              <div className="space-y-4 font-sans text-sm text-gray-700">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-red-100 text-primary">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-bold text-dark">Office Location</h5>
                    <p className="mt-0.5">Unit #6, 4980 76 Street, Red Deer, AB T4P 2J8</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-red-100 text-primary">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 00.096.307l-.763 1.258a1 1 0 00-.11.758 11.042 11.042 0 005.516 5.516 1 1 0 00.758-.11l1.258-.763a1 1 0 01.307.096l2.2.548A1 1 0 0121 17.653V20a2 2 0 01-2 2h-1C9.716 22 2 14.284 2 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-bold text-dark">Call or Text Dispatch</h5>
                    <p className="mt-0.5"><a href="tel:780-918-2076" className="text-primary font-semibold hover:underline">780-918-2076</a></p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-red-100 text-primary">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-bold text-dark">Email Inquiries</h5>
                    <p className="mt-0.5"><a href="mailto:rizza@blastoffsafety.com" className="text-primary font-semibold hover:underline">rizza@blastoffsafety.com</a></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Component */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
