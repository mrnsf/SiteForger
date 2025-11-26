import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";

const navigation = {
  main: [
    { name: "Services", href: "/services" },
    { name: "Templates", href: "/templates" },
    { name: "About", href: "/about" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ],
  templates: [
    { name: "ADDY Template", href: "/templates/addy" },
    { name: "MARC Template", href: "/templates/marc" },
    { name: "CADE Template", href: "/templates/cade" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 relative z-10">
        <AnimatedSection direction="up" delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-glow-sm group-hover:shadow-glow-md transition-all duration-300">
                  <span className="text-white font-bold text-lg">SF</span>
                </div>
                <span className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                  Site Forger
                </span>
              </Link>
              <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                Websites that work as hard as you do. Professional web solutions for blue-collar businesses.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Navigation</h3>
              <ul className="space-y-3">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-400 hover:text-blue-400 transition-all duration-300 inline-flex items-center gap-1 group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 rounded transition-all duration-300"></span>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Templates */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Templates</h3>
              <ul className="space-y-3">
                {navigation.templates.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-400 hover:text-purple-400 transition-all duration-300 inline-flex items-center gap-1 group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-purple-500 rounded transition-all duration-300"></span>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact</h3>
              <div className="space-y-4">
                <a href="tel:+18309289196" className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 transition-all duration-300">
                    <Phone className="h-4 w-4 text-blue-400" />
                  </div>
                  <span className="text-sm text-gray-400 group-hover:text-white transition-colors duration-300">+1 (830) 928-9196</span>
                </a>
                <a href="mailto:Siteforgerbusiness@gmail.com" className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-purple-500/20 transition-all duration-300">
                    <Mail className="h-4 w-4 text-purple-400" />
                  </div>
                  <span className="text-sm text-gray-400 group-hover:text-white transition-colors duration-300">Siteforgerbusiness@gmail.com</span>
                </a>
                <div className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-green-500/20 transition-all duration-300">
                    <MapPin className="h-4 w-4 text-green-400" />
                  </div>
                  <span className="text-sm text-gray-400 group-hover:text-white transition-colors duration-300">Houston, Texas</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Bottom bar */}
        <AnimatedSection direction="up" delay={0.3}>
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-500">
                &copy; {new Date().getFullYear()} Site Forger. All rights reserved.
              </p>
              <div className="mt-4 md:mt-0 flex space-x-6">
                <Link
                  href="/privacy"
                  className="text-sm text-gray-500 hover:text-gray-300 transition-all duration-300"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="text-sm text-gray-500 hover:text-gray-300 transition-all duration-300"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  );
}