import { getLinks } from "./data";
import { StaticImageData } from "next/image";

type CTAType = {
    title: string;
    link: string;
    position?: string;
};

export type SectionName = (ReturnType<typeof getLinks>)[number]["name"];

export type ProjectSection = {
    title: string;
    text: string[];
    className?: string;
    image: StaticImageData | string;
    imageSize?: string;
    cta?: CTAType;
};

export type ProjectType = {
    projectId: string;
    title: string;
    showTitle: boolean;
    date: string;
    type: string;
    duration: string;
    description: string;
    tags: string[];
    image: StaticImageData | string;
    sectionImage: StaticImageData | string;
    sections: ProjectSection[];
};