import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Before-and-after photos of our kitchen exhaust cleaning, hood cleaning, and fire protection work across Red Deer and Central Alberta.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return <div>Gallery</div>;
}
