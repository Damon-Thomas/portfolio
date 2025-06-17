import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({
  source,
  alt,
  project = "Project Name",
  description = "This is a brief description of the project that highlights its key features and functionalities.",
  link = "#",
}: {
  source?: string;
  alt?: string;
  project?: string;
  description?: string;
  link?: string;
}) {
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
