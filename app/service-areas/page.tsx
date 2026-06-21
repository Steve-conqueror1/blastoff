import type { Metadata } from "next";
import Link from "next/link";
import MapWrapper from "@/components/MapWrapper";

export const metadata: Metadata = {
  title: "Service Areas | Central Alberta | Blast Off",
  description:
    "Blast Off provides kitchen exhaust cleaning and fire protection across Red Deer, Calgary, Edmonton, Lacombe, Blackfalds, Sylvan Lake and Central Alberta.",
  alternates: { canonical: "/service-areas" },
};

export default function ServiceAreasPage() {
  const cities = [
    { name: "Red Deer", href: "/service-areas/red-deer", desc: "Our main headquarters. Dispatching daily for hood cleaning, grease removal, and fire protection." },
    { name: "Calgary & Area", href: "/service-areas/calgary", desc: "Regular exhaust hood cleaning, duct steaming, and Ansul systems inspections for southern Alberta." },
    { name: "Edmonton & Area", href: "/service-areas/edmonton", desc: "Serving commercial kitchens in the capital region with NFPA 96 grease duct cleans." },
    { name: "Lacombe & Lacombe County", href: "/service-areas/lacombe", desc: "Prompt local commercial kitchen exhaust cleaning and extinguisher recertification." },
    { name: "Blackfalds", href: "/service-areas/blackfalds", desc: "Fast dispatcher services for restaurants, grills, and schools." },
    { name: "Sylvan Lake", href: "/service-areas/sylvan-lake", desc: "Hood degreasing and certified fire suppression link replacement." },
  ];

  const counties = [
    "Lacombe County",
    "Camrose County",
    "Wetaskiwin County",
    "Rocky Mountain House",
  ];

  return (
    <>
      {/* Page Header */}
      <section className="bg-dark text-white py-16 sm:py-20 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-white mb-4">
            Service Areas
          </h1>
          <p className="font-sans text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Blast Off provides certified kitchen exhaust cleaning and comprehensive fire safety inspections throughout Central Alberta.
          </p>
        </div>
      </section>

      {/* Map & List Section */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
            {/* Map Column */}
            <div className="lg:col-span-7">
              <MapWrapper />
            </div>

            {/* List Column */}
            <div className="lg:col-span-5 font-sans">
              <h2 className="font-heading text-3xl font-bold uppercase text-dark mb-6">
                Active Coverage Zones
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                With service trucks dispatched daily, we serve restaurants, diners, schools, hospitals, food processing facilities, and community centers throughout Central Alberta. 
              </p>
              
              <div className="bg-white border border-gray-150 p-6 rounded-2xl shadow-sm">
                <h4 className="font-heading text-lg font-bold text-dark mb-4">Also Serving Surrounding Areas:</h4>
                <ul className="grid grid-cols-2 gap-3 text-sm text-gray-600">
                  {counties.map((county) => (
                    <li key={county} className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                      {county}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-gray-500 mt-6 leading-relaxed">
                  Don&apos;t see your town listed? If you are located between Edmonton and Calgary, we likely cover your area. Contact dispatch at <a href="tel:780-918-2076" className="text-primary font-bold hover:underline">780-918-2076</a> to check our availability.
                </p>
              </div>
            </div>
          </div>

          {/* Cities Grid */}
          <div className="border-t border-gray-200 pt-16">
            <h3 className="font-heading text-2xl font-bold uppercase text-dark mb-8 text-center sm:text-left">
              Select Your Local Area
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cities.map((city) => (
                <div key={city.name} className="bg-white border border-gray-150 rounded-2xl p-6 shadow-sm flex flex-col justify-between group hover:shadow-md hover:border-primary/20 transition">
                  <div>
                    <h4 className="font-heading text-xl font-bold text-dark mb-2 group-hover:text-primary transition">
                      {city.name}
                    </h4>
                    <p className="font-sans text-sm text-gray-500 leading-relaxed">
                      {city.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-50/50">
                    <Link href={city.href} className="font-sans text-sm font-bold text-primary hover:text-red-700 transition">
                      View Local Services &rarr;
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
