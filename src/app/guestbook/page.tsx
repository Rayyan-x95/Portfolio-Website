import { PageHeader } from "@/components/ui/PageHeader";
import { Metadata } from "next";
import { FadeUp } from "@/components/ui/FadeUp";
import { MessageSquareText } from "lucide-react";
import { JsonLd } from "@/components/SEO/JsonLd";

export const metadata: Metadata = {
  title: "Guestbook",
  description: "Leave a message, sign the wall, or connect with Mohammed Rayyan on his digital portfolio guestbook.",
  openGraph: {
    title: "Guestbook | Mohammed Rayyan",
    description: "Leave a message, sign the wall, or connect with Mohammed Rayyan on his digital portfolio guestbook.",
    url: "https://rayyan.ninety5.in/guestbook",
    type: "website",
  },
  alternates: {
    canonical: "https://rayyan.ninety5.in/guestbook",
  }
};

export default function GuestbookPage() {
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
        "name": "Guestbook",
        "item": "https://rayyan.ninety5.in/guestbook"
      }
    ]
  };

  return (
    <main className="flex min-h-screen flex-col w-full selection:bg-accent-primary selection:text-black pb-32">
      <JsonLd data={breadcrumbSchema} />
      <PageHeader 
        title="Guestbook" 
        description="Leave a message or just say hi." 
      />
      <div className="container mx-auto max-w-4xl px-4 md:px-6">
        <FadeUp>
          <div className="bg-white/[0.02] border border-white/5 rounded-[3rem] p-8 md:p-16 text-center">
            <div className="w-16 h-16 rounded-2xl bg-accent-primary/10 flex items-center justify-center mx-auto mb-8">
              <MessageSquareText className="w-8 h-8 text-accent-primary" />
            </div>
            <h2 className="text-2xl font-heading font-bold text-white mb-8 uppercase tracking-tighter">Sign the wall</h2>
            
            <form className="max-w-md mx-auto space-y-4">
              <input 
                type="text" 
                placeholder="Your name"
                className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-accent-primary/50 transition-colors font-mono text-sm"
              />
              <textarea 
                placeholder="Your message..."
                rows={4}
                className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-accent-primary/50 transition-colors font-mono text-sm resize-none"
              ></textarea>
              <button 
                className="w-full py-4 rounded-2xl bg-accent-primary text-black font-heading font-bold uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Sign Guestbook
              </button>
            </form>

            <div className="mt-16 space-y-6 text-left">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-white font-heading font-bold uppercase tracking-tight mb-2">System</p>
                <p className="text-text-muted font-light leading-relaxed">
                  Welcome to the Guestbook! This is a placeholder for your future messages.
                </p>
                <p className="mt-4 text-[10px] font-mono text-white/20 uppercase tracking-widest">May 12, 2026</p>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </main>
  );
}
