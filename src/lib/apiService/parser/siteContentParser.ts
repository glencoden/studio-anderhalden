import { RawEntry, SiteContent } from './index';
import { EntryCollection } from 'contentful';
import { isObject } from '../../helpers';
import projectParser from './projectParser';
import infoBlockParser from './infoBlockParser';
import configParser from './configParser';

const ItemIds: { [key: string]: string } = {
    PROJECT: 'projekt',
    INFO_BLOCK: 'infoBlock',
    CONFIG: 'config'
};


function siteContentParser(raw: EntryCollection<RawEntry>): SiteContent {
    const siteContent: SiteContent = {
        projects: [],
        infoBlocks: [],
        config: null
    };

    if (
        !isObject(raw)
        || !Array.isArray(raw.items)
        || !isObject(raw.includes)
        || !Array.isArray(raw.includes.Asset)
    ) {
        console.warn('unknown raw data', raw);
        return siteContent;
    }

    raw.items.forEach(item => {
        if (!isObject(item)) {
            console.warn('unknown item', item);
            return;
        }
        switch(item.sys?.contentType?.sys?.id) {
            case ItemIds.PROJECT:
                const parsedProject = projectParser(item);
                if (!parsedProject) {
                    break;
                }
                siteContent.projects.unshift(parsedProject);
                break;
            case ItemIds.INFO_BLOCK:
                const parsedInfoBlock = infoBlockParser(item);
                if (!parsedInfoBlock) {
                    break;
                }
                siteContent.infoBlocks.unshift(parsedInfoBlock);
                break;
            case ItemIds.CONFIG:
                if (siteContent.config) {
                    break;
                }
                const parsedConfig = configParser(item);
                if (!parsedConfig) {
                    break;
                }
                siteContent.config = parsedConfig;
                break;
            default:
                console.warn('unknown item type', item);
        }
    });

    return siteContent;
}

export default siteContentParser;