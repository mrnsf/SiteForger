import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Mail, Star, CheckCircle, Zap, Shield, Clock } from 'lucide-react';

export function CTABanner() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main CTA Content */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full px-6 py-3 mb-8 bg-primary/10 text-primary border border-primary/20">
              <Star className="w-5 h-5" />
              <span className="text-sm font-bold">Limited Time Offer</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-foreground">
              Ready to{' '}
              <span className="text-primary">Transform</span>{' '}
              Your Business?
            </h2>

            <p className="text-xl md:text-2xl mb-12 text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Get a professional website that works as hard as you do.
              Site Forger delivers results in days, not months — so you can focus on what you do best.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 mb-12 text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="font-semibold">No Setup Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="font-semibold">Quality Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-500" />
                <span className="font-semibold">Modern Designs</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-purple-500" />
                <span className="font-semibold">Competitive Pricing</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="text-center mb-12">
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button asChild size="xl">
                <Link href="/contact" className="flex items-center gap-3">
                  Get a free quote
                  <ArrowRight className="w-6 h-6" />
                </Link>
              </Button>

              <Button asChild variant="outline" size="xl">
                <Link href="/templates" className="flex items-center gap-3">
                  View templates
                </Link>
              </Button>
            </div>

            <p className="text-muted-foreground mt-6 text-lg">
              <strong>New Business Special:</strong> Professional website starting at competitive rates!
            </p>
          </div>

          {/* Contact Options */}
          <div className="rounded-3xl p-8 bg-card border border-border">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-card-foreground mb-4">
                Need Help Choosing? Let's Talk!
              </h3>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Our experts are standing by to help you find the perfect solution for your business.
                Get personalized recommendations and answers to all your questions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button asChild size="lg">
                <Link href="tel:+18309289196" className="flex items-center gap-3">
                  <Phone className="w-5 h-5" />
                  Call now: +1 (830) 928-9196
                </Link>
              </Button>

              <Button asChild variant="outline" size="lg">
                <Link href="mailto:Siteforgerbusiness@gmail.com" className="flex items-center gap-3">
                  <Mail className="w-5 h-5" />
                  Email us
                </Link>
              </Button>
            </div>
          </div>

          {/* Value Propositions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center bg-card border border-border rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-3">
                Fresh
              </div>
              <div className="text-muted-foreground font-semibold">Modern Approach</div>
            </div>
            <div className="text-center bg-card border border-border rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-3">
                Quality
              </div>
              <div className="text-muted-foreground font-semibold">Over Quantity</div>
            </div>
            <div className="text-center bg-card border border-border rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-3">
                Personal
              </div>
              <div className="text-muted-foreground font-semibold">Dedicated Service</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
