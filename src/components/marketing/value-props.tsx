import { CheckCircle, Clock, Smartphone, TrendingUp, Shield, Headphones, Zap, Target } from 'lucide-react';

const valueProps = [
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Your website will be live in 7 days or less. No lengthy development cycles or endless revisions.",
    highlight: "7-Day Delivery",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Every website is optimized for mobile devices where 70% of your customers will find you.",
    highlight: "Mobile Optimized",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: TrendingUp,
    title: "Built for Conversions",
    description: "Strategic design elements that turn website visitors into paying customers and phone calls.",
    highlight: "More Leads",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Enterprise-grade hosting with 99.9% uptime guarantee. Your website stays online 24/7.",
    highlight: "99.9% Uptime",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: CheckCircle,
    title: "SEO Included",
    description: "Built-in search engine optimization to help customers find your business on Google.",
    highlight: "Google Ready",
    color: "from-indigo-500 to-blue-500"
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    description: "Free updates, maintenance, and support for the first year. We're here when you need us.",
    highlight: "1-Year Support",
    color: "from-teal-500 to-green-500"
  }
];

export function ValueProps() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-6 py-3 mb-6">
            <Target className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-bold text-blue-700">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Why{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Blue-Collar Businesses
            </span>
            {' '}Choose Site Forger
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We understand your industry and build websites that actually work for contractors, 
            service providers, and skilled trades. Here's what makes us different.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {valueProps.map((prop, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100 hover:border-transparent overflow-hidden"
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              {/* Gradient Border on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${prop.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>
              <div className="absolute inset-[2px] bg-white rounded-2xl"></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${prop.color} shadow-lg`}>
                    <prop.icon className="w-8 h-8 text-white" />
                  </div>
                  {/* Floating highlight badge */}
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
                    {prop.highlight}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors">
                  {prop.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  {prop.description}
                </p>

                {/* Decorative Element */}
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${prop.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full`}></div>
              </div>

              {/* Background Glow Effect */}
              <div className={`absolute top-4 right-4 w-32 h-32 bg-gradient-to-br ${prop.color} opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Bottom Stats Section */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-3xl p-12 text-white text-center shadow-2xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group">
              <div className="flex items-center justify-center mb-4">
                <Zap className="w-12 h-12 text-yellow-300 group-hover:animate-pulse" />
              </div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100 font-medium">Websites Delivered</div>
            </div>
            <div className="group">
              <div className="flex items-center justify-center mb-4">
                <TrendingUp className="w-12 h-12 text-green-300 group-hover:animate-pulse" />
              </div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-100 font-medium">Customer Satisfaction</div>
            </div>
            <div className="group">
              <div className="flex items-center justify-center mb-4">
                <Shield className="w-12 h-12 text-blue-300 group-hover:animate-pulse" />
              </div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100 font-medium">Support Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-6 h-6 bg-blue-400 rounded-full animate-bounce opacity-30"></div>
      <div className="absolute top-40 right-20 w-4 h-4 bg-purple-400 rounded-full animate-bounce opacity-30" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute bottom-20 left-1/4 w-5 h-5 bg-green-400 rounded-full animate-bounce opacity-30" style={{animationDelay: '1s'}}></div>
    </section>
  );
}