import React from 'react';
import { Building2, Compass, CheckCircle2, ShieldCheck, Users2, Award, Clock, IndianRupee } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface AboutSectionProps {
  onOpenConsultation: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenConsultation }) => {
  const pillarPoints = [
    {
      icon: Building2,
      title: "Quality Turnkey Construction",
      hindi: "गुणवत्तापूर्ण संपूर्ण निर्माण",
      desc: "From architectural floor plans, 3D elevations, foundation excavation, RCC structural casting, to plumbing, electrical, and luxury painting—handled with precision."
    },
    {
      icon: Compass,
      title: "Verified Real Estate Advisory",
      hindi: "सत्यापित प्रॉपर्टी परामर्श",
      desc: "100% legal title clearance, T&CP layout approval checks, IMC registry assistance, and best property deal matching in Indore's prime residential zones."
    },
    {
      icon: Clock,
      title: "Strict On-Time Delivery",
      hindi: "नियत समय पर डिलीवरी",
      desc: "Transparent construction milestones backed by written schedule commitments. We ensure you move into your dream home exactly when promised."
    },
    {
      icon: IndianRupee,
      title: "Budget-Friendly & Zero Hidden Costs",
      hindi: "बजट-अनुकूल एवं पारदर्शी लागत",
      desc: "Itemized material specifications and fixed pricing ensure you never face surprise rate escalations halfway through your home construction."
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-[#FAF7F2] border-t border-[#E8DFD5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EADBCE] text-[#8C3B12] text-xs font-bold uppercase tracking-wider mb-2.5">
            <span>About Our Company • हमारे बारे में</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#221C18] tracking-tight font-serif-display">
            Building Trust, Building Homes in Indore
          </h2>
          <p className="text-base sm:text-lg text-[#C05621] font-hindi font-bold mt-1">
            "सांवरिया रियल एस्टेट एंड कंस्ट्रक्शन — आपके सपनों का घर, हमारी ज़िम्मेदारी"
          </p>
          <p className="text-sm sm:text-base text-[#6B5A4E] mt-3 leading-relaxed">
            Headquartered in Loknayak Nagar, Indore, <strong>Shree Sanwariya Real Estate and Construction</strong> was founded on the principles of absolute transparency, structural durability, and authentic local guidance. We bridge the gap between finding prime land and constructing your dream home.
          </p>
        </div>

        {/* Core Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Image Collage & Experience Showcase */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#E8DFD5] bg-white">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d0fbb180c5f5?auto=format&fit=crop&w=800&q=80"
                alt="Shree Sanwariya Construction Quality Supervision"
                className="w-full h-64 sm:h-72 object-cover"
              />
              <div className="p-4 bg-gradient-to-r from-[#2A211B] to-[#3B2E24] text-white flex items-center justify-between">
                <div>
                  <p className="text-xs text-[#FED7AA] font-semibold uppercase tracking-wide">
                    Construction Quality Benchmark
                  </p>
                  <p className="text-sm font-bold text-white">
                    Tata Tiscon Fe-550D & Ultratech Grade-53
                  </p>
                </div>
                <div className="bg-[#C05621] text-white p-2.5 rounded-xl font-bold text-center">
                  <span className="block text-xs uppercase">Rating</span>
                  <span className="text-sm font-extrabold">4.9 ★</span>
                </div>
              </div>
            </div>

            {/* Quick Fact Banner */}
            <div className="bg-[#EADBCE]/50 border border-[#D5C2B1] rounded-xl p-4 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-full bg-[#C05621] text-white flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <p className="text-xs sm:text-sm text-[#4A3B32] font-medium leading-snug">
                Every project is personally supervised by our experienced civil engineers to maintain exact RCC slump, curing standards, and structural longevity.
              </p>
            </div>
          </div>

          {/* Right Column: The 4 Value Pillars */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {pillarPoints.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={index}
                    className="p-5 rounded-xl bg-white border border-[#E8DFD5] shadow-sm hover:shadow-md hover:border-[#C05621]/40 transition-all group"
                  >
                    <div className="w-11 h-11 rounded-lg bg-[#FAF7F2] border border-[#EADBCE] text-[#C05621] flex items-center justify-center mb-3 group-hover:bg-[#C05621] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-[#221C18] group-hover:text-[#C05621] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#8C3B12] font-hindi mb-2">
                      {pillar.hindi}
                    </p>
                    <p className="text-xs text-[#57483D] leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTA row */}
            <div className="mt-8 p-4 sm:p-5 rounded-xl bg-[#FAF1E6] border border-[#D4A373]/50 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-[#221C18]">
                  Planning to build or buy in Indore?
                </p>
                <p className="text-xs text-[#6B5A4E]">
                  Get a free site visit consultation and estimate at your convenience.
                </p>
              </div>

              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <button
                  onClick={onOpenConsultation}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-[#C05621] hover:bg-[#9C4114] text-white font-bold text-xs shadow-sm hover:shadow transition-all cursor-pointer whitespace-nowrap"
                >
                  Book Free Site Visit
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
