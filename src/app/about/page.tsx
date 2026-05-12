import { PageHeader } from "@/components/ui/PageHeader";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Mohammed Rayyan's journey as a Creative Technologist and the philosophy behind his work.",
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col w-full selection:bg-accent-primary selection:text-black pb-32">
      <PageHeader 
        title="About Me" 
        description="My background, philosophy, and professional journey." 
      />
      <div>
        <About />
      </div>
      <Experience />
    </main>
  );
}
