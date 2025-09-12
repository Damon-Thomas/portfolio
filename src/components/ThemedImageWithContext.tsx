"use client";

import Image from "next/image";
import { useAppTheme } from "@/contexts/ThemeContext";
import { useState, useEffect, useRef } from "react";

interface ThemedImageWithContextProps {
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
  shutterDuration?: number; // Duration of shutter animation in ms
}

export default function ThemedImageWithContext({
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
}: ThemedImageWithContextProps) {
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

  return (
    <>
      {/* Preload both images for smooth switching */}
      <link rel="preload" as="image" href={lightSrc} />
      <link rel="preload" as="image" href={darkSrc} />

      <div
        className="relative overflow-hidden"
        style={{
          width: fill ? "100%" : width,
          height: fill ? "100%" : height,
          ...style,
        }}
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

        {/* Camera Shutter Overlay */}
        {isShuttering && (
          <>
            {/* Top shutter blade */}
            <div
              className="absolute top-0 left-0 w-full bg-black z-10"
              style={{
                height: "50%",
                animation: `shutterTop ${shutterDuration}ms ease-in-out`,
              }}
            />
            {/* Bottom shutter blade */}
            <div
              className="absolute bottom-0 left-0 w-full bg-black z-10"
              style={{
                height: "50%",
                animation: `shutterBottom ${shutterDuration}ms ease-in-out`,
              }}
            />
          </>
        )}
      </div>

      {/* CSS Keyframes for shutter animation */}
      <style jsx>{`
        @keyframes shutterTop {
          0% {
            transform: translateY(-100%);
          }
          50% {
            transform: translateY(0%);
          }
          100% {
            transform: translateY(-100%);
          }
        }

        @keyframes shutterBottom {
          0% {
            transform: translateY(100%);
          }
          50% {
            transform: translateY(0%);
          }
          100% {
            transform: translateY(100%);
          }
        }
      `}</style>
    </>
  );
}
