import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Globe, 
  Search, 
  MapPin, 
  Phone, 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Zap, 
  Target, 
  TrendingUp,
  Users,
  Clock,
  Shield
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services - Site Forger",
  description: "Professional website services for blue-collar businesses. Websites, SEO, and Google Business optimization that drives local leads.",
};

export default function ServicesPage() {
  const services = [
    {
      id: "websites",
      icon: Globe,
      title: "Professional Websites",
      tagline: "Your Digital Storefront That Works 24/7",
      description: "Custom-built websites designed specifically for contractors and service providers. Mobile-responsive, fast-loading, and conversion-optimized to turn visitors into customers.",
      features: [
        "Mobile-responsive design that looks great on all devices",
        "Fast loading speeds for better user experience",
        "Contact forms and call-to-action buttons strategically placed",
        "Professional photo galleries to showcase your work",
        "Customer testimonials and reviews integration",
        "Easy content management system",
        "SSL security and regular backups included"
      ],
      pricing: {
        starting: "Contact for pricing",
        monthly: "Monthly plans available",
        setup: "One-time setup fee"
      },
      benefits: [
        "Increase credibility with professional online presence",
        "Generate leads 24/7 even when you're not working",
        "Stand out from competitors with custom design",
        "Easy to update and maintain"
      ]
    },
    {
      id: "seo",
      icon: Search,
      title: "Local SEO Optimization",
      tagline: "Get Found When Customers Search",
      description: "Dominate local search results and get found by customers in your area. Our SEO strategies help contractors rank higher on Google and generate more qualified leads.",
      features: [
        "Local keyword research and optimization",
        "Google My Business optimization and management",
        "Citation building across local directories",
        "Review management and reputation monitoring",
        "Local content creation and blogging",
        "Technical SEO audits and improvements",
        "Monthly ranking reports and analytics"
      ],
      pricing: {
        starting: "Contact for pricing",
        monthly: "Monthly plans available",
        setup: "Setup + ongoing optimization"
      },
      benefits: [
        "Rank higher in local search results",
        "Attract customers actively looking for your services",
        "Build trust and credibility online",
        "Outrank your competition"
      ]
    },
    {
      id: "google-business",
      icon: MapPin,
      title: "Google Business Profile",
      tagline: "Maximize Your Local Visibility",
      description: "Optimize your Google Business Profile to appear in local map searches and attract nearby customers. Complete setup, optimization, and ongoing management included.",
      features: [
        "Complete Google Business Profile setup and verification",
        "Professional business photos and virtual tours",
        "Strategic keyword optimization in business description",
        "Regular posts and updates to keep profile active",
        "Review response management and monitoring",
        "Q&A section optimization and management",
        "Local citation consistency across the web"
      ],
      pricing: {
        starting: "Contact for pricing",
        monthly: "Monthly plans available",
        setup: "Setup + monthly management"
      },
      benefits: [
        "Appear in Google Maps when customers search nearby",
        "Increase phone calls and direction requests",
        "Build trust with customer reviews and photos",
        "Stay ahead of competitors in local search"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-blue-600 text-white px-4 py-2 text-lg font-semibold mb-6">
              Professional Services
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Digital Marketing Services That Drive Real Results
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Specialized digital marketing solutions designed specifically for contractors and service providers.
              Get more leads, increase visibility, and build your business online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-xl px-8 py-6">
                <Link href="/contact">
                  <Phone className="w-6 h-6 mr-3" />
                  Get Free Consultation
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-blue-600 text-blue-700 hover:bg-blue-50 text-xl px-8 py-6">
                <Link href="/templates">
                  View Our Work
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div key={service.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Content Column */}
                <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
                        <service.icon className="w-8 h-8 text-blue-600" />
                      </div>
                      <Badge variant="outline" className="text-blue-600 border-blue-200">
                        {service.id.toUpperCase()}
                      </Badge>
                    </div>
                    
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                      {service.title}
                    </h2>

                    <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold">
                      {service.tagline}
                    </p>

                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">What's Included:</h3>
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 4 && (
                      <p className="text-blue-600 dark:text-blue-400 font-medium">+ {service.features.length - 4} more features included</p>
                    )}
                  </div>

                  {/* Pricing */}
                  <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 border-blue-200 dark:border-gray-600">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Starting at</p>
                          <p className="text-3xl font-bold text-gray-900 dark:text-white">{service.pricing.starting}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{service.pricing.setup}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-600 dark:text-gray-400">Then</p>
                          <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{service.pricing.monthly}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">ongoing</p>
                        </div>
                      </div>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold">
                        Get Started Today
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                {/* Visual Column */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <Card className="bg-gradient-to-br from-gray-50 to-gray-100 border-0 shadow-xl overflow-hidden">
                    <CardContent className="p-0">
                      <div className="aspect-square relative">
                        <img 
                          src={`https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent(`${service.title.toLowerCase()} for contractors and service providers, professional digital marketing, modern clean design`)}&image_size=square_hd`}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Why Choose Site Forger?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We specialize in digital marketing for contractors and service providers.
              Our proven strategies help blue-collar businesses dominate their local markets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "Industry Expertise",
                description: "We understand contractors and know what works in your industry"
              },
              {
                icon: TrendingUp,
                title: "Results-Driven",
                description: "Websites and strategies designed to generate leads and grow your business"
              },
              {
                icon: Users,
                title: "Dedicated Support",
                description: "Personal account manager and ongoing support included"
              },
              {
                icon: Shield,
                title: "No Long Contracts",
                description: "Month-to-month service with no long-term commitments required"
              }
            ].map((benefit, index) => (
              <Card key={index} className="bg-white dark:bg-gray-700 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/50 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Grow Your Business Online?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Get a free consultation and learn how our digital marketing services can help you attract more customers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-xl px-8 py-6 font-bold">
                <a href="tel:+18309289196">
                  <Phone className="w-6 h-6 mr-3" />
                  Call +1 (830) 928-9196
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-xl px-8 py-6 font-bold">
                <Link href="/contact">
                  Schedule Free Consultation
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8 text-white">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6" />
                <span className="text-lg">Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6" />
                <span className="text-lg">No Long Contracts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6" />
                <span className="text-lg">Proven Results</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}