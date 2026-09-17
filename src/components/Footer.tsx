import React from 'react';
import { HardHat, Compass, Star, MapPin, Phone, MessageCircle, Clock, ShieldCheck, Heart } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/companyData';

interface FooterProps {
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  return (
    <footer className="bg-[#221C18] text-[#D5C2B1] pt-16 pb-8 border-t border-[#3B2E24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#3B2E24]">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#C05621] to-[#9C4114] text-white flex items-center justify-center shadow-lg">
                <div className="relative flex items-center justify-center">
                  <HardHat className="w-6 h-6 text-[#FED7AA]" />
                  <Compass className="w-3.5 h-3.5 text-white absolute -bottom-1 -right-1" />
                </div>
              </div>
              <div>
                <h3 className="font-extrabold text-lg text-white font-serif-display">
                  Shree Sanwariya
                </h3>
                <p className="text-xs text-[#FED7AA] font-hindi font-semibold">
                  श्री सांवरिया रियल एस्टेट एंड कंस्ट्रक्शन
                </p>
              </div>
            </div>

            <p className="text-xs text-[#A69485] leading-relaxed">
              Indore's trusted partner for genuine property consultation, T&CP legal verification, and turnkey residential and custom home construction.
            </p>

            {/* Tagline */}
            <div className="bg-[#2D241E] p-3 rounded-xl border border-[#3E322A]">
              <p className="text-xs font-bold text-[#FED7AA] font-hindi">
                "आपके सपनों का घर, हमारी ज़िम्मेदारी"
              </p>
              <p className="text-[11px] text-[#A69485]">
                Building Trust, Building Homes with Uncompromised Quality.
              </p>
            </div>

            {/* Rating badge */}
            <div className="flex items-center gap-2 text-xs text-[#EADBCE]">
              <div className="flex items-center text-[#F59E0B]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#F59E0B]" />
                ))}
              </div>
              <span className="font-bold text-white">4.9 / 5.0</span>
              <span className="text-[#8C7A6D]">(42 Google Reviews)</span>
            </div>
          </div>

          {/* Col 2: Services List */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Our Services (हमारी सेवाएं)
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="text-[#BCA899] hover:text-[#FED7AA] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#C05621]">›</span>
                    <span>{s.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="text-[#BCA899] hover:text-[#FED7AA] transition-colors">
                  About Us (परिचय)
                </a>
              </li>
              <li>
                <a href="#projects" className="text-[#BCA899] hover:text-[#FED7AA] transition-colors">
                  Featured Projects (प्रोजेक्ट्स)
                </a>
              </li>
              <li>
                <a href="#estimator" className="text-[#BCA899] hover:text-[#FED7AA] transition-colors">
                  Cost Estimator (लागत कैलकुलेटर)
                </a>
              </li>
              <li>
                <a href="#why-us" className="text-[#BCA899] hover:text-[#FED7AA] transition-colors">
                  Why Choose Us (विशेषताएं)
                </a>
              </li>
              <li>
                <a href="#reviews" className="text-[#BCA899] hover:text-[#FED7AA] transition-colors">
                  Google Reviews (समीक्षाएं)
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[#BCA899] hover:text-[#FED7AA] transition-colors">
                  Contact & Map (संपर्क)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Timing */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Office Location
            </h4>
            
            <div className="space-y-2.5 text-xs text-[#BCA899]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C05621] flex-shrink-0 mt-0.5" />
                <span>PR7J+7WJ, 224, Loknayak Nagar, Indore, MP 452002</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C05621] flex-shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="text-white hover:text-[#FED7AA] font-bold">
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#25D366] flex-shrink-0" />
                <a href={COMPANY_INFO.whatsAppUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#25D366]">
                  WhatsApp: 091317 35020
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C05621] flex-shrink-0" />
                <span>Open Daily • Closes 8:00 PM</span>
              </div>
            </div>

            <button
              onClick={onOpenConsultation}
              className="mt-3 w-full py-2 px-3 rounded-lg bg-[#C05621] hover:bg-[#9C4114] text-white font-bold text-xs shadow transition-colors cursor-pointer"
            >
              Book Free Consultation
            </button>
          </div>

        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8C7A6D] gap-4">
          <p>
            © {new Date().getFullYear()} Shree Sanwariya Real Estate and Construction. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-[11px]">
            <span>Loknayak Nagar, Indore, Madhya Pradesh</span>
            <span>•</span>
            <span className="font-hindi text-[#FED7AA]">इंदौर का भरोसेमंद बिल्डर</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
