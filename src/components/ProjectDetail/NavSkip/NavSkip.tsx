import styles from './NavSkip.module.css';
import Button from '../../Button/Button';
import { ArrowLeft, ArrowRight } from '../../Icons/Arrows';

type NavSkipProps = {
    selectPrev: () => void;
    selectNext: () => void;
};


function NavSkip({ selectPrev, selectNext }: NavSkipProps): JSX.Element {
    return (
        <div className={styles.NavSkip}>
            <Button
                className={styles.selectPrev}
                label={<ArrowLeft/>}
                cta={selectPrev}
            />
            <Button
                label={<ArrowRight/>}
                cta={selectNext}
            />
        </div>
    );
}

export default NavSkip;