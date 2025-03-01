"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

type Locale = "en" | "de";

type LanguageContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

type LanguageContextProviderProps = {
  children: React.ReactNode;
};

export default function LanguageContextProvider({
  children,
}: LanguageContextProviderProps) {
  const [locale, setLocale] = useState<Locale>("de");

  useEffect(() => {
    const storedLocale = Cookies.get("NEXT_LOCALE") as Locale | undefined;
    if (storedLocale && storedLocale !== locale) {
      setLocale(storedLocale);
    }
  }, []);

  const updateLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    Cookies.set("NEXT_LOCALE", newLocale, { expires: 365, path: "/" });
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale: updateLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error(
      "useLanguage must be used within a LanguageContextProvider"
    );
  }
  return context;
}
