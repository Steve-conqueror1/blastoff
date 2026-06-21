import type { Metadata } from "next";
import BlogPostLayout from "@/components/BlogPostLayout";

const slug = "fire-extinguisher-inspection-checklist";

export const metadata: Metadata = {
  title: "Fire Extinguisher Inspection Checklist | Blast Off",
  description:
    "A comprehensive guide on fire extinguisher inspections, monthly checklists, and annual recharge and certification requirements for commercial facilities.",
  alternates: {
    canonical: `/blog/${slug}`,
  },
};

export default function PostPage() {
  return <BlogPostLayout slug={slug} />;
}
