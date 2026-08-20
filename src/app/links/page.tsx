import { PageHeader } from "@/components/ui/PageHeader";
import { Metadata } from "next";
import { FadeUp } from "@/components/ui/FadeUp";
import { Camera, Globe, GitBranch, Mail, ArrowUpRight, Send } from "lucide-react";
import { JsonLd } from "@/components/SEO/JsonLd";

function XTwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export const metadata: Metadata = {
  title: "Official Social Links & Profiles",
  description: "Direct access to verified official profiles of Mohammed Rayyan (Mohammed Rayyan M / @rayyan-x95) across GitHub, LinkedIn, Instagram, Telegram, Twitter/X, and Ninety5 Studio.",
  openGraph: {
    title: "Official Links & Profiles | Mohammed Rayyan",
    description: "Verified official profiles and social media directory for Mohammed Rayyan (@rayyan-x95).",
    url: "https://rayyan.ninety5.in/links",
    type: "profile",
  },
  alternates: {
    canonical: "https://rayyan.ninety5.in/links",
  }
};

const links = [
  { name: "GitHub", icon: GitBranch, url: "https://github.com/rayyan-x95", color: "from-white/10" },
  { name: "LinkedIn", icon: Globe, url: "https://www.linkedin.com/in/mohrayyan/", color: "from-blue-500/20" },
  { name: "Instagram", icon: Camera, url: "https://www.instagram.com/rayyan.x95", color: "from-purple-500/20" },
  { name: "Telegram", icon: Send, url: "https://t.me/rayyan_x95", color: "from-accent-primary/20" },
  { name: "Twitter / X", icon: XTwitterIcon, url: "https://x.com/rayyan_x95", color: "from-cyan-500/20" },
  { name: "Email Transmission", icon: Mail, url: "mailto:mmohammedrayyan0808@gmail.com", color: "from-accent-primary/20" },
  { name: "Studio Website", icon: Globe, url: "https://www.ninety5.in/", color: "from-accent-secondary/20" },
  { name: "Portfolio Core", icon: Globe, url: "/", color: "from-white/10" },
];

export default function LinksPage() {
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
        "name": "Links & Profiles",
        "item": "https://rayyan.ninety5.in/links"
      }
    ]
  };

  const linksSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": "https://rayyan.ninety5.in/links#profilepage",
    "name": "Mohammed Rayyan - Official Links Directory",
    "url": "https://rayyan.ninety5.in/links",
    "mainEntity": {
      "@id": "https://rayyan.ninety5.in/#person"
    }
  };

  return (
    <main className="flex min-h-screen flex-col w-full selection:bg-accent-primary selection:text-black pb-32">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={linksSchema} />
      <PageHeader 
        title="Links" 
        description="Official socials & verified profiles of Mohammed Rayyan." 
      />
      <div className="container mx-auto max-w-4xl px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {links.map((link, index) => {
            const Icon = link.icon;
            const isExternal = link.url.startsWith("http");
            return (
              <FadeUp key={link.name} delay={index * 0.05}>
                <a 
                  href={link.url} 
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "me noopener noreferrer" : undefined}
                  className={`group relative flex items-center justify-between p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all duration-500 overflow-hidden`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${link.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                  <div className="flex items-center gap-6 relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <Icon className="w-6 h-6 text-white group-hover:text-accent-primary transition-colors duration-500" />
                    </div>
                    <span className="font-heading text-2xl font-bold uppercase tracking-tighter text-white">{link.name}</span>
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-white/20 group-hover:text-white transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 relative z-10" />
                </a>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </main>
  );
}

