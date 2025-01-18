"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { getProjectsData } from "@/lib/data";
import { useTheme } from "@/context/theme-context";
import CTABtn from "@/components/cta-btn";
import Tag from "@/components/tag";

const ProjectDetail = ({ params }: { params: { projectId: string } }) => {
  const { theme } = useTheme();
  const t = useTranslations("Projects");
  const data = getProjectsData(theme);
  const project = data.find((d) => d.projectId === params.projectId);

  if (!project) {
    return <p>{t("notFound")}</p>;
  }

  return (
    <main className="max-w-6xl mx-auto pb-24 px-6 space-y-8 scroll-mt-28">
      <motion.div
        className="!leading-[1.5]"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9]">
          <Image
            src={project.sectionImage}
            alt={project.title}
            fill={true}
            className="object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black/30 rounded-lg"></div>
          <h1 className="absolute bottom-10 left-10 text-7xl font-bold text-white drop-shadow-lg">
            {project.title}
          </h1>
        </div>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="flex flex-col">
          <div className="text-lg font-semibold">{t("technologies")}</div>
          <ul className="flex flex-wrap gap-2 mt-2">
            {project.tags.map((tag, index) => (
              <Tag index={index} title={tag} />
            ))}
          </ul>
        </div>
        <div className="flex flex-col">
          <div className="text-lg font-semibold">{t("type")}</div>
          {project.type}
        </div>
        <div className="flex flex-col">
          <div className="text-lg font-semibold">{t("date")}</div>
          {project.date}
        </div>
        <div className="flex flex-col">
          <div className="text-lg font-semibold">{t("duration")}</div>
          {project.duration}
        </div>
      </div>
      <div className="max-w-6xl mx-auto py-12 space-y-24 sm:space-y-60">
        {project.sections?.map((section, index) => (
          <section
            key={index}
            className={`flex flex-col gap-6 sm:gap-10 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
          >
            <div className="md:w-1/2 my-auto">
              <Image
                src={section.image}
                alt={section.title}
                className="rounded-lg"
              />
            </div>
            <div className="md:w-1/2 my-auto">
              <h2 className="text-2xl font-semibold mb-2">{section.title}</h2>
              {section.text.map((text, index) => (
                <p key={index} className="mb-2">
                  {text}
                </p>
              ))}
              {section?.cta && (
                <CTABtn title={section.cta.title} link={section.cta.link} />
              )}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
};

export default ProjectDetail;
