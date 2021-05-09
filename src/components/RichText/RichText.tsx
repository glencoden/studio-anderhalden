import { EntryFields } from 'contentful';
import { useRef, useEffect } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styles from './RichText.module.css';
import cx from 'classnames';
import { addTargetBlankToRichText } from '../../lib/helpers';

const Sizes = {
    L: 'l',
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
    const ref = useRef(null);

    useEffect(() => {
        if (!ref.current) {
            return;
        }
        // @ts-ignore
        addTargetBlankToRichText(ref.current);
    }, [ entry ]);

    return (
        <div
            ref={ref}
            className={cx(styles.RichText, {
                [styles.largeSize]: size === Sizes.L,
                [styles.mediumSize]: size === Sizes.M,
                [styles.smallSize]: size === Sizes.S
            })}
        >
            {renderRichText(entry)}
        </div>
    );
}

export default RichText;