"use client";

import Image from "next/image";
import { useAppTheme } from "@/contexts/ThemeContext";
import { useState, useEffect, useRef } from "react";

interface ThemedImageWithSmoothShutterProps {
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

export default function ThemedImageWithSmoothShutter({
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
}: ThemedImageWithSmoothShutterProps) {
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
          width: fill ? "100%" : width,
          height: fill ? "100%" : height,
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

      <div className="relative w-full h-full" style={style}>
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
        {isShuttering && (
          <>
            {shutterStyle === "horizontal" && (
              <>
                <div
                  className="absolute top-0 left-0 w-full h-1/2 bg-black z-10"
                  style={{
                    animation: `shutterTopClose ${shutterDuration}ms ease-in-out`,
                  }}
                />
                <div
                  className="absolute bottom-0 left-0 w-full h-1/2 bg-black z-10"
                  style={{
                    animation: `shutterBottomClose ${shutterDuration}ms ease-in-out`,
                  }}
                />
              </>
            )}

            {shutterStyle === "vertical" && (
              <>
                <div
                  className="absolute top-0 left-0 w-1/2 h-full bg-black z-10"
                  style={{
                    animation: `shutterLeftClose ${shutterDuration}ms ease-in-out`,
                  }}
                />
                <div
                  className="absolute top-0 right-0 w-1/2 h-full bg-black z-10"
                  style={{
                    animation: `shutterRightClose ${shutterDuration}ms ease-in-out`,
                  }}
                />
              </>
            )}

            {shutterStyle === "iris" && (
              <div
                className="absolute top-1/2 left-1/2 bg-black z-10 rounded-full transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  animation: `irisShutter ${shutterDuration}ms ease-in-out`,
                }}
              />
            )}

            {shutterStyle === "wipe" && (
              <div
                className="absolute top-0 left-0 w-full h-full bg-black z-10"
                style={{
                  animation: `wipeShutter ${shutterDuration}ms ease-in-out`,
                }}
              />
            )}
          </>
        )}
      </div>

      {/* CSS Keyframes for shutter animations */}
      <style jsx>{`
        @keyframes shutterTopClose {
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

        @keyframes shutterBottomClose {
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

        @keyframes shutterLeftClose {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @keyframes shutterRightClose {
          0% {
            transform: translateX(100%);
          }
          50% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes irisShutter {
          0% {
            width: 0;
            height: 0;
            opacity: 0;
          }
          25% {
            opacity: 1;
          }
          50% {
            width: 200%;
            height: 200%;
            opacity: 1;
          }
          75% {
            opacity: 1;
          }
          100% {
            width: 0;
            height: 0;
            opacity: 0;
          }
        }

        @keyframes wipeShutter {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </>
  );
}
