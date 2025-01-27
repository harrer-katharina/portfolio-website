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
      <h1 className="text-3xl font-bricolage dark:text-white">
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
        <div className="flex items-center mb-0 sm:mb-4 text-5xl !leading-[1.5] sm:text-6xl">
          <KLogo height={60} />
          <span className="font-bricolage text-5xl sm:text-7xl dark:text-white">
            atharina
          </span>
          <div className="relative ml-2 mb-10">
            <SparkLogo />
          </div>
        </div>
      </motion.span>
    </div>
  );
}
