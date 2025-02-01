"use client";

import { useRef, useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { useScroll } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { getProjectsData } from "@/lib/data";
import { ProjectType, ProjectSection } from "@/lib/types";
import { useTheme } from "@/context/theme-context";
import Tag from "@/components/tag";
import DetailCards from "@/components/project-detail-card";

const ProjectDetail = ({ params }: { params: { projectId: string } }) => {
  const { theme } = useTheme();
  const t = useTranslations("Projects");
  const data = getProjectsData(theme);

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
    return <p>{t("notFound")}</p>;
  }

  return (
    <div>
      <div className="relative w-full pt-20">
        <div className="absolute w-full aspect-[16/9] sm:aspect-[21/6]">
          <Image
            src={project.sectionImage}
            alt={project.projectId}
            fill={true}
            className="object-cover"
          />
          {project.showTitle && (
            <h1
              className="absolute bottom-6 left-10 md:left-20 xl:left-40 text-white drop-shadow-lg font-bricolage"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
            >
              {project.title}
            </h1>
          )}
        </div>
        <div className="aspect-[16/9] sm:aspect-[21/6]" />
      </div>
      <main className="max-w-6xl mx-auto mt-6 px-6 space-y-8 scroll-mt-28">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="flex flex-col">
            <div className="text-lg font-semibold dark:text-[#FF96CC]">
              {t("technologies")}
            </div>
            <ul className="flex flex-wrap gap-2 mt-2">
              {project.tags.map((tag, index) => (
                <Tag index={index} title={tag} key={index} />
              ))}
            </ul>
          </div>
          <div className="flex flex-col">
            <div className="text-lg font-semibold dark:text-[#FF96CC]">
              {t("type")}
            </div>
            {project.type}
          </div>
          <div className="flex flex-col">
            <div className="text-lg font-semibold dark:text-[#FF96CC]">
              {t("date")}
            </div>
            {project.date}
          </div>
          <div className="flex flex-col">
            <div className="text-lg font-semibold dark:text-[#FF96CC]">
              {t("duration")}
            </div>
            {project.duration}
          </div>
        </div>
        <div ref={container} className="space-y-10 lg:space-y-0 pb-8 lg:pb-0">
          {project.sections?.map((section: ProjectSection, index) => {
            const targetScale = 1 - (project.sections?.length - index) * 0.05;
            return (
              <DetailCards
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
      </main>
    </div>
  );
};

export default ProjectDetail;
