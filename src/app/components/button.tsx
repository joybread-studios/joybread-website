import Link from "next/link";
import { useState } from "react";

interface ButtonProps {
    href: string;
    className?: string;
    withBorder?: boolean;
    children?: React.ReactNode;
}

const Button : React.FC<ButtonProps> = ({href, className, withBorder = false, children}) => {
    const combinedClassName = `font-bold ${className} ${withBorder ? 'fill-button' : ''}`

    return (
        <Link href={href} className={combinedClassName}>{children}</Link>
    )
}

export default Button;