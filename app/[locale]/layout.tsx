import Header from "@/components/header";
import "../globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import LanguageSwitch from "@/components/language-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

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
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#E8569E80]"></div>
        <div className="bg-[#ffd2e9] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#63003380]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <NextIntlClientProvider messages={messages}>
              <Header />
              {children}
            </NextIntlClientProvider>
            <Footer />

            <Toaster position="top-right" />
            <LanguageSwitch />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
