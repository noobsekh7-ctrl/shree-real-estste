import { CompanyInfo, ServiceItem, WhyChooseUsPoint, Testimonial, Project } from '../types';

export const COMPANY_INFO: CompanyInfo = {
  name: "Shree Sanwariya Real Estate and Construction",
  hindiName: "श्री सांवरिया रियल एस्टेट एंड कंस्ट्रक्शन",
  taglineHindi: "आपके सपनों का घर, हमारी ज़िम्मेदारी",
  taglineEnglish: "Building Trust, Building Homes with Uncompromised Quality",
  rating: 4.9,
  totalReviews: 42,
  phone: "09131735020",
  phoneDisplay: "091317 35020",
  whatsAppUrl: "https://wa.me/919131735020",
  address: "PR7J+7WJ, 224, Loknayak Nagar, Indore, Madhya Pradesh 452002",
  addressShort: "224, Loknayak Nagar, Indore (MP) 452002",
  city: "Indore",
  state: "Madhya Pradesh",
  pincode: "452002",
  hours: "Open Daily • Closes 8:00 PM",
  hoursDetail: "Monday – Sunday: 09:00 AM – 08:00 PM",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.123456789!2d75.834567!3d22.719567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd0000000000%3A0x0!2zMjLCsDQzJzEwLjQiTiA3NcKwNTAnMDQuNCJF!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin",
  mapDirectLink: "https://maps.google.com/?q=PR7J%2B7WJ,+224,+Loknayak+Nagar,+Indore,+Madhya+Pradesh+452002"
};

export const SERVICES: ServiceItem[] = [
  {
    id: "residential-construction",
    title: "Residential Construction",
    hindiTitle: "आवासीय भवन निर्माण",
    iconName: "Building2",
    shortDesc: "End-to-end turnkey house and duplex construction with premium grade cement, steel, and rigorous structural supervision.",
    detailedDesc: "From foundation footing to the final coat of paint, we build durable, earthquake-resistant homes tailored to your lifestyle and Vastu principles.",
    features: [
      "RCC Frame with Tata Tiscon / Jindal Panther Steel",
      "Ultratech / Ambuja Grade-53 Cement",
      "Vastu-compliant architectural floor plans",
      "Stage-wise milestone payments & zero hidden charges",
      "Dedicated site engineer daily supervision"
    ],
    startingAt: "₹1,450 / sq.ft",
    suitableFor: "New home builders, single & multi-storey residences"
  },
  {
    id: "custom-home-building",
    title: "Custom Home & Villa Building",
    hindiTitle: "कस्टम होम व विला निर्माण",
    iconName: "Home",
    shortDesc: "Bespoke architectural villas, luxury duplexes, and personalized modern family bungalows with high-end finishes.",
    detailedDesc: "Bring your dream architectural vision to life with custom elevations, Italian marble flooring, false ceiling lighting, and designer modular kitchens.",
    features: [
      "3D 4K Elevation and walk-through walkthroughs",
      "Premium sanitary fittings (Jaquar / Kohler)",
      "Teak wood doors and UPVC sliding soundproof windows",
      "Smart home wiring and solar panel readiness",
      "10-year structural warranty certificate"
    ],
    startingAt: "₹1,850 / sq.ft",
    suitableFor: "Luxury home builders, duplex bungalow seekers"
  },
  {
    id: "property-consulting",
    title: "Property Buying & Selling Consultation",
    hindiTitle: "प्रॉपर्टी खरीद एवं बिक्री परामर्श",
    iconName: "KeyRound",
    shortDesc: "Expert guidance for buying prime residential plots, ready-to-move homes, and verified commercial properties across Indore.",
    detailedDesc: "Navigating Indore's fast-growing property market with 100% legal title verification, clear registry documentation, and best-negotiated market rates.",
    features: [
      "100% verified legal titles & RERA checked projects",
      "T&CP and Indore Municipal Corporation (IMC) approved",
      "Assistance with Registry, Mutation (Namantaran) & Bank Loans",
      "Prime locations: Loknayak Nagar, Super Corridor, Rau, Bypass, AB Road",
      "Zero hassle, transparent deal facilitation"
    ],
    startingAt: "Free First Consultation",
    suitableFor: "Home buyers, plot purchasers, first-time investors"
  },
  {
    id: "plot-development",
    title: "Plot & Colony Development",
    hindiTitle: "प्लॉट एवं कॉलोनी विकास",
    iconName: "Compass",
    shortDesc: "Land surveying, boundary demarcation, leveling, road paving, and plotting development for landowners and developers.",
    detailedDesc: "Comprehensive land development services transforming raw acreage into prime residential layouts with concrete roads, drainage, water pipelines, and electrification.",
    features: [
      "Accurate Total Station digital land survey",
      "Demarcation with boundary pillars and fencing",
      "Internal concrete roads & stormwater drainage setup",
      "Plot layout masterplanning and zoning compliance",
      "High return on investment planning"
    ],
    startingAt: "Custom Quote",
    suitableFor: "Landowners, colonizers, plotted investors"
  },
  {
    id: "renovation-remodeling",
    title: "Home Renovation & Remodeling",
    hindiTitle: "मकान नवीनीकरण एवं विस्तार",
    iconName: "Hammer",
    shortDesc: "Complete home transformation including floor additions, modern facade makeovers, kitchen modernization, and waterproofing.",
    detailedDesc: "Upgrade your existing house with modern architecture, structural reinforcement, terrace waterproofing, premium tiling, and modern sanitary upgrades.",
    features: [
      "Vertical floor addition & structural column jacketing",
      "Modern exterior elevation ACP/Wood plank makeover",
      "Complete modular kitchen & bathroom remodeling",
      "100% guaranteed roof & terrace waterproofing",
      "Minimal disruption and rapid execution"
    ],
    startingAt: "₹350 / sq.ft",
    suitableFor: "Existing house owners, modernization seekers"
  },
  {
    id: "property-investment",
    title: "Property Investment Advice",
    hindiTitle: "रियल एस्टेट निवेश सलाह",
    iconName: "TrendingUp",
    shortDesc: "Strategic real estate advisory for high-yield returns, upcoming growth corridors, and capital appreciation in Indore.",
    detailedDesc: "Maximize your portfolio returns by capitalizing on Indore’s rapid infrastructure growth like Metro Rail, Super Corridor IT Hub, and Pithampur expansion.",
    features: [
      "Indore Master Plan 2035 growth corridor analysis",
      "Rental yield and 3-5 year capital appreciation forecast",
      "Commercial showroom and pre-leased asset guidance",
      "Risk assessment and clear title verification",
      "Portfolio diversification for NRIs and local investors"
    ],
    startingAt: "Free Portfolio Review",
    suitableFor: "Investors, wealth builders, NRI property seekers"
  }
];

