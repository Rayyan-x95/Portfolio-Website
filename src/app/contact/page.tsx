import { PageHeader } from "@/components/ui/PageHeader";
import { TerminalSection } from "@/components/sections/TerminalSection";
import { Contact } from "@/components/sections/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Mohammed Rayyan for new projects, collaborations, or just to say hi.",
};

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col w-full selection:bg-accent-primary selection:text-black pb-32">
      <PageHeader 
        title="Let's Talk" 
        description="Have a project in mind or want to collaborate? I'm currently open to new opportunities." 
      />
      <div className="-mt-32">
        <TerminalSection />
      </div>
      <Contact />
    </main>
  );
}
