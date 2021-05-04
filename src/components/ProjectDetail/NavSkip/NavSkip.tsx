import styles from './NavSkip.module.css';
import Button from '../../Button/Button';


function NavSkip(): JSX.Element {
    return (
        <div className={styles.NavSkip}>
            <Button label="<" />
            <Button label=">" />
        </div>
    );
}

export default NavSkip;