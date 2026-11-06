import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Phone } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/mockData';

interface Props {
  onOpenQuoteModal: (productType?: string) => void;
}

export const Navbar: React.FC<Props> = ({ onOpenQuoteModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Products', href: '#products' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Success Stories', href: '#clients' },
    { label: 'Industries', href: '#industries' },
    { label: 'Savings', href: '#savings' },
    { label: 'Why Us', href: '#why' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        className={`transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-[#dfe6f1] ${
          scrolled ? 'shadow-[0_8px_30px_rgba(12,47,110,0.12)] py-2' : 'py-3'
        }`}
        id="nav"
      >
        <div className="max-w-[1240px] mx-auto px-3 sm:px-6 flex items-center justify-between h-[64px] sm:h-[80px] gap-2 sm:gap-4">
          {/* Brand Logo */}
          <a
            href="#top"
            className="flex items-center gap-2 sm:gap-3 group focus:outline-none flex-shrink-0 mr-1 sm:mr-4 xl:mr-8 min-w-0"
            aria-label="RISETECH Conveyor System & Belts Home"
          >
            <div className="w-[36px] h-[30px] sm:w-[50px] sm:h-[42px] flex-shrink-0 drop-shadow-[0_4px_6px_rgba(12,47,110,0.25)] transition-transform duration-300 group-hover:scale-105">
              <svg viewBox="0 0 120 96" className="w-full h-full" aria-hidden="true">
                <defs>
                  <linearGradient id="nav-gold" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#ffd84d" />
                    <stop offset="50%" stopColor="#f5b400" />
                    <stop offset="100%" stopColor="#c98a00" />
                  </linearGradient>
                  <linearGradient id="nav-silver" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#f4f6f9" />
                    <stop offset="60%" stopColor="#b7bfca" />
                    <stop offset="100%" stopColor="#7d8794" />
                  </linearGradient>
                </defs>
                <path d="M6 30 H48 V60 H28 L16 60 Z" fill="url(#nav-gold)" />
                <path d="M18 14 H58 L44 30 H6 Z" fill="url(#nav-gold)" />
                <path d="M52 16 H116 V28 H84 V80 H64 V28 H52 Z" fill="url(#nav-silver)" />
              </svg>
            </div>
            <div className="brand-txt flex flex-col whitespace-nowrap">
              <b className="text-[1.12rem] sm:text-[1.35rem]">{COMPANY_DETAILS.brandName}</b>
              <small className="flex items-center gap-1.5 sm:gap-2 text-[0.58rem] sm:text-[0.66rem]">
                <span>Conveyor System &amp; Belts</span>
                <span className="hidden sm:inline-block est-badge">EST. 2021</span>
              </small>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-7 text-[0.88rem] xl:text-[0.93rem] font-semibold text-[#0c2f6e] whitespace-nowrap">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative py-1 whitespace-nowrap transition-colors hover:text-[#1d5fd6] group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#ffc20e] rounded-full transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <a
              href={`tel:${COMPANY_DETAILS.phoneClean}`}
              className="hidden xl:flex items-center gap-1.5 text-xs font-bold text-[#0c2f6e] px-3.5 py-2 rounded-lg bg-[#f0f4fa] hover:bg-[#e4ecf7] transition-colors whitespace-nowrap border border-[#dfe6f1]"
              title="Direct Phone Line"
            >
              <Phone className="w-3.5 h-3.5 text-[#1d5fd6]" />
              <span>{COMPANY_DETAILS.phone}</span>
            </a>
            <button
              onClick={() => onOpenQuoteModal()}
              className="btn-sheen inline-flex items-center gap-2 bg-[#0c2f6e] text-white px-5 py-2.5 rounded-full font-bold text-[0.9rem] shadow-[0_10px_24px_rgba(12,47,110,0.22)] hover:bg-[#071f4d] hover:-translate-y-0.5 transition-all cursor-pointer whitespace-nowrap"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4 text-[#ffc20e]" />
            </button>
          </div>

          {/* Mobile Actions: Direct Call Dialer Button + Hamburger */}
          <div className="flex lg:hidden items-center gap-2 flex-shrink-0">
            <a
              href={`tel:${COMPANY_DETAILS.phoneClean}`}
              className="flex items-center gap-1.5 text-xs font-bold text-[#0c2f6e] px-2.5 sm:px-3 py-1.5 rounded-lg bg-[#f0f4fa] active:bg-[#dfeaf8] border border-[#dfe6f1] transition-colors shadow-xs"
              aria-label="Call +91 9004450610 in Dialer"
              title="Open dialer to call RISETECH"
            >
              <Phone className="w-3.5 h-3.5 text-[#1d5fd6]" />
              <span className="font-bold">Call</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 sm:p-2 text-[#0c2f6e] rounded-lg hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#dfe6f1] bg-white px-6 py-4 shadow-xl animate-in slide-in-from-top duration-200">
            <div className="flex flex-col divide-y divide-[#dfe6f1]">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="py-3 font-semibold text-[#0c2f6e] hover:text-[#1d5fd6] transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-slate-300">›</span>
                </a>
              ))}
            </div>

            <div className="mt-5 pt-4 border-t border-[#dfe6f1] flex flex-col gap-3">
              <a
                href={`tel:${COMPANY_DETAILS.phoneClean}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-[#dfe6f1] text-[#0c2f6e] font-bold text-sm bg-slate-50"
              >
                <Phone className="w-4 h-4 text-[#1d5fd6]" />
                <span>Call {COMPANY_DETAILS.phone}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full py-3 rounded-full bg-[#ffc20e] text-[#071f4d] font-black text-sm tracking-wide shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request a Custom Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
