import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({
  source,
  alt,
  project = "Project Name",
  description = "This is a brief description of the project that highlights its key features and functionalities.",
  link = "#",
  inProgress = false,
}: {
  source?: string;
  alt?: string;
  project?: string;
  description?: string;
  link?: string;
  inProgress?: boolean;
}) {
  if (inProgress) {
    return (
      <div className="hidden md:flex  flex-col items-center gap-4 col-span-2 ">
        <div className="flex w-full justify-center items-center rounded">
          <div className="w-full h-[250px] relative">
            <p className="w-full h-full flex items-center justify-center bg-black/30 rounded">
              Project is in Progress
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 w-full max-w-2xl">
          <h3 className="text-2xl font-bold">{project}</h3>
          <p className="text-center">{description}</p>
          <div className="font-bold text-lg text-gray-500">In Progress</div>
        </div>
      </div>
    );
  }

  return (
    <Link href={`/${link}`} className="flex flex-col items-start gap-4">
      <div className="flex w-full justify-center items-center rounded">
        <div className="w-full aspect-[5/3] relative">
          <Image
            src={source || "/default-project-image.jpg"}
            alt={alt || "Project Image"}
            fill
            className="object-cover object-top border-2 border-gray-700 rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            sizes="(max-width: 768px) 100vw, 500px"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-bold">{project}</h3>
        <p>{description}</p>
        <div className="font-bold text-lg hover:underline">View Project</div>
      </div>
    </Link>
  );
}
