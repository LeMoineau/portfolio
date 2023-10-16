import Link from 'next/link'
import React from 'react'

export default function CustomLink({
    children,
    href,
    noblank,
    decoration,
}: {
    children: React.ReactNode
    href: string
    noblank?: boolean
    decoration?: boolean
}) {
    return (
        <Link
            href={href}
            className={decoration ? 'text-blue-700' : ''}
            target={noblank ? undefined : '_blank'}
        >
            {children}
        </Link>
    )
}
