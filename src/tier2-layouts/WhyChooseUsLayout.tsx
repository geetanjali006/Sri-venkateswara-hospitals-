"use client";

import { motion } from "framer-motion";

interface WhyChooseUsProps {
  data: any;
}

export default function WhyChooseUs({ data }: WhyChooseUsProps) {
  const reasons = data.reasons;

  return (
    <section
      id="why-choose-us"
      className="bg-transparent text-black px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-center overflow-hidden"
    >
      <div className="w-full max-w-5xl mx-auto flex flex-col">

        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-serif text-blue-950 dark:text-white font-medium tracking-tight leading-[1.1]">
            {data.headline}
          </h2>
        </div>

        {/* Vertical List */}
        <div className="w-full border-t border-blue-100 dark:border-zinc-800">
          {reasons.map((reason: any, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col sm:flex-row py-12 border-b border-blue-100 dark:border-zinc-800"
            >
              {/* Number Column */}
              <div className="w-full sm:w-32 flex-shrink-0 mb-4 sm:mb-0">
                <span className="text-[12px] font-extrabold text-blue-600 dark:text-sky-400 tracking-wider">
                  0{idx + 1}
                </span>
              </div>

              {/* Content Column */}
              <div className="flex-1 max-w-2xl">
                <h3 className="text-2xl sm:text-3xl font-serif text-blue-950 dark:text-white mb-4">
                  {reason.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-gray-500 dark:text-zinc-400">
                  {reason.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
