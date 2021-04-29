import { Project } from '../../lib/apiService/parser';
import styles from './Projects.module.css';
import ProjectListItem from './ProjectListItem/ProjectListItem';

type ProjectsProps = {
    items: Array<Project>;
};


function Projects({ items }: ProjectsProps): JSX.Element {
    return (
        <div className={styles.Projects}>
            <div className={styles.centerLine} />
            {items.map((item, index) => (
                <ProjectListItem item={item} key={index} />
            ))}
        </div>
    );
}

export default Projects;