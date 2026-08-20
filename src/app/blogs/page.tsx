import { BlogsList } from "@/components/sections/BlogsList";
import { Metadata } from "next";
import { JsonLd } from "@/components/SEO/JsonLd";
import { posts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blogs & Technical Insights",
  description: "Engineering essays, architectural breakdowns, AI agentic patterns, and mobile ROM optimization guides by Mohammed Rayyan (Mohammed Rayyan M / @rayyan-x95).",
  openGraph: {
    title: "Blogs & Technical Insights | Mohammed Rayyan",
    description: "Engineering essays, architectural breakdowns, AI agentic patterns, and mobile ROM optimization guides by Mohammed Rayyan.",
    url: "https://rayyan.ninety5.in/blogs",
    type: "website",
  },
  alternates: {
    canonical: "https://rayyan.ninety5.in/blogs",
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

  const blogsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Mohammed Rayyan's Articles and Insights",
    "description": "Insights on artificial intelligence, design systems, systems architecture, and mobile ROM optimization from Mohammed Rayyan.",
    "url": "https://rayyan.ninety5.in/blogs",
    "numberOfItems": posts.length,
    "itemListElement": posts.map((post, index) => {
      let isoDate = "2026-01-01";
      if (post.date.includes("JUN")) {
        const day = post.date.match(/\d+/)?.[0]?.padStart(2, '0') || '20';
        isoDate = `2026-06-${day}`;
      } else if (post.date.includes("FEB")) {
        const day = post.date.match(/\d+/)?.[0]?.padStart(2, '0') || '10';
        isoDate = `2026-02-${day}`;
      } else if (post.date.includes("JAN")) {
        const day = post.date.match(/\d+/)?.[0]?.padStart(2, '0') || '01';
        isoDate = `2026-01-${day}`;
      }

      return {
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.excerpt,
          "datePublished": isoDate,
          "author": {
            "@type": "Person",
            "@id": "https://rayyan.ninety5.in/#person",
            "name": "Mohammed Rayyan"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Ninety5 Studio",
            "logo": {
              "@type": "ImageObject",
              "url": "https://rayyan.ninety5.in/profile.webp"
            }
          },
          "mainEntityOfPage": `https://rayyan.ninety5.in/blog/${post.slug}`
        }
      };
    })
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={blogsSchema} />
      <BlogsList />
    </>
  );
}
