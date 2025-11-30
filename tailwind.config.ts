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
        // CSS Variable based colors for dark mode support
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
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
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "16px",
        "2xl": "20px",
        "3xl": "24px",
      },
      boxShadow: {
        "elevation-4": "0 2px 8px rgba(15, 23, 42, 0.08)",
        "elevation-8": "0 4px 16px rgba(15, 23, 42, 0.12)",
        "elevation-16": "0 8px 32px rgba(15, 23, 42, 0.16)",
        "elevation-24": "0 12px 48px rgba(15, 23, 42, 0.20)",
        "glow-sm": "0 0 15px -3px rgba(37, 99, 235, 0.3)",
        "glow-md": "0 0 30px -5px rgba(37, 99, 235, 0.4)",
        "glow-lg": "0 0 50px -10px rgba(37, 99, 235, 0.5)",
        "soft-sm": "0 2px 10px -3px rgba(0, 0, 0, 0.1)",
        "soft-md": "0 4px 20px -5px rgba(0, 0, 0, 0.1)",
        "soft-lg": "0 10px 40px -10px rgba(0, 0, 0, 0.15)",
      },
      animation: {
        "fade-in": "fadeIn 0.3s ease-out",
        "slide-up": "slideUp 0.3s ease-out",
        "scale-in": "scaleIn 0.2s ease-out",
        "shimmer": "shimmer 2s linear infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
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
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
