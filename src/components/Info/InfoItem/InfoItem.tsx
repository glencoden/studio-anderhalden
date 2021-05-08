import { InfoBlock } from '../../../lib/apiService';
import styles from './InfoItem.module.css';
import Image from '../../Image/Image';
import RichText from '../../RichText/RichText';
import { getStyleVariable, isMobile, numberFromPx } from '../../../lib/helpers';

type InfoItemProps = {
    item: InfoBlock;
    width: number;
};


function InfoItem({ item, width }: InfoItemProps): JSX.Element {
    const padding = isMobile()
        ? numberFromPx(getStyleVariable('--padding-medium'))
        : numberFromPx(getStyleVariable('--padding-large'));
    return (
        <div
            className={styles.InfoItem}
            style={{ width: `${width}px` }}
        >
            {!!item.images.length && (
                <Image width={width - (2 * padding)} ratio={1.6} {...item.images[0]} />
            )}
            {item.text && (
                <RichText entry={item.text} size="l" />
            )}
        </div>
    );
}

export default InfoItem;