import React from 'react';
import { Clock, ShieldCheck, BadgePercent, MapPin, Star, Layers, CheckCircle2, Award } from 'lucide-react';
import { WHY_CHOOSE_US, COMPANY_INFO } from '../data/companyData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Clock': return <Clock className="w-6 h-6 text-[#C05621]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#C05621]" />;
      case 'BadgePercent': return <BadgePercent className="w-6 h-6 text-[#C05621]" />;
      case 'MapPin': return <MapPin className="w-6 h-6 text-[#C05621]" />;
      case 'Star': return <Star className="w-6 h-6 text-[#C05621]" />;
      case 'Layers': return <Layers className="w-6 h-6 text-[#C05621]" />;
      default: return <ShieldCheck className="w-6 h-6 text-[#C05621]" />;
    }
  };

  return (
    <section id="why-us" className="py-16 sm:py-20 bg-[#FAF7F2] border-t border-[#E8DFD5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EADBCE] text-[#8C3B12] text-xs font-bold uppercase tracking-wider mb-2.5">
            <span>Why Choose Us • हमारी विशेषताएं</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#221C18] tracking-tight font-serif-display">
            The Shree Sanwariya Trust & Quality Advantage
          </h2>
          <p className="text-base sm:text-lg text-[#C05621] font-hindi font-bold mt-1">
            "मजबूत नींव, भरोसेमंद काम और समय पर डिलीवरी"
          </p>
          <p className="text-sm sm:text-base text-[#6B5A4E] mt-3">
            Building a house is a once-in-a-lifetime investment. We treat your hard-earned funds with the highest degree of respect, transparency, and civil engineering integrity.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((point) => (
            <div
              key={point.id}
              className="bg-white rounded-2xl p-6 border border-[#E8DFD5] shadow-sm hover:shadow-lg hover:border-[#C05621]/40 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FAF7F2] border border-[#EADBCE] flex items-center justify-center group-hover:scale-105 group-hover:bg-[#C05621]/10 transition-all">
                    {getIcon(point.iconName)}
                  </div>
                  {point.badge && (
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#FAF1E6] text-[#8C3B12] border border-[#EADBCE]">
                      {point.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-[#221C18] group-hover:text-[#C05621] transition-colors mb-1">
                  {point.title}
                </h3>
                <p className="text-xs font-semibold text-[#8C3B12] font-hindi mb-3">
                  {point.hindiTitle}
                </p>
                <p className="text-xs sm:text-sm text-[#57483D] leading-relaxed">
                  {point.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#F0E8DF] flex items-center gap-1.5 text-xs font-semibold text-[#8C3B12]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C05621]" />
                <span>Guaranteed Benchmark</span>
              </div>
            </div>
          ))}
        </div>

        {/* Material Guarantee Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-[#FAF1E6] to-[#F4EDE4] border border-[#D5C2B1] flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#C05621] text-white flex items-center justify-center flex-shrink-0 shadow-md">
              <Award className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-[#221C18]">
                100% Brand-Certified Material Transparency
              </h4>
              <p className="text-xs sm:text-sm text-[#6B5A4E]">
                We use Tata Tiscon / Jindal Steel, Ultratech / Ambuja Cement, Finolex / Havells wiring, Astral pipes, and Kajaria vitrified tiles.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <a
              href={`https://wa.me/919131735020?text=${encodeURIComponent("Namaste! Please send me your detailed material specification sheet & construction rates for Indore.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-lg bg-[#C05621] hover:bg-[#9C4114] text-white font-bold text-xs transition-colors shadow-sm"
            >
              Get Material Specification Sheet
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
