"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ShieldAlert, Zap, Lock, Eye, AlertCircle, Flame, Coins, Smartphone, Dumbbell, BookOpen, Brain } from "lucide-react";

type Mode = "normal" | "medium" | "hell";

export function DifficultyModes() {
  const [activeMode, setActiveMode] = useState<Mode>("medium");

  const modeData = {
    normal: {
      title: "Normal Mode",
      badge: "AI VERIFIED",
      tagline: "Scan tasks with your camera and let our AI instantly verify your work.",
      description: "Ideal for individuals looking for lightweight, frictionless accountability. Build positive associations with task completion.",
      colorClass: "from-[#A8FF3E]/10 to-[#4ADE80]/10 border-[#A8FF3E]/30",
      accentColor: "text-[#A8FF3E]",
      buttonClass: "bg-[#A8FF3E] hover:bg-[#96E63A] text-[#08080F] shadow-[#A8FF3E]/30",
      glowClass: "glow-easy",
      badgeClass: "bg-[#A8FF3E]/10 text-[#A8FF3E] border-[#A8FF3E]/20",
      icon: Zap,
      features: [
        "AI Camera Scan (Instantly analyzes objects in photo uploads)",
        "Time Saved Dashboard (Track total minutes blocked & earned)",
        "Full Accessibility (Screen reader support + haptic feedback)",
        "Pull-to-Refresh on all list screens"
      ]
    },
    medium: {
      title: "Medium Mode",
      badge: "AI & PARTNER VERIFIED",
      tagline: "Introduce verification. Prove you actually completed the task before receiving time.",
      description: "Perfect for teenagers, students, or partners building trust. App blocker remains strictly locked until evidence is reviewed and approved.",
      colorClass: "from-[#3EA8FF]/10 to-[#A8FF3E]/10 border-[#3EA8FF]/30",
      accentColor: "text-[#3EA8FF]",
      buttonClass: "bg-[#3EA8FF] hover:bg-[#2E9AE6] text-white shadow-[#3EA8FF]/30",
      glowClass: "glow-medium",
      badgeClass: "bg-[#3EA8FF]/10 text-[#3EA8FF] border-[#3EA8FF]/20",
      icon: ShieldAlert,
      features: [
        "Everything in Normal Mode, plus:",
        "Linked Human Partner Approval (Parent, partner, or friend)",
        "QR Code Verification (Server-side nonce, 2-min expiry)",
        "Rate-Limited Verifications (50/day abuse prevention)"
      ]
    },
    hell: {
      title: "Hell Mode",
      badge: "REAL CASH STAKES & DUELS",
      tagline: "Extreme skin in the game. Put real money on the line for your habits.",
      description: "Designed for chronic procrastinators and competitive squads. Put cash stakes on your tasks. Complete the goal, or forfeit your money.",
      colorClass: "from-[#FB923C]/10 to-[#FBBF24]/10 border-[#FB923C]/30",
      accentColor: "text-[#FB923C]",
      buttonClass: "bg-[#FB923C] hover:bg-[#F97316] text-white shadow-[#FB923C]/30",
      glowClass: "glow-hell",
      badgeClass: "bg-[#FB923C]/10 text-[#FB923C] border-[#FB923C]/20",
      icon: Flame,
      features: [
        "Atomic Stakes (Single-transaction balance deduction)",
        "Versus Duels (AI study quizzes & fitness challenges)",
        "Partner Collusion Detection (Anti-cheat trust scores)",
        "Strict anti-bypass app blocking (un-bypassable locks)"
      ]
    }
  };

  return (
    <section id="modes" className="py-24 px-6 relative bg-[#12121C]/50">
      <div className="max-w-5xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-normal mb-4">
            Pick Your <span className="gradient-text">Challenge Level</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Choose how strictly you want to enforce your habits. Toggle between levels anytime.
          </p>
        </motion.div>

        {/* Tab Controls */}
        <div className="flex justify-center p-1 rounded-2xl bg-[#12121C]/50 border border-white/5 max-w-md mx-auto mb-12">
          {(["normal", "medium", "hell"] as Mode[]).map((mode) => (
            <button
              key={mode}
              onClick={() => setActiveMode(mode)}
              className={`flex-1 py-3 text-xs md:text-sm font-extrabold rounded-xl transition-all capitalize relative ${
                activeMode === mode
                  ? "text-white"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              {activeMode === mode && (
                <motion.div
                  layoutId="activeModeBackground"
                  className={`absolute inset-0 rounded-xl bg-[#1A1A2E] ${
                    mode === "normal"
                      ? "border border-[#A8FF3E]/20"
                      : mode === "medium"
                      ? "border border-[#3EA8FF]/20"
                      : "border border-[#FB923C]/20"
                  }`}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{mode} Mode</span>
            </button>
          ))}
        </div>

        {/* Card Content Showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeMode}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className={`glass rounded-3xl p-8 md:p-12 border bg-gradient-to-br ${modeData[activeMode].colorClass} ${modeData[activeMode].glowClass} relative overflow-hidden`}
          >
            {/* Background floating icon blur */}
            <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none translate-x-12 translate-y-12 select-none">
              {activeMode === "normal" && <Zap size={400} />}
              {activeMode === "medium" && <ShieldAlert size={400} />}
              {activeMode === "hell" && <Flame size={400} />}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
              {/* Left Column (7 cols) */}
              <div className="lg:col-span-7 flex flex-col items-start text-left">
                <span className={`px-3.5 py-1 rounded-full text-[10px] font-black tracking-widest border mb-4 uppercase ${modeData[activeMode].badgeClass}`}>
                  {modeData[activeMode].badge}
                </span>
                <h3 className="font-display text-3xl md:text-4xl font-normal text-white mb-3">
                  {modeData[activeMode].title}
                </h3>
                <p className="text-gray-200 text-base font-semibold leading-relaxed mb-4">
                  {modeData[activeMode].tagline}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {modeData[activeMode].description}
                </p>

                {activeMode === "hell" && (
                  <div className="flex gap-2.5 items-center p-3 rounded-xl bg-[#FB923C]/10 border border-[#FB923C]/20 mb-6 max-w-md">
                    <AlertCircle className="text-[#FB923C] shrink-0" size={18} />
                    <span className="text-[11px] text-[#FBBF24] leading-normal">
                      <strong>WARNING:</strong> Hell Mode syncs directly with Supabase secure vaults. Cash stakes are locked in real-time.
                    </span>
                  </div>
                )}

                <a
                  href="#download"
                  className={`inline-flex items-center justify-center px-6 py-3 rounded-full font-bold text-sm transition-all shadow-md active:scale-95 ${modeData[activeMode].buttonClass}`}
                >
                  Start in {modeData[activeMode].title}
                </a>
              </div>

              {/* Right Column (5 cols) */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider block">
                  Core In-App Rules
                </span>
                <div className="flex flex-col gap-3">
                  {modeData[activeMode].features.map((feature, index) => (
                    <div key={index} className="flex gap-3 items-start">
                      <div className={`p-1 rounded-full bg-white/5 border border-white/15 mt-0.5 ${modeData[activeMode].accentColor}`}>
                        <Check size={12} />
                      </div>
                      <span className="text-xs md:text-sm text-gray-300 leading-normal">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}