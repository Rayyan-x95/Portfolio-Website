import { Contact } from "@/components/sections/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Mohammed Rayyan for new projects, collaborations, or just to say hi.",
};

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col w-full selection:bg-accent-primary selection:text-black">
      <Contact />
    </main>
  );
}
