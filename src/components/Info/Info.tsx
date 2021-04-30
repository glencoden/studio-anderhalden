import { InfoBlock } from '../../lib/apiService/parser';
import styles from './Info.module.css';

import Image from '../Image/Image';
import RichText from '../RichText/RichText';

type InfoProps = {
    items: Array<InfoBlock>;
};


function Info({ items }: InfoProps): JSX.Element {
    return (
        <div className={styles.Info}>
            {items.map((item, index) => (
                <div key={index}>
                    {!!item.images.length && (
                        <Image width={640} ratio={1.6} {...item.images[0]} />
                    )}
                    {item.text && (
                        <RichText entry={item.text} size="m" />
                    )}
                </div>
            ))}
        </div>
    );
}

export default Info;