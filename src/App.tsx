import { useEffect } from 'react';
import styles from './App.module.css';
import { apiService } from './lib/apiService';
import { initState, reducer } from './lib/store';
import useAsyncReducer from './lib/useAsyncReducer';

import Navigation from './components/Navigation/Navigation';


function App() {
    const [ state, dispatch ] = useAsyncReducer(reducer, initState);

    useEffect(() => {
        // @ts-ignore
        dispatch(apiService.getPageContent().then(result => ({ type: 'get-page-content', pageContent: result })));
    }, [ dispatch ]);

    console.log('app render', state);// TODO remove dev code

    return (
        <div className={styles.App}>
            <Navigation navElement={'Grafik'} />
        </div>
    );
}

export default App;
