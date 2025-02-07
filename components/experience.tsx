"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { getExperiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { useVariants } from "@/context/variants-context";
import Tag from "@/components/tag";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const t = useTranslations("Experiences");
  const { theme } = useTheme();
  const [clientTheme, setClientTheme] = React.useState<string | null>(null);
  React.useEffect(() => {
    setClientTheme(theme);
  }, [theme]);

  const { setVariant } = useVariants();
  const mouseEnter = () => setVariant("TEXT");
  const mouseLeave = () => setVariant("DEFAULT");

  return (
    <section id="experience" className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>{t("title")}</SectionHeading>
      <VerticalTimeline lineColor={clientTheme === "light" ? "#fff" : ""}>
        {getExperiencesData().map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: clientTheme === "light" ? "#ffffffbf" : "#ffffff1a",
                boxShadow: "none",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  clientTheme === "light"
                    ? "0.4rem solid #ffffffbf"
                    : "0.4rem solid #ffffff1a",
              }}
              date={item.date}
              icon={
                <div className="flex items-center justify-center w-full h-full">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                </div>
              }
            >
              <div
                onMouseEnter={mouseEnter}
                onMouseLeave={mouseLeave}
                ref={index === 0 ? ref : null}
              >
                <h3 className="font-semibold capitalize dark:text-[#FF96CC]">
                  {item.title}
                </h3>
                <Link
                  href={item.link}
                  target={"_blank"}
                  className="font-normal !mt-0 dark:text-[#FFD8EC] hover:text-[#FF96CC]"
                >
                  {item.location}
                </Link>
                {item.description?.map((desc, index) => (
                  <p
                    key={index}
                    className="!mt-1 !font-normal text-gray-700 dark:text-white/75"
                  >
                    ✦︎ {desc}
                  </p>
                ))}
                {item.tags && (
                  <ul className="flex flex-wrap gap-2 mt-2">
                    {item.tags.map((tag, index) => (
                      <Tag index={index} title={tag} key={index} />
                    ))}
                  </ul>
                )}
              </div>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
