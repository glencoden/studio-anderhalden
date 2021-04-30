import { Config, InfoBlock } from '../../../lib/apiService/parser';
import styles from './InfoItem.module.css';
import Image from '../../Image/Image';
import RichText from '../../RichText/RichText';

type InfoItemProps = {
    item: InfoBlock;
    config: Config;
    fixedWidth?: number;
};

const paddingMedium = 10; // TODO get from config
const defaultWidth = 640; // TODO get from config


function InfoItem({ item, config, fixedWidth }: InfoItemProps): JSX.Element {
    let imageSize = config?.imageSize || defaultWidth;
    let width = 0;

    if (fixedWidth) {
        width = fixedWidth;
    } else {
        width = Math.round(Math.min(imageSize, (window.innerWidth / 2)));
    }

    return (
        <div
            className={styles.InfoItem}
            style={{ width: `${width}px` }}
        >
            {!!item.images.length && (
                <Image width={width - (2 * paddingMedium)} ratio={1.6} {...item.images[0]} />
            )}
            {item.text && (
                <RichText entry={item.text} size="m" />
            )}
        </div>
    );
}

export default InfoItem;