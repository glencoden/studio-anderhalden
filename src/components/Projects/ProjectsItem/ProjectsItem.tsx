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

    let width = getThumbnailWidth(config);
    let ratio = getImageRatio(config);

    if (item.thumbnail.file.width === item.thumbnail.file.height) {
        width = Math.round(width / ratio);
        ratio = 1;
    }

    if (item.thumbnail.file.width < item.thumbnail.file.height) {
        const prevWidth = width;
        const padding = numberFromPx(getStyleVariable('--padding-medium'));

        width = Math.round(width / ratio);
        ratio = width / (prevWidth - (4 * padding));
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
            {/*{isMobile() && (
                <h4
                    className={styles.title}
                    style={{ width: `${width}px` }}
                >
                    {item.title}
                </h4>
            )}*/}
        </div>
    );
}

export default ProjectsItem;