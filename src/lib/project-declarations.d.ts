import { Dispatch } from 'react';
import { EntryCollection, FieldType } from 'contentful';

export { Dispatch } from 'react';
export { ContentfulClientApi, EntryCollection } from 'contentful';

export type AsyncDispatch<T> = Dispatch<T | Promise<T>>

export type PageContent = EntryCollection<FieldType> | null;

export type State = {
    pageContent: PageContent;
    isLoading: boolean;
    error?: string;
}

export type Action = { type: 'get-page-content', pageContent: PageContent };

export type Reducer = (state: State, action: Action) => State;