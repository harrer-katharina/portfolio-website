"use client";

import React from "react";
import Image from "next/image";
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

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const t = useTranslations("Experiences");
  const { theme } = useTheme();
  const { setVariant } = useVariants();
  const mouseEnter = () => setVariant("TEXT");
  const mouseLeave = () => setVariant("DEFAULT");

  return (
    <section id="experience" className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>{t("title")}</SectionHeading>
      <VerticalTimeline lineColor={theme === "light" ? "#fff" : ""}>
        {getExperiencesData().map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: theme === "light" ? "#ffffffbf" : "#ffffff1a",
                boxShadow: "none",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
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
                <p className="font-normal !mt-0 dark:text-[#FFD8EC]">
                  {item.location}
                </p>
                {item.description?.map((desc, index) => (
                  <p
                    key={index}
                    className="!mt-1 !font-normal text-gray-700 dark:text-white/75"
                  >
                    ✦︎ {desc}
                  </p>
                ))}
              </div>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
