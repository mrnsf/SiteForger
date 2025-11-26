import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Mail, Star, CheckCircle, Zap, Shield, Clock } from 'lucide-react';

export function CTABanner() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-300 to-purple-300 rounded-full blur-3xl opacity-30"></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main CTA Content */}
          <div className="text-center text-white mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full px-6 py-3 mb-8 border border-yellow-400/30">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-bold text-yellow-300">Limited Time Offer</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              Ready to{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Transform
              </span>{' '}
              Your Business?
            </h2>
            
            <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Get a professional website that works as hard as you do.
              Site Forger delivers results in days, not months — so you can focus on what you do best.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 mb-12 text-blue-200">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="font-semibold">No Setup Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-400" />
                <span className="font-semibold">Quality Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-400" />
                <span className="font-semibold">Modern Designs</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-purple-400" />
                <span className="font-semibold">Competitive Pricing</span>
              </div>
            </div>
          </div>



          {/* CTA Buttons */}
          <div className="text-center mb-12">
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
              >
                <Link href="/contact" className="flex items-center gap-3">
                  Get Started Today
                  <ArrowRight className="w-6 h-6" />
                </Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-2 border-white/40 text-white hover:bg-white hover:text-gray-900 px-12 py-6 text-xl font-bold rounded-2xl backdrop-blur-sm bg-white/10 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Link href="/templates" className="flex items-center gap-3">
                  View Templates
                </Link>
              </Button>
            </div>
            
            <p className="text-blue-200 mt-6 text-lg">
              🎉 <strong>New Business Special:</strong> Professional website starting at competitive rates!
            </p>
          </div>

          {/* Contact Options */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Need Help Choosing? Let's Talk!
              </h3>
              <p className="text-blue-200 text-lg max-w-2xl mx-auto">
                Our experts are standing by to help you find the perfect solution for your business. 
                Get personalized recommendations and answers to all your questions.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                asChild
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                <Link href="tel:+18309289196" className="flex items-center gap-3">
                  <Phone className="w-5 h-5" />
                  Call Now: +1 (830) 928-9196
                </Link>
              </Button>
              
              <Button
                asChild
                variant="outline"
                className="border-2 border-white/40 text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm bg-white/10 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                <Link href="mailto:Siteforgerbusiness@gmail.com" className="flex items-center gap-3">
                  <Mail className="w-5 h-5" />
                  Email Us
                </Link>
              </Button>
            </div>
          </div>
          {/* Value Propositions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold text-white mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Fresh
              </div>
              <div className="text-blue-200 font-semibold">Modern Approach</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold text-white mb-3 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Quality
              </div>
              <div className="text-blue-200 font-semibold">Over Quantity</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold text-white mb-3 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Personal
              </div>
              <div className="text-blue-200 font-semibold">Dedicated Service</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}