import styles from './Logo.module.css';

type LogoProps = {
    children: JSX.Element;
};


function Logo({ children }: LogoProps): JSX.Element {
    return (
        <div className={styles.Logo}>
            {children}
        </div>
    );
}

export default Logo;