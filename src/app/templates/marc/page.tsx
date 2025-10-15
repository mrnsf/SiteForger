import { Metadata } from "next";
import { getBusinessProfileById } from "@/data/business-profiles";
import { getTemplateById } from "@/data/templates";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, Users, Award, TrendingUp, CheckCircle, Star, ArrowRight, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "MARC Template - Bold & Full-Width Design | Site Forger",
  description: "MARC: Bold and impactful website template with oversized typography and full-width imagery, perfect for construction companies that want to make a strong visual statement.",
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
    { number: "24/7", label: "Emergency Service", icon: Clock },
    { number: "Expert", label: "Craftsmanship", icon: Users },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section - Full Width with Oversized Typography */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=construction%20site%20with%20modern%20building%20under%20construction%20dramatic%20lighting%20industrial%20atmosphere&image_size=landscape_16_9"
            alt="Construction site"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl">
            <Badge variant="outline" className="bg-orange-600/20 text-orange-400 border-orange-400 mb-8 text-lg px-4 py-2">
              {businessProfile.industry} Leaders Since {businessProfile.yearEstablished}
            </Badge>
            
            {/* Oversized Typography */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none mb-8 tracking-tight">
              <span className="block text-white">TITAN</span>
              <span className="block text-orange-500">CONSTRUCTION</span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-3xl leading-relaxed font-light">
              {businessProfile.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white text-xl px-12 py-6 rounded-none font-bold">
                <Phone className="w-6 h-6 mr-3" />
                GET QUOTE NOW
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900 text-xl px-12 py-6 rounded-none font-bold">
                VIEW PROJECTS
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
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
                <div className="text-xl text-gray-400 font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-Width Image Band 1 */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <img 
          src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20luxury%20home%20construction%20exterior%20architectural%20details%20high%20quality&image_size=landscape_16_9"
          alt="Luxury home construction"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-transparent flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight">
                CUSTOM HOMES
              </h2>
              <p className="text-xl text-gray-200 mb-6">
                Building dream homes with uncompromising quality and attention to detail.
              </p>
              <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-none font-bold">
                EXPLORE HOMES
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              OUR SERVICES
            </h2>
            <p className="text-2xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive construction solutions for residential and commercial projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessProfile.services.map((service, index) => (
              <Card key={index} className="bg-gray-900 border-gray-700 hover:border-orange-500 transition-colors duration-300 rounded-none overflow-hidden group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-orange-600 flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors duration-300">
                    <div className="w-8 h-8 bg-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors duration-300">
                    {service}
                  </h3>
                  <p className="text-gray-400 mb-6 text-lg">
                    Professional {service.toLowerCase()} services with industry-leading expertise and quality standards.
                  </p>
                  <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white rounded-none font-bold w-full">
                    <a href="mailto:hello@siteforger.com">GET QUOTE</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Full-Width Image Band 2 */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <img 
          src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=commercial%20building%20construction%20modern%20office%20complex%20architectural%20photography&image_size=landscape_16_9"
          alt="Commercial construction"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-gray-900/80 to-transparent flex items-center justify-end">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl text-right">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight">
                COMMERCIAL
              </h2>
              <p className="text-xl text-gray-200 mb-6">
                Large-scale commercial projects delivered on time and within budget.
              </p>
              <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-none font-bold">
                VIEW PORTFOLIO
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              OUR PROCESS
            </h2>
            <p className="text-2xl text-gray-400 max-w-3xl mx-auto">
              From concept to completion, we deliver exceptional results through proven methodology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "CONSULTATION", desc: "Initial meeting to understand your vision and requirements" },
              { step: "02", title: "DESIGN", desc: "Detailed planning and architectural design development" },
              { step: "03", title: "BUILD", desc: "Expert construction with quality materials and craftsmanship" },
              { step: "04", title: "DELIVER", desc: "Final walkthrough and project handover to your satisfaction" }
            ].map((item, index) => (
              <Card key={index} className="bg-black border-gray-700 hover:border-orange-500 transition-colors duration-300 rounded-none">
                <CardContent className="p-8 text-center">
                  <div className="text-6xl font-black text-orange-500 mb-4">{item.step}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-400 text-lg">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Gallery */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              PROJECT SHOWCASE
            </h2>
            <p className="text-2xl text-gray-400">
              Showcasing our commitment to excellence
            </p>
          </div>

          {/* Masonry Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Large Image */}
            <div className="md:col-span-2 lg:col-span-2 lg:row-span-2">
              <div className="aspect-[16/9] lg:aspect-square overflow-hidden group cursor-pointer">
                <img 
                  src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=luxury%20modern%20home%20exterior%20architectural%20photography%20high%20end%20construction&image_size=landscape_16_9"
                  alt="Featured project"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Square Images */}
            <div className="aspect-square overflow-hidden group cursor-pointer">
              <img 
                src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20kitchen%20renovation%20high%20end%20finishes%20construction%20detail&image_size=square"
                alt="Kitchen renovation"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="aspect-square overflow-hidden group cursor-pointer">
              <img 
                src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=bathroom%20renovation%20luxury%20tiles%20modern%20fixtures%20construction&image_size=square"
                alt="Bathroom renovation"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Wide Images */}
            <div className="md:col-span-2 aspect-[16/9] overflow-hidden group cursor-pointer">
              <img 
                src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=commercial%20office%20building%20construction%20modern%20architecture%20glass%20facade&image_size=landscape_16_9"
                alt="Commercial project"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="aspect-square overflow-hidden group cursor-pointer">
              <img 
                src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=home%20addition%20construction%20architectural%20details%20craftsmanship&image_size=square"
                alt="Home addition"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              WHY CHOOSE TITAN
            </h2>
            <p className="text-2xl text-gray-400 max-w-3xl mx-auto">
              Experience the difference of working with true construction professionals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "LICENSED & BONDED", desc: "Fully licensed, bonded, and insured for your protection", icon: "🛡️" },
              { title: "QUALITY MATERIALS", desc: "We use only the finest materials and proven construction methods", icon: "🏗️" },
              { title: "ON-TIME DELIVERY", desc: "Projects completed on schedule with transparent communication", icon: "⏰" },
              { title: "EXPERT TEAM", desc: "Skilled craftsmen with decades of combined experience", icon: "👷" },
              { title: "CUSTOM SOLUTIONS", desc: "Tailored approaches for every unique project requirement", icon: "🎯" },
              { title: "WARRANTY BACKED", desc: "Comprehensive warranties on all workmanship and materials", icon: "✅" }
            ].map((item, index) => (
              <Card key={index} className="bg-gray-900 border-gray-700 hover:border-orange-500 transition-colors duration-300 rounded-none">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <Card className="max-w-6xl mx-auto bg-black border-gray-700 rounded-none overflow-hidden">
            <CardContent className="p-16 text-center">
              <div className="flex justify-center mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 fill-orange-500 text-orange-500" />
                ))}
              </div>
              <blockquote className="text-3xl md:text-4xl text-white font-light mb-12 leading-relaxed italic">
                "{businessProfile.testimonial?.text}"
              </blockquote>
              <div className="flex items-center justify-center gap-6">
                <div className="w-16 h-16 bg-gray-700 rounded-full"></div>
                <div className="text-left">
                  <p className="text-2xl font-bold text-white">{businessProfile.testimonial?.author}</p>
                  <p className="text-xl text-gray-400">{businessProfile.testimonial?.title}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Band - Bold */}
      <section className="py-20 bg-orange-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
            READY TO BUILD?
          </h2>
          <p className="text-2xl text-orange-100 mb-12 max-w-3xl mx-auto">
            Let's discuss your next construction project and bring your vision to life
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100 text-2xl px-12 py-6 rounded-none font-black">
              <Phone className="w-6 h-6 mr-3" />
              {businessProfile.phone}
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 text-2xl px-12 py-6 rounded-none font-black">
              GET FREE ESTIMATE
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}