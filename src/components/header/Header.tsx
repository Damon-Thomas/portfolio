"use client";

import { useEffect, useState } from "react";
import HeaderButton from "./HeaderButton";
import ThemeSwitcher from "./ThemeSwitcher";
import SidebarToggle from "./SidebarToggle";
import { useSmallScreen } from "@/contexts/ViewportContext";

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mounted, setMounted] = useState(false);
  const smallScreen = useSmallScreen();

  const headerLinks = [
    { name: "Home" },
    { name: "Services" },
    { name: "My Work" },
    { name: "Skills" },
    { name: "Background" },
    { name: "Contact" },
  ];

  // Ensure component is mounted before accessing window object
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Prevent rendering until mounted
  }

  // If small screen, use a sidebar menu
  if (smallScreen) {
    return (
      <>
        <SidebarToggle
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        <div
          className={`flex z-40 flex-col bg-background justify-between pb-10 pt-5 h-screen w-screen absolute top-0 left-0 p-2 `}
          style={{
            transform: sidebarOpen
              ? "translateX(0)"
              : "translateX(calc(-100vw - 4rem))",
            transition: "transform 500ms ease-in-out",
          }}
        >
          <div className="relative w-full h-10"></div>
          <div
            className={`grid w-full flex-1 mb-10 border-t-1 border-[var(--foreground)] grid-rows-[repeat(${headerLinks.length},minmax(0,1fr))]`}
          >
            {headerLinks.map((link) => (
              <HeaderButton key={link.name} small onClick={() => {}}>
                {link.name}{" "}
              </HeaderButton>
            ))}
          </div>
          <div className="w-full flex justify-center">
            <ThemeSwitcher inLine={true} />
          </div>
        </div>
      </>
    );
  }

  // Desktop Header
  return (
    <div
      className="flex z-40 fixed top-4 left-2 right-2 sm:left-4 sm:right-4 md:left-6 md:right-6 justify-between items-center rounded-2xl h-fit px-4 bg-[var(--background)] text-[var(--foreground)] border-b border-[var(--themeBorder)] shadow-[var(--themeShadowColor)_0px_0px_10px_2px] hover:shadow-[var(--themeShadowColor)_0px_0px_15px_3px] transition-visual
        "
    >
      <div className={`grid gap-4 grid-cols-[repeat(6,minmax(0,1fr))]`}>
        {headerLinks.map((link) => (
          <HeaderButton key={link.name} onClick={() => {}}>
            {link.name}{" "}
          </HeaderButton>
        ))}
      </div>
      <ThemeSwitcher inLine />
    </div>
  );
}
