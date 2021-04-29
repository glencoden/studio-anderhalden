import { EntryFields } from 'contentful';
import { InfoBlock } from '../../lib/apiService/parser';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styles from './Info.module.css';
import Image from '../Image/Image';

type InfoProps = {
    items: Array<InfoBlock>;
};

function renderRichText(text: EntryFields.RichText) {
    // @ts-ignore
    return documentToReactComponents(text);
}


function Info({ items }: InfoProps): JSX.Element {
    return (
        <div className={styles.Info}>
            {items.map((item, index) => (
                <div key={index}>
                    {!!item.images.length && (
                        <Image width={640} ratio={1.6} {...item.images[0]} />
                    )}
                    {item.text && renderRichText(item.text)}
                </div>
            ))}
            {}
        </div>
    );
}

export default Info;