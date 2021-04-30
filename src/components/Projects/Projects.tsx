import { Project, Config } from '../../lib/apiService/parser';
import styles from './Projects.module.css';
import { isMobile, isPortrait } from '../../lib/helpers';
import ProjectsItem from './ProjectsItem/ProjectsItem';

type ProjectsProps = {
    items: Array<Project>;
    config: Config;
    setProjectId: (projectId: string) => void;
};

const paddingMedium = 10; // TODO get from config


function Projects({ items, config, setProjectId }: ProjectsProps): JSX.Element {
    let fixedWidth = 0;

    if (isMobile() && isPortrait()) {
        fixedWidth = window.innerWidth - (2 * paddingMedium);
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