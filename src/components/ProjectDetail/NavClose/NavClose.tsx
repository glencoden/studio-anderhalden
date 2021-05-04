import styles from './NavClose.module.css';
import { isMobile } from '../../../lib/helpers';
import Button from '../../Button/Button';
import CloseIcon from '../../Icons/CloseIcon';

type NavCloseProps = {
    onClose: () => void;
    numProjects?: number;
    currentIndex?: number;
};


function NavClose({ onClose, numProjects, currentIndex }: NavCloseProps): JSX.Element {
    return (
        <div className={styles.NavClose}>
            {!isMobile() && typeof numProjects === 'number' && typeof currentIndex === 'number' && (
                <div className={styles.counter}>
                    {`${currentIndex + 1}/${numProjects}`}
                </div>
            )}
            <Button
                className={styles.close}
                label={<CloseIcon/>}
                cta={() => onClose()}
            />
        </div>
    );
}

export default NavClose;