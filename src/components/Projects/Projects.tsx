import { ActionCreator } from '../../store';
import { Project, Config } from '../../lib/apiService/parser';
import { AsyncDispatch } from '../../lib/hooks/useAsyncReducer';
import styles from './Projects.module.css';
import { isMobile, isPortrait } from '../../lib/helpers';
import ProjectListItem from './ProjectListItem/ProjectListItem';

type ProjectsProps = {
    items: Array<Project>;
    config: Config;
    dispatch: AsyncDispatch<any>
    setProjectId: ActionCreator;
};


function Projects({ items, config, dispatch, setProjectId }: ProjectsProps): JSX.Element {
    const isMobilePortrait = isMobile() && isPortrait();
    return (
        <div className={styles.Projects}>
            <div className={styles.centerLine} />
            {items.map((item, index) => (
                <ProjectListItem
                    key={index}
                    item={item}
                    config={config}
                    callback={() => dispatch(setProjectId(item.id))}
                    isMobilePortrait={isMobilePortrait}
                />
            ))}
        </div>
    );
}

export default Projects;