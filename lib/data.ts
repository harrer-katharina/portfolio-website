import pgmon from "@/public/pgmon/pgmon-pikachu-app.webp";
import pgmonMockup from "@/public/pgmon/pgmon-preview.webp";
import pgmonLoadingBall from "@/public/pgmon/pgmon-loadingball.webp";
import pgmonMareep from "@/public/pgmon/pgmon-mareep.webp";
import pgmonOcillery from "@/public/pgmon/pgmon-octillery.webp";
import pgmonPikachu from "@/public/pgmon/pgmon-pikachu.webp";
import pgmonRegister from "@/public/pgmon/pgmon-register.webp";

import weidlich from "@/public/dr-weidlich/website-preview.webp";
import weidlichBusinessCards from "@/public/dr-weidlich/business-cards.webp";
import weidlichWebsiteMockup from "@/public/dr-weidlich/website-mockup.webp";
import weidlichSmartphone from "@/public/dr-weidlich/smartphone.webp";
import weidlichSmartphoneMockup from "@/public/dr-weidlich/smartphone-mockup.webp";
import weidlichServices from "@/public/dr-weidlich/services.webp";
import weidlichContact from "@/public/dr-weidlich/website-contact.webp";
import weidlichShooting from "@/public/dr-weidlich/shooting.webp";

import timeparabox from "@/public/timeParabox/time-parabox.webp";
import timeparaboxPoster from "@/public/timeParabox/timeParabox-poster.webp";
import timeparaboxApp from "@/public/timeParabox/timeParabox-app.webp";
import timeparaboxMockups from "@/public/timeParabox/timeParabox-mockup.webp";
import timeparaboxStory from "@/public/timeParabox/timeParabox-storyline.png";
import timeparaboxStoryDark from "@/public/timeParabox/timeParabox-storyline-darkmode.png";
import timeparaboxEpochs from "@/public/timeParabox/timeParabox-epoch.webp";
import timeparaboxFeatures from "@/public/timeParabox/timeParabox-feature.webp";
import timeparaboxVernissage from "@/public/timeParabox/timeParabox-vernissage.webp";

import bevry from "@/public/bevry/bevry-mocktail.webp";
import bevrySplash from "@/public/bevry/bevry-cocktail-splash.webp";
import bevryFeatures from "@/public/bevry/bevry-features.webp";
import bevryThumbnail from "@/public/bevry/bevry-thumbnail.webp";
import bevryBranding from "@/public/bevry/bevry-mockup-drucksorten.webp";
import bevryWireframes from "@/public/bevry/bevry-wireframes.webp";
import bevryGroup from "@/public/bevry/bevry-group.jpg";
import bevryCheers from "@/public/bevry/bevry-cheers.webp";
import bevryScreens from "@/public/bevry/bevry-kathy-politan.webp";

import erika from "@/public/erika/erika-closeup.webp";
import erikaHand from "@/public/erika/erika-thumbnail.webp";
import erikaMockup from "@/public/erika/erika-app.webp";
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
import veganAdvent from "@/public/veganAdvent/veganAdvent-app-mockup.webp";
import veganAdventAppMockup from "@/public/veganAdvent/veganAdvent-mockup.webp";
import veganAdventMotivation from "@/public/veganAdvent/veganAdvent-motivation.webp";
import veganAdventPoster from "@/public/veganAdvent/veganAdvent-poster.webp";
import veganAdventApp from "@/public/veganAdvent/veganAdvent-app.webp";
import veganAdventMockups from "@/public/veganAdvent/veganAdvent-mockups.webp";

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

export const getExperiencesData = (t: (key: string) => string) => {
  return [
    {
      title: t("master.title"),
      location: t("master.location"),
      link: "https://www.fhstp.ac.at/",
      description: [t("master.description.0"), t("master.description.1")],
      icon: "/experience/fh-st-pölten-logo.webp",
      date: t("master.date"),
    },
    {
      title: t("job2.title"),
      location: t("job2.location"),
      link: "https://www.edisonstreet.com/",
      tags: ["React", "PHP", "Figma"],
      description: [t("job2.description.0"), t("job2.description.1"), t("job2.description.2")],
      icon: "/experience/edisonstreet-logo.jpg",
      date: t("job2.date"),
    },
    {
      title: t("job1.title"),
      location: t("job1.location"),
      link: "https://www.scs.fraunhofer.de/",
      tags: ["Vue.js", "Angular", "Figma"],
      description: [t("job1.description.0"), t("job1.description.1"), t("job1.description.2")],
      icon: "/experience/fraunhofer-logo.jpeg",
      date: t("job1.date"),
    },
    {
      title: t("bachelor.title"),
      location: t("bachelor.location"),
      link: "https://www.th-nuernberg.de/",
      description: [t("bachelor.description.0"), t("bachelor.description.1"), t("bachelor.description.2")],
      icon: "/experience/th-nuernberg-ohm-logo.png",
      date: t("bachelor.date"),
    },
    {
      title: t("school.title"),
      location: t("school.location"),
      link: "https://gymnasium-roth.de/",
      description: [],
      icon: "/experience/gym-roth-logo.png",
      date: t("school.date"),
    },
  ];
};

