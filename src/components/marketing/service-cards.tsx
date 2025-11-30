import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AnimatedSection } from '@/components/ui/animated-section';
import { AnimatedCard } from '@/components/ui/animated-card';
import { ArrowRight, Globe, Search, MapPin, Sparkles } from 'lucide-react';
import { services } from '@/data/services';

const iconMap = {
  Globe,
  Search,
  MapPin,
};

export function ServiceCards() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <AnimatedSection delay={0.1} direction="up">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-4 bg-primary/10 text-primary border border-primary/20">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">Our Services</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
              Everything You Need to Grow Your Business
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Professional websites and local SEO tailored to service businesses — built for results.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            
            return (
              <AnimatedCard 
                key={service.id}
                delay={0.2 + (index * 0.1)}
                hoverScale={1.05}
                hoverY={-10}
              >
                <Card className="relative overflow-hidden bg-card border border-border shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        {IconComponent && <IconComponent className="w-6 h-6 text-primary" />}
                      </div>
                      <Badge variant="secondary">
                        Popular
                      </Badge>
                    </div>
                    <CardTitle className="text-lg font-semibold tracking-tight text-card-foreground">
                      {service.name}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-card-foreground mb-3">What's Included:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-3 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 border-t border-border">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <span className="text-xl md:text-2xl font-semibold text-card-foreground">{service.pricing.starting}</span>
                          </div>
                          <Badge className="bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20">
                            Great Value
                          </Badge>
                        </div>
                        <Button asChild className="w-full">
                          <Link href="/contact" className="flex items-center justify-center gap-2">
                            Get a free quote
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedCard>
            );
          })}
        </div>

        {/* CTA Section */}
        <AnimatedSection delay={0.8} direction="up">
          <div className="text-center rounded-2xl p-12 bg-card border border-border">
            <h3 className="text-3xl font-bold tracking-tight mb-4 text-card-foreground">Ready to Transform Your Business?</h3>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get a professional site built for your industry — designed to convert visitors into customers.
            </p>
            <Button asChild size="lg">
              <Link href="/contact" className="flex items-center gap-2">
                Get a free quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
