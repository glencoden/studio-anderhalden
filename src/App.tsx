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
import PageBox from './components/PageBox/PageBox';


function App(): JSX.Element {
    const { state, asyncDispatch } = useAsyncReducer(reducer, initState);
    const { siteContent, targetPage, selectedPage, selectedProjectId } = state;

    useEffect(() => {
        asyncDispatch(actions.getSiteContent()); // TODO refresh
    }, [ asyncDispatch ]);

    console.log('app render state', state);// TODO remove dev code

    return (
        <div className={selectedPage === Pages.HOME ? styles.isHome : ''}>
            <Curtain
                open={targetPage !== Pages.HOME}
                onOpen={() => asyncDispatch(actions.setPage(targetPage))}
                onClose={() => asyncDispatch(actions.setPage(Pages.HOME))}
            />
            <Logo>
                <Button
                    label={siteContent.config ? siteContent.config.documentTitle : 'Studio Anderhalden'}
                    cta={() => asyncDispatch(actions.setTarget(Pages.HOME))}
                />
            </Logo>
            <Navigation>
                <Button
                    label="Grafik"
                    active={targetPage === Pages.PROJECTS}
                    disabled={!siteContent.projects.length}
                    cta={() => asyncDispatch(actions.setTarget(Pages.PROJECTS))}
                />
                <Button
                    label="Kontakt + Info"
                    active={targetPage === Pages.INFO}
                    disabled={!siteContent.infoBlocks.length}
                    cta={() => asyncDispatch(actions.setTarget(Pages.INFO))}
                />
            </Navigation>
            <PageBox page={Pages.PROJECTS} target={targetPage} selected={selectedPage}>
                <Projects
                    items={siteContent.projects}
                    config={siteContent.config}
                    setProjectId={projectId => asyncDispatch(actions.setProjectId(projectId))}
                />
            </PageBox>
            <PageBox page={Pages.INFO} target={targetPage} selected={selectedPage}>
                <Info
                    items={siteContent.infoBlocks}
                    config={siteContent.config}
                    open={targetPage === Pages.INFO}
                    onOpen={() => asyncDispatch(actions.setPage(Pages.INFO))}
                    onClose={() => asyncDispatch(actions.setPage(targetPage))}
                />
            </PageBox>
        </div>
    );
}

export default App;
