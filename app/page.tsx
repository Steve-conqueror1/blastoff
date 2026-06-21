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
    ],
    priceRange: "$$",
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <div className=""></div>
    </>
  );
}
