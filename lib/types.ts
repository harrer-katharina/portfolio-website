import { links } from "./data";
import { StaticImageData } from "next/image";

export type SectionName = (typeof links)[number]["name"];

export type ProjectType = {
    title: string;
    description: string;
    tags: string[];
    imageUrl: StaticImageData | string;
};