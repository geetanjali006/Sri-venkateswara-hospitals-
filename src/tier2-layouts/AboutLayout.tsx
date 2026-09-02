"use client";

import { motion } from "framer-motion";
import { Award, HeartHandshake, Layers, Clock, Activity } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: <Layers className="h-6 w-6 text-blue-600" />,
      title: "Multi-Speciality Care",
      desc: "All critical treatments under one roof, from advanced bone surgery to routine general medicine.",
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      title: "24/7 Services",
      desc: "Round-the-clock emergency, pharmacy, trauma, and orthopedic surgical care available when you need it most.",
    },
    {
      icon: <HeartHandshake className="h-6 w-6 text-blue-600" />,
      title: "Patient-Focused Care",
      desc: "Empathetic, clear communication and personalized treatment plans custom-tailored for all ages.",
    },
    {
      icon: <Activity className="h-6 w-6 text-blue-600" />,
      title: "Accessible & Affordable",
      desc: "Delivering premium specialty medicine at pricing structured to support our regional and urban patients alike.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white via-blue-50/30 to-sky-50/40 dark:bg-zinc-900 font-sans relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-3 py-1.5 rounded-md">
            Who We Are
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 dark:text-white mt-4 tracking-tight">
            Visakhapatnam&apos;s Trusted Destination for Orthopedic &amp; Multi-Speciality Care
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-sky-400 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text/Content Left Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <h3 className="text-2xl font-bold text-blue-900 dark:text-zinc-100">
              Established in 2005 with a Commitment to Quality Healing
            </h3>
            <p className="text-gray-600 dark:text-zinc-300 leading-relaxed">
              At Sri Venkateswara Hospital, we believe that health is the foundation of a joyful life. We opened our doors in 2005 in Visakhapatnam to address the growing need for specialized healthcare services, trauma care, and broad-scope multi-speciality treatment.
            </p>
            <p className="text-gray-600 dark:text-zinc-300 leading-relaxed">
              Led by veteran practitioners and supported by empathetic staff, we combine cutting-edge technology with affordable pricing models. Whether managing emergency complex fractures or chronic clinical disorders, our priority is always your swift recovery and comfort.
            </p>
            
            {/* Accreditation Badge */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-4 bg-blue-50/70 dark:bg-zinc-800 p-4 rounded-2xl border border-blue-100 dark:border-zinc-700/50 mt-2 cursor-pointer shadow-sm transition-all"
            >
              <Award className="h-10 w-10 text-blue-600 dark:text-blue-400 flex-shrink-0" />
              <div>
                <span className="block text-sm font-bold text-blue-950 dark:text-white">State-of-the-Art Infrastructure</span>
                <span className="text-xs text-gray-500 dark:text-zinc-400">Equipped with modern operation theaters & diagnostic support</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Cards Right Side */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((val, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/80 dark:bg-zinc-850 p-6 rounded-2xl border border-blue-50 dark:border-zinc-800 transition-all duration-300 hover:shadow-md hover:border-blue-200 dark:hover:border-blue-900/30 group"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-900/20 group-hover:scale-105 transition-transform shadow-sm">
                  {val.icon}
                </div>
                <h4 className="text-lg font-bold text-blue-950 dark:text-white mb-2">
                  {val.title}
                </h4>
                <p className="text-sm text-gray-500 dark:text-zinc-400 leading-relaxed">
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
