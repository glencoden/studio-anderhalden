import { isObject } from '../helpers';
import { parseRichText, parseImage } from './parserHelpers';


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

export default projectParser;