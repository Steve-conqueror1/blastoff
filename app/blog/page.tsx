import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Kitchen Exhaust Cleaning & Fire Safety Tips",
  description:
    "Tips and guides on kitchen exhaust cleaning, NFPA 96 hood cleaning, fire suppression systems and fire extinguisher safety from Blast Off.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      {/* Page Header */}
      <section className="bg-dark text-white py-16 sm:py-20 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-white mb-4">
            Safety &amp; Compliance Blog
          </h1>
          <p className="font-sans text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Read professional insights, NFPA guidelines, and fire protection tips from the team at Blast Off.
          </p>
        </div>
      </section>

      {/* Posts List */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center font-sans text-gray-600">
              No blog posts found. Check your content directory setup.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-150 flex flex-col justify-between group hover:shadow-lg transition duration-200"
                >
                  <div>
                    {/* Cover Image */}
                    <div className="relative h-56 w-full overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition duration-500"
                      />
                    </div>
                    {/* Metadata & Title */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 font-sans text-xs text-gray-400 mb-3">
                        <span>{post.date}</span>
                        <span>&bull;</span>
                        <span>By {post.author}</span>
                      </div>
                      <h3 className="font-heading text-xl font-bold text-dark group-hover:text-primary transition-colors leading-snug">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h3>
                      <p className="font-sans text-sm text-gray-600 mt-3 leading-relaxed line-clamp-3">
                        {post.description}
                      </p>
                    </div>
                  </div>

                    {/* Read More Link */}
                  <div className="p-6 pt-0 mt-auto border-t border-gray-50/50">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="font-sans text-sm font-bold text-primary hover:text-red-700 transition"
                    >
                      Read Article &rarr;
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Quick CTA */}
      <section className="bg-primary py-12 text-white text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 className="font-heading text-2xl font-bold uppercase mb-4">
            Need Expert Kitchen Safety Service?
          </h3>
          <p className="font-sans text-sm max-w-md mx-auto mb-6 text-red-100">
            Our certified technicians provide full NFPA 96 exhaust system degreasing and fire safety tagging.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-bold text-primary shadow hover:bg-gray-100 transition"
          >
            Request a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
