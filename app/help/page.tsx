"use client";

import { motion } from "framer-motion";
import { HelpCircle, BookOpen, MessageSquare, ShieldAlert, ArrowLeft, Smartphone, ShieldCheck, Heart } from "lucide-react";

const faqs = [
  {
    category: "General",
    icon: HelpCircle,
    questions: [
      {
        q: "What is Earn Time?",
        a: "Earn Time is a digital wellness and accountability app that helps you control your screen time. Distracting apps are locked by default, and you must earn 'screen time currency' by completing real-world tasks like exercise, studying, or healthy habits.",
      },
      {
        q: "How does the app track my tasks?",
        a: "Earn Time integrates with on-device sensors (e.g., pedometer for walking/steps) and advanced AI vision verification to confirm task completions. For partner-verified tasks, your designated partner approves your submission.",
      },
    ],
  },
  {
    category: "Modes & Difficulty",
    icon: ShieldCheck,
    questions: [
      {
        q: "What are the different difficulty modes?",
        a: "We offer Normal, Medium, and Hell Mode. In Normal Mode, you can self-verify your tasks. In Medium Mode, tasks are verified by AI or your partner. In Hell Mode, you commit real money stakes; if you fail your tasks, the stakes go to a global pool distributed weekly to top performers.",
      },
      {
        q: "Can I bypass or disable the blocker?",
        a: "No. Earn Time is built to be unbypassable. Standard device settings are locked during active sessions to ensure accountability. If you are in Hell Mode, bypassing is strictly prevented by RLS protocols and smart locks.",
      },
    ],
  },
  {
    category: "Account & Partners",
    icon: MessageSquare,
    questions: [
      {
        q: "How do I add an Accountability Partner?",
        a: "Go to the Tasks or Profile screen, tap 'Create Custom Task' or 'Add Partner', and share your unique invite code. Your partner can scan the QR code or enter the code to link your accounts.",
      },
      {
        q: "How does partner verification work?",
        a: "When you complete a task, your partner receives a real-time notification with your video or photo proof. They can review and approve it, which atomically credits screen time or XP to your account.",
      },
    ],
  },
];

export default function HelpCenter() {
  return (
    <div className="min-h-screen bg-[#09090b] text-white pt-32 pb-24 px-6 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-violet-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] rounded-full bg-pink-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
            Back to Home
          </a>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left mb-16"
        >
          <h1 className="font-display text-4xl md:text-6xl font-normal mb-4">
            Help <span className="gradient-text">Center</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl">
            Everything you need to know about Earn Time. Find FAQs, setup guides, and troubleshooting tips.
          </p>
        </motion.div>

        {/* Quick Help Guides */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass rounded-2xl p-6 border border-white/5 hover:bg-white/5 transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-violet-600/10 border border-violet-500/20 flex items-center justify-center text-violet-400 mb-4 group-hover:scale-105 transition-all">
              <Smartphone size={24} />
            </div>
            <h3 className="text-lg font-bold mb-2">Getting Started</h3>
            <p className="text-sm text-gray-400">Learn how to download the app, configure permissions, and setup your first screen time limit.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass rounded-2xl p-6 border border-white/5 hover:bg-white/5 transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-violet-600/10 border border-violet-500/20 flex items-center justify-center text-violet-400 mb-4 group-hover:scale-105 transition-all">
              <ShieldAlert size={24} />
            </div>
            <h3 className="text-lg font-bold mb-2">Hell Mode & Stakes</h3>
            <p className="text-sm text-gray-400">Understand financial staking rules, reliability scores, and weekly pool distributions.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass rounded-2xl p-6 border border-white/5 hover:bg-white/5 transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-violet-600/10 border border-violet-500/20 flex items-center justify-center text-violet-400 mb-4 group-hover:scale-105 transition-all">
              <BookOpen size={24} />
            </div>
            <h3 className="text-lg font-bold mb-2">AI & Partner Review</h3>
            <p className="text-sm text-gray-400">How to capture valid proof and troubleshoot verification delays or rejections.</p>
          </motion.div>
        </div>

        {/* FAQs */}
        <div className="space-y-12">
          <h2 className="font-display text-2xl md:text-3xl font-normal border-b border-white/10 pb-4">
            Frequently Asked Questions
          </h2>

          {faqs.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 text-violet-400">
                <cat.icon size={20} />
                <h3 className="text-lg font-bold tracking-wide uppercase">{cat.category}</h3>
              </div>

              <div className="space-y-6">
                {cat.questions.map((faq) => (
                  <div key={faq.q} className="glass rounded-2xl p-6 border border-white/5">
                    <h4 className="font-bold text-white mb-2 text-base md:text-lg">{faq.q}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact/Support Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 rounded-3xl bg-gradient-to-r from-violet-900/20 to-pink-900/10 border border-violet-500/10 text-center"
        >
          <Heart className="mx-auto mb-4 text-violet-400 animate-pulse" size={32} />
          <h3 className="text-xl font-bold mb-2">Still need help?</h3>
          <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">
            Our support team is always available to help you with account issues, bug reports, or feature requests.
          </p>
          <a
            href="mailto:nobodyai.contact@gmail.com?subject=EarnTime%20Support%20Request"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-semibold transition-all shadow-lg shadow-violet-500/20 hover:scale-[1.02]"
          >
            Contact Support
          </a>
        </motion.div>
      </div>
    </div>
  );
}
