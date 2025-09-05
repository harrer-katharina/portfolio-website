"use client";

import { ParallaxText } from "./ui/parallax-text";

export default function ParallaxSkills() {
  const skills = [
    "Webdevelopment",
    "Appdesign",
    "Frontend",
    "UX/UI",
    "Webdesign",
  ];
  return (
    <section className="w-full pt-24 pb-20">
      <ParallaxText baseVelocity={-5}>
        {skills.map((skill, index) => (
          <span
            key={index}
            className="flex items-center text-xl md:text-7xl font-semibold uppercase tracking-tighter text-black/60 dark:text-white/30"
          >
            {skill}
            <span className="text-base md:text-3xl ml-6 mr-3">✦︎</span>
          </span>
        ))}
      </ParallaxText>
      <ParallaxText baseVelocity={5}>
        {skills.map((skill, index) => (
          <span
            key={index}
            className="flex items-center text-xl md:text-7xl font-semibold uppercase tracking-tighter opacity-60 text-[var(--primary-color)] dark:text-[var(--secondary-color)]"
          >
            {skill}
            <span className="text-base md:text-3xl ml-6 mr-3">✦︎</span>
          </span>
        ))}
      </ParallaxText>
      <ParallaxText baseVelocity={-5}>
        {skills.map((skill, index) => (
          <span
            key={index}
            className="flex items-center text-xl md:text-7xl font-semibold uppercase tracking-tighter text-black/60 dark:text-white/30"
          >
            {skill}
            <span className="text-base md:text-3xl ml-6 mr-3">✦︎</span>
          </span>
        ))}
      </ParallaxText>
    </section>
  );
}
