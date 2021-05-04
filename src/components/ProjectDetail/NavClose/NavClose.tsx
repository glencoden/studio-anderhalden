import styles from './NavClose.module.css';
import Button from '../../Button/Button';

type NavCloseProps = {
    onClose: () => void;
    numProjects?: number;
    currentIndex?: number;
};


function NavClose({ onClose, numProjects, currentIndex }: NavCloseProps): JSX.Element {
    return (
        <div className={styles.NavClose}>
            <Button
                label="x"
                cta={() => {
                    console.log('happens');// TODO remove dev code
                    onClose();
                }}
            />
        </div>
    );
}

export default NavClose;