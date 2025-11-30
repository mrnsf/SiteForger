import { Metadata } from "next";
import Link from 'next/link'
import Image from 'next/image'
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
    <div className="min-h-screen bg-background dark:bg-gray-950">
      {/* Hero Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 px-4 py-2 bg-secondary dark:bg-gray-900 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800">
              <Sparkles className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400" />
              Professional Website Templates
            </Badge>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">
              Choose Your Perfect Design
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Three distinct styles, each crafted to convert visitors into customers. Mobile‑optimized and ready to generate leads.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary-hover text-white shadow-soft-lg">
                <Link href="/contact">
                  Get a free quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/services">View services</Link>
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
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">
                Three Unique Styles
              </h2>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
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
                      <div className={`relative group rounded-3xl overflow-hidden shadow-soft-md hover:shadow-soft-xl ${style.previewBg} aspect-[4/3] transform transition-transform duration-300 hover:-translate-y-0.5 motion-reduce:transform-none motion-reduce:shadow-none motion-reduce:transition-none`}
                      >
                        {/* Template Preview Image */}
                        <Image
                          src={template.thumbnail}
                          alt={`${template.name} template preview`}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover transition-transform duration-300"
                          priority={index === 0}
                        />

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/30 dark:bg-black/20 opacity-0 group-hover:opacity-80 transition-all duration-200 flex items-end justify-center pb-8">
                          <Button asChild size="lg" className={`${style.buttonClass} text-white shadow-soft-lg`}>
                            <Link href={`/templates/${template.id}`}>
                          View live demo
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
                    <div className={`${!isEven ? 'lg:order-1' : ''} space-y-5`}>
                      <div>
                        <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white mb-2">
                          {template.name}
                        </h3>
                        <p className="text-lg md:text-xl text-blue-600 dark:text-blue-400 font-medium mb-3">
                          {template.tagline}
                        </p>
                        <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                          {template.description}
                        </p>
                      </div>

                      {/* Features */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900 dark:text-white">Key Features:</h4>
                        {template.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Best For */}
                      <div className="flex flex-wrap gap-2">
                        {template.bestFor.map((use, useIndex) => (
                          <Badge key={useIndex} variant="secondary" className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
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
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Why Our Templates Convert
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
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
                <Card key={index} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-soft-md hover:shadow-soft-lg transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
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
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">Launch a professional site in just 7 days with our proven templates.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary-hover text-white shadow-soft-lg">
                <Link href="/contact">
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/about">Learn About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
