"use client";

import { useState, useEffect } from "react";

export default function LanguageSwitcher() {
  const [currentLocale, setCurrentLocale] = useState("en");

  useEffect(() => {
    const locale = window.location.pathname.startsWith("/en") ? "en" : "de";
    setCurrentLocale(locale);
  }, []);

  const nextLocale = currentLocale === "en" ? "de" : "en";

  const changeLanguage = () => {
    const currentPath = window.location.pathname.replace(/^\/(en|de)/, "");
    const newPath = `/${nextLocale}${currentPath}`;
    window.location.href = newPath;
  };

  return (
    <button
      className="fixed bottom-20 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
      onClick={changeLanguage}
    >
      {nextLocale.toUpperCase()}
    </button>
  );
}
