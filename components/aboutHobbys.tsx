"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useVariants } from "@/context/variants-context";
import Carousel from "./img-carousel";
import Paragraph from "./paragraph";

export default function About() {
  const t = useTranslations("About");
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
      id="about"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="max-w-[100rem] mb-28 px-0 md:px-32 scroll-mt-28 sm:scroll-mt-8"
    >
      <div className="flex flex-col-reverse xl:flex-row items-center justify-center gap-6 xl:gap-0 min-h-screen">
        <div className="xl:w-1/2">
          <Carousel images={hobbyImages} />
        </div>
        <div className="xl:w-1/2 leading-relaxed text-center text-justify hyphens-auto md:text-left">
          <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
            <Paragraph paragraph={t("hobbies")} />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
