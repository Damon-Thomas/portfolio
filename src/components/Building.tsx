import { Project } from "../types";
import ProjectCard from "./ProjectCard";
import projects from "./../data/projects.json";
export default function Building() {
  return (
    <div className="bg-foreground text-background w-full flex justify-center">
      <div className="py-4 md:py-16 flex flex-col gap-6 md:gap-12 w-full max-w-6xl">
        <div className="flex flex-col gap-3 md:gap-6">
          <h3 className="text-xl md:text-3xl font-bold col-span-1 md:col-span-2 ">
            What I&apos;m Building
          </h3>
          <p>
            I&apos;m always working on something. Take a look at some of my
            finished projects and contracts.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
          {projects.map((proj: Project) => (
            <ProjectCard
              key={proj.name}
              link={proj.name}
              project={proj.project}
              source={proj.source}
              description={proj.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
