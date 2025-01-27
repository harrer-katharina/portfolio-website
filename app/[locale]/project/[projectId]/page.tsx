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
      <main className="max-w-6xl mx-auto mt-6 pb-24 px-6 space-y-8 scroll-mt-28">
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
        <div className="max-w-6xl mx-auto pt-12 sm:pt-32 pb-12 space-y-24 sm:space-y-60">
          {project.sections?.map((section, index) => (
            <motion.section
              key={index}
              className={`flex flex-col gap-6 sm:gap-10 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="md:w-1/2 my-auto">
                <Image
                  src={section.image}
                  alt={section.title}
                  className="rounded-lg"
                />
              </div>
              <div className="md:w-1/2 my-auto">
                <h2 className="text-2xl mb-2 font-bricolage dark:text-[#FF96CC]">
                  {section.title}
                </h2>
                {section.text.map((text, idx) => (
                  <p key={idx} className="mb-2 text-justify hyphens-auto">
                    {text}
                  </p>
                ))}
                {section?.cta && (
                  <CTABtn
                    title={section.cta.title ?? ""}
                    link={section.cta.link ?? ""}
                  />
                )}
              </div>
            </motion.section>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;
