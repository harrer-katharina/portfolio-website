import { getLinks } from "./data";
import { StaticImageData } from "next/image";

export type SectionName = (ReturnType<typeof getLinks>)[number]["name"];

export type ProjectType = {
    title: string;
    description: string;
    tags: string[];
    imageUrl: StaticImageData | string;
};