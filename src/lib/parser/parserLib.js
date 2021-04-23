import { isObject } from '../helpers';

export function parseRichText(entry) {
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

export function parseImage(entry) {
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