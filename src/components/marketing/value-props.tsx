import { CheckCircle, Clock, Smartphone, TrendingUp, Shield, Headphones, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

const valueProps = [
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Your website will be live in 7 days or less. No lengthy development cycles or endless revisions.",
    highlight: "7-Day Delivery",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Every website is optimized for mobile devices where 70% of your customers will find you.",
    highlight: "Mobile Optimized",
  },
  {
    icon: TrendingUp,
    title: "Built for Conversions",
    description: "Strategic design elements that turn website visitors into paying customers and phone calls.",
    highlight: "More Leads",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Enterprise-grade hosting with 99.9% uptime guarantee. Your website stays online 24/7.",
    highlight: "99.9% Uptime",
  },
  {
    icon: CheckCircle,
    title: "SEO Included",
    description: "Built-in search engine optimization to help customers find your business on Google.",
    highlight: "Google Ready",
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    description: "Free updates, maintenance, and support for the first year. We're here when you need us.",
    highlight: "1-Year Support",
  }
];

export function ValueProps() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 rounded-full px-6 py-3 mb-6 bg-primary/10 text-primary border border-primary/20">
            <Target className="w-5 h-5" />
            <span className="text-sm font-bold">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Why{' '}
            <span className="text-primary">Blue-Collar Businesses</span>
            {' '}Choose Site Forger
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We understand your industry and build websites that actually work for contractors,
            service providers, and skilled trades. Here's what makes us different.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {valueProps.map((prop, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300 border border-border overflow-hidden"
            >
              <div className="relative z-10">
                <div className="relative mb-6">
                  <div className="inline-flex p-4 rounded-xl bg-primary/10">
                    <prop.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-card-foreground mb-4">
                  {prop.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-base">
                  {prop.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-3xl p-12 text-center bg-card border border-border">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-card-foreground">Ready to Get Started?</h3>
            <p className="text-xl text-muted-foreground mb-8">
              Let us build your professional website that drives real results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <a href="/contact">Get Your Free Quote</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="tel:+18309289196" className="flex items-center gap-2">
                  <Headphones className="w-5 h-5" />
                  Call +1 (830) 928-9196
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
