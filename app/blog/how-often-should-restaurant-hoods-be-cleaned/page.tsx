import type { Metadata } from "next";
import BlogPostLayout from "@/components/BlogPostLayout";

const slug = "how-often-should-restaurant-hoods-be-cleaned";

export const metadata: Metadata = {
  title: "How Often Should Restaurant Hoods Be Cleaned?",
  description:
    "How often commercial restaurant hoods should be cleaned, what NFPA 96 requires, and how cleaning frequency depends on your cooking volume.",
  alternates: {
    canonical: `/blog/${slug}`,
  },
};

export default function PostPage() {
  return <BlogPostLayout slug={slug} />;
}