export const WHY_CHOOSE_US: WhyChooseUsPoint[] = [
  {
    id: "on-time-delivery",
    title: "On-Time Project Delivery",
    hindiTitle: "समय पर निर्माण पूर्ण",
    description: "Strict milestone-based project management with committed handover dates. We value your time and move-in schedules.",
    iconName: "Clock",
    badge: "100% Committed"
  },
  {
    id: "quality-material",
    title: "Certified Construction Materials",
    hindiTitle: "उच्च गुणवत्ता निर्माण सामग्री",
    description: "We never compromise on strength. Only verified Grade-53 cement, Fe-550D TMT rebars, clean Narmada/Crushed sand, and premium bricks.",
    iconName: "ShieldCheck",
    badge: "Lab Tested"
  },
  {
    id: "transparent-pricing",
    title: "100% Transparent Pricing",
    hindiTitle: "पारदर्शी एवं उचित दरें",
    description: "Itemized Bills of Quantity (BOQ) with zero surprise costs. Clear stage-wise payment schedules matching actual site progress.",
    iconName: "BadgePercent",
    badge: "No Hidden Costs"
  },
  {
    id: "indore-local-trust",
    title: "Trusted Local Consultant in Indore",
    hindiTitle: "इंदौर का विश्वसनीय स्थानीय पार्टनर",
    description: "Deep rooted expertise in Indore property laws, IMC approvals, registry procedures, and locality-wise soil & water dynamics.",
    iconName: "MapPin",
    badge: "Loknayak Nagar, Indore"
  },
  {
    id: "top-rated",
    title: "4.9-Star Google Rating",
    hindiTitle: "4.9 स्टार गूगल रेटिंग (42+ समीक्षाएं)",
    description: "Proven track record of delighting families and investors with transparent guidance and solid craftsmanship.",
    iconName: "Star",
    badge: "4.9 ★ Rating"
  },
  {
    id: "dual-expertise",
    title: "Dual Advantage: Brokerage + Builder",
    hindiTitle: "प्रॉपर्टी खरीद से लेकर निर्माण तक",
    description: "One trusted partner who helps you find the right legal plot and builds your custom dream home under one single roof.",
    iconName: "Layers",
    badge: "Single Window"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "harshad-parmar",
    name: "Harshad Parmar",
    role: "Homeowner, Indore",
    rating: 5,
    reviewDate: "Recent Google Review",
    englishQuote: "Fantastic experience with Sanwariya Real Estate. Professionalism and attention to detail made the process smooth and stress-free. Project completed on time, within budget, quality exceeded expectations.",
    projectType: "Full House Construction (G+1)",
    verified: true,
    avatarBg: "bg-amber-700"
  },
  {
    id: "chirag-prajapat",
    name: "Chirag Prajapat",
    role: "Resident, Loknayak Nagar",
    rating: 5,
    reviewDate: "Google Verified Review",
    hindiQuote: "Achhe ghar banate hain aur bahut achhi service hai.",
    englishQuote: "They build great homes and provide excellent service throughout the construction journey.",
    projectType: "Residential Construction & Finishing",
    verified: true,
    avatarBg: "bg-orange-800"
  },
  {
    id: "nakul-parmar",
    name: "Nakul Parmar",
    role: "Property Investor, Indore",
    rating: 5,
    reviewDate: "Google Verified Review",
    hindiQuote: "Achhi property dilate hain, best builder.",
    englishQuote: "They help get good, genuine properties in Indore and are the best builder in terms of commitment.",
    projectType: "Plot Purchase & Construction Consultation",
    verified: true,
    avatarBg: "bg-stone-700"
  },
  {
    id: "rajesh-sharma",
    name: "Rajesh & Sunita Sharma",
    role: "Duplex Owners, Super Corridor",
    rating: 5,
    reviewDate: "Google Verified Review",
    englishQuote: "Shree Sanwariya team handled our plot legal verification and constructed our 2400 sq.ft duplex. Outstanding craftsmanship and complete peace of mind with material quality.",
    projectType: "Turnkey Luxury Duplex",
    verified: true,
    avatarBg: "bg-yellow-800"
  },
  {
    id: "anand-verma",
    name: "Anand Verma",
    role: "Business Owner, Rau Bypass",
    rating: 5,
    reviewDate: "Google Verified Review",
    englishQuote: "Very honest and transparent dealings. They explained the whole cost estimation clearly without any hidden terms. Completed the structure before promised date.",
    projectType: "Commercial + Residential Mix",
    verified: true,
    avatarBg: "bg-amber-900"
  }
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "proj-1",
    title: "Sanwariya Elegance Bungalow",
    hindiTitle: "सांवरिया एलिगेंस बंगलो",
    category: "Custom Bungalow",
    location: "Loknayak Nagar, Indore",
    area: "2,200 sq.ft Built-up (G+1)",
    status: "Completed",
    year: "2024",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    beforeImage: "https://images.unsplash.com/photo-1541888946425-d0fbb180c5f5?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    description: "Modern 4BHK architectural duplex featuring contemporary facade with warm wood slat accents, wide cantilevered balconies, and open floor living concept.",
    highlights: ["Fe-550D TMT Rebar Frame", "Teak Wood Main Door & UPVC Windows", "Italian Finish Vitrified Tiling", "Vastu Compliant North-East Entry"]
  },
  {
    id: "proj-2",
    title: "The Heritage Duplex Villa",
    hindiTitle: "द हेरिटेज डुप्लेक्स विला",
    category: "Residential",
    location: "Near Super Corridor, Indore",
    area: "3,100 sq.ft (G+2 with Terrace Garden)",
    status: "Delivered",
    year: "2024",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    description: "Luxurious 5BHK residence with double-height living room ceiling, rooftop terrace gazebo, and solar water heater integration.",
    highlights: ["Grade-53 Ultratech Concrete", "False Ceiling & Ambient Warm LED", "Modular Kitchen with Quartz Counter", "Covered Stilt Car Parking"]
  },
  {
    id: "proj-3",
    title: "Sanwariya Prime Residential Plots",
    hindiTitle: "सांवरिया प्राइम आवासीय प्लॉट विकास",
    category: "Plot Development",
    location: "Rau-Pithampur Connect Road, Indore",
    area: "5 Acres Master Planned Colony",
    status: "Ready to Move",
    year: "2024",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    description: "T&CP approved plotted colony with 30-foot wide concrete roads, underground drainage, landscaped green garden, and boundary security.",
    highlights: ["Individual Registry & Namantaran Ready", "Bank Finance Available (SBI/HDFC)", "High Capital Appreciation Zone", "24x7 Water Supply Line"]
  },
  {
    id: "proj-4",
    title: "Modern Facade & Floor Renovation",
    hindiTitle: "आधुनिक फसाड एवं फ्लोर रेनोवेशन",
    category: "Renovation",
    location: "Sudama Nagar, Indore",
    area: "1,800 sq.ft Total Transformation",
    status: "Completed",
    year: "2023",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    beforeImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    description: "Transformed an outdated 25-year-old single floor house into a striking 2-storey contemporary home with modern exterior texture and full waterproofing.",
    highlights: ["Column Strengthening & Jacketing", "Terrace Dr. Fixit Waterproofing", "Designer Bathroom Upgrade", "Wood Look Exterior Cladding"]
  },
  {
    id: "proj-5",
    title: "Sanwariya Commercial Plaza & Showrooms",
    hindiTitle: "सांवरिया कमर्शियल प्लाजा",
    category: "Commercial",
    location: "Aerodrome Road Connect, Indore",
    area: "4,500 sq.ft Multi-tier Retail",
    status: "Under Construction",
    year: "2025",
    image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80",
    description: "High footfall commercial shopping arcade designed for retail showrooms, medical stores, and professional consultancy offices.",
    highlights: ["Heavy Load RCC Structure", "Glass Curtain Frontage", "Spacious Customer Parking", "High Rental Yield Potential"]
  },
  {
    id: "proj-6",
    title: "Classic Contemporary Home (1500 sq.ft)",
    hindiTitle: "क्लासिक समकालीन निवास (1500 वर्ग फीट)",
    category: "Residential",
    location: "Loknayak Nagar Extension, Indore",
    area: "1,500 sq.ft (3BHK Duplex)",
    status: "Completed",
    year: "2024",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    description: "Budget-optimized yet premium finish family home constructed in just 6.5 months from plinth to key handover.",
    highlights: ["100% On-time Handover", "Zero Cost Overruns", "ISI Brand Electricals (Finolex/Havells)", "Modular Kitchen Included"]
  }
];

