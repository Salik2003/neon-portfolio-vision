import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import RevealOnScroll from "@/components/RevealOnScroll"; 

function App() {
  return (
    <>
      <Navbar />
      
      {/* Wrap each section you want to animate */}
      <RevealOnScroll>
        <Hero />
      </RevealOnScroll>

      <RevealOnScroll>
        <About />
      </RevealOnScroll>

      <RevealOnScroll>
        <Experience />
      </RevealOnScroll>

      <RevealOnScroll>
        <Skills />
      </RevealOnScroll>

      <RevealOnScroll>
        <Projects />
      </RevealOnScroll>

      <RevealOnScroll>
        <Contact />
      </RevealOnScroll>
    </>
  );
}

export default App;