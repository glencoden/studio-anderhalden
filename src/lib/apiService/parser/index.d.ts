import { Entry, EntryFields } from 'contentful';

type RawEntry = Entry<Object<{ [key: string]: any }>>

interface ParsedImage {
    id: string;
    title: string;
    url: string;
}

export type Project = {
    title: string;
    text: EntryFields.RichText | null;
    footnote: EntryFields.RichText | null;
    thumbnail: ParsedImage | null;
    images: Array<ParsedImage>;
};

export type InfoBlock = {
    text: EntryFields.RichText | null;
    images: Array<ParsedImage>;
};

export type Config = {
    enabled: boolean;
    documentTitle: string;
    animationTime: number;
    imageSize: number;
    ratio: number;
    palette: {
        black: string;
        grey: string;
        lightgrey: string;
        white: string;
    }
} | null;

type SiteContent = {
    projects: Array<Project>;
    infoBlocks: Array<InfoBlock>;
    config: Config;
};