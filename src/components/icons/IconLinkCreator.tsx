import { ReactNode } from "react";

interface ImageIconLinkProps {
  path: string;
  alt?: string;
  className?: string;
  url: string;
  message?: string;
  ariaLabel?: string;
}

export default function IconLinkCreator({
  path,
  alt = "",
  className,
  url,
  message = "",
  ariaLabel,
}: ImageIconLinkProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`font-bold text-base sm:text-lg md:text-xl flex items-center gap-2 sm:gap-4 md:gap-6 transition-all duration-200 hover:scale-110 hover:opacity-80 ${
        className || ""
      }`}
      aria-label={ariaLabel || `Visit ${url}`}
    >
      <img
        src={path}
        alt={alt}
        className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full"
      >
        {}
      </img>
      {message}
    </a>
  );
}
