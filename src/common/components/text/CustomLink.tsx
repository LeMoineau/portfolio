import Link from 'next/link'
import React from 'react'

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
            href={href}
            className={`${decoration ? 'text-blue-700' : ''} ${className}`}
            target={noblank ? undefined : '_blank'}
        >
            {children}
        </Link>
    )
}
