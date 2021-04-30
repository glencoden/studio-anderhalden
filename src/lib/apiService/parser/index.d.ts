import { Entry, EntryFields } from 'contentful';

type RawEntry = Entry<Object<{ [key: string]: any }>>

interface ParsedImage {
    id: string;
    title: string;
    file: {
        url: string;
        width: number;
        height: number;
    }
}

type Project = {
    id: string;
    createdAt: string;
    title: string;
    text: EntryFields.RichText | null;
    footnote: EntryFields.RichText | null;
    thumbnail: ParsedImage | null;
    images: Array<ParsedImage>;
};

type InfoBlock = {
    text: EntryFields.RichText | null;
    images: Array<ParsedImage>;
};

type Config = {
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