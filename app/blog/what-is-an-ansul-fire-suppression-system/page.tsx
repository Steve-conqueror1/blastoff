import type { Metadata } from "next";
import BlogPostLayout from "@/components/BlogPostLayout";

const slug = "what-is-an-ansul-fire-suppression-system";

export const metadata: Metadata = {
  title: "What is an Ansul Fire Suppression System? | Blast Off",
  description:
    "Learn the mechanics behind Ansul commercial kitchen fire suppression systems, and why semi-annual inspections are required by law.",
  alternates: {
    canonical: `/blog/${slug}`,
  },
};

export default function PostPage() {
  return <BlogPostLayout slug={slug} />;
}
