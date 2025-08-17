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
  const cover = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState<PageKey>("page1");

  function changePage() {
    setCurrentPage((prev) => (prev === "page1" ? "page2" : "page1"));
  }

  function animateContainer() {
    if (container.current) {
      const height = container.current.offsetHeight;
      const offset = 0; // adjust as needed for "a little over"
      const transformOrigin = `-${height + offset}px 50% `;

      // gsap.to(container.current, {
      //   rotation: "-=360",
      //   duration: 1,
      //   ease: "power2.inOut",
      //   transformOrigin,
      // });

      //     gsap.to(container.current, {
      //       rotation: "-=360",
      //       duration: 1,
      //       ease: "back.in.out(4)",
      //       transformOrigin,
      //     });

      //     setTimeout(() => {
      //       changePage();
      //     }, 500);
      //   }
      // }

      // Create a timeline for complex animation
      const tl = gsap.timeline();
      //fix animation
      tl.to(container.current, {
        rotation: "+=180",
        duration: 0.5,
        ease: "power2.in.out",
        transformOrigin,
      })
        .to(
          cover.current,
          {
            rotation: "+=180",
            duration: 0.5,
            ease: "power2.in.out",
            transformOrigin,
          },
          "<"
        )
        .to(container.current, {
          rotation: "+=180",
          duration: 0.5,
          ease: "power2.in",
          transformOrigin,
        })
        .to(cover.current, {
          rotation: "-=180",
          duration: 0.5,
          ease: "power2.in",
          transformOrigin,
        });
      // .to(cover.current, {
      //   y: "+100%",
      //   duration: 0.3,
      //   ease: "power2.in",
      // });
      // .to(container.current, {
      //   rotation: "+=3",
      //   duration: 0.5,
      //   ease: "bounce.out",
      //   transformOrigin,
      // });

      setTimeout(() => {
        changePage();
      }, 500); // adjusted timing for longer animation
    }
  }

  const nextPage = <NextPage animate={animateContainer} />;

  const pages = {
    page1: <Page1>{nextPage}</Page1>,
    page2: <Page2>{nextPage}</Page2>,
  } as const;

  type PageKey = keyof typeof pages;

  useGSAP(() => {
    if (cover.current) {
      const height = cover.current.offsetHeight;
      const offset = 100; // adjust as needed for "a little over"
      const transformOrigin = `-${height + offset}px 50% `;
      gsap.to(cover.current, {
        rotation: "-=180",
        duration: 1,
        ease: "linear",
        transformOrigin: transformOrigin,
      });
    }
  });

  return (
    <div
      className="bg-[#FF6D00] z-50 h-full w-full relative overflow-hidden"
      style={{ padding: "32px" }}
    >
      <div className="bg-neutral-900 h-full w-full rounded-3xl relative overflow-hidden">
        <div
          className="inner-shadow absolute  inset-0 z-20 w-full h-full pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.5'/%3E%3C/svg%3E")`,
            mixBlendMode: "multiply",
          }}
        ></div>
        <div
          ref={cover}
          className="cover absolute w-full h-full z-10 bg-neutral-900"
        ></div>
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
