import type { Metadata } from "next";
import BlogPostLayout from "@/components/BlogPostLayout";

const slug = "why-commercial-kitchen-exhaust-cleaning-is-important";

export const metadata: Metadata = {
  title: "Why Commercial Kitchen Exhaust Cleaning is Important | Blast Off",
  description:
    "Discover the critical reasons why professional kitchen exhaust and hood cleaning is vital for fire safety, employee health, and business compliance.",
  alternates: {
    canonical: `/blog/${slug}`,
  },
};

export default function PostPage() {
  return <BlogPostLayout slug={slug} />;
}
