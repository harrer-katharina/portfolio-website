"use client";

import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/context/language-context";
import { useVariants } from "@/context/variants-context";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Footer() {
  const t = useTranslations("Footer");
  const t_dsgvo = useTranslations("DSGVO");

  const { locale } = useLanguage();
  const { setActiveSection } = useActiveSectionContext();

  const { setVariant } = useVariants();
  const mouseEnter = () => setVariant("BUTTON");
  const mouseLeave = () => setVariant("DEFAULT");

  return (
    <footer className="mb-10 px-4 text-center">
      <div
        className="flex justify-center space-x-4 mb-2"
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
      >
        <Link
          href={`/${locale}/legal-disclosure`}
          onClick={() => setActiveSection("")}
          className="hover:text-gray-700 dark:hover:text-[#FF96CC]"
        >
          {t_dsgvo("legal-disclosure")}
        </Link>
        <Link
          href={`/${locale}/privacy-policy`}
          onClick={() => setActiveSection("")}
          className="hover:text-gray-700 dark:hover:text-[#FF96CC]"
        >
          {t_dsgvo("privacy-policy")}
        </Link>
      </div>
      <small className="mb-2 block text-xs text-gray-500">
        &copy; 2025 Katharina Harrer
      </small>
      <p className="text-xs text-gray-500">{t("description")}</p>
    </footer>
  );
}
