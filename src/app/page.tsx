"use client";

import { useEffect, useState, useRef, use } from "react";
import Hero from "./components/Hero";

export default function Home() {
  const [heroActive, setHeroActive] = useState(false);
  const lastScrollY = useRef(0);
  const [smallScreen, setSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setSmallScreen(window.innerWidth < 800);
    };

    // Initial check
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        // Scrolling down
        setHeroActive(true);
      } else {
        // Scrolling up
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
      />
      <div className="p-4 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-16 gap-y-3 md:gap-y-6 w-full">
        <h3 className="text-xl md:text-3xl font-bold col-span-1 md:col-span-2 px-2">
          About me
        </h3>
        <p>
          I am a developer who loves to tinker and build. My curiosity has
          driven me to divert course form a career in leadership and management
          to one in software development.
        </p>

        <p>
          I have a passion for building things that solve problems, and I love
          to learn new technologies and techniques to improve my skills. I am
          always looking for new challenges and opportunities to grow as a
          developer.
        </p>

        <p>
          I've always loved being a part of a team. Software development let's
          me balance my curiosity and desire for deep challenging work witht the
          collaborative joys of team work.{" "}
        </p>
      </div>
      <div className="p-4 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-16 gap-y-3 md:gap-y-6 w-full">
        <div className="col-span-full flex-col flex gap-3 md:gap-6 ">
          <h3 className="text-xl md:text-3xl w-full font-bold  px-2">
            My Skills
          </h3>
          <p className="max-w-3xl">
            I've gained these skills through focused and intential study
            reinforced by real-world projects and applications. I take my
            personal development seriously, and I strive to develop and deepen
            my understanding of these skills every day.
          </p>
        </div>
        <h4 className="font-bold text-lg col-span-full">Essentials</h4>
        <ul className="col-span-full grid gap-4 [grid-template-columns:repeat(auto-fit,150px)] justify-start px-3 md:px-6">
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>Node.js</li>
          <li>SQL</li>
          <li>Git</li>
          <li>Github</li>
        </ul>

        <h4 className="font-bold text-lg col-span-full">Expanded</h4>
        <ul className="col-span-full grid gap-4 [grid-template-columns:repeat(auto-fit,150px)] justify-start px-3 md:px-6">
          <li>React</li>
          <li>Typescript</li>
          <li>PostgreSQL</li>
          <li>Next.js </li>
          <li>Vite</li>
          <li>Tailwind CSS</li>
          <li>Express.js</li>
          <li>Prisma ORM</li>
          <li>JWT | BCrypt | OAuth</li>
          <li>Jest | SuperTest</li>
        </ul>
      </div>
      <div className="p-4 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-16 gap-y-3 md:gap-y-6 w-full">
        <h3 className="text-xl md:text-3xl font-bold col-span-1 md:col-span-2 px-2">
          What I'm Building
        </h3>
        <p>
          I'm always working on something. Take a look at some of my finished
          projects and contracts.
        </p>
      </div>
    </div>
  );
}
