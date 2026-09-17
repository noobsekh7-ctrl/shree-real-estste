import React, { useState } from 'react';
import { MessageCircle, X, Phone, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Mini Help Popover / Tooltip */}
      {showTooltip && (
        <div className="mb-3 bg-white rounded-2xl p-3.5 shadow-2xl border border-[#E8DFD5] max-w-xs animate-in slide-in-from-bottom duration-300 relative">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute -top-2 -left-2 w-5 h-5 bg-[#3B2E24] text-white rounded-full flex items-center justify-center text-[10px] hover:bg-[#C05621] transition-colors"
            title="Dismiss"
          >
            <X className="w-3 h-3" />
          </button>
          
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping"></span>
            <span className="text-[11px] font-bold text-[#16A34A] uppercase tracking-wider">
              Online • Fast Response
            </span>
          </div>
          
          <p className="text-xs font-bold text-[#221C18]">
            Need property or construction quotes in Indore?
          </p>
          <p className="text-[11px] text-[#786659] font-hindi mt-0.5">
            "हमसे व्हाट्सएप पर सीधे बात करें (091317 35020)"
          </p>

          <a
            href={COMPANY_INFO.whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2.5 w-full inline-flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs shadow-sm transition-all"
          >
            <span>Start WhatsApp Chat</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      )}

      {/* Floating Action WhatsApp Button */}
      <a
        href={COMPANY_INFO.whatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white shadow-2xl hover:shadow-[#25D366]/50 hover:scale-110 transition-all duration-300 focus:outline-none"
        aria-label="Chat on WhatsApp with Shree Sanwariya"
      >
        {/* Ripple effect */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none"></span>
        
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-white" />
        
        {/* Unread badge indicator */}
        <span className="absolute top-0 right-0 w-4 h-4 bg-[#C05621] border-2 border-white rounded-full flex items-center justify-center text-[9px] font-bold text-white">
          1
        </span>
      </a>

    </div>
  );
};
