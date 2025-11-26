import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/ui/animated-section';
import { TextShimmer } from '@/components/ui/text-shimmer';
import { ArrowRight, CheckCircle, Sparkles, Zap, Shield } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-24 lg:py-32 overflow-hidden">
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[150px]"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <AnimatedSection delay={0.1} direction="fade">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 mb-8 border border-white/20 shadow-soft-lg">
              <Sparkles className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-semibold text-blue-200 tracking-wide">
                Professional Websites for Service Businesses
              </span>
            </div>
          </AnimatedSection>

          {/* Main Headline */}
          <AnimatedSection delay={0.2} direction="up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
              Websites That Work
              <br />
              <TextShimmer className="text-5xl md:text-6xl lg:text-7xl font-bold" duration={3}>
                As Hard As You Do
              </TextShimmer>
            </h1>
          </AnimatedSection>

          {/* Subheadline */}
          <AnimatedSection delay={0.3} direction="up">
            <p className="text-xl md:text-2xl text-blue-100/80 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Get more customers with a professional website built to convert.
              <br className="hidden md:block" />
              <span className="text-white font-medium">Launch in 7 days</span> — we handle everything.
            </p>
          </AnimatedSection>

          {/* Value Props - Modern Pills */}
          <AnimatedSection delay={0.4} direction="up">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {[
                { icon: Zap, text: "Ready in 7 Days" },
                { icon: Shield, text: "Mobile-Optimized" },
                { icon: CheckCircle, text: "SEO Included" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white/5 backdrop-blur-md rounded-full px-6 py-3 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <item.icon className="w-5 h-5 text-green-400" />
                  <span className="font-semibold text-white text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* CTA Buttons */}
          <AnimatedSection delay={0.5} direction="up">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button
                asChild
                size="xl"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-10 py-6 text-lg font-bold rounded-2xl shadow-glow-md hover:shadow-glow-lg transform hover:scale-105 transition-all duration-300"
              >
                <Link href="/contact" className="flex items-center gap-3">
                  Get Your Website Today
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="glass"
                size="xl"
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 px-10 py-6 text-lg font-bold rounded-2xl shadow-soft-lg hover:shadow-soft-xl transform hover:scale-105 transition-all duration-300"
              >
                <Link href="/templates" className="flex items-center gap-3">
                  View Templates
                </Link>
              </Button>
            </div>
          </AnimatedSection>

          {/* Industries - Modern Design */}
          <AnimatedSection delay={0.6} direction="up">
            <div className="pt-12 border-t border-white/10">
              <p className="text-sm text-blue-200/60 mb-6 font-medium uppercase tracking-wider">
                Trusted by businesses in
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {['Plumbing', 'HVAC', 'Construction', 'Electrical', 'Landscaping', 'Auto Repair'].map((industry, index) => (
                  <span
                    key={index}
                    className="bg-white/5 backdrop-blur-sm px-5 py-2.5 rounded-xl text-blue-100/80 text-sm font-medium hover:bg-white/10 hover:text-white transition-all duration-300 border border-white/5"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-2xl backdrop-blur-sm border border-white/10 animate-float hidden lg:block"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-purple-500/20 rounded-xl backdrop-blur-sm border border-white/10 animate-float hidden lg:block" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 right-20 w-12 h-12 bg-pink-500/20 rounded-lg backdrop-blur-sm border border-white/10 animate-float hidden lg:block" style={{ animationDelay: '4s' }}></div>
    </section>
  );
}
