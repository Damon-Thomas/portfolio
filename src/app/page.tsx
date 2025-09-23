import Header from "@/components/header/Header";
import Home from "@/components/home/Home";
import PageWrapper from "@/components/PageWrapper";
import ProjectHandler from "@/components/projects/ProjectHandler";
import Service from "@/components/services/Service";

export default function Controller() {
  return (
    <PageWrapper>
      <Header />
      <Home />
      <Service />
      <div className="p-2 sm:p-4 md:p-6 ">
        <h1 className="text-left font-black text-7xl py-4">My Work</h1>
        <ProjectHandler />
      </div>
    </PageWrapper>
  );
}
