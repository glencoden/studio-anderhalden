import { Project, Config } from '../../lib/apiService/parser';
import styles from './Projects.module.css';
import { getStyleVariable, isMobile, isPortrait, numberFromPx } from '../../lib/helpers';

import ProjectsItem from './ProjectsItem/ProjectsItem';

type ProjectsProps = {
    items: Array<Project>;
    config: Config;
    setProjectId: (projectId: string) => void;
};


function Projects({ items, config, setProjectId }: ProjectsProps): JSX.Element {
    let fixedWidth = 0;

    if (isMobile() && isPortrait()) {
        fixedWidth = window.innerWidth - (2 * numberFromPx(getStyleVariable('--padding-medium')));
    }

    return (
        <div className={styles.Projects}>
            <div className={styles.centerLine} />
            {items.map((item, index) => (
                <ProjectsItem
                    key={index}
                    item={item}
                    config={config}
                    callback={() => setProjectId(item.id)}
                    fixedWidth={fixedWidth}
                />
            ))}
        </div>
    );
}

export default Projects;