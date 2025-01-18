"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useLanguage } from "@/context/language-context";
import { ProjectType } from "../lib/types";
import Tag from "@/components/tag";

type ProjectProps = ProjectType;

export default function Project({
  title,
  description,
  tags,
  image,
  projectId,
}: ProjectProps) {
  const router = useRouter();
  const { locale } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const { setActiveSection } = useActiveSectionContext();

  const showProjectDetails = () => {
    setActiveSection("Projects");
    router.push(`/${locale}/project/${projectId}`);
  };

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section
        onClick={showProjectDetails}
        className="max-w-[42rem] sm:h-[20rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative transition sm:group-even:pl-8 bg-gray-100/60 hover:bg-gray-200/60 dark:text-white dark:bg-white/10 dark:hover:bg-white/20"
      >
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <Tag index={index} title={tag} />
            ))}
          </ul>
        </div>

        <Image
          src={image}
          alt="Project I worked on"
          quality={95}
          className="sm:absolute sm:block px-5 sm:px-0 top-8 -right-24 w-[28.25rem] rounded-t-lg
        sm:transition 
        sm:group-hover:scale-[1.04]
        sm:group-hover:-translate-x-3
        sm:group-hover:translate-y-3
        sm:group-hover:-rotate-2

        sm:group-even:group-hover:translate-x-3
        sm:group-even:group-hover:translate-y-3
        sm:group-even:group-hover:rotate-2

        sm:group-even:right-[initial] group-even:-left-24"
        />
      </section>
    </motion.div>
  );
}
