"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { AnimatedSection } from "@/components/ui/animated-section";
import { AnimatedCard } from "@/components/ui/animated-card";
import { AnimatedButton } from "@/components/ui/animated-button";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle, 
  Send,
  MessageSquare,
  Calendar,
  Zap
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
    honeypot: "" // Hidden field for spam protection
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check honeypot field
    if (formData.honeypot) {
      return; // Likely spam
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto bg-white border-0 shadow-2xl">
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Thank You!
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We've received your message and will get back to you within 24 hours. 
                Our team is excited to help grow your business online!
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-center gap-3 text-gray-700">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span>Response within 24 hours</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-gray-700">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span>Call us at (555) 000-0000 for immediate assistance</span>
                </div>
              </div>
              
              <Button 
                onClick={() => window.location.href = '/'}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
              >
                Return to Home
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-blue-600 text-white px-4 py-2 text-lg font-semibold mb-6">
              Get In Touch
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Ready to Grow Your Business?
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
              Get a free consultation and learn how we can help you attract more customers 
              and increase revenue with professional digital marketing.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Get Your Free Consultation
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Fill out the form below and we'll get back to you within 24 hours with a 
                  custom strategy for your business.
                </p>
              </div>

              <AnimatedCard delay={0.2}>
                <Card className="bg-white border border-gray-200 shadow-lg">
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Honeypot field - hidden from users */}
                      <input
                        type="text"
                        name="honeypot"
                        value={formData.honeypot}
                        onChange={handleInputChange}
                        style={{ display: 'none' }}
                        tabIndex={-1}
                        autoComplete="off"
                        title="Honeypot field for spam protection"
                      />

                      <AnimatedSection direction="up" delay={0.3}>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="name" className="text-gray-700 font-medium">
                              Full Name *
                            </Label>
                            <Input
                              id="name"
                              name="name"
                              type="text"
                              required
                              value={formData.name}
                              onChange={handleInputChange}
                              className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 focus:scale-105"
                              placeholder="John Smith"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="email" className="text-gray-700 font-medium">
                              Email Address *
                            </Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              required
                              value={formData.email}
                              onChange={handleInputChange}
                              className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 focus:scale-105"
                              placeholder="john@example.com"
                            />
                          </div>
                        </div>
                      </AnimatedSection>

                      <AnimatedSection direction="up" delay={0.4}>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="phone" className="text-gray-700 font-medium">
                              Phone Number *
                            </Label>
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              required
                              value={formData.phone}
                              onChange={handleInputChange}
                              className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 focus:scale-105"
                              placeholder="(555) 123-4567"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="company" className="text-gray-700 font-medium">
                              Company Name
                            </Label>
                            <Input
                              id="company"
                              name="company"
                              type="text"
                              value={formData.company}
                              onChange={handleInputChange}
                              className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 focus:scale-105"
                              placeholder="ABC Plumbing"
                            />
                          </div>
                        </div>
                      </AnimatedSection>

                      <AnimatedSection direction="up" delay={0.5}>
                        <div className="space-y-2">
                          <Label htmlFor="service" className="text-gray-700 font-medium">
                            Service Interested In *
                          </Label>
                          <select
                            id="service"
                            name="service"
                            required
                            value={formData.service}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500 bg-white transition-all duration-300 focus:scale-105"
                            title="Select the service you're interested in"
                          >
                            <option value="">Select a service...</option>
                            <option value="website">Professional Website</option>
                            <option value="seo">Local SEO Optimization</option>
                            <option value="google-business">Google Business Profile</option>
                            <option value="all">All Services</option>
                            <option value="consultation">Free Consultation</option>
                          </select>
                        </div>
                      </AnimatedSection>

                      <AnimatedSection direction="up" delay={0.6}>
                        <div className="space-y-2">
                          <Label htmlFor="message" className="text-gray-700 font-medium">
                            Tell Us About Your Business *
                          </Label>
                          <Textarea
                            id="message"
                            name="message"
                            required
                            value={formData.message}
                            onChange={handleInputChange}
                            rows={4}
                            className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 resize-none transition-all duration-300 focus:scale-105"
                            placeholder="Tell us about your business, current challenges, and what you're hoping to achieve..."
                          />
                        </div>
                      </AnimatedSection>

                      <AnimatedSection direction="up" delay={0.7}>
                        <AnimatedButton
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg font-bold"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                              Sending Message...
                            </>
                          ) : (
                            <>
                              <Send className="w-5 h-5 mr-3" />
                              Get My Free Consultation
                            </>
                          )}
                        </AnimatedButton>
                      </AnimatedSection>

                      <p className="text-sm text-gray-500 text-center">
                        By submitting this form, you agree to receive communications from Site Forger. 
                        We respect your privacy and will never share your information.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </AnimatedCard>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <AnimatedSection direction="right" delay={0.2}>
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                    Get In Touch Today
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    Ready to start growing your business? We're here to help with any questions 
                    about our services or to discuss your specific needs.
                  </p>
                </div>
              </AnimatedSection>

              {/* Contact Methods */}
              <div className="space-y-6">
                <AnimatedCard delay={0.3}>
                  <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                          <Phone className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">Call Us</h3>
                          <p className="text-lg text-blue-600 font-semibold">+1 (830) 928-9196</p>
                          <p className="text-gray-600">Mon-Fri 9AM-6PM EST</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedCard>

                <AnimatedCard delay={0.4}>
                  <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                          <Mail className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">Email Us</h3>
                          <p className="text-lg text-green-600 font-semibold">Siteforgerbusiness@gmail.com</p>
                          <p className="text-gray-600">We respond within 24 hours</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedCard>

                <AnimatedCard delay={0.5}>
                  <Card className="bg-white border border-gray-200 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                          <Calendar className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">Schedule a Call</h3>
                          <p className="text-lg text-blue-600 font-semibold">Within 24 Hours</p>
                          <p className="text-gray-600">We'll reach out to discuss your project</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              </div>

              {/* What to Expect */}
              <Card className="bg-white border border-gray-200 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    What to Expect
                  </h3>
                  <div className="space-y-4">
                    {[
                      {
                        icon: Calendar,
                        title: "Free 30-Minute Consultation",
                        description: "We'll discuss your business goals and current challenges"
                      },
                      {
                        icon: Zap,
                        title: "Custom Strategy Proposal",
                        description: "Receive a tailored plan for your specific industry and market"
                      },
                      {
                        icon: CheckCircle,
                        title: "No Pressure, No Commitments",
                        description: "Get valuable insights even if you decide not to work with us"
                      }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-1">
                            {item.title}
                          </h4>
                          <p className="text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Have Questions?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Check out our frequently asked questions or get in touch for personalized answers.
            </p>
            <Button 
              onClick={() => window.location.href = '/faq'}
              variant="outline" 
              className="border-blue-600 text-blue-700 hover:bg-blue-50 text-lg px-8 py-4"
            >
              View FAQ
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}