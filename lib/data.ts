import { useTranslations } from "next-intl";

import timeparabox from "@/public/timeParabox/time-parabox.webp";
import timeparaboxPoster from "@/public/timeParabox/timeParabox-poster.webp";
import timeparaboxMockups from "@/public/timeParabox/timeParabox-mockup.webp";
import timeparaboxEpochs from "@/public/timeParabox/timeParabox-epoch.webp";
import timeparaboxFeatures from "@/public/timeParabox/timeParabox-feature.webp";

import bevry from "@/public/bevry/bevry-mocktail.webp";
import bevrySplash from "@/public/bevry/bevry-cocktail-splash.webp";
import bevryFeatures from "@/public/bevry/bevry-features.webp";
import bevryThumbnail from "@/public/bevry/bevry-thumbnail.webp";
import bevryBranding from "@/public/bevry/bevry-mockup-drucksorten.webp";
import bevryGroup from "@/public/bevry/bevry-group.jpg";
import bevryCheers from "@/public/bevry/bevry-cheers.webp";
import bevryScreens from "@/public/bevry/bevry-kathy-politan.webp";

import erika from "@/public/erika/erika-closeup.webp";
import erikaHand from "@/public/erika/erika-hand.webp";
import erikaProject from "@/public/erika/erika-project.webp";
import erikaScreens from "@/public/erika/erika-mockup-screens.webp";
import erikaLogo from "@/public/erika/erika-logo.webp";
import erikaPrototype from "@/public/erika/erika-prototype.webp";

import ecocalypse from "@/public/ecocalypse/ecocalypse-scene-desk.webp";
import ecocalypsePreview from "@/public/ecocalypse/ecocalypse-preview.webp"
import ecocalypseEntrance from "@/public/ecocalypse/ecocalypse-scene-entrance.webp";
import ecocalypsePoster from "@/public/ecocalypse/ecocalypse-natures-revenge-poster.webp";
import ecocalypseScene from "@/public/ecocalypse/ecocalypse-scene.webp";
import ecocalypseCollage from "@/public/ecocalypse/ecocalypse-collage.webp";

import advent from "@/public/veganAdvent/advent-light.webp";
import adventDark from "@/public/veganAdvent/advent-dark.webp";
import veganAdvent from "@/public/veganAdvent/veganAdvent.webp";
import veganAdventPoster from "@/public/veganAdvent/veganAdvent-poster.webp";
import veganAdventApp from "@/public/veganAdvent/veganAdvent-app.webp";

import trilum from "@/public/trilum/trilum-orders-overview.webp";
import trilumOrders from "@/public/trilum/trilum-overview.webp";
import trilumTechStack from "@/public/trilum/trilum-tech-stack.webp";
import trilumWorkflow from "@/public/trilum/trilum-workflow.webp";
import trilumUsabilityTests from "@/public/trilum/trilum-usability-tests.webp";

import nakt from "@/public/nakt/nakt-recipe-customizer-desktop.webp";
import naktPreview from "@/public/nakt/nakt-preview.webp";
import naktBackend from "@/public/nakt/nakt-recipe-backend.webp";

export const getLinks = (t: (key: string) => string) => {
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
      name: "Experience",
      title: t("experience"),
      hash: "#experience",
    },
    {
      name: "Skills",
      title: t("skills"),
      hash: "#skills",
    },
    {
      name: "Contact",
      title: t("contact"),
      hash: "#contact",
    },
  ];
};

