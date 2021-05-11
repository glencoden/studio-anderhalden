import { EntryFields } from 'contentful';
import { Project, Config } from '../../lib/apiService';
import styles from './ProjectDetail.module.css';
import { getContentWidth, getImageRatio, getStyleVariable, incrementIndex, isMobile, isPortrait, numberFromPx } from '../../lib/helpers';

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
    const prevIndex = incrementIndex(projects, index, -1);
    const nextIndex = incrementIndex(projects, index, 1);

    const width = getContentWidth(config);
    const ratio = getImageRatio(config);

    const padding = numberFromPx(getStyleVariable('--padding-large'));
    const widthOverhead = (window.innerWidth / 2) - width;
    const textBoxTranslateX = (width / 2) + padding;
    let textBoxWidth = width / 2;

    if (widthOverhead < (2 * padding)) {
        textBoxWidth -= ((2 * padding) - widthOverhead);
    }

    return (
        <div className={styles.ProjectDetail}>
            <div className={styles.imageBox}>
                {project.images.map((image, index) => {
                    let imageWidth = width;
                    let imageRatio = ratio;
                    if (image.file.width === image.file.height) {
                        imageWidth = Math.round(width / ratio);
                        imageRatio = 1;
                    }
                    if (image.file.width < image.file.height) {
                        imageRatio = 1 / ratio;
                        imageWidth = Math.round(width * imageRatio * imageRatio);
                    }
                    return (
                        <Image key={index} width={imageWidth} ratio={imageRatio} id={image.id} title={image.title} file={image.file} />
                    );
                })}
            </div>

            <div
                className={styles.textBox}
                style={isMobile()
                    ? isPortrait() ? {} : { width: `${width}px`, position: 'relative', left: '50%', transform: 'translateX(-50%)' }
                    : { width: `${textBoxWidth}px`, transform: `translateX(${textBoxTranslateX}px)` }
                }
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