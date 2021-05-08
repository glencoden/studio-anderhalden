import { ContentfulClientApi, EntryCollection } from 'contentful';
import { SiteContent } from './index';
import siteContentParser from './parser/siteContentParser';

const contentful = require('contentful'); // TODO why does import statement not work here?

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

    getSiteContent(): Promise<SiteContent> {
        return this._client.getEntries()
            .then((response: EntryCollection<any>) => siteContentParser(response));
    }

    getImageUrl({ id, width, height }: { id: string, width: number, height: number }): Promise<string> {
        return this._client.getAsset(id)
            .then(asset => `${asset.fields.file.url}?fit=fill&w=${width}&h=${height}`);
    }
}

export const apiService = new ApiService();