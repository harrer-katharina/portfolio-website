"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import KLogo from "./k-logo";
import SparkLogo from "./spark-logo";

export default function Introduction({ className = "" }) {
  const t = useTranslations("Intro");
  return (
    <div className={className}>
      <h1 className="text-3xl font-extrabold dark:text-[var(--secondary-color)]">
        {t("introduction")}
      </h1>
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
        <div className="flex mb-0 sm:mb-4 [@media(max-width:370px)]:mt-4">
          <div className="flex items-end">
            <KLogo height={60} />
            <span className="font-black text-5xl sm:text-7xl dark:text-[var(--secondary-color)] relative top-2 md:top-3">
              atharina
            </span>
          </div>
          <div className="relative ml-2 mb-8 hidden [@media(min-width:370px)]:block">
            <SparkLogo />
          </div>
        </div>
      </motion.span>
    </div>
  );
}
