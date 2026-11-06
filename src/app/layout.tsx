import type { Metadata, Viewport } from "next";
import { Archivo, JetBrains_Mono, Fredoka } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { CommandPalette } from "@/components/ui/CommandPalette";
import { SideScrollbar } from "@/components/ui/SideScrollbar";
import { JsonLd } from "@/components/SEO/JsonLd";
import { PageTransition } from "@/components/ui/PageTransition";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rayyan.ninety5.in"),
  title: {
    default: "Mohammed Rayyan | Founder, Ninety5 Studio — Chennai",
    template: "%s | Mohammed Rayyan"
  },
  description: "Mohammed Rayyan, Founder of Ninety5 (Chennai) — AOSP kernel engineer & Next.js designer. 100+ projects, cinematic UI/UX. Open for Q4 2026 projects.",
  authors: [
    { name: "Mohammed Rayyan", url: "https://rayyan.ninety5.in" },
    { name: "Mohammed Rayyan", url: "https://www.ninety5.in" }
  ],
  creator: "Mohammed Rayyan",
  publisher: "Ninety5",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://rayyan.ninety5.in/",
    siteName: "Mohammed Rayyan — Founder of Ninety5",
    title: "Mohammed Rayyan | Founder, Ninety5 Studio — Chennai",
    description: "Mohammed Rayyan, Founder of Ninety5 (Chennai) — AOSP kernel engineer & Next.js designer. Cinematic UI/UX for startups.",
    images: [
      {
        url: "/og-image.png",
        width: 1024,
        height: 682,
        alt: "Mohammed Rayyan — Founder of Ninety5, Creative Technologist & Designer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Rayyan | Founder, Ninety5 Studio — Chennai",
    description: "Founder of Ninety5 (Chennai). AOSP kernel engineer & Next.js designer. Cinematic UI/UX for startups.",
    creator: "@rayyan_x95",
    images: ["/og-image.png"]
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
  manifest: "/manifest.json",
  category: "technology",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || "",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#07061A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://rayyan.ninety5.in/#person",
    "name": "Mohammed Rayyan",
    "givenName": "Mohammed",
    "familyName": "Rayyan",
    "additionalName": "M",
    "alternateName": [
      "Mohammed Rayyan M",
      "M Mohammed Rayyan",
      "Rayyan M",
      "Rayyan x95",
      "rayyan-x95",
      "rayyan.x95",
      "Mohamed Rayyan",
      "Mohamed Rayyan M"
    ],
    "url": "https://rayyan.ninety5.in",
    "image": "https://rayyan.ninety5.in/profile.webp",
    "email": "rayyan@ninety5.in",
    "gender": "Male",
    "nationality": "Indian",
    "sameAs": [
      "https://github.com/rayyan-x95",
      "https://www.linkedin.com/in/mohrayyan/",
      "https://www.instagram.com/rayyan.x95",
      "https://t.me/rayyan_x95",
      "https://x.com/rayyan_x95",
      "https://twitter.com/rayyan_x95",
      "https://www.ninety5.in",
      "https://ninety5.in",
      "https://rayyan.ninety5.in"
    ],
    "jobTitle": "Founder & Creative Technologist at Ninety5",
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Dhaanish Ahmed College of Engineering",
      "url": "https://dhaanishchennai.in"
    },
    "worksFor": {
      "@type": "Organization",
      "@id": "https://www.ninety5.in/#organization",
      "name": "Ninety5",
      "url": "https://www.ninety5.in"
    },
    "founderOf": {
      "@type": "Organization",
      "@id": "https://www.ninety5.in/#organization",
      "name": "Ninety5",
      "url": "https://www.ninety5.in"
    },
    "description": "Founder of Ninety5 (ninety5.in). Designer who codes and Engineer who obsesses over pixels. Bridging the gap between raw performance and cinematic design through AOSP development and premium UI/UX.",
    "knowsAbout": [
      "AOSP Development",
      "Android Kernel Optimization",
      "Custom ROM Engineering",
      "UI/UX Design",
      "Next.js",
      "React",
      "Full-Stack Web Development",
      "Creative Technology",
      "TypeScript",
      "GSAP Animations",
      "Tailwind CSS",
      "Systems Architecture",
      "Brand Identity Design",
      "Product Design"
    ],
    "knowsLanguage": ["en", "ta", "hi", "ur"],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "600001",
      "addressCountry": "IN"
    }
  };

  const studioSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService", "LocalBusiness"],
    "@id": "https://www.ninety5.in/#organization",
    "name": "Ninety5",
    "alternateName": "Ninety5 Studio",
    "url": "https://www.ninety5.in",
    "sameAs": [
      "https://www.ninety5.in",
      "https://ninety5.in"
    ],
    "logo": "https://rayyan.ninety5.in/profile.webp",
    "image": "https://rayyan.ninety5.in/profile.webp",
    "description": "Ninety5 (ninety5.in) is a premium creative studio founded by Mohammed Rayyan in Chennai, India. Specialising in AOSP development, ROM optimisation, UI/UX design, and cinematic digital experiences.",
    "email": "rayyan@ninety5.in",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Chennai Central",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "600001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "13.0827",
      "longitude": "80.2707"
    },
    "areaServed": [
      "Worldwide",
      "India",
      "Chennai",
      "Tamil Nadu",
      "United States",
      "United Kingdom",
      "United Arab Emirates",
      "Remote"
    ],
    "currenciesAccepted": "USD, INR, EUR, AED",
    "paymentAccepted": "Bank Transfer, Stripe, Wire Transfer, Crypto",
    "founder": {
      "@id": "https://rayyan.ninety5.in/#person",
      "@type": "Person",
      "name": "Mohammed Rayyan"
    },
    "foundingDate": "2024",
    "priceRange": "$$$",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "rayyan@ninety5.in",
      "url": "https://rayyan.ninety5.in/contact",
      "availableLanguage": ["English", "Tamil", "Hindi", "Urdu"]
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://rayyan.ninety5.in/#website",
    "url": "https://rayyan.ninety5.in",
    "name": "Mohammed Rayyan Portfolio",
    "alternateName": ["Mohammed Rayyan", "Mohammed Rayyan M", "Rayyan x95 Portfolio", "Ninety5 Studio"],
    "description": "Official portfolio and digital workspace of Mohammed Rayyan (Creative Technologist & Designer).",
    "publisher": {
      "@id": "https://rayyan.ninety5.in/#person"
    },
    "author": {
      "@id": "https://rayyan.ninety5.in/#person"
    },
    "inLanguage": "en-US"
  };

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": "https://rayyan.ninety5.in/#profilepage",
    "url": "https://rayyan.ninety5.in",
    "name": "Mohammed Rayyan - Creative Technologist & Designer",
    "mainEntity": {
      "@id": "https://rayyan.ninety5.in/#person"
    }
  };

  return (
    <html
      lang="en"
      className={`${archivo.variable} ${jetbrains.variable} ${fredoka.variable} antialiased`}
    >
      <body className={`${archivo.variable} ${jetbrains.variable} ${fredoka.variable} font-sans bg-background text-foreground antialiased`}>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <PageTransition />
        <JsonLd data={personSchema} />
        <JsonLd data={studioSchema} />
        <JsonLd data={websiteSchema} />
        <JsonLd data={profilePageSchema} />
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

