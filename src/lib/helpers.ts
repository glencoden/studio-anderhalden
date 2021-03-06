import { Config } from './apiService';

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
    document.documentElement.style.setProperty('--animation-time', `${config.animationTime}s`);
}

export function getThumbnailWidth(config: Config): number {
    let width = Math.round(Math.min(
        (config?.thumbnailSize || numberFromPx(getStyleVariable('--default-thumbnail-width'))),
        (window.innerWidth / 2))
    );
    if (isMobile() && isPortrait()) {
        width = window.innerWidth - (2 * numberFromPx(getStyleVariable('--padding-medium')));
    }
    return width;
}

export function getContentWidth(config: Config): number {
    let width = Math.round(Math.min(
        (config?.imageSize || numberFromPx(getStyleVariable('--default-content-width'))),
        (window.innerWidth / 2))
    );
    if (isMobile() && isPortrait()) {
        width = window.innerWidth - (2 * numberFromPx(getStyleVariable('--padding-medium')));
    }
    return width;
}

export function getImageRatio(config: Config) {
    return config?.ratio || Number(getStyleVariable('--default-image-ratio'));
}

export function isObject(val: any): Boolean {
    return val !== null && typeof val !== 'function' && typeof val === 'object' && !Array.isArray(val);
}

export function isHexColor(val: any): Boolean {
    return /#[0-9A-Fa-f]{3}/.test(val) || /#[0-9A-Fa-f]{6}/.test(val);
}

export function isPortrait(): boolean {
    let isPortrait = window.innerWidth < window.innerHeight;
    if (isObject(window.screen.orientation)) {
        const { type } = window.screen.orientation;
        isPortrait = typeof type === 'string' && type.includes('portrait');
    }
    return isPortrait;
}

export function isMobile(): boolean {
    if (isPortrait()) {
        return window.innerWidth < 620;
    }
    return window.innerWidth < 820;
}

const styleVariables: { [key: string]: string } = {};

export function getStyleVariable(name: string): string {
    if (styleVariables[name]) {
        return styleVariables[name];
    }
    const value = window.getComputedStyle(document.documentElement).getPropertyValue(name);
    styleVariables[name] = value;
    return value;
}

export function numberFromPx(value: string): number {
    if (value.endsWith('px')) {
        return Number(value.slice(0, -2));
    }
    return 0;
}

export function incrementIndex(list: Array<any>, index: number, increment: number): number {
    return (list.length + index + increment) % list.length;
}

export function addTargetBlankToRichText(node: HTMLDivElement): void {
    const aTags = node.getElementsByTagName('a');
    for (let i = 0; i < aTags.length; i++) {
        if (aTags[i].href && aTags[i].href.startsWith('http')) {
            aTags[i].setAttribute('target', '_blank');
        }
    }
}