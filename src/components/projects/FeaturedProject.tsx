"use client";

import { useAppTheme } from "@/contexts/ThemeContext";
import { getTechStackIcon } from "@/utils/techStack";
import InfiniteLooper from "../utils/InfiniteLooper";
import GitHubLink from "../icons/GitHubLink";
import IconLinkCreator from "../icons/IconLinkCreator";

export default function FeaturedProject({
  title,
  description,
  features,
  mainTech,
  techStack,
  video,
  image1,
  image2,
  image3,
  githubUrl,
  hostedLink,
  brandImage,
  featured = true,
}: {
  title: string;
  description: string;
  features: string[];
  mainTech: string[];
  techStack: string[];
  video: string;
  image1: string;
  image2?: string;
  image3?: string;
  githubUrl: string;
  hostedLink: string;
  brandImage?: string;
  featured?: boolean;
}) {
  // const { theme } = useAppTheme();
  return (
    //Featured Project Section

    <div className="flex relative gap-2 border-b-2 sm:gap-4 p-2 sm:p-4 md:p-6 ">
      {featured && (
        <div className="absolute -translate-6 overflow-hidden w-30 h-30">
          <div className="bg-foreground text-background flex flex-col justify-end items-center font-black -rotate-45 px-10 h-20 w-40 absolute -top-5 -left-15">
            <p>Featured</p>
          </div>
        </div>
      )}
      {/* Left Column */}
      <div className="flex flex-1 flex-col gap-2 sm:gap-4 md:gap-6">
        {/* Title Container */}
        <div className=" flex flex-col justify-start ">
          <div className=" p-2 sm:p-4 md:p-6 ">
            <h2 className="text-xl sm:text-4xl md:text-7xl font-black text-left">
              {title}
            </h2>
            <p className="text-base sm:text-xl md:text-2xl font-bold text-left">
              {description}
            </p>
          </div>
        </div>
        {/* Links */}
        <div className="flex flex-col gap-2 sm:gap-4 md:gap-6">
          <div className="flex justify-baseline items-center">
            {brandImage && (
              <IconLinkCreator
                message="Visit the Website"
                path={brandImage}
                url={hostedLink}
                alt={`${title} website redirect link`}
                className="ml-6 w-fit"
              />
            )}
          </div>

          <div className="flex justify-baseline items-center">
            {githubUrl && (
              <GitHubLink
                url={githubUrl}
                message="Checkout the Code"
                className="ml-6 w-fit"
              />
            )}
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
        {/* Features and image 2 */}

        <div className="flex overflow-hidden">
          <div className="flex-2 h-full flex items-center justify-center p-2 sm:p-4 md:p-6 ">
            {/* Mobile Image */}
            {
              <img
                src={image3}
                alt={`${title} screenshot 3`}
                className="rounded-lg  contain"
              />
            }
          </div>
          <div className=" flex flex-3 flex-col w-fit justify-evenly items-center">
            <div className=" p-2 sm:p-4">
              <h3 className="text-left font-extrabold text-lg sm:text-2xl md:text-4xl">
                Features
              </h3>
              <ul className="flex flex-col w-full !list-disc ml-4">
                {features.map((feature) => (
                  <li key={feature} className="text-left text-lg">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className=" p-2 sm:p-4">
              <h3 className="text-left font-extrabold text-lg sm:text-2xl md:text-4xl">
                Another
              </h3>
              <ul className="flex flex-col w-full !list-disc ml-4">
                {features.map((feature) => (
                  <li key={feature + "2"} className="text-left text-lg">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex flex-1 flex-col gap-2 sm:gap-4 md:gap-6">
        {/* Video */}
        <div className=" flex flex-col min-h-72 justify-center py-2 sm:py-4 md:py-6 ">
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
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-left font-extrabold text-lg sm:text-2xl md:text-4xl">
              Tech & Tools
            </h3>
            <div className="flex gap-2 ">
              <p className="text-base sm:text-lg md:text-xl font-bold">Core:</p>
              {mainTech.map((tech, idx) => {
                return (
                  <p className="text-base sm:text-lg md:text-xl font-bold text-nowrap">{`${tech} ${
                    idx === mainTech.length - 1 ? "" : " • "
                  }`}</p>
                );
              })}
            </div>
          </div>
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
        <div className="flex flex-1 items-center contain justify-center p-2 sm:p-4 md:p-6">
          {image2 && (
            <img
              src={image2}
              alt={`${title} screenshot 2`}
              className="rounded-lg flex-1"
            />
          )}
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}
