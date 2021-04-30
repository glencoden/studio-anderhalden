import styles from './Curtain.module.css';

type CurtainProps = {
    open: boolean;
    onOpen?: () => void;
    onClose?: () => void;
};


function Curtain({ open, onOpen, onClose }: CurtainProps): JSX.Element {
    return (
        <>
            <div
                className={`${styles.Curtain} ${styles.left}`}
                style={{ [open ? 'transform' : '']: 'translateX(0)' }}
            />
            <div
                className={`${styles.Curtain} ${styles.right}`}
                style={{ [open ? 'transform' : '']: 'translateX(0)' }}
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