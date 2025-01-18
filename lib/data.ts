import React from "react";
import { useTranslations } from "next-intl";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import trilum from "@/public/trilum-orders-overview.png";
import nakt from "@/public/nakt-recipe-customizer-desktop.png";
import timeparabox from "@/public/time-parabox.png";

import bevry from "@/public/bevry/bevry-mocktail.png";
import bevryCocktails from "@/public/bevry/bevry-cocktails.png";
import bevryFeatures from "@/public/bevry/bevry-features.png";
import bevryThumbnail from "@/public/bevry/bevry-thumbnail.png";
import bevryBranding from "@/public/bevry/bevry-mockup-drucksorten.png";
import bevryGroup from "@/public/bevry/bevry-group.jpg";
import bevryScreens from "@/public/bevry/bevry-kathy-politan.png";

import erika from "@/public/erika/erika-closeup.png";
import erikaHand from "@/public/erika/erika-hand.png";
import erikaProject from "@/public/erika/erika-project.png";
import erikaScreens from "@/public/erika/erika-mockups.png";
import erikaLogo from "@/public/erika/erika-logo.svg";
import erikaPrototype from "@/public/erika/erika-prototype.png";

import ecocalypse from "@/public/ecocalypse/ecocalypse-scene-desk.png";
import ecocalypsePreview from "@/public/ecocalypse/ecocalypse-preview.jpg"
import ecocalypseEntrance from "@/public/ecocalypse/ecocalypse-scene-entrance.webp";
import ecocalypsePoster from "@/public/ecocalypse/ecocalypse-natures-revenge-poster.webp";
import ecocalypseScene from "@/public/ecocalypse/ecocalypse-scene.webp";
import ecocalypseCollage from "@/public/ecocalypse/ecocalypse-collage.webp";

import advent from "@/public/advent-light.png";
import adventDark from "@/public/advent-dark.png";
import veganAdvent from "@/public/veganAdvent/veganAdvent.png";
import veganAdventPoster from "@/public/veganAdvent/veganAdvent-poster.png";
import veganAdventApp from "@/public/veganAdvent/veganAdvent-app.png";

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
      date: t("erika.date"),
      type: t("erika.type"),
      duration: t("erika.duration"),
      description: t("erika.description"),
      tags: ["Figma"],
      image: erika,
      sectionImage: erikaHand,
      sections: [
        {
          title: t("erika.project.title"),
          text: [t("erika.project.text.0"), t("erika.project.text.1")],
          image: erikaProject,
          cta: {
            title: t("erika.project.cta"),
            link: "https://erika.fhstp.ac.at/"
          }
        },
        {
          title: t("erika.implementation.title"),
          text: [t("erika.implementation.text.0"), t("erika.implementation.text.1"), t("erika.implementation.text.2")],
          image: erikaScreens,
        },
        {
          title: t("erika.sustainability.title"),
          text: [t("erika.sustainability.text.0"), t("erika.sustainability.text.1"),t("erika.sustainability.text.2"), t("erika.sustainability.text.3")],
          image: erikaLogo,
          cta: {
            title: t("erika.sustainability.cta"),
            link: "https://mfg.fhstp.ac.at/allgemein/sustainable-webdesign/"
          }
        },
        {
          title: t("erika.prototyping.title"),
          text: [t("erika.prototyping.text.0"), t("erika.prototyping.text.1"), t("erika.prototyping.text.2")],
          image: erikaPrototype,
          cta: {
            title: t("erika.prototyping.cta"),
            link: "https://www.figma.com/proto/e10aY7un7NpT8NdGW9HgAu/ERIKA?page-id=0%3A1&node-id=54-1755&viewport=735%2C324%2C0.06&t=pEKHDE4FGPe4fp6N-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=54%3A3545"
          }
        },
      ],
    },
    {
      projectId: "ecocalypse",
      title: "Ecocalypse",
      date: t("ecocalypse.date"),
      type: t("ecocalypse.type"),
      duration: t("ecocalypse.duration"),
      description: t("ecocalypse.description"),
      tags: ["Unity"],
      image: ecocalypse,
      sectionImage: ecocalypsePreview,
      sections: [
        {
          title: t("ecocalypse.project.title"),
          text: [t("ecocalypse.project.text.0"), t("ecocalypse.project.text.1"), t("ecocalypse.project.text.2")],
          image: ecocalypseEntrance,
        },
        {
          title: t("ecocalypse.implementation.title"),
          text: [t("ecocalypse.implementation.text.0"), t("ecocalypse.implementation.text.1")],
          image: ecocalypsePoster,
        },
        {
          title: t("ecocalypse.scene.title"),
          text: [t("ecocalypse.scene.text.0"), t("ecocalypse.scene.text.1")],
          image: ecocalypseScene,
        },
        {
          title: t("ecocalypse.objects.title"),
          text: [t("ecocalypse.objects.text.0"), t("ecocalypse.objects.text.1"), t("ecocalypse.objects.text.2"), t("ecocalypse.objects.text.3"), t("ecocalypse.objects.text.4")],
          image: ecocalypseCollage,
          cta: {
            title: t("ecocalypse.objects.cta"),
            link: "https://drive.google.com/file/d/1cGoZPNDv9JPIMD23VnicUWJK8yOmvcYI/view?usp=sharing"
          }
        },
      ],
    },
    {
      projectId: "vegan-advent",
      title: "vegan advent",
      date: t("veganAdvent.date"),
      type: t("veganAdvent.type"),
      duration: t("veganAdvent.duration"),
      description: t("veganAdvent.description"),
      tags: ["React", "Tailwind"],
      image: theme === "light" ? advent : adventDark,
      sectionImage: veganAdvent,
      sections: [
        {
          title: t("veganAdvent.project.title"),
          text: [t("veganAdvent.project.text.0"), t("veganAdvent.project.text.1")],
          image: veganAdventPoster,
          cta: {
            title: t("veganAdvent.project.cta"),
            link: "https://it231508.students.fhstp.ac.at/adventcalendar"
          }
        },
        {
          title: t("veganAdvent.implementation.title"),
          text: [t("veganAdvent.implementation.text.0"), t("veganAdvent.implementation.text.1"), t("veganAdvent.implementation.text.2")],
          image: veganAdventApp,
          cta: {
            title: t("veganAdvent.implementation.cta"),
            link: "https://github.com/katharina-harrer/advent-calendar"
          }
        },
      ],
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
