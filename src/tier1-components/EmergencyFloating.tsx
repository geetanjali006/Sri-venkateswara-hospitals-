"use client";

import { motion } from "framer-motion";
import { Phone, MessageSquare, Calendar } from "lucide-react";

interface EmergencyFloatingProps {
  onOpenBooking: () => void;
}

export default function EmergencyFloating() {
  const tabs = [
    {
      id: "whatsapp",
      label: "Consultation Form",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5 text-white"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
      color: "bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#075E54]",
      href: "/consultation",
    },
    {
      id: "booking",
      label: "Book Appointment",
      icon: <Calendar className="h-5 w-5 text-white" />,
      color: "bg-gradient-to-r from-[#0077b6] to-[#023e8a] hover:from-[#023e8a] hover:to-[#03045e]",
      href: "/consultation",
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

        return null;
      })}
    </div>
  );
}
