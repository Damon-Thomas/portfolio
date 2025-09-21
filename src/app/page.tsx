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
      <h1 className="text-left font-black text-7xl py-10">My Work</h1>
      <ProjectHandler />
    </PageWrapper>
  );
}
