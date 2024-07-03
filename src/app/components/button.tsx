import Link from "next/link";

interface ButtonProps {
    href: string;
    className?: string;
    withBorder?: boolean;
    children?: React.ReactNode;
}

const Button : React.FC<ButtonProps> = ({href, className, withBorder = false, children}) => {
    const combinedClassName = `font-bold text-base 2xl:text-2xl ${className} ${withBorder ? 'fill-button' : ''}`

    return (
        <Link href={href} className={combinedClassName} scroll={true}>{children}</Link>
    )
}

export default Button;