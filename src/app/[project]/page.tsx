import Collab from "@/components/Collab";
import HomeIcon from "@/components/Icons/HomeIcon";
import Challenges from "@/components/project/Challenges";
import Intent from "@/components/project/Intent";
import LandingImage from "@/components/project/LandingImage";
import OtherProjects from "@/components/project/OtherProjects";
import ScreenGrabs from "@/components/project/ScreenGrabs";
import Summary from "@/components/project/Summary";
import Technical from "@/components/project/Technical";
import projects from "@/data/projects.json";
import React from "react";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ project: string }>;
}) {
  const { project } = await params;
  const projectData = projects.find((p) => p.name === project);
  return (
    <div className="flex justify-center bg-foreground text-background w-full min-h-screen">
      <div className="flex flex-col items-start justify-start w-full text-base md:text-lg max-w-6xl p-4 pt-16 md:pt-28">
        <HomeIcon className="w-8 h-8 md:w-12 md:h-12" />
        <Summary projectData={projectData} />
        <LandingImage project={projectData} />
        <Intent project={projectData} />
        <Technical project={projectData} />
        <ScreenGrabs project={projectData} />
        <Challenges project={projectData} />
        <OtherProjects project={projectData} />
        <Collab theme="light" pad={false} />
      </div>
    </div>
  );
}
