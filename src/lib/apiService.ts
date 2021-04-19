import { ContentfulClientApi, EntryCollection, FieldType } from 'contentful';

export type PageContent = EntryCollection<FieldType> | EntryCollection<unknown> | null;

const contentful = require('contentful');

const space = 'b522n0157zmv';
const accessToken = 'k5don56ounRIbth9QrBNF1jZ14zqfcQ2muxGIfwg0r4';


class ApiService {
    _client: ContentfulClientApi;

    constructor() {
        this._client = contentful.createClient({
            space,
            accessToken
        });
    }

    getPageContent(): Promise<PageContent> {
        return this._client.getEntries();
    }
}

export const apiService = new ApiService();