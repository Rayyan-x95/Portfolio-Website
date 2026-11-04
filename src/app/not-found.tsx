import { Metadata } from "next";
import { NotFoundClient } from "@/components/ui/NotFoundClient";

export const metadata: Metadata = {
  title: "404 — Page Not Found | Mohammed Rayyan",
  description: "The requested route could not be resolved on Mohammed Rayyan's portfolio.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return <NotFoundClient />;
}
