import Header from "@/components/header";
import "../globals.css";
import { Poppins } from "next/font/google";
import LanguageContextProvider from "@/context/language-context";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";
import VariantProvider from "@/context/variants-context";
import ThemeSwitch from "@/components/theme-switch";
import CustomCursor from "@/components/custom-cursor";
import LanguageSwitch from "@/components/language-switch";
import { Toaster } from "react-hot-toast";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import Footer from "@/components/footer";

const poppins = Poppins({
  weight: ["400", "500", "600", "800", "900"],
  subsets: ["latin", "latin-ext"],
});

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const locale = params.locale;

  return {
    title: "Katharina Harrer | Portfolio",
    description:
      "Katharina is a passionate frontend developer specializing in creating responsive, user-friendly and visually engaging web designs. Explore her portfolio to see projects crafted with modern technologies and creative design principles.",
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/favicon.png",
    },
    openGraph: {
      title: "Katharina Harrer | Frontend Developer",
      description:
        "Explore her portfolio of modern, user-centric web designs and web development projects.",
      url: "https://katharina-harrer.de",
      siteName: "Katharina Harrer Portfolio",
      images: [
        {
          url: "/thumbnail.webp",
          width: 1200,
          height: 630,
          alt: "Katharina Harrer Portfolio Website",
        },
      ],
      locale: locale === "de" ? "de_DE" : "en_US",
      type: "website",
    },
    alternates: {
      canonical: "https://katharina-harrer.de",
      languages: {
        de: "https://katharina-harrer.de/de",
        en: "https://katharina-harrer.de/en",
      },
    },
  };
}

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
    <html lang={locale} dir="ltr" data-theme="light">
      <body
        className={`${poppins.className} overflow-x-hidden w-screen relative text-gray-950 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="fixed inset-0 -z-10 bg-[var(--bg-color)]"></div>
        <VariantProvider>
          <LanguageContextProvider>
            <ThemeContextProvider>
              <ActiveSectionContextProvider>
                <NextIntlClientProvider messages={messages}>
                  <Header />
                  <CustomCursor />
                  {children}
                  <Footer />
                </NextIntlClientProvider>
                <Toaster position="top-right" />
                <LanguageSwitch />
                <ThemeSwitch />
              </ActiveSectionContextProvider>
            </ThemeContextProvider>
          </LanguageContextProvider>
        </VariantProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Katharina Harrer",
              jobTitle: "Frontend Developer, Web Designer",
              url: "https://katharina-harrer.de",
              sameAs: [
                "https://github.com/harrer-katharina",
                "https://www.linkedin.com/in/katharina-barbara-harrer",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
