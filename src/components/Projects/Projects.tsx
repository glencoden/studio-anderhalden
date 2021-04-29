import { Project, Config } from '../../lib/apiService/parser';
import styles from './Projects.module.css';
import { isMobile, isPortrait } from '../../lib/helpers';
import ProjectListItem from './ProjectListItem/ProjectListItem';

type ProjectsProps = {
    items: Array<Project>;
    config: Config;
    setProjectId: (projectId: string) => void;
};

const mobilePadding = 10;


function Projects({ items, config, setProjectId }: ProjectsProps): JSX.Element {
    let fixedWidth = 0;

    if (isMobile() && isPortrait()) {
        fixedWidth = window.innerWidth - (2 * mobilePadding);
    }

    return (
        <div className={styles.Projects}>
            <div className={styles.centerLine} />
            {items.map((item, index) => (
                <ProjectListItem
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