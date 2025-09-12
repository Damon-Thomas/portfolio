"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import * as THREE from "three";

declare global {
  interface Window {
    THREE: typeof THREE;
  }
}

export default function VantaBirds({ children }: { children?: React.ReactNode }) {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);
  const { theme } = useTheme();

  useEffect(() => {
    // Dynamic imports for client-side only
    const loadVanta = async () => {
      if (typeof window !== "undefined") {
        // Set THREE.js globally
        window.THREE = THREE;
        
        // Import Vanta
        const VANTA = await import("vanta/dist/vanta.birds.min.js");
        
        if (vantaRef.current && !vantaEffect.current) {
          // Get CSS variables for theme colors
          const root = document.documentElement;
          const styles = getComputedStyle(root);
          const backgroundColor = styles.getPropertyValue("--background").trim();
          const foregroundColor = styles.getPropertyValue("--foreground").trim();
          const primaryColor = styles.getPropertyValue("--primary").trim();

          // Convert hex colors to numbers for Vanta
          const hexToNumber = (hex: string) => {
            return parseInt(hex.replace("#", ""), 16);
          };

          vantaEffect.current = VANTA.default({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            backgroundColor: hexToNumber(backgroundColor),
            color1: hexToNumber(primaryColor),
            color2: hexToNumber(foregroundColor),
            birdSize: 1.5,
            wingSpan: 20,
            speedLimit: 5,
            separation: 20,
            alignment: 20,
            cohesion: 20,
            quantity: 3
          });
        }
      }
    };

    loadVanta();

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  // Update colors when theme changes
  useEffect(() => {
    if (vantaEffect.current && typeof window !== "undefined") {
      const root = document.documentElement;
      const styles = getComputedStyle(root);
      const backgroundColor = styles.getPropertyValue("--background").trim();
      const foregroundColor = styles.getPropertyValue("--foreground").trim();
      const primaryColor = styles.getPropertyValue("--primary").trim();

      const hexToNumber = (hex: string) => {
        return parseInt(hex.replace("#", ""), 16);
      };

      vantaEffect.current.setOptions({
        backgroundColor: hexToNumber(backgroundColor),
        color1: hexToNumber(primaryColor),
        color2: hexToNumber(foregroundColor),
      });
    }
  }, [theme]);

  return (
    <div 
      ref={vantaRef} 
      className="relative w-full h-full min-h-[500px]"
      style={{ transition: "background-color var(--visual-transition-duration) var(--visual-transition-timing)" }}
    >
      {children}
    </div>
  );
}
