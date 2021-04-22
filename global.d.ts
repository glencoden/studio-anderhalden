import { ActionTypes, Pages } from './src/store/store';
import { Dispatch } from 'react';
import { EntryCollection, FieldType } from 'contentful';


// infrastructure - contentful api

export { ContentfulClientApi, EntryCollection } from 'contentful';

export type SiteContent = EntryCollection<FieldType> | null;


// ui - react

export { Dispatch } from 'react';

export type AsyncDispatch<T> = Dispatch<T | Promise<T>>


// adapter - store

const pages = Object.values(Pages) as const;

type Page = typeof pages[number];

export type PagesType = {
    [key: string]: Page;
};

export type State = {
    siteContent: SiteContent;
    selectedPage: Page;
    selectedProjectId: string;
}

type Payload = State['siteContent' | 'selectedPage' | 'selectedProject'];
// type Payload = State[keyof State]; TODO why isn't this working? https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html

const actionTypes = Object.values(ActionTypes) as const;

type ActionType = typeof actionTypes[number];

export type ActionTypesType = {
    [key: string]: ActionType;
};

export type Action = {
    type: ActionType;
    payload: Payload;
}

export type Actions = {
    [key: string]: () => Action | Promise<Action>;
}

export type Reducer = (state: State, action: Action) => State;
