"use client";

import { motion } from "framer-motion";
import { ListChecks, Timer, Trophy, Smartphone } from "lucide-react";

const steps = [
  {
    icon: ListChecks,
    title: "Set Your Tasks",
    description: "Choose daily goals like exercise, reading, or chores.",
    color: "text-[#A8FF3E] bg-[#A8FF3E]/10",
  },
  {
    icon: Timer,
    title: "Complete & Track",
    description: "Finish tasks and watch your earned time grow.",
    color: "text-[#3EA8FF] bg-[#3EA8FF]/10",
  },
  {
    icon: Trophy,
    title: "Earn Rewards",
    description: "Unlock screen time for apps you love.",
    color: "text-[#A8FF3E] bg-[#A8FF3E]/10",
  },
  {
    icon: Smartphone,
    title: "Enjoy Balance",
    description: "Use your earned time guilt-free.",
    color: "text-[#3EA8FF] bg-[#3EA8FF]/10",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-[#08080F]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-normal mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Four simple steps to a more balanced digital life.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass rounded-2xl p-6 text-center hover:bg-white/10 transition-all group"
            >
              <div
                className={`w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center ${step.color} group-hover:scale-110 transition-transform border border-white/5`}
              >
                <step.icon size={28} />
              </div>
              <h3 className="font-display text-xl font-normal text-white mb-2">
                {step.title}
              </h3>
              <p className="text-gray-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}