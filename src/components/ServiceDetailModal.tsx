import React from 'react';
import { X, CheckCircle2, MessageCircle, Calendar, ShieldCheck, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';
import { COMPANY_INFO } from '../data/companyData';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onOpenConsultation: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ service, onClose, onOpenConsultation }) => {
  if (!service) return null;

  const whatsappMessage = encodeURIComponent(
    `Hello Shree Sanwariya! I am interested in your "${service.title}" (${service.hindiTitle}) service in Indore. Please share more details and package pricing.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#E8DFD5] relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-[#FAF7F2] border-b border-[#E8DFD5] flex items-start justify-between relative">
          <div>
            <span className="text-[11px] font-bold px-2.5 py-0.5 rounded bg-[#FAF1E6] text-[#8C3B12] border border-[#EADBCE] uppercase tracking-wider">
              {service.startingAt || 'Service Details'}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#221C18] mt-1.5 font-serif-display">
              {service.title}
            </h3>
            <p className="text-sm font-bold text-[#C05621] font-hindi">
              {service.hindiTitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white border border-[#E8DFD5] text-[#4A3B32] hover:bg-[#FAF1E6] hover:text-[#C05621] flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#8C3B12] mb-1.5">
              Service Scope & Overview
            </h4>
            <p className="text-sm text-[#4A3B32] leading-relaxed">
              {service.detailedDesc}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#FAF1E6] border border-[#EADBCE]">
            <div className="flex items-center gap-2 text-xs font-bold text-[#8C3B12] uppercase tracking-wider mb-1">
              <ShieldCheck className="w-4 h-4 text-[#C05621]" />
              <span>Recommended For</span>
            </div>
            <p className="text-xs sm:text-sm text-[#221C18] font-semibold">
              {service.suitableFor}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#8C3B12] mb-3">
              Included Features & Guarantees
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-[#2D241E] p-2.5 rounded-xl bg-[#FAF7F2] border border-[#E8DFD5]">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A] flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing note */}
          <div className="text-xs text-[#786659] border-t border-[#F0E8DF] pt-4">
            <p>
              * All rates and BOQs are tailored based on plot dimensions, architectural elevation, and material preferences in Indore.
            </p>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-5 bg-[#FAF7F2] border-t border-[#E8DFD5] flex flex-col sm:flex-row items-center justify-end gap-3">
          <a
            href={`https://wa.me/919131735020?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs shadow-sm transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Inquire on WhatsApp</span>
          </a>

          <button
            onClick={() => {
              onClose();
              onOpenConsultation(service.title);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#C05621] hover:bg-[#9C4114] text-white font-bold text-xs shadow-sm transition-all cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Free Site Visit</span>
          </button>
        </div>

      </div>
    </div>
  );
};
