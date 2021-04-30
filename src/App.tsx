import { useState, useEffect } from 'react';
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

    const [ curtainOpen, setCurtainOpen ] = useState(false);

    useEffect(() => {
        asyncDispatch(actions.getSiteContent()); // TODO refresh
    }, [ asyncDispatch ]);

    console.log('app render state', state);// TODO remove dev code

    return (
        <div className={selectedPage === Pages.HOME ? styles.isHome : ''}>
            <Curtain
                open={curtainOpen}
                onClose={() => asyncDispatch(actions.setPage(Pages.HOME))}
            />
            <Logo>
                <Button
                    label={siteContent.config ? siteContent.config.documentTitle : 'Studio Anderhalden'}
                    callback={() => setCurtainOpen(false)}
                />
            </Logo>
            <Navigation>
                <Button
                    label="Grafik"
                    active={curtainOpen && selectedPage === Pages.PROJECTS}
                    callback={() => {
                        asyncDispatch(actions.setPage(Pages.PROJECTS));
                        setCurtainOpen(true);
                    }}
                />
                <Button
                    label="Kontakt + Info"
                    active={curtainOpen && selectedPage === Pages.INFO}
                    callback={() => {
                        asyncDispatch(actions.setPage(Pages.INFO));
                        setCurtainOpen(true);
                    }}
                />
            </Navigation>
            {(selectedPage === Pages.HOME || selectedPage === Pages.PROJECTS) && (
                <Projects
                    items={siteContent.projects}
                    config={siteContent.config}
                    setProjectId={projectId => asyncDispatch(actions.setProjectId(projectId))}
                />
            )}
            {selectedPage === Pages.INFO && (
                <Info
                    items={siteContent.infoBlocks}
                    config={siteContent.config}
                />
            )}
        </div>
    );
}

export default App;
