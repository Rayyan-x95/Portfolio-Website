import type { Metadata } from "next";
import Link from "next/link";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { CommandPalette } from "@/components/ui/CommandPalette";
import { SideScrollbar } from "@/components/ui/SideScrollbar";
import { JsonLd } from "@/components/SEO/JsonLd";
import { PageTransition } from "@/components/ui/PageTransition";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rayyan.ninety5.in"),
  title: {
    default: "Mohammed Rayyan | Designer & Technologist",
    template: "%s | Mohammed Rayyan"
  },
  description: "Designer who codes and Engineer who obsesses over pixels. Bridging the gap between raw performance and cinematic design through AOSP development and premium UI/UX.",
  keywords: ["Mohammed Rayyan", "Creative Technologist", "UI/UX Designer", "ROM Developer", "AOSP Development", "Full-Stack Engineer", "Ninety5 Studio"],
  authors: [{ name: "Mohammed Rayyan" }],
  creator: "Mohammed Rayyan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rayyan.ninety5.in/",
    siteName: "Mohammed Rayyan Portfolio",
    title: "Mohammed Rayyan | Designer & Technologist",
    description: "Bridging the gap between raw performance and cinematic design.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mohammed Rayyan Portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Rayyan | Designer & Technologist",
    description: "Bridging the gap between raw performance and cinematic design.",
    creator: "@rayyan_x95",
    images: ["/og-image.jpg"]
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "./",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Mohammed Rayyan",
    "url": "https://rayyan.ninety5.in",
    "image": "https://github.com/rayyan-x95.png",
    "sameAs": [
      "https://github.com/rayyan-x95",
      "https://linkedin.com/in/rayyan-x95",
      "https://twitter.com/rayyan_x95"
    ],
    "jobTitle": "Creative Technologist",
    "worksFor": {
      "@type": "Organization",
      "name": "Ninety5 Studio"
    },
    "description": "Designer who codes and Engineer who obsesses over pixels. Specializing in AOSP development and premium UI/UX."
  };

  const studioSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Ninety5 Studio",
    "url": "https://ninety5.in",
    "logo": "https://github.com/rayyan-x95.png",
    "image": "https://github.com/rayyan-x95.png",
    "description": "Premium AOSP development and UI/UX design studio.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "13.0827",
      "longitude": "80.2707"
    },
    "founder": {
      "@type": "Person",
      "name": "Mohammed Rayyan"
    },
    "foundingDate": "2024",
    "priceRange": "$$$"
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
    >
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-black text-white antialiased`}>
        <PageTransition />
        <JsonLd data={personSchema} />
        <JsonLd data={studioSchema} />
        <SideScrollbar />
        <SmoothScroll>
          {children}
          <Footer />
          <Navbar />
        </SmoothScroll>
        <CommandPalette />
      </body>
    </html>
  );
}
