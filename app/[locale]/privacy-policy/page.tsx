import { useTranslations } from "next-intl";
import SectionHeading from "@/components/section-heading";

export default function PrivacyPolicy() {
  const t = useTranslations("DSGVO");

  return (
    <main>
      <div className="bg-[#fbe2e3] dark:bg-gray-800 fixed top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
      <div className="bg-[#ffd2e9] dark:bg-gray-800 fixed top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
      <div className="flex flex-col justify-center text-justify hyphens-auto m-auto py-28 px-8 lg:px-16 max-w-[50rem]">
        <SectionHeading>{t("privacy-policy")}</SectionHeading>
        <h1 className="mb-4 text-3xl font-extrabold dark:text-white">
          {t("data-overview")}
        </h1>
        <h1 className="text-2xl font-extrabold dark:text-white">
          {t("general-information")}
        </h1>
        <p className="mb-4">{t("general-information-text")}</p>
        <h1 className="text-2xl font-extrabold dark:text-white">
          {t("data-collection")}
        </h1>
        <p className="mb-4">
          <strong>{t("data-collection-responsible")}</strong>
          <br />
          {t("data-collection-responsible-text")}
        </p>
        <p className="mb-4">
          <strong>{t("data-collection-how")}</strong>
          <br />
          {t("data-collection-how-text")}
        </p>
        <p className="mb-4">
          <strong>{t("data-usage")}</strong>
          <br />
          {t("data-usage-text")}
        </p>
        <p className="mb-20">
          <strong>{t("data-rights")}</strong>
          <br />
          {t("data-rights-text")}
        </p>
        <h1 className="text-3xl font-extrabold dark:text-white">
          {t("hosting")}
        </h1>
        <p>{t("hosting-provider")}</p>
        <p className="mb-4">
          HOSTINGER operations, UAB | Švitrigailos str. 34 | 03230 Vilnius,
          Lithuania
        </p>
        <h1 className="text-2xl font-extrabold dark:text-white">
          {t("external-hosting")}
        </h1>
        <p>{t("external-hosting-text.0")}</p>
        <p>{t("external-hosting-text.1")}</p>
        <p className="mb-4">{t("external-hosting-text.2")}</p>
        <strong>{t("processor-agreement")}</strong>
        <p className="mb-20">{t("processor-agreement-text")}</p>
        <h1 className="mb-4 text-3xl font-extrabold dark:text-white">
          {t("general-obligations")}
        </h1>
        <h1 className="text-2xl font-extrabold dark:text-white">
          {t("data-protection")}
        </h1>
        <p>{t("data-protection2-text.0")}</p>
        <p>{t("data-protection2-text.1")}</p>
        <p className="mb-4">{t("data-protection2-text.2")}</p>
        <h1 className="text-2xl font-extrabold dark:text-white">
          {t("responsible-office")}
        </h1>
        <p>{t("responsible-office-text.0")}</p>
        <p>
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
        <p className="mb-4">{t("responsible-office-text.1")}</p>
        <h1 className="text-2xl font-extrabold dark:text-white">
          {t("storage-duration")}
        </h1>
        <p className="mb-4">{t("storage-duration-text")}</p>
        <h1 className="text-2xl font-extrabold dark:text-white">
          {t("legal-basis")}
        </h1>
        <p className="mb-4">{t("legal-basis-text")}</p>
        <h1 className="text-2xl font-extrabold dark:text-white">
          {t("data-recipients")}
        </h1>
        <p className="mb-4">{t("data-recipients-text")}</p>
        <h1 className="text-2xl font-extrabold dark:text-white">
          {t("withdrawal-consent")}
        </h1>
        <p className="mb-4">{t("withdrawal-consent-text")}</p>
        <h1 className="text-2xl font-extrabold dark:text-white">
          {t("objection-right")}
        </h1>
        <p>{t("objection-right-text.0")}</p>
        <p className="mb-4">{t("objection-right-text.1")}</p>
        <h1 className="text-2xl font-extrabold dark:text-white">
          {t("complaint-right")}
        </h1>
        <p className="mb-4">{t("complaint-right-text")}</p>
        <h1 className="text-2xl font-extrabold dark:text-white">
          {t("data-portability")}
        </h1>
        <p className="mb-4">{t("data-portability-text")}</p>
        <h1 className="text-2xl font-extrabold dark:text-white">
          {t("right-to-information-correction-deletion")}
        </h1>
        <p className="mb-4">
          {" "}
          {t("right-to-information-correction-deletion-text")}
        </p>
        <h1 className="text-2xl font-extrabold dark:text-white">
          {t("right-to-restrict-processing")}
        </h1>
        <p>{t("right-to-restrict-processing-text")}</p>
        <ul>
          <li>{t("right-to-restrict-processing-cases.0")}</li>
          <li>{t("right-to-restrict-processing-cases.1")}</li>
          <li>{t("right-to-restrict-processing-cases.2")}</li>
          <li>{t("right-to-restrict-processing-cases.3")}</li>
        </ul>
        <p className="mb-4">{t("right-to-restrict-processing-note")}</p>
        <h1 className="text-2xl font-extrabold dark:text-white">
          {t("ssl-tls-encryption")}
        </h1>
        <p className="mb-20">{t("ssl-tls-encryption-text")}</p>
        <h1 className="mb-4 text-3xl font-extrabold dark:text-white">
          {t("data-collection-website")}
        </h1>
        <h1 className="text-2xl font-extrabold dark:text-white">
          {t("cookies")}
        </h1>
        <p>{t("cookie-text.0")}</p>
        <p className="mb-4">{t("cookie-text.1")}</p>
        <h1 className="text-2xl font-extrabold dark:text-white">
          {t("contact-form")}
        </h1>
        <p>{t("contact-form-text.0")}</p>
        <p>{t("contact-form-text.1")}</p>
        <p className="mb-4">{t("contact-form-text.2")}</p>
        <h1 className="text-2xl font-extrabold dark:text-white">
          {t("email-phone-fax-inquiry")}
        </h1>
        <p>{t("email-phone-fax-inquiry-text.0")}</p>
        <p>{t("email-phone-fax-inquiry-text.1")}</p>
        <p>{t("email-phone-fax-inquiry-text.2")}</p>
        <p>
          {t("dsgvo-generator")}{" "}
          <a href="https://www.e-recht24.de">https://www.e-recht24.de</a>
        </p>
      </div>
    </main>
  );
}
