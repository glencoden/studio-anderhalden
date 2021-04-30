import { InfoBlock, Config } from '../../lib/apiService/parser';
import styles from './Info.module.css';
import InfoItem from './InfoItem/InfoItem';
import { isMobile, isPortrait, getStyleVariable, numberFromPx } from '../../lib/helpers';

type InfoProps = {
    items: Array<InfoBlock>;
    config: Config;
    open: boolean;
    onOpen?: () => void;
};


function Info({ items, config, open, onOpen }: InfoProps): JSX.Element {
    let width = Math.round(Math.min(
        (config?.imageSize || numberFromPx(getStyleVariable('--default-content-width'))),
        (window.innerWidth / 2))
    );

    if (isMobile() && isPortrait()) {
        width = window.innerWidth - (2 * numberFromPx(getStyleVariable('--padding-medium')));
    }

    return (
        <div
            className={styles.Info}
            style={{ width: `${width}px` }}
        >
            <div
                className={`${styles.infoCurtain} ${open ? styles.isOpen : styles.isClosed}`}
                onAnimationEnd={() => {
                    if (open) {
                        if (typeof onOpen !== 'function') {
                            return;
                        }
                        onOpen();
                    }
                }}
            >
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