export const getExperiencesData = (t: (key: string) => string) => {
  return [
    {
      title: t("bachelorTitle"),
      location: t("bachelorLocation"),
      link: "https://www.th-nuernberg.de/",
      description: [t("bachelorDescription.0"), t("bachelorDescription.1"), t("bachelorDescription.2")],
      icon: "/experience/th-nuernberg-ohm-logo.png",
      date: t("bachelorDate"),
    },
    {
      title: t("job1Title"),
      location: t("job1Location"),
      link: "https://www.scs.fraunhofer.de/",
      tags: ["Vue.js", "Figma"],
      description: [t("job1Description.0"), t("job1Description.1"), t("job1Description.2")],
      icon: "/experience/fraunhofer-logo.jpeg",
      date: t("job1Date"),
    },
    {
      title: t("job2Title"),
      location: t("job2Location"),
      link: "https://www.edisonstreet.com/",
      tags: ["React", "PHP", "Figma", "LaTeX"],
      description: [t("job2Description.0"), t("job2Description.1"), t("job2Description.2")],  
      icon: "/experience/edisonstreet-logo.jpg",
      date: t("job2Date"),
    },
    {
      title: t("masterTitle"),
      location: t("masterLocation"),
      link: "https://www.fhstp.ac.at/",
      description: [t("masterDescription.0"), t("masterDescription.1")],
      icon: "/experience/fh-st-pölten-logo.webp",
      date: t("masterDate"),
    },
  ];
};

