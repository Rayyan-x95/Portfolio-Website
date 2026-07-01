import { posts } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, ChevronRight } from "lucide-react";
import { JsonLd } from "@/components/SEO/JsonLd";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Blogs`,
    description: post.excerpt,
    alternates: {
      canonical: `https://rayyan.ninety5.in/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://rayyan.ninety5.in/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: ["Mohammed Rayyan"],
      images: [
        {
          url: "/og-image.png",
          width: 1024,
          height: 682,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: ["/og-image.png"],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Format ISO date for Schema
  const isoDate = post.date.includes("JUN") 
    ? `2026-06-${post.date.match(/\d+/)?.[0]?.padStart(2, '0') || '20'}`
    : `2026-01-01`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "datePublished": isoDate,
    "author": {
      "@type": "Person",
      "name": "Mohammed Rayyan",
      "url": "https://rayyan.ninety5.in"
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
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <main className="min-h-screen bg-black text-white selection:bg-accent-primary selection:text-black pt-32 pb-32">
        <div className="container mx-auto max-w-4xl px-4 md:px-6">
          {/* Breadcrumb & Back button */}
          <div className="flex flex-col gap-8 mb-12">
            <div className="flex items-center gap-2 text-xs font-mono text-white/30">
              <Link href="/" className="hover:text-accent-secondary transition-colors">HOME</Link>
              <ChevronRight className="w-3 h-3 text-white/10" />
              <Link href="/blogs" className="hover:text-accent-secondary transition-colors">BLOGS</Link>
              <ChevronRight className="w-3 h-3 text-white/10" />
              <span className="text-white/50 truncate max-w-[200px] sm:max-w-none">{post.title.toUpperCase()}</span>
            </div>
            
            <Link 
              href="/blogs" 
              className="inline-flex items-center gap-3 text-sm font-mono text-white/50 hover:text-white transition-colors group focus-visible:ring-2 focus-visible:ring-accent-secondary focus-visible:outline-none rounded-lg w-fit"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              BACK TO ALL BLOGS
            </Link>
          </div>

          {/* Article Header */}
          <header className="mb-12 border-b border-white/10 pb-12">
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-white/40 uppercase tracking-widest"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white tracking-tighter leading-[1.1] mb-8 uppercase">
              {post.title}
            </h1>

            <div className="flex items-center gap-6 text-xs font-mono text-white/40">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-accent-secondary" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent-secondary" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </header>

          {/* Article Body */}
          <article 
            className="blog-content leading-relaxed text-neutral-300 mb-16"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </main>
    </>
  );
}
