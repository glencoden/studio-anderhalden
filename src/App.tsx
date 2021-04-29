import { useEffect } from 'react';
import styles from './App.module.css';
import { Pages, initState, reducer, actions } from './store/store';
import useAsyncReducer from './lib/hooks/useAsyncReducer';

import Navigation from './components/Navigation/Navigation';
import Curtain from './components/Curtain/Curtain';
import Logo from './components/Logo/Logo';
import Button from './components/Button/Button';
import Projects from './components/Projects/Projects';
import Info from './components/Info/Info';


function App(): JSX.Element {
    const { state, asyncDispatch } = useAsyncReducer(reducer, initState);
    const { siteContent, selectedPage, selectedProjectId } = state;

    useEffect(() => {
        asyncDispatch(actions.getSiteContent());
    }, [ asyncDispatch ]);

    console.log('app render state', state);// TODO remove dev code

    return (
        <div className={styles.App}>
            <Curtain open={selectedPage !== Pages.HOME} />
            <Logo>
                <Button
                    label={siteContent.config ? siteContent.config.documentTitle : 'Studio Anderhalden'}
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
            {selectedPage === Pages.PROJECTS && (
                <Projects
                    items={siteContent.projects}
                    config={siteContent.config}
                    setProjectId={projectId => asyncDispatch(actions.setProjectId(projectId))}
                />
            )}
            {selectedPage === Pages.INFO && (
                <Info items={siteContent.infoBlocks} />
            )}
        </div>
    );
}

export default App;
