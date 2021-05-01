import { EntryFields } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styles from './RichText.module.css';
import cx from 'classnames';

const Sizes = {
    M: 'm',
    S: 's'
};

const Size = Object.values(Sizes);

type RichTextProps = {
    entry: EntryFields.RichText;
    size: typeof Size[number];
};

function renderRichText(entry: EntryFields.RichText) {
    // @ts-ignore
    return documentToReactComponents(entry);
}


function RichText({ entry, size }: RichTextProps): JSX.Element {
    return (
        <div
            className={cx(styles.RichText, {
                [styles.mediumSize]: size === Sizes.M,
                [styles.smallSize]: size === Sizes.S
            })}
        >
            {renderRichText(entry)}
        </div>
    );
}

export default RichText;