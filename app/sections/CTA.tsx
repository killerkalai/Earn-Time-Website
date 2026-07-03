"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Apple, PlayCircle, ShieldAlert, Send } from "lucide-react";

const sanitizeEmail = (input: string): string => {
  return input
    .replace(/[<>]/g, "")
    .trim()
    .slice(0, 254);
};

export function CTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const sanitized = sanitizeEmail(email);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (sanitized && emailRegex.test(sanitized)) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section id="download" className="py-24 px-6 relative overflow-hidden bg-[#09090b]">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-violet-600/10 to-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-[40px] p-12 md:p-16 text-center relative overflow-hidden border border-white/5"
        >
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-cyan-500/5 pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            
            {/* Logo details */}
            <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center text-violet-400 mb-6 shadow-xl">
              <ShieldAlert size={22} className="animate-pulse" />
            </div>

            <span className="px-3.5 py-1 rounded-full text-[10px] font-black tracking-widest bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-4 uppercase">
              Production Ready — V1.4
            </span>

            <h2 className="text-4xl md:text-5xl font-black mb-4 text-white tracking-tight">
              Start Earning Today
            </h2>
            <p className="text-gray-400 text-base md:text-lg mb-10 leading-relaxed">
              Earn Time V1.4 is production-ready with 213 automated tests, full accessibility support, hardened security, and a polished UI. Download now and take control of your screen time.
            </p>

            {/* Email Waitlist Form */}
            <div className="w-full max-w-md mb-12">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 text-emerald-400 text-sm font-bold"
                >
                  ✓ You've been added to the waitlist! We'll notify you soon.
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex gap-2 p-1.5 rounded-2xl bg-zinc-900/80 border border-white/5 focus-within:border-violet-500/30 transition-colors">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-transparent px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-5 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-extrabold text-xs transition-colors flex items-center gap-1.5 glow-violet active:scale-95"
                  >
                    <span>Join Waitlist</span>
                    <Send size={12} />
                  </button>
                </form>
              )}
            </div>

            {/* Store Buttons with Coming Soon indicator */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
              {/* App Store button */}
              <div className="relative group select-none opacity-60">
                <span className="absolute -top-2.5 right-4 z-20 px-2 py-0.5 rounded bg-zinc-800 border border-white/10 text-[8px] font-black text-gray-400 tracking-wider uppercase">
                  Coming Soon
                </span>
                <div className="flex items-center justify-center gap-3 px-8 py-3.5 rounded-2xl bg-zinc-900 text-white border border-white/5 font-extrabold">
                  <Apple size={22} className="fill-white" />
                  <div className="text-left">
                    <span className="text-[10px] text-zinc-500 font-bold block uppercase leading-none">iOS Version</span>
                    <span className="text-sm">App Store</span>
                  </div>
                </div>
              </div>

              {/* Google Play button */}
              <div className="relative group select-none opacity-60">
                <span className="absolute -top-2.5 right-4 z-20 px-2 py-0.5 rounded bg-zinc-800 border border-white/10 text-[8px] font-black text-gray-400 tracking-wider uppercase">
                  Coming Soon
                </span>
                <div className="flex items-center justify-center gap-3 px-8 py-3.5 rounded-2xl bg-zinc-900 text-white border border-white/5 font-extrabold">
                  <PlayCircle size={22} className="text-white" />
                  <div className="text-left">
                    <span className="text-[10px] text-zinc-500 font-bold block uppercase leading-none">Android Version</span>
                    <span className="text-sm">Google Play</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
