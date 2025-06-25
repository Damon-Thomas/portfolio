import Link from "next/link";

export default function About() {
  return (
    <div className="bg-foreground text-background w-full flex py-10 justify-center relative px-4">
      <div className="py-4 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-16 gap-y-3 md:gap-y-6 w-full max-w-6xl">
        <h3 className="text-xl md:text-3xl font-bold col-span-1 md:col-span-2 ">
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
          I&apos;ve always loved being a part of a team. Software development
          let&apos;s me balance my curiosity and desire for deep challenging
          work with the collaborative joys of team work.{" "}
        </p>

        <Link
          href="/resume/DamonThomasResume1P.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="font-extrabold text-lg md:text-xl text-[#835c00]  md:font-extrabold   hover:underline"
        >
          View Resume
        </Link>
      </div>
    </div>
  );
}
