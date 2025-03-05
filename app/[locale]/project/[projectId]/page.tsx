"use client";

import { useRef, useEffect } from "react";
import { notFound } from "next/navigation";
import Lenis from "@studio-freight/lenis";
import { useScroll } from "framer-motion";
import { useTranslations } from "next-intl";
import { getProjectsData } from "@/lib/data";
import { ProjectType, ProjectSection } from "@/lib/types";
import { useTheme } from "@/context/theme-context";
import ProjectIntroImage from "@/components/project-intro-image";
import ProjectDetailText from "@/components/project-detail-text";
import DetailCard from "@/components/project-detail-card";
import PrevNextNav from "@/components/prev-next-navigation";

const ProjectDetail = ({ params }: { params: { projectId: string } }) => {
  const { theme } = useTheme();
  const t = useTranslations("Projects");
  const data = getProjectsData(theme, t);

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number): void {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });

  const project = data.find(
    (d) => d.projectId === params.projectId
  ) as ProjectType & { sections: ProjectSection[] };

  if (!project) {
    return notFound();
  }

  return (
    <main>
      <ProjectIntroImage project={project} />
      <div className="max-w-6xl mx-auto mt-6 px-6 space-y-8 scroll-mt-28">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <p className="sm:hidden text-3xl uppercase font-black">
            {project.title}
          </p>
          <ProjectDetailText project={project} />
        </div>
        <div ref={container} className="space-y-6 lg:space-y-0 pb-8 lg:pb-16">
          {project.sections?.map((section: ProjectSection, index) => {
            const targetScale = 1 - (project.sections?.length - index) * 0.05;
            return (
              <DetailCard
                key={`card_${index}`}
                index={index}
                section={section}
                progress={scrollYProgress}
                range={[index * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </div>
      </div>
      <PrevNextNav data={data} projectId={params.projectId} />
    </main>
  );
};

export default ProjectDetail;
