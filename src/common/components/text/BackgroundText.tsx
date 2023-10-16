import React from 'react'

export default function BackgroundText({
    children,
    className,
    bg,
}: {
    children?: React.ReactNode
    className?: string
    bg: string
}) {
    return (
        <p className={`${className} ${bg} px-2 py-1 text-xs mx-1 my-1`}>
            {children}
        </p>
    )
}
