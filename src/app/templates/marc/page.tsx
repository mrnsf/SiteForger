import { Metadata } from "next";
import { getBusinessProfileById } from "@/data/business-profiles";
import { getTemplateById } from "@/data/templates";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Users, Award, Clock, CheckCircle, Star, ArrowRight, Hammer } from "lucide-react";

export const metadata: Metadata = {
  title: "MARC Template - Bold & Powerful Design | Site Forger",
  description: "MARC: A commanding dark design with oversized typography and full-width imagery. Makes a strong, unforgettable impression.",
};

export default function MarcTemplatePage() {
  const businessProfile = getBusinessProfileById("marc-demo");
  const template = getTemplateById("marc");

  if (!businessProfile || !template) {
    return <div>Template not found</div>;
  }

  const stats = [
    { number: "Licensed", label: "& Insured", icon: Award },
    { number: "Quality", label: "Guaranteed", icon: Star },
    { number: "24/7", label: "Support", icon: Clock },
    { number: "Expert", label: "Team", icon: Users },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Hero Section - Full Width with Oversized Typography */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
            alt="Construction site"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-gray-950/70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl">
            <Badge variant="outline" className="bg-orange-500/20 text-orange-400 border-orange-500/50 mb-8 text-base px-5 py-2 font-bold uppercase tracking-wider">
              Bold & Powerful Design Demo
            </Badge>

            {/* Oversized Typography */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none mb-8 tracking-tight">
              <span className="block text-white">MAKE AN</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">IMPACT</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl leading-relaxed font-light">
              The MARC template commands attention with bold typography, dark aesthetics, and powerful imagery.
              Perfect for businesses that want to make a statement.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <Button size="xl" className="bg-orange-500 hover:bg-orange-600 text-white font-bold uppercase tracking-wider rounded-none shadow-glow-orange">
                <Phone className="w-6 h-6 mr-3" />
                {businessProfile.phone}
              </Button>
              <Button variant="outline" size="xl" className="border-2 border-white text-white hover:bg-white hover:text-gray-950 font-bold uppercase tracking-wider rounded-none">
                View Projects
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Stats Section - Bold Numbers */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="mb-4">
                  <stat.icon className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                </div>
                <div className="text-4xl md:text-5xl font-black text-white mb-2 group-hover:text-orange-500 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-lg text-gray-400 font-bold uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-Width Image Band */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80"
          alt="Modern building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/50 to-transparent flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight uppercase">
                Built to Last
              </h2>
              <p className="text-xl text-gray-200 mb-8 font-light">
                Quality craftsmanship that stands the test of time.
              </p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-none font-bold uppercase tracking-wider">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight uppercase">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessProfile.services.map((service, index) => (
              <Card key={index} className="bg-gray-950 border-2 border-gray-800 hover:border-orange-500 transition-all duration-300 rounded-none overflow-hidden group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-orange-500 flex items-center justify-center mb-6 group-hover:bg-orange-400 transition-colors duration-300">
                    <Hammer className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-4 uppercase group-hover:text-orange-500 transition-colors duration-300">
                    {service}
                  </h3>
                  <p className="text-gray-400 mb-6 text-lg font-light">
                    Professional {service.toLowerCase()} with industry-leading expertise and quality standards.
                  </p>
                  <Button variant="outline" className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white rounded-none font-bold uppercase tracking-wide w-full">
                    Get Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight uppercase">
              Our Process
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "CONSULT", desc: "Initial meeting to understand your vision" },
              { step: "02", title: "DESIGN", desc: "Detailed planning and development" },
              { step: "03", title: "BUILD", desc: "Expert execution with quality materials" },
              { step: "04", title: "DELIVER", desc: "Final walkthrough and handover" }
            ].map((item, index) => (
              <Card key={index} className="bg-gray-950 border-2 border-gray-800 hover:border-orange-500 transition-all duration-300 rounded-none">
                <CardContent className="p-8 text-center">
                  <div className="text-7xl font-black text-orange-500 mb-4">{item.step}</div>
                  <h3 className="text-2xl font-black text-white mb-4 uppercase">{item.title}</h3>
                  <p className="text-gray-400 text-lg font-light">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery - Masonry Style */}
      <section className="py-24 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight uppercase">
              Our Work
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Large Image */}
            <div className="md:col-span-2 lg:col-span-2 lg:row-span-2">
              <div className="aspect-[16/9] lg:aspect-square overflow-hidden group cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1541123603104-512919d6a96c?w=1200&q=80"
                  alt="Featured project"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Square Images */}
            <div className="aspect-square overflow-hidden group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80"
                alt="Project 2"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="aspect-square overflow-hidden group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80"
                alt="Project 3"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Wide Images */}
            <div className="md:col-span-2 aspect-[16/9] overflow-hidden group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80"
                alt="Project 4"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="aspect-square overflow-hidden group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80"
                alt="Project 5"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight uppercase">
              Why Choose Us
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Licensed & Bonded", desc: "Fully licensed, bonded, and insured for your protection" },
              { title: "Quality Materials", desc: "We use only the finest materials and proven methods" },
              { title: "On-Time Delivery", desc: "Projects completed on schedule with transparent communication" },
              { title: "Expert Team", desc: "Skilled professionals with decades of combined experience" },
              { title: "Custom Solutions", desc: "Tailored approaches for every unique project requirement" },
              { title: "Warranty Backed", desc: "Comprehensive warranties on all workmanship and materials" }
            ].map((item, index) => (
              <div key={index} className="text-center p-8 border-2 border-gray-800 hover:border-orange-500 transition-colors duration-300">
                <CheckCircle className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-black text-white mb-4 uppercase">{item.title}</h3>
                <p className="text-gray-400 font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <Card className="max-w-5xl mx-auto bg-gray-950 border-2 border-gray-800 rounded-none overflow-hidden">
            <CardContent className="p-12 md:p-16 text-center">
              <div className="flex justify-center mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 fill-orange-500 text-orange-500" />
                ))}
              </div>
              <blockquote className="text-2xl md:text-4xl text-white font-light mb-12 leading-relaxed italic">
                "{businessProfile.testimonial?.text}"
              </blockquote>
              <div className="flex items-center justify-center gap-6">
                <div className="w-16 h-16 bg-orange-500 rounded-none flex items-center justify-center">
                  <span className="text-white font-black text-2xl">
                    {businessProfile.testimonial?.author.charAt(0)}
                  </span>
                </div>
                <div className="text-left">
                  <p className="text-2xl font-black text-white uppercase">{businessProfile.testimonial?.author}</p>
                  <p className="text-lg text-gray-400">{businessProfile.testimonial?.title}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Band - Bold */}
      <section className="py-24 bg-gradient-to-r from-orange-600 to-amber-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-8xl font-black text-white mb-8 leading-tight uppercase">
            Ready to Build?
          </h2>
          <p className="text-xl md:text-2xl text-orange-100 mb-12 max-w-3xl mx-auto font-light">
            Let's discuss your project and bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="xl" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100 font-black uppercase tracking-wider rounded-none">
              <Phone className="w-6 h-6 mr-3" />
              {businessProfile.phone}
            </Button>
            <Button size="xl" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-orange-600 font-black uppercase tracking-wider rounded-none">
              Get Free Estimate
            </Button>
          </div>
        </div>
      </section>

      {/* Template Info Banner */}
      <section className="py-6 bg-gray-950 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">
            This is a demo of the <strong className="text-orange-500">MARC</strong> template - Bold & Powerful design style.{" "}
            <a href="/contact" className="text-orange-500 underline hover:no-underline">Contact us</a> to customize it for your business.
          </p>
        </div>
      </section>
    </div>
  );
}
