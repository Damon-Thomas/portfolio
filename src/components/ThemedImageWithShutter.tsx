"use client";

import Image from "next/image";
import { useAppTheme } from "@/contexts/ThemeContext";
import { useState, useEffect, useRef } from "react";

interface ThemedImageWithShutterProps {
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
  placeholder?: "blur" | "empty";
  blurDataURL?: string;
  shutterDuration?: number;
  shutterStyle?: "horizontal" | "vertical" | "iris" | "wipe";
}

export default function ThemedImageWithShutter({
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
  placeholder = "empty",
  blurDataURL,
  shutterDuration = 400,
  shutterStyle = "horizontal",
}: ThemedImageWithShutterProps) {
  const { resolvedTheme, mounted } = useAppTheme();
  const [isShuttering, setIsShuttering] = useState(false);
  const [displaySrc, setDisplaySrc] = useState(lightSrc);
  const prevThemeRef = useRef(resolvedTheme);

  // Handle theme changes with shutter effect
  useEffect(() => {
    if (!mounted) return;

    const newSrc = resolvedTheme === "dark" ? darkSrc : lightSrc;
    
    // Only trigger shutter if theme actually changed and component is mounted
    if (prevThemeRef.current !== resolvedTheme && prevThemeRef.current !== undefined) {
      setIsShuttering(true);
      
      // Change image source at the midpoint of the shutter animation
      setTimeout(() => {
        setDisplaySrc(newSrc);
      }, shutterDuration / 2);
      
      // End shutter animation
      setTimeout(() => {
        setIsShuttering(false);
      }, shutterDuration);
    } else {
      // Initial load or no theme change
      setDisplaySrc(newSrc);
    }
    
    prevThemeRef.current = resolvedTheme;
  }, [resolvedTheme, mounted, lightSrc, darkSrc, shutterDuration]);

  // Show placeholder while not mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <div
        className={`bg-gray-200 animate-pulse rounded ${className}`}
        style={{
          width: fill ? undefined : width,
          height: fill ? undefined : height,
          ...style,
        }}
      />
    );
  }

  const getShutterClasses = () => {
    const duration = `duration-[${shutterDuration}ms]`;
    
    switch (shutterStyle) {
      case "horizontal":
        return {
          top: `absolute top-0 left-0 w-full h-1/2 bg-black z-10 transition-transform ${duration} ease-in-out ${
            isShuttering ? 'translate-y-0' : '-translate-y-full'
          }`,
          bottom: `absolute bottom-0 left-0 w-full h-1/2 bg-black z-10 transition-transform ${duration} ease-in-out ${
            isShuttering ? 'translate-y-0' : 'translate-y-full'
          }`,
        };
      case "vertical":
        return {
          left: `absolute top-0 left-0 w-1/2 h-full bg-black z-10 transition-transform ${duration} ease-in-out ${
            isShuttering ? 'translate-x-0' : '-translate-x-full'
          }`,
          right: `absolute top-0 right-0 w-1/2 h-full bg-black z-10 transition-transform ${duration} ease-in-out ${
            isShuttering ? 'translate-x-0' : 'translate-x-full'
          }`,
        };
      case "iris":
        return {
          iris: `absolute top-1/2 left-1/2 bg-black z-10 rounded-full transition-all ${duration} ease-in-out transform -translate-x-1/2 -translate-y-1/2 ${
            isShuttering ? 'w-[200%] h-[200%]' : 'w-0 h-0'
          }`,
        };
      case "wipe":
        return {
          wipe: `absolute top-0 left-0 w-full h-full bg-black z-10 transition-transform ${duration} ease-in-out ${
            isShuttering ? 'translate-x-0' : '-translate-x-full'
          }`,
        };
      default:
        return {};
    }
  };

  const shutterClasses = getShutterClasses();

  return (
    <>
      {/* Preload both images for smooth switching */}
      <link rel="preload" as="image" href={lightSrc} />
      <link rel="preload" as="image" href={darkSrc} />

      <div 
        className="relative overflow-hidden w-full h-full"
        style={style}
      >
        <Image
          src={displaySrc}
          alt={alt}
          width={fill ? undefined : width}
          height={fill ? undefined : height}
          fill={fill}
          className={className}
          priority={priority}
          sizes={sizes}
          quality={quality}
          placeholder={placeholder}
          blurDataURL={blurDataURL}
        />
        
        {/* Camera Shutter Overlay */}
        {shutterStyle === "horizontal" && (
          <>
            <div className={shutterClasses.top} />
            <div className={shutterClasses.bottom} />
          </>
        )}
        
        {shutterStyle === "vertical" && (
          <>
            <div className={shutterClasses.left} />
            <div className={shutterClasses.right} />
          </>
        )}
        
        {shutterStyle === "iris" && (
          <div className={shutterClasses.iris} />
        )}
        
        {shutterStyle === "wipe" && (
          <div className={shutterClasses.wipe} />
        )}
      </div>
    </>
  );
}
