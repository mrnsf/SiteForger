import { Metadata } from "next";
import { getBusinessProfileById } from "@/data/business-profiles";
import { getTemplateById } from "@/data/templates";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, Clock, CheckCircle, Star, Shield, Award, Zap, Users, ArrowRight, Sparkles, Home, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "ADDY Template - Modern Minimalist Design | Site Forger",
  description: "ADDY: Modern minimalist website template with clean design and elegant layouts for professional service businesses.",
};

export default function AddyTemplatePage() {
  const businessProfile = getBusinessProfileById("addy-demo");
  const template = getTemplateById("addy");

  if (!businessProfile || !template) {
    return <div>Template not found</div>;
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section - Centered Minimalist */}
      <section className="relative bg-gradient-to-b from-slate-100 to-white py-24 lg:py-32">
        <div className="absolute inset-0 bg-slate-100/30 opacity-50"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            {/* Minimal Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-6 py-3 rounded-full border border-blue-200">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wide">PREMIUM CLEANING SERVICES</span>
            </div>

            {/* Hero Title */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-light text-slate-900 leading-tight tracking-tight">
                Pristine Homes,
                <br />
                <span className="font-semibold text-blue-600">Perfect Life</span>
              </h1>
              <p className="text-xl lg:text-2xl text-slate-600 font-light leading-relaxed max-w-2xl mx-auto">
                Experience the luxury of a spotless home with our professional cleaning services. 
                More time for what truly matters.
              </p>
            </div>

            {/* Elegant CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-6 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <Phone className="w-5 h-5 mr-3" />
                {businessProfile.phone}
              </Button>
              <Button variant="ghost" size="lg" className="text-slate-600 hover:text-blue-600 px-10 py-6 rounded-full font-medium text-lg">
                View Our Work
                <ArrowRight className="w-5 h-5 ml-3" />
              </Button>
            </div>

            {/* Minimal Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 pt-8 text-slate-500">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-medium">Fully Insured</span>
              </div>
              <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-medium">5-Star Service</span>
              </div>
              <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-medium">Flexible Scheduling</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Contact Bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-slate-700">Ready to book?</span>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6">
              Call Now
            </Button>
          </div>
        </div>
      </div>

      {/* Services Section - Minimalist Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6 tracking-tight">
                Our <span className="font-semibold text-blue-600">Services</span>
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
              <p className="text-xl text-slate-600 font-light max-w-2xl mx-auto leading-relaxed">
                Comprehensive cleaning solutions tailored to your lifestyle and schedule
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {businessProfile.services.map((service, index) => (
                <div key={index} className="group">
                  <Card className="h-full bg-white border-0 shadow-sm hover:shadow-xl transition-all duration-500 rounded-2xl overflow-hidden">
                    <CardContent className="p-8 text-center">
                      {/* Icon */}
                      <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-50 transition-colors duration-300">
                        <Sparkles className="w-8 h-8 text-slate-400 group-hover:text-blue-600 transition-colors duration-300" />
                      </div>
                      
                      {/* Service Name */}
                      <h3 className="text-xl font-semibold text-slate-900 mb-4 tracking-tight">
                        {service}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-slate-600 font-light leading-relaxed mb-6">
                        Professional {service.toLowerCase()} with attention to detail and eco-friendly products.
                      </p>
                      
                      {/* CTA */}
                      <Button variant="ghost" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-full px-6 font-medium">
                        <a href="mailto:hello@siteforger.com">Get Quote</a>
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section - Minimalist */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6 tracking-tight">
                Recent <span className="font-semibold text-blue-600">Work</span>
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
              <p className="text-xl text-slate-600 font-light max-w-2xl mx-auto leading-relaxed">
                Transforming homes with meticulous attention to detail
              </p>
            </div>

            {/* Gallery Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="group relative">
                  <div className="aspect-square rounded-3xl overflow-hidden bg-slate-200">
                    <img 
                      src={`https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=clean%20modern%20home%20interior%20${item}%20minimalist%20bright&image_size=square_hd`}
                      alt={`Clean home ${item}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 rounded-3xl transition-colors duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section - Elegant */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Stars */}
            <div className="flex justify-center mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-blue-500 text-blue-500 mx-1" />
              ))}
            </div>
            
            {/* Quote */}
            <blockquote className="text-2xl lg:text-3xl text-slate-700 font-light mb-12 leading-relaxed italic">
              "{businessProfile.testimonial?.text}"
            </blockquote>
            
            {/* Author */}
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-slate-200 rounded-full"></div>
              <div className="text-left">
                <p className="text-lg font-semibold text-slate-900">{businessProfile.testimonial?.author}</p>
                <p className="text-slate-600 font-light">{businessProfile.testimonial?.title}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Minimalist */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-light text-white mb-8 leading-tight tracking-tight">
              Ready for a 
              <br />
              <span className="font-semibold text-blue-400">Spotless Home?</span>
            </h2>
            <p className="text-xl text-slate-400 font-light mb-12 leading-relaxed max-w-2xl mx-auto">
              Experience the difference of professional cleaning. Book your service today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-6 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <Phone className="w-5 h-5 mr-3" />
                {businessProfile.phone}
              </Button>
              <Button size="lg" variant="ghost" className="text-slate-400 hover:text-white px-12 py-6 rounded-full font-medium text-lg">
                Schedule Online
                <ArrowRight className="w-5 h-5 ml-3" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Spacer */}
      <div className="lg:hidden h-20"></div>
    </div>
  );
}