import { getLinks } from "./data";
import { StaticImageData } from "next/image";

type CTAType = {
    title: string;
    link: string;
};

export type SectionName = (ReturnType<typeof getLinks>)[number]["name"];

export type ProjectType = {
    projectId: string;
    title: string;
    // date: string;
    // type: string;
    // duration: string;
    description: string;
    tags: string[];
    image: StaticImageData | string;
    sectionImage: StaticImageData | string;
    sections: {
        title: string;
        text: string[];
        image: StaticImageData | string;
        cta?: CTAType;
    }[];
};