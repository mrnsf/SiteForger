import { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, ArrowLeft, Phone, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Thank You - Site Forger',
  description: 'Thank you for contacting Site Forger. We\'ll get back to you within 24 hours.',
}

export default function ContactThanksPage() {
  return (
    <div className="min-h-screen bg-background dark:bg-gray-950">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="mb-8">
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto" />
          </div>

          {/* Thank You Message */}
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Thank You!
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Your message has been received. We'll get back to you within 24 hours.
          </p>

          {/* What's Next */}
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-soft-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              What happens next?
            </h2>
            <div className="space-y-4 text-left">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/40 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold">1</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  We'll review your project requirements and prepare a customized proposal
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/40 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold">2</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Our team will contact you to discuss your vision and answer any questions
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/40 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold">3</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  We'll start building your professional website that drives results
                </p>
              </div>
            </div>
          </div>

          {/* Contact Options */}
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-soft-md p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Need immediate assistance?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+18309289196"
                className="flex items-center justify-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+1 (830) 928-9196</span>
              </a>
              <a
                href="mailto:Siteforgerbusiness@gmail.com"
                className="flex items-center justify-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Siteforgerbusiness@gmail.com</span>
              </a>

            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline">
              <Link href="/contact" className="flex items-center space-x-2">
                <ArrowLeft className="w-4 h-4" />
                <span>Back to contact</span>
              </Link>
            </Button>
            <Button asChild>
              <Link href="/">
                Return to home
              </Link>
            </Button>
          </div>

          {/* Browse Templates CTA */}
          <div className="mt-12 p-6 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-semibold mb-2">
              While you wait, explore our templates
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              See the quality and craftsmanship that goes into every Site Forger website
            </p>
            <Button asChild className="bg-primary hover:bg-primary-hover text-white">
              <Link href="/templates">
                Browse templates
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
