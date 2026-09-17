import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, MessageSquare, CheckCircle2, Send, Sparkles, MapPin, Building2 } from 'lucide-react';
import { COMPANY_INFO, INDORE_LOCALITIES } from '../data/companyData';
import { ConsultationRequest } from '../types';

interface ConsultationFormProps {
  preselectedService?: string;
  onSuccess?: () => void;
}

export const ConsultationForm: React.FC<ConsultationFormProps> = ({ preselectedService, onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    interest: preselectedService || 'Residential Construction',
    preferredDate: '',
    preferredTime: 'Morning (10 AM - 1 PM)',
    locationPreference: 'Loknayak Nagar',
    budgetRange: '₹25 Lakhs - ₹50 Lakhs',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const interestOptions = [
    'Residential Construction',
    'Custom Home Building',
    'Property Buying/Selling',
    'Plot Development',
    'Renovation & Remodeling',
    'Property Investment Advice'
  ];

  const timeOptions = [
    'Morning (10:00 AM – 01:00 PM)',
    'Afternoon (01:00 PM – 04:00 PM)',
    'Evening (04:00 PM – 07:30 PM)'
  ];

  const budgetOptions = [
    'Under ₹20 Lakhs',
    '₹20 Lakhs – ₹40 Lakhs',
    '₹40 Lakhs – ₹75 Lakhs',
    '₹75 Lakhs – ₹1.5 Crore',
    '₹1.5 Crore+'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const newRequest: ConsultationRequest = {
      id: 'REQ-' + Date.now().toString().slice(-6),
      name: formData.name,
      phone: formData.phone,
      interest: formData.interest as any,
      preferredDate: formData.preferredDate || new Date().toISOString().split('T')[0],
      preferredTime: formData.preferredTime,
      locationPreference: formData.locationPreference,
      budgetRange: formData.budgetRange,
      message: formData.message,
      createdAt: new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    // Save to local storage
    try {
      const existing = JSON.parse(localStorage.getItem('sanwariya_consultations') || '[]');
      existing.unshift(newRequest);
      localStorage.setItem('sanwariya_consultations', JSON.stringify(existing.slice(0, 10)));
    } catch (err) {
      console.error('LocalStorage error', err);
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      if (onSuccess) onSuccess();
    }, 600);
  };

  const getWhatsAppBookingUrl = () => {
    const text = encodeURIComponent(
      `*New Consultation Booking (श्री सांवरिया)*\n` +
      `👤 *Name:* ${formData.name || 'Not provided'}\n` +
      `📞 *Phone:* ${formData.phone || 'Not provided'}\n` +
      `🏷️ *Service Interest:* ${formData.interest}\n` +
      `📅 *Preferred Date:* ${formData.preferredDate || 'Earliest available'}\n` +
      `⏰ *Preferred Time:* ${formData.preferredTime}\n` +
      `📍 *Indore Location:* ${formData.locationPreference}\n` +
      `💰 *Estimated Budget:* ${formData.budgetRange}\n` +
      `💬 *Message / Requirement:* ${formData.message || 'Looking for site consultation.'}`
    );
    return `https://wa.me/919131735020?text=${text}`;
  };

  return (
    <section id="consultation" className="py-16 sm:py-20 bg-[#FAF7F2] border-t border-[#E8DFD5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-[#E8DFD5] shadow-xl overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Info Panel */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#2A211B] to-[#3B2E24] text-white p-8 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C05621] text-white text-xs font-bold uppercase tracking-wider mb-4">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Free Consultation • निःशुल्क परामर्श</span>
                </div>

                <h3 className="text-2xl font-bold font-serif-display text-white mb-2">
                  Book an Appointment with Our Experts
                </h3>
                
                <p className="text-sm text-[#FED7AA] font-hindi font-semibold mb-4">
                  "हम आपके समय और सपनों का सम्मान करते हैं"
                </p>

                <p className="text-xs text-[#D5C2B1] leading-relaxed mb-6">
                  Schedule a 1-on-1 meeting at our Loknayak Nagar office or request an on-site visit anywhere in Indore. We will review your plot layout, verify legalities, and prepare an itemized project estimate.
                </p>

                <div className="space-y-4 text-xs text-[#EADBCE]">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#25D366] flex-shrink-0 mt-0.5" />
                    <span>Free architectural floor plan concept review</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#25D366] flex-shrink-0 mt-0.5" />
                    <span>Transparent brand material BOQ estimate</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#25D366] flex-shrink-0 mt-0.5" />
                    <span>Zero obligation & honest local Indore advice</span>
                  </div>
                </div>
              </div>

              {/* Quick Call Box */}
              <div className="pt-6 mt-6 border-t border-[#4A3B32]">
                <p className="text-[11px] text-[#A69485] uppercase tracking-wider">
                  Prefer Immediate Assistance?
                </p>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="flex items-center gap-2 text-base font-bold text-[#FED7AA] hover:text-white mt-1"
                >
                  <Phone className="w-4 h-4 text-[#C05621]" />
                  <span>Call {COMPANY_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Right Form Panel */}
            <div className="lg:col-span-7 p-6 sm:p-8">
              
              {submitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#DCFCE7] text-[#16A34A] flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-xl font-bold text-[#221C18] font-serif-display">
                    Consultation Request Received!
                  </h4>
                  <p className="text-sm font-semibold text-[#8C3B12] font-hindi">
                    धन्यवाद! आपका परामर्श अनुरोध प्राप्त हो गया है।
                  </p>
                  <p className="text-xs text-[#57483D] max-w-md mx-auto">
                    Our senior consultant will contact you at <strong>{formData.phone}</strong> shortly to confirm your preferred slot.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={getWhatsAppBookingUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] text-white font-bold text-xs shadow-md"
                    >
                      <Send className="w-4 h-4" />
                      <span>Forward to WhatsApp for Fast Confirmation</span>
                    </a>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2 rounded-xl text-xs font-semibold text-[#786659] hover:bg-[#FAF7F2]"
                    >
                      Book Another Slot
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#221C18] mb-1">
                        Your Full Name (नाम) *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-[#A69485] absolute left-3 top-3" />
                        <input
                          type="text"
                          required
                          placeholder="e.g. Ramesh Sharma"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-[#D5C2B1] bg-[#FAF7F2] text-xs text-[#221C18] focus:outline-none focus:border-[#C05621] focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#221C18] mb-1">
                        Phone / WhatsApp Number (मोबाइल नंबर) *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-[#A69485] absolute left-3 top-3" />
                        <input
                          type="tel"
                          required
                          placeholder="e.g. 091317 35020"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-[#D5C2B1] bg-[#FAF7F2] text-xs text-[#221C18] focus:outline-none focus:border-[#C05621] focus:bg-white transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Service Interest */}
                  <div>
                    <label className="block text-xs font-bold text-[#221C18] mb-1">
                      Primary Interest (आप किस सेवा में रुचि रखते हैं?) *
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-[#D5C2B1] bg-[#FAF7F2] text-xs text-[#221C18] focus:outline-none focus:border-[#C05621] focus:bg-white"
                    >
                      {interestOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Date & Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#221C18] mb-1">
                        Preferred Date (पसंदीदा तारीख)
                      </label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-[#D5C2B1] bg-[#FAF7F2] text-xs text-[#221C18] focus:outline-none focus:border-[#C05621]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#221C18] mb-1">
                        Preferred Time Slot (समय)
                      </label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-[#D5C2B1] bg-[#FAF7F2] text-xs text-[#221C18] focus:outline-none focus:border-[#C05621]"
                      >
                        {timeOptions.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Location & Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#221C18] mb-1">
                        Location in Indore (स्थान)
                      </label>
                      <select
                        value={formData.locationPreference}
                        onChange={(e) => setFormData({ ...formData, locationPreference: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-[#D5C2B1] bg-[#FAF7F2] text-xs text-[#221C18] focus:outline-none focus:border-[#C05621]"
                      >
                        {INDORE_LOCALITIES.map((loc) => (
                          <option key={loc} value={loc}>{loc}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#221C18] mb-1">
                        Estimated Budget (बजट दायरा)
                      </label>
                      <select
                        value={formData.budgetRange}
                        onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-[#D5C2B1] bg-[#FAF7F2] text-xs text-[#221C18] focus:outline-none focus:border-[#C05621]"
                      >
                        {budgetOptions.map((b) => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-[#221C18] mb-1">
                      Project Details / Specific Query (विवरण)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. I have a 1200 sq.ft plot in Loknayak Nagar and want to construct a G+1 duplex with Vastu planning..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-3 rounded-xl border border-[#D5C2B1] bg-[#FAF7F2] text-xs text-[#221C18] focus:outline-none focus:border-[#C05621]"
                    ></textarea>
                  </div>

                  {/* Submit buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 py-3 px-5 rounded-xl bg-[#C05621] hover:bg-[#9C4114] text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Submitting Request...</span>
                      ) : (
                        <>
                          <Calendar className="w-4 h-4" />
                          <span>Book Free Consultation (परामर्श बुक करें)</span>
                        </>
                      )}
                    </button>

                    <a
                      href={getWhatsAppBookingUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
                      title="Send directly on WhatsApp"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Direct WhatsApp</span>
                    </a>
                  </div>

                </form>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
