import Collab from "@/components/Collab";
import projects from "@/data/projects.json";
import Image from "next/image";
import Link from "next/link";

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
        <div className="flex flex-col md:gap-4 mb-8 w-full max-w-3xl">
          <h1 className="text-3xl md:text-6xl font-bold mb-4">
            {projectData?.project}
          </h1>
          <p className="text-base md:text-lg text-gray-700">
            {projectData?.expandedDescription}
          </p>
          <div className="grid grid-cols-3 gap-2 mt-6">
            <div className="flex flex-col gap-4">
              <p className="font-extrabold">Website</p>
              <div className="flex flex-col gap-2">
                {projectData?.website ? (
                  <>
                    <Link
                      href={projectData.website}
                      target="_blank"
                      className={`font-bold md:font-extrabold text-base md:text-lg hover:underline`}
                      style={{ color: "#DE7833" }}
                    >
                      Visit Website
                    </Link>
                    {projectData?.github ? (
                      <Link
                        href={projectData.github}
                        target="_blank"
                        className={`font-bold md:font-extrabold text-base md:text-lg hover:underline`}
                        style={{ color: "#DE7833" }}
                      >
                        Source Code
                      </Link>
                    ) : (
                      <span className="text-gray-500 text-sm md:text-base">
                        No source code available
                      </span>
                    )}
                  </>
                ) : (
                  <span className="text-gray-500">No website available</span>
                )}
              </div>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <div className="w-fit flex flex-col gap-4">
                {" "}
                <p className="font-extrabold">Stack</p>
                <div className="flex flex-col">
                  {projectData?.stack ? (
                    projectData.stack.map((tech, index) => (
                      <p
                        key={index}
                        className="text-gray-800 font-medium md:font-bold text-base md:text-lg"
                      >
                        {tech}
                      </p>
                    ))
                  ) : (
                    <span className="text-gray-500">No stack information</span>
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <div className="w-fit flex flex-col gap-4">
                <p className="font-extrabold">Type</p>
                <div className="flex flex-col gap-2">
                  {projectData?.type && (
                    <p className="text-gray-800 font-medium md:font-bold text-base md:text-lg">
                      {projectData.type}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full aspect-[16/9] mt-4 rounded-lg overflow-hidden shadow-[0_8px_32px_0_rgba(0,0,0,0.85)]">
          <Image
            src={projectData?.landingPage || "/default-project-image.jpg"}
            alt={"Project Image"}
            fill
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 800px"
            priority
          />
        </div>
        <div className="flex flex-col w-full">
          <h2></h2>
        </div>
        <Collab theme="light" />
      </div>
    </div>
  );
}
