import { PageHeader } from "@/components/ui/PageHeader";
import { UsesHardware } from "@/components/sections/UsesHardware";
import { UsesSoftware } from "@/components/sections/UsesSoftware";
import { UsesIntegrations } from "@/components/sections/UsesIntegrations";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uses",
  description: "A curated manifest of the hardware, software, and everyday carry that I use to design and build products.",
};

export default function UsesPage() {
  return (
    <main className="flex min-h-screen flex-col w-full selection:bg-accent-primary selection:text-black pb-32">
      <PageHeader 
        title="Uses" 
        description="A curated manifest of the hardware, software, and everyday carry that I use to design and build products." 
      />
      <div className="space-y-32">
        <UsesHardware />
        <UsesSoftware />
        <UsesIntegrations />
      </div>
    </main>
  );
}
