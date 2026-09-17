import React, { useState } from 'react';
import { X, MapPin, Calendar, CheckCircle2, MessageCircle, Sparkles, Building2 } from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose, onOpenConsultation }) => {
  const [showBefore, setShowBefore] = useState(false);

  if (!project) return null;

  const currentImage = (project.beforeImage && showBefore) ? project.beforeImage : project.image;

  const whatsappMessage = encodeURIComponent(
    `Hello Shree Sanwariya! I saw the "${project.title}" (${project.category}) project in ${project.location} on your website and would like similar construction / consultation for my plot in Indore.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-white rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-[#E8DFD5] relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with image */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] bg-stone-900 overflow-hidden">
          <img
            src={currentImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-[#C05621] flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Category & Status */}
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="text-xs font-bold px-3 py-1 rounded-md bg-[#C05621] text-white">
              {project.category}
            </span>
            <span className="text-xs font-bold px-3 py-1 rounded-md bg-[#25D366] text-white">
              {project.status}
            </span>
          </div>

          {/* Before/After Toggle if Available */}
          {project.beforeImage && (
            <div className="absolute bottom-4 right-4">
              <button
                onClick={() => setShowBefore(!showBefore)}
                className="px-3 py-1.5 rounded-xl bg-white text-[#221C18] text-xs font-bold flex items-center gap-1.5 shadow-lg hover:bg-[#FAF1E6] transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
                <span>{showBefore ? "Viewing: Before (Click for After)" : "Click: View Before State"}</span>
              </button>
            </div>
          )}

          {/* Title on image */}
          <div className="absolute bottom-4 left-4 right-20 text-white">
            <h3 className="text-xl sm:text-2xl font-bold font-serif-display leading-tight">
              {project.title}
            </h3>
            {project.hindiTitle && (
              <p className="text-sm font-hindi text-[#FED7AA] font-bold">
                {project.hindiTitle}
              </p>
            )}
          </div>
        </div>

        {/* Content Details */}
        <div className="p-6 space-y-6">
          
          {/* Key Meta Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#E8DFD5]">
              <span className="text-[10px] text-[#786659] uppercase block font-semibold">Location</span>
              <span className="text-xs font-bold text-[#221C18] flex items-center gap-1 mt-0.5">
                <MapPin className="w-3.5 h-3.5 text-[#C05621]" />
                <span className="truncate">{project.location}</span>
              </span>
            </div>

            <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#E8DFD5]">
              <span className="text-[10px] text-[#786659] uppercase block font-semibold">Built-Up Area</span>
              <span className="text-xs font-bold text-[#221C18] block mt-0.5">
                {project.area}
              </span>
            </div>

            <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#E8DFD5]">
              <span className="text-[10px] text-[#786659] uppercase block font-semibold">Completion Year</span>
              <span className="text-xs font-bold text-[#221C18] block mt-0.5">
                {project.year}
              </span>
            </div>

            <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#E8DFD5]">
              <span className="text-[10px] text-[#786659] uppercase block font-semibold">Execution</span>
              <span className="text-xs font-bold text-[#16A34A] block mt-0.5">
                On-Time Handover
              </span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#8C3B12] mb-1.5">
              Project Description & Architectural Scope
            </h4>
            <p className="text-sm text-[#4A3B32] leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Highlights */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#8C3B12] mb-2.5">
              Key Engineering Highlights & Specifications
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.highlights.map((hl, i) => (
                <div key={i} className="flex items-start gap-2 p-2.5 rounded-xl bg-[#FAF7F2] border border-[#E8DFD5] text-xs text-[#2D241E]">
                  <CheckCircle2 className="w-4 h-4 text-[#C05621] flex-shrink-0 mt-0.5" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>
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
            <span>Inquire About Similar Project</span>
          </a>

          <button
            onClick={() => {
              onClose();
              onOpenConsultation();
            }}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#C05621] hover:bg-[#9C4114] text-white font-bold text-xs shadow-sm transition-all cursor-pointer"
          >
            Schedule Site Discussion
          </button>
        </div>

      </div>
    </div>
  );
};
