"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useVariants } from "@/context/variants-context";
import Paragraph from "./paragraph";
import { Transition } from "./ui/Transitions";
import SectionHeading from "./section-heading";

export default function About() {
  const t = useTranslations("About");
  const { ref } = useSectionInView("About");
  const { setVariant } = useVariants();
  const mouseEnter = () => setVariant("TEXT");
  const mouseLeave = () => setVariant("DEFAULT");

  return (
    <motion.section
      ref={ref}
      id="about"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="max-w-[100rem] mb-2 sm:mb-40 px-0 md:px-32 sm:pt-28 scroll-mt-8 min-h-screen"
    >
      <div className="flex flex-col xl:flex-row items-center justify-center gap-6 xl:gap-0">
        <div className="xl:w-1/2 leading-relaxed text-center text-justify hyphens-auto md:text-left">
          <Transition
            viewport={{ once: true }}
            className="md:text-4xl tracking-tighter"
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
          >
            <SectionHeading>{t("title")}</SectionHeading>
            <Paragraph paragraph={t("description")} />
          </Transition>
        </div>
        <div className="xl:w-1/2 flex justify-center">
          <Transition>
            <Image
              src={"/kharrer-about.webp"}
              width={400}
              height={400}
              alt={"Katharina Harrer"}
              className="rounded-xl max-md:aspect-[7/8] object-cover"
            />
          </Transition>
        </div>
      </div>
    </motion.section>
  );
}
