import styles from './Curtain.module.css';

type CurtainProps = {
    open: boolean;
};


function Curtain({ open }: CurtainProps): JSX.Element {
    return (
        <>
            <div
                className={`${styles.Curtain} ${styles.left}`}
                style={{ [open ? 'transform' : '']: 'translateX(0)' }}
            />
            <div
                className={`${styles.Curtain} ${styles.right}`}
                style={{ [open ? 'transform' : '']: 'translateX(0)' }}
            />
        </>
    );
}

export default Curtain;