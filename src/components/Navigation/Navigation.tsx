type NavigationProps = {
    navElement: string
};

function Navigation({ navElement }: NavigationProps): JSX.Element {
    return (
        <div>{navElement}</div>
    );
}

export default Navigation;