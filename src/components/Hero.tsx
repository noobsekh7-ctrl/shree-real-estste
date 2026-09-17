import React from 'react';
import { Star, MessageCircle, Calendar, ShieldCheck, Clock, MapPin, CheckCircle2, Award, ChevronRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface HeroProps {
  onOpenConsultation: () => void;
  onExploreProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation, onExploreProjects }) => {
  return (
    <section id="hero" className="relative overflow-hidden pt-8 pb-16 lg:py-20 bg-gradient-to-b from-[#FAF7F2] via-[#F4EDE4] to-[#FAF7F2]">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#C05621_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Google Rating Trust Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#EADBCE] shadow-sm text-xs text-[#4A3B32]">
              <div className="flex items-center gap-1 bg-[#F59E0B]/15 px-2 py-0.5 rounded-full text-[#B45309] font-bold">
                <Star className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
                <span>4.9 / 5.0</span>
              </div>
              <span className="font-semibold text-[#2D241E]">42 Verified Google Reviews</span>
              <span className="w-1 h-1 rounded-full bg-[#C05621]"></span>
              <span className="text-[#8C3B12] font-medium hidden sm:inline">Loknayak Nagar, Indore</span>
            </div>

            {/* Bilingual Title Header */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="h-0.5 w-6 bg-[#C05621]"></span>
                <span className="text-xs sm:text-sm uppercase tracking-widest font-bold text-[#C05621]">
                  Real Estate Consultant & Construction Company
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#221C18] tracking-tight leading-[1.15] font-serif-display mb-3">
                Shree Sanwariya <br />
                <span className="text-[#C05621] font-hindi text-2xl sm:text-3xl lg:text-4xl font-bold">
                  श्री सांवरिया रियल एस्टेट एंड कंस्ट्रक्शन
                </span>
              </h1>

              {/* Taglines */}
              <div className="border-l-4 border-[#C05621] pl-3.5 my-3 bg-[#EADBCE]/30 py-2 rounded-r-lg">
                <p className="text-lg sm:text-xl font-bold text-[#8C3B12] font-hindi">
                  "{COMPANY_INFO.taglineHindi}"
                </p>
                <p className="text-xs sm:text-sm font-medium text-[#68574B] mt-0.5">
                  Building Trust, Building Homes • End-to-End Property & Construction Solutions
                </p>
              </div>
            </div>

            {/* Narrative Subtext */}
            <p className="text-sm sm:text-base text-[#57483D] max-w-2xl leading-relaxed">
              Whether you are looking to purchase verified residential plots in Indore, invest in high-appreciation corridors, or construct a turnkey luxury home with 100% lab-tested materials and on-time delivery — Shree Sanwariya brings over a decade of local craftsmanship and honesty.
            </p>

            {/* Action CTA Buttons (WhatsApp + Free Consultation) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto pt-2">
              <a
                href={COMPANY_INFO.whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                id="hero-whatsapp-btn"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>WhatsApp पर पूछें</span>
                <span className="text-xs bg-white/20 px-1.5 py-0.5 rounded font-normal">Fast Reply</span>
              </a>

              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#C05621] hover:bg-[#9C4114] text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
                id="hero-consultation-btn"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Free Consultation</span>
              </button>
            </div>

            {/* Trust Highlights Checklist */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-[#E8DFD5] w-full">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#3B2E24]">
                <Clock className="w-4 h-4 text-[#C05621] flex-shrink-0" />
                <span>On-Time Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#3B2E24]">
                <ShieldCheck className="w-4 h-4 text-[#C05621] flex-shrink-0" />
                <span>Tata / Ultratech Material</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#3B2E24] col-span-2 sm:col-span-1">
                <MapPin className="w-4 h-4 text-[#C05621] flex-shrink-0" />
                <span>100% Indore IMC Verified</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Showcase & Trust Card */}
          <div className="lg:col-span-5 relative">
            
            {/* Main Featured Showcase Card */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
              <div className="relative aspect-[4/3] overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                  alt="Shree Sanwariya Luxury Residential Construction in Indore"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"></div>
                
                {/* Badge on Image */}
                <div className="absolute top-3.5 left-3.5 bg-[#FAF7F2]/95 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#EADBCE] shadow-sm flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-[#C05621]" />
                  <span className="text-xs font-bold text-[#221C18]">Loknayak Nagar Project</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[11px] uppercase tracking-wider bg-[#C05621] px-2 py-0.5 rounded font-semibold">
                    Turnkey Construction
                  </span>
                  <h3 className="text-lg font-bold mt-1 text-white leading-snug">
                    Modern 4BHK Duplex & Custom Bungalows
                  </h3>
                  <p className="text-xs text-white/85 line-clamp-1">
                    RCC Superstructure, Vastu Compliant Layout, Premium Finishes
                  </p>
                </div>
              </div>

              {/* Bottom Card Summary */}
              <div className="p-4 bg-[#FAF7F2] border-t border-[#E8DFD5] flex items-center justify-between">
                <div>
                  <p className="text-[11px] text-[#786659] uppercase tracking-wider font-semibold">
                    Construction Rates Starting
                  </p>
                  <p className="text-base font-extrabold text-[#C05621]">
                    ₹1,450 <span className="text-xs text-[#786659] font-normal">/ sq.ft (Turnkey)</span>
                  </p>
                </div>

                <button
                  onClick={onExploreProjects}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#8C3B12] hover:text-[#C05621] bg-[#EADBCE]/50 hover:bg-[#EADBCE] px-3 py-2 rounded-lg transition-colors cursor-pointer"
                >
                  <span>View Projects</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Floating Review Badge Overlay */}
            <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white p-3.5 rounded-xl shadow-xl border border-[#EADBCE] max-w-[240px] hidden sm:block">
              <div className="flex items-center gap-1 text-[#F59E0B] mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#F59E0B]" />
                ))}
              </div>
              <p className="text-xs font-bold text-[#221C18]">
                "Project completed on time within budget"
              </p>
              <p className="text-[10px] text-[#786659] mt-0.5 font-medium">
                – Harshad Parmar (Indore)
              </p>
            </div>

            {/* Floating Experience Badge Overlay */}
            <div className="absolute -top-4 -right-2 sm:-right-4 bg-[#2A211B] text-white p-3 rounded-xl shadow-xl border border-[#4A3B32] text-center hidden sm:block">
              <span className="block text-xl font-extrabold text-[#FED7AA]">100%</span>
              <span className="text-[10px] text-[#D5C2B1] uppercase tracking-wider font-medium">
                Quality Guaranteed
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
