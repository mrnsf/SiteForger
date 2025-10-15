import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/ui/animated-section';
import { AnimatedButton } from '@/components/ui/animated-button';
import { ArrowRight, CheckCircle, Star, Users, Award } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <AnimatedSection delay={0.1} direction="fade">
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-blue-200 shadow-lg">
              <Award className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-semibold text-blue-700">
                #1 Rated Website Service for Contractors
              </span>
            </div>
          </AnimatedSection>

          {/* Main Headline */}
          <AnimatedSection delay={0.2} direction="up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Professional Websites for{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Blue-Collar Businesses
              </span>
            </h1>
          </AnimatedSection>

          {/* Subheadline */}
          <AnimatedSection delay={0.3} direction="up">
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Get more customers with a website that works as hard as you do. 
              <br className="hidden md:block" />
              <span className="font-semibold text-gray-800">No tech skills required</span> – we handle everything from design to launch.
            </p>
          </AnimatedSection>

          {/* Value Props */}
          <AnimatedSection delay={0.4} direction="up">
            <div className="flex flex-wrap justify-center gap-8 mb-12 text-gray-700">
              <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 border border-green-200 hover:bg-white/80 transition-all duration-200">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <span className="font-semibold">Ready in 7 Days</span>
              </div>
              <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 border border-green-200 hover:bg-white/80 transition-all duration-200">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <span className="font-semibold">Mobile-Optimized</span>
              </div>
              <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 border border-green-200 hover:bg-white/80 transition-all duration-200">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <span className="font-semibold">SEO Included</span>
              </div>
            </div>
          </AnimatedSection>

          {/* CTA Buttons */}
          <AnimatedSection delay={0.5} direction="up">
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Button 
                asChild 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-6 text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
              >
                <Link href="/contact" className="flex items-center gap-3">
                  Get Your Website Today
                  <ArrowRight className="w-6 h-6" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-2 border-blue-300 text-blue-700 hover:bg-blue-50 px-10 py-6 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                <Link href="/templates" className="flex items-center gap-3">
                  View Templates
                </Link>
              </Button>
            </div>
          </AnimatedSection>

          {/* Social Proof */}
          <AnimatedSection delay={0.6} direction="up">
            <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700 font-semibold">Quality First Approach</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700 font-semibold">Personalized Service</span>
              </div>
            </div>
          </AnimatedSection>

          {/* Trust Indicators */}
          <AnimatedSection delay={0.7} direction="up">
            <div className="pt-8 border-t border-blue-200">
              <p className="text-sm text-gray-500 mb-6 font-medium">Trusted by businesses in:</p>
              <div className="flex flex-wrap justify-center gap-6 text-base font-semibold text-gray-600">
                <span className="bg-white/50 px-4 py-2 rounded-lg hover:bg-white/70 transition-all duration-200">Plumbing</span>
                <span className="text-gray-400">•</span>
                <span className="bg-white/50 px-4 py-2 rounded-lg hover:bg-white/70 transition-all duration-200">HVAC</span>
                <span className="text-gray-400">•</span>
                <span className="bg-white/50 px-4 py-2 rounded-lg hover:bg-white/70 transition-all duration-200">Construction</span>
                <span className="text-gray-400">•</span>
                <span className="bg-white/50 px-4 py-2 rounded-lg hover:bg-white/70 transition-all duration-200">Electrical</span>
                <span className="text-gray-400">•</span>
                <span className="bg-white/50 px-4 py-2 rounded-lg hover:bg-white/70 transition-all duration-200">Landscaping</span>
                <span className="text-gray-400">•</span>
                <span className="bg-white/50 px-4 py-2 rounded-lg hover:bg-white/70 transition-all duration-200">Auto Repair</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}