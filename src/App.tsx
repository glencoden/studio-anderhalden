import { useEffect } from 'react';
import styles from './App.module.css';
import { initState, reducer, actions } from './store/store';
import useAsyncReducer from './hooks/useAsyncReducer';

import Navigation from './components/Navigation/Navigation';
import Info from './components/Info/Info';


function App(): JSX.Element {
    const { state, asyncDispatch } = useAsyncReducer(reducer, initState);

    useEffect(() => {
        asyncDispatch(actions.getSiteContent());
    }, [ asyncDispatch ]);

    console.log('app render state', state);// TODO remove dev code

    return (
        <div className={styles.App}>
            <Navigation navElement={'Grafik'} />
            <Info items={state.siteContent?.items} />
        </div>
    );
}

export default App;
