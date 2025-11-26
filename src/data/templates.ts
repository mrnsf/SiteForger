export interface Template {
  id: string;
  name: string;
  tagline: string;
  description: string;
  tone: string;
  features: string[];
  motif: "addy" | "marc" | "cade";
  thumbnail: string;
  demoUrl: string;
  industry: string;
  bestFor: string[];
  colorScheme: {
    primary: string;
    secondary: string;
  };
}

export const templates: Template[] = [
  {
    id: "addy",
    name: "ADDY",
    tagline: "Minimal & Elegant",
    description: "A refined, spacious design that communicates professionalism through simplicity. Features generous whitespace, soft shadows, and elegant typography for a premium feel.",
    tone: "Sophisticated, Clean, Premium",
    features: [
      "Centered hero with elegant typography",
      "Soft rounded cards with subtle shadows",
      "Minimalist gallery with smooth hover effects",
      "Pill-shaped buttons and refined CTAs",
      "Light, airy color palette with blue accents"
    ],
    motif: "addy",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    demoUrl: "/templates/addy",
    industry: "Professional Services",
    bestFor: ["Consulting Firms", "Premium Brands", "Professional Services"],
    colorScheme: {
      primary: "bg-blue-600",
      secondary: "bg-slate-50"
    }
  },
  {
    id: "marc",
    name: "MARC",
    tagline: "Bold & Powerful",
    description: "A commanding dark design with oversized typography and full-width imagery. Makes a strong, unforgettable impression with high-contrast visuals and industrial aesthetics.",
    tone: "Bold, Confident, Impactful",
    features: [
      "Oversized hero typography for maximum impact",
      "Full-width image bands with gradient overlays",
      "Bold stat blocks with dramatic presentation",
      "Masonry gallery layout with hover zoom",
      "Dark theme with orange accent highlights"
    ],
    motif: "marc",
    thumbnail: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&q=80",
    demoUrl: "/templates/marc",
    industry: "Construction & Industrial",
    bestFor: ["Construction Companies", "Manufacturing", "Industrial Services"],
    colorScheme: {
      primary: "bg-orange-600",
      secondary: "bg-gray-900"
    }
  },
  {
    id: "cade",
    name: "CADE",
    tagline: "Conversion-Focused",
    description: "An energetic, action-driven design built to convert visitors into customers. Features urgent CTAs, trust signals, diagonal elements, and persuasive layouts for maximum lead generation.",
    tone: "Urgent, Persuasive, Action-Oriented",
    features: [
      "High-energy hero with urgent messaging",
      "Diagonal backgrounds and dynamic elements",
      "Sticky mobile CTA for constant visibility",
      "Trust badges and social proof sections",
      "Multi-color gradients with pulsing animations"
    ],
    motif: "cade",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    demoUrl: "/templates/cade",
    industry: "Emergency & Urgent Services",
    bestFor: ["Emergency Services", "Time-Sensitive Businesses", "High-Volume Leads"],
    colorScheme: {
      primary: "bg-red-600",
      secondary: "bg-yellow-400"
    }
  }
];

export function getTemplateById(id: string): Template | undefined {
  return templates.find(template => template.id === id);
}

export function getTemplateByMotif(motif: "addy" | "marc" | "cade"): Template | undefined {
  return templates.find(template => template.motif === motif);
}