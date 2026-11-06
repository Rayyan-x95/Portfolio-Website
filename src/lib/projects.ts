export type Project = {
  title: string;
  description: string;
  tags: string[];
  color: string;
  image: string;
  aspect: string;
  url: string;
};

export const projects: Project[] = [
  {
    title: "Titan",
    description: "A high-performance Progressive Web App optimized for offline resilience and state management.",
    tags: ["TypeScript", "Next.js", "PWA"],
    color: "from-accent-primary/20 to-transparent",
    image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=2070&auto=format&fit=crop",
    aspect: "aspect-[4/5]",
    url: "https://github.com/rayyan-x95/Titan"
  },
  {
    title: "EduCard",
    description: "A digital identification and smart card system for educational institutions and student tracking.",
    tags: ["UI/UX", "System Design", "Card System"],
    color: "from-accent-secondary/20 to-transparent",
    image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?q=80&w=2071&auto=format&fit=crop",
    aspect: "aspect-square",
    url: "https://github.com/rayyan-x95/EduCard"
  },
  {
    title: "Ninety5",
    description: "Creative design studio portfolio showcasing brand identity systems, UI/UX, and visual storytelling.",
    tags: ["HTML", "UI/UX", "CSS"],
    color: "from-accent-tertiary/20 to-transparent",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2000&auto=format&fit=crop",
    aspect: "aspect-[4/3]",
    url: "https://github.com/rayyan-x95/Portfolio"
  },
  {
    title: "Habitate",
    description: "A native Android application focused on tracking and maintaining daily habits.",
    tags: ["Kotlin", "Android", "Mobile"],
    color: "from-white/10 to-transparent",
    image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=2070&auto=format&fit=crop",
    aspect: "aspect-[3/4]",
    url: "https://github.com/rayyan-x95/Habitate"
  },
  {
    title: "AI Career Navigator",
    description: "An AI-powered platform for generating personalized career roadmaps and resume insights.",
    tags: ["AI/ML", "OpenAI API", "React"],
    color: "from-blue-500/20 to-transparent",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    aspect: "aspect-video",
    url: "#"
  },
  {
    title: "LUT Playground",
    description: "A web utility for testing and applying cinematic color lookup tables in real-time.",
    tags: ["Color Grading", "WebGL", "Utility"],
    color: "from-red-500/20 to-transparent",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
    aspect: "aspect-square",
    url: "#"
  },
  {
    title: "F1 Telemetry",
    description: "Real-time dashboard for analyzing Formula 1 telemetry data and driver statistics.",
    tags: ["Data Analysis", "D3.js", "Dashboard"],
    color: "from-yellow-500/20 to-transparent",
    image: "https://images.unsplash.com/photo-1512749491228-caef5a7831d7?q=80&w=2070&auto=format&fit=crop",
    aspect: "aspect-[4/3]",
    url: "#"
  },
  {
    title: "TaskZen Android",
    description: "A beautifully crafted native Android task management application with material design.",
    tags: ["Kotlin", "Android", "Mobile"],
    color: "from-green-500/20 to-transparent",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
    aspect: "aspect-[4/5]",
    url: "#"
  },
  {
    title: "Resume Generator",
    description: "A markdown-based utility for generating ATS-friendly PDF resumes instantly.",
    tags: ["Web Utility", "Markdown", "PDF"],
    color: "from-purple-500/20 to-transparent",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop",
    aspect: "aspect-video",
    url: "#"
  },
  {
    title: "3D Portfolio",
    description: "Experimental 3D portfolio featuring immersive renders and interactive spatial elements.",
    tags: ["Blender", "Three.js", "Renders"],
    color: "from-white/20 to-transparent",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop",
    aspect: "aspect-square",
    url: "#"
  }
];