export const INDORE_LOCALITIES = [
  "Loknayak Nagar",
  "Super Corridor",
  "Vijay Nagar & Scheme 78",
  "Rau & Bypass Road",
  "Sudama Nagar & Annapurna",
  "Aerodrome Road & Kalani Nagar",
  "AB Road & Silicon City",
  "Banganga & MR-10",
  "Nipania & Mahalaxmi Nagar",
  "Pithampur Industrial Belt"
];

export const FAQS = [
  {
    q: "How do you calculate construction costs in Indore?",
    hindiQ: "इंदौर में मकान निर्माण की लागत कैसे तय होती है?",
    a: "Our construction packages start from ₹1,450/sq.ft (Standard), ₹1,850/sq.ft (Premium), up to ₹2,400+/sq.ft (Luxury). Every quote includes a detailed Bill of Quantities (BOQ) with specific brand mentions (Tata Steel, Ultratech Cement, Kajaria tiles, etc.) ensuring total transparency."
  },
  {
    q: "Do you help in verifying plot registry and IMC approvals?",
    hindiQ: "क्या आप प्लॉट की रजिस्ट्री और सरकारी मंजूरी में मदद करते हैं?",
    a: "Yes, 100%! We verify legal title, Khasra/Khatauni documents, T&CP layout approvals, and IMC (Indore Municipal Corporation) permissions before recommending any property or starting construction."
  },
  {
    q: "What is the typical timeline for constructing a 2000 sq.ft duplex?",
    hindiQ: "2000 वर्ग फीट का मकान बनने में कितना समय लगता है?",
    a: "A typical 2-storey duplex (2000-2400 sq.ft) is delivered in 6 to 8 months from foundation excavation to final painting and deep cleaning, backed by milestone timeline agreements."
  },
  {
    q: "Can I customize the architectural floor plan according to Vastu?",
    hindiQ: "क्या हम वास्तु अनुसार नक्शा कस्टमाइज़ कर सकते हैं?",
    a: "Absolutely. Our in-house architectural team crafts tailored 2D floor plans and 3D elevations aligned with complete Vastu Shastra rules (main door, kitchen, mandir, and master bedroom positioning)."
  }
];
