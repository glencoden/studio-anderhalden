import styles from './Navigation.module.css';
import cx from 'classnames';

type NavigationProps = {
    isMobileNav?: boolean;
    mobileNavIndex?: number;
    children: JSX.Element | Array<JSX.Element>;
};


function Navigation({ isMobileNav, mobileNavIndex = -1, children }: NavigationProps): JSX.Element {
    if (mobileNavIndex > -1 && Array.isArray(children)) {
        children = children.slice(mobileNavIndex, mobileNavIndex + 1);
    }

    return (
        <>
            <div
                className={cx(styles.Navigation, {
                    [styles.mobileNav]: isMobileNav
                })}
            >
                {children}
            </div>
            {isMobileNav && (
                <div className={styles.spacer} />
            )}
        </>
    );
}

export default Navigation;