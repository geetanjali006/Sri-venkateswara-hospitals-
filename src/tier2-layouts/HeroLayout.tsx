"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

interface HeroProps {
  onOpenBooking: () => void;
  data: any;
}

export default function Hero({ data }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] lg:min-h-screen w-full flex flex-col overflow-hidden bg-white px-3 sm:px-6 pt-3 pb-3"
    >
      {/* Background Image Container */}
      <div className="absolute inset-x-3 inset-y-3 sm:inset-x-6 sm:inset-y-3 lg:bottom-6 z-0 rounded-[32px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center sm:bg-right bg-no-repeat transition-transform duration-1000 hover:scale-[1.01]"
          style={{ backgroundImage: "url('/hero_bg.png')" }}
        >
          {/* Soft gradient overlay on left for maximum text legibility while showcasing doctor & signboard */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#061830]/80 via-[#0a2540]/45 to-transparent sm:from-[#061830]/85 sm:via-[#0a2540]/40 sm:to-transparent" />
        </div>
      </div>

      {/* Main Content (Left aligned beside the doctor with dual font typography) */}
      <div className="relative z-10 flex flex-col items-start justify-center min-h-[70vh] lg:min-h-[80vh] pt-24 sm:pt-28 lg:pt-32 px-6 sm:px-12 lg:px-20 w-full max-w-7xl mx-auto text-left">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl lg:max-w-[54%] flex flex-col items-start"
        >
          {/* Dual Font Line 1 & Line 2 Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start leading-[1.1]"
          >
            {/* Line 1: Playfair Display Serif Italic with Glowing Cyan/Teal Gradient */}
            <span className="font-playfair italic font-bold text-3xl sm:text-5xl lg:text-[62px] bg-gradient-to-r from-sky-200 via-cyan-200 to-teal-300 bg-clip-text text-transparent filter drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)] tracking-tight">
              Advanced care.
            </span>

            {/* Line 2: Plus Jakarta Sans Bold Uppercase Crisp White */}
            <span className="font-jakarta font-extrabold text-2xl sm:text-4xl lg:text-[44px] text-white tracking-tight uppercase mt-2 drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
              Trusted Healing.
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-base sm:text-lg lg:text-xl text-slate-100/95 font-jakarta font-normal leading-relaxed max-w-lg drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]"
          >
            {data.subtext}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 sm:mt-10"
          >
            <a
              href="/consultation"
              className="flex items-center justify-center gap-3 rounded-full bg-white hover:bg-blue-50 px-8 py-3.5 text-[15px] font-bold text-blue-950 shadow-2xl hover:scale-[1.02] active:scale-98 transition-all group"
            >
              <span>{data.cta}</span>
              <div className="bg-gradient-to-r from-blue-600 to-sky-500 text-white p-1.5 rounded-full group-hover:translate-x-1 transition-transform">
                <ArrowRight className="h-4 w-4" />
              </div>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* FLOATING ELEMENTS */}

      {/* Bottom Right Floating Controls */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="hidden sm:flex absolute bottom-10 right-10 flex-col items-end gap-4"
      >

        {/* Emergency/Action Pill */}
        <div className="flex items-center gap-4 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-full shadow-2xl border border-white/50 cursor-pointer hover:scale-105 transition-transform">
          <span className="text-[13px] font-bold text-blue-950">{data.emergency}</span>
          <div className="bg-gradient-to-r from-blue-600 to-sky-500 text-white p-1.5 rounded-full">
            <Phone className="h-3.5 w-3.5" />
          </div>
        </div>
      </motion.div>

    </section>
  );
}
