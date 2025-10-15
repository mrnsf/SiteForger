import { Metadata } from 'next';
import { HeroSection } from '@/components/marketing/hero-section';
import { ServiceCards } from '@/components/marketing/service-cards';
import { ValueProps } from '@/components/marketing/value-props';
import { TemplatesPreview } from '@/components/marketing/templates-preview';
import { CTABanner } from '@/components/marketing/cta-banner';

export const metadata: Metadata = {
  title: 'Site Forger - Professional Websites for Blue-Collar Businesses',
  description: 'Get more customers with a website that works as hard as you do. Professional websites for contractors, service providers, and skilled trades.',
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServiceCards />
      <ValueProps />
      <TemplatesPreview />
      <CTABanner />
    </div>
  );
}
