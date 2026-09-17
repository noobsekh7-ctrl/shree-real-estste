import React from 'react';
import { Star, CheckCircle, Quote, MessageSquare, ExternalLink } from 'lucide-react';
import { TESTIMONIALS, COMPANY_INFO } from '../data/companyData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-16 sm:py-20 bg-[#FAF7F2] border-t border-[#E8DFD5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EADBCE] text-[#8C3B12] text-xs font-bold uppercase tracking-wider mb-2.5">
            <span>Customer Testimonials • वास्तविक ग्राहक समीक्षाएं</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#221C18] tracking-tight font-serif-display">
            Trusted by Families and Investors Across Indore
          </h2>
          <p className="text-base sm:text-lg text-[#C05621] font-hindi font-bold mt-1">
            "ग्राहकों का अटूट विश्वास ही हमारी सबसे बड़ी पूंजी है"
          </p>
        </div>

        {/* Google Trust Score Summary Banner */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8DFD5] shadow-sm mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
            <div className="w-16 h-16 rounded-2xl bg-[#F8F9FA] border border-[#E8DFD5] flex items-center justify-center p-3 shadow-inner flex-shrink-0">
              {/* Google stylized G */}
              <svg className="w-10 h-10" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
            </div>

            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="text-3xl font-extrabold text-[#221C18] font-serif-display">4.9</span>
                <div className="flex items-center text-[#F59E0B]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#F59E0B]" />
                  ))}
                </div>
              </div>
              <p className="text-xs sm:text-sm font-bold text-[#221C18] mt-0.5">
                Outstanding Rating based on 42+ Verified Google Reviews
              </p>
              <p className="text-xs text-[#786659]">
                Verified Business • Loknayak Nagar, Indore, Madhya Pradesh
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://maps.google.com/?q=PR7J%2B7WJ,+224,+Loknayak+Nagar,+Indore,+Madhya+Pradesh+452002"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-[#D5C2B1] bg-[#FAF7F2] text-[#3B2E24] hover:bg-[#EADBCE] font-bold text-xs transition-colors"
            >
              <span>View On Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Real Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-6 border border-[#E8DFD5] shadow-sm hover:shadow-lg transition-all flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-[#F59E0B]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F59E0B]" />
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-[#16A34A] bg-[#DCFCE7] px-2 py-0.5 rounded-full">
                    <CheckCircle className="w-3 h-3" />
                    <span>Verified</span>
                  </div>
                </div>

                {/* Quotes */}
                {t.hindiQuote && (
                  <div className="mb-2 p-2.5 rounded-lg bg-[#FAF1E6] border-l-2 border-[#C05621]">
                    <p className="text-xs sm:text-sm font-bold text-[#8C3B12] font-hindi">
                      "{t.hindiQuote}"
                    </p>
                  </div>
                )}

                <p className="text-xs sm:text-sm text-[#4A3B32] leading-relaxed italic mb-4">
                  "{t.englishQuote}"
                </p>
              </div>

              {/* Author Details */}
              <div className="pt-4 border-t border-[#F0E8DF] flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${t.avatarBg || 'bg-amber-700'} text-white font-bold flex items-center justify-center text-sm shadow-sm`}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#221C18]">
                    {t.name}
                  </h4>
                  <p className="text-[11px] text-[#786659]">
                    {t.role} • <span className="text-[#8C3B12]">{t.projectType}</span>
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Local Assurance Callout */}
        <div className="mt-10 text-center">
          <p className="text-xs sm:text-sm text-[#6B5A4E]">
            Are you an existing client of Shree Sanwariya? We appreciate your trust and feedback on Google Reviews.
          </p>
        </div>

      </div>
    </section>
  );
};
