import { ParsedImage, Project } from '../index';
import { isObject } from '../../helpers';
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
        file: {
            url: isObject(entry.fields.file) ? entry.fields.file.url : '',
            width: isObject(entry.fields.file?.details?.image) ? entry.fields.file.details.image.width : 0,
            height: isObject(entry.fields.file?.details?.image) ? entry.fields.file.details.image.height : 0
        }
    }
}

export function sortProjects(projects: Array<Project>): Array<Project> {
    const positioned = projects
        .filter((project: Project) => project.position > -1)
        .sort((a, b) => a.position - b.position);

    const sorted = projects
        .filter((project: Project) => project.position <= -1)
        .sort((a, b) => {
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        });

    positioned.forEach((project: Project) => sorted.splice(Math.max(project.position - 1, 0), 0, project));

    return sorted;
}