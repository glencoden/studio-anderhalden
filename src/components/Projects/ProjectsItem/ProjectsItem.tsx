import { Project, Config } from '../../../lib/apiService/parser';
import styles from './ProjectsItem.module.css';
import Image from '../../Image/Image';

type ProjectsItemProps = {
    item: Project;
    config: Config;
    callback: () => void;
    fixedWidth?: number;
};

const defaultWidth = 640; // TODO get from config
const defaultRatio = 1.6; // TODO get from config


function ProjectsItem({ item, config, callback, fixedWidth }: ProjectsItemProps): JSX.Element {
    if (!item.thumbnail) {
        return (
            <div className={styles.ProjectsItem}>no thumbnail</div>
        );
    }

    let imageSize = config?.imageSize || defaultWidth;
    let ratio = config?.ratio || defaultRatio;

    let width = 0;

    if (item.thumbnail.file.width < item.thumbnail.file.height) {
        ratio = 1 / ratio;
    }

    if (fixedWidth) {
        width = fixedWidth;
    } else {
        width = Math.round(Math.min(imageSize, (window.innerWidth / 2)));
        if (ratio < 1) {
            width = Math.round(width * ratio);
        }
    }

    return (
        <div
            className={styles.ProjectsItem}
            title={item.title}
            onClick={() => callback()}
        >
            <Image
                width={width}
                ratio={ratio}
                {...item.thumbnail}
            />
        </div>
    );
}

export default ProjectsItem;