import { InfoBlock } from '../../../lib/apiService/parser';
import styles from './InfoItem.module.css';
import Image from '../../Image/Image';
import RichText from '../../RichText/RichText';
import { getStyleVariable, numberFromPx } from '../../../lib/helpers';

type InfoItemProps = {
    item: InfoBlock;
    width: number;
};


function InfoItem({ item, width }: InfoItemProps): JSX.Element {
    return (
        <div
            className={styles.InfoItem}
            style={{ width: `${width}px` }}
        >
            {!!item.images.length && (
                <Image width={width - (2 * numberFromPx(getStyleVariable('--padding-large')))} ratio={1.6} {...item.images[0]} />
            )}
            {item.text && (
                <RichText entry={item.text} size="m" />
            )}
        </div>
    );
}

export default InfoItem;