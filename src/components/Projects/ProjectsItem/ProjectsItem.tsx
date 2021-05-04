import { Project, Config } from '../../../lib/apiService/parser';
import styles from './ProjectsItem.module.css';
import { getContentWidth, getStyleVariable } from '../../../lib/helpers';

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

    let ratio = config?.ratio || Number(getStyleVariable('--default-image-ratio'));

    let width = getContentWidth(config);

    if (item.thumbnail.file.width < item.thumbnail.file.height) {
        ratio = 1 / ratio;
    }

    if (ratio < 1) {
        width = Math.round(width * ratio);
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