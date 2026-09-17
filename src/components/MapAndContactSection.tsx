import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Navigation, ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const MapAndContactSection: React.FC = () => {
  // Google maps search embed query for "224, Loknayak Nagar, Indore, Madhya Pradesh 452002"
  const encodedAddress = encodeURIComponent("224, Loknayak Nagar, Indore, Madhya Pradesh 452002");
  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="contact" className="py-16 sm:py-20 bg-[#FAF7F2] border-t border-[#E8DFD5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EADBCE] text-[#8C3B12] text-xs font-bold uppercase tracking-wider mb-2.5">
            <span>Contact & Visit • संपर्क एवं कार्यालय</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#221C18] tracking-tight font-serif-display">
            Visit Our Office in Loknayak Nagar, Indore
          </h2>
          <p className="text-base sm:text-lg text-[#C05621] font-hindi font-bold mt-1">
            "हमसे संपर्क करें — आपके सपनों के घर की शुरुआत यहाँ से होती है"
          </p>
        </div>

        {/* 2-Column Map + Contact Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Contact Card Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Main Details Box */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8DFD5] shadow-sm space-y-6">
              
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FAF1E6] border border-[#EADBCE] text-[#C05621] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#8C3B12]">
                    Office Address (कार्यालय का पता)
                  </h4>
                  <p className="text-sm sm:text-base font-bold text-[#221C18] mt-1 leading-snug">
                    {COMPANY_INFO.address}
                  </p>
                  <p className="text-xs text-[#786659] mt-1">
                    Plus Code: PR7J+7WJ Indore
                  </p>
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#C05621] hover:underline mt-2"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Driving Directions</span>
                  </a>
                </div>
              </div>

              {/* Phone & WhatsApp */}
              <div className="flex items-start gap-4 pt-4 border-t border-[#F0E8DF]">
                <div className="w-12 h-12 rounded-2xl bg-[#FAF1E6] border border-[#EADBCE] text-[#C05621] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#8C3B12]">
                    Phone & WhatsApp (फोन / व्हाट्सएप)
                  </h4>
                  <div className="flex flex-col gap-1 mt-1">
                    <a
                      href={`tel:${COMPANY_INFO.phone}`}
                      className="text-base sm:text-lg font-extrabold text-[#221C18] hover:text-[#C05621] transition-colors"
                    >
                      {COMPANY_INFO.phoneDisplay}
                    </a>
                    <a
                      href={COMPANY_INFO.whatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#16A34A] hover:underline"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Chat on WhatsApp: 091317 35020</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4 pt-4 border-t border-[#F0E8DF]">
                <div className="w-12 h-12 rounded-2xl bg-[#FAF1E6] border border-[#EADBCE] text-[#C05621] flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#8C3B12]">
                    Business Hours (खुलने का समय)
                  </h4>
                  <p className="text-sm font-bold text-[#221C18] mt-1">
                    {COMPANY_INFO.hours}
                  </p>
                  <p className="text-xs text-[#786659] mt-0.5">
                    {COMPANY_INFO.hoursDetail}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#16A34A] bg-[#DCFCE7] px-2 py-0.5 rounded mt-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] animate-ping"></span>
                    Open Today (7 Days Open)
                  </span>
                </div>
              </div>

            </div>

            {/* Quick Action CTA Banner */}
            <div className="bg-[#2A211B] text-white p-5 rounded-2xl flex items-center justify-between gap-4">
              <div>
                <p className="text-xs text-[#FED7AA] font-semibold">
                  Visiting from out of town?
                </p>
                <p className="text-sm font-bold text-white">
                  Call ahead for a reserved meeting slot.
                </p>
              </div>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="px-4 py-2 bg-[#C05621] hover:bg-[#9C4114] text-white text-xs font-bold rounded-xl whitespace-nowrap shadow-sm"
              >
                Call Now
              </a>
            </div>

          </div>

          {/* Right Google Map Embed */}
          <div className="lg:col-span-7 bg-white rounded-3xl overflow-hidden border border-[#E8DFD5] shadow-lg flex flex-col">
            <div className="p-4 bg-[#FAF7F2] border-b border-[#E8DFD5] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C05621]" />
                <span className="text-xs font-bold text-[#221C18]">
                  Live Location Map • Loknayak Nagar, Indore
                </span>
              </div>
              <a
                href={COMPANY_INFO.mapDirectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#8C3B12] hover:text-[#C05621] flex items-center gap-1"
              >
                <span>Open in Google Maps App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="w-full flex-1 min-h-[360px] sm:min-h-[420px] relative bg-[#EADBCE]/30">
              <iframe
                title="Shree Sanwariya Real Estate & Construction Location"
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '380px' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>

            <div className="p-4 bg-white border-t border-[#E8DFD5] flex flex-wrap items-center justify-between text-xs text-[#6B5A4E] gap-2">
              <span>PR7J+7WJ, 224, Loknayak Nagar, Indore, Madhya Pradesh 452002</span>
              <span className="font-semibold text-[#C05621]">Landmark: Near Main Road Loknayak Nagar</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
