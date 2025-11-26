import { Metadata } from "next";
import Link from 'next/link'
import { ArrowRight, CheckCircle, Sparkles, Zap, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { templates } from '@/data/templates'

export const metadata: Metadata = {
  title: "Templates - Site Forger",
  description: "Browse our collection of professional website templates. ADDY (Minimal & Elegant), MARC (Bold & Powerful), and CADE (Conversion-Focused) designs.",
};

export default function TemplatesPage() {
  // Define unique styling for each template
  const templateStyles = {
    addy: {
      gradient: "from-blue-50 via-indigo-50 to-white",
      accent: "blue",
      badgeClass: "bg-blue-100 text-blue-700 border-blue-200",
      buttonClass: "bg-blue-600 hover:bg-blue-700",
      previewBg: "bg-gradient-to-br from-slate-100 to-blue-50",
    },
    marc: {
      gradient: "from-gray-900 via-gray-800 to-gray-900",
      accent: "orange",
      badgeClass: "bg-orange-500/20 text-orange-400 border-orange-500/50",
      buttonClass: "bg-orange-500 hover:bg-orange-600",
      previewBg: "bg-gradient-to-br from-gray-800 to-gray-900",
    },
    cade: {
      gradient: "from-red-600 via-orange-500 to-amber-500",
      accent: "red",
      badgeClass: "bg-yellow-400/20 text-yellow-300 border-yellow-400/50",
      buttonClass: "bg-red-600 hover:bg-red-700",
      previewBg: "bg-gradient-to-br from-red-900 to-orange-900",
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 py-24 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white/10 text-white border-white/20 mb-6 px-4 py-2">
              <Sparkles className="w-4 h-4 mr-2" />
              Professional Website Templates
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Choose Your
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">Perfect Design</span>
            </h1>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Three distinct design styles, each crafted to convert visitors into customers.
              Every template is mobile-optimized and ready to generate leads.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50 shadow-soft-lg">
                <Link href="/contact">
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                <Link href="/services">
                  View Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Three Unique Styles
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Each template has its own personality - find the one that matches your brand
              </p>
            </div>

            <div className="space-y-24">
              {templates.map((template, index) => {
                const style = templateStyles[template.motif as keyof typeof templateStyles];
                const isEven = index % 2 === 0;

                return (
                  <div key={template.id} className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Preview Card */}
                    <div className={`${!isEven ? 'lg:order-2' : ''}`}>
                      <div className={`relative group rounded-3xl overflow-hidden shadow-soft-xl ${style.previewBg} aspect-[4/3]`}>
                        {/* Template Preview Image */}
                        <img
                          src={template.thumbnail}
                          alt={`${template.name} template preview`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-8">
                          <Button asChild size="lg" className={`${style.buttonClass} text-white shadow-soft-lg`}>
                            <Link href={`/templates/${template.id}`}>
                              View Live Demo
                              <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                          </Button>
                        </div>

                        {/* Template Badge */}
                        <Badge className={`absolute top-4 left-4 ${style.badgeClass} border`}>
                          {template.tagline}
                        </Badge>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`${!isEven ? 'lg:order-1' : ''} space-y-6`}>
                      <div>
                        <h3 className="text-4xl font-bold text-gray-900 mb-2">
                          {template.name}
                        </h3>
                        <p className="text-xl text-blue-600 font-medium mb-4">
                          {template.tagline}
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                          {template.description}
                        </p>
                      </div>

                      {/* Features */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900">Key Features:</h4>
                        {template.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Best For */}
                      <div className="flex flex-wrap gap-2">
                        {template.bestFor.map((use, useIndex) => (
                          <Badge key={useIndex} variant="secondary" className="bg-gray-100 text-gray-700">
                            {use}
                          </Badge>
                        ))}
                      </div>

                      {/* CTA */}
                      <Button asChild size="lg" className={`${style.buttonClass} text-white`}>
                        <Link href={`/templates/${template.id}`}>
                          Explore {template.name} Template
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Templates Work */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Why Our Templates Convert
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Every template is built with proven conversion strategies
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Zap, title: "Mobile-First Design", desc: "Over 60% of searches happen on mobile. Our templates look perfect on every device." },
                { icon: CheckCircle, title: "Lead Generation Focus", desc: "Strategic placement of contact forms, phone numbers, and CTAs to maximize inquiries." },
                { icon: Shield, title: "SEO Optimized", desc: "Built-in SEO best practices to help you rank higher in local search results." },
                { icon: Sparkles, title: "Fast Loading", desc: "Optimized for speed because customers won't wait for slow websites to load." },
                { icon: CheckCircle, title: "Easy to Customize", desc: "Simple to update content, add photos, and make it uniquely yours." },
                { icon: Zap, title: "Proven Results", desc: "Design patterns tested and refined to maximize conversions." }
              ].map((item, index) => (
                <Card key={index} className="bg-white border-0 shadow-soft-md hover:shadow-soft-lg transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-7 h-7 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">
                      {item.desc}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              Get your professional website launched in just 7 days with our proven templates
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50 shadow-soft-lg">
                <Link href="/contact">
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                <Link href="/about">
                  Learn About Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
