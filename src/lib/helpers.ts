import { Config } from './apiService/parser';

export function isObject(val: any): Boolean {
    return val !== null && typeof val !== 'function' && typeof val === 'object' && !Array.isArray(val);
}

export function isHexColor(val: any): Boolean {
    return /#[0-9A-Fa-f]{3}/.test(val) || /#[0-9A-Fa-f]{6}/.test(val);
}

export function applyStylesFromConfig(config: Config): void {
    // @ts-ignore
    if (!config.enabled) {
        return;
    }
    // @ts-ignore
    document.title = config.documentTitle;
    // @ts-ignore
    document.documentElement.style.setProperty('--black', config.palette.black);
    // @ts-ignore
    document.documentElement.style.setProperty('--grey', config.palette.grey);
    // @ts-ignore
    document.documentElement.style.setProperty('--lightgrey', config.palette.lightgrey);
    // @ts-ignore
    document.documentElement.style.setProperty('--white', config.palette.white);
    // @ts-ignore
    document.documentElement.style.setProperty('--animation-time', config.animationTime);
}