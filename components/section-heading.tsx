import React from "react";
import SparkLogo from "./spark-logo";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <div className="flex justify-center items-center py-4 dark:text-[#FFD8EC]">
      <h2 className="text-4xl capitalize text-center mr-2 font-bricolage">
        {children}
      </h2>
      <div className="relative mb-10">
        <SparkLogo />
      </div>
    </div>
  );
}
