import { BlogsList } from "@/components/sections/BlogsList";
import { Metadata } from "next";
import { JsonLd } from "@/components/SEO/JsonLd";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Insights on artificial intelligence, systems architecture, design systems, and mobile rom optimization from Mohammed Rayyan.",
  openGraph: {
    title: "Blogs | Mohammed Rayyan",
    description: "Insights on artificial intelligence, design systems, and mobile rom optimization from Mohammed Rayyan.",
    url: "https://rayyan.ninety5.in/blogs",
    type: "website",
  },
  alternates: {
    canonical: "/blogs",
  }
};

export default function BlogsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://rayyan.ninety5.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blogs",
        "item": "https://rayyan.ninety5.in/blogs"
      }
    ]
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <BlogsList />
    </>
  );
}
