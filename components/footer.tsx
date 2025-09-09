"use client";

import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/context/language-context";
import { useVariants } from "@/context/variants-context";
import { useActiveSectionContext } from "@/context/active-section-context";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const t = useTranslations("Footer");
  const t_dsgvo = useTranslations("DSGVO");

  const { locale } = useLanguage();
  const { setActiveSection } = useActiveSectionContext();
  const { setVariant } = useVariants();

  const mouseEnter = () => setVariant("BUTTON");
  const mouseLeave = () => setVariant("DEFAULT");

  return (
    <footer
      className="py-8 px-4 mt-10 bg-black text-white dark:border-t-2 dark:border-solid dark:border-[var(--bg-color-right)]"
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/harrer-katharina"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl hover:text-[var(--primary-color)] transition" />
          </a>
          <a
            href="https://www.linkedin.com/in/katharina-barbara-harrer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl hover:text-[var(--primary-color)] transition" />
          </a>
          <a href="mailto:hello@katharina-harrer.de">
            <FaEnvelope className="text-2xl hover:text-[var(--primary-color)] transition" />
          </a>
        </div>

        <div className="flex space-x-6 text-sm">
          <Link
            href={`/${locale}/legal-disclosure`}
            onClick={() => setActiveSection("")}
            className="hover:text-[var(--primary-color)] transition"
          >
            {t_dsgvo("legal-disclosure")}
          </Link>
          <Link
            href={`/${locale}/privacy-policy`}
            onClick={() => setActiveSection("")}
            className="hover:text-[var(--primary-color)] transition"
          >
            {t_dsgvo("privacy-policy")}
          </Link>
        </div>

        <p className="text-xs md:w-[20%] text-gray-300 text-center">
          {t("description")}
        </p>
      </div>

      <p className="text-center text-xs mt-10">
        &copy; {new Date().getFullYear()} Katharina Harrer
      </p>
    </footer>
  );
}
