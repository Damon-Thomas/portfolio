import Image from "next/image";

export default function Hero({
  heroActive,
  setHeroActive,
  smallScreen,
}: {
  heroActive: boolean;
  setHeroActive: React.Dispatch<React.SetStateAction<boolean>>;
  smallScreen: boolean;
}) {
  return (
    <div className="relative flex items-center justify-center w-full h-[80vh]">
      {/* Background image (always visible) */}
      <Image
        src="/secta.ai_001.jpg"
        alt="Damon Background"
        width={350}
        height={525}
        priority
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[50vh] w-auto object-contain z-30 filter grayscale"
      />
      {/* Dark overlay over background image */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[50vh] w-[350px] bg-zinc-950/80 z-32 rounded-xl pointer-events-none" />
      {/* Foreground image with hover effect only on image */}
      <div className="relative z-40 group flex flex-col items-center w-[350px] h-[50vh]">
        <Image
          src="/pink-bg-removed.png"
          alt="Damon Foreground"
          width={350}
          height={525}
          priority
          onMouseEnter={() => setHeroActive(true)}
          onMouseLeave={() => setHeroActive(false)}
          className={`h-full w-auto object-contain transition-opacity duration-700 z-50  ${
            heroActive ? "opacity-100" : "opacity-0"
          }`}
        />
        {/* Text overflows image, always visible */}
        <div className="absolute inset-0 flex flex-col items-center justify-center w-full h-full text-center pointer-events-none z-40">
          <h1
            className={`whitespace-nowrap text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-widest leading-tight  drop-shadow-lg mb-4 ${
              smallScreen ? "" : heroActive ? "translate-x-6" : "translate-x-6"
            }`}
          >
            Damon
            {!smallScreen && (
              <span
                className={`${
                  heroActive ? "w-[270px]" : "w-0"
                } inline-block transition-all duration-700`}
              ></span>
            )}
            Thomas
          </h1>
          <h2 className="whitespace-nowrap text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide  drop-shadow-lg">
            Full Stack{" "}
            {!smallScreen && (
              <span
                className={`${
                  heroActive ? "w-[280px]" : "w-0"
                } h-2 inline-block transition-all duration-700`}
              ></span>
            )}
            Developer
          </h2>
        </div>
      </div>
    </div>
  );
}
