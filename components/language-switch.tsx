"use client";

import { useVariants } from "@/context/variants-context";
import { useLanguage } from "@/context/language-context";
import { useRouter } from "next/navigation";

export default function LanguageSwitcher() {
  const { setVariant } = useVariants();
  const mouseEnter = () => setVariant("BUTTON");
  const mouseLeave = () => setVariant("DEFAULT");

  const { locale, setLocale } = useLanguage();
  const newLocale = locale === "en" ? "de" : "en";
  const router = useRouter();

  const toggleLanguage = () => {
    setLocale(newLocale);
    const currentPath = window.location.pathname.replace(/^\/(en|de)/, "");
    const newPath = `/${newLocale}${currentPath}`;
    router.push(newPath);
  };

  return (
    <button
      className="fixed bottom-20 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
      onClick={toggleLanguage}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      {newLocale.toUpperCase()}
    </button>
  );
}
