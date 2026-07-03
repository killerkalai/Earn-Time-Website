"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Download } from "lucide-react";

const HeroScene = dynamic(
  () => import("@/components/three/HeroScene").then((mod) => mod.HeroScene),
  { ssr: false }
);

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#08080F]">
      {/* Background gradients - using accent color */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,255,62,0.08)_0%,transparent_70%)] z-10 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-[#A8FF3E]/10 via-transparent to-transparent pointer-events-none" />

      {/* 3D Scene */}
      <HeroScene />

      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto mt-16 md:mt-20">

        {/* Release Pill Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-black bg-[#A8FF3E]/10 text-[#A8FF3E] border border-[#A8FF3E]/20 mb-8 glow-accent"
        >
          <Sparkles size={12} className="animate-pulse" />
          <span>V1.4 IS LIVE</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#A8FF3E]" />
          <span className="text-gray-400 font-semibold uppercase tracking-wider">FULL ACCESSIBILITY, 213 TESTS & REFACTORED ARCHITECTURE</span>
        </motion.div>

        {/* Heading - using Bebas Neue like the app */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-normal mb-6 leading-[1.05] tracking-tight text-white">
            Earn <span className="gradient-text">Screen Time</span> <br />
            Through Real Tasks.
          </h1>
          <p className="text-base md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Lock distracting apps. Complete physical, mental, and habit goals to unlock your screen-time wallet. Choose your difficulty level from Normal to Hell.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#download"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#A8FF3E] hover:bg-[#96E63A] text-[#08080F] font-bold transition-all glow-accent hover:scale-[1.03] active:scale-95"
          >
            <Download size={18} />
            Get the App Free
          </a>
          <a
            href="#how-it-works"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full glass text-white font-bold hover:bg-white/10 transition-all active:scale-95 border border-white/5"
          >
            Learn How It Works
            <ArrowDown size={18} />
          </a>
        </motion.div>
      </div>

      {/* Down arrow bounce indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:block"
      >
        <a href="#how-it-works" className="p-2 inline-block rounded-full bg-[#12121C] border border-white/5 hover:bg-[#1A1A2E] transition-colors">
          <ArrowDown className="text-gray-400 animate-bounce" size={20} />
        </a>
      </motion.div>
    </section>
  );
}