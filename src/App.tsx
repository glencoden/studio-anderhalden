import { useEffect } from 'react';
import styles from './App.module.css';
import { Pages, initState, reducer, actions } from './store/store';
import useAsyncReducer from './lib/hooks/useAsyncReducer';

import Navigation from './components/Navigation/Navigation';
import Curtain from './components/Curtain/Curtain';
import Logo from './components/Logo/Logo';
import Button from './components/Button/Button';
import Projects from './components/Projects/Projects';


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
            <Curtain open={selectedPage !== Pages.HOME} />
            <Logo>
                <Button
                    label={config ? config.documentTitle : 'Studio Anderhalden'}
                    callback={() => asyncDispatch(actions.setPage(Pages.HOME))}
                />
            </Logo>
            <Navigation>
                <Button
                    label="Grafik"
                    active={selectedPage === Pages.PROJECTS}
                    callback={() => asyncDispatch(actions.setPage(Pages.PROJECTS))}
                />
                <Button
                    label="Kontakt + Info"
                    active={selectedPage === Pages.INFO}
                    callback={() => asyncDispatch(actions.setPage(Pages.INFO))}
                />
            </Navigation>
            <Projects items={projects} />
        </div>
    );
}

export default App;
