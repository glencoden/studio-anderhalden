import { isObject } from '../helpers';
import { parseRichText, parseImage } from './parserLib';


function infoBlockParser(item) {
    if (!isObject(item.fields)) {
        console.warn('unknown info block item', item);
        return;
    }
    const infoBlock = {
        text: null,
        images: []
    };
    const text = parseRichText(item.fields.text);
    if (text) {
        infoBlock.text = text;
    }
    if (Array.isArray(item.fields.bild)) {
        infoBlock.images = item.fields.bild.map(entry => parseImage(entry)).filter(e => !!e);
    }
    return infoBlock;
}

export default infoBlockParser;