import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-background text-foreground">
      <div className="relative flex items-center justify-center w-full h-[80vh] overflow-hidden">
        <Image
          src="/pink-bg-removed.png"
          alt="Secta AI"
          width={420}
          height={126}
          priority
          className="relative z-20 drop-shadow-xl object-contain"
        />

        <h1 className="absolute top-1/3 left-1/2 -translate-x-1/2 text-5xl font-bold text-white z-0 select-none pointer-events-none drop-shadow-lg opacity-90">
          Welcome to My Portfolio
        </h1>
      </div>
    </div>
  );
}
