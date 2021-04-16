import { ContentfulClientApi } from 'contentful';

const contentful = require('contentful');


class RequestService {
    client: ContentfulClientApi;

    constructor() {
        // CreateClientParams
        this.client = contentful.createClient({
            space: 'b522n0157zmv',
            accessToken: 'k5don56ounRIbth9QrBNF1jZ14zqfcQ2muxGIfwg0r4'
        });
    }

    getEntries(): Promise<void> {
        return this.client.getEntries()
            .then((entries: any) => console.log(entries));
    }
}

export const requestService = new RequestService();