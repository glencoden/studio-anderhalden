import styles from './Button.module.css';

type ButtonProps = {
    label: string;
    className?: string;
    active?: boolean;
    disabled?: boolean;
    callback?: () => void;
};


function Button({ label, className, disabled, active, callback }: ButtonProps): JSX.Element {
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
                if (disabled || typeof callback !== 'function') {
                    return;
                }
                callback();
            }}
        >
            {label}
        </button>
    );
}

export default Button;