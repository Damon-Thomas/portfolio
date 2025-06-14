import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-[#f2c0c1] text-foreground">
      <div className="relative flex items-center justify-center w-full h-[80vh] overflow-hidden">
        <div className="w-fit hero-container h-fit border-2 border-white rounded-lg relative">
          <Image
            src="/pink-bg-removed.png"
            alt="Secta AI"
            width={420}
            height={126}
            priority
            className="relative z-10 object-contain"
            style={{ boxShadow: "0 8px 48px 16px #A78082" }}
          />
          <div className="blur-overlay pointer-events-none absolute inset-0 z-20" />
        </div>

        <h1 className="absolute p-4 top-0 w-screen text-5xl font-bold text-white z-0 select-none pointer-events-none drop-shadow-lg opacity-90">
          Welcome to My Portfolio
        </h1>
      </div>
    </div>
  );
}
