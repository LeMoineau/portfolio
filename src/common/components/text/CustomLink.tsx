import React from 'react'
import { Link } from 'react-router-dom'

export default function CustomLink({
    children,
    href,
    noblank,
    decoration,
    className,
    dontScrollTop,
}: {
    children: React.ReactNode
    href: string
    noblank?: boolean
    decoration?: boolean
    className?: string
    dontScrollTop?: boolean
}) {
    return (
        <Link
            to={href}
            className={`${decoration ? 'text-blue-700' : ''} ${className}`}
            target={noblank ? undefined : '_blank'}
            onClick={() =>
                noblank &&
                (!dontScrollTop || dontScrollTop === undefined) &&
                window.scrollTo(0, 0)
            }
        >
            {children}
        </Link>
    )
}
