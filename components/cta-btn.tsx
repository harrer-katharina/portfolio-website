import React, { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { useVariants } from "@/context/variants-context";

interface TextRevealProps {
  children: string;
  className?: string;
}
export const TextReveal = ({ children, className }: TextRevealProps) => {
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={clsx("relative overflow-hidden whitespace-pre", className)}
    >
      <div className="overflow-hidden">
        {children.split("").map((char, i) => (
          <motion.span
            initial={{ y: 0 }}
            animate={{ y: hover ? "-100%" : 0 }}
            layout
            transition={{ delay: i * 0.02, ease: [0.215, 0.61, 0.355, 1] }}
            exit={{
              y: 0,
              transition: { delay: i * 0.02, ease: [0.215, 0.61, 0.355, 1] },
            }}
            key={i}
            className="inline-block whitespace-"
          >
            {char}
          </motion.span>
        ))}
      </div>
      <motion.div className="absolute left-0 top-0">
        {children.split("").map((char, i) => (
          <motion.span
            initial={{ y: "100%" }}
            animate={{ y: hover ? 0 : "100%" }}
            layout
            transition={{ delay: i * 0.02, ease: [0.215, 0.61, 0.355, 1] }}
            exit={{
              y: 0,
              transition: { delay: i * 0.02, ease: [0.215, 0.61, 0.355, 1] },
            }}
            key={i}
            className="inline-block whitespace-"
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
};

type ButtonProps = {
  title: string;
  link: string;
  onClick?: () => void;
};

export default function CTABtn({ title, link, onClick }: ButtonProps) {
  const { setVariant } = useVariants();
  const mouseEnter = () => setVariant("BUTTON");
  const mouseLeave = () => setVariant("DEFAULT");

  return (
    title &&
    link && (
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center md:text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
      >
        <Link
          className="group px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition bg-black hover:bg-gray-900 text-white dark:bg-[var(--primary-color)] dark:text-black"
          href={link}
          target={link.startsWith("#") ? "_self" : "_blank"}
          onClick={onClick}
        >
          <TextReveal>{title}</TextReveal>
          <FiArrowUpRight className="text-2xl opacity-70 group-hover:translate-x-1 transition" />
        </Link>
      </motion.div>
    )
  );
}
