"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Camera,
  ShieldAlert,
  Smartphone,
  Coins,
  Trophy,
  Footprints,
  Brain,
  Dumbbell,
  BookOpen,
  HeartPulse,
  Target,
  Medal,
  BarChart3,
  Accessibility,
  FlaskConical,
  Gauge,
  RefreshCw,
} from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "AI Proof Verification",
    description: "Scan tasks with computer vision. Instantly confirms if you've done the work (e.g. read pages, washed dishes) before releasing time.",
    color: "text-[#3EA8FF] bg-[#3EA8FF]/10",
  },
  {
    icon: ShieldAlert,
    title: "Linked Partner Hub",
    description: "Connect a human partner (friend, parent, partner) to review evidence. Keeps you strictly honest in Medium/Hell modes.",
    color: "text-[#A8FF3E] bg-[#A8FF3E]/10",
  },
  {
    icon: Smartphone,
    title: "Smart App Blocker",
    description: "Blocks distracting social apps (TikTok, Instagram). Spend your earned screen-time seconds to unblock them temporarily.",
    color: "text-[#4ADE80] bg-[#4ADE80]/10",
  },
  {
    icon: Coins,
    title: "Financial Stakes",
    description: "Hell Mode allows locking cash bets on your habits. Fail to verify, and your money is forfeited. Succeed, and win it back.",
    color: "text-[#FB923C] bg-[#FB923C]/10",
  },
  {
    icon: Trophy,
    title: "Versus Duels",
    description: "Challenge peers to head-to-head habit races. Lock the pot and compete to complete tasks first. Winner takes the stakes.",
    color: "text-[#FBBF24] bg-[#FBBF24]/10",
  },
  {
    icon: Footprints,
    title: "Activity Sensors Sync",
    description: "Integrates with device step count sensors to track physical habits like running and gym workouts automatically.",
    color: "text-[#C084FC] bg-[#C084FC]/10",
  },
  {
    icon: Target,
    title: "Age-Tailored Goals",
    description: "Personalized onboarding provides developmentally appropriate tasks for Kids, Teens, Adults, and Seniors.",
    color: "text-[#F472B6] bg-[#F472B6]/10",
  },
  {
    icon: Dumbbell,
    title: "Manual Habit & App Selection",
    description: "Pick exactly which distracting apps to block and what positive habits to track. No generic pre-filled lists—complete control over your routine.",
    color: "text-[#2DD4BF] bg-[#2DD4BF]/10",
  },
  {
    icon: BookOpen,
    title: "Smart Motivational Alerts",
    description: "Wake up to daily 'Good Morning' challenges, get Streak protection reminders, and wind down with 9 PM Evening Wrap-ups.",
    color: "text-[#818CF8] bg-[#818CF8]/10",
  },
  {
    icon: Medal,
    title: "Achievement Badges",
    description: "Earn exclusive badges for streaks, early bird tasks, and surviving Hell Mode. Level up your profile as you stay consistent.",
    color: "text-[#FFD700] bg-[#FFD700]/10",
  },
  {
    icon: BarChart3,
    title: "Personal Analytics Dashboard",
    description: "Track your progress over time with completion charts, a GitHub-style consistency heatmap, and custom insights like your most productive hours.",
    color: "text-[#10B981] bg-[#10B981]/10",
  },
  {
    icon: Accessibility,
    title: "Full Accessibility",
    description: "Complete screen reader support with Semantics on every interactive element. Haptic feedback on actions. Reduced motion support for accessibility settings.",
    color: "text-[#06B6D4] bg-[#06B6D4]/10",
  },
  {
    icon: FlaskConical,
    title: "213 Automated Tests",
    description: "Battle-tested with 213 unit tests covering services, providers, models, and utilities. Zero-error compilation with comprehensive mock infrastructure.",
    color: "text-[#8B5CF6] bg-[#8B5CF6]/10",
  },
  {
    icon: Gauge,
    title: "Rate Limiting & DB Indexes",
    description: "Server-side rate limiting (50 verifications/day), 30+ database performance indexes, and atomic SQL transactions prevent abuse and ensure speed.",
    color: "text-[#EC4899] bg-[#EC4899]/10",
  },
  {
    icon: RefreshCw,
    title: "Pull-to-Refresh Everywhere",
    description: "Every list screen — tasks, leaderboard, achievements, profile — supports pull-to-refresh for instant data sync without app restart.",
    color: "text-[#14B8A6] bg-[#14B8A6]/10",
  },
];

export function Features() {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section id="features" className="py-24 px-6 relative bg-[#12121C]/30">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-[#1A1A2E] text-gray-300 border border-white/5 mb-4 inline-block">
            FEATURE MATRIX
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-normal mb-4">
            Engineered for <span className="gradient-text">Accountability</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            A comprehensive suite of tools built to break digital addiction and reinforce healthy habits.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onMouseMove={handleMouseMove}
              className="spotlight-card glass rounded-3xl p-8 hover:bg-[#1A1A2E] transition-all duration-300 group relative border border-white/5"
            >
              {/* Feature Icon */}
              <div className={`w-12 h-12 mb-6 rounded-2xl flex items-center justify-center ${feature.color} border border-white/5 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon size={22} />
              </div>

              {/* Title & Description */}
              <h3 className="font-display text-xl font-normal text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}