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
    tagline: "Airy & Minimal",
    description: "Clean, professional design with plenty of whitespace. Perfect for businesses that want to convey trust and reliability through simplicity.",
    tone: "Professional, Clean, Trustworthy",
    features: [
      "Split hero layout with quick-contact chips",
      "Stacked service cards with soft shadows",
      "Gallery slider with smooth transitions",
      "Minimal color palette with strategic accents",
      "Generous whitespace for easy reading"
    ],
    motif: "addy",
    thumbnail: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=clean%20minimal%20website%20design%20with%20white%20background%20and%20blue%20accents%20professional%20layout&image_size=landscape_4_3",
    demoUrl: "/templates/addy",
    industry: "Plumbing",
    bestFor: ["Service Providers", "Contractors", "Professional Services"],
    colorScheme: {
      primary: "bg-blue-600",
      secondary: "bg-gray-100"
    }
  },
  {
    id: "marc",
    name: "MARC",
    tagline: "Bold & Full-Width",
    description: "Eye-catching design with oversized typography and full-width imagery. Ideal for businesses that want to make a strong visual impact.",
    tone: "Bold, Confident, Impactful",
    features: [
      "Oversized typography for maximum impact",
      "Full-width image bands with parallax effects",
      "Bold stat blocks with animated counters",
      "Masonry gallery layout",
      "High-contrast color scheme"
    ],
    motif: "marc",
    thumbnail: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=bold%20modern%20website%20design%20with%20large%20typography%20full%20width%20images%20dark%20theme&image_size=landscape_4_3",
    demoUrl: "/templates/marc",
    industry: "Construction",
    bestFor: ["Construction Companies", "Builders", "Large Projects"],
    colorScheme: {
      primary: "bg-orange-600",
      secondary: "bg-gray-900"
    }
  },
  {
    id: "cade",
    name: "CADE",
    tagline: "Conversion-Focused",
    description: "Strategically designed to maximize leads and conversions. Features clear calls-to-action and trust-building elements throughout.",
    tone: "Results-Driven, Persuasive, Action-Oriented",
    features: [
      "Checklist hero with clear value propositions",
      "Process timeline showing your workflow",
      "Sticky mobile CTA for maximum conversions",
      "Trust badges and testimonials prominently displayed",
      "Strategic placement of contact forms"
    ],
    motif: "cade",
    thumbnail: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=conversion%20focused%20website%20design%20with%20call%20to%20action%20buttons%20checklist%20layout%20professional&image_size=landscape_4_3",
    demoUrl: "/templates/cade",
    industry: "HVAC",
    bestFor: ["Emergency Services", "HVAC", "Urgent Repairs"],
    colorScheme: {
      primary: "bg-green-600",
      secondary: "bg-blue-100"
    }
  }
];

export function getTemplateById(id: string): Template | undefined {
  return templates.find(template => template.id === id);
}

export function getTemplateByMotif(motif: "addy" | "marc" | "cade"): Template | undefined {
  return templates.find(template => template.motif === motif);
}