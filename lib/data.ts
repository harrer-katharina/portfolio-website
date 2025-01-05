import React from "react";
import { useTranslations } from "next-intl";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import ecocalypse from "@/public/ecocalypse-scene.webp";
import trilum from "@/public/trilum-orders-overview.png";
import bevry from "@/public/bevry-mocktail.png";
import erika from "@/public/erika-closeup.png";
import advent from "@/public/advent-light.png";
import adventDark from "@/public/advent-dark.png";
import nakt from "@/public/nakt-recipe-customizer-desktop.png";
import timeparabox from "@/public/time-parabox.png";

export const getLinks = () => {
  const t = useTranslations("Links");
  console.log("Translations verfügbar:", t);

  return [
    {
      name: t("home"),
      hash: "#home",
    },
    {
      name: t("about"),
      hash: "#about",
    },
    {
      name: t("projects"),
      hash: "#projects",
    },
    {
      name: t("skills"),
      hash: "#skills",
    },
    {
      name: t("experience"),
      hash: "#experience",
    },
    {
      name: t("contact"),
      hash: "#contact",
    },
  ];
};

export const getExperiencesData = () => {
  const t = useTranslations("Experiences");

  return [
    {
      title: t("bachelorTitle"),
      location: t("bachelorLocation"),
      description: t("bachelorDescription"),
      icon: React.createElement(LuGraduationCap),
      date: t("bachelorDate"),
    },
    {
      title: t("job1Title"),
      location: t("job1Location"),
      description: t("job1Description"),
      icon: React.createElement(CgWorkAlt),
      date: t("job1Date"),
    },
    {
      title: t("job2Title"),
      location: t("job2Location"),
      description: t("job2Description"),
      icon: React.createElement(CgWorkAlt),
      date: t("job2Date"),
    },
    {
      title: t("masterTitle"),
      location: t("masterLocation"),
      description: t("masterDescription"),
      icon: React.createElement(LuGraduationCap),
      date: t("masterDate"),
    },
  ];
};

export const getProjectsData = (theme: string) => {
  const t = useTranslations("Projects");
  return [
    {
      title: "Time ParaBox",
      description: t("timeParabox"),
      tags: ["React Native"],
      imageUrl: timeparabox,
    },
    {
      title: "Bevry",
      description: t("bevry"),
      tags: ["NestJs", "Vue.js", "Adobe InDesign", "Adobe Photoshop"],
      imageUrl: bevry,
    },
    {
      title: "ERIKA",
      description: t("erika"),
      tags: ["Figma"],
      imageUrl: erika,
    },
    {
      title: "Ecocalypse",
      description: t("ecocalypse"),
      tags: ["Unity"],
      imageUrl: ecocalypse,
    },
    {
      title: "vegan advent",
      description: t("veganAdvent"),
      tags: ["React", "Tailwind"],
      imageUrl: theme === "light" ? advent : adventDark,
    },
    {
      title: "TRILUM",
      description: t("trilum"),
      tags: ["Angluar", "PostgreSQL", "Figma"],
      imageUrl: trilum,
    },
    {
      title: "NAKT",
      description: t("nakt"),
      tags: ["WordPress", "PHP", "Html", "JS", "Css"],
      imageUrl: nakt,
    },
  ];
};

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Vue.js",
  "Next.js",
  "NestJs",
  "Figma",
  "Git",
  "Tailwind",
  "PostgreSQL"
] as const;
