import { useState, useEffect } from 'react';
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
import CloseIcon from './components/Icons/CloseIcon';
import AddIcon from './components/Icons/AddIcon';

const debounceTimeout = 100;
let resizeTimeoutId = 0;


function App(): JSX.Element {
    const { state, asyncDispatch } = useAsyncReducer(reducer, initState);
    const { siteContent, targetPage, selectedPage, selectedProjectId } = state;

    const [ , triggerResize ] = useState(false);

    useEffect(() => {
        const resize = () => {
            if (resizeTimeoutId) {
                window.clearTimeout(resizeTimeoutId);
            }
            resizeTimeoutId = window.setTimeout(() => triggerResize(prevState => !prevState), debounceTimeout);
        };
        window.addEventListener('resize', resize);
        return () => window.removeEventListener('resize', resize);
    }, []);

    useEffect(() => asyncDispatch(actions.getSiteContent()), [ asyncDispatch ]);

    const isMobileNav = (targetPage !== Pages.HOME || selectedPage !== Pages.HOME) && isMobile();

    return (
        <div className={cx('', { [styles.isHome]: selectedPage === Pages.HOME })}>
            <Curtain
                open={targetPage !== Pages.HOME}
                onOpen={() => asyncDispatch(actions.setPage(targetPage))}
                onClose={() => asyncDispatch(actions.setPage(Pages.HOME))}
            />

            <Navigation
                isMobileNav={isMobileNav}
                mobileNavIndex={isMobileNav ? (targetPage === Pages.INFO ? 0 : 1) : (targetPage === Pages.PROJECT_DETAIL ? 1 : -1)}
            >
                <Button
                    label={isMobileNav ? <CloseIcon/> : 'Grafik'}
                    active={targetPage === Pages.PROJECTS}
                    disabled={!siteContent.projects.length}
                    cta={() => asyncDispatch(actions.setTarget(Pages.PROJECTS))}
                />
                <Button
                    label={isMobileNav ? <AddIcon/> : 'Kontakt + Info'}
                    active={targetPage === Pages.INFO}
                    disabled={!siteContent.infoBlocks.length}
                    cta={() => asyncDispatch(actions.setTarget(Pages.INFO))}
                />
            </Navigation>

            <Logo>
                <Button
                    label={siteContent.config?.documentTitle ? siteContent.config.documentTitle : 'Studio Anderhalden'}
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
                <ProjectDetail
                    selectedProjectId={selectedProjectId}
                    projects={siteContent.projects}
                    config={siteContent.config}
                    setProjectId={projectId => asyncDispatch(actions.setProjectId(projectId))}
                    onClose={() => {
                        asyncDispatch(actions.setTarget(Pages.PROJECTS));
                        asyncDispatch(actions.setPage(Pages.PROJECTS));
                    }}
                />
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
