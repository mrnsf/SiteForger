import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Site Forger Brand Colors
        primary: {
          DEFAULT: "#2563EB", // Primary blue
          hover: "#1E40AF",   // Darker blue for hover states
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#10B981", // Green accent
          foreground: "#FFFFFF",
        },
        background: "#F7F9FC", // Light gray-blue background
        surface: "#FFFFFF",    // White surface
        text: {
          DEFAULT: "#0F172A",  // Dark slate text
          muted: "#475569",    // Gray muted text
        },
        border: "#E5E7EB",     // Light gray border
        focus: "#93C5FD",      // Light blue focus ring
        
        // shadcn/ui compatibility colors
        foreground: "#0F172A",
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#0F172A",
        },
        popover: {
          DEFAULT: "#FFFFFF",
          foreground: "#0F172A",
        },
        secondary: {
          DEFAULT: "#F1F5F9",
          foreground: "#0F172A",
        },
        muted: {
          DEFAULT: "#F8FAFC",
          foreground: "#475569",
        },
        destructive: {
          DEFAULT: "#EF4444",
          foreground: "#FFFFFF",
        },
        input: "#E5E7EB",
        ring: "#93C5FD",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Site Forger Typography Scale
        "display-lg": ["56px", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
        "display-md": ["44px", { lineHeight: "1.25", letterSpacing: "-0.02em" }],
        "heading-xl": ["36px", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
        "heading-lg": ["30px", { lineHeight: "1.35", letterSpacing: "-0.01em" }],
        "heading-md": ["24px", { lineHeight: "1.4" }],
        "heading-sm": ["22px", { lineHeight: "1.4" }],
        "body-lg": ["18px", { lineHeight: "1.6" }],
        "body-md": ["16px", { lineHeight: "1.6" }],
        "body-sm": ["14px", { lineHeight: "1.5" }],
        "caption": ["13px", { lineHeight: "1.4" }],
      },
      fontWeight: {
        "extra-bold": "800",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "16px",
        "2xl": "20px",
        "3xl": "24px",
      },
      boxShadow: {
        // Site Forger elevation system
        "elevation-4": "0 2px 8px rgba(15, 23, 42, 0.08)",
        "elevation-8": "0 4px 16px rgba(15, 23, 42, 0.12)",
        "elevation-16": "0 8px 32px rgba(15, 23, 42, 0.16)",
        "elevation-24": "0 12px 48px rgba(15, 23, 42, 0.20)",
        // Modern glow shadows
        "glow-sm": "0 0 15px -3px rgba(37, 99, 235, 0.3)",
        "glow-md": "0 0 30px -5px rgba(37, 99, 235, 0.4)",
        "glow-lg": "0 0 50px -10px rgba(37, 99, 235, 0.5)",
        "glow-purple": "0 0 40px -10px rgba(124, 58, 237, 0.4)",
        "glow-orange": "0 0 40px -10px rgba(249, 115, 22, 0.4)",
        // Soft modern shadows
        "soft-sm": "0 2px 10px -3px rgba(0, 0, 0, 0.1)",
        "soft-md": "0 4px 20px -5px rgba(0, 0, 0, 0.1)",
        "soft-lg": "0 10px 40px -10px rgba(0, 0, 0, 0.15)",
        "soft-xl": "0 20px 60px -15px rgba(0, 0, 0, 0.2)",
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "112": "28rem",
        "128": "32rem",
      },
      animation: {
        "fade-in": "fadeIn 0.3s ease-out",
        "slide-up": "slideUp 0.3s ease-out",
        "scale-in": "scaleIn 0.2s ease-out",
        "shimmer": "shimmer 2s linear infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px -5px rgba(37, 99, 235, 0.4)" },
          "50%": { boxShadow: "0 0 35px -5px rgba(37, 99, 235, 0.6)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;