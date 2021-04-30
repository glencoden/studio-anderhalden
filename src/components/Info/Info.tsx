import { InfoBlock, Config } from '../../lib/apiService/parser';
import styles from './Info.module.css';
import InfoItem from './InfoItem/InfoItem';
import { isMobile, isPortrait } from '../../lib/helpers';

type InfoProps = {
    items: Array<InfoBlock>;
    config: Config;
    open: boolean;
};

const paddingMedium = 10; // TODO get from config
const defaultWidth = 640; // TODO get from config


function Info({ items, config, open }: InfoProps): JSX.Element {
    let width = Math.round(Math.min((config?.imageSize || defaultWidth), (window.innerWidth / 2)));

    if (isMobile() && isPortrait()) {
        width = window.innerWidth - (2 * paddingMedium);
    }

    return (
        <div
            className={styles.Info}
            style={{ width: `${width}px` }}
        >
            <div className={`${styles.infoCurtain} ${open ? styles.isOpen : styles.isClosed}`}>
                {items.map((item, index) => (
                    <InfoItem
                        key={index}
                        item={item}
                        width={width}
                    />
                ))}
            </div>
        </div>
    );
}

export default Info;