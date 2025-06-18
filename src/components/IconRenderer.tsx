import React from "react";
import ReactIcon from "./Icons/ReactIcon";
import NodeJSIcon from "./Icons/NodeJSIcon";
import NextIcon from "./Icons/NextIcon";
import TypescriptIcon from "./Icons/TypescriptIcon";
import ViteIcon from "./Icons/ViteIcon";
import PostgresIcon from "./Icons/PostgresIcon";
import OAuthIcon from "./Icons/OAuth";

interface IconRendererProps {
  technologies: string[];
  className?: string;
}

// Map technology names to icon components
const iconMap: Record<string, React.FC<{ className?: string }>> = {
  React: ReactIcon,
  NodeJS: NodeJSIcon,
  Next: NextIcon,
  Typescript: TypescriptIcon,
  Vite: ViteIcon,
  Postgres: PostgresIcon,
  OAuth: OAuthIcon,
  // Add more icons here as needed
};

// Map aliases from projects.json to iconMap keys
const techAliasMap: Record<string, string> = {
  React: "React",
  "Node.js": "NodeJS",
  NodeJS: "NodeJS",
  "Next.js": "Next",
  Typescript: "Typescript",
  TypeScript: "Typescript",
  Vite: "Vite",
  Postgres: "Postgres",
  OAuth: "OAuth",
  // Add more aliases as needed
};

const IconRenderer: React.FC<IconRendererProps> = ({
  technologies,
  className,
}) => {
  return (
    <div className="flex h-full justify-center items-center flex-1">
      <div
        className={`flex md:grid md:grid-cols-2 gap-4 md:gap-8 p-2 h-fit w-fit md:w-fit justify-center items-center ${
          className ? className : ""
        }`}
      >
        {technologies.map((tech, idx) => {
          const iconKey = techAliasMap[tech] || tech;
          const IconComponent = iconMap[iconKey];
          return IconComponent ? (
            <IconComponent
              key={`${tech}-${idx}`}
              className="w-10 md:w-14 h-10 md:h-14"
            />
          ) : null;
        })}
      </div>
    </div>
  );
};

export default IconRenderer;
