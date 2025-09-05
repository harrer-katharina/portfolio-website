import React from "react";

type TagProps = {
  index: number;
  title: string;
};

export default function Tag({ index, title }: TagProps) {
  return (
    <li
      className="px-3 py-1 text-[0.7rem] uppercase tracking-wider rounded-full bg-black dark:bg-[var(--secondary-color)] text-[var(--secondary-color)] dark:text-black"
      key={index}
    >
      {title}
    </li>
  );
}
