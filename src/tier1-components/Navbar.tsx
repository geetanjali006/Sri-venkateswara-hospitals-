"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, Calendar, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, useScroll, useSpring } from "framer-motion";

interface NavbarProps {
  onOpenBooking: () => void;
  data: any;
}

export default function Navbar({ data }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Framer motion scroll progress indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = data.links;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] flex justify-between items-center px-4 sm:px-10 h-20 sm:h-24 transition-all duration-500 pointer-events-none",
        isScrolled ? "glass-nav" : "bg-transparent"
      )}
    >

      {/* Top White Border Bar */}
      <div className={cn(
        "absolute top-0 left-0 right-0 h-3 bg-white pointer-events-auto z-0 transition-opacity",
        isScrolled ? "opacity-0" : "opacity-100"
      )}></div>

      {/* Left Navigation Items - Forced single row */}
      <nav className="hidden lg:flex items-center gap-1 xl:gap-2 relative z-10 pointer-events-auto flex-nowrap justify-start max-w-[44vw] xl:max-w-[46vw]">
        {navLinks?.map((link: any) => (
          <a
            key={link.name}
            href={link.href}
            className={cn(
              "px-2.5 py-1.5 xl:px-3.5 xl:py-2 rounded-full border text-[11px] xl:text-xs font-bold transition-all backdrop-blur-md shadow-sm whitespace-nowrap shrink-0",
              isScrolled
                ? "border-black/10 text-gray-800 hover:bg-black/5"
                : "border-white/35 text-white hover:bg-white/15 hover:border-white/60"
            )}
          >
            {link.name}
          </a>
        ))}
      </nav>

      {/* Center Logo Cutout */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 z-20">
        <div className="navbar-cutout px-5 sm:px-8 pt-2 pb-3 pointer-events-auto flex justify-center items-center shadow-md bg-white">
          <a href="#home" className="flex items-center gap-2.5 group">
            <img
              src="/sv-icon.png"
              alt="Sri Venkateswara Hospital"
              className="h-10 sm:h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300 filter drop-shadow-sm"
            />
            <div className="flex flex-col text-left leading-none">
              <span className="text-[10px] font-semibold text-teal-600 tracking-wider font-serif italic">Sri</span>
              <span className="text-xs sm:text-sm font-extrabold text-[#061830] tracking-tight whitespace-nowrap">
                VENKATESWARA
              </span>
              <span className="text-[9px] font-bold text-blue-700 tracking-widest uppercase mt-0.5">HOSPITAL</span>
            </div>
          </a>
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-2 sm:gap-3 relative z-10 pointer-events-auto ml-auto">

        {/* Search Placeholder */}
        <div className={cn(
          "hidden lg:flex items-center backdrop-blur-md rounded-full px-4 py-2 shadow-sm transition-colors border",
          isScrolled ? "bg-black/5 border-black/10" : "bg-white/20 border-white/40"
        )}>
          <span className={cn(
            "text-sm font-medium mr-4 transition-colors",
            isScrolled ? "text-gray-800" : "text-white/90"
          )}>Search here...</span>
          <div className={cn(
            "rounded-full p-1 shadow-sm transition-colors",
            isScrolled ? "bg-black text-white" : "bg-white text-black"
          )}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
          </div>
        </div>

        {/* Book Now Button */}
        <a
          href="/consultation"
          className={cn(
            "hidden lg:flex items-center gap-3 rounded-full px-6 py-2.5 text-sm font-bold shadow-xl hover:scale-105 active:scale-95 transition-all group bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 text-white hover:from-blue-700 hover:to-sky-600"
          )}
        >
          <span>Book Now</span>
          <div className="p-1 rounded-full bg-white text-blue-600 group-hover:rotate-45 transition-transform">
            <ArrowRight className="h-4 w-4" />
          </div>
        </a>

        {/* Mobile / Hamburger Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "rounded-full p-3 shadow-xl transition-all hover:scale-105",
            isScrolled ? "bg-blue-900 text-white hover:bg-blue-800" : "bg-blue-950 text-white hover:bg-blue-900"
          )}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-4 right-4 mt-2 rounded-2xl bg-white/95 backdrop-blur-md shadow-2xl border border-blue-100 flex flex-col p-4 lg:hidden pointer-events-auto z-50">
          <nav className="flex flex-col">
            {navLinks?.map((link: any) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="py-3 border-b border-gray-100 text-sm font-bold uppercase tracking-wider text-blue-950 hover:text-blue-600 text-center"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
