import { InfoBlock, Config } from '../../lib/apiService/parser';
import styles from './Info.module.css';
import InfoItem from './InfoItem/InfoItem';
import { isMobile, isPortrait } from '../../lib/helpers';

type InfoProps = {
    items: Array<InfoBlock>;
    config: Config
};

const paddingMedium = 10; // TODO get from config


function Info({ items, config }: InfoProps): JSX.Element {
    let fixedWidth = 0;

    if (isMobile() && isPortrait()) {
        fixedWidth = window.innerWidth - (2 * paddingMedium);
    }

    return (
        <div className={styles.Info}>
            {items.map((item, index) => (
                <InfoItem
                    key={index}
                    item={item}
                    config={config}
                    fixedWidth={fixedWidth}
                />
            ))}
        </div>
    );
}

export default Info;