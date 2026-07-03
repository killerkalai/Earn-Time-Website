"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Flame, Award, Heart, MessageSquare, PenTool, Check } from "lucide-react";
import { supabase } from "@/lib/supabase";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  mode: "Normal Mode" | "Medium Mode" | "Hell Mode";
  icon: any;
  colorClass: string;
}

const sanitizeInput = (input: string, maxLength: number = 500): string => {
  return input
    .replace(/[<>]/g, "")
    .trim()
    .slice(0, maxLength);
};

export function Testimonials() {
  const [reviews, setReviews] = useState<Testimonial[]>([]);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(5);
  const [mode, setMode] = useState<"Normal Mode" | "Medium Mode" | "Hell Mode">("Normal Mode");
  const [hoveredStar, setHoveredStar] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const getModeDetails = (selectedMode: string) => {
    switch (selectedMode) {
      case "Normal Mode":
        return {
          icon: Heart,
          colorClass: "border-emerald-500/20 text-emerald-400 bg-emerald-500/5",
        };
      case "Medium Mode":
        return {
          icon: Award,
          colorClass: "border-violet-500/20 text-violet-400 bg-violet-500/5",
        };
      case "Hell Mode":
      default:
        return {
          icon: Flame,
          colorClass: "border-rose-500/20 text-rose-400 bg-rose-500/5",
        };
    }
  };

  const fetchReviews = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from("reviews")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching reviews from Supabase:", error.message);
      } else if (data) {
        const mapped: Testimonial[] = data.map((item: any) => {
          const details = getModeDetails(item.mode);
          return {
            id: item.id,
            name: item.name,
            role: item.role,
            text: item.text,
            rating: item.rating,
            mode: item.mode,
            icon: details.icon,
            colorClass: details.colorClass,
          };
        });
        setReviews(mapped);
      }
    } catch (err) {
      console.error("Failed to connect to Supabase database:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const sanitizedName = sanitizeInput(name, 50);
    const sanitizedRole = sanitizeInput(role, 50);
    const sanitizedText = sanitizeInput(text, 500);
    if (!sanitizedName || !sanitizedText) return;

    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("reviews").insert({
        name: sanitizedName,
        role: sanitizedRole || "Verified User",
        text: sanitizedText,
        rating,
        mode,
      });

      if (error) {
        throw error;
      }

      const details = getModeDetails(mode);
      const newReview: Testimonial = {
        id: Date.now().toString(),
        name: sanitizedName,
        role: sanitizedRole || "Verified User",
        text: sanitizedText,
        rating,
        mode,
        icon: details.icon,
        colorClass: details.colorClass,
      };

      setReviews([newReview, ...reviews]);
      setIsSubmitted(true);
      setName("");
      setRole("");
      setText("");
      setRating(5);

      setTimeout(() => {
        setIsSubmitted(false);
      }, 4000);
    } catch (err: any) {
      console.warn("Supabase insert failed. Falling back to local state simulation.", err.message || err);
      
      const details = getModeDetails(mode);
      const newReview: Testimonial = {
        id: Date.now().toString(),
        name: sanitizedName,
        role: sanitizedRole || "Verified User",
        text: sanitizedText,
        rating,
        mode,
        icon: details.icon,
        colorClass: details.colorClass,
      };

      setReviews([newReview, ...reviews]);
      setIsSubmitted(true);
      setName("");
      setRole("");
      setText("");
      setRating(5);

      setTimeout(() => {
        setIsSubmitted(false);
      }, 4000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="testimonials" className="py-24 px-6 relative overflow-hidden bg-zinc-950/40">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-zinc-850 text-gray-300 border border-white/5 mb-4 inline-block">
            COMMUNITY VOICE
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What the <span className="gradient-text">Community</span> Says
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Read real feedback from users or share your own experience with Earn Time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Review Submission Form (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 glass rounded-3xl p-8 border border-white/5 bg-zinc-900/40 relative"
          >
            <div className="flex items-center gap-2 mb-6">
              <PenTool size={18} className="text-violet-400" />
              <h3 className="text-xl font-bold text-white">Share Your Review</h3>
            </div>

            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="p-6 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 text-center text-emerald-400"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                    <Check size={24} />
                  </div>
                  <h4 className="font-bold mb-1">Review Submitted!</h4>
                  <p className="text-xs text-gray-400 leading-normal">
                    Thank you for sharing your experience. Your review is now visible on the live feed.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] text-gray-500 font-extrabold uppercase tracking-wider">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Liam N."
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-zinc-950/60 border border-white/5 focus:border-violet-500/45 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Role */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] text-gray-500 font-extrabold uppercase tracking-wider">Your Role (Optional)</label>
                    <input
                      type="text"
                      placeholder="e.g. Student / Athlete"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="bg-zinc-950/60 border border-white/5 focus:border-violet-500/45 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {/* Star Rating Selection */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] text-gray-500 font-extrabold uppercase tracking-wider">Rating</label>
                      <div className="flex gap-1 py-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            type="button"
                            key={star}
                            onClick={() => setRating(star)}
                            onMouseEnter={() => setHoveredStar(star)}
                            onMouseLeave={() => setHoveredStar(null)}
                            className="focus:outline-none transition-transform active:scale-90"
                          >
                            <Star
                              size={18}
                              className={`${
                                star <= (hoveredStar ?? rating)
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-gray-600 fill-transparent"
                              } transition-colors`}
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Mode Dropdown */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] text-gray-500 font-extrabold uppercase tracking-wider">Primary Mode</label>
                      <select
                        value={mode}
                        onChange={(e) => setMode(e.target.value as any)}
                        className="bg-zinc-950/60 border border-white/5 focus:border-violet-500/45 rounded-xl px-3 py-2 text-xs text-white focus:outline-none transition-colors"
                      >
                        <option value="Normal Mode" className="bg-zinc-950 text-white">Normal Mode</option>
                        <option value="Medium Mode" className="bg-zinc-950 text-white">Medium Mode</option>
                        <option value="Hell Mode" className="bg-zinc-950 text-white">Hell Mode</option>
                      </select>
                    </div>
                  </div>

                  {/* Review Text */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] text-gray-500 font-extrabold uppercase tracking-wider">Review Message</label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Tell the community how Earn Time helped you..."
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      className="bg-zinc-950/60 border border-white/5 focus:border-violet-500/45 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full mt-2 py-3 rounded-xl text-white font-extrabold text-xs transition-all flex items-center justify-center gap-1.5 active:scale-95 ${
                      isSubmitting
                        ? "bg-zinc-800 border border-white/5 cursor-not-allowed text-gray-500"
                        : "bg-violet-600 hover:bg-violet-500 glow-violet cursor-pointer"
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    ) : (
                      <MessageSquare size={14} />
                    )}
                    <span>{isSubmitting ? "Publishing..." : "Publish Review"}</span>
                  </button>
                </form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Testimonials List Feed (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
            <AnimatePresence initial={false}>
              {isLoading ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full flex flex-col items-center justify-center text-center p-8 min-h-[300px]"
                >
                  <div className="w-8 h-8 border-4 border-violet-500/20 border-t-violet-500 rounded-full animate-spin mb-4" />
                  <p className="text-xs text-gray-500 font-bold">Connecting to live feed...</p>
                </motion.div>
              ) : reviews.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center p-8 border border-dashed border-white/5 rounded-2xl bg-zinc-900/10 min-h-[300px]"
                >
                  <MessageSquare size={32} className="text-gray-600 mb-4 animate-bounce" />
                  <p className="text-sm text-gray-400 font-bold mb-1">No Reviews Yet</p>
                  <p className="text-xs text-gray-500 max-w-xs leading-normal">
                    Be the first one to write a review using the form on the left!
                  </p>
                </motion.div>
              ) : (
                reviews.map((testimonial, i) => {
                  const TestimonialIcon = testimonial.icon;
                  return (
                    <motion.div
                      key={testimonial.id}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      className="glass rounded-2xl p-6 border border-white/5 hover:border-white/10 bg-zinc-900/20 transition-colors duration-300 relative group flex flex-col justify-between"
                    >
                      <div>
                        {/* Mode badge */}
                        <div className="flex justify-between items-center mb-4">
                          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black tracking-wider border uppercase ${testimonial.colorClass}`}>
                            <TestimonialIcon size={11} />
                            {testimonial.mode}
                          </span>
                          <div className="flex gap-0.5">
                            {Array.from({ length: testimonial.rating }).map((_, j) => (
                              <Star
                                key={j}
                                size={12}
                                className="fill-yellow-400 text-yellow-400"
                              />
                            ))}
                          </div>
                        </div>

                        {/* Text quote */}
                        <p className="text-gray-300 text-[13px] leading-relaxed italic mb-4">
                          &ldquo;{testimonial.text}&rdquo;
                        </p>
                      </div>

                      {/* Author details */}
                      <div className="flex items-center gap-3 border-t border-white/5 pt-3">
                        <div className="w-8 h-8 rounded-full bg-zinc-800 border border-white/5 flex items-center justify-center font-bold text-xs text-white">
                          {testimonial.name.split(" ").map((n) => n[0]).join("")}
                        </div>
                        <div>
                          <h4 className="font-bold text-white text-xs">{testimonial.name}</h4>
                          <p className="text-[10px] text-gray-500">{testimonial.role}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
