import { useEffect } from 'react';
import styles from './App.module.css';
import cx from 'classnames';
import useAsyncReducer from './lib/hooks/useAsyncReducer';
import { Pages, initState, reducer, actions } from './store/store';
import { isMobile } from './lib/helpers';

import Navigation from './components/Navigation/Navigation';
import Curtain from './components/Curtain/Curtain';
import Logo from './components/Logo/Logo';
import Button from './components/Button/Button';
import Projects from './components/Projects/Projects';
import Info from './components/Info/Info';
import PageBox from './components/PageBox/PageBox';
import ProjectDetail from './components/ProjectDetail/ProjectDetail';


function App(): JSX.Element {
    const { state, asyncDispatch } = useAsyncReducer(reducer, initState);
    const { siteContent, targetPage, selectedPage, selectedProjectId } = state;

    useEffect(() => asyncDispatch(actions.getSiteContent()), [ asyncDispatch ]);

    const isMobileNav = (targetPage !== Pages.HOME || selectedPage !== Pages.HOME) && isMobile();

    console.log('app render state', state);// TODO remove dev code

    return (
        <div className={cx(styles.App, { [styles.isHome]: selectedPage === Pages.HOME })}>
            <Curtain
                open={targetPage !== Pages.HOME}
                onOpen={() => asyncDispatch(actions.setPage(targetPage))}
                onClose={() => asyncDispatch(actions.setPage(Pages.HOME))}
            />

            <Navigation mobileNavIndex={isMobileNav ? (targetPage === Pages.INFO ? 0 : 1) : -1}>
                <Button
                    label={isMobileNav ? 'x' : 'Grafik'}
                    active={targetPage === Pages.PROJECTS}
                    disabled={!siteContent.projects.length}
                    cta={() => asyncDispatch(actions.setTarget(Pages.PROJECTS))}
                />
                <Button
                    label={isMobileNav ? '...' : 'Kontakt + Info'}
                    active={targetPage === Pages.INFO}
                    disabled={!siteContent.infoBlocks.length}
                    cta={() => asyncDispatch(actions.setTarget(Pages.INFO))}
                />
            </Navigation>

            <Logo>
                <Button
                    label={siteContent.config ? siteContent.config.documentTitle : 'Studio Anderhalden'}
                    cta={() => asyncDispatch(actions.setTarget(Pages.HOME))}
                />
            </Logo>

            <PageBox page={Pages.PROJECTS} target={targetPage} selected={selectedPage}>
                <Projects
                    items={siteContent.projects}
                    config={siteContent.config}
                    setProjectId={projectId => {
                        asyncDispatch(actions.setProjectId(projectId));
                        asyncDispatch(actions.setTarget(Pages.PROJECT_DETAIL));
                        asyncDispatch(actions.setPage(Pages.PROJECT_DETAIL));
                    }}
                />
            </PageBox>

            {selectedPage === Pages.PROJECT_DETAIL && (
                <ProjectDetail project={siteContent.projects.find((project: any) => project.id === selectedProjectId)} />
            )}

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
