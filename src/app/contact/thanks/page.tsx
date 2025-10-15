import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Star, ArrowLeft, Phone, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Thank You - Site Forger',
  description: 'Thank you for contacting Site Forger. We\'ll get back to you within 24 hours.',
}

export default function ContactThanksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="mb-8">
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto" />
          </div>

          {/* Thank You Message */}
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Thank You!
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Your message has been received. We'll get back to you within 24 hours.
          </p>

          {/* What's Next */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              What happens next?
            </h2>
            <div className="space-y-4 text-left">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-600 text-sm font-semibold">1</span>
                </div>
                <p className="text-gray-700">
                  We'll review your project requirements and prepare a customized proposal
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-600 text-sm font-semibold">2</span>
                </div>
                <p className="text-gray-700">
                  Our team will contact you to discuss your vision and answer any questions
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-600 text-sm font-semibold">3</span>
                </div>
                <p className="text-gray-700">
                  We'll start building your professional website that drives results
                </p>
              </div>
            </div>
          </div>

          {/* Contact Options */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Need immediate assistance?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+1-555-123-4567"
                className="flex items-center justify-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>(555) 123-4567</span>
              </a>
              <a
                href="mailto:hello@siteforger.com"
                className="flex items-center justify-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>hello@siteforger.com</span>
              </a>

            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline">
              <Link href="/contact" className="flex items-center space-x-2">
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Contact</span>
              </Link>
            </Button>
            <Button asChild>
              <Link href="/">
                Return to Home
              </Link>
            </Button>
          </div>

          {/* Browse Templates CTA */}
          <div className="mt-12 p-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg text-white">
            <h3 className="text-xl font-semibold mb-2">
              While you wait, explore our templates
            </h3>
            <p className="text-blue-100 mb-4">
              See the quality and craftsmanship that goes into every Site Forger website
            </p>
            <Button asChild variant="secondary">
              <Link href="/templates">
                Browse Templates
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}