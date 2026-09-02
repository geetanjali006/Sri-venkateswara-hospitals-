"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, MessageSquare, Clock, Compass, Car, Info, ExternalLink } from "lucide-react";

interface ContactProps {
  data: any;
}

export default function Contact({ data }: ContactProps) {
  const handleDirectionsClick = () => {
    window.open(data.map.linkUrl, "_blank");
  };

  return (
    <section id="contact" className="bg-transparent font-sans px-0 sm:px-4 pb-16 flex flex-col items-center overflow-hidden">
      <div className="relative w-full max-w-[1440px] rounded-[0px] sm:rounded-[40px] overflow-hidden bg-transparent pt-16 pb-16">
      {/* Background Decorative Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />

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

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch max-w-6xl mx-auto">
          
          {/* Left Column: Interactive Map Embed & Directions Action (7/12 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="relative w-full h-[380px] sm:h-[450px] rounded-[32px] overflow-hidden shadow-lg border border-gray-200 dark:border-zinc-800 bg-gray-100 group">
              <iframe
                src={data.map.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sri Venkateswara Hospital Google Map"
                className="transition-transform duration-700 group-hover:scale-[1.01]"
              ></iframe>
              
              {/* Overlay floating action to open Google Maps */}
              <div className="absolute bottom-5 right-5 z-20">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleDirectionsClick}
                  className="flex items-center gap-2 bg-[#0B1F3A] hover:bg-navy-950 text-white text-xs font-bold px-4.5 py-2.5 rounded-xl shadow-xl transition-colors border border-navy-800"
                >
                  <span>{data.map.btnText}</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </motion.button>
              </div>
            </div>

          </div>

          {/* Right Column: Address, Contact Info, Parking Layout (5/12 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* Primary Address Card */}
            <div className="bg-white dark:bg-zinc-900 p-6 sm:p-8 rounded-[32px] border border-gray-150 dark:border-zinc-800 shadow-md flex-1">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 mb-5">
                <MapPin className="h-5.5 w-5.5" />
              </div>
              
              <h3 className="text-xl font-extrabold text-[#0B1F3A] dark:text-white mb-2">{data.addressCard.title}</h3>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-zinc-400 leading-relaxed mb-4">
                {data.addressCard.desc}
              </p>
              
              <address className="not-italic text-sm text-[#0B1F3A] dark:text-zinc-200 font-semibold leading-relaxed border-t border-gray-100 dark:border-zinc-800 pt-4">
                {data.addressCard.addressLines.map((line: string, i: number) => (
                  <span key={i}>{line}<br /></span>
                ))}
              </address>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleDirectionsClick}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-3 px-4 rounded-xl shadow-md transition-colors"
                >
                  <span>{data.addressCard.btnText}</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* Consulting Hours & Direct Phone/WhatsApp Anchors */}
            <div className="bg-gradient-to-br from-[#061830] via-[#0a2540] to-[#0f3a65] text-white p-6 sm:p-8 rounded-[32px] border border-blue-900/50 shadow-lg flex flex-col justify-between gap-6">
              
              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <Clock className="h-5 w-5 text-sky-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-sky-300 uppercase tracking-widest block mb-1">{data.infoCard.hoursTitle}</span>
                    <span className="text-sm font-bold block">{data.infoCard.hoursDesc}</span>
                    <span className="text-xs text-cyan-300 font-semibold block mt-1">• {data.infoCard.hoursEmergency}</span>
                  </div>
                </div>

                <div className="flex gap-3 items-start border-t border-blue-900/50 pt-4">
                  <Phone className="h-5 w-5 text-sky-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-sky-300 uppercase tracking-widest block mb-1">{data.infoCard.phoneTitle}</span>
                    <a href={data.infoCard.phone1Link} className="text-sm font-bold block hover:text-sky-300 transition-colors">
                      {data.infoCard.phone1Text}
                    </a>
                    <a href={data.infoCard.phone2Link} className="text-sm font-bold block hover:text-sky-300 transition-colors mt-0.5">
                      {data.infoCard.phone2Text}
                    </a>
                  </div>
                </div>
              </div>

              <a
                href={data.infoCard.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white font-bold text-xs py-3 px-4 shadow-md transition-colors"
              >
                <MessageSquare className="h-4 w-4 fill-white stroke-none" />
                <span>{data.infoCard.whatsappBtn}</span>
              </a>

            </div>

          </div>

        </div>

        </div>
      </div>
    </section>
  );
}

