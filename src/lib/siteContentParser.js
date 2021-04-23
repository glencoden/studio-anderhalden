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

function projectParser(item) {
    return item;
}

function infoBlockParser(item) {
    return item;
}

const minAnimationTime = 0.2;
const maxAnimationTime = 4;
const minImageSize = 400;
const maxImageSize = 1000;
const minImageRatio = 1;
const maxImageRatio = 2;

function configParser(item) {
    const result = {
        palette: {}
    };
    if (!isObject(item.fields)) {
        console.warn('unknown config item', item);
        return;
    }
    if (typeof item.fields.websiteTitel === 'string') {
        result.documentTitle = item.fields.websiteTitel;
    }
    if (isHexColor(item.fields.schwarz)) {
        result.palette.black = item.fields.schwarz;
    }
    if (isHexColor(item.fields.grau)) {
        result.palette.grey = item.fields.grau;
    }
    if (isHexColor(item.fields.hellgrau)) {
        result.palette.lightgrey = item.fields.hellgrau;
    }
    if (isHexColor(item.fields.weiss)) {
        result.palette.white = item.fields.weiss;
    }
    if (typeof item.fields.animationszeit === 'number') {
        result.animationTime = Math.min(maxAnimationTime, Math.max(minAnimationTime, item.fields.animationszeit));
    }
    if (typeof item.fields.maximaleBildgre === 'number') {
        result.imageSize = Math.min(maxImageSize, Math.max(minImageSize, item.fields.maximaleBildgre));
    }
    if (typeof item.fields.bildSeitenverhltnis === 'string') {
        const [ counter, denominator ] = item.fields.bildSeitenverhltnis.split(':').map(e => Number(e));
        if (!isNaN(counter) && !isNaN(denominator)) {
            result.ratio = Math.min(maxImageRatio, Math.max(minImageRatio, counter / denominator));
        }
    }
    return result;
}

export default siteContentParser;