"use client";

import { useEffect, useState, useRef } from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Building from "../components/Building";
import Collab from "@/components/Collab";

export default function Home() {
  const [heroActive, setHeroActive] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const lastScrollY = useRef(0);
  const [smallScreen, setSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => setSmallScreen(window.innerWidth < 800);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setAtTop(window.scrollY === 0);

      if (window.scrollY > lastScrollY.current) {
        setHeroActive(true);
      } else {
        setHeroActive(false);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="flex flex-col items-center justify-start min-h-screen text-foreground bg-background">
      <Hero
        heroActive={heroActive}
        setHeroActive={setHeroActive}
        smallScreen={smallScreen}
        atTop={atTop}
      />
      <About />
      <Skills />
      <Building />
      <Collab />
    </div>
  );
}
