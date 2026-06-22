import { getPostBySlug } from "@/lib/blog";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function BlogPostLayout({ slug }: { slug: string }) {
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Inject Article JSON-LD schema for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: `https://www.blastoffkitchenandfireservices.com${post.image}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "Blast Off Kitchen Exhaust Cleaning & Fire Protection",
      url: "https://www.blastoffkitchenandfireservices.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Blast Off Kitchen Exhaust Cleaning & Fire Protection",
      logo: {
        "@type": "ImageObject",
        url: "https://www.blastoffkitchenandfireservices.com/logo.png",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <article className="py-16 bg-white font-sans text-sm sm:text-base">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <div className="mb-8">
            <Link href="/blog" className="text-primary font-bold hover:text-red-700 transition flex items-center gap-1.5">
              &larr; Back to Safety Blog
            </Link>
          </div>

          {/* Heading */}
          <header className="mb-8">
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-dark mb-4 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-3 text-xs text-gray-500">
              <span>Published: <strong>{post.date}</strong></span>
              <span>&bull;</span>
              <span>By: <strong>{post.author}</strong></span>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative h-64 sm:h-[400px] w-full rounded-2xl overflow-hidden shadow-md mb-10 border border-gray-100">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Markdown Content */}
          <div
            className="prose prose-red max-w-none mb-16"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />

          {/* Article Footer CTA */}
          <div className="bg-background rounded-2xl border border-gray-150 p-8 text-center">
            <h3 className="font-heading text-xl font-bold text-dark mb-3">
              Need Help with Commercial Fire &amp; Safety Regulations?
            </h3>
            <p className="text-gray-500 max-w-md mx-auto mb-6 leading-relaxed text-sm">
              Our certified technicians are trained to handle NFPA 96 exhaust system wash-downs and Ansul fire suppression audits.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-bold text-white shadow hover:bg-red-700 transition"
              >
                Request a Free Quote
              </Link>
              <a
                href="tel:780-918-2076"
                className="inline-flex items-center justify-center rounded-lg border border-dark bg-white px-6 py-3 text-sm font-bold text-dark hover:bg-gray-50 transition"
              >
                Call 780-918-2076
              </a>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
