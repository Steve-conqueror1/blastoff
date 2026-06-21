import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://blastoffkitchenandfireservices.com"),
  title: {
    default:
      "Blast Off Kitchen Exhaust Cleaning & Fire Protection | Red Deer, Alberta",
    template: "%s | Blast Off Kitchen Exhaust Cleaning",
  },
  description:
    "Commercial kitchen exhaust cleaning, restaurant hood cleaning, fire suppression systems, and fire extinguisher services in Red Deer, Edmonton, Calgary and Central Alberta.",
  keywords: [
    "Kitchen Exhaust Cleaning Red Deer",
    "Restaurant Hood Cleaning Red Deer",
    "Commercial Kitchen Exhaust Cleaning",
    "Range Hood Cleaning Red Deer",
    "NFPA 96 Hood Cleaning",
    "Fire Suppression Services Red Deer",
    "Ansul System Inspection",
    "Fire Extinguisher Inspection Red Deer",
    "Fire Protection Services Red Deer",
    "Commercial Hood Cleaning Alberta",
    "Kitchen Exhaust Cleaning Edmonton",
    "Hood Cleaning Calgary",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Blast Off Kitchen Exhaust Cleaning & Fire Protection",
    description:
      "Trusted commercial kitchen exhaust cleaning and fire protection services in Alberta.",
    url: "https://blastoffkitchenandfireservices.com",
    siteName: "Blast Off Kitchen Exhaust Cleaning & Fire Protection",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blast Off Kitchen Exhaust Cleaning & Fire Protection",
    description:
      "Kitchen exhaust cleaning and fire protection services across Alberta.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <Toaster position="top-right" toastOptions={{ duration: 5000 }} />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
