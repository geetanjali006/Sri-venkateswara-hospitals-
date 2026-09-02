"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Phone, User, Stethoscope, Clock, CheckCircle, MessageSquare, ShieldCheck } from "lucide-react";

interface BookingProps {
  data: any;
}

export default function AppointmentBooking({ data }: BookingProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    department: "Orthopedics",
    doctor: "Dr. S. V. Rao",
    date: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!formData.name || !formData.phone || !formData.date) {
      alert("Please fill in all required fields.");
      return;
    }
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      phone: "",
      department: "Orthopedics",
      doctor: "Dr. S. V. Rao",
      date: "",
    });
    setIsSuccess(false);
  };

  return (
    <section id="booking-section" className="bg-transparent font-sans px-0 sm:px-4 pb-16 flex flex-col items-center overflow-hidden">
      <div className="relative w-full max-w-[1440px] rounded-[0px] sm:rounded-[40px] overflow-hidden bg-transparent pt-16 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-3 py-1.5 rounded-md">
              {data.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] dark:text-white mt-4 tracking-tight">
              {data.headline}
            </h2>
            <div className="h-1 w-20 bg-blue-500 mx-auto mt-4 rounded-full" />
            <p className="text-gray-500 dark:text-zinc-400 mt-4 text-sm sm:text-base">
              {data.subtext}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* WhatsApp / Trust Left Side */}
            <div className="rounded-[32px] bg-gradient-to-br from-white via-blue-50/70 to-sky-50 p-6 border border-blue-100 shadow-md flex flex-col justify-between min-h-[220px]">
              <div>
                <span className="text-[10px] font-extrabold text-blue-600 uppercase tracking-widest block mb-2">{data.whatsapp.badge}</span>
                <h3 className="text-xl font-bold text-blue-950 mb-3">{data.whatsapp.headline}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {data.whatsapp.subtext}
                </p>
              </div>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={data.whatsapp.link}
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-sky-500/20 hover:from-sky-600 hover:to-cyan-600 transition-all mt-6"
              >
                <Phone className="h-4.5 w-4.5 text-white" />
                <span>{data.whatsapp.button}</span>
              </motion.a>
            </div>

            {/* Corporate Accreditations and Assurances Right Side */}
            <div className="rounded-[32px] border border-blue-100 dark:border-zinc-800 p-6 flex flex-col justify-between bg-white/80 dark:bg-zinc-850 shadow-sm">
              <div>
                <h4 className="text-xs font-bold text-blue-950 dark:text-white uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <ShieldCheck className="h-4.5 w-4.5 text-blue-600" />
                  <span>Clinical Assurances</span>
                </h4>
                <ul className="space-y-2.5 text-xs text-gray-500 leading-normal">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500">●</span>
                    <span>100% HIPAA-compliant record management.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500">●</span>
                    <span>Pre-authorization cashless support for listing panels.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500">●</span>
                    <span>Emergency admissions triaged immediately.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200/60 text-[10px] text-gray-400 font-semibold tracking-wider text-center uppercase">
                {data.assurances.footer}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
