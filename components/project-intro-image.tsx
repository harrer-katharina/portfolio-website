"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ProjectType } from "@/lib/types";

export default function ProjectIntroImage({
  project,
}: {
  project: ProjectType;
}) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center overflow-hidden aspect-[14/10] md:aspect-[5/2]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      {project.showTitle && (
        <div className="relative z-10 p-20 mix-blend-difference text-white w-full h-full flex justify-bottom">
          <p
            className="absolute bottom-6 left-10 md:left-20 xl:left-40 text-[5vw] uppercase font-black mix-blend-difference"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          >
            {project.title}
          </p>
        </div>
      )}
      <div className="fixed left-0 aspect-[16/9] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <Image
            src={project.sectionImage}
            alt={project.projectId}
            fill
            className="object-cover md:object-contain"
            quality={100}
          />
        </motion.div>
      </div>
    </div>
  );
}
