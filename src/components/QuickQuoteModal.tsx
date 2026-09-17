import React from 'react';
import { X } from 'lucide-react';
import { ConsultationForm } from './ConsultationForm';

interface QuickQuoteModalProps {
  isOpen: boolean;
  preselectedService?: string;
  onClose: () => void;
}

export const QuickQuoteModal: React.FC<QuickQuoteModalProps> = ({ isOpen, preselectedService, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-4xl w-full max-h-[95vh] overflow-y-auto shadow-2xl border border-[#E8DFD5] relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md border border-[#E8DFD5] text-[#221C18] hover:bg-[#FAF1E6] hover:text-[#C05621] flex items-center justify-center shadow-md transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-2 sm:p-4">
          <ConsultationForm preselectedService={preselectedService} onSuccess={onClose} />
        </div>
      </div>
    </div>
  );
};
