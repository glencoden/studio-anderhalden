import { ContentfulClientApi, SiteContent } from '../../global';
import siteContentParser from './parser/siteContentParser';

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

    getSiteContent(): Promise<SiteContent> {
        return this._client.getEntries()
            .then(response => siteContentParser(response));
    }
}

export const apiService = new ApiService();