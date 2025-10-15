import { Metadata } from "next";
import { getBusinessProfileById } from "@/data/business-profiles";
import { getTemplateById } from "@/data/templates";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, Clock, CheckCircle, Star, Shield, Award, Zap, Users, ArrowRight, AlertTriangle, Flame, Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: "CADE Template - Bold Conversion-Focused Design | Site Forger",
  description: "CADE: Bold, aggressive website template designed for maximum conversions with high-impact visuals and urgent calls-to-action.",
};

export default function CadeTemplatePage() {
  const businessProfile = getBusinessProfileById("cade-demo");
  const template = getTemplateById("cade");

  if (!businessProfile || !template) {
    return <div>Template not found</div>;
  }

  const urgentFeatures = [
    "🔥 EMERGENCY HVAC REPAIR - CALL NOW!",
    "⚡ SAME-DAY SERVICE GUARANTEED",
    "💰 UPFRONT PRICING - NO SURPRISES",
    "🛡️ LICENSED & INSURED TECHNICIANS",
    "⏰ 24/7 EMERGENCY HOTLINE AVAILABLE"
  ];

  const processSteps = [
    {
      number: "01",
      title: "EMERGENCY CALL",
      description: "Call our 24/7 hotline and get immediate dispatch to your location."
    },
    {
      number: "02", 
      title: "RAPID RESPONSE",
      description: "Our certified technicians arrive within 30 minutes for emergencies."
    },
    {
      number: "03",
      title: "INSTANT DIAGNOSIS",
      description: "Quick problem identification with transparent, upfront pricing."
    },
    {
      number: "04",
      title: "IMMEDIATE FIX",
      description: "Professional repair completed on-site with quality guarantee."
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Aggressive Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-600 via-red-600 to-purple-700 py-12 lg:py-20 overflow-hidden">
        {/* Diagonal Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-500/20 to-transparent transform -skew-y-6 origin-top-left"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-purple-600/20 to-transparent transform skew-y-6 origin-bottom-right"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left Column - Urgent Content */}
            <div className="lg:col-span-7 space-y-8">
              {/* Emergency Alert */}
              <div className="flex items-center gap-3 bg-red-600 text-white px-6 py-4 rounded-none border-l-8 border-yellow-400 shadow-2xl">
                <AlertTriangle className="w-8 h-8 animate-pulse" />
                <span className="text-xl font-black uppercase tracking-wide">HVAC EMERGENCY? WE'RE READY!</span>
              </div>

              {/* Aggressive Title */}
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-8xl font-black text-white leading-none uppercase tracking-tight">
                  <span className="text-yellow-400">FAST</span>
                  <br />
                  <span className="text-orange-400">HVAC</span>
                  <br />
                  <span className="text-red-400">REPAIR</span>
                </h1>
                <p className="text-2xl lg:text-3xl text-orange-100 font-bold leading-tight">
                  DON'T SWEAT IT! Phoenix's #1 Emergency HVAC Team is ON STANDBY 24/7!
                </p>
              </div>

              {/* Urgent Features List */}
              <div className="space-y-3">
                {urgentFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-4 bg-black/30 backdrop-blur-sm p-4 border-l-4 border-yellow-400">
                    <div className="flex-shrink-0">
                      <Flame className="w-6 h-6 text-yellow-400" />
                    </div>
                    <span className="text-lg text-white font-bold uppercase tracking-wide">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Aggressive CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white text-2xl px-12 py-8 font-black uppercase tracking-wide shadow-2xl border-4 border-yellow-400 transform hover:scale-105 transition-all duration-200">
                  <Phone className="w-8 h-8 mr-4" />
                  CALL NOW: {businessProfile.phone}
                </Button>
                <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black text-2xl px-12 py-8 font-black uppercase tracking-wide shadow-2xl transform hover:scale-105 transition-all duration-200">
                  <Zap className="w-8 h-8 mr-4" />
                  EMERGENCY SERVICE
                </Button>
              </div>
            </div>

            {/* Right Column - Dramatic Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative">
                {/* Main Image */}
                <div className="aspect-square rounded-none overflow-hidden shadow-2xl border-8 border-yellow-400 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <img 
                    src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=dramatic%20HVAC%20technician%20emergency%20repair%20arizona%20heat%20urgent%20professional&image_size=square_hd"
                    alt="Emergency HVAC repair"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating Urgent Badges */}
                <div className="absolute -top-6 -right-6 bg-red-600 text-white px-8 py-4 font-black text-xl uppercase tracking-wide shadow-2xl border-4 border-yellow-400 animate-bounce">
                  24/7 EMERGENCY
                </div>
                
                <div className="absolute -bottom-6 -left-6 bg-orange-600 text-white px-8 py-4 font-black text-xl uppercase tracking-wide shadow-2xl border-4 border-yellow-400">
                  SAME-DAY FIX
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aggressive Process Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-7xl font-black text-white mb-8 uppercase tracking-tight">
              <span className="text-red-500">EMERGENCY</span> PROCESS
            </h2>
            <p className="text-2xl text-orange-300 font-bold max-w-4xl mx-auto uppercase tracking-wide">
              FROM BREAKDOWN TO COOL DOWN - WE MOVE FAST!
            </p>
          </div>

          {/* Diagonal Process Flow */}
          <div className="relative">
            {/* Diagonal Connection Lines */}
            <div className="hidden lg:block absolute inset-0">
              <svg className="w-full h-full" viewBox="0 0 1200 400">
                <path d="M100 100 L400 200 L800 100 L1100 200" stroke="#ef4444" strokeWidth="4" fill="none" strokeDasharray="10,5"/>
              </svg>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative group">
                  {/* Step Number - Aggressive Style */}
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-orange-600 text-white border-4 border-yellow-400 flex items-center justify-center text-3xl font-black shadow-2xl relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                      {step.number}
                    </div>
                  </div>
                  
                  {/* Step Content - Bold Cards */}
                  <Card className="bg-gradient-to-br from-gray-800 to-black border-2 border-orange-600 shadow-2xl hover:shadow-orange-600/50 transition-all duration-300 transform group-hover:-translate-y-2">
                    <CardContent className="p-8 text-center">
                      <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-wide">
                        {step.title}
                      </h3>
                      <p className="text-orange-200 font-bold leading-relaxed uppercase text-sm tracking-wide">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Aggressive Services Section */}
      <section className="py-20 bg-gradient-to-br from-red-600 via-orange-600 to-purple-700 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-red-600/20"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-7xl font-black text-white mb-8 uppercase tracking-tight">
              <span className="text-yellow-400">HVAC</span> SERVICES
            </h2>
            <p className="text-2xl text-orange-100 font-bold max-w-4xl mx-auto uppercase tracking-wide">
              EMERGENCY REPAIRS • INSTALLATIONS • MAINTENANCE
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessProfile.services.map((service, index) => (
              <Card key={index} className="bg-black/80 backdrop-blur-sm border-4 border-yellow-400 hover:border-white shadow-2xl hover:shadow-yellow-400/50 transition-all duration-300 group transform hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 border-4 border-white flex items-center justify-center mb-6 mx-auto transition-all duration-300 group-hover:rotate-12">
                    <Wrench className="w-10 h-10 text-black" />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-wide group-hover:text-yellow-400 transition-colors duration-300">
                    {service}
                  </h3>
                  <p className="text-orange-200 mb-6 font-bold uppercase text-sm tracking-wide leading-relaxed">
                    EMERGENCY {service.toUpperCase()} AVAILABLE 24/7 - CALL NOW FOR IMMEDIATE SERVICE!
                  </p>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-black text-lg py-4 border-2 border-yellow-400 uppercase tracking-wide shadow-lg transform hover:scale-105 transition-all duration-200">
                    CALL FOR {service.toUpperCase()}
                    <Phone className="w-5 h-5 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Serving Phoenix & Surrounding Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We proudly serve residential and commercial customers throughout the Phoenix metropolitan area
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {["Phoenix", "Scottsdale", "Tempe", "Mesa", "Chandler", "Glendale", "Peoria", "Gilbert"].map((city, index) => (
              <Card key={index} className="bg-white border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{city}</h3>
                  <p className="text-gray-600">Same-day service available</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Service Section */}
      <section className="py-20 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="bg-white text-red-600 px-6 py-3 text-lg font-bold mb-8">
              🚨 EMERGENCY HVAC SERVICE
            </Badge>
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              AC Broke Down? We're Here 24/7!
            </h2>
            <p className="text-2xl text-red-100 mb-12 leading-relaxed">
              Don't suffer in the Arizona heat. Our emergency technicians are standing by to restore your comfort fast.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Clock className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">24/7 Availability</h3>
                <p className="text-red-100">Emergency service available around the clock</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Zap className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Fast Response</h3>
                <p className="text-red-100">Technicians dispatched within 30 minutes</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <CheckCircle className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">No Overtime Fees</h3>
                <p className="text-red-100">Same rate for emergency calls</p>
              </div>
            </div>

            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 text-2xl px-12 py-6 font-black">
              <Phone className="w-6 h-6 mr-3" />
              CALL EMERGENCY LINE: {businessProfile.phone}
            </Button>
          </div>
        </div>
      </section>

      {/* Social Proof & Testimonials */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Phoenix Trusts Elite HVAC
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Stats */}
            <Card className="bg-white border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="text-5xl font-black text-green-600 mb-2">
                  <Shield className="w-16 h-16 mx-auto" />
                </div>
                <div className="text-xl font-semibold text-gray-900 mb-2">Licensed & Insured</div>
                <div className="text-gray-600">Fully licensed and insured for your peace of mind</div>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="text-5xl font-black text-green-600 mb-2">
                  <Clock className="w-16 h-16 mx-auto" />
                </div>
                <div className="text-xl font-semibold text-gray-900 mb-2">Same-Day Service</div>
                <div className="text-gray-600">Fast response times when you need us most</div>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="text-5xl font-black text-green-600 mb-2">
                  <CheckCircle className="w-16 h-16 mx-auto" />
                </div>
                <div className="text-xl font-semibold text-gray-900 mb-2">Quality Guarantee</div>
                <div className="text-gray-600">We stand behind our work with a satisfaction guarantee</div>
              </CardContent>
            </Card>
          </div>

          {/* Featured Testimonial */}
          <Card className="max-w-4xl mx-auto bg-white border-0 shadow-xl">
            <CardContent className="p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-2xl lg:text-3xl text-gray-900 font-medium mb-8 leading-relaxed">
                "{businessProfile.testimonial?.text}"
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
                <div className="text-left">
                  <p className="text-xl font-bold text-gray-900">{businessProfile.testimonial?.author}</p>
                  <p className="text-lg text-gray-600">{businessProfile.testimonial?.title}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final Aggressive CTA Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-orange-600/20 to-purple-600/20 animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 via-yellow-400 to-orange-600"></div>
          <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-orange-600 via-yellow-400 to-red-600"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-6xl lg:text-9xl font-black text-white mb-8 leading-none uppercase tracking-tight">
              <span className="text-red-500">DON'T</span>
              <br />
              <span className="text-yellow-400">WAIT!</span>
            </h2>
            <p className="text-3xl lg:text-4xl text-orange-300 font-black mb-16 leading-tight uppercase tracking-wide">
              YOUR AC IS BROKEN - WE FIX IT NOW!
              <br />
              <span className="text-red-400">CALL THE EMERGENCY HOTLINE!</span>
            </p>
            
            <div className="flex flex-col lg:flex-row gap-8 justify-center mb-16">
              <Button size="lg" className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-3xl px-16 py-10 font-black uppercase tracking-wide shadow-2xl border-8 border-yellow-400 transform hover:scale-110 transition-all duration-300 animate-pulse">
                <Phone className="w-10 h-10 mr-4" />
                EMERGENCY: {businessProfile.phone}
              </Button>
              <Button size="lg" className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black text-3xl px-16 py-10 font-black uppercase tracking-wide shadow-2xl border-8 border-white transform hover:scale-110 transition-all duration-300">
                <Zap className="w-10 h-10 mr-4" />
                SAME-DAY REPAIR
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-white">
              <div className="bg-red-600/20 backdrop-blur-sm p-8 border-4 border-red-600">
                <AlertTriangle className="w-12 h-12 text-red-400 mx-auto mb-4" />
                <h3 className="text-2xl font-black uppercase tracking-wide mb-2">NO OVERTIME FEES</h3>
                <p className="text-red-200 font-bold uppercase">Emergency rate = regular rate</p>
              </div>
              <div className="bg-yellow-400/20 backdrop-blur-sm p-8 border-4 border-yellow-400">
                <Clock className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-2xl font-black uppercase tracking-wide mb-2">30-MIN RESPONSE</h3>
                <p className="text-yellow-200 font-bold uppercase">We're already on our way</p>
              </div>
              <div className="bg-orange-600/20 backdrop-blur-sm p-8 border-4 border-orange-600">
                <Shield className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-2xl font-black uppercase tracking-wide mb-2">100% GUARANTEE</h3>
                <p className="text-orange-200 font-bold uppercase">Fixed right or it's free</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aggressive Mobile CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-gradient-to-r from-red-600 to-orange-600 text-white p-4 z-50 shadow-2xl border-t-4 border-yellow-400">
        <div className="flex gap-3">
          <Button className="flex-1 bg-black text-white hover:bg-gray-900 font-black py-4 text-lg uppercase border-2 border-yellow-400">
            <Phone className="w-6 h-6 mr-2" />
            EMERGENCY CALL
          </Button>
          <Button className="flex-1 bg-yellow-400 text-black hover:bg-yellow-500 font-black py-4 text-lg uppercase">
            <Zap className="w-6 h-6 mr-2" />
            SAME-DAY FIX
          </Button>
        </div>
      </div>

      {/* Mobile Spacer */}
      <div className="lg:hidden h-24"></div>
    </div>
  );
}