export interface ParsedImage {
    id: string;
    title: string;
    url: string;
}



export type SiteContent = {
    projects: Array<any>;
    infoBlocks: Array<any>;
    config: Object | null;
} | null;