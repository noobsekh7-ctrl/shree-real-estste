import React, { useState } from 'react';
import { MapPin, CheckCircle2, Maximize2, Sparkles, Layers, ArrowUpRight } from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/companyData';
import { Project } from '../types';

interface ProjectsGalleryProps {
  onSelectProject: (project: Project) => void;
  onOpenConsultation: () => void;
}

export const ProjectsGallery: React.FC<ProjectsGalleryProps> = ({ onSelectProject, onOpenConsultation }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [beforeAfterToggle, setBeforeAfterToggle] = useState<Record<string, boolean>>({});

  const categories = ['All', 'Custom Bungalow', 'Residential', 'Plot Development', 'Renovation', 'Commercial'];

  const filteredProjects = activeCategory === 'All'
    ? FEATURED_PROJECTS
    : FEATURED_PROJECTS.filter(p => p.category === activeCategory);

  const toggleBeforeAfter = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setBeforeAfterToggle(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="projects" className="py-16 sm:py-20 bg-[#FAF7F2] border-t border-[#E8DFD5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EADBCE] text-[#8C3B12] text-xs font-bold uppercase tracking-wider mb-2.5">
              <span>Featured Portfolio • निर्मित प्रोजेक्ट्स</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#221C18] tracking-tight font-serif-display">
              Recent Construction & Property Projects
            </h2>
            <p className="text-base text-[#C05621] font-hindi font-bold mt-1">
              "इंदौर में हमारे द्वारा निर्मित प्रीमियम मकान एवं विकसित प्लॉट्स"
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenConsultation}
              className="px-4 py-2.5 rounded-xl bg-[#C05621] hover:bg-[#9C4114] text-white font-bold text-xs shadow-sm transition-all cursor-pointer flex items-center gap-1.5"
            >
              <span>Construct Your Home</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Category Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#2A211B] text-white shadow-md'
                  : 'bg-white text-[#57483D] border border-[#E8DFD5] hover:border-[#C05621] hover:text-[#C05621]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => {
            const isShowingBefore = beforeAfterToggle[project.id] || false;
            const currentImg = (project.beforeImage && isShowingBefore)
              ? project.beforeImage
              : project.image;

            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="bg-white rounded-2xl overflow-hidden border border-[#E8DFD5] shadow-sm hover:shadow-xl hover:border-[#C05621]/40 transition-all duration-300 group flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#E8DFD5]">
                    <img
                      src={currentImg}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>

                    {/* Category Pill */}
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-[#FAF7F2]/90 backdrop-blur-md text-[#8C3B12] border border-[#EADBCE]">
                        {project.category}
                      </span>
                    </div>

                    {/* Status Pill */}
                    <div className="absolute top-3 right-3">
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-[#25D366] text-white shadow-sm">
                        {project.status}
                      </span>
                    </div>

                    {/* Before/After Toggle if Available */}
                    {project.beforeImage && (
                      <div className="absolute bottom-3 left-3">
                        <button
                          onClick={(e) => toggleBeforeAfter(project.id, e)}
                          className="px-2.5 py-1 rounded-md bg-[#2A211B]/90 backdrop-blur-md text-[#FED7AA] text-[11px] font-bold flex items-center gap-1 border border-[#524134] hover:bg-[#2A211B] transition-colors"
                        >
                          <Sparkles className="w-3 h-3 text-[#F59E0B]" />
                          <span>{isShowingBefore ? "Showing: Before" : "Click: See Before"}</span>
                        </button>
                      </div>
                    )}

                    {/* Zoom Icon */}
                    <div className="absolute bottom-3 right-3 w-8 h-8 rounded-lg bg-black/40 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5">
                    <div className="flex items-center gap-1.5 text-xs text-[#8C3B12] font-semibold mb-1">
                      <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>{project.location}</span>
                    </div>

                    <h3 className="text-lg font-bold text-[#221C18] group-hover:text-[#C05621] transition-colors leading-snug">
                      {project.title}
                    </h3>
                    {project.hindiTitle && (
                      <p className="text-xs font-semibold text-[#8C3B12] font-hindi mb-2">
                        {project.hindiTitle}
                      </p>
                    )}

                    <p className="text-xs text-[#57483D] line-clamp-2 leading-relaxed mb-3">
                      {project.description}
                    </p>

                    {/* Highlights tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#F0E8DF]">
                      {project.highlights.slice(0, 2).map((hl, i) => (
                        <span key={i} className="text-[11px] px-2 py-0.5 rounded bg-[#FAF1E6] text-[#6B5A4E] border border-[#EADBCE]">
                          {hl}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Specs */}
                <div className="px-5 py-3 bg-[#FAF7F2] border-t border-[#E8DFD5] flex items-center justify-between text-xs text-[#6B5A4E]">
                  <span className="font-semibold text-[#2D241E]">{project.area}</span>
                  <span className="text-[#C05621] font-bold group-hover:underline flex items-center gap-0.5">
                    Details & Specs →
                  </span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
