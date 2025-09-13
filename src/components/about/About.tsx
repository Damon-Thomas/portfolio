"use client";

import { intro, skills } from "@/app/content/about";
import ThemedImageWithSmoothShutter from "../ThemedImageWithSmoothShutter";
import SkillItem from "./SkilIItem";
import { useSmallScreen } from "@/contexts/ViewportContext";

export default function About() {
  const smallScreen = useSmallScreen();

  return (
    <div className="flex flex-col-reverse sm:flex-row flex-1 justify-end md:justify-between gap-2 sm:gap-4 md:gap-6 p-2 sm:p-4 md:p-6 items-center">
      <div className="bg-background p-4 rounded-lg shadow-[var(--themeShadowColor)_0px_0px_10px_2px]  text-left ">
        <div className="flex items-center justify-between">
          <div className="">
            <div className="my-2">
              <h1 className="md:text-4xl font-black">Damon Thomas</h1>
              <h2 className="md:text-2xl font-bold">Software Engineer</h2>
            </div>
            <p>{intro}</p>
          </div>
          {smallScreen && (
            <div className="h-30 w-30  sm:m-4 md:m-6 rounded-full overflow-hidden border border-[var(--foreground)]">
              <ThemedImageWithSmoothShutter
                lightSrc="/meBlue.png"
                darkSrc="/meBlack.jpg"
                alt="Picture of me"
                width={288}
                height={288}
                fill={false}
                priority={true}
                className="object-cover rounded-full"
                shutterDuration={700}
                shutterStyle="wipe"
              />
            </div>
          )}
        </div>
        <ul className=" list-none my-4">
          {skills.map((skill) => (
            <SkillItem
              key={skill.title}
              title={skill.title}
              description={skill.description}
            />
          ))}
        </ul>
      </div>
      {!smallScreen && (
        <div className="min-w-72 md:h-72  sm:m-4 md:m-6 rounded-full overflow-hidden border border-[var(--foreground)] flex items-center justify-center">
          <ThemedImageWithSmoothShutter
            lightSrc="/meBlue.png"
            darkSrc="/meBlack.jpg"
            alt="Picture of me"
            width={288}
            height={288}
            fill={false}
            priority={true}
            className="object-cover rounded-full"
            shutterDuration={700}
            shutterStyle="wipe"
          />
        </div>
      )}
    </div>
  );
}
