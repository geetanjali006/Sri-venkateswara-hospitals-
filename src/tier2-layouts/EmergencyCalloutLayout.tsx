"use client";

import { motion } from "framer-motion";
import { Phone, AlertCircle, MessageSquare } from "lucide-react";

export default function EmergencyCallout() {
  return (
    <section id="emergency" className="py-20 bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950 text-white font-sans relative overflow-hidden">
      {/* Decorative pulse glow */}
      <div className="absolute inset-0 bg-sky-500/10 pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-sky-500 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-widest text-white shadow-lg shadow-blue-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span>24/7 Emergency trauma center</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            Need Immediate Medical Assistance?
          </h2>
          
          <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-2xl font-medium">
            Our trauma surgery and medical emergency response teams are active round-the-clock. If you require immediate stabilization or ambulance transit, reach out instantly.
          </p>

          {/* Large Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center mt-4">
            {/* Call button */}
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="tel:08912700000"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600 px-8 py-4.5 text-base font-bold text-white shadow-xl shadow-blue-600/30 transition-all"
            >
              <Phone className="h-5 w-5 stroke-[2.5]" />
              <span>Call Emergency: 0891-2700000</span>
            </motion.a>

            {/* Direct Helpline button */}
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="tel:08912700000"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 px-8 py-4.5 text-base font-bold text-white shadow-xl shadow-sky-500/30 transition-all"
            >
              <Phone className="h-5 w-5 stroke-[2.5]" />
              <span>OPD Helpline: 0891-2700000</span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}

