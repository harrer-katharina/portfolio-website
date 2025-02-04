"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { useSectionInView } from "@/lib/hooks";
import { useVariants } from "@/context/variants-context";
import { useActiveSectionContext } from "@/context/active-section-context";
import Introduction from "./introduction";
import CTABtn from "./cta-btn";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const t = useTranslations("Intro");
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const { setVariant } = useVariants();
  const textEnter = () => setVariant("TEXT");
  const mouseEnter = () => setVariant("BUTTON");
  const mouseLeave = () => setVariant("DEFAULT");

  return (
    <section
      ref={ref}
      id="home"
      className="flex flex-col-reverse xl:flex-row items-center justify-center pt-28 sm:pt-0 sm:py-auto px-8 lg:px-16 xl:h-[100vh] scroll-mt-24 sm:scroll-mt-0"
    >
      <div className="flex flex-col items-start max-w-md lg:mr-16 dark:text-white">
        <Introduction className="hidden xl:block" />

        <motion.h1
          className="mt-2 sm:mt-4 mb-0 sm:mb-10 font-medium !leading-[1.5]"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          onMouseEnter={textEnter}
          onMouseLeave={mouseLeave}
        >
          <p className="text-lg font-semibold text-gray-800 mt-2 dark:text-gray-100">
            {t("job")}
          </p>
          <p className="font-normal mt-0 sm:mt-4 text-gray-600 dark:text-gray-100 sm:text-left sm:hypens-manual text-justify hyphens-auto">
            {t("description")}
          </p>
        </motion.h1>

        <motion.div
          className="flex sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium mt-4"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
        >
          <CTABtn
            title={t("cta")}
            link="#contact"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          />

          <a
            className="bg-black text-[#FF96CC] hover:text-[#FFD8EC] dark:bg-white/10 dark:text-white/60 p-3 flex items-center gap-2 text-[1.63rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack"
            href="https://www.linkedin.com/in/katharina-barbara-harrer"
            target="_blank"
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
          >
            <FaLinkedinIn />
          </a>

          <a
            className="bg-black text-[#FF96CC] hover:text-[#FFD8EC] dark:bg-white/10 dark:text-white/60 p-3 flex items-center gap-2 text-[1.63rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack"
            href="https://github.com/harrer-katharina"
            target="_blank"
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
          >
            <IoLogoGithub />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "tween",
          duration: 0.2,
        }}
      >
        <div className="relative overflow-hidden pt-0 xl:pt-28 xl:flex xl:items-center xl:justify-center sm:h-[100vh]">
          <Introduction className="xl:hidden" />
          <Image
            src="/kharrer-landing.webp"
            alt="Katharina"
            width={600}
            height={600}
            className="object-cover object-bottom my-4 xl:my-0"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
}
