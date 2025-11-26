import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/shell/header";
import { Footer } from "@/components/shell/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";

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
      <body className="font-sans antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300">
        <ThemeProvider defaultTheme="light" storageKey="siteforger-theme">
          <Header />
          <main>{children}</main>
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
