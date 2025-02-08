"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { useTheme } from "@/context/theme-context";
import SectionHeading from "./section-heading";
import { getProjectsData } from "@/lib/data";
import Project from "./project";

export default function Projects() {
  const t = useTranslations("Projects");
  const { theme } = useTheme();
  const data = getProjectsData(theme, t);

  return (
    <section id="projects" className="scroll-mt-28 relative">
      <SectionHeading>{t("title")}</SectionHeading>
      {data.map((project, index) => (
        <React.Fragment key={index}>
          <Project index={index} {...project} />
        </React.Fragment>
      ))}
    </section>
  );
}
