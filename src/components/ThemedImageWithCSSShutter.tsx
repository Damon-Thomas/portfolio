"use client";

import Image from "next/image";
import { useAppTheme } from "@/contexts/ThemeContext";
import { useState, useEffect, useRef } from "react";
import "./shutter-animations.css";

interface ThemedImageWithCSSShutterProps {
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

export default function ThemedImageWithCSSShutter({
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
}: ThemedImageWithCSSShutterProps) {
  const { resolvedTheme, mounted } = useAppTheme();
  const [isShuttering, setIsShuttering] = useState(false);
  const [displaySrc, setDisplaySrc] = useState(lightSrc);
  const prevThemeRef = useRef(resolvedTheme);

  // Handle theme changes with shutter effect
  useEffect(() => {
    if (!mounted) return;

    const newSrc = resolvedTheme === "dark" ? darkSrc : lightSrc;

    // Only trigger shutter if theme actually changed and component is mounted
    if (
      prevThemeRef.current !== resolvedTheme &&
      prevThemeRef.current !== undefined
    ) {
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

  const containerClass = `shutter-container ${
    isShuttering ? `shutter-${shutterStyle}-active` : ""
  }`;

  return (
    <>
      {/* Preload both images for smooth switching */}
      <link rel="preload" as="image" href={lightSrc} />
      <link rel="preload" as="image" href={darkSrc} />

      <div
        className={containerClass}
        style={
          {
            width: fill ? "100%" : width,
            height: fill ? "100%" : height,
            "--shutter-duration": `${shutterDuration}ms`,
            ...style,
          } as React.CSSProperties
        }
      >
        <Image
          src={displaySrc}
          alt={alt}
          width={fill ? undefined : width}
          height={fill ? undefined : height}
          fill={fill}
          className={`transition-all duration-300 ease-in-out ${className}`}
          priority={priority}
          sizes={sizes}
          quality={quality}
          placeholder={placeholder}
          blurDataURL={blurDataURL}
        />

        {/* Camera Shutter Overlays */}
        {isShuttering && (
          <>
            {shutterStyle === "horizontal" && (
              <>
                <div className="shutter-overlay shutter-top" />
                <div className="shutter-overlay shutter-bottom" />
              </>
            )}

            {shutterStyle === "vertical" && (
              <>
                <div className="shutter-overlay shutter-left" />
                <div className="shutter-overlay shutter-right" />
              </>
            )}

            {shutterStyle === "iris" && (
              <div className="shutter-overlay shutter-iris" />
            )}

            {shutterStyle === "wipe" && (
              <div className="shutter-overlay shutter-wipe" />
            )}
          </>
        )}
      </div>
    </>
  );
}
