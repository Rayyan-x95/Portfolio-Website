import type { Metadata } from "next";
import Link from "next/link";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { CommandPalette } from "@/components/ui/CommandPalette";
import { SideScrollbar } from "@/components/ui/SideScrollbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
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
      className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
    >
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-black text-white antialiased`}>
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
