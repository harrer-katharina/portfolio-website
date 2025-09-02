"use client";

import { useRef, useState, useEffect } from "react";
import clsx from "clsx";
import Image from "next/image";
import { useTransform, useScroll, motion } from "framer-motion";
import { useTheme } from "@/context/theme-context";
import { useVariants } from "@/context/variants-context";
import { ProjectSection } from "@/lib/types";
import CTABtn from "@/components/cta-btn";
import Carousel from "@/components/img-carousel";

export default function DetailCard({
  index,
  section,
  progress,
  range,
  targetScale,
  scaleCards,
}: {
  index: number;
  section: ProjectSection;
  progress: any;
  range: any;
  targetScale: any;
  scaleCards: boolean;
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

  const [isMobile, setIsMobile] = useState(false);
  const [images, setImages] = useState<string[]>([]);

  const imageScale = useTransform(scrollYProgress, [0, 0.75], [2, 1]);
  const scale = useTransform(progress, range, [
    1,
    isMobile || !scaleCards ? 1 : targetScale,
  ]);

  useEffect(() => {
    if (section.image === "") {
      const loadImages = async () => {
        const response = await fetch("/api");
        const data = await response.json();
        setImages(data.images);
      };

      loadImages();
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 1024);

      const handleResize = () => {
        setIsMobile(window.innerWidth < 1024);
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [theme]);

  return (
    <div
      ref={container}
      className="lg:h-[100vh] flex items-center justify-center lg:sticky lg:top-0"
    >
      <motion.div
        className={clsx(
          "lg:relative flex flex-col justify-center lg:h-[700px] w-full rounded-2xl px-3 sm:px-4 shadow-md",
          section.className,
          images?.length > 0 && !isMobile ? "" : "py-6 lg:p-12 sm:py-8"
        )}
        style={{
          scale: scale,
          top: isMobile || !scaleCards ? `` : `calc(-2vh + ${index * 25}px)`,
          backgroundColor:
            section.className && theme === "light"
              ? ""
              : `hsl(${theme === "dark" ? 231 : 0}, ${theme === "dark" ? 14 : 0}%, ${
                  isMobile
                    ? theme === "dark"
                      ? 20
                      : 95
                    : theme === "dark"
                      ? 20 + index * 2
                      : 95 + index * 2
                }%)`,
        }}
      >
        <h2 className="lg:hidden text-2xl font-extrabold mb-4">
          {section.title}
        </h2>
        {section.image !== "" ? (
          <div className="flex flex-col-reverse lg:flex-row items-center lg:mt-0 gap-2 lg:gap-12">
            <div
              style={{
                flexBasis: section.imageSize
                  ? `${100 - parseInt(section.imageSize)}%`
                  : "50%",
              }}
              onMouseEnter={mouseEnter}
              onMouseLeave={mouseLeave}
            >
              <h2 className="hidden lg:block text-2xl font-extrabold mb-4">
                {section.title}
              </h2>
              {section.text.map((text, idx) => (
                <p
                  key={idx}
                  className={`mb-2 lg:text-justify hyphens-auto leading-relaxed ${
                    idx === 0
                      ? "first-letter:text-2xl first-letter:font-semibold"
                      : ""
                  }`}
                >
                  {text}
                </p>
              ))}
              {section?.cta &&
                (isMobile || section?.cta?.position !== "right") && (
                  <div className="mt-0 md:mt-4">
                    <CTABtn
                      title={section.cta.title ?? ""}
                      link={section.cta.link ?? ""}
                    />
                  </div>
                )}
            </div>

            <div
              className="relative h-full rounded-2xl overflow-hidden flex flex-col justify-center items-center"
              style={{ flexBasis: section.imageSize ?? "50%" }}
            >
              <motion.div style={{ scale: imageScale }}>
                <Image
                  src={section.image}
                  alt={section.title}
                  unoptimized
                  className="object-cover"
                />
              </motion.div>
              {section?.cta &&
                !isMobile &&
                section?.cta?.position === "right" && (
                  <span className="pt-10">
                    <CTABtn
                      title={section.cta.title ?? ""}
                      link={section.cta.link ?? ""}
                    />
                  </span>
                )}
            </div>
          </div>
        ) : (
          images?.length > 0 && (
            <Carousel images={images} showButtons={true} isMobile={isMobile} />
          )
        )}
      </motion.div>
    </div>
  );
}
