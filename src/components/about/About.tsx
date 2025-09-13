"use client";

import { skills } from "@/app/content/about";
import ThemedImageWithSmoothShutter from "../ThemedImageWithSmoothShutter";
import SkillItem from "./SkilIItem";
import { useSmallScreen } from "@/contexts/ViewportContext";

export default function About() {
  const smallScreen = useSmallScreen();

  return (
    <div className="flex flex-col-reverse sm:flex-row flex-1 justify-end md:justify-between gap-2 sm:gap-4 md:gap-6 p-2 sm:p-4 md:p-6 items-center">
      <div className="bg-background p-4 rounded-lg shadow-[var(--themeShadowColor)_0px_0px_10px_2px]  text-left ">
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
    </div>
  );
}
