"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Wallet, Camera, ShieldAlert, Sparkles, Smartphone, 
  Trophy, Play, CheckCircle, RefreshCw, Flame, Coins, Users
} from "lucide-react";

const InstagramIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

type TabType = "wallet" | "proof" | "stakes" | "redeem" | "partner";

const relationshipTypes = [
  { value: "friend", label: "Friend", emoji: "👋" },
  { value: "gym_buddy", label: "Gym Buddy", emoji: "🏋️" },
  { value: "family", label: "Family", emoji: "👨‍👩‍👧" },
  { value: "lover", label: "Lover", emoji: "❤️" },
  { value: "colleague", label: "Colleague", emoji: "💼" },
  { value: "study_buddy", label: "Study Buddy", emoji: "📚" },
  { value: "roommate", label: "Roommate", emoji: "🏠" },
];

export function AppDemo() {
  const [activeTab, setActiveTab] = useState<TabType>("wallet");

  // Partner State
  const [relationType, setRelationType] = useState("friend");
  const selectedRelation = relationshipTypes.find((r) => r.value === relationType) || relationshipTypes[0];

  // Wallet State
  const [timeSeconds, setTimeSeconds] = useState(9912); // 02:45:12
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (totalSecs: number) => {
    const hrs = Math.floor(totalSecs / 3600);
    const mins = Math.floor((totalSecs % 3600) / 60);
    const secs = totalSecs % 60;
    return `${hrs.toString().padStart(2, "0")}h ${mins.toString().padStart(2, "0")}m ${secs.toString().padStart(2, "0")}s`;
  };

  // AI Scan State
  const [scanState, setScanState] = useState<"idle" | "scanning" | "done">("idle");
  const startScan = () => {
    setScanState("scanning");
    setTimeout(() => {
      setScanState("done");
    }, 3000);
  };
  const resetScan = () => {
    setScanState("idle");
  };

  // Stakes State
  const [stakeJoined, setStakeJoined] = useState(false);
  const [duelStatus, setDuelStatus] = useState<"idle" | "accepted">("idle");

  // Redeem State
  const [tiktokTime, setTiktokTime] = useState(0);
  const [tiktokActive, setTiktokActive] = useState(false);
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (tiktokActive && tiktokTime > 0) {
      timer = setInterval(() => {
        setTiktokTime((prev) => {
          if (prev <= 1) {
            setTiktokActive(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [tiktokActive, tiktokTime]);

  const redeemTiktok = () => {
    if (timeSeconds >= 900) { // 15 mins
      setTimeSeconds((prev) => prev - 900);
      setTiktokTime(900);
      setTiktokActive(true);
    }
  };

  return (
    <section id="demo" className="py-24 px-6 relative overflow-hidden bg-grid-pattern">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-6xl mx-auto">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-violet-500/10 text-violet-400 border border-violet-500/20 mb-4 inline-block">
            LIVE SIMULATOR
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            See the App in <span className="gradient-text">Action</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Interact with our virtual device to see how Earn Time helps users manage tasks, confirm proof via AI, and unlock rewards.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Controls - Left (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4 order-2 lg:order-1">
            <button
              onClick={() => setActiveTab("wallet")}
              className={`p-6 rounded-2xl border text-left transition-all duration-300 ${
                activeTab === "wallet"
                  ? "bg-violet-900/20 border-violet-500/50 glow-violet"
                  : "bg-white/5 border-white/5 hover:border-white/10"
              }`}
            >
              <div className="flex gap-4 items-center mb-2">
                <div className={`p-2.5 rounded-xl ${activeTab === "wallet" ? "bg-violet-600 text-white" : "bg-white/5 text-gray-400"}`}>
                  <Wallet size={20} />
                </div>
                <h3 className="text-lg font-bold text-white">1. Screen-Time Wallet</h3>
              </div>
              <p className="text-sm text-gray-400 pl-14">
                Watch your time accumulate as you finish goals. Live stream update keeps track of your exact seconds.
              </p>
            </button>

            <button
              onClick={() => setActiveTab("proof")}
              className={`p-6 rounded-2xl border text-left transition-all duration-300 ${
                activeTab === "proof"
                  ? "bg-cyan-950/20 border-cyan-500/50 glow-cyan"
                  : "bg-white/5 border-white/5 hover:border-white/10"
              }`}
            >
              <div className="flex gap-4 items-center mb-2">
                <div className={`p-2.5 rounded-xl ${activeTab === "proof" ? "bg-cyan-500 text-black" : "bg-white/5 text-gray-400"}`}>
                  <Camera size={20} />
                </div>
                <h3 className="text-lg font-bold text-white">2. AI Task Verification</h3>
              </div>
              <p className="text-sm text-gray-400 pl-14">
                Upload image proof of your goals. Our built-in AI scanner immediately verifies the activity and unlocks your time.
              </p>
            </button>

            <button
              onClick={() => setActiveTab("stakes")}
              className={`p-6 rounded-2xl border text-left transition-all duration-300 ${
                activeTab === "stakes"
                  ? "bg-rose-950/20 border-rose-500/50 glow-rose"
                  : "bg-white/5 border-white/5 hover:border-white/10"
              }`}
            >
              <div className="flex gap-4 items-center mb-2">
                <div className={`p-2.5 rounded-xl ${activeTab === "stakes" ? "bg-rose-500 text-white" : "bg-white/5 text-gray-400"}`}>
                  <Trophy size={20} />
                </div>
                <h3 className="text-lg font-bold text-white">3. Hell Mode Stakes & Duels</h3>
              </div>
              <p className="text-sm text-gray-400 pl-14">
                Put real stakes on your habits. Challenge friends to duels. If you complete your tasks, you get paid. If not, you forfeit the stake.
              </p>
            </button>

            <button
              onClick={() => setActiveTab("redeem")}
              className={`p-6 rounded-2xl border text-left transition-all duration-300 ${
                activeTab === "redeem"
                  ? "bg-violet-900/20 border-violet-500/50 glow-violet"
                  : "bg-white/5 border-white/5 hover:border-white/10"
              }`}
            >
              <div className="flex gap-4 items-center mb-2">
                <div className={`p-2.5 rounded-xl ${activeTab === "redeem" ? "bg-violet-500 text-white" : "bg-white/5 text-gray-400"}`}>
                  <Smartphone size={20} />
                </div>
                <h3 className="text-lg font-bold text-white">4. Smart Blocker & Payout</h3>
              </div>
              <p className="text-sm text-gray-400 pl-14">
                Spend your earned wallet time to unlock locked social apps. Once the timer runs out, the app is blocked automatically.
              </p>
            </button>

            <button
              onClick={() => setActiveTab("partner")}
              className={`p-6 rounded-2xl border text-left transition-all duration-300 ${
                activeTab === "partner"
                  ? "bg-emerald-950/20 border-emerald-500/50 glow-emerald"
                  : "bg-white/5 border-white/5 hover:border-white/10"
              }`}
            >
              <div className="flex gap-4 items-center mb-2">
                <div className={`p-2.5 rounded-xl ${activeTab === "partner" ? "bg-emerald-500 text-black" : "bg-white/5 text-gray-400"}`}>
                  <Users size={20} />
                </div>
                <h3 className="text-lg font-bold text-white">5. Accountable Partner Hub</h3>
              </div>
              <p className="text-sm text-gray-400 pl-14">
                Connect and customize your relationship with your gym buddy, family, lover, or friend. Track their streak and active status in real-time.
              </p>
            </button>
          </div>

          {/* Smartphone Showcase - Right (7 cols) */}
          <div className="lg:col-span-7 flex justify-center order-1 lg:order-2">
            <div className="relative w-[340px] h-[680px] bg-[#0c0c0e] rounded-[50px] border-[10px] border-zinc-800 shadow-2xl overflow-hidden flex flex-col">
              {/* Speaker & Camera notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-zinc-800 rounded-b-2xl z-30 flex items-center justify-center">
                <div className="w-16 h-1 bg-zinc-950 rounded-full mb-2" />
              </div>

              {/* Internal Screen Content */}
              <div className="flex-1 flex flex-col p-4 pt-8 bg-[#09090b]">
                {/* Header */}
                <div className="flex justify-between items-center mb-4 mt-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Sync Active</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Flame size={12} className="text-orange-500 fill-orange-500" />
                    <span className="text-xs font-bold text-white">7 Day Streak</span>
                  </div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 overflow-y-auto pr-0.5 custom-scrollbar">
                  <AnimatePresence mode="wait">
                    {/* 1. WALLET SCREEN */}
                    {activeTab === "wallet" && (
                      <motion.div
                        key="wallet"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="flex flex-col gap-4"
                      >
                        {/* Time Card */}
                        <div className="glass rounded-3xl p-5 border-violet-500/20 text-center relative overflow-hidden">
                          <div className="absolute -top-12 -left-12 w-24 h-24 bg-violet-600/10 rounded-full blur-xl" />
                          <span className="text-[10px] text-violet-400 font-black tracking-widest uppercase">Time Balance</span>
                          <h4 className="text-3xl font-black text-white my-2 tabular-nums">
                            {formatTime(timeSeconds)}
                          </h4>
                          <p className="text-[11px] text-gray-500">Accumulated from 3 completed tasks today</p>
                        </div>

                        {/* Mode Card */}
                        <div className="bg-zinc-900/60 rounded-2xl p-4 border border-white/5">
                          <span className="text-[10px] text-gray-500 font-bold uppercase block mb-2">Active Challenge Level</span>
                          <div className="flex gap-2 justify-between">
                            <div className="flex-1 py-2 rounded-lg bg-emerald-950/20 border border-emerald-500/20 text-center">
                              <span className="text-xs font-bold text-emerald-400 block">Easy</span>
                              <span className="text-[8px] text-gray-500 block">Direct API</span>
                            </div>
                            <div className="flex-1 py-2 rounded-lg bg-violet-600 text-center border border-violet-500/50 scale-[1.05]">
                              <span className="text-xs font-bold text-white block">Medium</span>
                              <span className="text-[8px] text-violet-200 block">AI Verified</span>
                            </div>
                            <div className="flex-1 py-2 rounded-lg bg-zinc-900 border border-white/5 text-center">
                              <span className="text-xs font-bold text-gray-400 block">Hell</span>
                              <span className="text-[8px] text-gray-600 block">$ Stakes</span>
                            </div>
                          </div>
                        </div>

                        {/* Quick tasks */}
                        <div>
                          <span className="text-[10px] text-gray-500 font-bold uppercase block mb-2">Today's Habits</span>
                          <div className="flex flex-col gap-2">
                            <div className="flex justify-between items-center p-3 bg-zinc-900/40 border border-white/5 rounded-xl">
                              <div className="flex items-center gap-2">
                                <span className="text-lg">🏃</span>
                                <div>
                                  <span className="text-xs font-bold text-white block">10k Steps Goal</span>
                                  <span className="text-[8px] text-emerald-400 font-semibold">Done</span>
                                </div>
                              </div>
                              <span className="text-xs font-extrabold text-violet-400">+45m</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-zinc-900/40 border border-white/5 rounded-xl">
                              <div className="flex items-center gap-2">
                                <span className="text-lg">📚</span>
                                <div>
                                  <span className="text-xs font-bold text-white block">Read 15 Pages</span>
                                  <span className="text-[8px] text-emerald-400 font-semibold">Done</span>
                                </div>
                              </div>
                              <span className="text-xs font-extrabold text-violet-400">+30m</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-zinc-900/40 border border-white/5 rounded-xl opacity-60">
                              <div className="flex items-center gap-2">
                                <span className="text-lg">🧘</span>
                                <div>
                                  <span className="text-xs font-bold text-white block">Meditation</span>
                                  <span className="text-[8px] text-orange-400 font-semibold">Pending</span>
                                </div>
                              </div>
                              <span className="text-xs font-extrabold text-gray-500">+15m</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* 2. PROOF SCREEN */}
                    {activeTab === "proof" && (
                      <motion.div
                        key="proof"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="flex flex-col gap-4"
                      >
                        <div className="text-center">
                          <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-wider">Verification Desk</span>
                          <h4 className="text-base font-bold text-white mt-1">Submit Task Proof</h4>
                        </div>

                        {scanState === "idle" && (
                          <div className="border border-dashed border-zinc-700 bg-zinc-900/30 rounded-2xl p-6 text-center flex flex-col items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                              <Camera size={24} />
                            </div>
                            <div>
                              <span className="text-xs font-bold text-white block">Upload Habit Photo</span>
                              <span className="text-[9px] text-gray-500 block">Take a photo of your activity (e.g. gym, book)</span>
                            </div>
                            <button
                              onClick={startScan}
                              className="px-4 py-2 rounded-lg bg-cyan-500 text-black text-xs font-bold hover:bg-cyan-400 transition-colors"
                            >
                              Scan Test Image
                            </button>
                          </div>
                        )}

                        {scanState === "scanning" && (
                          <div className="relative border border-cyan-500/30 bg-zinc-950 rounded-2xl p-4 overflow-hidden min-h-[160px] flex flex-col justify-center items-center">
                            {/* Scanning Line */}
                            <div className="absolute left-0 right-0 h-0.5 bg-cyan-400 shadow-md shadow-cyan-400/50 animate-scan" />
                            <RefreshCw size={24} className="text-cyan-400 animate-spin mb-3" />
                            <span className="text-xs font-bold text-white block">AI Partner Scanning...</span>
                            <span className="text-[9px] text-cyan-400 font-bold mt-1 tracking-wider uppercase">Evaluating object features</span>
                          </div>
                        )}

                        {scanState === "done" && (
                          <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="bg-emerald-950/20 border border-emerald-500/30 rounded-2xl p-5 text-center flex flex-col items-center gap-3"
                          >
                            <CheckCircle size={36} className="text-emerald-400 fill-emerald-950/50" />
                            <div>
                              <h5 className="text-sm font-bold text-white">AI Verification Approved</h5>
                              <p className="text-[10px] text-gray-400 mt-1">Confirmed: "Read book page / Math practice"</p>
                              <p className="text-[9px] text-emerald-400 font-black mt-2 tracking-wide uppercase">+30 Minutes Added to Wallet</p>
                            </div>
                            <button
                              onClick={resetScan}
                              className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-white/5 text-[10px] text-gray-300 font-bold hover:text-white"
                            >
                              Scan Another
                            </button>
                          </motion.div>
                        )}
                      </motion.div>
                    )}

                    {/* 3. STAKES SCREEN */}
                    {activeTab === "stakes" && (
                      <motion.div
                        key="stakes"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="flex flex-col gap-4"
                      >
                        <div className="text-center">
                          <span className="text-[10px] text-rose-400 font-bold uppercase tracking-wider">Hell Mode Bets</span>
                          <h4 className="text-base font-bold text-white mt-1">Stakes & Duels</h4>
                        </div>

                        {/* Solo Stake card */}
                        <div className="bg-zinc-900/60 border border-white/5 rounded-xl p-4">
                          <div className="flex justify-between items-center mb-3">
                            <span className="text-xs font-bold text-white">Solo Commitment</span>
                            <span className="px-2 py-0.5 rounded bg-orange-500/10 text-orange-400 text-[8px] font-black uppercase">Active</span>
                          </div>
                          <div className="flex gap-3 items-center">
                            <div className="w-9 h-9 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500">
                              <Coins size={18} />
                            </div>
                            <div className="flex-1">
                              <span className="text-xs font-semibold text-white block">Gym Habit Stake</span>
                              <span className="text-[9px] text-gray-500 block">Stake: $5.00 • Goal: checkin before 6PM</span>
                            </div>
                          </div>
                          <button
                            onClick={() => setStakeJoined(!stakeJoined)}
                            className={`w-full py-2 rounded-lg text-[10px] font-extrabold mt-3 transition-colors ${
                              stakeJoined 
                                ? "bg-emerald-600 text-white" 
                                : "bg-rose-600 hover:bg-rose-500 text-white glow-rose"
                            }`}
                          >
                            {stakeJoined ? "✓ Stake Placed ($5 locked)" : "Lock Stake $5.00"}
                          </button>
                        </div>

                        {/* Duel Invite card */}
                        <div className="bg-zinc-900/60 border border-rose-500/20 rounded-xl p-4 relative overflow-hidden">
                          <div className="flex justify-between items-center mb-3">
                            <span className="text-xs font-bold text-white flex items-center gap-1">
                              <Trophy size={12} className="text-yellow-400" />
                              Versus Challenge
                            </span>
                            <span className="px-2 py-0.5 rounded bg-rose-500/10 text-rose-400 text-[8px] font-black uppercase">Incoming</span>
                          </div>
                          <div className="flex gap-3 items-center">
                            <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center font-bold text-xs text-white">
                              AL
                            </div>
                            <div className="flex-1">
                              <span className="text-xs font-semibold text-white block">Alex's Duel Invitation</span>
                              <span className="text-[9px] text-gray-400 block">Task: 5K Run • Stake: $10.00 each</span>
                            </div>
                          </div>
                          <div className="flex gap-2 mt-3">
                            <button 
                              onClick={() => setDuelStatus("accepted")}
                              disabled={duelStatus === "accepted"}
                              className={`flex-1 py-1.5 rounded-lg text-[10px] font-bold ${
                                duelStatus === "accepted" ? "bg-zinc-800 text-gray-500" : "bg-white text-black hover:bg-gray-200"
                              }`}
                            >
                              {duelStatus === "accepted" ? "Accepted" : "Accept ($10)"}
                            </button>
                            <button className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-white/5 text-[10px] text-gray-400 font-bold hover:text-white">
                              Decline
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* 4. REDEEM SCREEN */}
                    {activeTab === "redeem" && (
                      <motion.div
                        key="redeem"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="flex flex-col gap-4"
                      >
                        <div className="text-center">
                          <span className="text-[10px] text-violet-400 font-bold uppercase tracking-wider">Redeem Rewards</span>
                          <h4 className="text-base font-bold text-white mt-1">Unlock Screen Time</h4>
                        </div>

                        {/* TikTok block status */}
                        <div className="bg-zinc-900/60 border border-white/5 rounded-xl p-4 flex flex-col gap-3">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center border border-white/10 text-white font-black text-sm">
                              🎵
                            </div>
                            <div className="flex-1">
                              <span className="text-xs font-bold text-white block">TikTok App Control</span>
                              <span className="text-[9px] text-gray-500 block">Cost: 15m screen time</span>
                            </div>
                            <span className={`px-2 py-0.5 rounded text-[8px] font-black uppercase ${
                              tiktokActive ? "bg-emerald-500/10 text-emerald-400" : "bg-rose-500/10 text-rose-400"
                            }`}>
                              {tiktokActive ? "Unlocked" : "Locked"}
                            </span>
                          </div>

                          {tiktokActive ? (
                            <div className="bg-zinc-950 p-2.5 rounded-lg border border-emerald-500/10 text-center">
                              <span className="text-[9px] text-gray-400 block uppercase font-bold tracking-wider">Unblocked Session Active</span>
                              <span className="text-lg font-black text-emerald-400 tabular-nums">
                                {Math.floor(tiktokTime / 60).toString().padStart(2, "0")}:
                                {(tiktokTime % 60).toString().padStart(2, "0")}
                              </span>
                              <p className="text-[8px] text-gray-500 mt-1">Auto-locks when timer reaches zero</p>
                            </div>
                          ) : (
                            <button
                              onClick={redeemTiktok}
                              className="w-full py-2 rounded-lg bg-violet-600 hover:bg-violet-500 text-white text-[10px] font-bold glow-violet transition-colors"
                            >
                              Spend 15 mins to Unlock
                            </button>
                          )}
                        </div>

                        {/* Instagram blocker info */}
                        <div className="bg-zinc-900/60 border border-white/5 rounded-xl p-3 flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <InstagramIcon size={16} className="text-rose-500" />
                            <span className="text-xs font-bold text-white">Instagram</span>
                          </div>
                          <span className="text-[10px] text-gray-500 font-bold">LOCKED</span>
                        </div>
                      </motion.div>
                    )}

                    {/* 5. PARTNER SCREEN */}
                    {activeTab === "partner" && (
                      <motion.div
                        key="partner"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="flex flex-col gap-4"
                      >
                        <div className="text-center">
                          <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">Accountability Team</span>
                          <h4 className="text-base font-bold text-white mt-1">Partner Profile</h4>
                        </div>

                        {/* Partner Profile Card */}
                        <div className="bg-zinc-900/60 border border-emerald-500/20 rounded-xl p-4 relative overflow-hidden">
                          <div className="flex justify-between items-start mb-3">
                            <div className="flex items-center gap-2">
                              {/* Avatar */}
                              <div className="relative">
                                <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center font-bold text-sm text-white">
                                  JD
                                </div>
                                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-zinc-950 animate-pulse" />
                              </div>
                              <div>
                                <span className="text-xs font-bold text-white block">John Doe</span>
                                <span className="text-[8px] text-emerald-400 font-semibold uppercase tracking-wider">
                                  Active {selectedRelation.emoji} {selectedRelation.label}
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center gap-1 bg-orange-500/10 px-2 py-0.5 rounded text-[8px] text-orange-400 font-black">
                              <Flame size={10} className="fill-orange-400" />
                              <span>12d Streak</span>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-white/5">
                            <div className="bg-zinc-950 p-2 rounded text-center">
                              <span className="text-[8px] text-gray-500 block uppercase">Reliability</span>
                              <span className="text-xs font-extrabold text-white">96%</span>
                            </div>
                            <div className="bg-zinc-950 p-2 rounded text-center">
                              <span className="text-[8px] text-gray-500 block uppercase">Last Active</span>
                              <span className="text-xs font-extrabold text-white">5m ago</span>
                            </div>
                          </div>
                        </div>

                        {/* Relationship Customizer */}
                        <div className="bg-zinc-900/40 border border-white/5 rounded-xl p-3">
                          <span className="text-[10px] text-gray-400 font-bold uppercase block mb-2">Set Relationship Type</span>
                          <div className="flex flex-wrap gap-1.5">
                            {relationshipTypes.map((type) => (
                              <button
                                key={type.value}
                                onClick={() => setRelationType(type.value)}
                                className={`px-2 py-1 rounded-md text-[9px] font-bold flex items-center gap-1 transition-all ${
                                  relationType === type.value
                                    ? "bg-emerald-500 text-black shadow-lg shadow-emerald-500/20"
                                    : "bg-white/5 text-gray-400 hover:bg-white/10"
                                }`}
                              >
                                <span>{type.emoji}</span>
                                <span>{type.label}</span>
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Action buttons */}
                        <div className="flex gap-2">
                          <button className="flex-1 py-2 rounded-lg bg-zinc-900 border border-white/5 text-[9px] text-white font-bold hover:bg-white/5 transition-colors">
                            💬 Message
                          </button>
                          <button className="flex-1 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-[9px] text-emerald-400 font-bold hover:bg-emerald-500/20 transition-colors">
                            🔔 Nudge
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Home Indicator Button */}
              <div className="w-full h-10 flex justify-center items-center bg-zinc-950 z-20">
                <div className="w-32 h-1 bg-zinc-700 rounded-full" />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
