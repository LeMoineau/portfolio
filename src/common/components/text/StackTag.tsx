import React from 'react'
import BackgroundText from './BackgroundText'

export default function StackTag({
    children,
}: {
    children: string | React.ReactNode
}) {
    return (
        <BackgroundText bg="bg-sky-200" className="rounded-full">
            {children}
        </BackgroundText>
    )
}