export const getProjectsData = (theme: string, t: (key: string) => string) => {
  return [
    {
      projectId: "dr-weidlich",
      title: "Dr. Weidlich",
      showTitle: false,
      scaleCards: true,
      date: t("weidlich.date"),
      type: t("weidlich.type"),
      duration: t("weidlich.duration"),
      description: t("weidlich.description"),
      tags: ["WordPress", "Figma"],
      image: weidlich,
      sectionImage: weidlichWebsiteMockup,
      sections: [
        {
          title: t("weidlich.project.title"),
          text: [t("weidlich.project.text.0"),t("weidlich.project.text.1")],
          image: weidlichSmartphoneMockup,
          imageSize: "55%",
          cta: {
            title: t("weidlich.project.cta"),
            link: "https://dr-dietmar-weidlich.de"
          }
        },
        {
          title: t("weidlich.features.title"),
          text: [t("weidlich.features.text.0"), t("weidlich.features.text.1")],
          image: weidlichServices,
          imageSize: "60%",
        },
        {
          title: t("weidlich.branding.title"),
          text: [t("weidlich.branding.text.0"), t("weidlich.branding.text.1")],
          image: weidlichBusinessCards,
          imageSize: "60%",
        },
        {
          title: t("weidlich.photography.title"),
          text: [t("weidlich.photography.text.0"), t("weidlich.photography.text.1")],
          image: weidlichShooting,
          imageSize: "60%",
        },
        {
          title: t("weidlich.customer.title"),
          text: [t("weidlich.customer.text.0"), t("weidlich.customer.text.1")],
          image: weidlichSmartphone,
          imageSize: "60%",
        },
        {
          title: t("weidlich.learnings.title"),
          text: [t("weidlich.learnings.text.0"), t("weidlich.learnings.text.1"), t("weidlich.learnings.text.2")],
          image: weidlichContact,
          imageSize: "55%",
        },
      ]
    },
    {
      projectId: "bevry",
      title: "Bevry",
      showTitle: false,
      scaleCards: false,
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
          className: "bg-[#FFC38D]",
          image: bevryThumbnail,
          imageSize: "66%",
          cta: {
            title: t("bevry.project.cta"),
            link: "https://www.bevry.app/"
          }
        },
        {
          title: t("bevry.features.title"),
          text: [t("bevry.features.text.0"), t("bevry.features.text.1"), t("bevry.features.text.2")],
          className: "bg-[#FFB889]",
          image: bevryFeatures,
          imageSize: "60%",
        },
        {
          title: t("bevry.branding.title"),
          text: [t("bevry.branding.text.0"), t("bevry.branding.text.1")],
          className: "bg-[#FFB084]",
          image: bevryBranding,
          imageSize: "66%",
          cta: {
            title: t("bevry.branding.cta"),
            link: "https://drive.google.com/file/d/1EBQXIvsGwTVECHbXja0FkFjYMyWmaNPS/view"
          }
        },
        {
          title: t("bevry.brandbook.title"),
          text: [],
          className: "bg-[#FFA98B]",
          image: "",
        },
        {
          title: t("bevry.wireframes.title"),
          text: [t("bevry.wireframes.text.0"), t("bevry.wireframes.text.1"), t("bevry.wireframes.text.2")],
          className: "bg-[#FB9E8F]",
          image: bevryWireframes,
          imageSize: "70%",
        },
        {
          title: t("bevry.myTasks.title"),
          text: [t("bevry.myTasks.text.0")],
          className: "bg-[#FFB084]",
          image: bevryScreens,
          imageSize: "66%",
          cta: {
            title: t("bevry.myTasks.cta"),
            link: "https://mfg.fhstp.ac.at/allgemein/bevry-semesterprojekt-sose24/"
          }
        },
        {
          title: t("bevry.team.title"),
          text: [t("bevry.team.text.0"), t("bevry.team.text.1")],
          className: "bg-[#FFB889]",
          image: bevryGroup,
          imageSize: "60%",
        },
        {
          title: t("bevry.collaboration.title"),
          text: [t("bevry.collaboration.text.0"), t("bevry.collaboration.text.1"), t("bevry.collaboration.text.2"), t("bevry.collaboration.text.3"), t("bevry.collaboration.text.4")],
          className: "bg-[#FFC38D]",
          image: bevryCheers,
          imageSize: "66%",
        },
      ],
    },
    {
      projectId: "erika",
      title: "Erika",
      showTitle: true,
      scaleCards: true,
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
          text: [t("erika.project.text.0")],
          className: "bg-[#C1E5CC]",
          image: erikaMockup,
          imageSize: "66%",
          cta: {
            title: t("erika.project.cta"),
            link: "https://erika.fhstp.ac.at/"
          }
        },
        {
          title: t("erika.app.title"),
          text: [t("erika.app.text.0")],
          className: "bg-[#B5DCCD]",
          image: erikaProject,
          imageSize: "66%",
        },
        {
          title: t("erika.implementation.title"),
          text: [t("erika.implementation.text.0"), t("erika.implementation.text.1"), t("erika.implementation.text.2")],
          className: "bg-[#AFD8CE]",
          image: erikaScreens,
          imageSize: "66%",
        },
        {
          title: t("erika.sustainability.title"),
          text: [t("erika.sustainability.text.0"), t("erika.sustainability.text.1"),t("erika.sustainability.text.2")],
          className: "bg-[#A9D3CF]",
          image: erikaLogo,
          imageSize: "40%",
          cta: {
            title: t("erika.sustainability.cta"),
            link: "https://mfg.fhstp.ac.at/allgemein/sustainable-webdesign/"
          }
        },
        {
          title: t("erika.prototyping.title"),
          text: [t("erika.prototyping.text.0"), t("erika.prototyping.text.1"), t("erika.prototyping.text.2")],
          className: "bg-[#A3CDD0]",
          image: erikaPrototype,
          imageSize: "60%",
          cta: {
            title: t("erika.prototyping.cta"),
            link: "https://www.figma.com/proto/e10aY7un7NpT8NdGW9HgAu/ERIKA?page-id=0%3A1&node-id=54-1755&viewport=735%2C324%2C0.06&t=pEKHDE4FGPe4fp6N-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=54%3A3545",
            position: "right"
          }
        },
      ],
    },
    {
      projectId: "time-parabox",
      title: "Time Parabox",
      showTitle: false,
      scaleCards: true,
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
          text: [t("timeParabox.project.text.0")],
          className: "bg-[#F4F2EE]",
          image: timeparaboxApp,
          imageSize: "66%",
          cta: {
            title: "GitHub-Repository ansehen",
            link: "https://github.com/Time-Parabox/time-parabox"
          }
        },
        {
          title: t("timeParabox.concept.title"),
          text: [t("timeParabox.concept.text.0"), t("timeParabox.concept.text.1")],
          className: "bg-[#F0EDE7]",
          image: timeparaboxMockups,
          imageSize: "70%",
        },
        {
          title: t("timeParabox.story.title"),
          text: [t("timeParabox.story.text.0"), t("timeParabox.story.text.1")],
          className: "bg-[#EBE7DF]",
          image: theme === "light" ? timeparaboxStory : timeparaboxStoryDark,
          imageSize: "60%",
        },
        {
          title: t("timeParabox.implementation.title"),
          text: [t("timeParabox.implementation.text.0"), t("timeParabox.implementation.text.1")],
          className: "bg-[#E5E1DB]",
          image: timeparaboxEpochs,
          imageSize: "60%",
        },
        {
          title: t("timeParabox.myTasks.title"),
          text: [t("timeParabox.myTasks.text.0"), t("timeParabox.myTasks.text.1")],
          className: "bg-[#D8D1C8]",
          image: timeparaboxFeatures,
          imageSize: "66%",
        },
        {
          title: t("timeParabox.presentation.title"),
          text: [t("timeParabox.presentation.text.0"), t("timeParabox.presentation.text.1")],
          className: "bg-[#D1C9BF]",
          image: timeparaboxVernissage,
          imageSize: "60%",
        },
      ]
    },
    {
      projectId: "pgmon",
      title: "PGMon+",
      showTitle: true,
      date: t("pgmon.date"),
      type: t("pgmon.type"),
      duration: t("pgmon.duration"),
      description: t("pgmon.description"),
      tags: ["Vue.js", "Vite", "Java", "Spring Boot"],
      image: pgmon,
      sectionImage: pgmonMockup,
      sections: [
        {
          title: t("pgmon.project.title"),
          text: [t("pgmon.project.text.0"),t("pgmon.project.text.1")],
          image: pgmonOcillery
        },
        {
          title: t("pgmon.features.title"),
          text: [t("pgmon.features.text.0"), t("pgmon.features.text.1")],
          image: pgmonMareep,
        },
        {
          title: t("pgmon.implementation.title"),
          text: [t("pgmon.implementation.text.0"), t("pgmon.implementation.text.1"), t("pgmon.implementation.text.2")],
          image: pgmonPikachu,
        },
        {
          title: t("pgmon.role.title"),
          text: [t("pgmon.role.text.0"), t("pgmon.role.text.1")],
          image: pgmonRegister,
        },
        {
          title: t("pgmon.learnings.title"),
          text: [t("pgmon.learnings.text.0"), t("pgmon.learnings.text.1")],
          image: pgmonLoadingBall,
        },
      ]
    },
    {
      projectId: "vegan-advent",
      title: "vegan advent",
      showTitle: true,
      scaleCards: true,
      date: t("veganAdvent.date"),
      type: t("veganAdvent.type"),
      duration: t("veganAdvent.duration"),
      description: t("veganAdvent.description"),
      tags: ["React", "Tailwind CSS"],
      image: theme === "light" ? advent : adventDark,
      sectionImage: veganAdvent,
      sections: [
        {
          title: t("veganAdvent.background.title"),
          text: [t("veganAdvent.background.text.0"), t("veganAdvent.background.text.1")],
          image: veganAdventAppMockup,
          imageSize: "60%",
          cta: {
            title: t("veganAdvent.background.cta"),
            link: "https://advent.katharina-harrer.de/"
          }
        },
        {
          title: t("veganAdvent.project.title"),
          text: [t("veganAdvent.project.text.0"), t("veganAdvent.project.text.1")],
          image: veganAdventMotivation,
          imageSize: "60%",
        },
        {
          title: t("veganAdvent.poster.title"),
          text: [t("veganAdvent.poster.text.0"), t("veganAdvent.poster.text.1")],
          image: veganAdventPoster,
          imageSize: "66%",
          cta: {
            title: t("veganAdvent.poster.cta"),
            link: "https://drive.google.com/file/d/1uu6m9OcNwpwe_QN5euQJ_9m91DBxdzxK/view?usp=sharing"
          }
        },
        {
          title: t("veganAdvent.implementation.title"),
          text: [t("veganAdvent.implementation.text.0"), t("veganAdvent.implementation.text.1"), t("veganAdvent.implementation.text.2")],
          image: veganAdventApp,
          imageSize: "60%",
          cta: {
            title: t("veganAdvent.implementation.cta"),
            link: "https://github.com/harrer-katharina/advent-calendar"
          }
        },
        {
          title: t("veganAdvent.challenges.title"),
          text: [t("veganAdvent.challenges.text.0"), t("veganAdvent.challenges.text.1")],
          image: veganAdventMockups,
          imageSize: "60%",
        },
      ],
    },
    {
      projectId: "ecocalypse",
      title: "Ecocalypse",
      showTitle: true,
      scaleCards: true,
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
          imageSize: "60%",
        },
        {
          title: t("ecocalypse.implementation.title"),
          text: [t("ecocalypse.implementation.text.0"), t("ecocalypse.implementation.text.1")],
          image: ecocalypsePoster,
          imageSize: "58%",
        },
        {
          title: t("ecocalypse.scene.title"),
          text: [t("ecocalypse.scene.text.0"), t("ecocalypse.scene.text.1")],
          image: ecocalypseScene,
          imageSize: "60%",
        },
        {
          title: t("ecocalypse.objects.title"),
          text: [t("ecocalypse.objects.text.0"), t("ecocalypse.objects.text.1"), t("ecocalypse.objects.text.2")],
          image: ecocalypseCollage,
          imageSize: "59%",
          cta: {
            title: t("ecocalypse.objects.cta"),
            link: "https://drive.google.com/file/d/1cGoZPNDv9JPIMD23VnicUWJK8yOmvcYI/view?usp=sharing"
          }
        },
      ],
    },
    {
      projectId: "trilum",
      title: "TRILUM",
      showTitle: true,
      scaleCards: true,
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
          imageSize: "55%",
          cta: {
            title: t("trilum.project.cta"),
            link: "https://drive.google.com/file/d/1G3HIAdD7QrI6R-QKIR5ho8WuN532FTM3/view?usp=sharing"
          }
        },
        {
          title: t("trilum.init.title"),
          text: [t("trilum.init.text.0"), t("trilum.init.text.1")],
          image: trilumTechStack,
          imageSize: "60%",
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
          imageSize: "60%",
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
      scaleCards: true,
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
          imageSize: "60%",
        },
        {
          title: t("nakt.implementation.title"),
          text: [t("nakt.implementation.text.0"), t("nakt.implementation.text.1")],
          image: naktBackend,
          imageSize: "60%",
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
  "Figma",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "JavaScript",
  "TypeScript",
  "WordPress",
  "React",
  "Next.js",
  "Vue.js",
  "NestJs",
  "PHP",
  "SQL",
  "Git",
] as const;
