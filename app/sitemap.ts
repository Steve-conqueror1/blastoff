import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://blastoffkitchenandfireservices.com";

  const routes = [
    "",
    "/services/kitchen-exhaust-cleaning",
    "/services/restaurant-hood-cleaning",
    "/services/fire-suppression-systems",
    "/services/fire-extinguisher-inspection",
    "/services/fire-protection-services",
    "/service-areas/red-deer",
    "/service-areas/calgary",
    "/service-areas/edmonton",
    "/service-areas/lacombe",
    "/service-areas/blackfalds",
    "/service-areas/sylvan-lake",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
