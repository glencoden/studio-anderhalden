import { Project, Config } from '../../../lib/apiService/parser';
import styles from './ProjectsItem.module.css';
import { getStyleVariable, numberFromPx } from '../../../lib/helpers';

import Image from '../../Image/Image';

type ProjectsItemProps = {
    item: Project;
    config: Config;
    callback: () => void;
    fixedWidth?: number;
};


function ProjectsItem({ item, config, callback, fixedWidth }: ProjectsItemProps): JSX.Element {
    if (!item.thumbnail) {
        return (
            <div className={styles.ProjectsItem}>no thumbnail</div>
        );
    }

    let imageSize = config?.imageSize || numberFromPx(getStyleVariable('--default-content-width'));
    let ratio = config?.ratio || Number(getStyleVariable('--default-image-ratio'));

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