import { useTranslations } from "next-intl";
import SectionHeading from "@/components/section-heading";

export default function PrivacyPolicy() {
  const t = useTranslations("DSGVO");

  return (
    <main>
      <div className="bg-[var(--bg-color-right)] fixed top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
      <div className="bg-[var(--bg-color-left)] fixed top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
      <div className="flex flex-col justify-center text-justify hyphens-auto m-auto py-28 px-8 lg:px-16 max-w-[50rem]">
        <SectionHeading>{t("legal-disclosure")}</SectionHeading>
        <p className="mb-4">
          <strong>{t("operator")}: </strong>Katharina Harrer
          <br />
          <strong>{t("residence")}: </strong>
          {t("residence-text")}
          <br />
          <strong>{t("email")}: </strong>
          <a className="underline" href="mailto:hello@katharina-harrer.de">
            hello@katharina-harrer.de
          </a>
        </p>

        <h1 className="text-3xl font-extrabold dark:text-white">
          {t("disclaimer")}
        </h1>

        <h1 className="text-2xl font-extrabold dark:text-white">
          {t("liability-content")}
        </h1>
        <p className="mb-4">{t("liability-content-text")}</p>

        <h1 className="text-2xl font-extrabold dark:text-white">
          {t("liability-links")}
        </h1>
        <p className="mb-4">{t("liability-links-text")}</p>

        <h1 className="text-2xl font-extrabold dark:text-white">
          {t("copyright")}
        </h1>
        <p className="mb-4">{t("copyright-text")}</p>

        <h1 className="text-2xl font-extrabold dark:text-white">
          {t("data-protection")}
        </h1>
        <p>
          {t("data-protection-text")} {t("dsgvo-generator")}{" "}
          <a href="https://www.impressum-generator.de">
            https://www.impressum-generator.de
          </a>
        </p>
      </div>
    </main>
  );
}
