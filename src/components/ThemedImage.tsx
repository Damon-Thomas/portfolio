"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface ThemedImageProps {
  lightSrc: string;
  darkSrc: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  fill?: boolean;
  style?: React.CSSProperties;
  quality?: number;
}

export default function ThemedImage({
  lightSrc,
  darkSrc,
  alt,
  width,
  height,
  className = "",
  priority = false,
  sizes,
  fill = false,
  style,
  quality = 75,
}: ThemedImageProps) {
  const [mounted, setMounted] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<string>("light");

  useEffect(() => {
    setMounted(true);
    
    // Get the current theme from the document class or data attribute
    const getTheme = () => {
      if (document.documentElement.classList.contains('dark')) {
        return 'dark';
      }
      return 'light';
    };

    setCurrentTheme(getTheme());

    // Create observer to watch for theme changes
    const observer = new MutationObserver(() => {
      setCurrentTheme(getTheme());
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class', 'data-theme'],
    });

    return () => observer.disconnect();
  }, []);

  // Show placeholder while not mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <div 
        className={`bg-gray-200 animate-pulse ${className}`}
        style={{ width, height, ...style }}
      />
    );
  }

  const currentSrc = currentTheme === "dark" ? darkSrc : lightSrc;

  return (
    <>
      {/* Preload both images for smooth switching */}
      <link rel="preload" as="image" href={lightSrc} />
      <link rel="preload" as="image" href={darkSrc} />
      
      <Image
        src={currentSrc}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        className={`transition-opacity duration-300 ${className}`}
        priority={priority}
        sizes={sizes}
        style={style}
        quality={quality}
      />
    </>
  );
}
