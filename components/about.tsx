"use client";

import React from "react";
import { useTranslations } from "next-intl";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const t = useTranslations("About");
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>{t("title")}</SectionHeading>
      <p className="mb-3">
        {t("introPart1")}{" "}
        <span className="font-semibold">{t("introHighlight1")}</span>{" "}
        {t("introPart2")}{" "}
        <span className="font-semibold">{t("introHighlight2")}</span>
        {t("introPart3")}{" "}
        <span className="font-semibold">{t("introHighlight3")}</span>
      </p>
      <p>{t("hobbiesPart1")}</p>
    </motion.section>
  );
}
