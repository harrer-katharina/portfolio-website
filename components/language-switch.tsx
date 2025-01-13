"use client";

import { useLanguage } from "@/context/language-context";
import { useRouter } from "next/navigation";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
  const router = useRouter();

  const toggleLanguage = () => {
    const newLocale = locale === "en" ? "de" : "en";
    setLocale(newLocale);

    const currentPath = window.location.pathname.replace(/^\/(en|de)/, "");
    const newPath = `/${newLocale}${currentPath}`;
    router.push(newPath);
  };

  return (
    <button
      className="fixed bottom-20 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
      onClick={toggleLanguage}
    >
      {locale.toUpperCase()}
    </button>
  );
}
