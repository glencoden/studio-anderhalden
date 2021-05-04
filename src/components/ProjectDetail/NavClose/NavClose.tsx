import styles from './NavClose.module.css';
import Button from '../../Button/Button';


function NavClose(): JSX.Element {
    return (
        <div className={styles.NavClose}>
            <Button label="x" />
        </div>
    );
}

export default NavClose;