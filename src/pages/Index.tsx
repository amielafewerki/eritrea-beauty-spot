import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Destinations from "@/components/Destinations";
import About from "@/components/About";
import Highlights from "@/components/Highlights";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Destinations />
      <About />
      <Highlights />
      <Footer />
    </main>
  );
};

export default Index;
