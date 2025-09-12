import About from "@/components/About";
import Header from "@/components/header/Header";
import PageWrapper from "@/components/PageWrapper";

export default function Home() {
  return (
    <PageWrapper>
      <Header />
      <About />
    </PageWrapper>
  );
}
