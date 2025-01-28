"use client";
import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/context/language-context";
import { useVariants } from "@/context/variants-context";
import { useActiveSectionContext } from "@/context/active-section-context";
import Logo from "./logo";
import { getLinks } from "@/lib/data";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const { locale } = useLanguage();
  const t = useTranslations("Links");

  const { setVariant } = useVariants();
  const mouseEnter = () => setVariant("BUTTON");
  const mouseLeave = () => setVariant("DEFAULT");

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prevState) => !prevState);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900">
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-6 py-6">
        <Link href={`/${locale}`} className="flex items-center space-x-2">
          <Logo />
        </Link>

        <ul
          className="hidden sm:flex items-center space-x-8 text-sm font-medium text-black dark:text-[#FFD8EC]"
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
        >
          {getLinks(t).map((link) => (
            <li key={link.hash} className="relative">
              <Link
                className={clsx(
                  "hover:text-[#FF96CC] dark:hover:text-gray-100 transition",
                  {
                    "dark:text-[#FF96CC]": activeSection === link.name,
                  }
                )}
                href={`/${locale}${link.hash}`}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.title}
                {link.name === activeSection && (
                  <motion.span
                    className="absolute -bottom-1 left-0 h-[2px] w-full bg-[#FF96CC] dark:bg-[#FFD8EC]"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="absolute top-8 right-8 md:hidden text-gray-600 dark:text-gray-300 z-20"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <motion.div
            className="w-6 h-6 relative"
            animate={{
              rotate: menuOpen ? 45 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            {!menuOpen && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <path d="M4 6h16M4 12h12M4 18h16" />
              </svg>
            )}

            {menuOpen && (
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 absolute top-0 left-0"
                animate={{
                  rotate: menuOpen ? 45 : 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </motion.svg>
            )}
          </motion.div>
        </button>
      </nav>

      {menuOpen && (
        <motion.div
          className="md:hidden fixed inset-0 flex flex-col items-center justify-center space-y-6 bg-white text-black dark:bg-gray-900 dark:text-[#FFD8EC]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 40,
          }}
        >
          <ul className="flex flex-col items-center space-y-8 text-lg font-medium">
            {getLinks(t).map((link) => (
              <li key={link.hash} className="relative">
                <Link
                  key={link.hash}
                  href={`/${locale}${link.hash}`}
                  className={clsx("text-lg font-medium", {
                    "dark:text-[#FF96CC]": activeSection === link.name,
                  })}
                  onClick={() => {
                    setMenuOpen(false);
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  {link.title}
                  {link.name === activeSection && (
                    <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-[#FF96CC] dark:bg-[#FFD8EC]"></span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </header>
  );
}
