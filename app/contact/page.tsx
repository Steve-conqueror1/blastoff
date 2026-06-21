import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Request a Free Quote | Blast Off Kitchen Exhaust",
  description:
    "Contact Blast Off Kitchen Exhaust Cleaning & Fire Protection. Located in Red Deer, AB. Call 780-918-2076 or fill out our online quote form.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-dark text-white py-12 sm:py-16 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-extrabold uppercase tracking-tight text-white mb-2">
            Contact Blast Off
          </h1>
          <p className="font-sans text-sm sm:text-base text-gray-300 max-w-xl mx-auto leading-relaxed">
            Get in touch with our team for certified hood cleaning, fire suppression systems, and extinguisher services in Red Deer and Central Alberta.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Details Column */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold uppercase text-dark mb-4">
                We&apos;re Ready to Assist You
              </h2>
              <p className="font-sans text-sm text-gray-600 leading-relaxed mb-8">
                Whether you need a one-time deep cleaning of your commercial range hood, a semi-annual inspection of your kitchen Ansul fire suppression system, or custom fireprotection consulting, our experienced crew is here to help.
              </p>

              <div className="space-y-6 font-sans text-sm text-gray-700">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-red-100 text-primary">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-dark text-base">Office Address</h4>
                    <p className="mt-1 text-gray-600">Unit #6, 4980 76 Street<br />Red Deer, AB T4P 2J8</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-red-100 text-primary">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 00.096.307l-.763 1.258a1 1 0 00-.11.758 11.042 11.042 0 005.516 5.516 1 1 0 00.758-.11l1.258-.763a1 1 0 01.307.096l2.2.548A1 1 0 0121 17.653V20a2 2 0 01-2 2h-1C9.716 22 2 14.284 2 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-dark text-base">Call or Text Dispatch</h4>
                    <p className="mt-1"><a href="tel:780-918-2076" className="text-primary font-semibold hover:underline">780-918-2076</a></p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-red-100 text-primary">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-dark text-base">Email Inquiries</h4>
                    <p className="mt-1"><a href="mailto:rizza@blastoffsafety.com" className="text-primary font-semibold hover:underline">rizza@blastoffsafety.com</a></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
