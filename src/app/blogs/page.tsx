import { BlogsList } from "@/components/sections/BlogsList";
import { Metadata } from "next";
import { JsonLd } from "@/components/SEO/JsonLd";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Insights on artificial intelligence, systems architecture, design systems, and mobile ROM optimization by Mohammed Rayyan.",
  openGraph: {
    title: "Blogs & Insights | Mohammed Rayyan",
    description: "Insights on artificial intelligence, systems architecture, design systems, and mobile ROM optimization by Mohammed Rayyan.",
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
    "numberOfItems": 6,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "BlogPosting",
          "headline": "Why Prompt Engineering Alone Is Outdated in 2026",
          "description": "If you are still tweaking 'act as an expert' prompts, you are falling behind. Here is the actual engineering skill replacing it in 2026: system architecture, clean data...",
          "datePublished": "2026-02-13",
          "author": {
            "@type": "Person",
            "name": "Mohammed Rayyan"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Ninety5 Studio",
            "logo": {
              "@type": "ImageObject",
              "url": "https://github.com/rayyan-x95.png"
            }
          },
          "mainEntityOfPage": "https://rayyan.ninety5.in/blogs"
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "BlogPosting",
          "headline": "I Replaced Google with AI for 7 Days. Here's What Broke.",
          "description": "I went a full week using only LLMs for debugging instead of StackOverflow. It was a productivity boost but here is why traditional search still matters.",
          "datePublished": "2026-02-10",
          "author": {
            "@type": "Person",
            "name": "Mohammed Rayyan"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Ninety5 Studio",
            "logo": {
              "@type": "ImageObject",
              "url": "https://github.com/rayyan-x95.png"
            }
          },
          "mainEntityOfPage": "https://rayyan.ninety5.in/blogs"
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "BlogPosting",
          "headline": "Hands-On with Claude Opus 4.6 vs Gemini 3 Pro vs GPT-5.2",
          "description": "I tested Anthropic's newest Claude Opus 4.6 against Gemini 3 Pro and GPT-5.2 in a real 3-prompt product prototype. Here's what actually worked and where each...",
          "datePublished": "2026-02-06",
          "author": {
            "@type": "Person",
            "name": "Mohammed Rayyan"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Ninety5 Studio",
            "logo": {
              "@type": "ImageObject",
              "url": "https://github.com/rayyan-x95.png"
            }
          },
          "mainEntityOfPage": "https://rayyan.ninety5.in/blogs"
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "BlogPosting",
          "headline": "Typography as Interface: Why Inter and Outfit Rule the Web",
          "description": "Why I chose Inter and Outfit for my portfolio and Rune AI. A deep dive into font functionality, readability at scale, and how typography defines digital product identity.",
          "datePublished": "2026-01-31",
          "author": {
            "@type": "Person",
            "name": "Mohammed Rayyan"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Ninety5 Studio",
            "logo": {
              "@type": "ImageObject",
              "url": "https://github.com/rayyan-x95.png"
            }
          },
          "mainEntityOfPage": "https://rayyan.ninety5.in/blogs"
        }
      },
      {
        "@type": "ListItem",
        "position": 5,
        "item": {
          "@type": "BlogPosting",
          "headline": "Designing Fluid Interfaces: My Approach to Animation",
          "description": "Moving beyond 'making things move' to 'making things feel'. A deep dive into physics-based animation, Framer Motion, and creating emotional connections with UI.",
          "datePublished": "2026-01-01",
          "author": {
            "@type": "Person",
            "name": "Mohammed Rayyan"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Ninety5 Studio",
            "logo": {
              "@type": "ImageObject",
              "url": "https://github.com/rayyan-x95.png"
            }
          },
          "mainEntityOfPage": "https://rayyan.ninety5.in/blogs"
        }
      },
      {
        "@type": "ListItem",
        "position": 6,
        "item": {
          "@type": "BlogPosting",
          "headline": "How I Approach a Problem Before Writing Code",
          "description": "Stop coding immediately. Learn the 80/20 rule of software engineering: 80% planning, 20% typing. A guide to thinking like a senior engineer.",
          "datePublished": "2026-01-01",
          "author": {
            "@type": "Person",
            "name": "Mohammed Rayyan"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Ninety5 Studio",
            "logo": {
              "@type": "ImageObject",
              "url": "https://github.com/rayyan-x95.png"
            }
          },
          "mainEntityOfPage": "https://rayyan.ninety5.in/blogs"
        }
      }
    ]
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={blogsSchema} />
      <BlogsList />
    </>
  );
}
