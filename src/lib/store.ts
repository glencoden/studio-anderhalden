import { State, Action } from './project-declarations';
import { apiService } from './apiService';

export const ActionTypes = {
    GET_PAGE_CONTENT: 'get-page-content'
};

export const initState = {
    pageContent: null,
    isLoading: false
};

export function reducer(state: State, action: Action): State {
    switch (action.type) {
        case ActionTypes.GET_PAGE_CONTENT:
            return { ...state, pageContent: action.pageContent };
        default:
            return state;
    }
}

export const actions = {
    getPageContent: () => apiService.getPageContent().then(result => ({ type: ActionTypes.GET_PAGE_CONTENT, pageContent: result }))
};
