"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import { useVariants } from "@/context/variants-context";

type CarouselProps = {
  images: string[];
};

export default function Carousel({ images }: CarouselProps) {
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
                className="object-cover w-full h-auto"
              />
            </div>
          </motion.div>
        ))}
      </div>

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
    </div>
  );
}
