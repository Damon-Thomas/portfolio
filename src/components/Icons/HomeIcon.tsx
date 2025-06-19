"use client";
import { SVGProps } from "react";
import { useRouter } from "next/navigation";

export default function HomeIcon({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  const router = useRouter();
  return (
    <div className=" w-screen absolute top-0 md:top-10 left-0 flex justify-center">
      <div className="flex justify-end items-center p-4 max-w-6xl w-full">
        <svg
          viewBox="0 -960 960 960"
          xmlns="http://www.w3.org/2000/svg"
          width={48}
          height={48}
          onClick={() => router.push("/")}
          className={` ${className} cursor-pointer hover:scale-110 transition-transform duration-200 ease-in-out`}
          {...props}
        >
          <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
        </svg>
      </div>
    </div>
  );
}
