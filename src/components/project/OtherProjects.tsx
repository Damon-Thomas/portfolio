import { Project } from "@/types";
import ProjectCard from "../ProjectCard";
import projects from "../../data/projects.json";

export default function OtherProjects({
  project,
}: {
  project: Project | undefined;
}) {
  if (!project) {
    return null;
  }
  const curIdx = projects.findIndex(
    (proj: Project) => proj.name === project.name
  );
  return (
    <div className="flex flex-col w-full gap-4 p-4 justify-center my-10 mt-6 md:mt-18">
      <h2 className="text-xl md:text-3xl w-full text-center  pt-8 font-bold mb-2">
        Other Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-x-12 gap-y-16 max-w-6xl">
        {projects.map((proj: Project, idx: number) => {
          if (
            (idx === curIdx + 1 && idx != projects.length - 1) ||
            idx === curIdx - 1 ||
            (curIdx === 0 && idx === projects.length - 2) ||
            (curIdx === projects.length - 2 && idx === 0)
          ) {
            return (
              <ProjectCard
                key={proj.name}
                link={proj.name}
                project={proj.project}
                source={proj.source}
                description={proj.description}
                inProgress={proj.inProgress}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
