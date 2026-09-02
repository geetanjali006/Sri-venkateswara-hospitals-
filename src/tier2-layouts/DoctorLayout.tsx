"use client";

import { motion } from "framer-motion";

interface DoctorProps {
  onOpenBooking: () => void;
  data: any;
}

export default function Doctor({ data }: DoctorProps) {
  const doctors = data.doctors;

  return (
    <section
      id="doctor"
      className="bg-transparent text-black px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-center overflow-hidden"
    >
      <div className="w-full max-w-5xl mx-auto flex flex-col">

        {/* Section Header (Left Aligned like reference) */}
        <div className="mb-16 flex flex-col px-4 text-left">
          <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 bg-blue-50 dark:bg-blue-900/20 px-3 py-1.5 rounded-full w-fit mb-6">
            {data.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-serif text-blue-950 dark:text-white font-medium tracking-tight leading-[1.1] max-w-3xl mb-4">
            {data.headline}
          </h2>
          <p className="text-sm sm:text-base text-gray-500 dark:text-zinc-400">
            {data.subtext}
          </p>
        </div>

        {/* Static Text-Only Grid */}
        <div className="w-full px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {doctors.map((doc: any, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="flex flex-col p-8 bg-white/80 dark:bg-zinc-800/50 rounded-[32px] border border-blue-100 shadow-sm dark:border-zinc-700/50 hover:border-blue-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 justify-between h-full"
              >
                {/* Doctor Image */}
                {doc.image && (
                  <div className="w-full aspect-[4/5] bg-gray-100 dark:bg-zinc-800 rounded-2xl mb-6 overflow-hidden flex items-center justify-center border border-gray-200 dark:border-zinc-700 relative">
                    <img src={doc.image} alt={doc.name} className="w-full h-full object-cover" />
                  </div>
                )}

                {/* Doctor Text Info */}
                <div className="mb-6 flex flex-col gap-1">
                  {doc.specialization && (
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-teal-700 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/50 border border-teal-200/60 dark:border-teal-800/40 px-2.5 py-1 rounded-full w-fit mb-1">
                      {doc.specialization}
                    </span>
                  )}
                  <h3 className="text-[17px] font-bold text-gray-900 dark:text-white leading-snug">
                    {doc.name}
                  </h3>
                  <p className="text-[13px] font-semibold text-blue-600 dark:text-blue-400">
                    {doc.designation}
                  </p>
                  {doc.expertise && (
                    <div className="mt-2 pt-2 border-t border-gray-100 dark:border-zinc-700/60">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 dark:text-zinc-400 block mb-0.5">
                        Key Expertise
                      </span>
                      <p className="text-[12px] text-gray-600 dark:text-zinc-300 font-medium leading-relaxed">
                        {doc.expertise}
                      </p>
                    </div>
                  )}
                  {doc.qualifications && (
                    <p className="text-[12px] text-gray-500 dark:text-zinc-500 mt-1">
                      {doc.qualifications}
                    </p>
                  )}
                </div>

                {/* Hollow Pill Button */}
                <a
                  href="/consultation"
                  className="w-full py-3 rounded-full border border-blue-900 dark:border-zinc-700 text-[13px] font-bold text-blue-950 dark:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-sky-500 hover:border-blue-600 hover:text-white dark:hover:text-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300 block text-center"
                >
                  {data.ctaButton}
                </a>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
