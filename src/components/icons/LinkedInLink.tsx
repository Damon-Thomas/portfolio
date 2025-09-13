import LinkedIn from "./LinkedIn";

interface LinkedInLinkProps {
  className?: string;
  url?: string;
}

export default function LinkedInLink({
  className,
  url = "https://www.linkedin.com/in/damon-h-thomas/",
}: LinkedInLinkProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block transition-all duration-200 hover:scale-110 hover:opacity-80 ${
        className || ""
      }`}
      aria-label="Visit LinkedIn profile"
    >
      <LinkedIn />
    </a>
  );
}
