import { useEffect } from 'react';
import styles from './App.module.css';
import { Pages, initState, reducer, actions } from './store/store';
import useAsyncReducer from './lib/hooks/useAsyncReducer';

import Navigation from './components/Navigation/Navigation';
import Curtain from './components/Curtain/Curtain';
import Logo from './components/Logo/Logo';
import Button from './components/Button/Button';


function App(): JSX.Element {
    const { state, asyncDispatch } = useAsyncReducer(reducer, initState);
    const { selectedPage, selectedProjectId } = state;
    const { projects, infoBlocks, config } = state.siteContent;

    useEffect(() => {
        asyncDispatch(actions.getSiteContent());
    }, [ asyncDispatch ]);

    console.log('app render state', state);// TODO remove dev code

    return (
        <div className={styles.App}>
            <Logo>
                <Button
                    label={config ? config.documentTitle : 'Studio Anderhalden'}
                    callback={() => asyncDispatch(actions.setPage(Pages.HOME))}
                />
            </Logo>
            <Curtain open={selectedPage !== Pages.HOME} />
            <Navigation navElements={[ 'Grafik', 'Info + Kontakt' ]} />
        </div>
    );
}

export default App;
