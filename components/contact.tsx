"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useVariants } from "@/context/variants-context";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const t = useTranslations("Contact");
  const { setVariant } = useVariants();

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const mouseEnter = () => setVariant("TEXT");
  const mouseLeave = () => setVariant("DEFAULT");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="pb-10 w-[min(100%,38rem)] min-h-[100vh] flex flex-col scroll-mt-28"
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

      <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
        <p className="justify-center text-center text-gray-700 -mt-6 dark:text-white/80">
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
            if (!isChecked) {
              toast.error(t("checkboxError"));
              return;
            }
            const formData = new FormData(e.currentTarget);
            const { error } = await sendEmail(formData);

            if (error) {
              toast.error(error);
              return;
            }

            toast.success(t("success"));

            setEmail("");
            setMessage("");
            setIsChecked(false);
          }}
        >
          <input
            className="h-14 px-4 rounded-lg borderBlack transition-all dark:placeholder-gray-600 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-90 dark:outline-none"
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder={t("emailPlaceholder")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            className="h-52 p-4 my-3 rounded-lg borderBlack transition-all dark:placeholder-gray-600 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-90 dark:outline-none"
            name="message"
            required
            maxLength={5000}
            placeholder={t("messagePlaceholder")}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <h3 className="font-semibold dark:text-[#FF96CC]">{t("consent")}</h3>
          <label className="pb-4 flex items-center gap-2 text-sm text-gray-700 dark:text-white/80">
            <input
              type="checkbox"
              className="w-8 md:w-10 h-8 md:h-10"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
            {t("dsgvo")}
          </label>
          <SubmitBtn />
        </form>
      </div>
    </motion.section>
  );
}
