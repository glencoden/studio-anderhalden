import styles from './Button.module.css';
import cx from 'classnames';

type ButtonProps = {
    label: string | JSX.Element;
    active?: boolean;
    disabled?: boolean;
    cta?: () => void;
    stopPropagation?: boolean;
    className?: string;
};


function Button({ label, active, disabled, cta, stopPropagation, className = '' }: ButtonProps): JSX.Element {
    return (
        <button
            className={cx(styles.Button, {
                [className]: className,
                [styles.active]: active,
                [styles.disabled]: disabled
            })}
            onClick={event => {
                if (stopPropagation) {
                    event.stopPropagation();
                }
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