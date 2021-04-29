import { Project, Config } from '../../../lib/apiService/parser';
import styles from './ProjectListItem.module.css';
import Image from '../../Image/Image';

type ProjectListItemProps = {
    item: Project;
    config: Config;
    callback: () => void;
    fixedWidth?: number;
};


function ProjectListItem({ item, config, callback, fixedWidth }: ProjectListItemProps): JSX.Element {
    if (!item.thumbnail) {
        return (
            <div className={styles.ProjectListItem}>no thumbnail</div>
        );
    }

    let imageSize = config?.imageSize || 640;
    let ratio = config?.ratio || 1.6;

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
            className={styles.ProjectListItem}
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

export default ProjectListItem;