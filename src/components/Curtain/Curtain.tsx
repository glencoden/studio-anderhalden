import styles from './Curtain.module.css';
import cx from 'classnames';

type CurtainProps = {
    open: boolean;
    onOpen?: () => void;
    onClose?: () => void;
};


function Curtain({ open, onOpen, onClose }: CurtainProps): JSX.Element {
    return (
        <>
            <div
                className={cx(`${styles.Curtain} ${styles.left}`, {
                    [styles.open]: open,
                    [styles.closed]: !open
                })}
            />
            <div
                className={cx(`${styles.Curtain} ${styles.right}`, {
                    [styles.open]: open,
                    [styles.closed]: !open
                })}
                onTransitionEnd={() => {
                    if (open) {
                        if (typeof onOpen !== 'function') {
                            return;
                        }
                        onOpen();
                    } else {
                        if (typeof onClose !== 'function') {
                            return;
                        }
                        onClose();
                    }
                }}
            />
        </>
    );
}

export default Curtain;