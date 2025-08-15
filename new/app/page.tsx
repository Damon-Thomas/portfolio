"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const text = "Full Stack Developer";
const gsapClasses = [
  "a1",
  "a2",
  "a3",
  "a4",
  "a5",
  "a6",
  "a7",
  "a8",
  "a9",
  "a10",
  "a11",
  "a12",
  "a13",
  "a14",
  "a15",
  "a16",
  "a17",
  "a18",
  "a19",
  "a20",
];

export default function Home() {
  const container = useRef(null);

  useGSAP(
    () => {
      let tl = gsap.timeline();

      tl.from(
        ".a1",
        { x: -200, opacity: 0, duration: 0.5, ease: "power2.out" },
        "-=0.3"
      ); // F
      tl.from(
        ".a2",
        { y: -100, scale: 0.5, opacity: 0, duration: 0.4, ease: "back.out(2)" },
        "-=0.3"
      ); // u
      tl.from(
        ".a3",
        { rotation: 180, opacity: 0, duration: 0.6, ease: "power1.out" },
        "-=0.3"
      ); // l
      tl.from(
        ".a4",
        { x: 200, opacity: 0, duration: 0.5, ease: "power2.out" },
        "-=0.3"
      ); // l
      tl.from(
        ".a5",
        { scale: 0.1, opacity: 0, duration: 0.3, ease: "power4.out" },
        "-=0.3"
      ); // space
      tl.from(
        ".a6",
        { y: 150, opacity: 0, duration: 0.5, ease: "power2.out" },
        "-=0.3"
      ); // S
      tl.from(
        ".a7",
        {
          x: -150,
          scale: 1.5,
          opacity: 0,
          duration: 0.4,
          ease: "back.out(1.7)",
        },
        "-=0.3"
      ); // t
      tl.from(
        ".a8",
        { rotation: -90, opacity: 0, duration: 0.5, ease: "power1.out" },
        "-=0.3"
      ); // a
      tl.from(
        ".a9",
        { y: -200, scale: 0.7, opacity: 0, duration: 0.6, ease: "power2.out" },
        "-=0.3"
      ); // c
      tl.from(
        ".a10",
        { x: 100, opacity: 0, duration: 0.4, ease: "power2.out" },
        "-=0.3"
      ); // k
      tl.from(
        ".a11",
        { scale: 0.1, opacity: 0, duration: 0.3, ease: "power4.out" },
        "-=0.3"
      ); // space
      tl.from(
        ".a12",
        { y: 100, rotation: 45, opacity: 0, duration: 0.5, ease: "power2.out" },
        "-=0.3"
      ); // D
      tl.from(
        ".a13",
        {
          x: -100,
          scale: 1.2,
          opacity: 0,
          duration: 0.4,
          ease: "back.out(1.7)",
        },
        "-=0.3"
      ); // e
      tl.from(
        ".a14",
        { rotation: 360, opacity: 0, duration: 0.6, ease: "power1.out" },
        "-=0.3"
      ); // v
      tl.from(
        ".a15",
        { y: -150, scale: 0.8, opacity: 0, duration: 0.5, ease: "power2.out" },
        "-=0.3"
      ); // e
      tl.from(
        ".a16",
        { x: 150, opacity: 0, duration: 0.4, ease: "power2.out" },
        "-=0.3"
      ); // l
      tl.from(
        ".a17",
        { scale: 0.3, opacity: 0, duration: 0.3, ease: "power4.out" },
        "-=0.3"
      ); // o
      tl.from(
        ".a18",
        {
          y: 200,
          rotation: -45,
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.3"
      ); // p
      tl.from(
        ".a19",
        {
          x: -200,
          scale: 1.1,
          opacity: 0,
          duration: 0.4,
          ease: "back.out(1.7)",
        },
        "-=0.3"
      ); // e
      tl.from(
        ".a20",
        {
          y: 300,
          scale: 0.5,
          rotation: 720,
          opacity: 0,
          duration: 0.7,
          ease: "bounce.out",
        },
        "-=0.3"
      ); // r
    },
    { scope: container }
  );

  const spans = text.split("").map((char, i) => (
    <span key={i} className={`${gsapClasses[i] || ""} inline-block`}>
      {char === " " ? "\u00A0" : char}
    </span>
  ));

  return (
    <div className="flex" ref={container}>
      <p className="text-5xl font-black">{spans}</p>
    </div>
  );
}
