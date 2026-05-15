import { BlogsList } from "@/components/sections/BlogsList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Insights on AI, prompt engineering, typography, and fluid interfaces from Mohammed Rayyan.",
};

export default function BlogsPage() {
  return <BlogsList />;
}
