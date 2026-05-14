import type { Metadata } from "next";
import Link from "next/link";
import { Plus_Jakarta_Sans, Space_Grotesk, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { CommandPalette } from "@/components/ui/CommandPalette";
import { SideScrollbar } from "@/components/ui/SideScrollbar";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-editorial",
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400", "500", "600"],
});


export const metadata: Metadata = {
  metadataBase: new URL("https://rayyan.qzz.io"),
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
    url: "http://rayyan.qzz.io/",
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
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${spaceGrotesk.variable} ${cormorant.variable} antialiased`}
    >
      <body className={`${plusJakarta.variable} ${spaceGrotesk.variable} ${cormorant.variable} font-sans bg-black text-white antialiased`}>
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
