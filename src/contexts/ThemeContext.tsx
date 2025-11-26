import React, { createContext, useContext, useEffect, useState } from 'react';
import type { ThemeMode, DesignSystemId } from '../types/theme';
import { designSystems } from '../data/designSystems';

interface ThemeContextType {
  theme: ThemeMode;
  designSystem: DesignSystemId;
  toggleTheme: () => void;
  setDesignSystem: (systemId: DesignSystemId) => void;
  currentDesignSystem: typeof designSystems[0];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    // Check localStorage first
    const savedTheme = localStorage.getItem('theme') as ThemeMode;
    if (savedTheme) return savedTheme;
    
    // Check system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  const [designSystem, setDesignSystemState] = useState<DesignSystemId>(() => {
    const savedSystem = localStorage.getItem('designSystem') as DesignSystemId;
    return savedSystem || 'modern-minimal';
  });

  const currentDesignSystem = designSystems.find(ds => ds.id === designSystem) || designSystems[0];

  useEffect(() => {
    const root = document.documentElement;
    
    // Remove previous theme class
    root.classList.remove('light', 'dark');
    
    // Add current theme class
    root.classList.add(theme);
    
    // Apply design system CSS variables
    const colors = theme === 'dark' ? currentDesignSystem.darkColors : currentDesignSystem.colors;
    
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });

    // Apply typography
    root.style.setProperty('--font-family', currentDesignSystem.typography.fontFamily);
    root.style.setProperty('--font-weight-heading', currentDesignSystem.typography.headingWeight);
    root.style.setProperty('--font-weight-body', currentDesignSystem.typography.bodyWeight);

    // Apply border radius
    Object.entries(currentDesignSystem.borderRadius).forEach(([key, value]) => {
      root.style.setProperty(`--border-radius-${key}`, value);
    });

    // Apply shadows
    Object.entries(currentDesignSystem.shadows).forEach(([key, value]) => {
      root.style.setProperty(`--shadow-${key}`, value);
    });

    // Apply motion
    root.style.setProperty('--motion-duration', currentDesignSystem.motion.duration);
    root.style.setProperty('--motion-easing', currentDesignSystem.motion.easing);
    
    // Save to localStorage
    localStorage.setItem('theme', theme);
    localStorage.setItem('designSystem', designSystem);
  }, [theme, designSystem, currentDesignSystem]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const setDesignSystem = (systemId: DesignSystemId) => {
    setDesignSystemState(systemId);
  };

  return (
    <ThemeContext.Provider value={{ 
      theme, 
      designSystem, 
      toggleTheme, 
      setDesignSystem, 
      currentDesignSystem 
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};