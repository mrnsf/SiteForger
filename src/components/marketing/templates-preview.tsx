import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AnimatedSection } from '@/components/ui/animated-section';
import { AnimatedCard } from '@/components/ui/animated-card';
import { ArrowRight, ExternalLink, Eye, Palette, Zap } from 'lucide-react';
import { templates } from '@/data/templates';

export function TemplatesPreview() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection delay={0.1} direction="up">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-6 py-3 mb-6">
              <Palette className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-bold text-purple-700">Template Gallery</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Choose Your{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Perfect Template
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Each template is carefully crafted for different business personalities and goals. 
              Pick the one that matches your brand and watch your business grow with a professional online presence.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-10 mb-16">
          {templates.map((template, index) => (
            <AnimatedCard 
              key={template.id}
              delay={0.2 + (index * 0.15)}
              hoverScale={1.05}
              hoverY={-15}
            >
              <Card className="group relative overflow-hidden bg-white hover:shadow-2xl transition-all duration-700 border-0 shadow-lg rounded-2xl h-full">
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                <div className="absolute inset-[3px] bg-white rounded-2xl"></div>
                
                <div className="relative z-10">
                  {/* Template Preview Image */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden rounded-t-2xl">
                    <img 
                      src={`https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent(`${template.motif} website design for ${template.industry} business, ${template.description}, professional layout, modern UI`)}&image_size=landscape_4_3`}
                      alt={`${template.name} template preview`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/40 transition-all duration-300"></div>
                    
                    {/* Template Badge */}
                    <div className="absolute top-6 left-6">
                      <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold px-4 py-2 text-sm shadow-lg">
                        {template.motif.toUpperCase()}
                      </Badge>
                    </div>

                    {/* Preview Button */}
                    <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <Button 
                        asChild 
                        size="sm" 
                        className="bg-white/95 hover:bg-white text-gray-900 font-semibold shadow-lg hover:shadow-xl rounded-lg transform hover:scale-105 transition-all duration-200"
                      >
                        <Link href={`/templates/${template.id}`} className="flex items-center gap-2">
                          <Eye className="w-4 h-4" />
                          Preview
                        </Link>
                      </Button>
                    </div>

                    {/* Live Demo Button */}
                    <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <Button 
                        asChild 
                        size="sm" 
                        className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold shadow-lg hover:shadow-xl rounded-lg transform hover:scale-105 transition-all duration-200"
                      >
                        <Link href={`/templates/${template.id}`} className="flex items-center gap-2">
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </Link>
                      </Button>
                    </div>
                  </div>

                  <CardContent className="p-8">
                    {/* Template Info */}
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                        {template.name}
                      </h3>
                      <div className="flex items-center gap-1">
                        <Zap className="w-4 h-4 text-yellow-500 group-hover:animate-pulse" />
                        <span className="text-sm font-semibold text-gray-600">Popular</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {template.description}
                    </p>

                    {/* Industry Tag */}
                    <div className="mb-6">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border border-blue-200 group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300">
                        Perfect for {template.industry}
                      </span>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {template.features.slice(0, 3).map((feature, idx) => (
                          <span 
                            key={idx} 
                            className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full font-medium group-hover:bg-blue-50 group-hover:text-blue-700 transition-all duration-300"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Button 
                      asChild 
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                    >
                      <Link href={`/templates/${template.id}`} className="flex items-center justify-center gap-2">
                        Choose This Template
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                      </Link>
                    </Button>
                  </CardContent>
                </div>

                {/* Decorative Glow */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-blue-300/20 to-purple-300/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Card>
            </AnimatedCard>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <AnimatedSection delay={0.8} direction="up">
          <div className="text-center">
            <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4">Can't Decide? We'll Help!</h3>
                <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
                  Not sure which template fits your business best? Our experts will recommend the perfect design 
                  based on your industry, goals, and brand personality.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    asChild 
                    size="lg"
                    className="bg-white text-gray-900 hover:bg-gray-100 font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                  >
                    <Link href="/contact" className="flex items-center gap-2">
                      Get Free Consultation
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                  <Button 
                    asChild 
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                  >
                    <Link href="/templates" className="flex items-center gap-2">
                      View All Templates
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}