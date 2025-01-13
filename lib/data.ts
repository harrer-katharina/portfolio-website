import React from "react";
import { useTranslations } from "next-intl";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import ecocalypse from "@/public/ecocalypse-scene.webp";
import trilum from "@/public/trilum-orders-overview.png";
import erika from "@/public/erika-closeup.png";
import advent from "@/public/advent-light.png";
import adventDark from "@/public/advent-dark.png";
import nakt from "@/public/nakt-recipe-customizer-desktop.png";
import timeparabox from "@/public/time-parabox.png";

import bevry from "@/public/bevry-mocktail.png";
import bevryCocktails from "@/public/bevry/bevry-cocktails.png"
import bevryFeatures from "@/public/bevry/bevry-features.png"
import bevryThumbnail from "@/public/bevry/bevry-thumbnail.png"
import bevryBranding from "@/public/bevry/bevry-mockup-drucksorten.png"
import bevryGroup from "@/public/bevry/bevry-group.jpg"
import bevryScreens from "@/public/bevry/bevry-kathy-politan.png"

export const getLinks = () => {
  const t = useTranslations("Links");

  return [
    {
      name: "Home",
      title: t("home"),
      hash: "#home",
    },
    {
      name: "About",
      title: t("about"),
      hash: "#about",
    },
    {
      name: "Projects",
      title: t("projects"),
      hash: "#projects",
    },
    {
      name: "Skills",
      title: t("skills"),
      hash: "#skills",
    },
    {
      name: "Experience",
      title: t("experience"),
      hash: "#experience",
    },
    {
      name: "Contact",
      title: t("contact"),
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
      projectId: "time-parabox",
      title: "Time ParaBox",
      description: t("timeParabox.description"),
      tags: ["React Native"],
      image: timeparabox,
      sectionImage: timeparabox,
      sections: []
    },
    {
      projectId: "bevry",
      title: "Bevry",
      date: t("bevry.date"),
      type: t("bevry.type"),
      duration: t("bevry.duration"),
      description: t("bevry.description"),
      tags: ["NestJs", "Vue.js", "Adobe InDesign", "Adobe Photoshop"],
      image: bevry,
      sectionImage: bevryCocktails,
      sections: [
        {
          title: t("bevry.project.title"),
          text: [t("bevry.project.text.0"), t("bevry.project.text.1")],
          image: bevryThumbnail,
          cta: {
            title: t("bevry.project.cta"),
            link: "https://www.bevry.app/"
          }
        },
        {
          title: t("bevry.features.title"),
          text: [t("bevry.features.text.0"), t("bevry.features.text.1"), t("bevry.features.text.2")],
          image: bevryFeatures,
        },
        {
          title: t("bevry.branding.title"),
          text: [t("bevry.branding.text.0"), t("bevry.branding.text.1")],
          image: bevryBranding,
          cta: {
            title: t("bevry.branding.cta"),
            link: "https://drive.google.com/file/d/1EBQXIvsGwTVECHbXja0FkFjYMyWmaNPS/view"
          }
        },
        {
          title: t("bevry.implementation.title"),
          text: [t("bevry.implementation.text.0"), t("bevry.implementation.text.1")],
          image: bevryGroup,
        },
        {
          title: t("bevry.myTasks.title"),
          text: [t("bevry.myTasks.text.0"), t("bevry.myTasks.text.1")],
          image: bevryScreens,
          cta: {
            title: t("bevry.myTasks.cta"),
            link: "https://mfg.fhstp.ac.at/allgemein/bevry-semesterprojekt-sose24/"
          }
        },
      ],
    },
    {
      projectId: "erika",
      title: "ERIKA",
      description: t("erika.description"),
      tags: ["Figma"],
      image: erika,
      sectionImage: erika,
      sections: [],
    },
    {
      projectId: "ecocalypse",
      title: "Ecocalypse",
      description: t("ecocalypse.description"),
      tags: ["Unity"],
      image: ecocalypse,
      sectionImage: ecocalypse,
      sections: [],
    },
    {
      projectId: "vegan-advent",
      title: "vegan advent",
      description: t("veganAdvent.description"),
      tags: ["React", "Tailwind"],
      image: theme === "light" ? advent : adventDark,
      sectionImage: advent,
      sections: [],
    },
    {
      projectId: "trilum",
      title: "TRILUM",
      description: t("trilum.description"),
      tags: ["Angluar", "PostgreSQL", "Figma"],
      image: trilum,
      sectionImage: trilum,
      sections: [],
    },
    {
      projectId: "nakt",
      title: "NAKT",
      description: t("nakt.description"),
      tags: ["WordPress", "PHP", "Html", "JS", "Css"],
      image: nakt,
      sectionImage: nakt,
      sections: [],
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
