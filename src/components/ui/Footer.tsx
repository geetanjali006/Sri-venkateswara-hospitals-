"use client";

import { motion } from "framer-motion";
import { MessageSquare, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-[#061830] via-[#0a2540] to-[#0f3a65] text-slate-300 font-sans border-t border-blue-900/40 relative overflow-hidden py-3 sm:py-4">
      {/* Subtle background glow effect */}
      <div className="absolute top-0 left-1/4 w-[250px] h-[250px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-3">

        {/* Main Content Row */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 lg:gap-4">

          {/* Hospital Logo & Title */}
          <div className="flex items-center gap-3">
            <div className="bg-white/95 p-1.5 rounded-xl shadow-sm">
              <img
                src="/sv-icon.png"
                alt="Sri Venkateswara Hospital Logo"
                className="h-9 w-auto object-contain"
              />
            </div>
            <div className="h-5 w-[1px] bg-slate-700/50 hidden sm:block" />
            <span className="text-xs sm:text-sm font-bold text-white tracking-wide whitespace-nowrap">
              Sri Venkateswara Hospital
            </span>
          </div>

          {/* Contact & Location Details */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-slate-400 font-medium">
            <span className="flex items-center gap-1">
              <span>📍</span> Jagadamba Junction, Visakhapatnam
            </span>

            <span className="text-slate-700 hidden md:inline">|</span>

            <a href="tel:08912700000" className="flex items-center gap-1 hover:text-white transition-colors">
              <span>☎️</span> 0891-2700000
            </a>
          </div>

          {/* Compact Action Buttons */}
          <div className="flex items-center gap-2">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#booking-section"
              className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[10px] sm:text-[11px] py-1.5 px-3.5 shadow-sm transition-colors whitespace-nowrap"
            >
              <span>Book Appointment</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="tel:08912700000"
              className="inline-flex items-center gap-1.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-[10px] sm:text-[11px] py-1.5 px-3.5 shadow-sm transition-colors whitespace-nowrap"
            >
              <Phone className="h-3 w-3" />
              <span>Call Now</span>
            </motion.a>
          </div>

        </div>

        {/* Minimal Bottom Bar */}
        <div className="border-t border-slate-800/40 pt-2 flex items-center justify-between text-[10px] text-slate-500 font-medium">
          <p>© {currentYear} Sri Venkateswara Hospital. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
}
