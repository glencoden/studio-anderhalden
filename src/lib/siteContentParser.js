import { isHexColor, isObject } from './helpers';

const ItemIds = {
    PROJECT: 'projekt',
    INFO_BLOCK: 'infoBlock',
    CONFIG: 'config'
};

function siteContentParser(raw) {
    if (
        !isObject(raw)
        || !Array.isArray(raw.items)
        || !isObject(raw.includes)
        || !Array.isArray(raw.includes.Asset)
    ) {
        console.warn('unknown raw data', raw);
        return;
    }

    const siteContent = {
        projects: [],
        infoBlocks: [],
        config: null
    };

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

    console.log(siteContent);// TODO remove dev code
    return raw;
}

// entry parsers

function parseRichText(entry) {
    if (
        !isObject(entry)
        || !entry.hasOwnProperty('content')
        || !entry.hasOwnProperty('nodeType')
    ) {
        console.warn('unknown rich text entry', entry);
        return;
    }
    return entry;
}

function parseImage(entry) {
    if (
        !isObject(entry)
        || !isObject(entry.sys)
        || !isObject(entry.fields)
    ) {
        console.warn('unknown image entry', entry);
        return;
    }
    return {
        id: entry.sys.id,
        title: entry.fields.title,
        url: isObject(entry.fields.file) ? entry.fields.file.url : ''
    }
}

// project parser

function projectParser(item) {
    if (!isObject(item.fields)) {
        console.warn('unknown project item', item);
        return;
    }
    const project = {
        title: '',
        text: null,
        footnote: null,
        thumbnail: null,
        images: []
    };
    if (typeof item.fields.titel === typeof project.title) {
        project.title = item.fields.titel;
    }
    const text = parseRichText(item.fields.text);
    if (text) {
        project.text = text;
    }
    const footnote = parseRichText(item.fields.fussnote);
    if (footnote) {
        project.footnote = footnote;
    }
    const thumbnail = parseImage(item.fields.thumbnail);
    if (thumbnail) {
        project.thumbnail = thumbnail;
    }
    if (Array.isArray(item.fields.bilder)) {
        project.images = item.fields.bilder.map(entry => parseImage(entry)).filter(e => !!e);
    }
    return project;
}

// info block parser

function infoBlockParser(item) {
    return item;
}

// config parser

const minAnimationTime = 0.2;
const maxAnimationTime = 4;
const minImageSize = 400;
const maxImageSize = 1000;
const minImageRatio = 1;
const maxImageRatio = 2;

function configParser(item) {
    if (!isObject(item.fields)) {
        console.warn('unknown config item', item);
        return;
    }
    const config = {
        documentTitle: '',
        animationTime: 0,
        imageSize: 0,
        ratio: 0,
        palette: {}
    };
    if (typeof item.fields.websiteTitel === typeof config.documentTitle) {
        config.documentTitle = item.fields.websiteTitel;
    }
    if (typeof item.fields.animationszeit === typeof config.animationTime) {
        config.animationTime = Math.min(maxAnimationTime, Math.max(minAnimationTime, item.fields.animationszeit));
    }
    if (typeof item.fields.maximaleBildgre === typeof config.imageSize) {
        config.imageSize = Math.min(maxImageSize, Math.max(minImageSize, item.fields.maximaleBildgre));
    }
    if (typeof item.fields.bildSeitenverhltnis === 'string') {
        const [ counter, denominator ] = item.fields.bildSeitenverhltnis.split(':').map(e => Number(e));
        if (!isNaN(counter) && !isNaN(denominator)) {
            config.ratio = Math.min(maxImageRatio, Math.max(minImageRatio, counter / denominator));
        }
    }
    if (isHexColor(item.fields.schwarz)) {
        config.palette.black = item.fields.schwarz;
    }
    if (isHexColor(item.fields.grau)) {
        config.palette.grey = item.fields.grau;
    }
    if (isHexColor(item.fields.hellgrau)) {
        config.palette.lightgrey = item.fields.hellgrau;
    }
    if (isHexColor(item.fields.weiss)) {
        config.palette.white = item.fields.weiss;
    }
    return config;
}

export default siteContentParser;