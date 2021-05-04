import { Project, Config } from '../../lib/apiService/parser';
import styles from './ProjectDetail.module.css';

import NavClose from './NavClose/NavClose';
import NavSkip from './NavSkip/NavSkip';
import Image from '../Image/Image';
import { getContentWidth } from '../../lib/helpers';

type ProjectDetailProps = {
    project: Project;
    config: Config;
};


function ProjectDetail({ project, config }: ProjectDetailProps): JSX.Element {
    const width = getContentWidth(config);

    return (
        <div className={styles.ProjectDetail}>
            <div className={styles.images}>
                {project.images.map((image, index) => (
                    <Image key={index} width={width} ratio={1.6} id={image.id} title={image.title} file={image.file} />
                ))}
            </div>
            <NavClose />
            <NavSkip />
        </div>
    );
}

export default ProjectDetail;