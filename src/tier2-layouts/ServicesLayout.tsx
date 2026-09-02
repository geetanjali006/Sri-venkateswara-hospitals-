"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Bone,
  Activity,
  Stethoscope,
  Scissors,
  UserCheck,
  Eye,
} from "lucide-react";

interface ServicesProps {
  onOpenBooking: () => void;
  data: any;
}

export default function Services({ data }: ServicesProps) {
  const specialties = data.specialties;

  return (
    <section
      id="services"
      className="bg-transparent text-black px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-center overflow-hidden"

    >
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center">

        {/* Section Header */}
        <div className="text-center mb-20 flex flex-col items-center px-4">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-blue-600 bg-blue-50 dark:bg-blue-900/20 px-3 py-1.5 rounded-full font-bold mb-6">
            {data.badge}
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-serif text-blue-950 dark:text-white tracking-tight leading-[1.05] max-w-5xl text-center">
            {data.headline}
          </h2>
        </div>

        {/* Services Grid */}
        <div className="w-full mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {specialties.map((spec: any, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: idx * 0.05,
                }}
                className="group relative h-[320px] sm:h-[360px] rounded-[32px] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-end p-6 border border-blue-50/50"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${spec.image})` }}
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent z-10" />

                {/* Content */}
                <div className="relative z-20 flex flex-col items-start w-full">
                  <span className="bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold text-white mb-3">
                    {data.itemBadge}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                    {spec.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 w-full bg-gradient-to-r from-blue-700 via-blue-600 to-sky-600 rounded-[28px] sm:rounded-[36px] p-12 sm:p-16 lg:p-24 flex flex-col items-center justify-center text-center shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white max-w-4xl leading-[1.1] mb-10 tracking-tight relative z-10">
            {data.ctaHeadline}
          </h3>

          <a
            href="/consultation"
            className="bg-white text-blue-950 hover:bg-blue-50 font-bold text-sm px-8 py-3.5 rounded-xl transition-all duration-300 shadow-md hover:scale-105 relative z-10 block w-fit"
          >
            {data.ctaButton}
          </a>
        </div>
      </div>
    </section>
  );
}
