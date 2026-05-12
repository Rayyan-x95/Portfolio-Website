"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  Home, 
  User, 
  Briefcase, 
  FileText, 
  FlaskConical, 
  Link2, 
  Monitor, 
  MessageCircle,
  Command as CommandIcon,
  X
} from "lucide-react";
import { useRouter } from "next/navigation";

const actions = [
  { name: "Go to Home", href: "/", icon: Home, shortcut: "H" },
  { name: "About Me", href: "/about", icon: User, shortcut: "A" },
  { name: "View Work", href: "/work", icon: Briefcase, shortcut: "W" },
  { name: "Read Blogs", href: "/blogs", icon: FileText, shortcut: "B" },
  { name: "Experiments (Labs)", href: "/labs", icon: FlaskConical, shortcut: "L" },
  { name: "Quick Links", href: "/links", icon: Link2, shortcut: "Q" },
  { name: "Hardware & Software", href: "/uses", icon: Monitor, shortcut: "U" },
  { name: "Sign Guestbook", href: "/guestbook", icon: MessageCircle, shortcut: "G" },
];

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
      
      if (isOpen) {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          setSelectedIndex((prev) => (prev + 1) % filteredActions.length);
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          setSelectedIndex((prev) => (prev - 1 + filteredActions.length) % filteredActions.length);
        } else if (e.key === "Enter") {
          e.preventDefault();
          handleAction(filteredActions[selectedIndex]);
        } else if (e.key === "Escape") {
          setIsOpen(false);
        }
      }
    };

    const openPalette = () => setIsOpen(true);
    window.addEventListener("open-command-palette", openPalette);

    document.addEventListener("keydown", down);
    return () => {
      document.removeEventListener("keydown", down);
      window.removeEventListener("open-command-palette", openPalette);
    };
  }, [isOpen, selectedIndex]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      setSearch("");
      setSelectedIndex(0);
    }
  }, [isOpen]);

  const filteredActions = actions.filter((action) =>
    action.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleAction = (action: typeof actions[0]) => {
    router.push(action.href);
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-[200]"
          />

          {/* Dialog */}
          <div className="fixed inset-0 z-[201] flex items-start justify-center pt-[15vh] px-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-2xl bg-[#0A0A0A] border border-white/10 rounded-3xl shadow-2xl overflow-hidden pointer-events-auto"
            >
              {/* Search Header */}
              <div className="flex items-center gap-4 px-6 py-5 border-b border-white/5">
                <Search className="w-5 h-5 text-white/20" />
                <input
                  ref={inputRef}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Type a command or search..."
                  className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-white/20 text-lg font-light"
                />
                <div className="flex items-center gap-1.5 px-2 py-1 bg-white/5 rounded-md border border-white/10">
                  <span className="text-[10px] font-mono text-white/40 uppercase">ESC</span>
                </div>
              </div>

              {/* Actions List */}
              <div className="p-2 max-h-[60vh] overflow-y-auto">
                {filteredActions.length > 0 ? (
                  <div className="space-y-1">
                    {filteredActions.map((action, index) => {
                      const Icon = action.icon;
                      const isSelected = index === selectedIndex;
                      return (
                        <button
                          key={action.name}
                          onClick={() => handleAction(action)}
                          onMouseEnter={() => setSelectedIndex(index)}
                          className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all duration-200 group ${
                            isSelected ? "bg-white/10" : "hover:bg-white/5"
                          }`}
                        >
                          <div className="flex items-center gap-4">
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                              isSelected ? "bg-accent-primary text-black" : "bg-white/5 text-white/40"
                            }`}>
                              <Icon className="w-5 h-5" />
                            </div>
                            <span className={`text-sm font-bold uppercase tracking-tight transition-colors ${
                              isSelected ? "text-white" : "text-white/60"
                            }`}>
                              {action.name}
                            </span>
                          </div>
                          {action.shortcut && (
                            <div className="flex items-center gap-1">
                              <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest group-hover:text-white/40 transition-colors">
                                {action.shortcut}
                              </span>
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                ) : (
                  <div className="py-12 text-center">
                    <p className="text-white/20 font-mono text-xs uppercase tracking-widest">No results found for "{search}"</p>
                  </div>
                )}
              </div>

              {/* Footer Meta */}
              <div className="px-6 py-4 bg-white/[0.02] border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-4 text-[9px] font-mono text-white/20 uppercase tracking-widest">
                  <div className="flex items-center gap-1.5">
                    <span className="px-1.5 py-0.5 bg-white/5 rounded border border-white/10 text-white/40">↑↓</span>
                    Navigate
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="px-1.5 py-0.5 bg-white/5 rounded border border-white/10 text-white/40">ENTER</span>
                    Select
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[9px] font-mono text-white/20 uppercase tracking-widest">
                  <CommandIcon className="w-3 h-3" />
                  K to toggle
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
