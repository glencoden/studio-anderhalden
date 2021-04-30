import styles from './Button.module.css';

type ButtonProps = {
    label: string;
    className?: string;
    active?: boolean;
    disabled?: boolean;
    cta?: () => void;
};


function Button({ label, className, disabled, active, cta }: ButtonProps): JSX.Element {
    const classNames = [ styles.Button ];
    if (className) {
        classNames.push(className);
    }
    if (active) {
        classNames.push(styles.active);
    }
    if (disabled) {
        classNames.push(styles.disabled);
    }
    return (
        <button
            className={classNames.join(' ')}
            onClick={() => {
                if (disabled || typeof cta !== 'function') {
                    return;
                }
                cta();
            }}
        >
            {label}
        </button>
    );
}

export default Button;