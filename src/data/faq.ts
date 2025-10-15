export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "general" | "pricing" | "process" | "technical";
}

export const faqItems: FAQItem[] = [
  {
    id: "what-makes-different",
    question: "What makes Site Forger different from other web design companies?",
    answer: "We specialize exclusively in blue-collar and trade businesses. We understand your industry, your customers, and what drives results. Our websites are built to generate leads, not just look pretty. Plus, we offer fast turnaround times because we know you need to get back to running your business.",
    category: "general"
  },
  {
    id: "how-long-website",
    question: "How long does it take to build a website?",
    answer: "Most websites are completed within 2-3 weeks from the time we receive all your content and photos. Rush jobs can be accommodated for an additional fee. We'll give you a specific timeline during our initial consultation based on your project requirements.",
    category: "process"
  },
  {
    id: "what-included",
    question: "What's included in the website package?",
    answer: "Every website includes mobile-responsive design, basic SEO setup, contact forms, Google Analytics, hosting for the first year, and up to 3 rounds of revisions. We also include a 30-day support period after launch to handle any questions or minor adjustments.",
    category: "general"
  },
  {
    id: "cost-website",
    question: "How much does a website cost?",
    answer: "Our website pricing varies based on the complexity and features needed. This includes everything you need to get online and start generating leads. We'll provide a detailed quote after our consultation call.",
    category: "pricing"
  },
  {
    id: "monthly-fees",
    question: "Are there monthly fees?",
    answer: "The website itself has no monthly fees - you own it outright. However, you'll need hosting and we offer optional monthly SEO and maintenance services. These are completely optional but highly recommended for best results.",
    category: "pricing"
  },
  {
    id: "provide-content",
    question: "Do I need to provide the content and photos?",
    answer: "Yes, you'll need to provide your business information, service descriptions, and photos of your work. Don't worry - we'll guide you through exactly what we need and can help with writing if needed. Great photos of your work make a huge difference in converting visitors to customers.",
    category: "process"
  },
  {
    id: "mobile-friendly",
    question: "Will my website work on mobile phones?",
    answer: "Absolutely! All our websites are fully responsive and optimized for mobile devices. Since most of your customers will find you on their phones, we make sure your site looks great and loads fast on all devices.",
    category: "technical"
  },
  {
    id: "seo-included",
    question: "Is SEO included?",
    answer: "Basic SEO setup is included with every website - this includes proper page titles, meta descriptions, and site structure. For ongoing SEO to rank higher in Google searches, we offer monthly SEO services.",
    category: "technical"
  },
  {
    id: "update-website",
    question: "Can I update the website myself?",
    answer: "We can build your site on a content management system that allows you to make basic updates like adding new photos or changing text. However, most of our clients prefer to focus on their business and let us handle website updates as part of our maintenance service.",
    category: "technical"
  },
  {
    id: "get-started",
    question: "How do I get started?",
    answer: "Simply fill out our contact form or give us a call. We'll schedule a 30-minute consultation to discuss your needs, show you examples, and provide a detailed quote. No pressure, no obligation - just straight talk about how a professional website can help grow your business.",
    category: "process"
  }
];

export function getFAQsByCategory(category: FAQItem["category"]): FAQItem[] {
  return faqItems.filter(item => item.category === category);
}

export function getFAQById(id: string): FAQItem | undefined {
  return faqItems.find(item => item.id === id);
}