import React from "react";

type TagProps = {
  index: number;
  title: string;
};

export default function Tag({ index, title }: TagProps) {
  return (
    <li
      className="px-3 py-1 text-[0.7rem] uppercase tracking-wider rounded-full bg-black/[0.7] dark:bg-white/[0.9] text-white dark:text-black"
      key={index}
    >
      {title}
    </li>
  );
}
