"use client";

import React from "react";
import { useTheme } from "@/context/theme-context";
import SectionHeading from "./section-heading";
import { getProjectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  const { theme } = useTheme();

  const data = getProjectsData(theme);
  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>Meine Projekte</SectionHeading>
      <div>
        {data.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
