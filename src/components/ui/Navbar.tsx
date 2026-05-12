"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { ChevronDown, Command as CommandIcon, FlaskConical, Link2, Monitor, MessageCircle, Menu, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

export function Navbar() {
  const pathname = usePathname();
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();
  
  // Transform values for a "liquid" scroll experience
  const navY = useTransform(scrollY, [0, 100], [0, -12]);
  const navScale = useTransform(scrollY, [0, 100], [1, 0.85]);
  const navBgOpacity = useTransform(scrollY, [0, 100], [0.4, 0.9]);
  const navBlur = useTransform(scrollY, [0, 100], [40, 60]);
  const logoScale = useTransform(scrollY, [0, 100], [1, 0.85]);
  const taglineOpacity = useTransform(scrollY, [0, 50], [1, 0]);

  const mainLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Work", href: "/work" },
    { name: "Blogs", href: "/blogs" },
  ];

  const moreLinks = [
    { name: "Labs", href: "/labs", icon: FlaskConical, sub: "Experimental playground" },
    { name: "Links", href: "/links", icon: Link2, sub: "Socials & Profiles" },
    { name: "Uses", href: "/uses", icon: Monitor, sub: "My gear & software" },
    { name: "Guestbook", href: "/guestbook", icon: MessageCircle, sub: "Sign my wall" }
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on path change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        style={{ y: navY }}
        className="fixed top-4 md:top-8 left-0 w-full z-[100] px-4 md:px-8 pointer-events-none"
      >
        <div className="container mx-auto max-w-[1400px] flex items-center justify-between pointer-events-auto relative">
          
          {/* LEFT: Identity */}
          <div className="flex-1 flex items-center">
            <motion.div 
              style={{ scale: logoScale }}
              className="flex items-center gap-6 mix-blend-difference origin-left"
            >
              <Link href="/" className="flex items-center gap-3 group">
                <span className="font-heading text-xl md:text-2xl font-black uppercase tracking-tighter text-white">
                  N95<span className="text-accent-primary">.</span>
                </span>
              </Link>
              
              <motion.div 
                style={{ opacity: taglineOpacity }}
                className="hidden lg:flex items-center gap-6"
              >
                <div className="h-8 w-[1px] bg-white/20" />
                <div className="flex flex-col">
                  <span className="text-[9px] font-mono uppercase tracking-[0.4em] text-white/40 leading-none mb-1.5">Creative Engineer</span>
                  <span className="text-[9px] font-mono uppercase tracking-[0.4em] text-accent-primary leading-none font-black">Building the Future</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* CENTER: Navigation Pill (Desktop Only) */}
          <div className="hidden md:flex flex-none justify-center">
            <motion.div 
              style={{ 
                scale: navScale,
                backgroundColor: `rgba(0, 0, 0, ${navBgOpacity.get()})`,
                backdropFilter: `blur(${navBlur.get()}px)`
              }}
              className="flex items-center gap-1 border border-white/10 p-1 rounded-full mix-blend-difference transition-shadow duration-700 hover:shadow-[0_0_40px_rgba(58,190,249,0.1)]"
              onMouseLeave={() => setHoveredLink(null)}
            >
              <nav className="flex items-center gap-1">
                {mainLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onMouseEnter={() => setHoveredLink(link.name)}
                      className={`relative px-4 lg:px-6 py-2.5 rounded-full text-[10px] lg:text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-500 ${
                        isActive ? "text-black" : "text-white/60 hover:text-white"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="nav-pill"
                          className="absolute inset-0 bg-white rounded-full -z-10"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                        />
                      )}
                      {hoveredLink === link.name && !isActive && (
                        <motion.div
                          layoutId="hover-pill"
                          className="absolute inset-0 bg-white/10 rounded-full -z-10"
                          transition={{ type: "spring", bounce: 0, duration: 0.3 }}
                        />
                      )}
                      {link.name}
                    </Link>
                  );
                })}

                {/* More Trigger */}
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setIsMoreOpen(!isMoreOpen)}
                    onMouseEnter={() => setHoveredLink("More")}
                    className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-500 relative ${
                      isMoreOpen ? "text-black bg-white" : "text-white/60 hover:text-white"
                    }`}
                  >
                    {isMoreOpen && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-white rounded-full -z-10"
                      />
                    )}
                    {hoveredLink === "More" && !isMoreOpen && (
                      <motion.div
                        layoutId="hover-pill"
                        className="absolute inset-0 bg-white/10 rounded-full -z-10"
                      />
                    )}
                    More <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-500 ${isMoreOpen ? "rotate-180" : ""}`} />
                  </button>

                  <AnimatePresence>
                    {isMoreOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                        className="absolute top-[60px] left-1/2 -translate-x-1/2 w-[580px] bg-[#0A0A0A]/95 backdrop-blur-3xl border border-white/10 rounded-[2rem] p-4 shadow-2xl flex gap-3 z-[110] pointer-events-auto"
                      >
                        <Link 
                          href="/labs"
                          onClick={() => setIsMoreOpen(false)}
                          className="relative flex-1 bg-white/[0.03] border border-white/5 rounded-3xl p-8 overflow-hidden group hover:bg-white/[0.06] transition-all duration-500"
                        >
                          <FlaskConical className="absolute top-4 right-4 w-32 h-32 text-white/5 -rotate-12 group-hover:rotate-0 group-hover:scale-110 transition-all duration-700" />
                          <div className="mt-auto relative z-10">
                            <h3 className="text-xl font-bold text-white mb-2">Labs</h3>
                            <p className="text-[11px] text-white/40 leading-relaxed max-w-[180px]">
                              Experimental playground & fun micro-tools
                            </p>
                          </div>
                        </Link>

                        <div className="w-[240px] flex flex-col gap-2">
                          {moreLinks.slice(1).map((item) => (
                            <Link 
                              key={item.name}
                              href={item.href}
                              onClick={() => setIsMoreOpen(false)}
                              className="flex items-center gap-4 p-4 bg-white/[0.03] border border-white/5 rounded-2xl hover:bg-white/[0.06] transition-all group"
                            >
                              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all">
                                <item.icon className="w-5 h-5 text-white/40 group-hover:text-black transition-colors" />
                              </div>
                              <div className="flex flex-col">
                                <span className="text-xs font-bold text-white uppercase tracking-tighter">{item.name}</span>
                                <span className="text-[10px] text-white/30">{item.sub}</span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </nav>

              <div className="flex items-center gap-2">
                <div className="h-6 w-[1px] bg-white/10 mx-2" />
                <Link 
                  href="/contact"
                  className="px-6 py-2.5 rounded-full border border-white/10 bg-white/5 text-[11px] font-bold text-white uppercase tracking-widest hover:bg-white hover:text-black transition-all"
                >
                  Book a Call
                </Link>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Actions */}
          <div className="flex-1 flex justify-end gap-2">
            <div className="mix-blend-difference flex items-center gap-2">
              <button 
                onClick={() => window.dispatchEvent(new CustomEvent("open-command-palette"))}
                className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:rotate-90 transition-all"
              >
                <CommandIcon className="w-4 h-4" />
              </button>
              
              {/* Mobile Burger Toggle */}
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/40 hover:text-white transition-all"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 bg-black z-[150] p-6 pt-32 flex flex-col gap-12 overflow-y-auto"
          >
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/20 ml-2">Navigation</span>
              <div className="flex flex-col gap-2">
                {[...mainLinks, ...moreLinks].map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-4xl font-heading font-black uppercase tracking-tighter text-white hover:text-accent-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 mt-auto pb-12">
              <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/20 ml-2">Connect</span>
              <Link 
                href="/contact"
                className="w-full py-6 rounded-3xl bg-accent-primary text-black text-center font-heading font-black uppercase tracking-widest text-lg"
              >
                Book a Call
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

