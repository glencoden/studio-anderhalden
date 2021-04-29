import { Project } from '../../../lib/apiService/parser';
import styles from './ProjectListItem.module.css';
import Image from '../../Image/Image';

type ProjectListItemProps = {
    item: Project;
};


function ProjectListItem({ item }: ProjectListItemProps): JSX.Element {
    if (!item.thumbnail) {
        return <div className={styles.ProjectListItem} />;
    }
    return (
        <div className={styles.ProjectListItem}>
            <Image width={640} ratio={1.6} id={item.thumbnail.id} title={item.title} url={item.thumbnail.url} />
        </div>
    );
}

export default ProjectListItem;