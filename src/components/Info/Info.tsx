import { useState, useEffect } from 'react';
import { InfoBlock, Config } from '../../lib/apiService';
import styles from './Info.module.css';
import cx from 'classnames';
import { getStyleVariable, isMobile, isPortrait, numberFromPx } from '../../lib/helpers';

import InfoItem from './InfoItem/InfoItem';

type InfoProps = {
    items: Array<InfoBlock>;
    config: Config;
    open: boolean;
    onOpen?: () => void;
    onClose?: () => void;
};


function Info({ items, config, open, onOpen, onClose }: InfoProps): JSX.Element {
    const [ isTransitioning, setIsTransitioning ] = useState(false);

    useEffect(() => setIsTransitioning(true), [ open ]);

    let width = Math.round(Math.min(
        (config?.imageSize || numberFromPx(getStyleVariable('--default-content-width'))),
        (window.innerWidth / 2))
    );
    if (isMobile() && isPortrait()) {
        width = window.innerWidth;
    }

    return (
        <div
            className={styles.Info}
            style={{ width: `${width}px` }}
        >
            <div
                className={cx(styles.infoCurtainBox, {
                    [styles.isTransitioning]: isTransitioning,
                    [styles.isOpen]: open,
                    [styles.isClosed]: !open
                })}
                onAnimationEnd={() => {
                    setIsTransitioning(false);
                    if (open) {
                        if (typeof onOpen !== 'function') {
                            return;
                        }
                        onOpen();
                    } else {
                        if (typeof onClose !== 'function') {
                            return;
                        }
                        onClose();
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