import React from 'react'

export default function Title({
    children,
    className,
}: {
    children: React.ReactNode
    className?: string
}) {
    return (
        <h1 className={`${className} md:text-2xl text-lg font-medium`}>
            {children}
        </h1>
    )
}
