import Header from "@/components/header";
import "../globals.css";
import { Poppins } from "next/font/google";
import LanguageContextProvider from "@/context/language-context";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";
import VariantProvider from "@/context/variants-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import CustomCursor from "@/components/custom-cursor";
import LanguageSwitch from "@/components/language-switch";
import { Toaster } from "react-hot-toast";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin", "latin-ext"],
});

export const metadata = {
  title: "Katharina Harrer | Portfolio",
  description:
    "Katharina is a passionate frontend developer specializing in creating responsive, user-friendly, and visually engaging web designs. Explore her portfolio to see innovative projects crafted with modern technologies and creative design principles.",
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages({ locale });

  if (!["en", "de"].includes(locale)) {
    notFound();
  }
  return (
    <html lang={locale} className="!scroll-smooth">
      <body
        className={`${poppins.className} bg-gray-50 text-gray-950 relative dark:bg-gray-950 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] dark:bg-gray-800 fixed top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#ffd2e9] dark:bg-gray-800 fixed top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>

        <VariantProvider>
          <LanguageContextProvider>
            <ThemeContextProvider>
              <ActiveSectionContextProvider>
                <NextIntlClientProvider messages={messages}>
                  <Header />
                  <CustomCursor />
                  {children}
                </NextIntlClientProvider>
                <Footer />

                <Toaster position="top-right" />
                <LanguageSwitch />
                <ThemeSwitch />
              </ActiveSectionContextProvider>
            </ThemeContextProvider>
          </LanguageContextProvider>
        </VariantProvider>
      </body>
    </html>
  );
}
