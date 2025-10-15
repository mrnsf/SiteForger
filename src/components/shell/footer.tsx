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
    <footer className="bg-text text-surface">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <AnimatedSection direction="up" delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link href="/" className="text-heading-lg font-extra-bold text-surface hover:text-surface/80 transition-colors duration-300">
                Site Forger
              </Link>
              <p className="mt-4 text-body-sm text-surface/80">
                Websites that work as hard as you do. Professional web solutions for blue-collar businesses.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-body-md font-semibold text-surface mb-4">Navigation</h3>
              <ul className="space-y-2">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-body-sm text-surface/80 hover:text-surface transition-all duration-300 hover:translate-x-1"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Templates */}
            <div>
              <h3 className="text-body-md font-semibold text-surface mb-4">Templates</h3>
              <ul className="space-y-2">
                {navigation.templates.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-body-sm text-surface/80 hover:text-surface transition-all duration-300 hover:translate-x-1"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-body-md font-semibold text-surface mb-4">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2 group">
                  <Phone className="h-4 w-4 text-accent group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-body-sm text-surface/80">(555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2 group">
                  <Mail className="h-4 w-4 text-accent group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-body-sm text-surface/80">hello@siteforger.com</span>
                </div>
                <div className="flex items-center gap-2 group">
                  <MapPin className="h-4 w-4 text-accent group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-body-sm text-surface/80">Houston, Texas</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Bottom bar */}
        <AnimatedSection direction="up" delay={0.3}>
          <div className="mt-12 pt-8 border-t border-surface/20">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-body-sm text-surface/60">
                &copy; {new Date().getFullYear()} Site Forger. All rights reserved.
              </p>
              <div className="mt-4 md:mt-0 flex space-x-6">
                <Link
                  href="/privacy"
                  className="text-body-sm text-surface/60 hover:text-surface/80 transition-all duration-300 hover:translate-y-[-2px]"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="text-body-sm text-surface/60 hover:text-surface/80 transition-all duration-300 hover:translate-y-[-2px]"
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