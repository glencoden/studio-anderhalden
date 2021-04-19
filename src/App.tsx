import { useEffect } from 'react';
import styles from './App.module.css';
import { initState, reducer, actions } from './store/store';
import useAsyncReducer from './hooks/useAsyncReducer';

import Navigation from './components/Navigation/Navigation';


function App(): JSX.Element {
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
