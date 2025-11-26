import { Metadata } from "next";
import Link from 'next/link'
import { ArrowRight, CheckCircle, Users, Target, Zap, Award, Phone, Mail, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: "About - Site Forger",
  description: "Learn about Site Forger's mission to help blue-collar businesses succeed online with professional websites that drive real results.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-24 lg:py-32 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 mb-8 border border-white/20">
              <Sparkles className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-semibold text-blue-200">Our Story</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1]">
              Built by professionals,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                for professionals
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Site Forger started when two friends noticed an opportunity in the market and decided to bring their skill set into the industry.
              We're building websites for underrepresented businesses to boost their exposure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="xl" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-10 py-6 text-lg font-bold rounded-2xl shadow-glow-md hover:shadow-glow-lg transform hover:scale-105 transition-all duration-300">
                <Link href="/contact" className="flex items-center gap-3">
                  Get Your Website
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="glass" size="xl" className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 px-10 py-6 text-lg font-bold rounded-2xl">
                <Link href="/templates">
                  See Our Work
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Site Forger started when two friends noticed an opportunity in the market and decided to bring their skill set into the industry. 
                    We saw a chance to help underrepresented businesses get better web presence, and we took it.
                  </p>
                  <p>
                    Our story is very straightforward - we saw an opportunity and we took a chance. 
                    Because we're a very small-scale team, we are able to work a lot more hand-in-hand with our clients.
                  </p>
                  <p>
                    We focus on building websites for people who are underrepresented and to boost exposure. 
                    That includes a various amount of things, but our hands-on approach sets us apart.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Our Approach</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-300" />
                    <span>Small team, personal attention</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-300" />
                    <span>Hand-in-hand collaboration</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-300" />
                    <span>Focus on underrepresented businesses</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Principles */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                What We Stand For
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our principles guide everything we do, from design to customer service
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center">
                <CardContent className="p-8">
                  <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Industry Expertise
                  </h3>
                  <p className="text-gray-600">
                    We only work with contractors and skilled trades. We understand your business, your customers, and your challenges.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-8">
                  <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Results-Driven
                  </h3>
                  <p className="text-gray-600">
                    Every website is built to generate leads and grow your business. Beautiful design that actually works.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-8">
                  <Zap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Fast Delivery
                  </h3>
                  <p className="text-gray-600">
                    We know you're busy running your business. Get your professional website launched in days, not months.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-8">
                  <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Quality Guarantee
                  </h3>
                  <p className="text-gray-600">
                    30-day money-back guarantee. If you're not completely satisfied, we'll make it right or refund your investment.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Meet the Team
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              A small, dedicated team of designers, developers, and marketing experts 
              who are passionate about helping contractors succeed online.
            </p>
            
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Ready to work with contractors who get it?
              </h3>
              <p className="text-blue-100 mb-6">
                We're not a generic web design agency. We're specialists who understand 
                the unique needs of skilled trades and blue-collar businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="secondary" size="lg">
                  <Link href="/contact">
                    Start Your Project
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                  <Link href="/templates">
                    View Our Templates
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Let's Build Something Great Together
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Ready to take your contracting business to the next level? 
              Let's discuss how a professional website can transform your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <a href="tel:+18309289196" className="text-lg hover:text-blue-400 transition-colors">
                  +1 (830) 928-9196
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <a href="mailto:Siteforgerbusiness@gmail.com" className="text-lg hover:text-blue-400 transition-colors">
                  Siteforgerbusiness@gmail.com
                </a>
              </div>
            </div>
            
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/contact">
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}