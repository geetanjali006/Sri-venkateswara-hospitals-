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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-stretch">
          
          {/* Appointment Form Left Side */}
          <div className="lg:col-span-7 bg-[#F8FAFC] dark:bg-zinc-850 p-6 sm:p-8 rounded-[32px] border border-gray-150 dark:border-zinc-800 shadow-lg">
            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                    {data.form.nameLabel} <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-blue-600" />
                    <input
                      type="text"
                      required
                      placeholder={data.form.namePlaceholder}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl border border-gray-200 bg-white text-gray-900 dark:bg-zinc-800 dark:text-white dark:border-zinc-700 py-3 pl-10 pr-4 text-sm outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                    {data.form.phoneLabel} <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-blue-600" />
                    <input
                      type="tel"
                      required
                      pattern="[0-9]{10}"
                      placeholder={data.form.phonePlaceholder}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-xl border border-gray-200 bg-white text-gray-900 dark:bg-zinc-800 dark:text-white dark:border-zinc-700 py-3 pl-10 pr-4 text-sm outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>
                </div>

                {/* Department & Doctor Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Department */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                      {data.form.deptLabel}
                    </label>
                    <div className="relative">
                      <Stethoscope className="absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-blue-600" />
                      <select
                        value={formData.department}
                        onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                        className="w-full rounded-xl border border-gray-200 bg-white text-gray-900 dark:bg-zinc-800 dark:text-white dark:border-zinc-700 py-3 pl-10 pr-4 text-sm outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-100 appearance-none"
                      >
                        <option value="Orthopedics" className="bg-white text-gray-900 dark:bg-zinc-800 dark:text-white">Orthopedics & Spine</option>
                        <option value="Cardiology" className="bg-white text-gray-900 dark:bg-zinc-800 dark:text-white">Cardiology</option>
                        <option value="Neurology" className="bg-white text-gray-900 dark:bg-zinc-800 dark:text-white">Neurology</option>
                        <option value="General Medicine" className="bg-white text-gray-900 dark:bg-zinc-800 dark:text-white">General Medicine</option>
                        <option value="General Surgery" className="bg-white text-gray-900 dark:bg-zinc-800 dark:text-white">General Surgery</option>
                        <option value="Pediatrics" className="bg-white text-gray-900 dark:bg-zinc-800 dark:text-white">Pediatrics</option>
                        <option value="Women Health" className="bg-white text-gray-900 dark:bg-zinc-800 dark:text-white">Women&apos;s Health</option>
                        <option value="Diagnostics" className="bg-white text-gray-900 dark:bg-zinc-800 dark:text-white">Diagnostics & Lab</option>
                      </select>
                    </div>
                  </div>

                  {/* Doctor */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                      {data.form.doctorLabel}
                    </label>
                    <div className="relative">
                      <User className="absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-blue-600" />
                      <select
                        value={formData.doctor}
                        onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                        className="w-full rounded-xl border border-gray-200 bg-white text-gray-900 dark:bg-zinc-800 dark:text-white dark:border-zinc-700 py-3 pl-10 pr-4 text-sm outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-100 appearance-none"
                      >
                        <option value="Dr. S. V. Rao" className="bg-white text-gray-900 dark:bg-zinc-800 dark:text-white">Dr. S. V. Rao (Orthopedics)</option>
                        <option value="Dr. V. Karthik Reddy" className="bg-white text-gray-900 dark:bg-zinc-800 dark:text-white">Dr. V. Karthik Reddy (General Medicine)</option>
                        <option value="Dr. K. Karunakar Reddy" className="bg-white text-gray-900 dark:bg-zinc-800 dark:text-white">Dr. K. Karunakar Reddy (General Surgery)</option>
                        <option value="Dr. Rajashekar Battula" className="bg-white text-gray-900 dark:bg-zinc-800 dark:text-white">Dr. Rajashekar Battula (Urology)</option>
                        <option value="Dr. C. Aruna Jyothi" className="bg-white text-gray-900 dark:bg-zinc-800 dark:text-white">Dr. C. Aruna Jyothi (Gynecology)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Preferred Date */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                    {data.form.dateLabel} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    required
                    min={new Date().toISOString().split("T")[0]}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full rounded-xl border border-gray-200 bg-white text-gray-900 dark:bg-zinc-800 dark:text-white dark:border-zinc-700 py-3 px-4 text-sm outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                {/* Error message */}
                {error && (
                  <p className="text-xs text-red-500 font-semibold text-center">{error}</p>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition-all hover:from-blue-700 hover:to-sky-600 active:scale-98 disabled:opacity-50 mt-2"
                >
                  {isSubmitting ? data.form.submittingText : data.form.submitText}
                </button>
              </form>
            ) : (
              /* Success Screen */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-8 text-center"
              >
                <div className="mb-4 rounded-full bg-blue-50 p-4 dark:bg-blue-950/20 text-blue-600">
                  <CheckCircle className="h-12 w-12 text-blue-600" />
                </div>
                <h4 className="text-xl font-extrabold text-blue-950 dark:text-white mb-2">{data.form.successTitle}</h4>
                <p className="text-xs text-gray-500 leading-relaxed max-w-xs mb-6">
                  {data.form.successSubtext.replace('{name}', formData.name).replace('{doctor}', formData.doctor).replace('{department}', formData.department).replace('{date}', formData.date)}
                </p>
                <button
                  onClick={handleReset}
                  className="w-full max-w-[200px] rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 py-3 text-sm font-bold text-white transition-all hover:from-blue-700 hover:to-sky-600 active:scale-98 shadow-md"
                >
                  {data.form.successButton}
                </button>
              </motion.div>
            )}
          </div>

          {/* WhatsApp / Trust Right Side */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            <div className="rounded-[32px] bg-gradient-to-br from-white via-blue-50/70 to-sky-50 p-6 border border-blue-100 shadow-md flex flex-col justify-between flex-1 min-h-[220px]">
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

            {/* Corporate Accreditations and Assurances */}
            <div className="rounded-[32px] border border-blue-100 dark:border-zinc-800 p-6 flex flex-col justify-between bg-white/80 dark:bg-zinc-850 shadow-sm flex-1">
              <div>
                <h4 className="text-xs font-bold text-blue-950 dark:text-white uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <ShieldCheck className="h-4.5 w-4.5 text-blue-600" />
                  <span>Clinical Assurances</span>
                </h4>
                <ul className="space-y-2.5 text-xs text-gray-500 leading-normal">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500">â—</span>
                    <span>100% HIPAA-compliant record management.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500">â—</span>
                    <span>Pre-authorization cashless support for listing panels.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500">â—</span>
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
      </div>
    </section>
  );
}
