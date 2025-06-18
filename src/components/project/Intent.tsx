import { Project } from "@/types";

export default function Intent({ project }: { project: Project | undefined }) {
  return (
    <div className="flex flex-col w-full max-w-3xl mt-18">
      <h2 className="text-xl md:text-3xl w-full font-bold mb-2">
        Intent of the Website
      </h2>
      <p className="whitespace-pre-line">{project?.intent}</p>
    </div>
  );
}
