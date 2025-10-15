import { Metadata } from "next";
import Link from 'next/link'
import { ArrowRight, CheckCircle, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { templates } from '@/data/templates'

export const metadata: Metadata = {
  title: "Templates - Site Forger",
  description: "Browse our collection of professional website templates designed specifically for blue-collar businesses. ADDY, MARC, and CADE designs.",
};

export default function TemplatesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Professional Website Templates
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Choose from our collection of proven website designs, each crafted specifically 
              for contractors and skilled trades. Every template is mobile-optimized and ready to generate leads.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/services">
                  View Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Choose Your Perfect Design
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Each template is designed with a specific approach to help your business succeed online
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {templates.map((template) => (
                <Card key={template.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative">
                    {/* Template Preview Image */}
                    <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-6xl font-bold text-gray-400 mb-2">{template.name}</div>
                          <div className="text-gray-500">{template.tagline}</div>
                        </div>
                      </div>
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-blue-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Button asChild variant="secondary" size="lg">
                          <Link href={`/templates/${template.id}`}>
                            View Template
                            <ArrowRight className="ml-2 w-5 h-5" />
                          </Link>
                        </Button>
                      </div>
                    </div>

                    {/* Best For Badge */}
                    <Badge className="absolute top-4 left-4 bg-blue-600 text-white">
                      Best for {template.industry}
                    </Badge>
                  </div>

                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {template.name}
                      </h3>
                      <p className="text-lg text-blue-600 font-medium mb-3">
                        {template.tagline}
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        {template.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <div className="space-y-2">
                        {template.features.slice(0, 3).map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Motif Description */}
                    <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Design Approach:</h4>
                      <p className="text-sm text-gray-600">{template.motif}</p>
                    </div>

                    {/* CTA Button */}
                    <Button asChild className="w-full">
                      <Link href={`/templates/${template.id}`}>
                        View {template.name} Template
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Templates Work */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Our Templates Generate Results
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Every template is built with proven conversion strategies specifically for contractors
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Mobile-First Design
                </h3>
                <p className="text-gray-600">
                  Over 60% of contractor searches happen on mobile. Our templates look perfect on every device.
                </p>
              </div>

              <div className="text-center">
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Lead Generation Focus
                </h3>
                <p className="text-gray-600">
                  Strategic placement of contact forms, phone numbers, and CTAs to maximize inquiries.
                </p>
              </div>

              <div className="text-center">
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Industry-Specific Content
                </h3>
                <p className="text-gray-600">
                  Pre-written content that speaks directly to your customers' needs and concerns.
                </p>
              </div>

              <div className="text-center">
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  SEO Optimized
                </h3>
                <p className="text-gray-600">
                  Built-in SEO best practices to help you rank higher in local search results.
                </p>
              </div>

              <div className="text-center">
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Fast Loading
                </h3>
                <p className="text-gray-600">
                  Optimized for speed because customers won't wait for slow websites to load.
                </p>
              </div>

              <div className="text-center">
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Easy to Update
                </h3>
                <p className="text-gray-600">
                  Simple admin panel lets you update content, add photos, and manage your site easily.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Choose Your Template?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get your professional website launched in just 7 days with our proven templates
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="secondary" size="lg">
                <Link href="/contact">
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
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