import { Project } from "@/types";
import IconRenderer from "../IconRenderer";

export default function Technical({
  project,
}: {
  project: Project | undefined;
}) {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between w-full  mt-18">
      <IconRenderer
        technologies={project?.stack || []}
        className="flex gap-2 mb-4"
      />
      <div className="flex flex-col max-w-3xl">
        <h2 className="text-xl md:text-3xl w-full font-bold mb-2">
          Technical Overview
        </h2>
        <p className="whitespace-pre-line">{project?.technical}</p>
      </div>
    </div>
  );
}
