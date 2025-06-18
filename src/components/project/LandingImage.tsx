import { Project } from "@/types";
import Image from "next/image";

export default function LandingImage({
  project,
}: {
  project: Project | undefined;
}) {
  if (!project?.landingPage) {
    return null; // Return null if no landing page image is provided
  }
  return (
    <div className="relative w-full aspect-[16/9] mt-4 rounded-lg overflow-hidden shadow-[0_8px_32px_0_rgba(0,0,0,0.85)]">
      <Image
        src={project?.landingPage}
        alt={"Project Image"}
        fill
        className="object-cover object-top mb-18"
        sizes="(max-width: 1120px) 100vw, 800px"
        priority
      />
    </div>
  );
}
