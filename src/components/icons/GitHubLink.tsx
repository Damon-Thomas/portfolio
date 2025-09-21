import GitHub from "./GitHub";

interface GitHubLinkProps {
  className?: string;
  url?: string;
  message?: string;
}

export default function GitHubLink({
  className,
  url = "https://github.com/Damon-Thomas",
  message = "",
}: GitHubLinkProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`font-bold text-base sm:text-lg md:text-xl flex items-center gap-2 sm:gap-4 md:gap-6 transition-all duration-200 hover:scale-110 hover:opacity-80 ${
        className || ""
      }`}
      aria-label="Visit GitHub profile"
    >
      <GitHub />
      {message}
    </a>
  );
}
