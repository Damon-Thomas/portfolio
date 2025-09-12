"use client";
import Sun from "@/components/icons/Sun";
import Moon from "@/components/icons/Moon";
import React, { useState } from "react";
import { useAppTheme } from "@/contexts/ThemeContext";

export default function ThemeSwitcher({
  inLine = false,
}: {
  inLine?: boolean;
}) {
  const [isSpinning, setIsSpinning] = useState(false);
  const { theme, toggleTheme, mounted } = useAppTheme();

  const handleToggle = () => {
    setIsSpinning(true);
    setTimeout(() => {
      setIsSpinning(false);
    }, 500);

    toggleTheme();
  };

  // Render a placeholder while not mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      // <header>
      <button
        className={`theme-switcher ${
          inLine ? "" : "fixed top-4 right-4"
        } hidden md:block p-2 bg-[var(--background)] border border-[var(--themeBorder)] rounded-full shadow-[var(--themeShadowColor)_0px_0px_10px_2px] transition-all duration-300`}
      >
        <div className="w-6 h-6"></div>
      </button>
      // </header>
    );
  }

  return (
    // <header>
    <button
      onClick={handleToggle}
      className={`theme-switcher cursor-pointer ${
        inLine ? "" : "fixed top-4 right-4"
      }  block p-2 bg-[var(--background)] text-[var(--foreground)] border border-[var(--themeBorder)] rounded-full shadow-[var(--themeShadowColor)_0px_0px_10px_2px] hover:shadow-[var(--themeShadowColor)_0px_0px_15px_3px] transition-visual z-50 ${
        isSpinning ? "theme-spin" : ""
      }`}
    >
      {theme === "dark" ? (
        <Sun className="w-6 h-6" />
      ) : (
        <Moon className="w-6 h-6" />
      )}
    </button>
    // </header>
  );
}
