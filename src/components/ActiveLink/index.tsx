import Link, { LinkProps } from "next/link";
import { ReactElement} from "react";

interface ActiveLinkProps extends LinkProps {
    children: ReactElement
}

export function ActiveLink({ children, ...rest }: ActiveLinkProps) {
    return (
        <Link {...rest}>
            {children}
        </Link>
    )
}