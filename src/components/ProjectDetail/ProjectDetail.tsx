import { Project } from '../../lib/apiService/parser';
import styles from './ProjectDetail.module.css';

import NavTop from './NavTop/NavTop';
import NavBottom from './NavBottom/NavBottom';

type ProjectDetailProps = {
    project: Project;
};


function ProjectDetail({ project }: ProjectDetailProps): JSX.Element {
    return (
        <div className={styles.ProjectDetail}>
            {project.id}
            <NavTop />
            <NavBottom />
        </div>
    );
}

export default ProjectDetail;