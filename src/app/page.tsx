import Hero from "@/components/Hero";
import About from "@/components/About";

import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050A18] text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
