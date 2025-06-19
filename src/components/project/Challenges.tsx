import { Project } from "@/types";

export default function Challenges({
  project,
}: {
  project: Project | undefined;
}) {
  if (!project?.challenges) {
    return null;
  }
  return (
    <div className="flex w-full justify-center">
      <div className="flex flex-col w-full max-w-3xl mt-6 md:mt-18 py-10">
        <h2 className="text-xl text-center md:text-3xl w-full font-bold mb-2">
          Challenges Faced
        </h2>
        <p className="whitespace-pre-line text-center">{project?.challenges}</p>
      </div>
    </div>
  );
}
