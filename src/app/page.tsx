import Header from "@/components/header/Header";
import Home from "@/components/home/Home";
import PageWrapper from "@/components/PageWrapper";
import Service from "@/components/services/Service";

export default function Controller() {
  return (
    <PageWrapper>
      <Header />
      <Home />
      <Service />
    </PageWrapper>
  );
}