export const getProjectsData = (theme: string, t: (key: string) => string) => {
  return [
    {
      projectId: "time-parabox",
      title: "Time Parabox",
      showTitle: false,
      date: t("timeParabox.date"),
      type: t("timeParabox.type"),
      duration: t("timeParabox.duration"),
      description: t("timeParabox.description"),
      tags: ["React Native"],
      image: timeparabox,
      sectionImage: timeparaboxPoster,
      sections: [
        {
          title: t("timeParabox.project.title"),
          text: [t("timeParabox.project.text.0"), t("timeParabox.project.text.1"), t("timeParabox.project.text.2")],
          className: "bg-[#F4F2EE]",
          image: timeparaboxMockups,
          cta: {
            title: "",
            link: ""
          }
        },
        {
          title: t("timeParabox.implementation.title"),
          text: [t("timeParabox.implementation.text.0"), t("timeParabox.implementation.text.1")],
          className: "bg-[#EBE7DF]",
          image: timeparaboxEpochs,
        },
        {
          title: t("timeParabox.myTasks.title"),
          text: [t("timeParabox.myTasks.text.0"), t("timeParabox.myTasks.text.1")],
          className: "bg-[#D8D1C8]",
          image: timeparaboxFeatures,
        },
      ]
    },
    {
      projectId: "bevry",
      title: "Bevry",
      showTitle: false,
      date: t("bevry.date"),
      type: t("bevry.type"),
      duration: t("bevry.duration"),
      description: t("bevry.description"),
      tags: ["NestJs", "Vue.js", "Adobe InDesign", "Adobe Photoshop"],
      image: bevry,
      sectionImage: bevrySplash,
      sections: [
        {
          title: t("bevry.project.title"),
          text: [t("bevry.project.text.0"), t("bevry.project.text.1")],
          className: "bg-[#FFBF85]",
          image: bevryThumbnail,
          cta: {
            title: t("bevry.project.cta"),
            link: "https://www.bevry.app/"
          }
        },
        {
          title: t("bevry.features.title"),
          text: [t("bevry.features.text.0"), t("bevry.features.text.1"), t("bevry.features.text.2")],
          className: "bg-[#FFB685]",
          image: bevryFeatures,
        },
      
        {
          title: t("bevry.branding.title"),
          text: [t("bevry.branding.text.0"), t("bevry.branding.text.1")],
          className: "bg-[#FFA98B]",
          image: bevryBranding,
          cta: {
            title: t("bevry.branding.cta"),
            link: "https://drive.google.com/file/d/1EBQXIvsGwTVECHbXja0FkFjYMyWmaNPS/view"
          }
        },
        {
          title: t("bevry.team.title"),
          text: [t("bevry.team.text.0"), t("bevry.team.text.1")],
          className: "bg-[#FB9E8F]",
          image: bevryGroup,
        },
        {
          title: t("bevry.collaboration.title"),
          text: [t("bevry.collaboration.text.0")],
          className: "bg-[#F6938F]",
          image: bevryCheers,
        },  
        {
          title: t("bevry.myTasks.title"),
          text: [t("bevry.myTasks.text.0")],
          className: "bg-[#EF8E99]",
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
      title: "Erika",
      showTitle: false,
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
          className: "bg-[#A6D1D4]",
          image: erikaProject,
          cta: {
            title: t("erika.project.cta"),
            link: "https://erika.fhstp.ac.at/"
          }
        },
        {
          title: t("erika.implementation.title"),
          text: [t("erika.implementation.text.0"), t("erika.implementation.text.1"), t("erika.implementation.text.2")],
          className: "bg-[#B0D9D3]",
          image: erikaScreens,
        },
        {
          title: t("erika.sustainability.title"),
          text: [t("erika.sustainability.text.0"), t("erika.sustainability.text.1"),t("erika.sustainability.text.2")],
          className: "bg-[#BCE1CF]",
          image: erikaLogo,
          imageSize: "1/3",
          cta: {
            title: t("erika.sustainability.cta"),
            link: "https://mfg.fhstp.ac.at/allgemein/sustainable-webdesign/"
          }
        },
        {
          title: t("erika.prototyping.title"),
          text: [t("erika.prototyping.text.0"), t("erika.prototyping.text.1"), t("erika.prototyping.text.2")],
          className: "bg-[#C2E7D0]",
          image: erikaPrototype,
          cta: {
            title: t("erika.prototyping.cta"),
            link: "https://www.figma.com/proto/e10aY7un7NpT8NdGW9HgAu/ERIKA?page-id=0%3A1&node-id=54-1755&viewport=735%2C324%2C0.06&t=pEKHDE4FGPe4fp6N-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=54%3A3545",
            position: "right"
          }
        },
      ],
    },
    {
      projectId: "ecocalypse",
      title: "Ecocalypse",
      showTitle: true,
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
          text: [t("ecocalypse.objects.text.0"), t("ecocalypse.objects.text.1"), t("ecocalypse.objects.text.2")],
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
      showTitle: true,
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
      showTitle: true,
      date: t("trilum.date"),
      type: t("trilum.type"),
      duration: t("trilum.duration"),
      description: t("trilum.description"),
      tags: ["Angluar", "PostgreSQL", "Figma"],
      image: trilum,
      sectionImage: trilumOrders,
      sections: [
        {
          title: t("trilum.project.title"),
          text: [t("trilum.project.text.0"), t("trilum.project.text.1"), t("trilum.project.text.2")],
          image: trilum,
          cta: {
            title: t("trilum.project.cta"),
            link: "https://drive.google.com/file/d/1G3HIAdD7QrI6R-QKIR5ho8WuN532FTM3/view?usp=sharing"
          }
        },
        {
          title: t("trilum.init.title"),
          text: [t("trilum.init.text.0"), t("trilum.init.text.1")],
          image: trilumTechStack,
          cta: {
            title: t("trilum.init.cta"),
            link: "https://www.scs.fraunhofer.de/de/referenzen/pbll.html"
          }
        },
        {
          title: t("trilum.implementation.title"),
          text: [t("trilum.implementation.text.0"), t("trilum.implementation.text.1"), t("trilum.implementation.text.2"), t("trilum.implementation.text.3")],
          image: trilumWorkflow,
        },
        {
          title: t("trilum.result.title"),
          text: [t("trilum.result.text.0")],
          image: trilumUsabilityTests,
          cta: {
            title: t("trilum.result.cta"),
            link: "https://drive.google.com/file/d/1GiQUaG59pa8_f3yQi-VuC04ypb8uHJ2m/view?usp=sharing"
          }
        },
      ],
    },
    {
      projectId: "nakt",
      title: "NAKT",
      showTitle: true,
      date: t("nakt.date"),
      type: t("nakt.type"),
      duration: t("nakt.duration"),
      description: t("nakt.description"),
      tags: ["WordPress", "PHP", "Html", "JS", "Css"],
      image: nakt,
      sectionImage: naktPreview,
      sections: [
        {
          title: t("nakt.project.title"),
          text: [t("nakt.project.text.0"), t("nakt.project.text.1")],
          image: nakt,
        },
        {
          title: t("nakt.implementation.title"),
          text: [t("nakt.implementation.text.0"), t("nakt.implementation.text.1")],
          image: naktBackend,
          cta: {
            title: t("nakt.implementation.cta"),
            link: "https://github.com/katharina-harrer/wp-plugins"
          }
        },
      ],
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
