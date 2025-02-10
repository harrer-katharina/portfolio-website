import Intro from "@/components/intro";
import ParallaxSkills from "@/components/parallax-skills";
import Projects from "@/components/projects";
import About from "@/components/about";
import AboutHobbys from "@/components/aboutHobbys";
import Experience from "@/components/experience";
import Skills from "@/components/skills";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center px-4">
        <Intro />
        <ParallaxSkills />
        <About />
        <AboutHobbys />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </div>
    </main>
  );
}
