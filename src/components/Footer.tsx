import React, { useState, useEffect } from 'react';
import { ArrowUp, Phone, Mail } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/mockData';

export const Footer: React.FC = () => {
  const [showToTop, setShowToTop] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => {
      setShowToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-[#071f4d] text-[#c8d6f0] border-t border-white/10">
        {/* Yellow Industrial Brand Bar */}
        <div className="bg-[#ffc20e] text-[#071f4d] text-center py-4 px-4 font-black tracking-widest uppercase text-sm sm:text-base shadow-sm">
          Designed to perform. Built to last.
        </div>

        {/* Footer Details */}
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-white/10 text-sm">
            {/* Brand column */}
            <div className="md:col-span-5 space-y-3">
              <div className="flex items-center gap-2 text-white font-black text-xl tracking-tight">
                <span className="text-[#ffc20e]">RISETECH</span>
                <span className="text-xs px-2 py-0.5 rounded bg-white/10 text-[#ffd84d] uppercase font-bold tracking-wider">
                  EST. 2021
                </span>
              </div>
              <p className="text-xs text-[#a9bddf] leading-relaxed max-w-sm">
                RISETECH Conveyor System and Belts Pvt. Ltd. delivers custom engineered material handling solutions, cleated incline systems, and hygienic modular lines.
              </p>
              <p className="text-xs text-[#8a9dbd] leading-relaxed">
                Precision Engineered Conveying Systems · Bhiwandi Works
              </p>
            </div>

            {/* Quick links */}
            <div className="md:col-span-3 space-y-2 text-xs">
              <strong className="block text-[#ffd84d] uppercase font-extrabold tracking-wider mb-2">
                Conveyor Families
              </strong>
              <div className="flex flex-col space-y-1.5 text-slate-300">
                <a href="#products" className="hover:text-white transition-colors">Belt Conveyors</a>
                <a href="#products" className="hover:text-white transition-colors">Loading / Unloading Inclines</a>
                <a href="#products" className="hover:text-white transition-colors">Modular Plastic Belts</a>
                <a href="#products" className="hover:text-white transition-colors">Heavy-Duty Roller Conveyors</a>
                <a href="#products" className="hover:text-white transition-colors">Curve Conveyors (45° / 90° / 180°)</a>
              </div>
            </div>

            {/* Corporate identity */}
            <div className="md:col-span-4 space-y-2 text-xs">
              <strong className="block text-[#ffd84d] uppercase font-extrabold tracking-wider mb-2">
                Factory &amp; Registered Office
              </strong>
              <p className="text-slate-300 leading-relaxed">
                {COMPANY_DETAILS.address}
              </p>
              <div className="pt-2 flex flex-col gap-1 text-[#ffd84d] font-mono">
                <span>GSTIN: <strong className="text-white">{COMPANY_DETAILS.gstin}</strong></span>
                <span>CIN: <strong className="text-white">{COMPANY_DETAILS.cin}</strong></span>
              </div>
            </div>
          </div>

          {/* Legal / Copyright Bottom Bar */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8a9dbd]">
            <div>
              &copy; {currentYear} <strong className="text-white">RISETECH Conveyor System and Belts Pvt. Ltd.</strong> · All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              <a
                href={`tel:${COMPANY_DETAILS.phoneClean}`}
                className="hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                title="Click to open dialer: +91 9004450610"
                aria-label="Call +91 9004450610 in dialer"
              >
                <Phone className="w-3.5 h-3.5 text-[#ffc20e]" />
                <span>{COMPANY_DETAILS.phone}</span>
              </a>
              <span className="text-white/20">|</span>
              <a href={`mailto:${COMPANY_DETAILS.email}`} className="hover:text-white flex items-center gap-1 transition-colors">
                <Mail className="w-3 h-3 text-[#ffc20e]" />
                <span>{COMPANY_DETAILS.email}</span>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed right-6 bottom-6 z-40 w-12 h-12 rounded-full bg-[#ffc20e] text-[#071f4d] font-black shadow-[0_10px_30px_rgba(255,194,14,0.45)] flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-110 active:scale-95 ${
          showToTop
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Back to top"
        title="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 stroke-[3]" />
      </button>
    </>
  );
};
