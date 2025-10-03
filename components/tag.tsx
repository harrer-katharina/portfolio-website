import React from "react";

type TagProps = {
  index: number;
  title: string;
  className?: string;
};

export default function Tag({
  index,
  title,
  className = "text-[0.7rem]",
}: TagProps) {
  return (
    <li
      className={`px-3 py-1 uppercase tracking-wider rounded-full bg-black dark:bg-[var(--secondary-color)] text-[var(--secondary-color)] dark:text-black ${className}`}
      key={index}
    >
      {title}
    </li>
  );
}
