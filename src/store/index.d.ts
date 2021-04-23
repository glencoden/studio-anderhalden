import { SiteContent } from '../lib/parser/siteContentParser';
import { ActionTypes, Pages } from './store';

const actionTypes = Object.values(ActionTypes) as const;
const pages = Object.values(Pages) as const;

type ActionType = typeof actionTypes[number];
type Page = typeof pages[number];

export type ActionTypesType = {
    [key: string]: ActionType;
};

export type PagesType = {
    [key: string]: Page;
};

export type State = {
    siteContent: SiteContent;
    selectedPage: Page;
    selectedProjectId: string;
}

// type Payload = State[keyof State]; TODO why isn't this working? https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html

export type Action = {
    type: ActionType;
    payload: State['siteContent' | 'selectedPage' | 'selectedProject'];
}

export type Actions = {
    [key: string]: () => Action | Promise<Action>;
}

export type Reducer = (state: State, action: Action) => State;