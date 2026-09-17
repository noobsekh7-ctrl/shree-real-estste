import React, { useState } from 'react';
import { Building2, Home, KeyRound, Compass, Hammer, TrendingUp, CheckCircle, ArrowRight, MessageCircle, Calendar } from 'lucide-react';
import { SERVICES, COMPANY_INFO } from '../data/companyData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onOpenConsultation: (preselectedService?: string) => void;
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenConsultation, onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2': return <Building2 className="w-6 h-6 text-[#C05621]" />;
      case 'Home': return <Home className="w-6 h-6 text-[#C05621]" />;
      case 'KeyRound': return <KeyRound className="w-6 h-6 text-[#C05621]" />;
      case 'Compass': return <Compass className="w-6 h-6 text-[#C05621]" />;
      case 'Hammer': return <Hammer className="w-6 h-6 text-[#C05621]" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-[#C05621]" />;
      default: return <Building2 className="w-6 h-6 text-[#C05621]" />;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-20 bg-[#F4EDE4]/60 border-t border-[#E8DFD5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EADBCE] text-[#8C3B12] text-xs font-bold uppercase tracking-wider mb-2.5">
            <span>Our Comprehensive Solutions • हमारी सेवाएं</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#221C18] tracking-tight font-serif-display">
            Real Estate Advisory & Construction Services
          </h2>
          <p className="text-base sm:text-lg text-[#C05621] font-hindi font-bold mt-1">
            "प्लॉट चयन से लेकर गृह प्रवेश तक — पूर्ण विश्वास और गुणवत्ता"
          </p>
          <p className="text-sm sm:text-base text-[#6B5A4E] mt-3">
            Whether constructing a new family home, finding a prime registered plot in Indore, or remodeling an existing property, we deliver unmatched professionalism.
          </p>
        </div>

        {/* Services 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-6 border border-[#E8DFD5] shadow-sm hover:shadow-xl hover:border-[#C05621]/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Top header & icon */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FAF7F2] border border-[#EADBCE] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#C05621]/10 transition-all">
                    {getIcon(service.iconName)}
                  </div>
                  {service.startingAt && (
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#FAF1E6] text-[#8C3B12] border border-[#EADBCE]">
                      {service.startingAt}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#221C18] group-hover:text-[#C05621] transition-colors leading-snug">
                  {service.title}
                </h3>
                <p className="text-xs font-bold text-[#8C3B12] font-hindi mb-3">
                  {service.hindiTitle}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#57483D] leading-relaxed mb-4">
                  {service.shortDesc}
                </p>

                {/* Feature bullets */}
                <div className="space-y-2 py-3 border-t border-[#F0E8DF]">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#4A3B32]">
                      <CheckCircle className="w-3.5 h-3.5 text-[#C05621] flex-shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 border-t border-[#F0E8DF] flex items-center justify-between gap-2 mt-4">
                <button
                  onClick={() => onSelectService(service)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#8C3B12] hover:text-[#C05621] transition-colors cursor-pointer"
                >
                  <span>Full Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center gap-1.5">
                  <a
                    href={`https://wa.me/919131735020?text=${encodeURIComponent(`Hello Shree Sanwariya team, I would like to inquire about ${service.title} (${service.hindiTitle}) in Indore.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-[#25D366]/10 text-[#128C7E] hover:bg-[#25D366] hover:text-white transition-colors"
                    title="Ask on WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>

                  <button
                    onClick={() => onOpenConsultation(service.title)}
                    className="px-3 py-1.5 rounded-lg bg-[#C05621] hover:bg-[#9C4114] text-white font-semibold text-xs transition-colors cursor-pointer"
                  >
                    Book Consultation
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Process Steps Bar */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#2A211B] text-white shadow-xl">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs uppercase tracking-widest text-[#FED7AA] font-bold">
              Our 4-Step Working Process
            </span>
            <h3 className="text-xl sm:text-2xl font-bold mt-1 text-white font-serif-display">
              How We Execute Your Dream Project
            </h3>
            <p className="text-xs sm:text-sm text-[#D5C2B1] font-hindi mt-1">
              "योजना से निर्माण तक 4 आसान चरण"
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Site Visit & Requirement Analysis",
                hindi: "साइट विजिट एवं आवश्यकता विश्लेषण",
                desc: "Free on-site inspection, soil check, plot dimension verification, and understanding your architectural needs."
              },
              {
                step: "02",
                title: "Vastu 2D/3D Plan & Transparent BOQ",
                hindi: "2D/3D नक्शा एवं पारदर्शी बिल",
                desc: "Custom architectural planning with detailed itemized material breakdown and fixed stage-wise pricing."
              },
              {
                step: "03",
                title: "Quality Construction & Supervision",
                hindi: "गुणवत्ता निर्माण एवं दैनिक निगरानी",
                desc: "Certified cement, steel, curing supervision, and regular photo/video updates sent directly to your WhatsApp."
              },
              {
                step: "04",
                title: "On-Time Handover & Warranty",
                hindi: "समय पर गृह प्रवेश एवं वारंटी",
                desc: "Complete deep cleaning, testing of electrical/plumbing, key handover ceremony, and structural assurance."
              }
            ].map((stepItem, idx) => (
              <div key={idx} className="relative p-4 rounded-xl bg-[#3B2E24]/60 border border-[#524134]">
                <div className="text-2xl font-extrabold text-[#FED7AA]/40 mb-2 font-serif-display">
                  {stepItem.step}
                </div>
                <h4 className="text-sm font-bold text-white mb-1">
                  {stepItem.title}
                </h4>
                <p className="text-[11px] text-[#FED7AA] font-hindi mb-2">
                  {stepItem.hindi}
                </p>
                <p className="text-xs text-[#D5C2B1] leading-relaxed">
                  {stepItem.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
