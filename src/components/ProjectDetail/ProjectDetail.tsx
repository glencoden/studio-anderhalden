import { Project, Config } from '../../lib/apiService/parser';
import styles from './ProjectDetail.module.css';
import { getContentWidth } from '../../lib/helpers';

import NavClose from './NavClose/NavClose';
import NavSkip from './NavSkip/NavSkip';
import Image from '../Image/Image';

type ProjectDetailProps = {
    selectedProjectId: string;
    projects: Array<Project>;
    config: Config;
    setProjectId: (projectId: string) => void;
    onClose: () => void;
};


function ProjectDetail({ selectedProjectId, projects, config, setProjectId, onClose }: ProjectDetailProps): JSX.Element {
    const project = projects.find((project: any) => project.id === selectedProjectId);

    if (!project) {
        return (
            <div>no project</div>
        );
    }

    const index = projects.indexOf(project);
    const prevIndex = (projects.length + index - 1) % projects.length;
    const nextIndex = (projects.length + index + 1) % projects.length;

    const width = getContentWidth(config);

    return (
        <div className={styles.ProjectDetail}>
            <div className={styles.imageBox}>
                {project.images.map((image, index) => (
                    <Image key={index} width={width} ratio={1.6} id={image.id} title={image.title} file={image.file} />
                ))}
            </div>

            <NavSkip
                selectPrev={() => setProjectId(projects[prevIndex].id)}
                selectNext={() => setProjectId(projects[nextIndex].id)}
            />
            <NavClose onClose={onClose} />
        </div>
    );
}

export default ProjectDetail;