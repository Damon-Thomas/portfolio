import { Project } from "@/types";
import Link from "next/link";

export default function Summary({
  projectData,
}: {
  projectData: Project | undefined;
}) {
  return (
    <div className="flex flex-col md:gap-4 mb-8 w-full max-w-3xl">
      <h1 className="text-3xl md:text-6xl font-bold mb-4">
        {projectData?.project}
      </h1>
      <p className="text-base md:text-lg text-gray-700">
        {projectData?.expandedDescription}
      </p>
      <div className="grid grid-cols-[min-content_1fr] gap-8 mt-6">
        <p className="font-extrabold">Website</p>
        <div className="flex  gap-6">
          {projectData?.website ? (
            <>
              <Link
                href={projectData.website}
                target="_blank"
                className={`font-extrabold text-lg md:text-xl text-[#835c00]  md:font-extrabold   hover:underline`}
              >
                Visit Website
              </Link>
              {projectData?.github ? (
                <Link
                  href={projectData.github}
                  target="_blank"
                  className={`font-extrabold text-lg md:text-xl text-[#835c00] md:font-extrabold  hover:underline`}
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

        <p className="font-extrabold">Stack</p>
        <div className="flex flex-wrap gap-x-6">
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

        <p className="font-extrabold">Type</p>
        <div className="flex  gap-2">
          {projectData?.type && (
            <p className="text-gray-800 font-medium md:font-bold text-base md:text-lg">
              {projectData.type}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
