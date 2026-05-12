import { PageHeader } from "@/components/ui/PageHeader";
import { TechStack } from "@/components/sections/TechStack";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore my expertise in AOSP development, high-end UI/UX design, and full-stack engineering.",
};
import { Testimonials } from "@/components/sections/Testimonials";

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col w-full selection:bg-accent-primary selection:text-black pb-32">
      <PageHeader 
        title="Expertise" 
        description="Comprehensive solutions spanning from UI/UX design to full-stack engineering." 
      />
      <div>
        <TechStack />
      </div>
      <Testimonials />
    </main>
  );
}
