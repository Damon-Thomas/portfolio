"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';
import { useTheme as useNextTheme } from 'next-themes';

interface ThemeContextType {
  theme: string | undefined;
  setTheme: (theme: string) => void;
  resolvedTheme: string | undefined;
  systemTheme: string | undefined;
  toggleTheme: () => void;
  isDark: boolean;
  isLight: boolean;
  mounted: boolean;
  // Additional theme-related state or functions can be added here
  themeClass: string;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeContextProvider({ children }: { children: React.ReactNode }) {
  const { theme, setTheme, resolvedTheme, systemTheme } = useNextTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = resolvedTheme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  const isDark = mounted ? resolvedTheme === "dark" : false;
  const isLight = mounted ? resolvedTheme === "light" : false;
  const themeClass = mounted ? resolvedTheme || "light" : "light";

  const value: ThemeContextType = {
    theme,
    setTheme,
    resolvedTheme,
    systemTheme,
    toggleTheme,
    isDark,
    isLight,
    mounted,
    themeClass,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeContextProvider');
  }
  return context;
}

// Export a hook that works exactly like next-themes useTheme but with additional functionality
export function useAppTheme() {
  return useThemeContext();
}
