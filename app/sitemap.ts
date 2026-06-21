import { MetadataRoute } from "next";

export const baseUrl = "https://blastoffkitchenandfireservices.com";

/**
 * Single source of truth for the site's URL structure (mirrors the
 * "MUST HAVE PAGES FOR SEO" list in AGENTS.md). Keep this in sync as pages
 * are added — a sitemap should only list URLs that actually resolve (200),
 * so do not add a route here until its page exists.
 */
type RouteConfig = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
};

const routes: RouteConfig[] = [
  { path: "", priority: 1.0, changeFrequency: "weekly" },

  // Core pages
  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/gallery", priority: 0.6, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" },

  // Services
  { path: "/services", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/kitchen-exhaust-cleaning", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/restaurant-hood-cleaning", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/fire-suppression-systems", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/fire-extinguisher-inspection", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/fire-protection-services", priority: 0.8, changeFrequency: "monthly" },

  // Service areas
  { path: "/service-areas", priority: 0.7, changeFrequency: "monthly" },
  { path: "/service-areas/red-deer", priority: 0.8, changeFrequency: "monthly" },
  { path: "/service-areas/calgary", priority: 0.8, changeFrequency: "monthly" },
  { path: "/service-areas/edmonton", priority: 0.8, changeFrequency: "monthly" },
  { path: "/service-areas/lacombe", priority: 0.8, changeFrequency: "monthly" },
  { path: "/service-areas/blackfalds", priority: 0.8, changeFrequency: "monthly" },
  { path: "/service-areas/sylvan-lake", priority: 0.8, changeFrequency: "monthly" },

  // Blog
  { path: "/blog", priority: 0.6, changeFrequency: "weekly" },
  { path: "/blog/how-often-should-restaurant-hoods-be-cleaned", priority: 0.6, changeFrequency: "yearly" },
  { path: "/blog/nfpa-96-hood-cleaning-requirements", priority: 0.6, changeFrequency: "yearly" },
  { path: "/blog/what-is-an-ansul-fire-suppression-system", priority: 0.6, changeFrequency: "yearly" },
  { path: "/blog/fire-extinguisher-inspection-checklist", priority: 0.6, changeFrequency: "yearly" },
  { path: "/blog/why-commercial-kitchen-exhaust-cleaning-is-important", priority: 0.6, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
