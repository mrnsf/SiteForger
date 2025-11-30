"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import { useRef } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Templates", href: "/templates" },
  { name: "About", href: "/about" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pathname, setPathname] = useState("");
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  // Handle scroll effect and pathname
  useEffect(() => {
    // Set initial pathname
    setPathname(window.location.pathname);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open and focus close button
  useEffect(() => {
    const body = document.body;
    if (mobileMenuOpen) {
      const prev = body.style.overflow;
      body.style.overflow = "hidden";
      closeBtnRef.current?.focus();
      return () => {
        body.style.overflow = prev;
      };
    }
  }, [mobileMenuOpen]);

  // Check if link is active
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <motion.header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border shadow-sm"
          : "bg-background border-b border-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <motion.div
          className="flex lg:flex-1"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Link href="/" className="-m-1.5 p-1.5 group flex items-center gap-2">
            <motion.div
              className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-white font-bold text-lg">SF</span>
            </motion.div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Site Forger
            </span>
          </Link>
        </motion.div>

        {/* Mobile menu button & theme toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <motion.button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-foreground hover:bg-accent transition-colors"
            onClick={() => setMobileMenuOpen(true)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu-panel"
            whileTap={{ scale: 0.95 }}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </motion.button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-1">
          {navigation.map((item, index) => {
            const active = isActive(item.href);

            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "relative text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200",
                    active
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  )}
                >
                  {item.name}
                  {active && (
                    <motion.div
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full"
                      layoutId="activeIndicator"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Desktop CTA & Theme Toggle */}
        <motion.div
          className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-3"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="tel:+18309289196"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-3 py-2 rounded-lg hover:bg-accent"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden xl:inline">+1 (830) 928-9196</span>
          </a>
          <ThemeToggle />
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-200">
              <Link href="/contact">Get a free quote</Link>
            </Button>
          </motion.div>
        </motion.div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Slide-out panel */}
            <motion.div
              id="mobile-menu-panel"
              role="dialog"
              aria-modal="true"
              aria-label="Main Menu"
              className="lg:hidden fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-background shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-4 border-b border-border">
                <Link
                  href="/"
                  className="flex items-center gap-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                    <span className="text-white font-bold">SF</span>
                  </div>
                  <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Site Forger
                  </span>
                </Link>
                <motion.button
                  type="button"
                  className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                  ref={closeBtnRef}
                  whileTap={{ scale: 0.95 }}
                >
                  <X className="h-5 w-5" />
                </motion.button>
              </div>

              {/* Navigation */}
              <nav className="px-2 py-4">
                {navigation.map((item, index) => {
                  const active = isActive(item.href);

                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center justify-between px-4 py-3 rounded-lg mb-1 transition-colors",
                          active
                            ? "bg-primary/10 text-primary"
                            : "text-foreground hover:bg-accent"
                        )}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="font-medium">{item.name}</span>
                        <ChevronRight className={cn(
                          "w-4 h-4 transition-transform",
                          active ? "text-primary" : "opacity-50"
                        )} />
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Footer actions */}
              <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border bg-muted">
                {/* Phone */}
                <motion.a
                  href="tel:+18309289196"
                  className="flex items-center gap-3 px-4 py-3 mb-3 rounded-lg bg-background text-foreground font-medium shadow-sm"
                  whileTap={{ scale: 0.98 }}
                >
                  <Phone className="w-5 h-5 text-green-600" />
                  <span>+1 (830) 928-9196</span>
                </motion.a>

                {/* CTA */}
                <motion.div whileTap={{ scale: 0.98 }}>
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 font-semibold"
                  >
                    <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                      Get a free quote
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
