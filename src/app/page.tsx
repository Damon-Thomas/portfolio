import About from "@/components/about/About";
import Header from "@/components/header/Header";
import Home from "@/components/home/Home";
import PageWrapper from "@/components/PageWrapper";

export default function Controller() {
  return (
    <PageWrapper>
      <Header />
      <Home />
      {/* <About /> */}
    </PageWrapper>
  );
}
