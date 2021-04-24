import styles from './Button.module.css';

type ButtonProps = {
    label: string;
    className?: string;
    active?: boolean;
    callback?: () => void;
};

function Button({ label, className, active, callback = () => {} }: ButtonProps): JSX.Element {
    const classNames = [ styles.Button ];
    if (className) {
        classNames.push(className);
    }
    if (active) {
        classNames.push(styles.active);
    }
    return (
        <button
            className={classNames.join(' ')}
            onClick={() => callback()}
        >
            {label}
        </button>
    );
}

export default Button;