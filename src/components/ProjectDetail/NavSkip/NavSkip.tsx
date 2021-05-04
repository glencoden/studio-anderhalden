import styles from './NavSkip.module.css';
import Button from '../../Button/Button';

type NavSkipProps = {
    selectPrev: () => void;
    selectNext: () => void;
};


function NavSkip({ selectPrev, selectNext }: NavSkipProps): JSX.Element {
    return (
        <div className={styles.NavSkip}>
            <Button
                label="<"
                cta={selectPrev}
            />
            <Button
                label=">"
                cta={selectNext}
            />
        </div>
    );
}

export default NavSkip;