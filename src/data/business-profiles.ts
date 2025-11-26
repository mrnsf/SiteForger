export interface BusinessProfile {
  id: string;
  name: string;
  industry: string;
  location: string;
  services: string[];
  description: string;
  phone: string;
  email: string;
  website?: string;
  yearEstablished: number;
  employees: string;
  serviceArea: string;
  specialties: string[];
  testimonial?: {
    text: string;
    author: string;
    title: string;
  };
}

// Demo business profiles for template demonstrations
// These showcase how each template style presents business information
export const businessProfiles: BusinessProfile[] = [
  {
    id: "addy-demo",
    name: "Your Business Name",
    industry: "Professional Services",
    location: "Your City, State",
    services: [
      "Premium Service One",
      "Professional Service Two",
      "Expert Consultation",
      "Quality Assurance",
      "Client Support",
      "Custom Solutions"
    ],
    description: "This is where your business description goes. Showcase your expertise, values, and what makes you different. The ADDY template presents this content with elegant, minimal styling.",
    phone: "+1 (830) 928-9196",
    email: "Siteforgerbusiness@gmail.com",
    yearEstablished: 2020,
    employees: "5-10",
    serviceArea: "Your Service Area",
    specialties: ["Your Specialty", "Another Strength", "Key Differentiator"],
    testimonial: {
      text: "This is where a customer testimonial would appear. Great reviews build trust and credibility with potential customers visiting your website.",
      author: "Happy Customer",
      title: "Satisfied Client"
    }
  },
  {
    id: "marc-demo",
    name: "Your Company",
    industry: "Construction & Industrial",
    location: "Your City, State",
    services: [
      "Major Service Category",
      "Secondary Service",
      "Specialized Offering",
      "Project Management",
      "Quality Construction",
      "Expert Installation"
    ],
    description: "Your powerful business story goes here. The MARC template displays this with bold, impactful typography designed to make a strong first impression.",
    phone: "+1 (830) 928-9196",
    email: "Siteforgerbusiness@gmail.com",
    yearEstablished: 2015,
    employees: "20-50",
    serviceArea: "Regional Coverage Area",
    specialties: ["Large Projects", "Quality Work", "On-Time Delivery"],
    testimonial: {
      text: "Share your best customer success story here. The MARC template presents testimonials with dramatic, high-impact styling that commands attention.",
      author: "Valued Client",
      title: "Project Partner"
    }
  },
  {
    id: "cade-demo",
    name: "Your Service Company",
    industry: "Emergency Services",
    location: "Your City, State",
    services: [
      "Emergency Response",
      "Rapid Repair Service",
      "24/7 Availability",
      "Same-Day Solutions",
      "Preventive Maintenance",
      "Expert Diagnostics"
    ],
    description: "Your urgent, action-oriented message goes here. The CADE template is designed to create urgency and drive immediate customer action.",
    phone: "+1 (830) 928-9196",
    email: "Siteforgerbusiness@gmail.com",
    yearEstablished: 2010,
    employees: "10-25",
    serviceArea: "Metro Area Coverage",
    specialties: ["Fast Response", "24/7 Service", "Guaranteed Results"],
    testimonial: {
      text: "Your most compelling customer story goes here. CADE showcases testimonials prominently to build trust and encourage conversions.",
      author: "Grateful Customer",
      title: "Emergency Client"
    }
  }
];

export function getBusinessProfileById(id: string): BusinessProfile | undefined {
  return businessProfiles.find(profile => profile.id === id);
}

export function getBusinessProfileByIndustry(industry: string): BusinessProfile[] {
  return businessProfiles.filter(profile => 
    profile.industry.toLowerCase().includes(industry.toLowerCase())
  );
}