import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/shell/header";
import { Footer } from "@/components/shell/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Site Forger - Websites That Work As Hard As You Do",
    template: "%s | Site Forger",
  },
  description: "Professional website services for blue-collar businesses. Get a website that drives leads, builds trust, and grows your business.",
  keywords: ["websites", "blue-collar", "construction", "HVAC", "plumbing", "electrical", "landscaping", "local business"],
  authors: [{ name: "Site Forger" }],
  creator: "Site Forger",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://siteforger.com",
    title: "Site Forger - Websites That Work As Hard As You Do",
    description: "Professional website services for blue-collar businesses. Get a website that drives leads, builds trust, and grows your business.",
    siteName: "Site Forger",
  },
  twitter: {
    card: "summary_large_image",
    title: "Site Forger - Websites That Work As Hard As You Do",
    description: "Professional website services for blue-collar businesses. Get a website that drives leads, builds trust, and grows your business.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            (function(){
              try {
                var storageKey = 'siteforger-theme';
                var saved = localStorage.getItem(storageKey);
                var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                var theme = saved === 'light' || saved === 'dark' ? saved : (prefersDark ? 'dark' : 'light');
                var root = document.documentElement;
                root.classList.remove('light','dark');
                root.classList.add(theme);
              } catch (e) {}
            })();
          `}
        </Script>
      </head>
      <body className="font-sans antialiased min-h-screen">
        <ThemeProvider defaultTheme="system" storageKey="siteforger-theme">
          <Header />
          <main>{children}</main>
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
