import { RawEntry, Project } from '../index';
import { EntryFields } from 'contentful';
import { isObject } from '../../helpers';
import { parseRichText, parseImage } from './util';


function projectParser(item: RawEntry) {
    if (!isObject(item.fields) || !isObject(item.sys)) {
        console.warn('unknown project item', item);
        return;
    }
    const project: Project = {
        id: '',
        createdAt: new Date().toISOString(),
        title: '',
        text: null,
        footnote: null,
        thumbnail: null,
        images: [],
        position: -1
    };
    if (typeof item.sys.id === typeof project.id) {
        project.id = item.sys.id;
    }
    if (typeof item.sys.createdAt === typeof project.createdAt) {
        project.createdAt = item.sys.createdAt;
    }
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
        project.images = item.fields.bilder.map((entry: EntryFields.Object) => parseImage(entry)).filter((entry: EntryFields.Object) => !!entry);
    }
    if (typeof item.fields.position === typeof project.position) {
        project.position = item.fields.position;
    }
    return project;
}

export default projectParser;