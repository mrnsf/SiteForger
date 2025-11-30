"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => {
        const systemPrefersDark = typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches;
        const resolved = theme === "system" ? (systemPrefersDark ? "dark" : "light") : theme;
        const next = resolved === "light" ? "dark" : "light";
        setTheme(next);
      }}
      className="relative h-9 w-9 rounded-lg hover:bg-accent transition-colors"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0 text-amber-500" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100 text-primary" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
