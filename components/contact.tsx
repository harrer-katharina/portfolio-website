"use client";

import React from "react";
import { useTranslations } from "next-intl";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const t = useTranslations("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-10 w-[min(100%,38rem)] h-[100vh] flex flex-col justify-center text-center scroll-mt-10 sm:scroll-mt-0"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>{t("title")}</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        {t("description1")}{" "}
        <a className="underline" href="mailto:hello@katharina-harrer.de">
          hello@katharina-harrer.de
        </a>{" "}
        {t("description2")}
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        onSubmit={async (e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const { error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success(t("success"));
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack transition-all dark:placeholder-gray-600 dark:bg-white dark:bg-opacity-60 dark:focus:bg-opacity-90 dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder={t("emailPlaceholder")}
        />
        <textarea
          className="h-52 p-4 my-3 rounded-lg borderBlack transition-all dark:placeholder-gray-600 dark:bg-white dark:bg-opacity-60 dark:focus:bg-opacity-90 dark:outline-none"
          name="message"
          required
          maxLength={5000}
          placeholder={t("messagePlaceholder")}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
