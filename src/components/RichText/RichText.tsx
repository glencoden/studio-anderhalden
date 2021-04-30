import { EntryFields } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styles from './RichText.module.css';

const Sizes = {
    M: 'm',
    S: 's'
};

const Size = Object.values(Sizes);

type RichTextProps = {
    entry: EntryFields.RichText;
    size: typeof Size[number];
};

const sizeClass = {
    [Sizes.M]: styles.mediumSize,
    [Sizes.S]: styles.smallSize
};

function renderRichText(entry: EntryFields.RichText) {
    // @ts-ignore
    return documentToReactComponents(entry);
}


function RichText({ entry, size }: RichTextProps): JSX.Element {
    return (
        <div className={`${styles.RichText} ${sizeClass[size]}`}>
            {renderRichText(entry)}
        </div>
    );
}

export default RichText;