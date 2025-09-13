import GitHub from "../icons/GitHubLink";
import LinkedIn from "../icons/LinkedInLink";
import Photo from "./Photo";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-14 mb-8 md:mt-20 md:mb-20 gap-6 md:gap-12 items-center">
      <div className="flex justify-center">
        <div className="flex flex-col gap-4 w-fit">
          <p className="text-2xl! md:text-3xl! lg:text-5xl font-bold text-left">
            Welcome! My name is,
          </p>
          <h1 className="text-9xl! -ml-2 md:text-5xl font-black text-left leading-none">
            Damon
          </h1>
          <p className="text-xl! md:text-2xl! lg:text-4xl font-bold text-left">
            I'm a Software Engineer specializing <br />
            in full-stack web applications.
          </p>
          <div className="flex gap-2 sm:gap-4 md:gap-6 mt-4">
            <GitHub />
            <LinkedIn />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Photo />
      </div>
    </div>
  );
}
