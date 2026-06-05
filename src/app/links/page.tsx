import { PageHeader } from "@/components/ui/PageHeader";
import { Metadata } from "next";
import { FadeUp } from "@/components/ui/FadeUp";
import { Camera, Globe, GitBranch, Hash, Mail, ArrowUpRight } from "lucide-react";
import { JsonLd } from "@/components/SEO/JsonLd";

export const metadata: Metadata = {
  title: "Links",
  description: "Official profiles, social media links, email contact, and github repositories of Mohammed Rayyan.",
  openGraph: {
    title: "Links & Socials | Mohammed Rayyan",
    description: "Official profiles, social media links, email contact, and github repositories of Mohammed Rayyan.",
    url: "https://rayyan.ninety5.in/links",
    type: "website",
  },
  alternates: {
    canonical: "https://rayyan.ninety5.in/links",
  }
};

const links = [
  { name: "Instagram", icon: Camera, url: "https://instagram.com/rayyan_x95", color: "from-purple-500/20" },
  { name: "LinkedIn", icon: Globe, url: "https://linkedin.com/in/rayyan-x95", color: "from-blue-500/20" },
  { name: "GitHub", icon: GitBranch, url: "https://github.com/rayyan-x95", color: "from-white/10" },
  { name: "Twitter", icon: Hash, url: "#", color: "from-sky-400/20" },
  { name: "Email", icon: Mail, url: "mailto:mmohammedrayyan0808@gmail.com", color: "from-accent-primary/20" },
  { name: "Portfolio", icon: Globe, url: "/", color: "from-accent-secondary/20" },
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
        "name": "Links",
        "item": "https://rayyan.ninety5.in/links"
      }
    ]
  };
  return (
    <main className="flex min-h-screen flex-col w-full selection:bg-accent-primary selection:text-black pb-32">
      <JsonLd data={breadcrumbSchema} />
      <PageHeader 
        title="Links" 
        description="Socials & Profiles." 
      />
      <div className="container mx-auto max-w-4xl px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {links.map((link, index) => {
            const Icon = link.icon;
            return (
              <FadeUp key={link.name} delay={index * 0.05}>
                <a 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
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
