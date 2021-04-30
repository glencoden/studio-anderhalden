import { Page } from '../../store';
import styles from './PageBox.module.css';
import cx from 'classnames';

type PageBoxProps = {
    page: Page;
    target: Page;
    selected: Page;
    children: JSX.Element;
};

let prevSelected = '';


function PageBox({ page, target, selected, children }: PageBoxProps): JSX.Element {
    if (prevSelected !== selected) {
        window.scroll(0, 0);
        prevSelected = selected;
    }

    return (
        <div
            className={cx(styles.PageBox, {
                [styles.isTarget]: page === target,
                [styles.isSelected]: page === selected
            })}
        >
            {children}
        </div>
    );
}

export default PageBox;