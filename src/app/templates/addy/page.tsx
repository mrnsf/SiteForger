import { Metadata } from "next";
import { getBusinessProfileById } from "@/data/business-profiles";
import { getTemplateById } from "@/data/templates";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, ArrowRight, Star, Shield, Calendar, Sparkles, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "ADDY Template - Minimal & Elegant Design | Site Forger",
  description: "ADDY: A refined, spacious design that communicates professionalism through simplicity. Perfect for businesses that value clean aesthetics.",
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
      <section className="relative bg-gradient-to-b from-white via-slate-50 to-white py-24 lg:py-32 overflow-hidden">
        {/* Subtle decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-100/40 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            {/* Elegant Badge */}
            <div className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-full border border-blue-100 shadow-soft-sm">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wide uppercase">Premium Service Demo</span>
            </div>

            {/* Hero Title - Elegant Typography */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-light text-slate-800 leading-tight tracking-tight">
                Elegant Design,
                <br />
                <span className="font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Effortless Impact</span>
              </h1>
              <p className="text-xl lg:text-2xl text-slate-500 font-light leading-relaxed max-w-2xl mx-auto">
                The ADDY template showcases your business with refined simplicity.
                Clean lines, generous whitespace, and elegant typography.
              </p>
            </div>

            {/* Elegant CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-6 rounded-full font-medium text-lg shadow-soft-lg hover:shadow-glow-sm transition-all duration-300">
                <Phone className="w-5 h-5 mr-3" />
                {businessProfile.phone}
              </Button>
              <Button variant="ghost" size="lg" className="text-slate-600 hover:text-blue-600 hover:bg-blue-50 px-10 py-6 rounded-full font-medium text-lg">
                Learn More
                <ArrowRight className="w-5 h-5 ml-3" />
              </Button>
            </div>

            {/* Minimal Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 pt-8 text-slate-400">
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

      {/* Services Section - Minimalist Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-light text-slate-800 mb-6 tracking-tight">
                Our <span className="font-semibold text-blue-600">Services</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-8 rounded-full"></div>
              <p className="text-xl text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
                Comprehensive solutions tailored to your needs
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {businessProfile.services.map((service, index) => (
                <div key={index} className="group">
                  <Card className="h-full bg-white border-0 shadow-soft-sm hover:shadow-soft-lg transition-all duration-500 rounded-3xl overflow-hidden">
                    <CardContent className="p-8 text-center">
                      {/* Icon */}
                      <div className="w-16 h-16 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-blue-50 group-hover:to-indigo-50 transition-all duration-300">
                        <Sparkles className="w-8 h-8 text-slate-400 group-hover:text-blue-600 transition-colors duration-300" />
                      </div>

                      {/* Service Name */}
                      <h3 className="text-xl font-semibold text-slate-800 mb-4 tracking-tight">
                        {service}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-500 font-light leading-relaxed mb-6">
                        Professional {service.toLowerCase()} delivered with attention to detail and care.
                      </p>

                      {/* CTA */}
                      <Button variant="ghost" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-full px-6 font-medium">
                        Learn More
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

      {/* Gallery Section - Clean Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-light text-slate-800 mb-6 tracking-tight">
                Our <span className="font-semibold text-blue-600">Work</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-8 rounded-full"></div>
              <p className="text-xl text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
                A showcase of quality and attention to detail
              </p>
            </div>

            {/* Gallery Grid with Real Images */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
                "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80",
                "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=600&q=80",
                "https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?w=600&q=80",
                "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&q=80",
                "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&q=80"
              ].map((img, item) => (
                <div key={item} className="group relative">
                  <div className="aspect-square rounded-3xl overflow-hidden bg-slate-200 shadow-soft-sm">
                    <img
                      src={img}
                      alt={`Portfolio item ${item + 1}`}
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
            <blockquote className="text-2xl lg:text-3xl text-slate-600 font-light mb-12 leading-relaxed italic">
              "{businessProfile.testimonial?.text}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-semibold">
                  {businessProfile.testimonial?.author.charAt(0)}
                </span>
              </div>
              <div className="text-left">
                <p className="text-lg font-semibold text-slate-800">{businessProfile.testimonial?.author}</p>
                <p className="text-slate-500 font-light">{businessProfile.testimonial?.title}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-light text-slate-800 mb-6 tracking-tight">
                Why <span className="font-semibold text-blue-600">Choose Us</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Quality First", desc: "We never compromise on quality, using only the best materials and methods." },
                { title: "On Time, Every Time", desc: "Punctuality is our promise. We respect your schedule." },
                { title: "Transparent Pricing", desc: "No hidden fees, no surprises. What we quote is what you pay." }
              ].map((item, index) => (
                <div key={index} className="text-center p-8">
                  <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">{item.title}</h3>
                  <p className="text-slate-500 font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Minimalist */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 text-center relative">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-light text-white mb-8 leading-tight tracking-tight">
              Ready to Get
              <br />
              <span className="font-semibold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Started?</span>
            </h2>
            <p className="text-xl text-slate-400 font-light mb-12 leading-relaxed max-w-2xl mx-auto">
              Experience the ADDY difference. Clean, professional, and designed to convert.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 px-12 py-6 rounded-full font-medium text-lg shadow-soft-xl hover:shadow-glow-sm transition-all duration-300">
                <Phone className="w-5 h-5 mr-3" />
                {businessProfile.phone}
              </Button>
              <Button size="lg" variant="ghost" className="text-slate-300 hover:text-white hover:bg-white/10 px-12 py-6 rounded-full font-medium text-lg">
                Schedule Online
                <ArrowRight className="w-5 h-5 ml-3" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Template Info Banner */}
      <section className="py-8 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white text-sm">
            This is a demo of the <strong>ADDY</strong> template - Minimal & Elegant design style.{" "}
            <a href="/contact" className="underline hover:no-underline">Contact us</a> to customize it for your business.
          </p>
        </div>
      </section>
    </div>
  );
}
