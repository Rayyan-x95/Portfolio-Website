import { PageHeader } from "@/components/ui/PageHeader";
import { WorksSection } from "@/components/sections/WorksSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description: "A showcase of selected projects spanning AOSP development, full-stack engineering, and premium UI/UX design.",
};
import { GithubActivity } from "@/components/sections/GithubActivity";

export default function WorkPage() {
  return (
    <main className="flex min-h-screen flex-col w-full selection:bg-accent-primary selection:text-black pb-32">
      <PageHeader 
        title="Selected Work" 
        description="A curated showcase of engineering projects, digital products, and design systems." 
      />
      <div className="pt-8">
        <WorksSection />
      </div>
      <GithubActivity />
    </main>
  );
}
