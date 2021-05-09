import { RawEntry, InfoBlock } from '../index';
import { isObject } from '../../helpers';
import { parseRichText, parseImage } from './util';
import { EntryFields } from 'contentful';


function infoBlockParser(item: RawEntry): InfoBlock | null {
    if (!isObject(item.fields)) {
        console.warn('unknown info block item', item);
        return null;
    }
    const infoBlock: InfoBlock = {
        text: null,
        images: []
    };
    if (item.fields.text) {
        const richText = parseRichText(item.fields.text);
        if (richText) {
            infoBlock.text = richText;
        }
    }
    if (Array.isArray(item.fields.bild)) {
        infoBlock.images = item.fields.bild.map((entry: EntryFields.Object) => parseImage(entry)).filter((entry: EntryFields.Object) => !!entry);
    }
    return infoBlock;
}

export default infoBlockParser;