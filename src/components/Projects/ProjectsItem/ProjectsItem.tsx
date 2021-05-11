import { Project, Config } from '../../../lib/apiService';
import styles from './ProjectsItem.module.css';
import { getImageRatio, getStyleVariable, getThumbnailWidth, isMobile, numberFromPx } from '../../../lib/helpers';

import Image from '../../Image/Image';

type ProjectsItemProps = {
    item: Project;
    config: Config;
    callback: () => void;
};


function ProjectsItem({ item, config, callback }: ProjectsItemProps): JSX.Element {
    if (!item.thumbnail) {
        return (
            <div className={styles.ProjectsItem}>no thumbnail</div>
        );
    }

    const padding = numberFromPx(getStyleVariable('--padding-medium'));
    let width = getThumbnailWidth(config);
    let ratio = getImageRatio(config);

    if (item.thumbnail.file.width === item.thumbnail.file.height) {
        width = Math.round(width / ratio);
        ratio = 1;
    }

    if (item.thumbnail.file.width < item.thumbnail.file.height) {
        const prevWidth = width;

        width = Math.round(width / ratio);
        ratio = width / (prevWidth - (4 * padding));
    }

    let titleWidth = width;

    if (!isMobile() && window.innerWidth < ((3 * width) + (4 * padding))) {
        titleWidth = ((window.innerWidth - width) / 2) - (2 * padding);
    }

    return (
        <div
            className={styles.ProjectsItem}
            onClick={() => callback()}
        >
            <Image
                width={width}
                ratio={ratio}
                {...item.thumbnail}
            />
            <h4
                className={styles.title}
                style={{ width: `${titleWidth}px` }}
            >
                {item.title}
            </h4>
        </div>
    );
}

export default ProjectsItem;