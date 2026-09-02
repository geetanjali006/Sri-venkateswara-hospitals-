"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
      setTimeout(onComplete, 500); // Wait for fade out
    }, 1300);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isAnimating ? 1 : 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-[#061830] via-[#0a2540] to-[#0f3a65] pointer-events-none"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative flex flex-col items-center"
      >
        {/* Pulsing Hospital Logo */}
        <motion.div
          animate={{
            scale: [1, 1.04, 1],
            filter: [
              "drop-shadow(0px 0px 0px rgba(255,255,255,0))", 
              "drop-shadow(0px 10px 25px rgba(56,189,248,0.4))", 
              "drop-shadow(0px 0px 0px rgba(255,255,255,0))"
            ]
          }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
            repeat: Infinity
          }}
          className="flex flex-col items-center gap-4"
        >
          <div className="flex flex-col items-center gap-3 bg-white/95 backdrop-blur-md px-8 py-5 rounded-3xl border border-white/40 shadow-2xl">
            <img
              src="/sv-icon.png"
              alt="Sri Venkateswara Hospital Logo"
              className="h-16 sm:h-20 w-auto object-contain drop-shadow-md"
            />
            <div className="flex flex-col items-center leading-tight text-center">
              <span className="text-xs font-semibold text-teal-600 tracking-wider font-serif italic">Sri</span>
              <span className="text-base sm:text-lg font-extrabold text-[#061830] tracking-tight">
                VENKATESWARA HOSPITAL
              </span>
              <span className="text-[10px] font-medium text-slate-500 tracking-widest uppercase mt-0.5">
                Compassion & Excellence
              </span>
            </div>
          </div>
        </motion.div>

        {/* Sleek Progress Loading Bar */}
        <div className="w-[180px] h-[2px] bg-white/10 mt-8 rounded-full overflow-hidden">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 0.9, ease: "easeInOut", repeat: Infinity }}
            className="h-full w-1/2 bg-gradient-to-r from-blue-400 to-sky-300 rounded-full"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
