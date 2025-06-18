import { Project } from "@/types";
import Image from "next/image";

export default function ScreenGrabs({
  project,
}: {
  project: Project | undefined;
}) {
  return (
    <div className="flex flex-col w-full mt-18">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
        <Image
          src={project?.screenshots?.[0] ? project.screenshots[0].src : ""}
          alt="Screenshot 1"
          width={800}
          height={600}
          className=" object-cover object-top rounded-lg shadow-lg mb-4"
        />
        <Image
          src={project?.screenshots?.[1] ? project.screenshots[1].src : ""}
          alt="Screenshot 2"
          width={400}
          height={1200}
          className=" object-cover rounded-lg shadow-lg  md:row-span-2 lg:m-16 md:m-4"
        />

        <Image
          src={project?.screenshots?.[2] ? project.screenshots[2].src : ""}
          alt="Screenshot 3"
          width={800}
          height={600}
          className=" object-cover rounded-lg shadow-lg mb-4"
        />
      </div>
    </div>
  );
}
