import Collab from "@/components/Collab";
import projects from "@/data/projects.json";
import Image from "next/image";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ project: string }>;
}) {
  const { project } = await params;
  const projectData = projects.find((p) => p.name === project);
  return (
    <div className="flex justify-center bg-foreground text-background w-full min-h-screen">
      <div className="flex flex-col items-start justify-start w-full max-w-6xl p-8 pt-16 md:pt-28">
        <div className="flex flex-col gap-4 mb-8 w-full max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {projectData?.project}
          </h1>
          <p className="text-lg text-gray-700">
            {projectData?.expandedDescription}
          </p>
        </div>
        <Image
          src={projectData?.landingPage || "/default-project-image.jpg"}
          alt={"Project Image"}
          width={500}
          height={300}
          className="rounded-lg w-full mt-4 shadow-[0_8px_32px_0_rgba(0,0,0,0.85)] mb-14"
        />
        <Collab theme="light" />
      </div>
    </div>
  );
}
