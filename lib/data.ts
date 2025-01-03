import React from "react";
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
import { ProjectType } from "./types";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelor of Science - Medieninformatik",
    location: "TH Nürnberg",
    description:
      "Bachelorarbeit in Kooperation mit Fraunhofer: Analyse und Überarbeitung der Benutzeroberfläche eines Pick-by-Light-Systems zur Verbesserung der Usability am Beispiel des Projekts TRILUM. I'm open to full-time opportunities.",
    icon: React.createElement(LuGraduationCap),
    date: "10/2018 – 03/2022",
  },
  {
    title: "Wissenschaftliche Hilfskraft: Bereich Frontendentwicklung",
    location: "Fraunhofer-Institut für Integrierte Schaltungen, Nürnberg",
    description:
      "Entwicklung mit Vue.js; Durchführung und Auswertung von Objektmessungen bei einem Projekt im Machine Learning Kontext; Erstellung von UI-Prototypen",
    icon: React.createElement(CgWorkAlt),
    date: "01/2021 – 03/2022",
  },
  {
    title: "Entwicklerin: Bereich Frontend - Middleware",
    location: "edison street GmbH, Roth",
    description:
      "Entwicklung an einer Website, um Kunden ihre Verbrauchs-, Leistungs- und Bewegungsdaten anschaulich anzuzeigen unter Einsatz von React und PHP. Nach dem abgeschlossenen Bachelor arbeitete ich dort Vollzeit (04/22 – 08/23) und während des Masterstudiums  Teilzeit (09/23 – 02/25)",
    icon: React.createElement(CgWorkAlt),
    date: "04/2022 – 02/2025",
  },
  {
    title: "Dipl.Ing. Interactive Technologies",
    location: "FH St. Pölten, Österreich",
    description:
      "Masterstudiengang Interactive Technologies, Schwerpunkt Mobile",
    icon: React.createElement(LuGraduationCap),
    date: "09/2023 - dato",
  },
] as const;

export const projectsData = (theme: string): ProjectType[] => [
  {
    title: "Time ParaBox",
    description:
      "Interaktives Rätselspiel mit Escape-Box-Elementen und Zeitreise-Thematik, gesteuert durch eine native App.",
    tags: ["React Native"],
    imageUrl: timeparabox,
  },
  {
    title: "Bevry",
    description:
      "Eine Web-App für Cocktailfans zum Entdecken, Teilen, Bewerten und Verwalten von Getränken.",
    tags: ["NestJs", "Vue.js", "Adobe InDesign", "Adobe Photoshop"],
    imageUrl: bevry,
  },
  {
    title: "ERIKA",
    description:
      "Eine App als digitale Begleiterin für klimafreundliches Handeln und regionale Aktivitäten.",
    tags: ["Figma"],
    imageUrl: erika,
  },
  {
    title: "Ecocalypse",
    description:
      "Erstellung einer immersiven Videospielszene in Unity mit Fokus auf Worldbuilding und Visual Storytelling.",
    tags: ["Unity"],
    imageUrl: ecocalypse,
  },
  {
    title: "Der digitale Adventskalender",
    description:
      "Ein digitaler Adventskalender mit wertvollen Tipps und Infos für ein veganes Leben.",
    tags: ["React", "Tailwind"],
    imageUrl: theme === "light" ? advent : adventDark,
  },
  {
    title: "TRILUM",
    description:
      "Analyse und Überarbeitung der Benutzeroberfläche des drahtlosen Pick-by-Light-Systems TRILUM zur Verbesserung der Usability.",
    tags: ["Angluar", "PostgreSQL", "Figma"],
    imageUrl: trilum,
  },
  {
    title: "NAKT",
    description:
      "WordPress-Website ohne vorgefertigte Themes oder Plugins. Der Fokus lag auf PHP-Programmierung, ergänzt durch HTML, JavaScript und CSS.",
    tags: ["WordPress", "PHP", "Html", "JS", "Css"],
    imageUrl: nakt,
  },
] as const;

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
