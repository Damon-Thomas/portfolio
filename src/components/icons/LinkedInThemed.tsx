interface LinkedInThemedProps {
  className?: string;
  lightColor?: string;
  darkColor?: string;
}

export default function LinkedInThemed({
  className,
  lightColor = "#0077b5",
  darkColor = "#0077b5",
}: LinkedInThemedProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 ${
        className || ""
      }`}
    >
      <style>
        {`
          .linkedin-light { fill: ${lightColor}; }
          .linkedin-dark { fill: ${darkColor}; }
          @media (prefers-color-scheme: dark) {
            .linkedin-light { fill: ${darkColor}; }
            .linkedin-dark { fill: ${lightColor}; }
          }
          [data-theme="dark"] .linkedin-themed { fill: ${darkColor}; }
          [data-theme="light"] .linkedin-themed { fill: ${lightColor}; }
          .linkedin-themed { fill: var(--foreground, ${lightColor}); }
        `}
      </style>
      <path
        className="linkedin-themed"
        d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3zM39.17 107H21.06V48.73h18.11zm-9-66.21a10.5 10.5 0 1110.49-10.5 10.5 10.5 0 01-10.54 10.48zM107 107H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53V48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75z"
      />
    </svg>
  );
}
