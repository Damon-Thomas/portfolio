"use client";

import { useEffect, useState } from "react";
import HeaderButton from "./HeaderButton";
import ThemeSwitcher from "./ThemeSwitcher";
import SidebarToggle from "./SidebarToggle";

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [smallScreen, setSmallScreen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted before accessing window object
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setSmallScreen(window.innerWidth < 850); // Example breakpoint for small screens
      if (window.innerWidth >= 850) {
        setSidebarOpen(false); // Close sidebar on larger screens
        setSidebarOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener("resize", handleResize);
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
          className={`flex flex-col bg-background justify-between pb-10 pt-5 h-screen w-screen absolute top-0 left-0 p-2 `}
          style={{
            transform: sidebarOpen
              ? "translateX(0)"
              : "translateX(calc(-100vw - 4rem))",
            transition: "transform 500ms ease-in-out",
          }}
        >
          <div className="relative w-full h-10"></div>
          <div className="grid grid-rows-5 w-full flex-1 mb-10 border-t-1 border-[var(--foreground)] ">
            <HeaderButton small onClick={() => {}}>
              About{" "}
            </HeaderButton>
            <HeaderButton small onClick={() => {}}>
              Projects{" "}
            </HeaderButton>
            <HeaderButton small onClick={() => {}}>
              Open Source{" "}
            </HeaderButton>
            <HeaderButton small onClick={() => {}}>
              Experience{" "}
            </HeaderButton>
            <HeaderButton small onClick={() => {}}>
              Skills{" "}
            </HeaderButton>
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
      className="flex justify-between items-center rounded-2xl h-fit px-4 mx-2 sm:mx-4 md:mx-6 bg-[var(--background)] text-[var(--foreground)] border-b border-[var(--themeBorder)] shadow-[var(--themeShadowColor)_0px_0px_10px_2px] hover:shadow-[var(--themeShadowColor)_0px_0px_15px_3px] transition-visual
        "
    >
      <div className="grid grid-cols-5 gap-4">
        <HeaderButton onClick={() => {}}>About </HeaderButton>
        <HeaderButton onClick={() => {}}>Projects </HeaderButton>
        <HeaderButton onClick={() => {}}>Open Source </HeaderButton>
        <HeaderButton onClick={() => {}}>Experience </HeaderButton>
        <HeaderButton onClick={() => {}}>Skills </HeaderButton>
      </div>
      <ThemeSwitcher inLine />
    </div>
  );
}
