import type { Metadata } from "next";
import BlogPostLayout from "@/components/BlogPostLayout";

const slug = "nfpa-96-hood-cleaning-requirements";

export const metadata: Metadata = {
  title: "NFPA 96 Hood Cleaning Requirements | Blast Off",
  description:
    "Understand the core NFPA 96 standards for commercial kitchen fire safety, grease duct access, and professional exhaust cleaning.",
  alternates: {
    canonical: `/blog/${slug}`,
  },
};

export default function PostPage() {
  return <BlogPostLayout slug={slug} />;
}
