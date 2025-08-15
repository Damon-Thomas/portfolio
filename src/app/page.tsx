"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Page1 from "@/components/UI/Page1";
import Page2 from "@/components/UI/Page2";

export default function Home() {
  const container = useRef(null);
  const [currentPage, setCurrentPage] = useState<PageKey>("page1");

  function changePage() {
    setCurrentPage((prev) => (prev === "page1" ? "page2" : "page1"));
  }

  const pages = {
    page1: <Page1 changePage={changePage} />,
    page2: <Page2 changePage={changePage} />,
  } as const;

  type PageKey = keyof typeof pages;

  useGSAP();

  return (
    <div className="flex h-full w-full text-black" ref={container}>
      {pages[currentPage]}
    </div>
  );
}
