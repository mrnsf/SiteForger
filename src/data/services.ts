export interface Service {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  benefits: string[];
  pricing: {
    starting: string;
    typical: string;
  };
  icon: string;
  anchor: string;
}

export const services: Service[] = [
  {
    id: "websites",
    name: "Professional Websites",
    tagline: "Built for Blue-Collar Success",
    description: "Custom websites designed specifically for trades and service businesses. Mobile-friendly, fast-loading, and built to convert visitors into customers.",
    features: [
      "Mobile-responsive design",
      "Fast loading speeds (under 3 seconds)",
      "SEO-optimized structure",
      "Contact forms and lead capture",
      "Service area pages",
      "Before/after photo galleries",
      "Customer testimonials section",
      "Google Maps integration"
    ],
    benefits: [
      "Attract more local customers",
      "Build trust and credibility",
      "Showcase your work professionally",
      "Generate leads 24/7",
      "Compete with larger companies"
    ],
    pricing: {
      starting: "Contact for pricing",
      typical: "Custom quotes available"
    },
    icon: "Globe",
    anchor: "websites"
  },
  {
    id: "seo",
    name: "Local SEO",
    tagline: "Get Found by Local Customers",
    description: "Dominate local search results and get found when customers search for your services. Our SEO strategies are tailored for local service businesses.",
    features: [
      "Google Business Profile optimization",
      "Local keyword targeting",
      "Citation building and management",
      "Review management strategy",
      "Local content creation",
      "Competitor analysis",
      "Monthly ranking reports",
      "Google Analytics setup"
    ],
    benefits: [
      "Rank higher in local searches",
      "Increase website traffic",
      "Get more phone calls",
      "Beat your competition",
      "Build online reputation"
    ],
    pricing: {
      starting: "Contact for pricing",
      typical: "Monthly plans available"
    },
    icon: "Search",
    anchor: "seo"
  },
  {
    id: "google-business",
    name: "Google Business",
    tagline: "Maximize Your Local Presence",
    description: "Optimize your Google Business Profile to attract more customers, get better reviews, and dominate local map results in your service area.",
    features: [
      "Complete profile optimization",
      "Professional photo uploads",
      "Service area configuration",
      "Review response management",
      "Post scheduling and management",
      "Q&A monitoring",
      "Insights and reporting",
      "Local pack optimization"
    ],
    benefits: [
      "Appear in map results",
      "Get more customer calls",
      "Improve online reputation",
      "Showcase your services",
      "Track customer interactions"
    ],
    pricing: {
      starting: "Contact for pricing",
      typical: "Monthly plans available"
    },
    icon: "MapPin",
    anchor: "google-business"
  }
];

export function getServiceById(id: string): Service | undefined {
  return services.find(service => service.id === id);
}

export function getServiceByAnchor(anchor: string): Service | undefined {
  return services.find(service => service.anchor === anchor);
}