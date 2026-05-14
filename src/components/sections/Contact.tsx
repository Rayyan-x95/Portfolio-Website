"use client";

import { FadeUp } from "@/components/ui/FadeUp";
import { ArrowUpRight, Camera, Briefcase, Terminal, Copy, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const socials = [
    { name: "Instagram", icon: Camera, url: "https://instagram.com/rayyan_x95" },
    { name: "LinkedIn", icon: Briefcase, url: "https://linkedin.com/in/rayyan-x95" },
    { name: "GitHub", icon: Terminal, url: "https://github.com/rayyan-x95" },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText("mmohammedrayyan0808@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("https://forms-backend.coeffx.tech/api/v1/submit/02b00925-5609-44d7-b7ba-5dce2e7e561d", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
      }
    } catch (error) {
      console.error("Submission failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center py-32 overflow-hidden bg-black">
      {/* Background Industrial Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] font-heading font-black text-white/[0.02] leading-none whitespace-nowrap italic tracking-tighter">
          TRANSMIT
        </div>
        <div className="absolute top-0 left-0 w-full h-full scanline opacity-[0.03]" />
      </div>

      <div className="container mx-auto max-w-[1400px] px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* LEFT: Communication Initiation (Form) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <FadeUp>
              <div className="mb-16">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-2 rounded-full bg-accent-primary animate-pulse shadow-[0_0_10px_rgba(0,229,255,0.5)]" />
                  <span className="text-[10px] font-mono tracking-[0.5em] text-accent-primary uppercase font-bold">
                    // CHANNEL_01: DIRECT_INPUT
                  </span>
                </div>
                <h2 className="font-heading text-6xl md:text-8xl lg:text-9xl font-black text-white uppercase tracking-tighter leading-[0.8] mb-6">
                  Ready to <br />
                  <span className="text-accent-primary">Build?</span>
                </h2>
                <p className="text-white/40 font-mono text-xs uppercase tracking-widest leading-relaxed max-w-md">
                  // Submit your project parameters below to initiate a formal consultation.
                </p>
              </div>

              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    onSubmit={handleSubmit}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    <div className="md:col-span-1 p-1 bg-white/5 border border-white/5 rounded-3xl group/field focus-within:border-accent-primary/50 transition-all duration-500">
                      <div className="p-6 bg-[#050505] rounded-[1.4rem] space-y-2">
                        <label className="text-[8px] font-mono uppercase tracking-[0.4em] text-white/20 ml-1">Identity_Full_Name</label>
                        <input 
                          required
                          type="text"
                          name="name"
                          data-cursor="type"
                          placeholder="REQUIRED_INPUT"
                          className="w-full bg-transparent text-white placeholder:text-white/5 focus:placeholder:opacity-0 transition-all outline-none font-sans text-lg md:text-xl font-medium"
                        />
                      </div>
                    </div>

                    <div className="md:col-span-1 p-1 bg-white/5 border border-white/5 rounded-3xl group/field focus-within:border-accent-primary/50 transition-all duration-500">
                      <div className="p-6 bg-[#050505] rounded-[1.4rem] space-y-2">
                        <label className="text-[8px] font-mono uppercase tracking-[0.4em] text-white/20 ml-1">Transmission_Endpoint</label>
                        <input 
                          required
                          type="email"
                          name="email"
                          data-cursor="type"
                          placeholder="EMAIL_ADDRESS"
                          className="w-full bg-transparent text-white placeholder:text-white/5 focus:placeholder:opacity-0 transition-all outline-none font-sans text-lg md:text-xl font-medium"
                        />
                      </div>
                    </div>

                    <div className="md:col-span-2 p-1 bg-white/5 border border-white/5 rounded-3xl group/field focus-within:border-accent-primary/50 transition-all duration-500">
                      <div className="p-6 bg-[#050505] rounded-[1.4rem] space-y-2">
                        <label className="text-[8px] font-mono uppercase tracking-[0.4em] text-white/20 ml-1">Payload_Specifications</label>
                        <textarea 
                          required
                          name="message"
                          data-cursor="type"
                          rows={4}
                          placeholder="DESCRIBE_PROJECT_PARAMETERS"
                          className="w-full bg-transparent text-white placeholder:text-white/5 focus:placeholder:opacity-0 transition-all outline-none font-sans text-lg md:text-xl font-medium resize-none"
                        />
                      </div>
                    </div>

                    <div className="md:col-span-2 mt-4">
                      <button 
                        type="submit"
                        disabled={isSubmitting}
                        className="group/btn relative w-full h-24 bg-white rounded-3xl overflow-hidden hover:bg-accent-primary transition-colors duration-700 disabled:opacity-50"
                      >
                        <div className="relative z-10 flex items-center justify-center gap-6">
                          <span className="font-heading text-2xl font-black text-black uppercase tracking-tighter italic">
                            {isSubmitting ? "Transmitting..." : "Initiate Transmission"}
                          </span>
                          {!isSubmitting && <ArrowUpRight className="w-8 h-8 text-black group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />}
                        </div>
                        <div className="absolute inset-0 bg-accent-primary translate-y-full group-hover/btn:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                      </button>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-12 border border-accent-primary/20 bg-accent-primary/5 rounded-[2.5rem] backdrop-blur-3xl text-center space-y-8"
                  >
                    <div className="w-20 h-20 rounded-full bg-accent-primary flex items-center justify-center mx-auto shadow-[0_0_40px_rgba(0,229,255,0.3)]">
                      <Check className="w-10 h-10 text-black" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-3xl font-heading font-black text-white uppercase italic tracking-tighter">Transmission Successful</h3>
                      <p className="text-accent-primary font-mono text-[10px] uppercase tracking-[0.3em]">Status: Packet_Delivered // Check_Logs: 200_OK</p>
                    </div>
                    <button 
                      onClick={() => setIsSuccess(false)}
                      className="px-8 py-4 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono text-white/40 hover:text-white hover:bg-white/10 transition-all uppercase tracking-widest"
                    >
                      // Send_New_Packet
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </FadeUp>
          </div>

          {/* RIGHT: Protocol Details & Socials */}
          <div className="lg:col-span-5 flex flex-col justify-between py-12 lg:py-24">
            <FadeUp delay={0.2}>
              {/* Status Panel */}
              <div className="bg-[#080808] border border-white/5 rounded-[2.5rem] p-10 mb-12 relative overflow-hidden group/status">
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse" />
                  <span className="text-[8px] font-mono text-white/20 uppercase tracking-widest">LIVE_CONNECTION</span>
                </div>
                
                <h3 className="font-mono text-[10px] text-white/30 uppercase tracking-[0.4em] mb-10 block">
                  // SYSTEM_DIAGNOSTICS
                </h3>

                <div className="space-y-6">
                  {[
                    { label: "AVAILABILITY", value: "Q2_OPEN", color: "text-accent-primary" },
                    { label: "LOCATION", value: "CHENNAI, IN", color: "text-white" },
                    { label: "TIMEZONE", value: "GMT +5:30", color: "text-white/60" },
                    { label: "CURRENT_MODE", value: "ARCHITECTING", color: "text-accent-secondary" }
                  ].map((stat) => (
                    <div key={stat.label} className="flex items-end justify-between border-b border-white/5 pb-4 group/item">
                      <span className="text-[9px] font-mono text-white/20 uppercase tracking-[0.3em]">{stat.label}</span>
                      <span className={`text-xs font-mono font-bold uppercase tracking-widest ${stat.color} group-hover/item:translate-x-[-4px] transition-transform`}>{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Grid */}
              <div className="grid grid-cols-2 gap-4">
                {socials.map((social) => (
                  <a 
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col gap-8 p-8 bg-[#080808] border border-white/5 rounded-3xl hover:border-accent-primary transition-all duration-500 group/soc"
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover/soc:bg-accent-primary group-hover/soc:text-black transition-all">
                        <social.icon className="w-5 h-5" />
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-white/10 group-hover/soc:text-white transition-colors" />
                    </div>
                    <div>
                      <span className="text-[8px] font-mono text-white/20 uppercase tracking-[0.4em] block mb-2">Endpoint_0x</span>
                      <span className="font-heading text-lg font-black text-white uppercase tracking-tighter italic">{social.name}</span>
                    </div>
                  </a>
                ))}
              </div>
            </FadeUp>
          </div>

        </div>
      </div>
    </section>
  );
}
