import { Project, Config } from '../../../lib/apiService/parser';
import styles from './ProjectsItem.module.css';
import { getContentWidth, getImageRatio, isMobile } from '../../../lib/helpers';

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

    let width = getContentWidth(config);
    let ratio = getImageRatio(config);

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
            {isMobile() && (
                <h4
                    className={styles.title}
                    style={{ width: `${width}px` }}
                >
                    {item.title}
                </h4>
            )}
        </div>
    );
}

export default ProjectsItem;