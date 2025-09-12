"use client";

import Image from "next/image";
import { useAppTheme } from "@/contexts/ThemeContext";

interface ImageSource {
  src: string;
  theme: "light" | "dark" | "system";
}

interface MultiThemedImageProps {
  sources: ImageSource[];
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
  fallbackSrc?: string; // Fallback image if no theme matches
}

export default function MultiThemedImage({
  sources,
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
  fallbackSrc,
}: MultiThemedImageProps) {
  const { resolvedTheme, mounted } = useAppTheme();

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

  // Find the appropriate image source based on current theme
  const getCurrentSrc = () => {
    // First try to find exact theme match
    const exactMatch = sources.find((source) => source.theme === resolvedTheme);
    if (exactMatch) return exactMatch.src;

    // Fallback to light theme if available
    const lightMatch = sources.find((source) => source.theme === "light");
    if (lightMatch) return lightMatch.src;

    // Use fallback or first available source
    return fallbackSrc || sources[0]?.src || "";
  };

  const currentSrc = getCurrentSrc();

  return (
    <>
      {/* Preload all theme images for smooth switching */}
      {sources.map((source, index) => (
        <link key={index} rel="preload" as="image" href={source.src} />
      ))}

      <Image
        src={currentSrc}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        className={`transition-all duration-300 ease-in-out ${className}`}
        priority={priority}
        sizes={sizes}
        style={style}
        quality={quality}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
      />
    </>
  );
}
