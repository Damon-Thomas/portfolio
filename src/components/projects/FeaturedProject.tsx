"use client";

import { useAppTheme } from "@/contexts/ThemeContext";
import { getTechStackIcon } from "@/utils/techStack";
import InfiniteLooper from "../utils/InfiniteLooper";

export default function FeaturedProject({
  title,
  description,
  features,
  techStack,
  video,
  image1,
  image2,
  image3,
  githubUrl,
  hostedLink,
}: {
  title: string;
  description: string;
  features: string[];
  techStack: string[];
  video: string;
  image1: string;
  image2?: string;
  image3?: string;
  githubUrl: string;
  hostedLink: string;
}) {
  const { theme } = useAppTheme();
  return (
    //Featured Project Section

    <div className="flex gap-2 sm:gap-4 p-2 sm:p-4 md:p-6 rounded-lg ">
      {/* Left Column */}
      <div className="flex flex-col gap-2 sm:gap-4 md:gap-6">
        {/* Title Container */}
        <div className=" flex flex-col justify-start ">
          <div className=" p-2 sm:p-4 md:p-6 ">
            <h2 className="text-2xl sm:text-4xl md:text-8xl font-black text-left">
              {title}
            </h2>
            <p className="text-base sm:text-xl md:text-2xl font-bold text-left">
              {description}
            </p>
          </div>
        </div>
        {/* Features */}
        <div className=" flex flex-col justify-center">
          <div className=" p-2 sm:p-4">
            <h3 className="text-left font-extrabold text-lg sm:text-2xl md:text-4xl">
              Features
            </h3>
            <ul className="flex flex-col w-full !list-disc ml-4">
              {features.map((feature) => (
                <li className="text-left text-lg">{feature}</li>
              ))}
            </ul>
          </div>
        </div>
        {/* Landing Image */}
        <div className=" p-4">
          <img
            src={image1}
            alt=""
            className="border-2 border-foreground h-full w-full object-contain rounded-lg"
          />
        </div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-2 sm:gap-4 md:gap-6">
        {/* Video */}
        <div className=" flex flex-col justify-center  ">
          <div className="baseShadow hover:cursor-pointer mx-4 h-fit">
            {video && (
              <video
                src={video}
                typeof="video/webm"
                className="rounded-lg"
                autoPlay
                controls
                loop
                playsInline
                muted
              />
            )}
          </div>
        </div>
        {/* Tech Stack */}
        <div className="flex flex-col p-2 sm:pr-4 gap-2 sm:gap-4 md:gap-6">
          <h3 className="text-left font-extrabold text-lg sm:text-2xl md:text-4xl">
            Tech and Tools
          </h3>
          <div className="h-14 relative  ">
            <div className="flex absolute left-[calc(-75vw+50%)] w-[150vw] p-2 sm:p-4 bg-[var(--banner)] -z-1">
              <InfiniteLooper
                speed={20}
                direction="right"
                children={techStack.map((tech) => (
                  <div className="text-left text-lg">
                    <img
                      src={getTechStackIcon(tech)}
                      className={`w-10 h-10 filter  `}
                    />{" "}
                  </div>
                ))}
              />
            </div>
          </div>
        </div>
        {/* Image 2 */}
        <div className="grid grid-cols-5 gap-2 sm:gap-4 md:gap-6">
          <div className="col-span-3 flex flex-col justify-center overflow-hidden">
            {image2 && (
              <img
                src={image2}
                alt={`${title} screenshot 2`}
                className="rounded-lg"
              />
            )}
          </div>
          {/* Mobile Image */}
          <div className="col-span-2">
            {
              <img
                src={image3}
                alt={`${title} screenshot 3`}
                className="rounded-lg"
              />
            }
          </div>
        </div>
      </div>
    </div>
  );
}
