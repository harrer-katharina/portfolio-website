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
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);

  return (
    <div className="relative w-full pt-20">
      <div className="lg:h-screen overflow-hidden">
        <motion.div style={{ y }} className="relative lg:h-[92vh]">
          <div className="w-full aspect-[16/9]">
            <Image
              src={project.sectionImage}
              alt={project.projectId}
              fill
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
        </motion.div>
      </div>
    </div>
  );
}
