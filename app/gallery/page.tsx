"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface GalleryItem {
  src: string;
  title: string;
  category: "exhaust" | "fire" | "equipment" | "vans";
  desc: string;
}

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<"all" | "exhaust" | "fire" | "equipment" | "vans">("all");

  const galleryItems: GalleryItem[] = [
    {
      src: "/images/1.avif",
      title: "Commercial Exhaust Canopy Cleaned",
      category: "exhaust",
      desc: "Complete degreasing of a multi-well exhaust hood, restored to a stainless shine.",
    },
    {
      src: "/images/2.avif",
      title: "Baffle Filter Restoration",
      category: "exhaust",
      desc: "Removal of baked-on grease from stainless steel baffle filters, ensuring free airflow.",
    },
    {
      src: "/images/3.avif",
      title: "Ansul System Nozzle Inspection",
      category: "fire",
      desc: "Verifying fire suppression nozzle orientation and fitting protective rubber caps.",
    },
    {
      src: "/images/4.avif",
      title: "Fire Extinguisher Recertification",
      category: "fire",
      desc: "Annual check and tags applied to a commercial Class K wet chemical extinguisher.",
    },
    {
      src: "/images/5.avif",
      title: "Kitchen Duct Access Panel Installation",
      category: "exhaust",
      desc: "Cleaned vertical grease duct chamber looking through a newly installed access port.",
    },
    {
      src: "/images/6.avif",
      title: "Deep Kitchen Equip Cleaning",
      category: "equipment",
      desc: "Griddle and deep fryer backs scrubbed free of grease buildup.",
    },
    {
      src: "/images/7.avif",
      title: "Exhaust Fan Housing Polished",
      category: "exhaust",
      desc: "Roof exhaust fan housing after thorough scraper and steam-wash treatment.",
    },
    {
      src: "/images/8.avif",
      title: "Certified Safety Compliance Stamp",
      category: "fire",
      desc: "Applying official compliance label to a newly inspected commercial hood system.",
    },
    {
      src: "/images/9.avif",
      title: "Hinge Kit Installation on Roof Fan",
      category: "exhaust",
      desc: "Heavy-duty hinge kit attached to a roof exhaust fan for NFPA 96 compliance.",
    },
    {
      src: "/images/10.avif",
      title: "Deep Fryer Scrub down",
      category: "equipment",
      desc: "Commercial fryers degreased and detailed to meet strict health inspection standards.",
    },
    {
      src: "/images/branded-vans.png",
      title: "Blast Off Fleet & Dispatch Vans",
      category: "vans",
      desc: "Equipped with professional hot-water pressure washers, parked at Red Deer warehouse.",
    },
    {
      src: "/images/clean.jpg",
      title: "Exhaust Duct Steam Cleaning",
      category: "exhaust",
      desc: "Technician applying high-pressure degreaser inside a horizontal grease duct.",
    },
  ];

  const filteredItems =
    activeFilter === "all" ? galleryItems : galleryItems.filter((item) => item.category === activeFilter);

  const filters = [
    { label: "All Photos", value: "all" as const },
    { label: "Kitchen Exhaust & Hoods", value: "exhaust" as const },
    { label: "Fire Safety & Suppression", value: "fire" as const },
    { label: "Equipment Deep Cleaning", value: "equipment" as const },
    { label: "Our Fleet", value: "vans" as const },
  ];

  return (
    <>
      {/* Page Header */}
      <section className="bg-dark text-white py-12 sm:py-16 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-extrabold uppercase tracking-tight text-white mb-2">
            Work Gallery
          </h1>
          <p className="font-sans text-sm sm:text-base text-gray-300 max-w-xl mx-auto leading-relaxed">
            Take a look at actual projects completed by Blast Off. We clean systems down to the bare metal and ensure full compliance.
          </p>
        </div>
      </section>

      {/* Before & After Spotlight */}
      <section className="py-16 bg-white border-b border-gray-250">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold uppercase text-dark">
              Before &amp; After Spotlight
            </h2>
            <p className="font-sans text-sm text-gray-500 mt-2">
              See the difference our professional steam cleaning makes on commercial kitchen grease ducts and hoods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Before */}
            <div className="relative group rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <div className="relative h-72 sm:h-96 w-full">
                <Image
                  src="/images/Hood Vents-before.avif"
                  alt="Hood vent before cleaning"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-primary text-white font-heading font-bold uppercase tracking-wider text-xs px-3 py-1.5 rounded shadow">
                  Before Cleaning
                </div>
              </div>
              <div className="p-4 bg-gray-50">
                <p className="font-sans text-xs text-gray-500">
                  Heavy accumulation of hardened grease in a restaurant exhaust hood plenum. A major fire hazard.
                </p>
              </div>
            </div>

            {/* After */}
            <div className="relative group rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <div className="relative h-72 sm:h-96 w-full">
                <Image
                  src="/images/Hood Vents-after.avif"
                  alt="Hood vent after cleaning"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-green-600 text-white font-heading font-bold uppercase tracking-wider text-xs px-3 py-1.5 rounded shadow">
                  After Cleaning (Restored to Bare Metal)
                </div>
              </div>
              <div className="p-4 bg-gray-50">
                <p className="font-sans text-xs text-gray-500">
                  Cleaned to bare steel, polished, and tagged. Fully compliant with NFPA 96 standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Filter and Photos */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Navigation Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {filters.map((f) => (
              <button
                key={f.value}
                type="button"
                onClick={() => setActiveFilter(f.value)}
                className={`font-sans text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-lg border transition duration-200 ${
                  activeFilter === f.value
                    ? "bg-primary border-primary text-white shadow-sm"
                    : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-150 group hover:shadow-lg transition"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-5 font-sans">
                  <span className="inline-block bg-red-50 text-primary text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded mb-2">
                    {item.category === "exhaust"
                      ? "Exhaust & Hoods"
                      : item.category === "fire"
                      ? "Fire Safety"
                      : item.category === "equipment"
                      ? "Equipment Cleaning"
                      : "Company Vans"}
                  </span>
                  <h4 className="text-base font-bold text-dark mb-1.5">{item.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="bg-primary py-12 text-white text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 className="font-heading text-2xl font-bold uppercase mb-4">
            Need Your Kitchen Cleaned and Inspected?
          </h3>
          <p className="font-sans text-sm max-w-md mx-auto mb-6 text-red-100">
            Submit a request and let our certified technicians restore safety and compliance to your food facility.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-bold text-primary shadow hover:bg-gray-100 transition duration-200"
          >
            Request a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
