"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useVariants } from "@/context/variants-context";
import SectionHeading from "./section-heading";
import Carousel from "./img-carousel";

export default function About() {
  const t = useTranslations("About");
  const { ref } = useSectionInView("About");
  const { setVariant } = useVariants();
  const mouseEnter = () => setVariant("TEXT");
  const mouseLeave = () => setVariant("DEFAULT");

  const hobbyImages = [
    "/hobby/hungary-budapest.webp",
    "/hobby/dolomites-south-tyrol.webp",
    "/hobby/goeteborg-sweden.webp",
    "/hobby/vienna-austria.webp",
    "/hobby/hiking-karersee-latemar.webp",
    "/hobby/sunrise-ride.webp",
  ];
  return (
    <motion.section
      ref={ref}
      id="about"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="max-w-[100rem] mb-28 sm:mb-40 px-0 md:px-32 scroll-mt-28 sm:scroll-mt-8"
    >
      <div className="flex flex-col-reverse xl:flex-row items-center justify-center gap-6 xl:gap-0 min-h-screen">
        <div className="xl:w-1/2">
          <Carousel images={hobbyImages} />
        </div>
        <div className="xl:w-1/2 leading-relaxed text-center text-justify hyphens-auto md:text-left">
          <SectionHeading>{t("title")}</SectionHeading>
          <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
            <p className="mb-3">
              {t("introPart1")}{" "}
              <span className="font-semibold">{t("introHighlight1")}</span>{" "}
              {t("introPart2")}{" "}
              <span className="font-semibold">{t("introHighlight2")}</span>{" "}
              {t("introPart3")}
            </p>
            <p className="mb-3">
              {t("introPart4")}{" "}
              <span className="font-semibold">{t("introHighlight4")}</span>
              {t("introPart5")}
            </p>
            <p>{t("hobbiesPart1")}</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
