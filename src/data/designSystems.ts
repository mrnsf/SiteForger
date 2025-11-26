import type { DesignSystem } from '../types/theme';

export const designSystems: DesignSystem[] = [
  {
    id: 'modern-minimal',
    name: 'Modern Minimal',
    description: 'Clean, airy design with plenty of whitespace',
    colors: {
      primary: '#2563eb',
      secondary: '#7c3aed',
      accent: '#06b6d4',
      background: '#ffffff',
      surface: '#f8fafc',
      text: '#0f172a',
      textSecondary: '#64748b',
      border: '#e2e8f0',
      success: '#22c55e',
      warning: '#eab308',
      error: '#ef4444',
    },
    darkColors: {
      primary: '#3b82f6',
      secondary: '#8b5cf6',
      accent: '#22d3ee',
      background: '#0f172a',
      surface: '#1e293b',
      text: '#f1f5f9',
      textSecondary: '#94a3b8',
      border: '#334155',
      success: '#4ade80',
      warning: '#facc15',
      error: '#f87171',
    },
    typography: {
      fontFamily: 'Inter, system-ui, sans-serif',
      headingWeight: '700',
      bodyWeight: '400',
    },
    spacing: {
      unit: '4px',
      scale: [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 64],
    },
    borderRadius: {
      sm: '0.375rem',
      md: '0.5rem',
      lg: '0.75rem',
      xl: '1rem',
    },
    shadows: {
      sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    },
    motion: {
      duration: '200ms',
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
  },
];
