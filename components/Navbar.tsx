"use client";

import { useState, useEffect } from "react";
import { Clock, Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-4 bg-[#09090b]/80 backdrop-blur-md border-b border-white/5 shadow-lg"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-violet-600 flex items-center justify-center group-hover:scale-105 transition-all glow-violet">
              <Clock className="text-white" size={18} />
            </div>
            <span className="text-xl font-black tracking-tight text-white">
              EARN<span className="gradient-text">TIME</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-sm text-gray-400 hover:text-white transition-colors">
              How It Works
            </a>
            <a href="#modes" className="text-sm text-gray-400 hover:text-white transition-colors">
              Modes
            </a>
            <a href="#demo" className="text-sm text-gray-400 hover:text-white transition-colors">
              Interactive Demo
            </a>
            <a href="#features" className="text-sm text-gray-400 hover:text-white transition-colors">
              Features
            </a>
            <a href="#testimonials" className="text-sm text-gray-400 hover:text-white transition-colors">
              Testimonials
            </a>
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <a
              href="#download"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold transition-all glow-violet hover:scale-[1.02]"
            >
              Join Waitlist
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Mobile Menu Btn */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-white focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[72px] z-40 bg-[#09090b]/95 backdrop-blur-lg border-b border-white/5 md:hidden px-6 py-8"
          >
            <nav className="flex flex-col gap-6 text-lg">
              <a
                href="#how-it-works"
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-white transition-colors"
              >
                How It Works
              </a>
              <a
                href="#modes"
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Modes
              </a>
              <a
                href="#demo"
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Interactive Demo
              </a>
              <a
                href="#features"
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Features
              </a>
              <a
                href="#testimonials"
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Testimonials
              </a>
              <a
                href="#download"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center gap-1.5 px-6 py-3.5 rounded-full bg-violet-600 text-white font-semibold glow-violet mt-4"
              >
                Join Waitlist
                <ArrowUpRight size={16} />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
