import React from 'react'
import BackgroundText from './BackgroundText'

export default function StackTag({
    children,
    className,
}: {
    children: string | React.ReactNode
    className?: string
}) {
    return (
        <BackgroundText bg="bg-sky-200" className={`rounded-full ${className}`}>
            {children}
        </BackgroundText>
    )
}
