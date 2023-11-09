import React from 'react'
import { Link } from 'react-router-dom'

export default function CustomLink({
    children,
    href,
    noblank,
    decoration,
    className,
}: {
    children: React.ReactNode
    href: string
    noblank?: boolean
    decoration?: boolean
    className?: string
}) {
    return (
        <Link
            to={href}
            className={`${decoration ? 'text-blue-700' : ''} ${className}`}
            target={noblank ? undefined : '_blank'}
        >
            {children}
        </Link>
    )
}
