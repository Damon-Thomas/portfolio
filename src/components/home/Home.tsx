import Photo from "./Photo";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 my-4 md:my-8 lg:my-12 gap-6 md:gap-12 items-center">
      <div className="flex justify-center">
        <div className="w-fit">
          <p className="text-2xl! md:text-3xl! lg:text-5xl font-bold text-left">
            Welcome! My name is,
          </p>
          <h1 className="text-9xl! md:text-5xl font-black text-left leading-none">
            Damon
          </h1>
          <p className="text-xl! md:text-2xl! lg:text-4xl font-bold text-left">
            I'm a Software Engineer specializing <br />
            in full-stack web applications.
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <Photo />
      </div>
    </div>
  );
}
