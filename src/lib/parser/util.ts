import { ParsedImage } from './index';
import { isObject } from '../helpers';
import { EntryFields } from 'contentful';

export function parseRichText(entry: EntryFields.Object): EntryFields.RichText | null {
    if (
        !isObject(entry)
        || !entry.hasOwnProperty('content')
        || !entry.hasOwnProperty('nodeType')
    ) {
        console.warn('unknown rich text entry', entry);
        return null;
    }
    return entry;
}

export function parseImage(entry: EntryFields.Object): ParsedImage | null {
    if (
        !isObject(entry)
        || !isObject(entry.sys)
        || !isObject(entry.fields)
    ) {
        console.warn('unknown image entry', entry);
        return null;
    }
    return {
        id: entry.sys.id,
        title: entry.fields.title,
        url: isObject(entry.fields.file) ? entry.fields.file.url : ''
    }
}