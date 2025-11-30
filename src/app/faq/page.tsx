import { Metadata } from "next";
import Link from 'next/link'
import { ArrowRight, Phone, Mail, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "FAQ - Site Forger",
  description: "Frequently asked questions about Site Forger's website services for blue-collar businesses. Get answers to common questions.",
};

const faqData = [
  {
    id: "pricing",
    question: "How much does a website cost?",
    answer: "Our website pricing varies based on your specific needs and requirements. This includes design, development, mobile optimization, basic SEO, and 30 days of support. We also offer payment plans to make it easier for your business. Contact us for a personalized quote."
  },
  {
    id: "timeline",
    question: "How long does it take to build my website?",
    answer: "Most websites are completed within 7-14 business days. We work efficiently because we understand you need to get back to running your business. Rush delivery (3-5 days) is available for an additional fee."
  },
  {
    id: "templates",
    question: "Can I customize the templates?",
    answer: "Absolutely! Our templates are starting points. We customize colors, content, images, and layout to match your brand and business needs. Every website is unique to your company."
  },
  {
    id: "maintenance",
    question: "Do you provide ongoing maintenance?",
    answer: "Yes, we offer maintenance packages that include updates, security monitoring, backup services, and minor content changes. You can also manage basic updates yourself with our easy-to-use admin panel. Contact us for maintenance pricing details."
  },
  {
    id: "seo",
    question: "Will my website show up on Google?",
    answer: "Every website includes basic SEO optimization to help you get found locally. For more aggressive SEO and Google Ads management, we offer additional marketing services. Contact us for pricing details."
  },
  {
    id: "mobile",
    question: "Will my website work on mobile phones?",
    answer: "Yes, all our websites are fully responsive and optimized for mobile devices. With over 60% of contractor searches happening on mobile, this is essential for your success."
  },
  {
    id: "content",
    question: "Do I need to provide all the content?",
    answer: "We'll help you create compelling content that converts visitors into customers. You provide the basic information about your services, and we'll craft professional copy that speaks to your target customers."
  },
  {
    id: "hosting",
    question: "Is hosting included?",
    answer: "Yes, the first year of hosting is included with every website. After that, we offer affordable hosting plans which include security, backups, and performance monitoring. Contact us for hosting pricing details."
  },
  {
    id: "changes",
    question: "What if I want changes after the website is done?",
    answer: "Minor changes are included for 30 days after launch. After that, we offer affordable update services, or you can make basic changes yourself using our user-friendly admin panel."
  },
  {
    id: "guarantee",
    question: "Do you offer any guarantees?",
    answer: "Yes, we offer a 30-day money-back guarantee. If you're not completely satisfied with your website, we'll make it right or provide a full refund."
  },
  {
    id: "payment",
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, bank transfers, and offer payment plans. A 50% deposit is required to start, with the balance due upon completion."
  },
  {
    id: "difference",
    question: "How are you different from other web designers?",
    answer: "We specialize exclusively in websites for contractors and skilled trades. We understand your industry, your customers, and what works. Plus, we're contractors ourselves, so we know the challenges you face."
  }
]

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background dark:bg-gray-950">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Get answers to the most common questions about our website services for contractors and skilled trades.
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
                  View templates
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((faq) => (
                <AccordionItem 
                  key={faq.id} 
                  value={faq.id}
                  className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800"
                >
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                    <span className="text-lg font-semibold text-gray-900 dark:text-white">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white mb-6">
              Still Have Questions?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
              We're here to help! Get in touch and we'll answer any questions about your website project.
            </p>

            {/* Contact Options */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 shadow-soft-md hover:shadow-soft-lg transform transition-transform duration-300 hover:-translate-y-0.5 motion-reduce:transform-none motion-reduce:shadow-none motion-reduce:transition-none">
                <Phone className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Call Us</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Speak directly with our team
                </p>
                <a
                  href="tel:+18309289196"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 font-medium"
                >
                  +1 (830) 928-9196
                </a>
              </div>

              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 shadow-soft-md hover:shadow-soft-lg transform transition-transform duration-300 hover:-translate-y-0.5 motion-reduce:transform-none motion-reduce:shadow-none motion-reduce:transition-none">
                <Mail className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Email Us</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Get detailed answers via email
                </p>
                <a
                  href="mailto:Siteforgerbusiness@gmail.com"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 font-medium"
                >
                  Siteforgerbusiness@gmail.com
                </a>
              </div>

              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 shadow-soft-md hover:shadow-soft-lg transform transition-transform duration-300 hover:-translate-y-0.5 motion-reduce:transform-none motion-reduce:shadow-none motion-reduce:transition-none">
                <CheckCircle className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Get Started</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Ready to build your website?
                </p>
                <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-medium">
                  Contact Us
                </Link>
              </div>
            </div>

            <Button asChild size="lg">
              <Link href="/contact">
                Get Your Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">
                Why Contractors Choose Site Forger
              </h2>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                We're not just another web design company. We're specialists who understand your business.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 shadow-soft-md hover:shadow-soft-lg transform transition-transform duration-300 hover:-translate-y-0.5 motion-reduce:transform-none motion-reduce:shadow-none motion-reduce:transition-none">
                <CheckCircle className="w-12 h-12 text-green-600 dark:text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Industry Expertise
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We only work with contractors and skilled trades. We know what works in your industry.
                </p>
              </div>

              <div className="text-center bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 shadow-soft-md hover:shadow-soft-lg transform transition-transform duration-300 hover:-translate-y-0.5 motion-reduce:transform-none motion-reduce:shadow-none motion-reduce:transition-none">
                <CheckCircle className="w-12 h-12 text-green-600 dark:text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Fast Turnaround
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Get your website launched in 7-14 days, not months. We know you're busy running your business.
                </p>
              </div>

              <div className="text-center bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 shadow-soft-md hover:shadow-soft-lg transform transition-transform duration-300 hover:-translate-y-0.5 motion-reduce:transform-none motion-reduce:shadow-none motion-reduce:transition-none">
                <CheckCircle className="w-12 h-12 text-green-600 dark:text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Quality Focus
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our websites are designed to generate leads and help grow your business online.
                </p>
              </div>

              <div className="text-center bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 shadow-soft-md hover:shadow-soft-lg transform transition-transform duration-300 hover:-translate-y-0.5">
                <CheckCircle className="w-12 h-12 text-green-600 dark:text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  All-Inclusive Pricing
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  No hidden fees or surprises. Everything you need is included in one transparent price.
                </p>
              </div>

              <div className="text-center bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 shadow-soft-md hover:shadow-soft-lg transform transition-transform duration-300 hover:-translate-y-0.5">
                <CheckCircle className="w-12 h-12 text-green-600 dark:text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  30-Day Guarantee
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Not satisfied? We'll make it right or provide a full refund. Your success is our priority.
                </p>
              </div>

              <div className="text-center bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 shadow-soft-md hover:shadow-soft-lg transform transition-transform duration-300 hover:-translate-y-0.5">
                <CheckCircle className="w-12 h-12 text-green-600 dark:text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Ongoing Support
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We're here for the long haul. Get ongoing support and maintenance to keep your site running smoothly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 text-gray-900 dark:text-white">
              Ready to Get Started?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
              Ready to grow your business with a professional website?
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
      </section>
    </div>
  );
}
