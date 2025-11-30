import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/ui/animated-section';
import { ArrowRight, Sparkles } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-background to-muted/30">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <AnimatedSection delay={0.1} direction="fade">
            <div className="inline-flex items-center gap-2 rounded-full px-6 py-2 mb-6 bg-primary/10 text-primary border border-primary/20">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">Professional Websites for Service Businesses</span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} direction="up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
              Websites That Work{' '}
              <span className="text-primary">As Hard As You Do</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.3} direction="up">
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
              Get more customers with a professional, conversion‑focused site tailored to your trade. Launch in 7 days — we handle everything.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.4} direction="up">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-14 text-base font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <Link href="/contact" className="flex items-center gap-3">
                  Get a free quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="px-8 h-14 text-base border-2"
              >
                <Link href="/templates">View templates</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
