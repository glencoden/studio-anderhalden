import { State, ActionTypesType, PagesType, Action, Actions } from './index';
import { apiService } from '../lib/services/apiService';


// enums

export const ActionTypes: ActionTypesType = {
    GET_SITE_CONTENT: 'get-site-content'
};

export const Pages: PagesType = {
    HOME: 'home',
    PROJECTS: 'projects',
    PROJECT_DETAIL: 'project-detail',
    INFO: 'info'
};


// initial state

export const initState = {
    siteContent: null,
    selectedPage: Pages.HOME,
    selectedProjectId: ''
};


// reducer

export function reducer(state: State, action: Action): State {
    switch (action.type) {
        case ActionTypes.GET_SITE_CONTENT:
            return { ...state, siteContent: action.payload };
        default:
            return state;
    }
}


// actions

function getSiteContent(): Promise<Action> {
    return new Promise(resolve => {
        apiService.getSiteContent()
            .then(siteContent => resolve({ type: ActionTypes.GET_SITE_CONTENT, payload: siteContent }));
    });
}

export const actions: Actions = {
    getSiteContent
};
