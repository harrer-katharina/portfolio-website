import React from "react";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

type ButtonProps = {
  title: string;
  link: string;
};

export default function CTABtn({ title, link }: ButtonProps) {
  return (
    <motion.div
      className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 mt-4 text-lg font-medium"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.1,
      }}
    >
      <a
        className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        href={link}
        target="_blank"
      >
        {title}
        <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
      </a>
    </motion.div>
  );
}
