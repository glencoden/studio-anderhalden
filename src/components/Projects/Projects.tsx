import { Project, Config } from '../../lib/apiService/parser';
import styles from './Projects.module.css';

import ProjectsItem from './ProjectsItem/ProjectsItem';

type ProjectsProps = {
    items: Array<Project>;
    config: Config;
    setProjectId: (projectId: string) => void;
};


function Projects({ items, config, setProjectId }: ProjectsProps): JSX.Element {
    return (
        <div className={styles.Projects}>
            <div className={styles.centerLine} />
            {items.map((item, index) => (
                <ProjectsItem
                    key={index}
                    item={item}
                    config={config}
                    callback={() => setProjectId(item.id)}
                />
            ))}
        </div>
    );
}

export default Projects;