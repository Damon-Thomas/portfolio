import Image from "next/image";

export default function Hero({
  heroActive,
  setHeroActive,
  smallScreen,
  atTop,
}: {
  heroActive: boolean;
  setHeroActive: React.Dispatch<React.SetStateAction<boolean>>;
  smallScreen: boolean;
  atTop: boolean;
}) {
  const chevronClass = `fill-[#ededed] absolute bottom-4 left-1/2 w-14 h-14 cursor-pointer z-50 transition-all duration-300 ${
    atTop
      ? "opacity-100 scale-100 pointer-events-auto animate-bounce-gentle"
      : "opacity-0 scale-0 pointer-events-none"
  }`;

  const handleChevronClick = () => {
    const targetPosition = window.innerHeight;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 2000; // 2 seconds - adjust this for slower/faster scroll
    let start: number;

    const animation = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percentage = Math.min(progress / duration, 1);

      // Easing function for smooth animation
      const easeInOutCubic = (t: number) =>
        t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

      window.scrollTo(0, startPosition + distance * easeInOutCubic(percentage));

      if (progress < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  return (
    <div className="relative flex items-center justify-center w-full h-screen max-w-6xl">
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
      {/* <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[50vh] w-[350px] bg-[#ededed]/80 z-32 rounded-xl pointer-events-none" /> */}

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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={chevronClass}
        viewBox="0 0 24 24"
        onClick={handleChevronClick}
      >
        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
      </svg>
    </div>
  );
}
