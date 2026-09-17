import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQS, COMPANY_INFO } from '../data/companyData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 bg-[#FAF7F2] border-t border-[#E8DFD5] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EADBCE] text-[#8C3B12] text-xs font-bold uppercase tracking-wider mb-2.5">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions • अक्सर पूछे जाने वाले सवाल</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#221C18] tracking-tight font-serif-display">
            Clear Answers to Your Construction & Property Queries
          </h2>
        </div>

        {/* Accordion list */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E8DFD5] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-[#FAF7F2] transition-colors cursor-pointer"
                >
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-[#221C18]">
                      {faq.q}
                    </h3>
                    <p className="text-xs font-semibold text-[#8C3B12] font-hindi mt-0.5">
                      {faq.hindiQ}
                    </p>
                  </div>
                  <div className={`w-8 h-8 rounded-full bg-[#FAF7F2] border border-[#E8DFD5] flex items-center justify-center flex-shrink-0 text-[#C05621] transition-transform duration-200 ${isOpen ? 'rotate-180 bg-[#FAF1E6]' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#57483D] leading-relaxed border-t border-[#F0E8DF] bg-[#FAF7F2]/40">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Note */}
        <div className="mt-8 text-center p-4 rounded-xl bg-[#FAF1E6] border border-[#EADBCE] flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs font-semibold text-[#6B5A4E]">
            Have a question not listed here? Speak directly with our lead builder in Indore.
          </span>
          <a
            href={COMPANY_INFO.whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#16A34A] hover:underline"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp: 091317 35020</span>
          </a>
        </div>

      </div>
    </section>
  );
};
