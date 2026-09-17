import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ProjectsGallery } from './components/ProjectsGallery';
import { ConstructionEstimator } from './components/ConstructionEstimator';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ConsultationForm } from './components/ConsultationForm';
import { FAQSection } from './components/FAQSection';
import { MapAndContactSection } from './components/MapAndContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { QuickQuoteModal } from './components/QuickQuoteModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ServiceItem, Project } from './types';

export default function App() {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenConsultation = (serviceTitle?: string) => {
    setPreselectedService(serviceTitle);
    setIsConsultationModalOpen(true);
  };

  const handleExploreProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2D241E] flex flex-col selection:bg-[#C05621] selection:text-white">
      {/* Top Navbar */}
      <Navbar onOpenConsultation={() => handleOpenConsultation()} />

      {/* Main Page Flow */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero 
          onOpenConsultation={() => handleOpenConsultation()} 
          onExploreProjects={handleExploreProjects}
        />

        {/* 2. About Us Section */}
        <AboutSection onOpenConsultation={() => handleOpenConsultation()} />

        {/* 3. Services Section */}
        <ServicesSection 
          onOpenConsultation={handleOpenConsultation}
          onSelectService={(service) => setSelectedService(service)}
        />

        {/* 4. Why Choose Us Section */}
        <WhyChooseUs />

        {/* 5. Featured Projects / Gallery */}
        <ProjectsGallery 
          onSelectProject={(project) => setSelectedProject(project)}
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* 6. Interactive Indore Construction Cost Estimator */}
        <ConstructionEstimator onOpenConsultation={() => handleOpenConsultation()} />

        {/* 7. Real Testimonials Section */}
        <TestimonialsSection />

        {/* 8. Appointment & Consultation Booking Form */}
        <ConsultationForm />

        {/* 9. FAQs Section */}
        <FAQSection />

        {/* 10. Map and Contact Section */}
        <MapAndContactSection />
      </main>

      {/* 11. Footer */}
      <Footer onOpenConsultation={() => handleOpenConsultation()} />

      {/* 12. Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Modals */}
      <QuickQuoteModal
        isOpen={isConsultationModalOpen}
        preselectedService={preselectedService}
        onClose={() => setIsConsultationModalOpen(false)}
      />

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenConsultation={handleOpenConsultation}
      />

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenConsultation={() => handleOpenConsultation()}
      />
    </div>
  );
}
