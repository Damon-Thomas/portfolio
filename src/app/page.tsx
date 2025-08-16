"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Page1 from "@/components/UI/Page1";
import Page2 from "@/components/UI/Page2";
import NextPage from "@/components/NextPage";
import CustomEase from "gsap/CustomEase";

export default function Home() {
  const container = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState<PageKey>("page1");

  function changePage() {
    setCurrentPage((prev) => (prev === "page1" ? "page2" : "page1"));
  }

  function animateContainer() {
    if (container.current) {
      const height = container.current.offsetHeight;
      const offset = 100; // adjust as needed for "a little over"
      const transformOrigin = `-${height + offset}px 50% `;

      gsap.to(container.current, {
        rotation: "-=360",
        duration: 2,
        ease: "power2.inOut",
        transformOrigin,
      });

      setTimeout(() => {
        changePage();
      }, 1000);
    }
  }

  const nextPage = <NextPage animate={animateContainer} />;

  const pages = {
    page1: <Page1>{nextPage}</Page1>,
    page2: <Page2>{nextPage}</Page2>,
  } as const;

  type PageKey = keyof typeof pages;

  useGSAP(() => {
    // if (container.current) {
    //   gsap.to(container.current, {
    //     rotation: 360,
    //     duration: 4,
    //     ease: "linear",
    //     transformOrigin: "500px 500px", // distance from the element’s own top-left
    //   });
    // }
  });

  return (
    <div
      className="bg-[#FF6D00] z-50 h-full w-full relative overflow-hidden"
      style={{ padding: "32px" }}
    >
      <div className="bg-neutral-900 h-full w-full rounded-3xl relative overflow-hidden">
        <div className="inner-shadow absolute  inset-0 z-10 w-full h-full pointer-events-none"></div>
        <div
          className="flex h-full w-full rounded-4xl text-black z-0"
          ref={container}
        >
          {pages[currentPage]}
        </div>
      </div>
    </div>
  );
}
