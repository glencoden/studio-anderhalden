import { EntryFields } from 'contentful';
import { Project, Config } from '../../lib/apiService/parser';
import styles from './ProjectDetail.module.css';
import { getContentWidth, getImageRatio, isMobile } from '../../lib/helpers';

import Image from '../Image/Image';
import RichText from '../RichText/RichText';
import NavClose from './NavClose/NavClose';
import NavSkip from './NavSkip/NavSkip';

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
    const ratio = getImageRatio(config);

    return (
        <div className={styles.ProjectDetail}>
            <div className={styles.imageBox}>
                {project.images.map((image, index) => (
                    <Image key={index} width={width} ratio={ratio} id={image.id} title={image.title} file={image.file} />
                ))}
            </div>

            <div
                className={styles.textBox}
                style={isMobile() ? {} : { right: `${Math.max((window.innerWidth / 2) - width, 0)}px`, width: `${width / 2}px` }}
            >
                <h1>{project.title}</h1>
                <RichText entry={project.text as EntryFields.RichText} size="m" />
                <RichText entry={project.footnote as EntryFields.RichText} size="s" />
                <div className={styles.space} />
            </div>

            <NavSkip
                selectPrev={() => {
                    setProjectId(projects[prevIndex].id);
                    window.scroll(0, 0);
                }}
                selectNext={() => {
                    setProjectId(projects[nextIndex].id);
                    window.scroll(0, 0);
                }}
            />

            <NavClose
                onClose={onClose}
                numProjects={projects.length}
                currentIndex={index}
            />
        </div>
    );
}

export default ProjectDetail;