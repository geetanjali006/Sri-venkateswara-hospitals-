"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export default function InsurancePartners() {
  const partners = [
    { name: "Star Health Insurance", type: "Cashless" },
    { name: "HDFC ERGO General", type: "TPA Approved" },
    { name: "Niva Bupa Health", type: "Cashless" },
    { name: "ICICI Lombard", type: "TPA Approved" },
    { name: "Care Health (Religare)", type: "Cashless" },
    { name: "SBI General Insurance", type: "Cashless" },
    { name: "United India Insurance", type: "Govt / PSU" },
    { name: "Bajaj Allianz Health", type: "TPA Approved" },
  ];

  // Duplicate list to ensure infinite scroller looping
  const marqueeItems = [...partners, ...partners, ...partners];

  return (
    <section className="py-20 bg-gradient-to-r from-white via-blue-50/50 to-sky-50/50 dark:bg-zinc-950 font-sans border-y border-blue-100 dark:border-zinc-800 overflow-hidden relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Subtle section header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12 max-w-5xl mx-auto border-b border-blue-100 dark:border-zinc-800 pb-6">
          <div className="flex items-center gap-2 text-blue-950 dark:text-white">
            <ShieldCheck className="h-5 w-5 text-blue-600 animate-pulse" />
            <h3 className="text-lg font-bold tracking-tight">
              Cashless Treatment &amp; TPA Insurance Partners
            </h3>
          </div>
          <p className="text-xs text-gray-500 dark:text-zinc-400 text-center sm:text-right max-w-xs sm:max-w-none">
            We facilitate direct cashless pre-authorization for planned orthopedic surgeries.
          </p>
        </div>

        {/* Infinite Scrolling Marquee - Medcy Inspired */}
        <div className="relative w-full overflow-hidden py-4 mask-gradient-x">
          <div className="flex gap-6 w-max animate-marquee will-change-transform">
            {marqueeItems.map((partner, idx) => (
              <div
                key={idx}
                className="flex-none w-[240px] bg-white dark:bg-zinc-900 border border-blue-100 dark:border-zinc-800/80 px-5 py-6 rounded-2xl text-center shadow-sm hover:shadow-lg hover:border-blue-400 transition-all duration-300 flex flex-col justify-center items-center gap-1.5 group cursor-pointer"
              >
                <span className="text-sm font-bold text-blue-950 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {partner.name}
                </span>
                <span className="text-[9px] font-extrabold uppercase tracking-widest text-blue-600 bg-blue-50 dark:bg-blue-950/40 px-2.5 py-0.5 rounded mt-1">
                  {partner.type}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Small TPA notice */}
        <p className="text-center text-[10px] text-gray-400 dark:text-zinc-500 mt-10 max-w-lg mx-auto">
          * Please note that pre-authorization approval depends on individual insurance policy terms and conditions. Reimbursement pathways are also supported for non-listed panels.
        </p>

      </div>
    </section>
  );
}

