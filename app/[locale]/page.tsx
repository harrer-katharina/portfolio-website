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
      <div className="bg-[var(--bg-color-right)] fixed top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
      <div className="bg-[var(--bg-color-left)] fixed top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
      <div className="flex flex-col items-center px-4">
        <Intro />
        <ParallaxSkills />
        <About />
        <AboutHobbys />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </div>
    </main>
  );
}
