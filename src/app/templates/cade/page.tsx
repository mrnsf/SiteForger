import { Metadata } from "next";
import { getBusinessProfileById } from "@/data/business-profiles";
import { getTemplateById } from "@/data/templates";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Clock, CheckCircle, Star, Shield, Zap, AlertTriangle, Flame, Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: "CADE Template - Conversion-Focused Design | Site Forger",
  description: "CADE: An energetic, action-driven design built to convert visitors into customers. Features urgent CTAs and persuasive layouts.",
};

export default function CadeTemplatePage() {
  const businessProfile = getBusinessProfileById("cade-demo");
  const template = getTemplateById("cade");

  if (!businessProfile || !template) {
    return <div>Template not found</div>;
  }

  const urgentFeatures = [
    "Fast Response Times",
    "24/7 Availability",
    "Upfront Pricing",
    "Licensed Professionals",
    "Satisfaction Guaranteed"
  ];

  const processSteps = [
    { number: "01", title: "CALL US", description: "Reach out via phone or form - we respond fast." },
    { number: "02", title: "RAPID DISPATCH", description: "Our team is dispatched immediately to your location." },
    { number: "03", title: "DIAGNOSE", description: "Quick problem identification with transparent pricing." },
    { number: "04", title: "RESOLVE", description: "Professional service completed with your satisfaction guaranteed." }
  ];

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Urgent Hero Section */}
      <section className="relative bg-gradient-to-br from-red-600 via-orange-600 to-amber-500 py-16 lg:py-24 overflow-hidden">
        {/* Diagonal Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-500/20 to-transparent transform -skew-y-3 origin-top-left"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-yellow-400/10 transform skew-y-6"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left Column - Urgent Content */}
            <div className="lg:col-span-7 space-y-8">
              {/* Emergency Alert */}
              <div className="flex items-center gap-3 bg-red-700/80 text-white px-6 py-4 rounded-lg border-l-4 border-yellow-400 shadow-2xl animate-pulse">
                <AlertTriangle className="w-7 h-7" />
                <span className="text-lg font-black uppercase tracking-wide">Need Help Fast? We're Ready!</span>
              </div>

              {/* Aggressive Title */}
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-black text-white leading-none uppercase tracking-tight">
                  <span className="text-yellow-300">Fast</span>
                  <br />
                  <span className="text-white">Professional</span>
                  <br />
                  <span className="text-yellow-300">Service</span>
                </h1>
                <p className="text-xl lg:text-2xl text-red-100 font-bold leading-tight">
                  The CADE template is designed for maximum conversions.
                  Urgent messaging, trust signals, and prominent CTAs.
                </p>
              </div>

              {/* Urgent Features List */}
              <div className="space-y-3">
                {urgentFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-4 bg-black/20 backdrop-blur-sm p-4 rounded-lg border-l-4 border-yellow-400">
                    <Flame className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                    <span className="text-lg text-white font-bold uppercase tracking-wide">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Aggressive CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="xl" className="bg-yellow-400 hover:bg-yellow-300 text-black font-black uppercase tracking-wide shadow-2xl border-4 border-white transform hover:scale-105 transition-all duration-200">
                  <Phone className="w-7 h-7 mr-3" />
                  {businessProfile.phone}
                </Button>
                <Button size="xl" className="bg-white hover:bg-gray-100 text-red-600 font-black uppercase tracking-wide shadow-2xl transform hover:scale-105 transition-all duration-200">
                  <Zap className="w-7 h-7 mr-3" />
                  Get Instant Quote
                </Button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-yellow-400 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <img
                    src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80"
                    alt="Professional service"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating Urgent Badges */}
                <div className="absolute -top-4 -right-4 bg-red-600 text-white px-6 py-3 font-black text-lg uppercase tracking-wide shadow-2xl border-2 border-yellow-400 animate-bounce rounded-lg">
                  24/7 Available
                </div>

                <div className="absolute -bottom-4 -left-4 bg-green-600 text-white px-6 py-3 font-black text-lg uppercase tracking-wide shadow-2xl border-2 border-white rounded-lg">
                  Fast Response
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-red-600 text-white px-6 py-2 text-lg font-bold uppercase mb-6">
              How It Works
            </Badge>
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-4 uppercase tracking-tight">
              <span className="text-red-500">Simple</span> Process
            </h2>
            <p className="text-xl text-gray-400 font-bold max-w-3xl mx-auto uppercase tracking-wide">
              From call to completion - we move fast
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Step Number */}
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-orange-600 text-white border-4 border-yellow-400 flex items-center justify-center text-3xl font-black shadow-2xl relative z-10 transform group-hover:scale-110 transition-transform duration-300 rounded-xl">
                    {step.number}
                  </div>
                </div>

                {/* Step Content */}
                <Card className="bg-gray-800 border-2 border-gray-700 hover:border-red-500 transition-all duration-300 transform group-hover:-translate-y-2 rounded-xl">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-black text-white mb-3 uppercase tracking-wide">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 font-medium leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-red-600 via-orange-600 to-amber-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-4 uppercase tracking-tight">
              Our <span className="text-yellow-300">Services</span>
            </h2>
            <p className="text-xl text-red-100 font-bold uppercase tracking-wide">
              Professional Solutions - Available Now
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessProfile.services.map((service, index) => (
              <Card key={index} className="bg-black/70 backdrop-blur-sm border-4 border-yellow-400 hover:border-white shadow-2xl transition-all duration-300 group transform hover:scale-105 rounded-xl">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 border-4 border-white flex items-center justify-center mb-6 mx-auto transition-all duration-300 group-hover:rotate-6 rounded-xl">
                    <Wrench className="w-10 h-10 text-black" />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-wide group-hover:text-yellow-400 transition-colors duration-300">
                    {service}
                  </h3>
                  <p className="text-gray-300 mb-6 font-bold uppercase text-sm tracking-wide leading-relaxed">
                    Professional {service.toLowerCase()} available with fast response times.
                  </p>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-black text-lg py-4 border-2 border-yellow-400 uppercase tracking-wide shadow-lg transform hover:scale-105 transition-all duration-200 rounded-lg">
                    Get Service Now
                    <Phone className="w-5 h-5 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4 uppercase">
              Why Trust <span className="text-red-500">Us</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-gray-900 border-2 border-gray-800 hover:border-green-500 transition-colors duration-300 rounded-xl">
              <CardContent className="p-8 text-center">
                <Shield className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-black text-white mb-2 uppercase">Licensed & Insured</h3>
                <p className="text-gray-400">Fully licensed and insured for your peace of mind</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-2 border-gray-800 hover:border-blue-500 transition-colors duration-300 rounded-xl">
              <CardContent className="p-8 text-center">
                <Clock className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-black text-white mb-2 uppercase">Fast Response</h3>
                <p className="text-gray-400">Quick response times when you need us most</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-2 border-gray-800 hover:border-yellow-500 transition-colors duration-300 rounded-xl">
              <CardContent className="p-8 text-center">
                <CheckCircle className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl font-black text-white mb-2 uppercase">Guaranteed</h3>
                <p className="text-gray-400">We stand behind our work with a satisfaction guarantee</p>
              </CardContent>
            </Card>
          </div>

          {/* Featured Testimonial */}
          <Card className="max-w-4xl mx-auto bg-gray-900 border-2 border-yellow-500 shadow-2xl rounded-xl">
            <CardContent className="p-10 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl text-white font-medium mb-8 leading-relaxed italic">
                "{businessProfile.testimonial?.text}"
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-black text-xl">
                    {businessProfile.testimonial?.author.charAt(0)}
                  </span>
                </div>
                <div className="text-left">
                  <p className="text-lg font-black text-white">{businessProfile.testimonial?.author}</p>
                  <p className="text-gray-400">{businessProfile.testimonial?.title}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final Aggressive CTA */}
      <section className="py-20 bg-black relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-orange-600/20 to-yellow-500/20"></div>
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 via-yellow-400 to-orange-600"></div>
          <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-orange-600 via-yellow-400 to-red-600"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl lg:text-8xl font-black text-white mb-6 leading-none uppercase tracking-tight">
              <span className="text-red-500">Don't</span>
              <br />
              <span className="text-yellow-400">Wait!</span>
            </h2>
            <p className="text-2xl lg:text-3xl text-gray-300 font-black mb-12 leading-tight uppercase tracking-wide">
              Ready to get started?
              <br />
              <span className="text-red-400">Call now for fast service!</span>
            </p>

            <div className="flex flex-col lg:flex-row gap-6 justify-center mb-12">
              <Button size="xl" className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-2xl px-12 py-8 font-black uppercase tracking-wide shadow-2xl border-4 border-yellow-400 transform hover:scale-110 transition-all duration-300 rounded-xl">
                <Phone className="w-8 h-8 mr-4" />
                {businessProfile.phone}
              </Button>
              <Button size="xl" className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black text-2xl px-12 py-8 font-black uppercase tracking-wide shadow-2xl border-4 border-white transform hover:scale-110 transition-all duration-300 rounded-xl">
                <Zap className="w-8 h-8 mr-4" />
                Get Quote Now
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-white">
              <div className="bg-red-600/20 backdrop-blur-sm p-6 border-2 border-red-600 rounded-xl">
                <AlertTriangle className="w-10 h-10 text-red-400 mx-auto mb-3" />
                <h3 className="text-xl font-black uppercase tracking-wide mb-1">No Hidden Fees</h3>
                <p className="text-red-200 font-bold uppercase text-sm">Transparent pricing always</p>
              </div>
              <div className="bg-yellow-400/20 backdrop-blur-sm p-6 border-2 border-yellow-400 rounded-xl">
                <Clock className="w-10 h-10 text-yellow-400 mx-auto mb-3" />
                <h3 className="text-xl font-black uppercase tracking-wide mb-1">Fast Response</h3>
                <p className="text-yellow-200 font-bold uppercase text-sm">We're on our way</p>
              </div>
              <div className="bg-green-600/20 backdrop-blur-sm p-6 border-2 border-green-500 rounded-xl">
                <Shield className="w-10 h-10 text-green-400 mx-auto mb-3" />
                <h3 className="text-xl font-black uppercase tracking-wide mb-1">100% Guaranteed</h3>
                <p className="text-green-200 font-bold uppercase text-sm">Your satisfaction matters</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Sticky CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-gradient-to-r from-red-600 to-orange-600 text-white p-4 z-50 shadow-2xl border-t-4 border-yellow-400">
        <div className="flex gap-3">
          <Button className="flex-1 bg-black text-white hover:bg-gray-900 font-black py-4 text-base uppercase border-2 border-yellow-400 rounded-lg">
            <Phone className="w-5 h-5 mr-2" />
            Call Now
          </Button>
          <Button className="flex-1 bg-yellow-400 text-black hover:bg-yellow-300 font-black py-4 text-base uppercase rounded-lg">
            <Zap className="w-5 h-5 mr-2" />
            Quote
          </Button>
        </div>
      </div>

      {/* Template Info Banner */}
      <section className="py-6 bg-gray-950 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">
            This is a demo of the <strong className="text-red-500">CADE</strong> template - Conversion-Focused design style.{" "}
            <a href="/contact" className="text-red-500 underline hover:no-underline">Contact us</a> to customize it for your business.
          </p>
        </div>
      </section>

      {/* Mobile Spacer */}
      <div className="lg:hidden h-24"></div>
    </div>
  );
}
