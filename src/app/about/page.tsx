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
    <div className="min-h-screen bg-background dark:bg-gray-950">
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full px-6 py-3 mb-6 bg-secondary dark:bg-gray-900 text-gray-700 dark:text-gray-300">
              <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-semibold">Our Story</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Built by professionals, for professionals
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
              Site Forger began when two friends saw an opportunity to help underrepresented businesses gain a better web presence. We build practical, conversion‑focused sites that drive results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary-hover text-white px-8 py-5 font-semibold rounded-xl">
                <Link href="/contact" className="flex items-center gap-3">
                  Get Your Website
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-8 py-5 rounded-xl">
                <Link href="/templates">See Our Work</Link>
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
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">
                  Our Story
                </h2>
                <div className="space-y-3 text-gray-600 dark:text-gray-300 text-base md:text-lg">
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
              <div className="rounded-lg p-8 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                <h3 className="text-xl md:text-2xl font-semibold tracking-tight mb-3">Our Approach</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                    <span>Small team, personal attention</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                    <span>Hand-in-hand collaboration</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                    <span>Focus on underrepresented businesses</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Principles */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">
                What We Stand For
              </h2>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Our principles guide everything we do, from design to customer service
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                <CardContent className="p-8">
                  <Users className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Industry Expertise
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We only work with contractors and skilled trades. We understand your business, your customers, and your challenges.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                <CardContent className="p-8">
                  <Target className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Results-Driven
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Every website is built to generate leads and grow your business. Beautiful design that actually works.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                <CardContent className="p-8">
                  <Zap className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Fast Delivery
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We know you're busy running your business. Get your professional website launched in days, not months.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                <CardContent className="p-8">
                  <Award className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Quality Guarantee
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
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
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">
              Meet the Team
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10">
              A small, dedicated team of designers, developers, and marketing experts 
              who are passionate about helping contractors succeed online.
            </p>
            <div className="rounded-lg p-8 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
              <h3 className="text-xl md:text-2xl font-semibold tracking-tight mb-3">
                Ready to work with contractors who get it?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We're not a generic web design agency. We're specialists who understand 
                the unique needs of skilled trades and blue-collar businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary-hover text-white">
                  <Link href="/contact">
                    Get a free quote
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/templates">
                    View our templates
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              Let's Build Something Great Together
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
              Ready to take your contracting business to the next level? 
              Let's discuss how a professional website can transform your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <a href="tel:+18309289196" className="text-lg hover:text-blue-400 transition-colors">
                  +1 (830) 928-9196
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <a href="mailto:Siteforgerbusiness@gmail.com" className="text-lg hover:text-blue-400 transition-colors">
                  Siteforgerbusiness@gmail.com
                </a>
              </div>
            </div>
            
            <div className="mt-8">
              <Button asChild size="lg" className="bg-primary hover:bg-primary-hover text-white">
                <Link href="/contact">
                  Get a free quote
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
