import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Kitchen Exhaust Cleaning & Fire Protection Specialists",
  description:
    "Learn about Blast Off Kitchen Exhaust Cleaning & Fire Protection. Fully insured, bonded, and certified professionals serving Red Deer, Calgary, and Edmonton.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const pillars = [
    {
      title: "Latest Tech and Tools",
      desc: "At Blast Off, we pride ourselves on being at the forefront of kitchen exhaust cleaning and fire protection technologies. Our teams are equipped with advanced, high-performance hot-water pressure washing systems, custom scraper tools, and diagnostic duct cameras to get the job done quickly and efficiently. We understand that time is money, and we work hard to minimize downtime for your restaurant.",
    },
    {
      title: "Friendly Staff",
      desc: "The staff at Blast Off are friendly, professional, and always willing to help. We go above and beyond to make sure your commercial kitchen is clean, compliant, and looks great. Our technicians are reliable, polite, and always deliver on their promises, treating your workspace with the utmost respect.",
    },
    {
      title: "Knowledgeable Professionals",
      desc: "If you're looking for a reliable and experienced kitchen exhaust cleaning service, Blast Off is the company for you. We offer a full range of services to meet your needs, and our team of knowledgeable professionals is dedicated to providing the highest quality care. We are certified specialists fully trained in NFPA 96 standards and provincial fire codes.",
    },
    {
      title: "Tailored Customer Care",
      desc: "At Blast Off, we take pride in our commitment to customer service. We understand that each client's needs are unique, and we work hard to ensure that all our services are tailored to meet those needs. Whether you operate a single fast-food hood or a complex multi-station institutional kitchen, we provide dedicated support.",
    },
  ];

  return (
    <>
      {/* Hero Header */}
      <section className="bg-dark text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services_hero.png"
            alt="Commercial kitchen safety"
            fill
            className="object-cover opacity-15"
            priority
          />
          <div className="absolute inset-0 bg-dark/80"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-white mb-4">
            About Blast Off
          </h1>
          <p className="font-sans text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Your trusted partner for certified kitchen exhaust duct cleaning and commercial fire safety across Central Alberta.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="font-heading text-3xl font-bold uppercase text-dark mb-6">
                Kitchen Exhaust &amp; Fire Protection Services You Can Trust
              </h2>
              <p className="font-sans text-gray-600 leading-relaxed mb-4">
                If you’re like most business owners, you’re always on the lookout for new and innovative ways to keep your business running smoothly and safely. One way to do this is by outsourcing critical compliance tasks, like kitchen exhaust cleaning and fire safety inspections, to seasoned professionals.
              </p>
              <p className="font-sans text-gray-600 leading-relaxed mb-6">
                At **Blast Off Kitchen Exhaust Cleaning &amp; Fire Protection**, we are fully certified, licensed, and highly experienced. We clean systems from the kitchen hood filters, up through the grease duct shafts, all the way to the exhaust fan on the roof. We ensure everything is polished and compliant with NFPA 96 standards.
              </p>
              
              <ul className="space-y-3 font-sans text-sm text-gray-700 font-semibold mb-8">
                <li className="flex items-center gap-2 text-primary">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>We have the experience and expertise to get the job done right.</span>
                </li>
                <li className="flex items-center gap-2 text-primary">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>We use environmentally friendly products and methods whenever possible.</span>
                </li>
                <li className="flex items-center gap-2 text-primary">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>We’re fully insured and bonded for your complete peace of mind.</span>
                </li>
                <li className="flex items-center gap-2 text-primary">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>We offer a wide range of custom fire safety &amp; cleaning services.</span>
                </li>
                <li className="flex items-center gap-2 text-primary">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>We’re always up for a challenge – no job is too big or too small!</span>
                </li>
              </ul>
            </div>

            <div className="relative h-[450px] w-full rounded-2xl overflow-hidden shadow-xl border border-gray-100">
              <Image
                src="/images/clean.jpg"
                alt="Blast Off technician cleaning commercial exhaust duct"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Pillars Grid */}
          <div className="border-t border-gray-150 pt-16">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-heading text-3xl font-bold uppercase text-dark">
                The Core Pillars of Our Business
              </h2>
              <p className="font-sans text-gray-500 mt-2 text-sm">
                How we deliver exceptional service and absolute compliance for restaurants and facilities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="bg-background rounded-2xl p-8 border border-gray-200/60 shadow-sm hover:shadow-md transition"
                >
                  <h3 className="font-heading text-xl font-bold text-dark mb-4 border-b border-primary/20 pb-2">
                    {pillar.title}
                  </h3>
                  <p className="font-sans text-sm text-gray-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-white text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold uppercase tracking-tight mb-4">
            Protect Your Business &amp; Comply with Fire Regulations
          </h2>
          <p className="font-sans text-base max-w-xl mx-auto mb-8 text-red-100">
            Work with Red Deer&apos;s leading kitchen exhaust cleaning team. We provide full NFPA 96 certifications and Ansul system testing.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3.5 text-base font-bold text-primary shadow-lg hover:bg-gray-100 transition duration-200"
            >
              Request a Free Quote
            </Link>
            <a
              href="tel:780-918-2076"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white bg-transparent px-6 py-3.5 text-base font-bold text-white hover:bg-white/10 transition duration-200"
            >
              Call 780-918-2076
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
