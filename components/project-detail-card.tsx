"use client";

import { useRef, useState, useEffect } from "react";
import clsx from "clsx";
import Image from "next/image";
import { useTransform, useScroll, motion } from "framer-motion";
import { useTheme } from "@/context/theme-context";
import { useVariants } from "@/context/variants-context";
import { ProjectSection } from "@/lib/types";
import CTABtn from "@/components/cta-btn";

export default function DetailCards({
  index,
  section,
  progress,
  range,
  targetScale,
}: {
  index: number;
  section: ProjectSection;
  progress: any;
  range: any;
  targetScale: any;
}) {
  const { theme } = useTheme();
  const { setVariant } = useVariants();
  const mouseEnter = () => setVariant("TEXT");
  const mouseLeave = () => setVariant("DEFAULT");

  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.75], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 1024);

      const handleResize = () => {
        setIsMobile(window.innerWidth < 1024);
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <div
      ref={container}
      className="lg:h-[100vh] flex items-center justify-center lg:sticky lg:top-0"
    >
      <motion.div
        className={`lg:relative flex flex-col justify-center lg:h-[600px] w-full lg:w-[1200px] rounded-2xl px-4 py-8 lg:p-12 shadow-md ${section.className}`}
        style={{
          scale: isMobile ? 1 : scale,
          top: isMobile ? `` : `calc(-2vh + ${index * 25}px)`,
          backgroundColor:
            section.className && theme === "light"
              ? ""
              : `hsl(${theme === "dark" ? 231 : 0}, ${theme === "dark" ? 14 : 0}%, ${
                  isMobile
                    ? theme === "dark"
                      ? 20
                      : 95
                    : theme === "dark"
                      ? 20 + index * 3.5
                      : 95 + index * 2
                }%)`,
        }}
      >
        <h2 className="lg:hidden text-2xl font-bold">{section.title}</h2>
        <div className="flex flex-col-reverse lg:flex-row items-center mt-4 lg:mt-0 gap-2 lg:gap-12">
          <div
            className={clsx(
              "w-full",
              section.imageSize ? `lg:w-2/3` : "lg:w-1/2"
            )}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
          >
            <h2 className="hidden lg:block text-2xl font-bold mb-4">
              {section.title}
            </h2>
            {section.text.map((text, idx) => (
              <p
                key={idx}
                className={`mb-2 lg:text-justify hyphens-auto leading-relaxed ${
                  idx === 0
                    ? "first-letter:text-2xl first-letter:font-bold"
                    : ""
                }`}
              >
                {text}
              </p>
            ))}
            {section?.cta && section?.cta?.position !== "right" && (
              <div className="mt-0 md:mt-4">
                <CTABtn
                  title={section.cta.title ?? ""}
                  link={section.cta.link ?? ""}
                />
              </div>
            )}
          </div>

          <div
            className={clsx(
              "relative w-full h-full rounded-2xl overflow-hidden flex flex-col justify-center items-center",
              section.imageSize ? `lg:w-1/3` : "lg:w-1/2"
            )}
          >
            <motion.div style={{ scale: imageScale }}>
              <Image
                src={section.image}
                alt={section.title}
                className="object-cover"
              />
            </motion.div>
            {section?.cta && section?.cta?.position === "right" && (
              <span className="pt-10">
                <CTABtn
                  title={section.cta.title ?? ""}
                  link={section.cta.link ?? ""}
                />
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
