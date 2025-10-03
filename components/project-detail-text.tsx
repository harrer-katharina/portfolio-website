import React from "react";
import { useTranslations } from "next-intl";
import Tag from "@/components/tag";

interface ProjectDetailsProps {
  project: {
    tags: string[];
    type: string;
    duration: string;
  };
}

const ProjectDetailText: React.FC<ProjectDetailsProps> = ({ project }) => {
  const t = useTranslations("Projects");

  const details = [
    {
      label: t("technologies"),
      content: (
        <ul className="flex flex-wrap gap-2 mt-2">
          {project.tags.map((tag, index) => (
            <Tag
              index={index}
              title={tag}
              className="text-[0.8rem]"
              key={index}
            />
          ))}
        </ul>
      ),
    },
    { label: t("type"), content: project.type },
    { label: t("duration"), content: project.duration },
  ];

  return details.map(({ label, content }, index) => (
    <div key={index} className="flex flex-col">
      <div className="text-lg font-semibold dark:text-[var(--primary-color)]">
        {label}
      </div>
      {content}
    </div>
  ));
};

export default ProjectDetailText;
