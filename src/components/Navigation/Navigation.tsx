import Button from '../Button/Button';

type NavigationProps = {
    navElements: Array<string>
};

function Navigation({ navElements }: NavigationProps): JSX.Element {
    return (
        <div>
            {navElements.map((navElement, index) => (
                <Button label={navElement} active={!!index} />
            ))}
        </div>
    );
}

export default Navigation;