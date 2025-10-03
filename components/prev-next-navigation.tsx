"use client";

import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { ProjectType } from "@/lib/types";

export default function PrevNextNav({
  data,
  projectId,
}: {
  data: Array<ProjectType>;
  projectId: string;
}) {
  const projectIndex = data.findIndex((d) => d.projectId === projectId);
  const prevProject = projectIndex > 0 ? data[projectIndex - 1] : null;
  const nextProject =
    projectIndex < data.length - 1 ? data[projectIndex + 1] : null;

  const alignment =
    prevProject && nextProject
      ? "justify-between"
      : prevProject
        ? "justify-start"
        : "justify-end";

  return (
    <div
      className={`flex ${alignment} items-center max-w-6xl mx-auto px-6 py-8`}
    >
      {prevProject && (
        <Link
          href={`/project/${prevProject.projectId}`}
          className="flex gap-4 items-center text-lg font-semibold text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
        >
          <FaChevronLeft />
          {prevProject.title}
        </Link>
      )}
      {nextProject && (
        <Link
          href={`/project/${nextProject.projectId}`}
          className="flex gap-4 items-center text-lg font-semibold text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
        >
          {nextProject.title}
          <FaChevronRight />
        </Link>
      )}
    </div>
  );
}
