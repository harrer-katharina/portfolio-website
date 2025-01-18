"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import KLogo from "./k-logo";
import { useTranslations } from "next-intl";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const t = useTranslations("Intro");
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <>
      <section
        ref={ref}
        id="home"
        className="flex flex-col lg:flex-row items-center justify-center px-8 lg:px-16 l:h-[90vh] lg:h-[80vh]"
      >
        <div className="flex flex-col items-start max-w-xl lg:mr-16 dark:text-white">
          <h1 className="text-3xl font-bold">{t("introduction")}</h1>

          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            <div className="flex items-center mb-4 text-5xl !leading-[1.5] sm:text-6xl ">
              <KLogo height={60} />
              <span className="font-bold text-5xl sm:text-7xl leading-0">
                atharina
              </span>
            </div>
          </motion.span>

          <motion.h1
            className="mb-10 mt-4 font-medium !leading-[1.5]"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-lg font-semibold text-gray-600 mt-2 dark:text-gray-100">
              {t("job")}
            </p>
            <p className="text-gray-600 mt-4 dark:text-gray-100">
              {t("description")}
            </p>
          </motion.h1>
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
            }}
          >
            <Link
              href="#contact"
              className="group px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition bg-gray-900 hover:bg-gray-950 text-white dark:bg-white dark:hover:bg-gray-50 dark:text-black"
              onClick={() => {
                setActiveSection("Contact");
                setTimeOfLastClick(Date.now());
              }}
            >
              {t("cta")}{" "}
              <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
            </Link>

            <a
              className="bg-white p-3 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
              href="https://www.linkedin.com/in/katharina-barbara-harrer"
              target="_blank"
            >
              <FaLinkedinIn />
            </a>

            <a
              className="bg-white p-3 text-gray-700 hover:text-gray-950 flex items-center gap-2 text-[1.75rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
              href="https://github.com/harrer-katharina"
              target="_blank"
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
          <div className="relative w-full max-w-sm lg:max-w-md mt-8 lg:mt-0">
            <Image
              src="/kh-image.png"
              alt="Katharina"
              width={477}
              height={499}
              className="object-contain"
              priority
            />
          </div>
        </motion.div>
      </section>
    </>
  );
}
