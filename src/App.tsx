import { useEffect } from 'react';
import styles from './App.module.css';
import { initState, reducer, actions } from './lib/store';
import useAsyncReducer from './lib/useAsyncReducer';

import Navigation from './components/Navigation/Navigation';


function App() {
    const { state, asyncDispatch } = useAsyncReducer(reducer, initState);

    useEffect(() => {
        asyncDispatch(actions.getPageContent());
    }, [ asyncDispatch ]);

    console.log('app render', state);// TODO remove dev code

    return (
        <div className={styles.App}>
            <Navigation navElement={'Grafik'} />
        </div>
    );
}

export default App;
