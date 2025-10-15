"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  variant?: "primary" | "secondary" | "outline";
}

export function AnimatedButton({
  children,
  className = "",
  onClick,
  type = "button",
  disabled = false,
  variant = "primary"
}: AnimatedButtonProps) {
  const baseClasses = "relative overflow-hidden transition-all duration-200";
  
  return (
    <motion.button
      className={`${baseClasses} ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
      whileHover={{ 
        scale: disabled ? 1 : 1.02,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      whileTap={{ 
        scale: disabled ? 1 : 0.98,
        transition: { duration: 0.1 }
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <motion.div
        className="relative z-10"
        whileHover={disabled ? {} : { y: -1 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
      
      {/* Hover effect background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
    </motion.button>
  );
}