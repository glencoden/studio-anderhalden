import { RawEntry, Config } from '../index';
import { isHexColor, isObject } from '../../helpers';

const minAnimationTime = 0.2;
const maxAnimationTime = 4;
const minImageSize = 400;
const maxImageSize = 1000;
const minImageRatio = 1;
const maxImageRatio = 2;


function configParser(item: RawEntry): Config {
    const config = {
        enabled: false,
        documentTitle: '',
        animationTime: 0,
        imageSize: 0,
        ratio: 0,
        palette: {
            black: '#000',
            grey: '#999',
            lightgrey: '#E5E5E5',
            white: '#FFF'
        }
    };
    if (!isObject(item.fields)) {
        console.warn('unknown config item', item);
        return config;
    }
    if (typeof item.fields.configAktiv === typeof config.enabled) {
        config.enabled = item.fields.configAktiv;
    }
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
        const [ counter, denominator ] = item.fields.bildSeitenverhltnis.split(':').map((e: any) => Number(e));
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

export default configParser;