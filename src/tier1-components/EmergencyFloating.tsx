"use client";

import { motion } from "framer-motion";
import { Phone, MessageSquare, Calendar } from "lucide-react";

interface EmergencyFloatingProps {
  onOpenBooking: () => void;
}

export default function EmergencyFloating({ onOpenBooking }: EmergencyFloatingProps) {
  const tabs = [
    {
      id: "helpline",
      label: "Hospital Helpline: 0891-2700000",
      icon: <Phone className="h-5 w-5 text-white" />,
      color: "bg-gradient-to-r from-[#00b4d8] to-[#0077b6] hover:from-[#0077b6] hover:to-[#03045e]",
      href: "tel:08912700000",
    },
    {
      id: "booking",
      label: "Book Appointment",
      icon: <Calendar className="h-5 w-5 text-white" />,
      color: "bg-gradient-to-r from-[#0077b6] to-[#023e8a] hover:from-[#023e8a] hover:to-[#03045e]",
      onClick: onOpenBooking,
    },
    {
      id: "emergency",
      label: "Call Emergency: 0891-2700000",
      icon: <Phone className="h-5 w-5 text-white animate-pulse" />,
      color: "bg-gradient-to-r from-[#2b2d42] to-[#1d3557] hover:from-[#1d3557] hover:to-[#0f172a]",
      href: "tel:08912700000",
    },
  ];

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2.5 items-end font-sans pointer-events-auto">
      {tabs.map((tab) => {
        const content = (
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120 }}
            className={`flex items-center gap-3 pl-3 pr-2 py-2 rounded-l-2xl sm:rounded-l-3xl shadow-xl border-l border-y border-white/20 ${tab.color} text-white transition-all duration-300 group cursor-pointer hover:pl-4`}
          >
            {/* Sliding text label on hover */}
            <span className="max-w-0 overflow-hidden whitespace-nowrap text-xs font-bold tracking-tight opacity-0 group-hover:max-w-[180px] group-hover:opacity-100 transition-all duration-300 select-none">
              {tab.label}
            </span>

            {/* Circular Glass Icon Container matching reference photo */}
            <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-[inset_0_2px_4px_rgba(255,255,255,0.2)] shrink-0 transition-transform duration-300 group-hover:scale-110">
              {tab.icon}
            </div>
          </motion.div>
        );

        if (tab.href) {
          return (
            <a
              key={tab.id}
              href={tab.href}
              className="outline-none"
            >
              {content}
            </a>
          );
        }

        return (
          <button key={tab.id} onClick={tab.onClick} className="outline-none block">
            {content}
          </button>
        );
      })}
    </div>
  );
}
