"use client";

import { useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import { motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import { useVariants } from "@/context/variants-context";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type CarouselProps = {
  images: string[];
  showButtons?: boolean;
};

export default function Carousel({ images, showButtons }: CarouselProps) {
  const [curr, setCurr] = useState(0);
  const { setVariant } = useVariants();
  const mouseEnter = () => setVariant("BUTTON");
  const mouseLeave = () => setVariant("DEFAULT");

  const handlePrev = () =>
    setCurr((curr) => (curr === 0 ? images.length - 1 : curr - 1));
  const handleNext = () =>
    setCurr((curr) => (curr === images.length - 1 ? 0 : curr + 1));

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    trackMouse: true,
  });

  return (
    <div
      {...handlers}
      className="relative overflow-hidden sm:max-w-[60%] lg:max-w-[66%] mx-auto rounded-lg"
    >
      <button
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        onClick={handlePrev}
        className={clsx(
          "absolute left-2 sm:left-4 p-2 sm:p-3 top-1/2 -translate-y-1/2 bg-white/40 hover:bg-white transition rounded-full z-10",
          {
            "hidden sm:flex": !showButtons,
          }
        )}
      >
        <FaChevronLeft className="text-gray-800 text-xs sm:text-xl" />
      </button>

      <button
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        onClick={handleNext}
        className={clsx(
          "absolute right-2 sm:right-4 p-2 sm:p-3 top-1/2 -translate-y-1/2 bg-white/40 hover:bg-white transition rounded-full z-10",
          {
            "hidden sm:flex": !showButtons,
          }
        )}
      >
        <FaChevronRight className="text-gray-800 text-xs sm:text-xl" />
      </button>
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="relative min-w-full flex overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src={src}
                alt={`Slide ${index}`}
                width={450}
                height={600}
                quality={100}
                className="object-cover w-full h-auto"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {images.length < 7 && (
        <div
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2"
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
        >
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurr(i)}
              className={`transition-all w-3 h-3 rounded-full ${curr === i ? "bg-white p-2" : "bg-white/50"}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
