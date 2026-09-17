export interface Project {
  id: string;
  title: string;
  hindiTitle?: string;
  category: 'Residential' | 'Custom Bungalow' | 'Plot Development' | 'Renovation' | 'Commercial';
  location: string;
  area: string;
  status: 'Completed' | 'Under Construction' | 'Delivered' | 'Ready to Move';
  year: string;
  image: string;
  beforeImage?: string;
  afterImage?: string;
  description: string;
  highlights: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  reviewDate: string;
  hindiQuote?: string;
  englishQuote: string;
  projectType: string;
  verified: boolean;
  avatarBg?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  hindiTitle: string;
  iconName: string;
  shortDesc: string;
  detailedDesc: string;
  features: string[];
  startingAt?: string;
  suitableFor: string;
}

export interface ConsultationRequest {
  id: string;
  name: string;
  phone: string;
  interest: 'Property Buying/Selling' | 'Residential Construction' | 'Custom Home Building' | 'Plot Development' | 'Renovation & Remodeling' | 'Property Investment Advice';
  preferredDate: string;
  preferredTime: string;
  locationPreference?: string;
  budgetRange?: string;
  message: string;
  createdAt: string;
}

export interface WhyChooseUsPoint {
  id: string;
  title: string;
  hindiTitle: string;
  description: string;
  iconName: string;
  badge?: string;
}

export interface CompanyInfo {
  name: string;
  hindiName: string;
  taglineHindi: string;
  taglineEnglish: string;
  rating: number;
  totalReviews: number;
  phone: string;
  phoneDisplay: string;
  whatsAppUrl: string;
  address: string;
  addressShort: string;
  city: string;
  state: string;
  pincode: string;
  hours: string;
  hoursDetail: string;
  mapEmbedUrl: string;
  mapDirectLink: string;
}
