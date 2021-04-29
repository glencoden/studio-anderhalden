type LogoProps = {
    label: string;
};

function Logo({ label }: LogoProps): JSX.Element {
    return (
        <div>
            {label}
        </div>
    );
}

export default Logo;