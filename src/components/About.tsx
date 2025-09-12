"use client";

import ThemedImageWithSmoothShutter from "./ThemedImageWithSmoothShutter";

export default function About() {
  return (
    <div className="flex flex-1 justify-between gap-2 sm:gap-4 md:gap-6 p-2 sm:p-4 md:p-6 items-center">
      <div className="bg-background p-4 rounded-lg shadow-[var(--themeShadowColor)_0px_0px_10px_2px]  text-left ">
        <h1>Damon Thomas</h1>
        <h2>Software Engineer</h2>
        <p>
          Good day! My name is Damon and I'm a Software Developer from Ontario,
          Canada. My specialties include:
        </p>
        <ul className="list-inside list-disc ">
          <li>
            Full-Stack Web Development - Anything you want to share with the
            world is in my wheel house. From backend servers and API endpoints,
            to responsive UIs that clients will love.
          </li>
          <li>
            Database Management - Data is part and parcel of any good
            application. I know how to make it accessible, keep it secure, and
            optimize for efficiency.
          </li>
          <li>
            Devops and Cloud - No application is complete until it's accessible
            to users. I have the expertise to host your project in the cloud,
            and create CI/CD pipelines to automate the development cycle.
          </li>
          <li>
            Open Source Contributions - I love building things with code, and
            being able to help other people with their project and be a part of
            what their building is an amazing experience.{" "}
          </li>
        </ul>
        <p>
          I'm passionate about building efficient, scalable, and user-friendly
          applications. When I'm not coding, I enjoy hiking, photography, and
          exploring new technologies.
        </p>
      </div>
      <div className="min-w-72 h-72  sm:m-4 md:m-6 rounded-full overflow-hidden border border-[var(--foreground)] flex items-center justify-center">
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
    </div>
  );
}
