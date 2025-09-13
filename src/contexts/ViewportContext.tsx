"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';

interface ViewportContextType {
  smallScreen: boolean;
  screenWidth: number;
  screenHeight: number;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  breakpoints: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
}

const ViewportContext = createContext<ViewportContextType | undefined>(undefined);

const BREAKPOINTS = {
  mobile: 850,   // Your current smallScreen breakpoint
  tablet: 1024,
  desktop: 1440,
};

export function ViewportContextProvider({ children }: { children: React.ReactNode }) {
  const [screenWidth, setScreenWidth] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    };

    // Initial setup
    handleResize();
    setMounted(true);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent hydration mismatch by returning default values until mounted
  const safeScreenWidth = mounted ? screenWidth : 0;
  const safeScreenHeight = mounted ? screenHeight : 0;

  const smallScreen = safeScreenWidth < BREAKPOINTS.mobile;
  const isMobile = safeScreenWidth < BREAKPOINTS.mobile;
  const isTablet = safeScreenWidth >= BREAKPOINTS.mobile && safeScreenWidth < BREAKPOINTS.tablet;
  const isDesktop = safeScreenWidth >= BREAKPOINTS.tablet;

  const value: ViewportContextType = {
    smallScreen,
    screenWidth: safeScreenWidth,
    screenHeight: safeScreenHeight,
    isMobile,
    isTablet,
    isDesktop,
    breakpoints: BREAKPOINTS,
  };

  return (
    <ViewportContext.Provider value={value}>
      {children}
    </ViewportContext.Provider>
  );
}

export function useViewportContext() {
  const context = useContext(ViewportContext);
  if (context === undefined) {
    throw new Error('useViewportContext must be used within a ViewportContextProvider');
  }
  return context;
}

// Export a simpler hook that just returns the smallScreen boolean for easy migration
export function useSmallScreen() {
  const { smallScreen } = useViewportContext();
  return smallScreen;
}

// Export a hook for screen size with common breakpoints
export function useViewport() {
  return useViewportContext();
}
