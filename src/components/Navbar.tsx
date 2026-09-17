import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Star, Calendar, HardHat, Compass } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", hindi: "मुख्य पृष्ठ", href: "#hero" },
    { label: "About Us", hindi: "परिचय", href: "#about" },
    { label: "Services", hindi: "सेवाएं", href: "#services" },
    { label: "Projects", hindi: "प्रोजेक्ट्स", href: "#projects" },
    { label: "Cost Estimator", hindi: "लागत अनुमान", href: "#estimator" },
    { label: "Why Choose Us", hindi: "विशेषताएं", href: "#why-us" },
    { label: "Reviews", hindi: "समीक्षाएं", href: "#reviews" },
    { label: "Contact", hindi: "संपर्क", href: "#contact" },
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-[#2A211B] text-[#EADBCE] text-xs sm:text-sm py-1.5 px-4 border-b border-[#3E322A]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1 bg-[#C05621] text-white px-2 py-0.5 rounded text-[11px] font-semibold tracking-wide">
              INDORE
            </span>
            <span className="hidden sm:inline text-[#D5C2B1]">
              PR7J+7WJ, 224, Loknayak Nagar, Indore
            </span>
            <span className="inline sm:hidden text-[#D5C2B1] truncate max-w-[200px]">
              Loknayak Nagar, Indore
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-1.5 bg-[#3B2E24] px-2 py-0.5 rounded text-[#F6E05E]">
              <Star className="w-3.5 h-3.5 fill-[#F6E05E] text-[#F6E05E]" />
              <span className="font-bold text-white">4.9</span>
              <span className="text-[#D5C2B1] hidden md:inline">(42 Google Reviews)</span>
            </div>
            <span className="text-[#D5C2B1] hidden md:inline">
              Daily: 9:00 AM – 8:00 PM
            </span>
            <a 
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center gap-1 text-[#FCD34D] hover:text-white font-medium transition-colors"
            >
              <Phone className="w-3 h-3" />
              <span>{COMPANY_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-md py-2.5 border-b border-[#E8DFD5]' 
            : 'bg-[#FAF7F2] py-3.5 border-b border-[#E8DFD5]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#C05621] to-[#9C4114] text-white flex items-center justify-center shadow-md shadow-[#C05621]/20 group-hover:scale-105 transition-transform">
              <div className="relative flex items-center justify-center">
                <HardHat className="w-6 h-6 text-[#FED7AA]" />
                <Compass className="w-3.5 h-3.5 text-white absolute -bottom-1 -right-1" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-[#221C18] leading-tight font-serif-display">
                  Shree Sanwariya
                </span>
                <span className="text-[10px] bg-[#EADBCE] text-[#8C3B12] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider">
                  4.9★
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-[#8C3B12] font-semibold leading-tight font-hindi">
                श्री सांवरिया रियल एस्टेट एंड कंस्ट्रक्शन
              </p>
              <p className="text-[10px] text-[#786659] hidden sm:block">
                Real Estate Consultant & Construction Co.
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-[#4A3B32] hover:text-[#C05621] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C05621] hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={COMPANY_INFO.whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#25D366]/10 text-[#128C7E] hover:bg-[#25D366] hover:text-white border border-[#25D366]/30 font-medium text-xs transition-all shadow-sm"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#C05621] hover:bg-[#9C4114] text-white font-semibold text-xs shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Consultation</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenConsultation}
              className="inline-flex sm:hidden items-center gap-1 px-2.5 py-1.5 rounded-lg bg-[#C05621] text-white font-semibold text-xs"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#3B2E24] hover:bg-[#EADBCE]/50 focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF7F2] border-b border-[#E8DFD5] px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
            <div className="grid grid-cols-2 gap-2 mb-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm font-semibold text-[#3B2E24] hover:bg-[#EADBCE]/60 hover:text-[#C05621] transition-colors flex flex-col"
                >
                  <span>{link.label}</span>
                  <span className="text-[11px] font-normal text-[#8C3B12] font-hindi">{link.hindi}</span>
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-2.5 pt-3 border-t border-[#E8DFD5]">
              <a
                href={COMPANY_INFO.whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#25D366] text-white font-semibold text-sm shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp पर पूछें (091317 35020)</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#3B2E24] text-white font-semibold text-sm shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call Directly: {COMPANY_INFO.phoneDisplay}</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#C05621] text-white font-semibold text-sm shadow-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Free Consultation (निःशुल्क परामर्श)</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
