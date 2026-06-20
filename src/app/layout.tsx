import type { Metadata } from "next";
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
    default: "Mohammed Rayyan | Creative Technologist, AOSP Developer & Designer",
    template: "%s | Mohammed Rayyan"
  },
  description: "Creative Technologist, ROM/AOSP Developer & UI/UX Designer who bridges the gap between raw systems performance and cinematic interface design. Lead at Ninety5 Studio.",
  keywords: [
    "Mohammed Rayyan",
    "Rayyan x95",
    "Creative Technologist",
    "AOSP Developer",
    "ROM Developer Chennai",
    "Android Systems Architect",
    "UI/UX Designer and Engineer",
    "Ninety5 Studio",
    "Next.js Developer Portfolio",
    "Full-Stack Engineer Portfolio",
    "Fluid Interfaces Design",
    "Jetpack Compose",
    "GSAP Web Animations"
  ],
  authors: [{ name: "Mohammed Rayyan", url: "https://rayyan.ninety5.in" }],
  creator: "Mohammed Rayyan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rayyan.ninety5.in/",
    siteName: "Mohammed Rayyan Portfolio",
    title: "Mohammed Rayyan | Creative Technologist, AOSP Developer & Designer",
    description: "Systems developer & UI/UX designer bridging the gap between raw performance and cinematic web experiences.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mohammed Rayyan - Creative Technologist & ROM Developer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Rayyan | Creative Technologist, AOSP Developer & Designer",
    description: "Systems developer & UI/UX designer bridging the gap between raw performance and cinematic web experiences.",
    creator: "@rayyan_x95",
    images: ["/og-image.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://rayyan.ninety5.in",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || "",
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
    "image": "https://rayyan.ninety5.in/profile.png",
    "sameAs": [
      "https://github.com/rayyan-x95",
      "https://www.linkedin.com/in/mohrayyan/",
      "https://www.instagram.com/rayyan.x95",
      "https://twitter.com/rayyan_x95",
      "https://t.me/rayyan_x95"
    ],
    "jobTitle": "Creative Technologist",
    "worksFor": {
      "@type": "Organization",
      "name": "Ninety5 Studio",
      "url": "https://www.ninety5.in/"
    },
    "knowsAbout": [
      "AOSP Engineering",
      "Android ROM Optimization",
      "Systems Architecture",
      "UI/UX Design",
      "Full-Stack Web Development",
      "TypeScript",
      "Kotlin",
      "Next.js",
      "React",
      "GSAP Animations",
      "WebGL Shaders",
      "Design Systems"
    ],
    "email": "mailto:mmohammedrayyan0808@gmail.com",
    "description": "Designer who codes and Engineer who obsesses over pixels. Specializing in AOSP development, custom systems architecture, and premium web design."
  };

  const studioSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Ninety5 Studio",
    "url": "https://www.ninety5.in/",
    "logo": "https://rayyan.ninety5.in/profile.png",
    "image": "https://rayyan.ninety5.in/profile.png",
    "description": "Premium AOSP development, ROM optimization, and UI/UX design studio.",
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
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <PageTransition />
        <JsonLd data={personSchema} />
        <JsonLd data={studioSchema} />
        <SideScrollbar />
        <SmoothScroll>
          <div id="main-content">
            {children}
          </div>
          <Footer />
          <Navbar />
        </SmoothScroll>
        <CommandPalette />
      </body>
    </html>
  );
}
