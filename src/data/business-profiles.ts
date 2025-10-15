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

// Sample business profiles for template demonstrations
export const businessProfiles: BusinessProfile[] = [
  {
    id: "addy-demo",
    name: "Premier Plumbing Solutions",
    industry: "Plumbing",
    location: "Austin, TX",
    services: [
      "Emergency Plumbing Repairs",
      "Drain Cleaning & Unclogging",
      "Water Heater Installation",
      "Pipe Replacement & Repair",
      "Bathroom & Kitchen Plumbing",
      "Sewer Line Services"
    ],
    description: "Family-owned plumbing company serving Austin and surrounding areas for over 15 years. We pride ourselves on honest pricing, quality workmanship, and 24/7 emergency service.",
    phone: "(512) 555-0123",
    email: "info@premierplumbingaustin.com",
    yearEstablished: 2008,
    employees: "8-12",
    serviceArea: "Austin Metro Area (30-mile radius)",
    specialties: ["Emergency Repairs", "Water Heater Specialists", "Drain Cleaning"],
    testimonial: {
      text: "Premier Plumbing saved the day when our water heater failed on Christmas Eve. They came out within an hour and had us back up and running. Honest, reliable, and fairly priced.",
      author: "Sarah Johnson",
      title: "Homeowner"
    }
  },
  {
    id: "marc-demo",
    name: "Titan Construction Group",
    industry: "Construction",
    location: "Denver, CO",
    services: [
      "Custom Home Building",
      "Commercial Construction",
      "Home Renovations & Additions",
      "Kitchen & Bathroom Remodeling",
      "Roofing & Siding",
      "Concrete & Foundation Work"
    ],
    description: "Award-winning construction company specializing in custom homes and commercial projects. We bring big-city expertise with small-town values to every project we build.",
    phone: "(303) 555-0456",
    email: "projects@titanconstructionco.com",
    yearEstablished: 2005,
    employees: "25-35",
    serviceArea: "Denver Metro & Front Range",
    specialties: ["Custom Homes", "Commercial Projects", "Luxury Renovations"],
    testimonial: {
      text: "Titan Construction built our dream home exactly as we envisioned it. Their attention to detail and project management was exceptional. We couldn't be happier with the results.",
      author: "Mike & Jennifer Rodriguez",
      title: "Homeowners"
    }
  },
  {
    id: "cade-demo",
    name: "Elite HVAC Services",
    industry: "HVAC",
    location: "Phoenix, AZ",
    services: [
      "AC Installation & Replacement",
      "Heating System Repair",
      "Duct Cleaning & Sealing",
      "Indoor Air Quality Solutions",
      "Preventive Maintenance Plans",
      "Emergency HVAC Repairs"
    ],
    description: "Phoenix's most trusted HVAC contractor with over 20 years of experience. We specialize in energy-efficient solutions that keep you comfortable year-round while saving money on utility bills.",
    phone: "(602) 555-0789",
    email: "service@elitehvacphx.com",
    yearEstablished: 2003,
    employees: "15-20",
    serviceArea: "Greater Phoenix Area",
    specialties: ["Energy Efficiency", "Emergency Service", "Maintenance Plans"],
    testimonial: {
      text: "Elite HVAC installed our new AC system and the difference is incredible. Our energy bills dropped by 40% and the house stays perfectly comfortable. Highly recommend!",
      author: "David Chen",
      title: "Business Owner"
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