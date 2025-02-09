import React from "react";
import { useTranslations } from "next-intl";
import { FaPaperPlane } from "react-icons/fa";
import { TextReveal } from "@/components/cta-btn";
import { useVariants } from "@/context/variants-context";

export default function SubmitBtn({ isPending }: { isPending: boolean }) {
  const t = useTranslations("Contact");
  const { setVariant } = useVariants();

  return (
    <button
      type="submit"
      className="bg-black text-white dark:bg-[#FF96CC] dark:text-black group flex items-center justify-center gap-2 h-[3rem] w-[8rem] rounded-full outline-none transition-all focus:scale-110 active:scale-105 disabled:scale-100 disabled:bg-opacity-65"
      disabled={isPending}
      onMouseEnter={() => setVariant("BUTTON")}
      onMouseLeave={() => setVariant("DEFAULT")}
    >
      {isPending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          <TextReveal>{t("submit")}</TextReveal>
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </>
      )}
    </button>
  );
}
