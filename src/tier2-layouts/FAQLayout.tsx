"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQProps {
  data: any;
}

export default function FAQ({ data }: FAQProps) {
  const faqs = data.items;

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (idx: number) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      className="bg-transparent text-black px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-center overflow-hidden"
    >
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

          {/* Left Column: Header and Description */}
          <div className="lg:col-span-5">
            <h2 className="text-4xl lg:text-[44px] font-sans text-blue-950 dark:text-white font-medium tracking-tight leading-[1.15] mb-6">
              {data.headline.split(' ').map((word: string, i: number, arr: string[]) => (
                <span key={i}>
                  {word}{i === 0 && <br className="hidden lg:block" />}{' '}
                </span>
              ))}
            </h2>
            <p className="text-[15px] text-gray-500 dark:text-zinc-400 leading-relaxed max-w-md" dangerouslySetInnerHTML={{__html: data.subtext}}></p>
          </div>

          {/* Right Column: Minimalist Accordion */}
          <div className="lg:col-span-7 border-t border-blue-100 dark:border-zinc-800">
            <div className="flex flex-col">
              {faqs.map((faq: any, idx: number) => {
                const isOpen = activeIndex === idx;
                return (
                  <div
                    key={idx}
                    className="border-b border-blue-100 dark:border-zinc-800"
                  >
                    <button
                      onClick={() => toggleFAQ(idx)}
                      className="w-full flex items-center justify-between py-6 text-left group"
                    >
                      <span className="text-[14px] font-semibold text-blue-950 dark:text-zinc-200 group-hover:text-blue-600 transition-colors pr-8">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 text-gray-400 dark:text-zinc-500 transition-transform duration-300 flex-shrink-0",
                          isOpen && "rotate-180 text-blue-600"
                        )}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pb-6 text-[14px] text-gray-500 dark:text-zinc-400 leading-relaxed">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
