import { State, Reducer } from '../../store';
import { Dispatch, useMemo, useReducer } from 'react';

export type AsyncDispatch<T> = Dispatch<T | Promise<T>>

function wrapAsync<T>(dispatch: Dispatch<T>): AsyncDispatch<T> {
    return (action: T | Promise<T>) => {
        if (action instanceof Promise) {
            return action.then(dispatch);
        }
        return dispatch(action);
    };
}

function useAsyncReducer(reducer: Reducer, initState: State) {
    const [ state, dispatch ] = useReducer(reducer, initState);
    const asyncDispatch = useMemo(() => wrapAsync(dispatch), [ dispatch] );

    return { state, asyncDispatch };
}

export default useAsyncReducer;
