"use client";

import { motion } from "framer-motion";
import { Bone, Stethoscope, Microscope, Hospital, Ambulance, Heart } from "lucide-react";

interface FacilitiesProps {
  data: any;
}

export default function Facilities({ data }: FacilitiesProps) {
  const items = data.items.map((item: any, i: number) => {
    const icons = [<Bone className="h-7 w-7" />, <Stethoscope className="h-7 w-7" />, <Microscope className="h-7 w-7" />, <Hospital className="h-7 w-7" />, <Ambulance className="h-7 w-7" />, <Heart className="h-7 w-7" />];
    return { ...item, icon: icons[i] || <Heart className="h-7 w-7" /> };
  });

  return (
    <section
      id="facilities"
      className="bg-transparent text-black px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-center overflow-hidden"
    >
      <div className="w-full max-w-5xl mx-auto flex flex-col">

        {/* Section Header */}
        <div className="mb-16 flex flex-col px-4 text-left">
          <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 bg-blue-50 dark:bg-blue-900/20 px-3 py-1.5 rounded-full w-fit mb-6">
            {data.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-serif text-blue-950 dark:text-white font-medium tracking-tight leading-[1.1] max-w-3xl mb-4">
            {data.headline}
          </h2>
          <p className="text-sm sm:text-base text-gray-500 dark:text-zinc-400 max-w-2xl">
            {data.subtext}
          </p>
        </div>

        {/* Custom Context Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {items.map((item: any, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-[24px] bg-white/80 dark:bg-zinc-900 p-8 border border-blue-100 dark:border-zinc-800 hover:border-blue-400 dark:hover:border-blue-900/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between min-h-[220px] cursor-pointer"
            >
              {/* Card top half */}
              <div className="relative z-10">

                {/* Title */}
                <h3 className="text-[17px] font-bold text-blue-950 dark:text-white mb-2 leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[13px] text-gray-500 dark:text-zinc-400 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
