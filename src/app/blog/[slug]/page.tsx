import { posts } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock, ChevronRight, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";
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
    title: `${post.title} | Technical Guide`,
    description: post.excerpt,
    keywords: [...post.tags, "Mohammed Rayyan", "AOSP Development", "UI UX Engineering", "Ninety5 Studio"],
    alternates: {
      canonical: `https://rayyan.ninety5.in/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} — Mohammed Rayyan`,
      description: post.excerpt,
      url: `https://rayyan.ninety5.in/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: ["Mohammed Rayyan"],
      tags: post.tags,
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
      title: `${post.title} — Mohammed Rayyan`,
      description: post.excerpt,
      creator: "@rayyan_x95",
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
  let isoDate = "2026-01-01";
  if (post.date.includes("JUN")) {
    const day = post.date.match(/\d+/)?.[0]?.padStart(2, "0") || "20";
    isoDate = `2026-06-${day}`;
  } else if (post.date.includes("FEB")) {
    const day = post.date.match(/\d+/)?.[0]?.padStart(2, "0") || "10";
    isoDate = `2026-02-${day}`;
  } else if (post.date.includes("JAN")) {
    const day = post.date.match(/\d+/)?.[0]?.padStart(2, "0") || "01";
    isoDate = `2026-01-${day}`;
  }

  // Related posts for topic clustering & internal linking equity
  const relatedPosts = posts
    .filter((p) => p.slug !== post.slug)
    .filter((p) => p.tags.some((t) => post.tags.includes(t)))
    .slice(0, 2);

  // Fallback related posts if tag match is low
  const displayRelated = relatedPosts.length >= 2 
    ? relatedPosts 
    : posts.filter((p) => p.slug !== post.slug).slice(0, 2);

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
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://rayyan.ninety5.in/blog/${post.slug}`
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `https://rayyan.ninety5.in/blog/${post.slug}#article`,
    "headline": post.title,
    "description": post.excerpt,
    "inLanguage": "en-US",
    "datePublished": isoDate,
    "dateModified": isoDate,
    "keywords": post.tags.join(", "),
    "articleSection": post.tags[0] || "Technology",
    "author": {
      "@type": "Person",
      "@id": "https://rayyan.ninety5.in/#person",
      "name": "Mohammed Rayyan",
      "jobTitle": "Creative Technologist & AOSP Developer",
      "url": "https://rayyan.ninety5.in",
      "image": "https://rayyan.ninety5.in/profile.webp",
      "sameAs": [
        "https://github.com/rayyan-x95",
        "https://www.linkedin.com/in/mohrayyan/",
        "https://www.instagram.com/rayyan.x95",
        "https://t.me/rayyan_x95",
        "https://x.com/rayyan_x95"
      ]
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.ninety5.in/#organization",
      "name": "Ninety5 Studio",
      "url": "https://www.ninety5.in/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://rayyan.ninety5.in/profile.webp"
      }
    },
    "mainEntityOfPage": `https://rayyan.ninety5.in/blog/${post.slug}`
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": post.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />
      <main className="min-h-screen bg-black text-white selection:bg-accent-primary selection:text-black pt-32 pb-32">
        <div className="container mx-auto max-w-4xl px-4 md:px-6">
          {/* Breadcrumb & Back button */}
          <div className="flex flex-col gap-8 mb-12">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-white/40">
              <Link href="/" className="hover:text-accent-secondary transition-colors">HOME</Link>
              <ChevronRight className="w-3 h-3 text-white/20" />
              <Link href="/blogs" className="hover:text-accent-secondary transition-colors">BLOGS</Link>
              <ChevronRight className="w-3 h-3 text-white/20" />
              <span className="text-white/60 truncate max-w-[200px] sm:max-w-none">{post.title.toUpperCase()}</span>
            </nav>
            
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
                  className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-accent-primary uppercase tracking-widest"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white tracking-tighter leading-[1.15] mb-8 uppercase">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center justify-between gap-6 text-xs font-mono text-white/50">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-accent-secondary" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-accent-secondary" />
                  <span>{post.readTime}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-white/40">
                <ShieldCheck className="w-4 h-4 text-accent-primary" />
                <span>E-E-A-T Verified Guide</span>
              </div>
            </div>
          </header>

          {/* Article Body */}
          <article 
            className="blog-content leading-relaxed text-neutral-300 mb-16"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* E-E-A-T Author Card & Credibility Signature */}
          <section className="my-16 p-8 md:p-10 rounded-3xl bg-[#080808] border border-white/10 relative overflow-hidden">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6">
              <div className="relative w-20 h-20 rounded-2xl overflow-hidden border border-white/15 shrink-0 bg-neutral-900">
                <Image 
                  src="/profile.webp" 
                  alt="Mohammed Rayyan - Author & Creative Technologist" 
                  fill 
                  className="object-cover object-bottom"
                />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="text-xl font-heading font-bold text-white uppercase tracking-tight">
                    Mohammed Rayyan
                  </h2>
                  <span title="Verified Author" className="inline-flex">
                    <CheckCircle2 className="w-4 h-4 text-accent-primary" />
                  </span>
                </div>
                <p className="text-xs font-mono text-accent-secondary uppercase tracking-wider mb-2">
                  Founder at Ninety5 Studio · AOSP Kernel Developer & UI/UX Designer
                </p>
                <div className="flex flex-wrap items-center gap-4 text-white/40 text-xs">
                  <a href="https://github.com/rayyan-x95" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5 font-mono">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                    @rayyan-x95
                  </a>
                  <a href="https://www.linkedin.com/in/mohrayyan/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5 font-mono">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    LinkedIn
                  </a>
                  <a href="https://x.com/rayyan_x95" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5 font-mono">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    @rayyan_x95
                  </a>
                </div>
              </div>
            </div>
            <p className="text-sm text-text-muted leading-relaxed mb-4">
              Mohammed Rayyan is a Chennai-based Creative Technologist specializing in Android Open Source Project (AOSP) system engineering, low-level Linux kernel optimizations, and high-performance React/Next.js architectures.
            </p>
            <div className="flex items-center gap-2 pt-4 border-t border-white/5 text-[11px] font-mono text-white/40">
              <ShieldCheck className="w-3.5 h-3.5 text-accent-primary" />
              <span>Editorial Standard: All configurations and code patterns published in this article have been compiled, benchmarked, and validated on physical hardware.</span>
            </div>
          </section>

          {/* Related Articles / Topical Cluster */}
          {displayRelated.length > 0 && (
            <section className="mt-20 pt-12 border-t border-white/10">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-accent-secondary block mb-3">
                Topical Authority
              </span>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-white uppercase tracking-tight mb-8">
                Related Deep Dives
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {displayRelated.map((rel) => (
                  <Link 
                    key={rel.slug} 
                    href={`/blog/${rel.slug}`}
                    className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-accent-primary/30 hover:bg-white/[0.04] transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2 text-[10px] font-mono text-white/40 uppercase mb-3">
                        <span>{rel.date}</span>
                        <span>•</span>
                        <span>{rel.readTime}</span>
                      </div>
                      <h3 className="font-heading text-lg font-bold text-white group-hover:text-accent-primary transition-colors leading-snug mb-3 uppercase">
                        {rel.title}
                      </h3>
                      <p className="text-xs text-text-muted line-clamp-2 leading-relaxed">
                        {rel.excerpt}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-mono text-accent-secondary mt-6 group-hover:translate-x-1 transition-transform">
                      <span>Read Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
    </>
  );
}
