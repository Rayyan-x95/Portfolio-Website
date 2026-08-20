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
    default: "Mohammed Rayyan M (@rayyan-x95) | Creative Technologist, AOSP Developer & Designer",
    template: "%s | Mohammed Rayyan"
  },
  description: "Official portfolio of Mohammed Rayyan (Mohammed Rayyan M / @rayyan-x95). Creative Technologist, AOSP Kernel Developer & UI/UX Designer bridging raw systems performance with cinematic interfaces. Lead at Ninety5 Studio.",
  keywords: [
    "Mohammed Rayyan",
    "Mohammed Rayyan M",
    "M Mohammed Rayyan",
    "Rayyan M",
    "Rayyan x95",
    "rayyan-x95",
    "rayyan.x95",
    "Mohammed Rayyan Chennai",
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
  publisher: "Ninety5 Studio",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rayyan.ninety5.in/",
    siteName: "Mohammed Rayyan Portfolio",
    title: "Mohammed Rayyan M | Creative Technologist, AOSP Developer & Designer",
    description: "Official portfolio of Mohammed Rayyan. Systems developer & UI/UX designer bridging the gap between raw performance and cinematic web experiences.",
    images: [
      {
        url: "/og-image.png",
        width: 1024,
        height: 682,
        alt: "Mohammed Rayyan - Creative Technologist & ROM Developer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Rayyan M | Designer & Technologist",
    description: "Systems developer & UI/UX designer bridging raw performance with cinematic web experiences.",
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
    canonical: "https://rayyan.ninety5.in/",
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
    "email": "mmohammedrayyan0808@gmail.com",
    "gender": "Male",
    "nationality": "Indian",
    "sameAs": [
      "https://github.com/rayyan-x95",
      "https://www.linkedin.com/in/mohrayyan/",
      "https://www.instagram.com/rayyan.x95",
      "https://t.me/rayyan_x95",
      "https://x.com/rayyan_x95",
      "https://twitter.com/rayyan_x95",
      "https://www.ninety5.in/",
      "https://rayyan.ninety5.in"
    ],
    "jobTitle": "Creative Technologist, AOSP Kernel Developer & UI/UX Designer",
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Dhaanish Ahmed College of Engineering",
      "url": "https://dhaanish.com"
    },
    "worksFor": {
      "@type": "Organization",
      "name": "Ninety5 Studio",
      "url": "https://www.ninety5.in/"
    },
    "founder": {
      "@type": "Organization",
      "name": "Ninety5 Studio",
      "url": "https://www.ninety5.in/"
    },
    "description": "Designer who codes and Engineer who obsesses over pixels. Bridging the gap between raw performance and cinematic design through AOSP development and premium UI/UX.",
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
      "Systems Architecture"
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
    "@type": ["ProfessionalService", "LocalBusiness"],
    "@id": "https://www.ninety5.in/#organization",
    "name": "Ninety5 Studio",
    "url": "https://www.ninety5.in/",
    "logo": "https://rayyan.ninety5.in/profile.webp",
    "image": "https://rayyan.ninety5.in/profile.webp",
    "description": "Premium AOSP development, ROM optimization, and UI/UX design studio founded by Mohammed Rayyan in Chennai, India.",
    "email": "mmohammedrayyan0808@gmail.com",
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
      "@id": "https://rayyan.ninety5.in/#person"
    },
    "foundingDate": "2024",
    "priceRange": "$$$",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "mmohammedrayyan0808@gmail.com",
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
      className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
    >
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-black text-white antialiased`}>
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

