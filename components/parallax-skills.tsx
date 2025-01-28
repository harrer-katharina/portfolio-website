"use client";

import { ParallaxText } from "./parallax-text";

export default function ParallaxSkills() {
  const skills = ["Webdevelopment", "Appdesign", "UX/UI", "Webdesign"];
  return (
    <section className="w-full py-16">
      <ParallaxText baseVelocity={-5}>
        {skills.map((skill, index) => (
          <span
            key={index}
            className="flex items-center text-xl md:text-7xl font-semibold uppercase tracking-tighter text-black/60 dark:text-white/30"
          >
            {skill}
            <span className="text-xl md:text-5xl ml-6 mr-3">✦︎</span>
          </span>
        ))}
      </ParallaxText>
      <ParallaxText baseVelocity={5}>
        {skills.map((skill, index) => (
          <span
            key={index}
            className="flex items-center text-xl md:text-7xl font-semibold uppercase tracking-tighter text-[#FF96CC]/60 dark:text-[#FF96CC]/30"
          >
            {skill}
            <span className="text-xl md:text-5xl ml-6 mr-3">✦︎</span>
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
            <span className="text-xl md:text-5xl ml-6 mr-3">✦︎</span>
          </span>
        ))}
      </ParallaxText>
    </section>
  );
}
