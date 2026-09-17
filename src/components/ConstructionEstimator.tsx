import React, { useState } from 'react';
import { Calculator, Hammer, HardHat, Sparkles, MessageCircle, Calendar, ShieldCheck, Check } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface ConstructionEstimatorProps {
  onOpenConsultation: () => void;
}

export const ConstructionEstimator: React.FC<ConstructionEstimatorProps> = ({ onOpenConsultation }) => {
  const [unit, setUnit] = useState<'sqft' | 'gaj'>('sqft');
  const [areaInput, setAreaInput] = useState<number>(1500);
  const [floors, setFloors] = useState<number>(2);
  const [packageType, setPackageType] = useState<'standard' | 'premium' | 'luxury'>('premium');

  // 1 Gaj = 9 sq.ft
  const areaSqFt = unit === 'gaj' ? areaInput * 9 : areaInput;
  const totalBuiltUp = areaSqFt * floors;

  const packageRates = {
    standard: {
      rate: 1450,
      name: "Standard Package",
      hindi: "स्टैंडर्ड पैकेज",
      steel: "Fe-500D TMT (Kamdhenu / Jindal)",
      cement: "Ultratech / Ambuja Grade-53",
      flooring: "2x2 Vitrified Tiles",
      fittings: "Standard Branded CP & Sanitary",
      timelineMonths: Math.max(5, Math.ceil(totalBuiltUp / 350))
    },
    premium: {
      rate: 1850,
      name: "Premium Deluxe Package",
      hindi: "प्रीमियम डीलक्स पैकेज",
      steel: "Tata Tiscon / Jindal Panther Fe-550D",
      cement: "Ultratech Super / Birla Gold",
      flooring: "4x2 High-Gloss Glazed Vitrified Tiles",
      fittings: "Jaquar / Cera Premium & Modular Kitchen",
      timelineMonths: Math.max(6, Math.ceil(totalBuiltUp / 320))
    },
    luxury: {
      rate: 2400,
      name: "Luxury Architectural Villa",
      hindi: "लक्ज़री विला पैकेज",
      steel: "Tata Tiscon Fe-550D CRS Super-Grade",
      cement: "Ultratech Weather Plus Grade",
      flooring: "Italian Marble / Large Slab Designer Tile",
      fittings: "Kohler / Grohe & Smart Home Automation",
      timelineMonths: Math.max(7, Math.ceil(totalBuiltUp / 280))
    }
  };

  const currentPkg = packageRates[packageType];
  const estimatedCost = totalBuiltUp * currentPkg.rate;
  
  // Engineering approximations:
  // Cement: ~0.4 bags per sq.ft built up
  // Steel: ~3.5 kg per sq.ft built up
  const estimatedCementBags = Math.round(totalBuiltUp * 0.4);
  const estimatedSteelTons = Number(((totalBuiltUp * 3.6) / 1000).toFixed(1));

  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  const getWhatsAppEstimateText = () => {
    return encodeURIComponent(
      `Hello Shree Sanwariya team! I used your Indore Construction Cost Estimator on the website.\n\n` +
      `📌 *My Construction Requirement:*\n` +
      `• Plot Area: ${areaInput} ${unit === 'sqft' ? 'sq.ft' : 'Gaj (Square Yards)'}\n` +
      `• Floors: ${floors} (Total Built-up: ~${totalBuiltUp.toLocaleString()} sq.ft)\n` +
      `• Chosen Package: ${currentPkg.name} (₹${currentPkg.rate}/sq.ft)\n` +
      `• Estimated Budget: ${formatINR(estimatedCost)}\n` +
      `• Location in Indore: Loknayak Nagar / Nearby\n\n` +
      `Please provide a detailed BOQ and site visit schedule.`
    );
  };

  return (
    <section id="estimator" className="py-16 sm:py-20 bg-[#F4EDE4]/80 border-t border-[#E8DFD5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EADBCE] text-[#8C3B12] text-xs font-bold uppercase tracking-wider mb-2.5">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Tool • इंदौर निर्माण लागत कैलकुलेटर</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#221C18] tracking-tight font-serif-display">
            Instant House Construction Cost Estimator
          </h2>
          <p className="text-base text-[#C05621] font-hindi font-bold mt-1">
            "अपनी जगह और बजट के अनुसार मकान निर्माण की अनुमानित लागत जानें"
          </p>
          <p className="text-xs sm:text-sm text-[#6B5A4E] mt-2">
            Calculate your Indore home construction budget with transparent material benchmarks and estimated material quantities.
          </p>
        </div>

        {/* Interactive Estimator Box */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#E8DFD5] shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            
            {/* Left Controls */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Unit Toggle & Plot Size */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-bold text-[#221C18]">
                    1. Plot Ground Area
                  </label>
                  <div className="flex items-center bg-[#FAF7F2] p-1 rounded-lg border border-[#E8DFD5]">
                    <button
                      onClick={() => setUnit('sqft')}
                      className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${
                        unit === 'sqft'
                          ? 'bg-[#C05621] text-white shadow-sm'
                          : 'text-[#6B5A4E] hover:text-[#221C18]'
                      }`}
                    >
                      Sq. Feet (वर्ग फीट)
                    </button>
                    <button
                      onClick={() => setUnit('gaj')}
                      className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${
                        unit === 'gaj'
                          ? 'bg-[#C05621] text-white shadow-sm'
                          : 'text-[#6B5A4E] hover:text-[#221C18]'
                      }`}
                    >
                      Gaj / Sq.Yards (गज)
                    </button>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min={unit === 'sqft' ? 500 : 60}
                      max={unit === 'sqft' ? 5000 : 600}
                      step={unit === 'sqft' ? 50 : 5}
                      value={areaInput}
                      onChange={(e) => setAreaInput(Number(e.target.value))}
                      className="w-full accent-[#C05621] h-2 bg-[#EADBCE] rounded-lg cursor-pointer"
                    />
                    <div className="w-28 flex-shrink-0">
                      <div className="relative">
                        <input
                          type="number"
                          value={areaInput}
                          onChange={(e) => setAreaInput(Math.max(1, Number(e.target.value)))}
                          className="w-full py-2 px-3 rounded-lg border border-[#D5C2B1] bg-[#FAF7F2] text-[#221C18] font-extrabold text-sm focus:outline-none focus:border-[#C05621]"
                        />
                        <span className="absolute right-2.5 top-2.5 text-[11px] font-bold text-[#8C3B12]">
                          {unit === 'sqft' ? 'sq.ft' : 'gaj'}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-[#786659]">
                    <span>Standard Indore Plot sizes:</span>
                    <div className="flex gap-2">
                      <button onClick={() => { setUnit('sqft'); setAreaInput(1000); }} className="hover:text-[#C05621] underline">1000 sqft</button>
                      <button onClick={() => { setUnit('sqft'); setAreaInput(1500); }} className="hover:text-[#C05621] underline">1500 sqft</button>
                      <button onClick={() => { setUnit('gaj'); setAreaInput(100); }} className="hover:text-[#C05621] underline">100 Gaj (900 sqft)</button>
                      <button onClick={() => { setUnit('gaj'); setAreaInput(200); }} className="hover:text-[#C05621] underline">200 Gaj (1800 sqft)</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Number of Floors */}
              <div>
                <label className="block text-sm font-bold text-[#221C18] mb-2">
                  2. Number of Floors / Structure
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { val: 1, label: "Ground Only", sub: "1 Floor" },
                    { val: 2, label: "Ground + 1", sub: "Duplex (2 Floors)" },
                    { val: 3, label: "Ground + 2", sub: "Triplex (3 Floors)" }
                  ].map((fl) => (
                    <button
                      key={fl.val}
                      onClick={() => setFloors(fl.val)}
                      className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                        floors === fl.val
                          ? 'border-[#C05621] bg-[#FAF1E6] ring-2 ring-[#C05621]/30'
                          : 'border-[#E8DFD5] bg-[#FAF7F2] hover:border-[#D5C2B1]'
                      }`}
                    >
                      <span className={`block font-bold text-sm ${floors === fl.val ? 'text-[#C05621]' : 'text-[#221C18]'}`}>
                        {fl.label}
                      </span>
                      <span className="text-[11px] text-[#786659]">
                        {fl.sub}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quality Package Selection */}
              <div>
                <label className="block text-sm font-bold text-[#221C18] mb-2">
                  3. Construction Quality Package
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: 'standard', name: 'Standard', rate: '₹1,450/sq.ft', sub: 'Reliable & Economical' },
                    { id: 'premium', name: 'Premium Deluxe', rate: '₹1,850/sq.ft', sub: 'Most Popular Choice', popular: true },
                    { id: 'luxury', name: 'Luxury Villa', rate: '₹2,400/sq.ft', sub: 'High-end Architectural' }
                  ].map((pkg) => (
                    <div
                      key={pkg.id}
                      onClick={() => setPackageType(pkg.id as any)}
                      className={`relative p-3.5 rounded-xl border transition-all cursor-pointer ${
                        packageType === pkg.id
                          ? 'border-[#C05621] bg-[#FAF1E6] shadow-sm ring-2 ring-[#C05621]/20'
                          : 'border-[#E8DFD5] bg-[#FAF7F2] hover:border-[#D5C2B1]'
                      }`}
                    >
                      {pkg.popular && (
                        <span className="absolute -top-2.5 right-3 bg-[#C05621] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                          Top Choice
                        </span>
                      )}
                      <div className="flex items-center justify-between mb-1">
                        <span className={`font-bold text-xs ${packageType === pkg.id ? 'text-[#C05621]' : 'text-[#221C18]'}`}>
                          {pkg.name}
                        </span>
                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${packageType === pkg.id ? 'bg-[#C05621] border-[#C05621]' : 'border-gray-300'}`}>
                          {packageType === pkg.id && <Check className="w-3 h-3 text-white" />}
                        </div>
                      </div>
                      <div className="text-sm font-extrabold text-[#221C18]">
                        {pkg.rate}
                      </div>
                      <p className="text-[10px] text-[#786659] mt-0.5">
                        {pkg.sub}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Package Specs summary */}
              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E8DFD5] text-xs space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[#786659]">Steel Rebar:</span>
                  <span className="font-semibold text-[#2D241E]">{currentPkg.steel}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#786659]">Cement Specification:</span>
                  <span className="font-semibold text-[#2D241E]">{currentPkg.cement}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#786659]">Flooring & Tiles:</span>
                  <span className="font-semibold text-[#2D241E]">{currentPkg.flooring}</span>
                </div>
              </div>

            </div>

            {/* Right Output Estimate Card */}
            <div className="lg:col-span-5 bg-gradient-to-b from-[#2A211B] to-[#1E1713] text-white rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-lg">
              
              <div>
                <div className="flex items-center justify-between border-b border-[#4A3B32] pb-4 mb-5">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#FED7AA] font-bold">
                      Estimate Summary
                    </span>
                    <h4 className="text-lg font-bold text-white font-serif-display">
                      Indore Turnkey Cost
                    </h4>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] text-[#D5C2B1] block">Built-up Area</span>
                    <span className="text-sm font-extrabold text-[#FED7AA]">
                      ~{totalBuiltUp.toLocaleString()} sq.ft
                    </span>
                  </div>
                </div>

                {/* Main Estimated Cost Figure */}
                <div className="bg-[#3B2E24] p-4 rounded-xl border border-[#5A4738] mb-6">
                  <p className="text-xs text-[#D5C2B1] mb-1">
                    Approximate Project Investment:
                  </p>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#FED7AA] font-serif-display">
                    {formatINR(estimatedCost)}
                  </div>
                  <p className="text-[11px] text-[#D5C2B1] mt-1">
                    Based on ₹{currentPkg.rate}/sq.ft complete material + civil labor contract.
                  </p>
                </div>

                {/* Key Material & Timeline Estimates */}
                <div className="grid grid-cols-3 gap-2.5 mb-6 text-center">
                  <div className="bg-[#342920] p-2.5 rounded-lg border border-[#4A3B32]">
                    <span className="text-[10px] text-[#D5C2B1] block">Cement Req.</span>
                    <span className="text-sm font-bold text-white">~{estimatedCementBags}</span>
                    <span className="text-[9px] text-[#A69485] block">Bags</span>
                  </div>

                  <div className="bg-[#342920] p-2.5 rounded-lg border border-[#4A3B32]">
                    <span className="text-[10px] text-[#D5C2B1] block">Steel (TMT)</span>
                    <span className="text-sm font-bold text-white">~{estimatedSteelTons}</span>
                    <span className="text-[9px] text-[#A69485] block">Metric Tons</span>
                  </div>

                  <div className="bg-[#342920] p-2.5 rounded-lg border border-[#4A3B32]">
                    <span className="text-[10px] text-[#D5C2B1] block">Handover Time</span>
                    <span className="text-sm font-bold text-[#FED7AA]">~{currentPkg.timelineMonths}</span>
                    <span className="text-[9px] text-[#A69485] block">Months</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-[11px] text-[#D5C2B1] mb-6">
                  <ShieldCheck className="w-4 h-4 text-[#25D366] flex-shrink-0" />
                  <span>Includes 2D/3D Vastu Architectural Planning & IMC Layout guidance.</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-2 border-t border-[#4A3B32]">
                <a
                  href={`https://wa.me/919131735020?text=${getWhatsAppEstimateText()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs sm:text-sm shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Send This Estimate to WhatsApp</span>
                </a>

                <button
                  onClick={onOpenConsultation}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#C05621] hover:bg-[#9C4114] text-white font-semibold text-xs transition-colors cursor-pointer"
                >
                  Book Free On-Site Inspection & Exact BOQ
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
