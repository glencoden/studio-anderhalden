import styles from './Navigation.module.css';

type NavigationProps = {
    children: JSX.Element | Array<JSX.Element>
};

function Navigation({ children }: NavigationProps): JSX.Element {
    return (
        <div className={styles.Navigation}>
            {children}
        </div>
    );
}

export default Navigation;