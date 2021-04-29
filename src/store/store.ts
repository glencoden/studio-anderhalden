import { Page, State, ActionTypesType, PagesType, Action, Actions } from './index';
import { apiService } from '../lib/apiService/apiService';
import { applyStylesFromConfig } from '../lib/helpers';


// enums

export const ActionTypes: ActionTypesType = {
    GET_SITE_CONTENT: 'get-site-content',
    SET_PAGE: 'set-page',
    SET_PROJECT_ID: 'set-project-id'
};

export const Pages: PagesType = {
    HOME: 'home',
    PROJECTS: 'projects',
    PROJECT_DETAIL: 'project-detail',
    INFO: 'info'
};


// initial state

export const initState = {
    siteContent: {
        projects: [],
        infoBlocks: [],
        config: null
    },
    selectedPage: Pages.HOME,
    selectedProjectId: ''
};


// reducer

export function reducer(state: State, action: Action): State {
    switch (action.type) {
        case ActionTypes.GET_SITE_CONTENT:
            return { ...state, siteContent: action.payload };
        case ActionTypes.SET_PAGE:
            return { ...state, selectedPage: action.payload };
        case ActionTypes.SET_PROJECT_ID:
            return { ...state, selectedProjectId: action.payload };
        default:
            return state;
    }
}


// actions

function getSiteContent(): Promise<Action> {
    return new Promise(resolve => {
        apiService.getSiteContent()
            .then(siteContent => {
                applyStylesFromConfig(siteContent.config);
                resolve({ type: ActionTypes.GET_SITE_CONTENT, payload: siteContent });
            });
    });
}

function setPage(page: Page): Action {
    return { type: ActionTypes.SET_PAGE, payload: page };
}

function setProjectId(projectId: string): Action {
    return { type: ActionTypes.SET_PROJECT_ID, payload: projectId };
}

export const actions: Actions = {
    getSiteContent,
    setPage,
    setProjectId
};
