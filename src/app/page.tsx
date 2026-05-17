import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import CollaborateCta from "@/components/collaborate-cta";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CollaborateCta />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
